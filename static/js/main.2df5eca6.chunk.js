(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),r=a.n(o),c=(a(15),a(4)),i=a(5),l=a(7),m=a(6),u=a(8),f=a(1),d=(a(17),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).fSubmit=function(e){e.preventDefault(),console.log("fn call");var t=a.state.datas,n=a.refs.name.value,s=a.refs.address.value;if(0===a.state.act){var o={name:n,address:s};t.push(o),a.setState({datas:t})}else{var r=a.state.index;t[r].name=n,t[r].address=s}a.setState({datas:t,act:0}),a.refs.myForm.reset(),console.log(a.state.datas)},a.fRemove=function(e){var t=a.state.datas;t.splice(e,1),a.setState({datas:t}),a.refs.myForm.reset()},a.fEdit=function(e){var t=a.state.datas[e];a.refs.name.value=t.name,a.refs.address.value=t.address,a.setState({act:1,index:e})},a.state={title:"CRUD Application",act:0,index:"",datas:[]},a.fSubmit=a.fSubmit.bind(Object(f.a)(Object(f.a)(a))),a.fRemove=a.fRemove.bind(Object(f.a)(Object(f.a)(a))),a.fEdit=a.fEdit.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.datas;return s.a.createElement("div",{className:"App"},s.a.createElement("h2",null,this.state.title),s.a.createElement("form",{ref:"myForm",className:"myForm"},s.a.createElement("input",{type:"text",ref:"name",placeholder:"Your Name",className:"formField",autoFocus:!0}),s.a.createElement("input",{type:"text",ref:"address",placeholder:"Your Address",className:"formField"}),s.a.createElement("button",{onClick:function(t){return e.fSubmit(t)},className:"myButton"},"submit")),s.a.createElement("ul",null,console.log("datas",t),t.map(function(t,a){return s.a.createElement("li",{key:a,className:"myList"},a+1,".",t.name," , ",t.address,s.a.createElement("button",{onClick:function(){return e.fRemove(a)},className:"myListButton"},"remove"),s.a.createElement("button",{onClick:function(){return e.fEdit(a)},className:"myListButton"},"edit"))})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.2df5eca6.chunk.js.map