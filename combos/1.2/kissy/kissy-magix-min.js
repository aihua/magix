/*!Magix 1.2 Licensed MIT*/(function(e,t,r,n,i,a,o,s,f,u){u=1,f=function(e){return e.id||(e.id="mx_n_"+u++)},s.add("magix/magix",function(r){var o=[].slice,s=/\/\.(?:\/|$)|\/[^\/]+?\/\.{2}(?:\/|$)|\/\/+|\.{2}\//,f=/\/[^\/]*$/,c=/[#?].*$/,h=/([^=&?\/#]+)=?([^&#?]*)/g,m=/\?|(?!^)=/,l=/^https?:\/\//i,v="/",d="vframe",g=t.console,p=g&&g.error,$={tagName:d,rootId:"magix_vf_root",coded:1,error:p?function(e){g.error(e)}:n},x=$.hasOwnProperty,y=function(e,t){return e&&x.call(e,t)},w=function(t){return function(r,n,i){switch(arguments.length){case 0:i=t;break;case 1:i=I._o(r)?_(t,r):y(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],i=n):t[r]=i=n}return i}},b=function(e,t){return t.f-e.f||t.t-e.t},M=function(e,t){var r=this;return r.get?(r.c=[],r.b=0|t||5,r.x=r.b+(e||20)):r=new M(e,t),r},_=function(e,t,r,n){for(n in t)r&&y(r,n)||(e[n]=t[n]);return e};_(M.prototype,{get:function(e){var t,r=this,n=r.c;return e=i+e,y(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=u++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var n=this,a=n.c,o=i+e,s=a[o];if(!y(a,o)){if(a.length>=n.x){a.sort(b);for(var f=n.b;f--;)s=a.pop(),s.f>0&&n.del(s.o)}s={o:e},a.push(s),a[o]=s}return s.v=t,s.f=1,s.t=u++,s.m=r,t},del:function(e){e=i+e;var t=this.c,r=t[e];r&&(r.f=-1,r.v=a,delete t[e],r.m&&(k(r.m,r.o,r),r.m=a))},has:function(e){return y(this.c,i+e)}});var q=M(40),C=M(),k=function(e,t,r,n,i,a){for(I._a(e)||(e=[e]),t&&(I._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){$.error(o)}return i},V=function(e,t,r){if($.coded)try{r=decodeURIComponent(r)}catch(n){}V.p[t]=r},I={mix:_,has:y,tryCall:k,config:w($),start:function(e){var t=this;_($,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,i){$=_($,i,e),$["!tnc"]=$.tagName!=d,r.on("!ul",n.loc),r.on("changed",n.loc),t.use($.extensions||$.exts,r.start)})},keys:Object.keys||function(e){var t,r=[];for(t in e)y(e,t)&&r.push(t);return r},local:w({}),path:function(e,t){var r,n=e+i+t,o=C.get(n),u=a;if(!C.has(n)){for(l.test(e)&&(r=e.indexOf(v,8),0>r&&(r=e.length),u=e.slice(0,r),e=e.slice(r)),e=e.replace(c,a).replace(f,v),(l.test(t)||t.charAt(0)==v)&&(e=a),o=e+t;s.test(o);)o=o.replace(s,v);C.set(n,o=u+o)}return o},toObject:function(e){var t,r,n=q.get(e);return n||(V.p=t={},r=e.replace(c,a),m.test(r)&&(r=a),e.replace(r,a).replace(h,V),q.set(e,n=[r,t])),{path:n[0],params:_({},n[1])}},toUrl:function(e,t,r){var n,i,a,o=[];for(i in t)n=t[i],(!r||n||y(r,i))&&($.coded&&(n=encodeURIComponent(n)),a=1,o.push(i+"="+n));return a&&(e=(e&&e+(m.test(e)?"&":"?"))+o.join("&")),e},toMap:function(e,t){var r,n,i,a={},o=arguments.length>1;if(e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[o?n[t]:n]=o?n:(0|a[n])+1;return a},cache:M};return _(I,{use:function(e,t){r.use(e&&e+a,function(e){t&&t.apply(e,o.call(arguments,1))})},_s:r.isString,_a:r.isArray,_f:r.isFunction,_o:r.isObject})}),s.add("magix/event",function(e,t){var r=t.tryCall,n={fire:function(e,t,n,a){var o=i+e,s=this,f=s[o];if(f){t||(t={}),t.type||(t.type=e);for(var u,c,h=f.length,m=h-1;h--;)u=a?h:m-h,c=f[u],(c.d||c.r)&&(f.splice(u,1),m--),c.d||r(c.f,t,s);n=n||0>m}n&&delete s[o]},on:function(e,t,n,a){var o=this,s=i+e,f=o[s]||(o[s]=[]),u={f:t},c=0|n;c!==n?(n&&n.on&&a&&(n.on(a,function(){u.r=1},r),n=0),u.r=n,f.push(u)):f.splice(c,0,u)},off:function(e,t){var r=i+e,n=this[r];if(n)if(t){for(var a,o=n.length-1;o>=0;o--)if(a=n[o],a.f==t&&!a.d){a.d=1;break}}else delete this[r]},once:function(e,t){this.on(e,t,r)}};return t.mix(t.local,n),n},{requires:["magix/magix"]}),s.add("magix/router",function(e,r,n,a){var s,f,u,c,h,m,l="",v="path",d="view",g=r.has,p=r.mix,$=r.keys,x=r.toUrl,y=r.toObject,w=r.config(),b=r.cache(),M=r.cache(),_=t.location,q=t.history,C={params:{},href:l},k=/(?:^https?:\/\/[^\/]+|#.*$)/gi,V=/^[^#]*#?!?/,I="params",P=function(e,t,r){if(e){r=this[I],e=(e+l).split(o);for(var n=0;e.length>n&&!(t=g(r,e[n]));n++);}return t},T=function(){return this[v]},U=function(){return this[d]},A=function(e,t,r,n){return r=this,n=r[I],arguments.length>1?n[e]=t:n[e]||l},O=function(e,t){var n,i,a,o;return f||(f={rs:w.routes||{},nf:w.unfoundView},a=w.defaultView,f.dv=a,o=w.defaultPath,n=f.rs,f.f=r._f(n),f.f||n[o]||!a||(n[o]=a),f[v]=o),e||(e=f[v]),n=f.rs,i=f.f?n.call(w,e,t):n[e],{view:i||f.nf||f.dv,path:e}},j=function(e,t){var r=e.href,n=t.href,a=r+i+n,o=M.get(a);if(!o){var s,f,u,c;o={isParam:P,isPath:T,isView:U,location:t,force:!e.get},o[d]=u,o[v]=u,o[I]=c={};var h,m,l=e[I],g=t[I],p=[v,d].concat($(l),$(g));for(h=p.length-1;h>=0;h--)m=p[h],1==h&&(l=e,g=t,c=o),f=l[m],u=g[m],f!=u&&(c[m]={from:f,to:u},s=1);M.set(a,o=[s,o])}return o},N=p({start:function(){u=w.edge,c=u&&q.pushState,h=u&&!c,m=c?"srcQuery":"srcHash",N.bind(c),N.route()},parse:function(e,t){e=e||_.href;var n,i,a,o,s,f,c=b.get(e);return c||(a=e.replace(k,l),o=e.replace(V,l),s=y(a),f=y(o),h&&(f[v]=r.path(_.pathname,f[v])),c={get:A,set:A,href:e,refHref:C.href,srcQuery:a,srcHash:o,query:s,hash:f,params:p(p({},s[I]),f[I])},b.set(e,c)),t&&!c[d]&&(i=c.hash[v]||u&&c.query[v],n=O(i,c),p(c,n)),c},route:function(){var e=N.parse(0,1),t=j(C,e);C=e,t[0]&&(s=e,N.fire("changed",t[1]))},navigate:function(e,t,n){if(s){!t&&r._o(e)&&(t=e,e=l);var i=y(e),a=s.query[I],o=i[I],f=i[v],d=s[v];if(p(o,t),f){if(f=r.path(d,f),h)for(var $ in a)g(a,$)&&!g(o,$)&&(o[$]=l)}else f=d,o=p(p({},s[I]),o);f=x(i[v]=f,o,u?v:a),f!=s[m]&&(c?(q[n?"replaceState":"pushState"](l,l,f),N.route()):(p(i,s,i),i.srcHash=f,N.fire("!ul",{loc:s=i}),f="#!"+f,n?_.replace(f):_.hash=f),N.did=1)}}},n);return N.bind=function(e){if(e){var r=location.href;a.on(t,"popstate",function(){var e=location.href==r;(N.did||!e)&&(N.did=1,N.route())})}else a.on(t,"hashchange",N.route)},N},{requires:["magix/magix","magix/event","event"]}),s.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o={},s={},f={},u=r.mix({all:function(){return o},add:function(e,t){i(o,e)||(o[e]=t,u.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var r=o[e];r&&(delete o[e],u.fire("remove",{vframe:r,fcc:t}))},loc:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(s,n),!r){a(f,e);var i=t.root(u,s,f);f.view?i.mountView(n.view):t.update(i)}}},n);return u},{requires:["magix/vframe","magix/magix","magix/event"]}),s.add("magix/vframe",function(t,n,i,a){var o,s,u,c,h,m,l,v,d,g,p,$=n.tryCall,x=[],y=n.mix,w=n.config(),b="mx-vframe",M=n.has,_="querySelectorAll",q="alter",C="created",k="object",V=function(e){return typeof e==k?e:r.getElementById(e)},I=function(e,t,n){return t=V(e),t&&(n=u?r[_]("#"+f(t)+h):t.getElementsByTagName(o)),n||x},P=function(e,t,r){if(e=V(e),t=V(t),e&&t)if(e!==t)try{r=m?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},T=function(e){if(e.cC==e.rC){var t=e.view;t&&!e.fcc&&(e.fcc=1,e.fca=0,t.fire(C),e.fire(C));var r=e.id,n=p.get(e.pId);n&&!M(n.rM,r)&&(n.rM[r]=n.cM[r],n.rC++,T(n))}},U=function(e,t){if(t||(t={}),!e.fca&&e.fcc){e.fcc=0;var r=e.view,n=e.id;r&&(e.fca=1,r.fire(q,t),e.fire(q,t));var i=p.get(e.pId);i&&M(i.rM,n)&&(i.rC--,delete i.rM[n],e._p||U(i,t))}},A=function(e,t){var r=this;r.id=e,r.cM={},r.cC=0,r.rC=0,r.sign=1,r.rM={},r.pId=t,p.add(e,r)};return A.root=function(t,n,i){if(!l){o=w.tagName,s=w["!tnc"],u=s&&r[_],h=" "+o+"["+b+"=true]",c=s&&!u;var a=r.body;m=a.contains,d=n,g=i,p=t;var f=w.rootId,v=V(f);v||(v=r.createElement(o),v.id=f,a.appendChild(v),v=e),l=new A(f)}return l},A.update=function(e){var t=e.view;if(e.viewInited&&t&&t.sign>0){var r=t.olChg(g);r&&t.render(g);for(var n,i=e.children(),a=0,o=i.length;o>a;a++)n=p.get(i[a]),n&&A.update(n)}},y(y(A.prototype,i),{mountView:function(e,t,r){var i=this,o=V(i.id);if(!i._a&&o&&(i._a=1,i._t=o.innerHTML),i.unmountView(r),i._d=0,e){i.path=e;var s=n.toObject(e),f=s.path,u=++i.sign;n.use(f,function(e){if(u==i.sign){a.prepare(e,p);var r=new e({owner:i,id:i.id,$:V,$i:P,path:f,vom:p,location:d});i.view=r;var n=function(e){i.mountZoneVframes(e.id)};r.on("interact",function(){r.hasTmpl||(o&&(o.innerHTML=i._t),n(V)),r.on("rendered",n),r.on("prerender",function(e){i.unmountZoneVframes(e.id,0,1)||U(i)})},0),r.load(y(s.params,t),g)}})}},unmountView:function(e){var t=this,r=t.view;if(r){v||(v={}),t._d=1,t.unmountZoneVframes(0,e,1),U(t,v),t.view=0,r.oust();var n=V(t.id);n&&t._a&&!e&&(n.innerHTML=t._t),t.viewInited=0,v=0}t.sign++},mountVframe:function(e,t,r,n,i){var a=this;a.fcc&&!n&&U(a);var o=p.get(e);return o||(M(a.cM,e)||a.cC++,a.cM[e]=1,o=new A(e,a.id)),o._p=n,o.mountView(t,r,i),o},mountZoneVframes:function(e,t,r,n){var i=this;e=e||i.id,i.unmountZoneVframes(e,n,1);var a=I(e),o=a.length,s={};if(o)for(var u,h,m,l,v=0;o>v;v++)if(u=a[v],h=f(u),!M(s,h)&&(m=u.getAttribute("mx-view"),l=c?u.getAttribute(b):1,l||m)){i.mountVframe(h,m,t,r,n);for(var d,g=I(u),p=0,$=g.length;$>p;p++)d=g[p],s[f(d)]=1}T(i)},unmountVframe:function(e,t,r){var n=this;e=e||n.id;var i=p.get(e);if(i){var a=i.fcc;i.unmountView(t),p.remove(e,a);var o=p.get(i.pId);o&&M(o.cM,e)&&(delete o.cM[e],o.cC--,r||T(o))}},unmountZoneVframes:function(e,t,r){var n,i,a=this,o=a.cM;for(i in o)(!e||P(i,e))&&a.unmountVframe(i,t,n=1);return r||a._d||T(a),n},parent:function(e){var t=this,r=t;for(e=e>>>0||1;r&&e--;)r=p.get(r.pId);return r},children:function(){return n.keys(this.cM)},invokeView:function(e,t){var r,n=this;if(n.viewInited){var i=n.view,a=i&&i[e];a&&(r=$(a,t||x,i))}return r}}),A},{requires:["magix/magix","magix/event","magix/view"]}),s.add("magix/view",function(s,u,c,h,m){var l,v={mouseenter:2,mouseleave:2},d=function(e,t,r,n,i,o){s.use("event",function(s,f){var u=v[t];o||2!=u?(u=n?"detach":I,f[u](e,t,r,i)):(u=(n?"un":a)+"delegate",f[u](e,t,"[mx-"+t+"]",r))})},g=u.tryCall,p=u.has,$=[],x=u.mix,y=0,w="destroy",b=u.cache(40),M=/(\w+)(?:<(\w+)>)?(?:\(({[\s\S]*})\))?/,_=/([$\w]+)<([\w,]+)>/,q={},C=r.body,k="parentNode",V=/\smx-(?!view|vframe)[a-z]+\s*=\s*"/g,I="on",P="",T=function(e,t){return function(){t=this,t.sign>0&&(t.sign++,t.fire("rendercall"),U(t),g(e,arguments,t))}},U=function(e,t){var r,n,i=e.$res;for(r in i)n=i[r],(t||n.x)&&A(i,r,1)},A=function(e,t,r){var n,i,a=e[t];a&&(n=a.e,i=n&&n[w],i&&g(i,$,n),(!a.k||r)&&delete e[t])},O=function(e,t){var r,n,i=e.$evts;for(r in i)N(r,t);for(i=e.$sevts,r=i.length;r-->0;)n=i[r],d(n.h,n.t,n.f,t,e,1)},j=function(t){if(t&&!t[I]){var r=t.target;t[I]=1;for(var n,a,o,s=r,u=t.type,c="mx-"+u,h=[];s&&1==s.nodeType&&(a=s.ei,!(a&&a[u]||(n=s.getAttribute(c))));)h.push(s),s=s[k];if(n){for(var m,v,d,$,x,y,w,_,q,C=n.split(P);C.length;)if(v=C.shift()){if(d=v.split(i),v=d.pop(),y=d[0],!y&&!m)for(w=s,_=l.all();w;){if(p(_,q=w.id)){s.setAttribute(c,(y=q)+i+n);break}w=w[k]}if(m=1,!y)throw Error("bad:"+v);if($=l.get(y),x=$&&$.view,x&&x.sign>0){t.currentId=f(s),t.targetId=f(r),t.prevent=t.preventDefault,t.stop=t.stopPropagation;var V=b.get(v);V||(V=v.match(M),V={n:V[1],f:V[2],i:V[3]},V.p=V.i&&g(Function("return "+V.i))||{},b.set(v,V));var T=V.n+i+u,U=x[T];U&&(t[V.f]&&t[V.f](),t.params=V.p,g(U,t,x))}}}else{for(;h.length;)o=h.pop(),a=o.ei||(o.ei={}),a[u]=1;o=e}s=r=e}},N=function(e,t){var r=0|q[e],n=r>0?1:0;r+=t?-n:n,r||(d(C,e,j,t),t||(r=1)),q[e]=r},S=function(e){var t=this;x(t,e),t.$ol={ks:[]},t.$res={},t.sign=1,g(S.$,e,t)},E=S.prototype,H={$win:t,$doc:r};S.$=[],S.prepare=function(e,t){if(!e[i]){e[i]=1,l=t;var r,n,a,s,f,u,c=e.prototype,h={},m=[];for(var v in c)if(r=c[v],n=v.match(_))for(a=n[1],s=n[2],s=s.split(o),f=s.length-1;f>-1;f--)n=s[f],u=H[a],u?m.push({n:a,t:n,h:u,f:r}):c[u=a+i+n]||(h[n]=1,c[u]=r);else"render"==v&&(c[v]=T(r));c.$evts=h,c.$sevts=m}},S.mixin=function(e,t){t&&S.$.push(t),x(E,e)},x(x(E,c),{render:n,navigate:h.navigate,init:n,hasTmpl:!0,wrapEvent:function(e,t){e+=a;var r=this.id+i;return e=t?[a].concat(e).join(P+r):e.replace(V,"$&"+r)},load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.tmpl=e.wrapEvent(n)),O(e),e.fire("interact",0,1),g(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(e){var t=this;t.sign>0&&t.rendered&&t.fire("prerender",{id:e||t.id})},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e||t.id}))},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setHTML:function(e,t){var r,n=this;n.beginUpdate(e),n.sign>0&&(r=n.$(e),r&&(r.innerHTML=t)),n.endUpdate(e)},observeLocation:function(e){var t,r=this;t=r.$ol,t.f=1;var n=t.ks;u._o(e)&&(t.pn=e.path,e=e.params),e&&(t.ks=n.concat((e+a).split(o)))},olChg:function(e){var t,r=this,n=r.$ol;return n.f&&(n.pn&&(t=e.path),t||(t=e.isParam(n.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(w,0,1,1),U(e,1),O(e,1)),e.sign--},inside:function(e,t){var r,n,i=this;for(t=(t+a).split(o),n=t.length-1;n>=0&&!(r=i.$i(e,t[n]));n--);return r},manage:function(e,t,r){var n=this,i=1,o=n.$res;e&&!u._s(e)&&(r=t,t=e,e=a),e?A(o,e):(i=0,e="res_"+y++);var s={k:i,e:t,x:r};return o[e]=s,t},getManaged:function(t,r){var n=this,i=n.$res,a=t?e:i;return t&&p(i,t)&&(a=i[t].e,r&&delete i[t]),a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e){A(this.$res,e,1)}});var R="?t="+s.now(),F=s.Env.mods,L={},Z={};return E.fetchTmpl=function(e,t){var r=this,n="tmpl"in r;if(n)t(r.tmpl);else if(p(L,e))t(L[e]);else{var i,a=F[e];a&&(i=a.uri||a.fullpath,i=i.slice(0,i.indexOf(e)+e.length));var o=i+".html",s=Z[o],f=function(r){t(L[e]=r)};s?s.push(f):(s=Z[o]=[f],m({url:o+R,complete:function(e,t){g(s,e||t),delete Z[o]}}))}},S.extend=function(t,r,n){var i=this;u._f(r)&&(n=r,r=e);var a=function(e){i.call(this,e),n&&n.call(this,e)};return a.extend=i.extend,s.extend(a,i,t,r)},S},{requires:["magix/magix","magix/event","magix/router","io"]}),s.add("magix/model",function(e,t){var r=t.has,o=t._o,s=t.toString,f="URL",c="FORM",h=function(){this.id="m"+u++},m=function(e){return function(n,a,s){var f,u,c,h=this,m=i+e;h[m]||(h[m]={}),c=h[m],t._f(n)&&(n=t.tryCall(n)),n&&!o(n)&&(f={},f[n]=a,n=f);for(u in n)s&&r(c,u)||(c[u]=n[u])}};return t.mix(h.prototype,{sync:n,getFormParams:function(){return this[i+c]},getUrlParams:function(){return this[i+f]},setFormParams:m(c),setUrlParams:m(f),get:function(e,t,r){var n=this,i=arguments.length,o=2==i,f=n.$attrs;if(i){for(var u=(e+a).split(".");f&&u[0];)f=f[u.shift()];u[0]&&(f=r)}return o&&s.call(t)!=s.call(f)&&(f=t),f},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),e){if(!o(e)){var n={};n[e]=t,e=n}for(var i in e)r.$attrs[i]=e[i]}},request:function(e,t){var r=this;r.sync(function(n,i){o(i)||(i={data:i}),r.set(i),e(n,t)})}}),h.extend=function(t,r,n){var i=this,a=function(){i.call(this),n&&n.call(this)};return e.extend(a,i,t,r)},h},{requires:["magix/magix"]}),s.add("magix/manager",function(r,n,s){var f=n.has,c=n.tryCall,h=n._a,m=n._f,l=1,v=2,d=4,g="formParams",p="urlParams",$=[g,p],x=Date.now||function(){return+new Date},y=t.JSON,w=n.mix,b=12e5,M=function(e,t,r,n){return t?m(e)&&r.push(M(c(e))):n=y?y.stringify(e):x(),n},_=function(e,t){for(var r,n=[M(t),M(e)],a=$.length-1;a>-1;a--)r=$[a],M(e[r],1,n),M(t[r],1,n);return M(e.key,1,n),n.join(i)},q=function(e){var t=e.cache;return t&&(t=t===!0?b:0|t),t},C=function(e){throw Error(e)},k=function(e,t,r){var i=this;i.$mClz=e,i.$mCache=n.cache(t,r),i.$mReqs={},i.$mMetas={},i.id="mm"+u++},V=function(e){var t=this;t.$host=e,t.$reqs={},t.sign=1,t.id="mr"+u++,t.$queue=[]},I=[].slice,P=function(e,t,r,n){var i=function(a){return e.apply(t,[r,n,a,i.ost])};return i},T=function(e,t){var r=t.b,n=t.a,i=n[r];if(i){var a=i.q;delete n[r],c(a,e,i.e)}},U=function(t,r,n,i){var a,o,s=this,f=r.a,u=r.c,h=r.d,m=r.g,g=r.i,p=r.j,$=r.k,y=r.l,w=r.m,b=r.n,M=r.o;r.b++,delete u[s.id];var _=s.$mm,q=_.key;if(h[t+1]=s,n)r.e=1,a=1,r.f=n,m.msg=n,m[t]=n,p.fire("fail",{model:s,msg:n}),o=1;else if(!g.has(q)){q&&g.set(q,s),_.time=x();var C=_.after;C&&c(C,s),_.cls&&p.clearCache(_.cls),p.fire("done",{model:s}),o=1}if(!f.$ost&&!i){if($==l){var k=y?w[t]:w;k&&(b[t+1]=c(k,[a?m:e,s,m],f))}else if($==v){M[t]={m:s,e:a,s:n};for(var V,I,P=M.i||0;V=M[P];P++)I=y?w[P]:w,V.e&&(m.msg=V.s,m[P]=V.s),b[P+1]=c(I,[V.e?m:e,V.m,m].concat(b),f);M.i=P}r.b==r.h&&(r.e||(m=e),b[0]=m,$==d&&(h[0]=m,b[1]=c(w,h,f)),f.$busy=0,f.doNext(b))}o&&p.fire("finish",{msg:n,model:s})},A=function(e,t,r,n,i){if(e.$ost)return e;if(e.$busy)return e.next(function(){A(this,t,r,n,i)});e.$busy=1,e.sign++;var a=e.$host,o=a.$mCache,s=a.$mReqs,u=e.$reqs;h(t)||(t=[t]);var c=t.length,m=[],l=h(r);l&&(m=Array(r.length));for(var v,d={a:e,b:0,c:e.$reqs,d:Array(c),g:{},h:c,i:o,j:a,k:n,l:l,m:r,n:m,o:[]},g=0;t.length>g;g++)if(v=t[g]){var p=a.getModel(v,i),$=p.entity,x=$.$mm.key,y=P(U,$,g,d);y.id=e.id,x&&f(s,x)?s[x].q.push(y):p.update?(u[$.id]=$,x&&(s[x]={q:[y],e:$},y=T),$.request(y,{a:s,b:x})):y()}else C("empty model");return e},O=function(e,t){return function(r,n){var i=I.call(arguments,1);return A(this,r,i.length>1?i:n,e,t)}};w(k,{create:function(e,t,r){return new k(e,t,r)}}),w(V.prototype,{fetchAll:function(e,t){return A(this,e,t,d)},save:function(e,t){return A(this,e,t,d,1)},fetchOrder:O(v),fetchOne:O(l),next:function(e){var t=this;return t.$ost||(t.$queue.push(e),t.doNext(t.$args)),t},doNext:function(e){var t=this;if(!t.$busy&&!t.$ost){t.$busy=1;var r=++t.sign;t.$ntId=setTimeout(function(){t.$busy=0,t.$args=e;var n,i=t.$queue,a=i.shift();a&&(n=c(a,e,t),r==t.sign&&t.doNext(n===i.$?e:[null,n]))},0)}},destroy:function(){var e=this;e.$ost=1,clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mReqs;for(var i in r){var a,o,s=r[i],u=s.$mm.key;if(u&&f(n,u)){a=n[u],o=a.q;for(var c,h=0;o.length>h;h++)c=o[h],c.id==e.id&&(c.ost=1)}}e.$reqs={},e.$queue=[],e.$busy=0}});var j=k.prototype;return w(w(j,s),{registerModels:function(e){var t=this,r=t.$mMetas;h(e)||(e=[e]);for(var n,i,a,o=0;e.length>o;o++)n=e[o],n&&(i=n.name,i?r[i]&&C("already exist:"+i):C("miss name"),a=q(n),a&&(n.cache=a),r[i]=n)},registerMethods:function(e){w(this,e)},create:function(e){var t=this,r=t.getMeta(e),n=q(e)||r.cache,i=new t.$mClz;i.set(r),i.$mm={name:r.name,after:r.after,cls:r.cleans,key:n&&_(r,e)},e.name&&i.set(e),i.setUrlParams(r[p]),i.setFormParams(r[g]),i.setUrlParams(e[p]),i.setFormParams(e[g]);var a=r.before;return a&&c(a,i),t.fire("start",{model:i}),i},getMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,i=r[n];return i||C("Unfound:"+n),i},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCached(e)),r||(n=1,r=i.create(e)),{entity:r,update:n}},createRequest:function(e,t,r){return e.manage(t,new V(this),3>arguments.length||r)},clearCache:function(e){var t=this,r=t.$mCache,i=r.list();e=n.toMap((e+a).split(o));for(var s=0;i.length>s;s++){var u=i[s],c=u.v,h=c&&c.$mm;h&&f(e,h.name)&&r.del(h.key)}},getCached:function(e){var t,r,n=this,i=n.$mCache,a=n.getMeta(e),o=q(e)||a.cache;if(o&&(r=_(a,e)),r){var s=n.$mReqs,f=s[r];f?t=f.e:(t=i.get(r),t&&o>0&&x()-t.$mm.time>o&&(i.del(r),t=0))}return t}}),k},{requires:["magix/magix","magix/event"]}),r.createElement("vframe")})(null,window,document,function(){},"","",",",KISSY);