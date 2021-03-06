var Updater_HolderReg = /\u001f/g;
var Updater_ContentReg = /\u001f(\d+)\u001f/g;
var Updater_AttrReg = /([\w\-]+)(?:=(["'])([\s\S]+?)\2)?/g;
var Updater_UpdateNode = function(node, view, updatedNodes, one, renderData, updateAttrs, updateTmpl, viewId) {
    var id = node.id || (node.id = G_Id());
    if (!updatedNodes[id]) {
        //console.time('update:' + id);
        updatedNodes[id] = 1;

        var hasMagixView, viewValue, vf;
        if (updateAttrs) {
            var attr = Tmpl(one.attr, renderData);
            var nowAttrs = {};
            attr.replace(Updater_AttrReg, function(match, name, q, value) {
                nowAttrs[name] = value;
            });
            for (var i = one.attrs.length - 1, a, n, old, now; i >= 0; i--) {
                a = one.attrs[i];
                n = a.n;
                if (a.v) {
                    hasMagixView = 1;
                    viewValue = nowAttrs[n];
                } else {
                    old = a.p ? node[n] : node.getAttribute(n);
                    now = nowAttrs[n];
                    if (old != now) {
                        if (a.p) {
                            node[n] = a.b ? G_Has(nowAttrs, n) : now;
                        } else if (now) {
                            node.setAttribute(n, now);
                        } else {
                            node.removeAttribute(n);
                        }
                    }
                }
            }
        }
        if (hasMagixView) {
            vf = Vframe_Vframes[id];
            if (vf) {
                vf[viewValue ? 'unmountView' : 'unmountVframe']();
            }
        }
        if (updateTmpl) {
            view.setHTML(id, Tmpl(one.tmpl, renderData).replace(Updater_HolderReg, viewId));
        }
        if (hasMagixView && viewValue) {
            view.owner.mountVframe(id, viewValue);
        }
    }
};
var Updater_UpdateDOM = function(host, changed, updateFlags, renderData) {
    var vf = Vframe_Vframes[host.$i];
    var view = vf && vf.$v;
    if (!view) return;
    var tmplObject = view.tmpl;
    var tmpl = tmplObject.html;
    var list = tmplObject.subs;
    var selfId = view.id;
    if (changed || !host.$rd) {
        if (host.$rd && updateFlags && list) {
            var updatedNodes = {},
                keys;
            var one, updateTmpl, updateAttrs;

            for (var i = list.length - 1, update, q, mask, m; i >= 0; i--) { //keys
                updateTmpl = 0;
                updateAttrs = 0;
                one = list[i];
                update = 1;
                mask = one.mask;
                keys = one.pKeys;
                if (keys) {
                    q = keys.length;
                    while (--q >= 0) {
                        if (G_Has(updateFlags, keys[q])) {
                            update = 0;
                            break;
                        }
                    }
                }
                if (update) {
                    keys = one.keys;
                    q = keys.length;
                    update = 0;
                    while (--q >= 0) {
                        if (G_Has(updateFlags, keys[q])) {
                            update = 1;
                            if (!mask || (updateTmpl && updateAttrs)) {
                                updateTmpl = one.tmpl;
                                updateAttrs = one.attr;
                                break;
                            }
                            m = mask.charAt(q);
                            updateTmpl = updateTmpl || m & 1;
                            updateAttrs = updateAttrs || m & 2;
                        }
                    }
                    if (update) {
                        var nodes = $(one.path.replace(Updater_HolderReg, selfId));
                        q = 0;
                        while (q < nodes.length) {
                            Updater_UpdateNode(nodes[q++], view, updatedNodes, one, renderData, updateAttrs, updateTmpl, selfId);
                        }
                    }
                }
            }
        } else {
            var map,
                tmplment = function(m, guid) {
                    return map[guid].tmpl;
                },
                x;
            if (list) {
                if (!list.$) { //process once
                    list.$ = map = {};
                    x = list.length;
                    while (x > 0) {
                        var s = list[--x];
                        if (s.s) {
                            map[s.s] = s;
                            s.tmpl = s.tmpl.replace(Updater_ContentReg, tmplment);
                            delete s.s;
                        }
                    }
                }
                map = list.$;
            }
            host.$rd = 1;
            var str = tmpl.replace(Updater_ContentReg, tmplment);
            view.setHTML(selfId, Tmpl(str, renderData).replace(Updater_HolderReg, selfId));
        }
    }
};
/*
function observe(o, fn) {
  function buildProxy(prefix, o) {
    return new Proxy(o, {
      set(target, property, value) {
        // same as before, but add prefix
        fn(prefix + property, value);
        target[property] = value;
      },
      get(target, property) {
        // return a new proxy if possible, add to prefix
        let out = target[property];
        if (out instanceof Object) {
          return buildProxy(prefix + property + '.', out);
        }
        return out;  // primitive, ignore
      },
    });
  }

  return buildProxy('', o);
}

let x = {'model': {name: 'Falcon'}};
let p = observe(x, function(property, value) { console.info(property, value) });
p.model.name = 'Commodore';

 */
/**
 * 使用mx-keys进行局部刷新的类
 * @constructor
 * @name Updater
 * @class
 * @beta
 * @module updater
 * @param {String} viewId Magix.View对象Id
 * @borrows Event.on as #on
 * @borrows Event.fire as #fire
 * @borrows Event.off as #off
 * @property {Object} $data 存放数据的对象
 */
var Updater = function(viewId) {
    var me = this;
    me.$i = viewId;
    me.$data = {};
    /*#if(modules.updaterSetState){#*/
    me.$keys = {};
    /*#}else{#*/
    me.$json = {};
    /*#}#*/
};
var UP = Updater.prototype;
G_Mix(UP, Event);
G_Mix(UP, {
    /**
     * @lends Updater#
     */
    /**
     * 获取放入的数据
     * @param  {String} [key] key
     * @return {Object} 返回对应的数据，当key未传递时，返回整个数据对象
     * @example
     * render: function() {
     *     this.$updater.set({
     *         a: 10,
     *         b: 20
     *     });
     * },
     * 'read&lt;click&gt;': function() {
     *     console.log(this.$updater.get('a'));
     * }
     */
    get: function(key) {
        var result = this.$data;
        if (key) result = result[key];
        return result;
    },
    /**
     * 获取放入的数据
     * @param  {Object} obj 待放入的数据
     * @return {Updater} 返回updater
     * @example
     * render: function() {
     *     this.$updater.set({
     *         a: 10,
     *         b: 20
     *     });
     * },
     * 'read&lt;click&gt;': function() {
     *     console.log(this.$updater.get('a'));
     * }
     */
    set: function(obj) {
        var me = this;
        /*#if(modules.updaterSetState){#*/
        for (var p in obj) {
            me.$u = 1;
            me.$keys[p] = 1;
            me.$data[p] = obj[p];
        }
        /*#}else{#*/
        G_Mix(me.$data, obj);
        /*#}#*/
        return me;
    },
    /**
     * 检测数据变化，更新界面，放入数据后需要显式调用该方法才可以把数据更新到界面
     * @example
     * render: function() {
     *     this.$updater.set({
     *         a: 10,
     *         b: 20
     *     }).digest();
     * }
     */
    digest: function() {
        var me = this;
        var data = me.$data;
        var changed, keys;
        /*#if(modules.updaterSetState){#*/
        changed = me.$u;
        keys = me.$keys;
        /*#}else{#*/
        keys = {};
        var json = me.$json;
        var val, key, valJSON, lchange;
        for (key in data) {
            val = data[key];
            lchange = 0;
            valJSON = JSONStringify(val);
            if (!G_Has(json, key)) {
                json[key] = valJSON;
                lchange = 1;
            } else {
                lchange = valJSON != json[key];
                json[key] = valJSON;
            }
            if (lchange) {
                keys[key] = changed = 1;
            }
        }
        /*#}#*/
        Updater_UpdateDOM(me, changed, keys, data);
        if (changed) {
            me.fire('changed', {
                keys: keys
            });
            delete me.$lss;
        }
        /*#if(modules.updaterSetState){#*/
        me.$u = 0;
        me.$keys = {};
        /*#}#*/
        return me;
    },
    /**
     * 获取当前数据状态的快照，配合altered方法可获得数据是否有变化
     * @return {Updater} 返回updater
     * @example
     * render: function() {
     *     this.$updater.set({
     *         a: 20,
     *         b: 30
     *     }).digest().snapshot(); //更新完界面后保存快照
     * },
     * 'save&lt;click&gt;': function() {
     *     //save to server
     *     console.log(this.$updater.altered()); //false
     *     this.$updater.set({
     *         a: 20,
     *         b: 40
     *     });
     *     console.log(this.$updater.altered()); //true
     *     this.$updater.snapshot(); //再保存一次快照
     *     console.log(this.$updater.altered()); //false
     * }
     */
    snapshot: function() {
        var me = this,
            d = me.$data;
        me.$ss = JSONStringify(d);
        return me;
    },
    /**
     * 检测数据是否有变动
     * @return {Boolean} 是否变动
     * @example
     * render: function() {
     *     this.$updater.set({
     *         a: 20,
     *         b: 30
     *     }).digest().snapshot(); //更新完界面后保存快照
     * },
     * 'save&lt;click&gt;': function() {
     *     //save to server
     *     console.log(this.$updater.altered()); //false
     *     this.$updater.set({
     *         a: 20,
     *         b: 40
     *     });
     *     console.log(this.$updater.altered()); //true
     *     this.$updater.snapshot(); //再保存一次快照
     *     console.log(this.$updater.altered()); //false
     * }
     */
    altered: function() {
        var me = this,
            d = me.$data;
        if (me.$ss) { //存在快照
            // if (!me.$lss) me.$lss = JSONStringify(d); //不存在比较的快照，生成
            return me.$ss != JSONStringify(d); //比较2次快照是否一样
        }
        return 1;
    }


    /**
     * 当数据有变化且调用digest更新时触发
     * @name Updater#changed
     * @event
     * @param {Object} e
     * @param {String} e.keys 指示哪些key被更新
     */
});