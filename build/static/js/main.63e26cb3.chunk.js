(this.webpackJsonppricegun=this.webpackJsonppricegun||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),c=(a(31),a(9)),s=a.n(c),u=a(11),m=a(12),i=a(13),h=a(8),p=a(14),E=a(15),g=(a(33),a(24)),d=a(25),y=a(16),b=a(7),C=a(22),f=a(6),v=a(5),x=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={hoursPerWeek:10,hostingDollarsPerMonthFixed:100,hostingDollarsPerMonthVariable:100,conversionRate:.1,opportunityCostDollarsPerYear:1e5,margin:.2,numUsers:1e3},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleChange({target:""}),n}return Object(i.a)(a,[{key:"handleChange",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.target.name,e.next="margin"===e.t0?3:"conversionRate"===e.t0?5:7;break;case 3:case 5:return a=Number(t.target.value)/100,e.abrupt("break",8);case 7:a=Number(t.target.value);case 8:return e.next=10,this.setState(Object(C.a)({},t.target.name,a));case 10:n=this.state.opportunityCostDollarsPerYear/12*(this.state.hoursPerWeek/40),r=this.state.hostingDollarsPerMonthFixed+this.state.hostingDollarsPerMonthVariable/1e3*this.state.numUsers,l=(n+r)/this.state.numUsers,o=l*(1/this.state.conversionRate)*(1+this.state.margin),this.props.onFormChange({monthlyRate:Math.floor(n),monthlyCosts:Math.floor(r),costPerUser:Math.floor(l),pricePerUser:Math.floor(o)});case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"How many hours per week do you work on it?"),r.a.createElement(f.a.Control,{type:"text",placeholder:"10",name:"hoursPerWeek",onChange:this.handleChange,autoFocus:!0})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"What are your ",r.a.createElement("b",null,"fixed")," costs?"),r.a.createElement(v.a,null,r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,null,"$")),r.a.createElement(f.a.Control,{type:"text",placeholder:"100",name:"hostingDollarsPerMonthFixed",onChange:this.handleChange}),r.a.createElement(v.a.Append,null,r.a.createElement(v.a.Text,null,"per month"))),r.a.createElement(f.a.Text,null,"i.e. how much would it cost you to stay online even with zero users?")),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"What are your ",r.a.createElement("b",null,"variable")," costs, per 1k users?"),r.a.createElement(v.a,null,r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,null,"$")),r.a.createElement(f.a.Control,{type:"text",placeholder:"100",name:"hostingDollarsPerMonthVariable",onChange:this.handleChange}),r.a.createElement(v.a.Append,null,r.a.createElement(v.a.Text,null,"per month")))),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"What percentage of users will pay?"),r.a.createElement(v.a,null,r.a.createElement(f.a.Control,{type:"text",placeholder:"10",name:"conversionRate",onChange:this.handleChange}),r.a.createElement(v.a.Append,null,r.a.createElement(v.a.Text,null,"%")))),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"How much do you make at your traditional job?"),r.a.createElement(v.a,null,r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,null,"$")),r.a.createElement(f.a.Control,{type:"text",placeholder:"100000",name:"opportunityCostDollarsPerYear",onChange:this.handleChange}),r.a.createElement(v.a.Append,null,r.a.createElement(v.a.Text,null,"per year")))),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"What margins do you want?"),r.a.createElement(v.a,null,r.a.createElement(f.a.Control,{type:"text",placeholder:"20",name:"margin",onChange:this.handleChange}),r.a.createElement(v.a.Append,null,r.a.createElement(v.a.Text,null,"%")))),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Label,null,"How many users will you have?"),r.a.createElement(v.a,null,r.a.createElement(f.a.Control,{type:"text",placeholder:"1000",name:"numUsers",onChange:this.handleChange}),r.a.createElement(v.a.Append,null,r.a.createElement(v.a.Text,null,"users"))),r.a.createElement(f.a.Text,null,"Whether paying or non-paying.")))}}]),a}(r.a.Component),w=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={monthlyRate:0,monthlyCosts:0,costPerUser:0,pricePerUser:0},n.handleFormChange=n.handleFormChange.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"handleFormChange",value:function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({monthlyRate:t.monthlyRate,monthlyCosts:t.monthlyCosts,costPerUser:t.costPerUser,pricePerUser:t.pricePerUser});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{className:"pb-0",style:{backgroundColor:"#fafafa"}},r.a.createElement(y.a,null,r.a.createElement(b.a,{md:12,className:"text-center"},r.a.createElement("img",{src:"logo.png",width:"300",alt:"Pricegun logo"}),r.a.createElement("p",null,"Estimate how much to charge for your SaaS side project.",r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("i",null,"No information leaves your computer.")))))),r.a.createElement(d.a,null,r.a.createElement(y.a,null,r.a.createElement(b.a,{md:6},r.a.createElement(x,{onFormChange:this.handleFormChange})),r.a.createElement(b.a,{md:6,className:"text-center"},r.a.createElement("h5",null,"You should charge users"),r.a.createElement("h1",null,"$",this.state.pricePerUser.toLocaleString(navigator.language,{minimumFractionDigits:0,maximumFractionDigits:0})," per month"),r.a.createElement("h5",null,"Explanation:"),"Your rate: $",this.state.monthlyRate.toLocaleString(navigator.language,{minimumFractionDigits:0,maximumFractionDigits:0})," per month",r.a.createElement("br",null),"Your project's costs: $",this.state.monthlyCosts.toLocaleString(navigator.language,{minimumFractionDigits:0,maximumFractionDigits:0})," per month",r.a.createElement("br",null),"User cost: ",this.state.costPerUser<1?"< $1 ":"$".concat(this.state.costPerUser.toLocaleString(navigator.language,{minimumFractionDigits:0,maximumFractionDigits:0})," "),"per user per month",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("i",null,r.a.createElement("small",null,"Unknown whether your product is worth this to your users.",r.a.createElement("br",null),"That part is up to you. :)",r.a.createElement("br",null),"Read ",r.a.createElement("a",{href:"https://amzn.to/2YEkAMu"},"How to Price Effectively")," for more."))),r.a.createElement("div",{className:"mx-auto my-5"},r.a.createElement("small",null,r.a.createElement("i",null,"by Ben Carlsson @ ",r.a.createElement("a",{href:"https://twos.dev"},"twos.dev")))))),r.a.createElement(y.a,null,r.a.createElement(b.a,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.63e26cb3.chunk.js.map