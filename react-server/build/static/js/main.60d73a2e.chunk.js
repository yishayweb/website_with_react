(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports=n(238)},138:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(49),c=n.n(r),i=n(8),s=n(5),l=n(108),u=n(17),p=n(18),m=n(20),h=n(19),d=n(21),g=n(22),b=n.n(g),f=n(31),v=n(26),y=n(29),j=n.n(y),O=n(53),E=function(e){return function(){var t=Object(O.a)(j.a.mark(function t(n){var a;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(localStorage.getItem("user_token")),a={headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user_token")}},b.a.get("/users/me",a).then(function(t){var n=t.data;200===t.status&&(console.log(n),e(!0))}).catch(function(t){console.log(t),e(!1)});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},k=(n(138),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={isLoggedIn:"unknown"},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.props.isLoggedIn(function(t){return e.loginValidatorCallback(t)})},1e3)}},{key:"componentDidUpdate",value:function(e,t){t.isLoggedIn&&!this.state.isLoggedIn&&this.props.history.push("/")}},{key:"loginValidatorCallback",value:function(e){e?this.setState({isLoggedIn:!0}):this.props.history.push("/")}},{key:"logOut",value:function(){var e=this,t={headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user_token")}};b.a.get("/users/logout",t).then(function(t){var n=t.data;200===t.status&&(console.log(n),e.setState({isLoggedIn:!1}))}).catch(function(e){console.log(e)})}},{key:"sendEmail",value:function(){var e={headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("user_token")}};b.a.post("/users/sendEmail",{},e).then(function(e){var t=e.data;200===e.status&&console.log(t)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return console.log(this.props.user),"unknown"===this.state.isLoggedIn?o.a.createElement("div",{className:"landing-main-div"},"Loading..."):o.a.createElement("div",{className:"landing-main-div"},"Landing",o.a.createElement("button",{onClick:function(){return e.sendEmail()}},"Send Email"),o.a.createElement("button",{onClick:function(){return e.logOut()}},"Log Out"))}}]),t}(a.Component));var w=Object(i.b)(function(e){return{user:e.user}},{isLoggedIn:E})(k),I=n(240),S=n(239),C=function(e){var t=e.input,n=e.label,a=e.type,r=e.meta,c=r.touched,i=r.error;return o.a.createElement("div",null,o.a.createElement("label",null,n),o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,{type:a,placeholder:n})),c&&i&&o.a.createElement("span",null,i)))},x=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"onSubmit",value:function(e){console.log("submitted"),console.log(e),this.props.signup(e,this.props.history)}},{key:"render",value:function(){var e=this,t=this.props.handleSubmit;return o.a.createElement("form",{onSubmit:t(this.onSubmit.bind(this))},o.a.createElement(I.a,{name:"name",label:"Name",type:"text",component:C}),o.a.createElement(I.a,{name:"email",label:"Email",type:"text",component:C}),o.a.createElement(I.a,{name:"password",label:"Password",type:"text",component:C}),o.a.createElement(I.a,{name:"age",label:"Age",type:"text",component:C}),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"Submit"),o.a.createElement("button",{type:"button",onClick:function(){return e.props.switchForm()}},"Login")))}}]),t}(a.Component);var L=Object(S.a)({form:"signupForm",destroyOnUnmount:!1})(Object(i.b)(function(){return{}},{signup:function(e,t){return function(){var n=Object(O.a)(j.a.mark(function n(a){var o;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.post("/users",e,{headers:{"Content-Type":"application/json"}});case 3:o=n.sent,console.log(o),201===o.status&&(a({type:"signup",payload:o.data.token}),t.push("/home"),localStorage.setItem("user_token",o.data.token)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}},n,null,[[0,8]])}));return function(e){return n.apply(this,arguments)}}()}})(Object(v.e)(x))),F=function(e){var t=e.input,n=e.label,a=e.type,r=e.meta,c=r.touched,i=r.error;return o.a.createElement("div",null,o.a.createElement("label",null,n),o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,{type:a,placeholder:n})),c&&i&&o.a.createElement("span",null,i)))},A=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"onSubmit",value:function(e){console.log("submitted"),console.log(e),this.props.login(e,this.props.history)}},{key:"render",value:function(){var e=this,t=this.props.handleSubmit;return o.a.createElement("form",{onSubmit:t(this.onSubmit.bind(this))},o.a.createElement(I.a,{name:"email",label:"Email",type:"text",component:F}),o.a.createElement(I.a,{name:"password",label:"Password",type:"text",component:F}),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"Submit"),o.a.createElement("button",{type:"button",onClick:function(){return e.props.switchForm()}},"Signup")))}}]),t}(a.Component);var J=Object(S.a)({form:"loginForm",destroyOnUnmount:!1})(Object(i.b)(function(){return{}},{login:function(e,t){return function(){var n=Object(O.a)(j.a.mark(function n(a){var o;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.post("/users/login",e,{headers:{"Content-Type":"application/json"}});case 3:o=n.sent,console.log(o),200===o.status&&(a({type:"login",payload:o.data.token}),t.push("/home"),localStorage.setItem("user_token",o.data.token)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}},n,null,[[0,8]])}));return function(e){return n.apply(this,arguments)}}()}})(Object(v.e)(A))),T=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={login:!0},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return this.state.login?o.a.createElement(J,{switchForm:function(){return e.setState({login:!1})}}):o.a.createElement(L,{switchForm:function(){return e.setState({login:!0})}})}}]),t}(a.Component);var z=Object(i.b)(function(e){return{user:e.user}},{isLoggedIn:E})(T),_=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"onButtonClick",value:function(){var e={headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDc3YTI1ZjFkODFiYjJmMjAyODFiYWYiLCJpYXQiOjE1NjgxMjE0Mzl9._zZzaepxO2ddT8MELCJ4Mm6V9wvfniosg042xyFEPUE"}};b.a.get("/users/me",e).then(function(e){var t=e.data;200===e.status&&console.log(t)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f.a,null,o.a.createElement("div",null,o.a.createElement(v.a,{exact:!0,path:"/",component:z}),o.a.createElement(v.a,{exact:!0,path:"/home",component:w}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(74),M=n(241),N=Object(s.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signup":case"login":return Object(B.a)({},e,{token:t.payload});default:return e}},form:M.a}),D=Object(s.d)(N,{},Object(s.a)(l.a));c.a.render(o.a.createElement(i.a,{store:D},o.a.createElement(_,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.60d73a2e.chunk.js.map