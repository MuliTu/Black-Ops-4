(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(63),s=a.n(i),c=a(9),l=a(10),o=a(12),u=a(11),m=a(13),p=(a(70),a(72),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return"".concat(e.toString().split(".")[0],".").concat(e.toString().split(".")[1].slice(0,t))}),d=function(e){return["","https://image.ibb.co/ideMDA/L1.png","https://image.ibb.co/jFtgDA/L2.png","https://image.ibb.co/idRe0q/L3.png","https://image.ibb.co/jsoRfq/L4.png","https://image.ibb.co/cwviRV/L5.png","https://image.ibb.co/iRMe0q/L6.png","https://image.ibb.co/i9bq6V/L7.png","https://image.ibb.co/cPXK0q/L8.png","https://image.ibb.co/mZvHmV/L9.png","https://image.ibb.co/dzGe0q/L10.png"][e]},h=function(){return r.a.createElement("img",{className:"logo",src:"https://image.ibb.co/inYpYA/07ef4a2a-37ba-4f4d-8be6-1be1b61bc102.png",alt:"logo"})},f=function(e){return e.split("")[0].toUpperCase()+e.split("").slice(1).map(function(e){return e===e.toUpperCase()?" ".concat(e):e}).join("")},g=function(e){return r.a.createElement("div",{className:"small-card"},r.a.createElement("div",null,r.a.createElement("div",{className:"mall-card-top"},f(e.name)),r.a.createElement("div",{className:"small-card-context"},e.children),r.a.createElement("div",{className:"small-card-sub"},e.text," ")))},b=function(e){var t=e.data,a=e.filter,n=t.filter(function(e){return e.action.startsWith(a)});return r.a.createElement("div",null,r.a.createElement("h1",null,f(a)),r.a.createElement("div",{className:"table"},v(n).map(function(e,t){return r.a.createElement("div",{key:t,className:"table-line"},r.a.createElement("div",null,f(e.action).replace(f(a),"").length>0?f(e.action).replace(f(a),""):a),r.a.createElement("div",{className:"table-result"},Math.round(e.result)))})))},v=function(e){return e.sort(function(e,t){return t.result-e.result})},E="https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/",y=function(e){return e.json()},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"profile",a=t.match("matches")?"".concat(E).concat(e,"/").concat(t,"/mp/start/0/end/0/details"):"".concat(E).concat(e,"/").concat(t);return Promise.resolve(fetch(a).then(y))},D=(a(74),function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("i",{id:"loading",className:"fas fa-spinner"}),r.a.createElement("div",null,"Loading...")))}),j=(a(76),a(40)),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).refreshData=function(){a.setState({name:a.props.name,data:a.props.data,dates:a.props.dates,type:a.props.type})},a.normalizeDate=function(e){return e.map(function(e){return"".concat(new Date(1e3*e).toLocaleDateString("en-US")).concat(new Date(1e3*e).getHours(),":").concat(new Date(1e3*e).getMinutes())})},a.createDataForGraph=function(e,t,n){var r=a.normalizeDate(n);console.log(typeof r);for(var i=[],s=a.state.data?a.state.data.reduce(function(e,t){return e+t}):0,c=0;c<20;c++)i.push(s/20);return{labels:r.reverse(),datasets:[{type:"line",fill:!1,label:"Average",backgroundColor:"rgba(255, 255, 255,0.5)",borderColor:"rgba(255, 255, 255,0.5)",data:i,steppedLine:!1,lineTension:.6,pointRadius:0,pointHitRadius:10,borderDash:[3]},{type:"bar",fill:!1,borderDash:[],label:e.toUpperCase(),backgroundColor:"rgba(255,140,0)",borderColor:"rgb(255,140,0)",data:t,lineTension:.1,pointRadius:1,pointHitRadius:10}]}},a.getBar=function(e,t,n){var i=a.createDataForGraph(e,t,n);return r.a.createElement(j.a,{height:300,width:500,data:i,redraw:!0})},a.getPie=function(e,t,n){var i=a.createDataForPie(e,t,n);return r.a.createElement(j.b,{height:200,width:200,data:i,redraw:!0})},a.createDataForPie=function(e,t,a){return{labels:[t.action.toUpperCase(),a.action],datasets:[{data:[t.result,a.result],backgroundColor:["#b17a1a","#6d4c0c","#FFCE56"],hoverBackgroundColor:["#7e5812","#4a310d","#FFCE56"]}]}},a.state={name:"",data:[],dates:[],type:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshData()}},{key:"componentWillUpdate",value:function(e){this.props!==e&&this.refreshData()}},{key:"render",value:function(){var e=this.state.data,t=this.state.name,a=this.state.dates;return console.log("this is dates",a),r.a.createElement("div",null,this.state.type?this.state.type.match("line")?this.getBar(t,e,a):this.getPie(t,e,a):r.a.createElement(D,null))}}]),t}(r.a.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).refreshData=function(){var e=a.props.playerName;k(e,"matches").then(function(e){var t=e.data;a.setState({data:{killList:{data:t.matches.map(function(e){return e.playerStats.kills}),name:"kill"},ekiaList:{data:t.matches.map(function(e){return e.playerStats.ekia}),name:"ekia"},deathList:{data:t.matches.map(function(e){return e.playerStats.deaths}),name:"death"},assistsList:{data:t.matches.map(function(e){return e.playerStats.assists}),name:"assists"},ekiadRatioList:{data:t.matches.map(function(e){return e.playerStats.ekiadRatio}),name:"ekiadRatio"}},times:{data:t.matches.map(function(e){return e.utcStartSeconds})}})})},a.state={username:"",data:[],times:[],type:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(e){this.props.data!==e.data&&this.refreshData()}},{key:"componentDidMount",value:function(){this.refreshData()}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.data).map(function(t){return e.state.data[t]}),a=Object.keys(this.state.times).map(function(t){return e.state.times[t]})[0];return r.a.createElement("div",{className:"graph-container"},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(S,{name:e.name,dates:a,data:e.data,type:"line"}))}))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){k(e,"profile").then(function(e){var t=e.data,n=t.username,r=t.mp,i=r.level,s=r.prestige,c=t.mp.lifetime.all;a.setState({allData:Object.keys(c).map(function(e){return Object.assign({action:e,result:c[e]})}),playerStats:{username:n,level:i,prestige:s},page:"Team Deathmatch",array:[]})})},a.Top=function(){var e={backgroundImage:"url(".concat(d(a.state.playerStats.prestige),")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.a.createElement("div",{className:"top",style:e},r.a.createElement("div",{className:"left"},r.a.createElement("div",null,a.state.playerStats.username)),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"right-sub"},"Level: ",a.state.playerStats.level),r.a.createElement("div",{className:"right-sub"},"Prestige: ",a.state.playerStats.prestige)))},a.hardFilter=function(e,t){return e.filter(function(e){return e.action.split(" ").join("")===t})[0]},a.lifeTime=function(){var e=a.state.allData,t=e.map(function(e){return Object.assign({action:f(e.action),result:e.result})}),n=(e.map(function(e){return Object.assign({action:e.action,result:e.result})}),a.state.array),i=e.map(function(e){return Object.assign({action:f(e.action),result:e.result})}).filter(function(e){return"Per"===e.action.split(" ")[1]}),s=a.hardFilter(e,"ekia"),c=a.hardFilter(e,"deaths"),l=a.hardFilter(e,"wins"),o=a.hardFilter(e,"losses"),u=(a.hardFilter(e,"scoreCore"),a.hardFilter(e,"scorePerGame"),a.hardFilter(e,"scorePerMinute"),["scoreCore","scorePerGame","scorePerMinute"].map(function(t){return a.hardFilter(e,t)}));return r.a.createElement("div",{className:"middel"},r.a.createElement("div",{className:"card-wrapper"},n.map(function(e,a){return r.a.createElement("div",{className:"list-nest",key:a},r.a.createElement(b,{data:t,filter:e}))}),r.a.createElement(g,{name:"Ekia/Deaths",text:"Ratio ".concat(p(s.result/c.result))},r.a.createElement(S,{name:"test",data:s,dates:c,type:"pie"})),r.a.createElement(g,{name:"Wins/Losses",text:"Ratio ".concat(p(l.result/o.result))},r.a.createElement(S,{name:"test",data:l,dates:o,type:"pie"})),r.a.createElement("div",{className:"small-card-wrapper"},i.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(g,{name:e.action},p(e.result)))}))),u.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(g,{name:e.action},e.result))}))},a.pagesLabels=function(){return r.a.createElement("div",{className:"page-labels"},r.a.createElement("div",{style:"Team Deathmatch"===a.state.page?a.inPage():a.outPage(),onClick:function(){return a.setState({page:"Team Deathmatch"})}},"Life time"),r.a.createElement("div",{style:"Team Deathmatch"!==a.state.page?a.inPage():a.outPage(),onClick:function(){return a.setState({page:"BlackOut"})}},"Weekly"))},a.pages=function(e){switch(e){case"BlackOut":return r.a.createElement(N,{type:"mp",playerName:a.state.playerStats.username});default:return a.lifeTime()}},a.outPage=function(){return{marginLeft:"1px",border:"#fc6621 solid thin",borderRadius:"10px 10px 0 0",borderBottom:"#fc6621 solid thin",color:"#553400",backgroundColor:"#1b1b1b",shdowBox:"10px 10px 10px white",padding:"10px"}},a.inPage=function(){return{backgroundColor:"#101010",padding:"10px",marginLeft:"1px",border:"#fc6621 solid thin",borderRadius:"10px 10px 0 0",borderBottom:"none"}},a.state={allData:null,playerStats:{username:"",level:null,prestige:0},page:"",query:"",array:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.props.name)}},{key:"render",value:function(){var e=null!==this.state.allData?this.state.allData:[];return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,this.Top(),e.length>0?r.a.createElement("div",null,this.pagesLabels(),r.a.createElement("div",{className:"pagination-border"}," ",this.pages(this.state.page))):r.a.createElement(D,null)))}}]),t}(r.a.Component),L=(a(220),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).changeList=function(e){e.show=!e.show,a.setState({user:e})},a.getAllUsers=function(){return a.state.list.map(function(e){return{data:e.data,color:e.color}})},a.validateName=function(e){k(e).then(function(e){var t=e.status;return a.setState({isAutorise:"success"===t})})},a.state={query:"FormingSpoon801",list:[],com:!1,isAutorise:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({list:w()})}},{key:"render",value:function(){var e=this,t=this.getAllUsers(),a=this.state.isAutorise;return r.a.createElement("div",null,r.a.createElement(h,null),a?r.a.createElement("div",{className:"App"},this.state.list.map(function(a,n){return t.length>0?r.a.createElement("div",{key:n,className:"statistic-container"},r.a.createElement(O,{name:e.state.query,color:"rgb(".concat(a.color,")")})):r.a.createElement("div",{key:n},r.a.createElement(D,null))})):r.a.createElement("div",null,r.a.createElement("div",{className:"login-step"},"Enter User name ",r.a.createElement("input",{width:300,onChange:function(t){return e.setState({query:t.target.value})}}),r.a.createElement("button",{onClick:function(){return e.validateName(e.state.query)}},"check"))))}}]),t}(r.a.Component)),w=function(){return[{show:!0,name:"FormingSpoon801",color:"0, 255, 0",data:[]}]};s.a.render(r.a.createElement(L,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a(222)},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.bc289c30.chunk.js.map