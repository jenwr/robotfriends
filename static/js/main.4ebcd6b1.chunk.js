(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},19:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(2),i=n.n(l),o=(n(13),n(3)),c=n(4),m=n(6),s=n(5),u=n(7),h=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map(function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})}))},b=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))},g=[{id:1,name:"Mabel Bell",username:"Mabel",email:"mabel@bell.net"},{id:2,name:"Stephen Hawking",username:"Stephen",email:"stephen@physicsex.com"},{id:3,name:"Clementine Churchill",username:"Clementine",email:"clem@kansascitycanal.com"},{id:4,name:"Thomas Edison",username:"Tom",email:"tom@menlopark.com"},{id:5,name:"Wilbur Wright",username:"Wil",email:"wil@cycles.com"},{id:6,name:"Orville Wright",username:"Orv",email:"orv@cycles.com"},{id:7,name:"Nikola Tesla",username:"Nikola",email:"nik@oscillators.com"},{id:8,name:"Alexander Bell",username:"Alec",email:"alec.bell@bell.net"},{id:9,name:"George Westinghouse",username:"George",email:"george@westinghouse.com"},{id:10,name:"Mark Twain",username:"Mark",email:"sam@clemons.com"},{id:11,name:"JP Morgan",username:"JP",email:"jp@morgan.net"}],p=(n(15),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:g,searchfield:""},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robots.filter(function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(d,{robots:a}))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.4ebcd6b1.chunk.js.map