(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(73)},44:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),l=a.n(o),c=(a(44),a(9)),i=a(10),s=a(13),u=a(11),m=a(14),h=(a(45),a(36)),p=a(15),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("p",null,"Welcome to your fridge (user)"))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Item"},"Item",r.a.createElement("p",null,"This is the item (user)"))}}]),t}(n.Component),f=a(33),E=a(75),g=a(78),j=a(77),O=a(76),w=a(34),v=a.n(w),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),v.a.post("http://localhost:4000/register",{username:a.state.email,password:a.state.password}).then(function(e){return console.log(e.data)}),a.setState({email:"",password:"",confirm:""})},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.id,e.target.value))},a.state={email:"",password:"",confirm:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"validate",value:function(){return this.state.password.length>0&&this.state.email.length>0&&this.state.password===this.state.confirm}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(E.a,{controlId:"email",bssize:"large"},r.a.createElement(g.a,null,"Email"),r.a.createElement(j.a,{autoFocus:!0,type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement(E.a,{controlId:"password",bssize:"large"},r.a.createElement(g.a,null,"Create Password"),r.a.createElement(j.a,{type:"password",onChange:this.handleChange,value:this.state.password})),r.a.createElement(E.a,{controlId:"confirm",bssize:"large"},r.a.createElement(g.a,null,"Confirm Password"),r.a.createElement(j.a,{type:"password",onChange:this.handleChange,value:this.state.confirm})),r.a.createElement(O.a,{block:!0,type:"submit",bssize:"large",disabled:!this.validate()},"Register")))}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},"Log In",r.a.createElement("p",null,"Enter your username"),r.a.createElement("p",null,"Enter your password"),r.a.createElement("p",null,"login"))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:I},"Fridge"),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/login",component:C}),r.a.createElement(p.a,{path:"/register",component:y}),r.a.createElement(p.a,{path:"/items/:id",component:b}),r.a.createElement(p.a,{path:"*",component:d}))))}}]),t}(n.Component),I={background:"#ccccff",color:"#ffffff",padding:"5px",bottomMargin:"5px"},S=k;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.56639ffc.chunk.js.map