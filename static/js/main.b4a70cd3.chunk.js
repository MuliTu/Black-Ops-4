(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(62),s=a.n(i),c=a(9),l=a(10),o=a(12),u=a(11),m=a(13),p=(a(70),a(72),function(e){return["","https://image.ibb.co/ideMDA/L1.png","https://image.ibb.co/jFtgDA/L2.png","https://image.ibb.co/idRe0q/L3.png","https://image.ibb.co/jsoRfq/L4.png","https://image.ibb.co/cwviRV/L5.png","https://image.ibb.co/iRMe0q/L6.png","https://image.ibb.co/i9bq6V/L7.png","https://image.ibb.co/cPXK0q/L8.png","https://image.ibb.co/mZvHmV/L9.png","https://image.ibb.co/dzGe0q/L10.png"][e]}),d=function(){return r.a.createElement("img",{className:"logo",src:"https://image.ibb.co/inYpYA/07ef4a2a-37ba-4f4d-8be6-1be1b61bc102.png",alt:"logo"})},h=function(e){return e.split("")[0].toUpperCase()+e.split("").slice(1).map(function(e){return e===e.toUpperCase()?" ".concat(e):e}).join("")},f=function(e){var t=e.name,a=e.data,n=e.sub;return r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("div",{className:"card-top"},h(t)),r.a.createElement("div",{className:"card-context"},a),r.a.createElement("div",{className:"card-sub"},n," ")))},g=function(e){var t=e.data,a=e.filter;return t.filter(function(e){return e.action.startsWith(a)}),r.a.createElement("div",null,r.a.createElement("h1",null,h(a)),r.a.createElement("div",{className:"table"},t.map(function(e,t){return r.a.createElement("div",{key:t,className:"table-line"},r.a.createElement("div",null,h(e.action).replace("Kill Enemy","")),r.a.createElement("div",{className:"table-result"},Math.round(e.result)))})))},b="https://my.callofduty.com/api/papi-client/crm/cod/v2/title/bo4/platform/xbl/gamer/",v=function(e){return e.json()},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"profile",a="matches"!==t?"".concat(b).concat(e,"/").concat(t):"".concat(b).concat(e,"/").concat(t,"/mp/start/0/end/0/details");return Promise.resolve(fetch(a).then(v))},y=(a(74),function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("i",{id:"loading",className:"fas fa-spinner"}),r.a.createElement("div",null,"Loading...")))}),k=(a(76),a(63)),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).refreshData=function(){a.setState({name:a.props.name,data:a.props.data,dates:a.props.dates,size:a.props.size},function(){a.setState({avg:a.state.data?a.state.data.reduce(function(e,t){return e+t}):0})})},a.createDataForGraph=function(e,t,n,r){for(var i=[],s=0;s<20;s++)i.push(n);if(1===a.state.amount)return{labels:r.reverse(),datasets:[{type:"line",fill:!1,label:"Average",backgroundColor:"rgba(255, 255, 255,0.5)",borderColor:"rgba(255, 255, 255,0.5)",data:i,steppedLine:!1,lineTension:.6,pointRadius:0,pointHitRadius:10,borderDash:[3]},{type:"bar",fill:!1,borderDash:[],label:e.toUpperCase(),backgroundColor:"rgba(255,140,0)",borderColor:"rgb(255,140,0)",data:t,lineTension:.1,pointRadius:1,pointHitRadius:10}]}},a.matchDate=function(e){return e.map(function(e){return"".concat(new Date(1e3*e).toLocaleDateString("en-US")," ").concat(new Date(1e3*e).getHours(),":").concat(new Date(1e3*e).getMinutes())})},a.state={name:"",amount:1,data:[],dates:[],size:0,avg:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshData()}},{key:"componentWillUpdate",value:function(e){this.props!==e&&this.refreshData()}},{key:"render",value:function(){var e=(this.state?this.state:[]).dates,t=this.createDataForGraph(this.state.name,this.state.data,this.state.avg/20,this.matchDate(e));return r.a.createElement("div",null,r.a.createElement(k.a,{height:300,width:500,data:t,redraw:!0}))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).refreshData=function(){var e=a.props.playerName;E(e,"matches").then(function(e){var t=e.data;a.setState({data:{killList:{data:t.matches.map(function(e){return e.playerStats.kills}),name:"kill"},ekiaList:{data:t.matches.map(function(e){return e.playerStats.ekia}),name:"ekia"},deathList:{data:t.matches.map(function(e){return e.playerStats.deaths}),name:"death"},assistsList:{data:t.matches.map(function(e){return e.playerStats.assists}),name:"assists"},ekiadRatioList:{data:t.matches.map(function(e){return e.playerStats.ekiadRatio}),name:"ekiadRatio"}},times:{utcEndSeconds:{data:t.matches.map(function(e){return e.utcStartSeconds}),name:"utcEndSeconds"}}})})},console.log("props",e),a.state={username:"",data:[],times:[],type:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.type!==e.type&&this.refreshData()}},{key:"componentDidMount",value:function(){this.refreshData()}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.data).map(function(t){return e.state.data[t]}),a=Object.keys(this.state.times).map(function(t){return e.state.times[t]})[0];return r.a.createElement("div",{className:"graph-container"},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(D,{name:e.name,dates:a.data,data:e.data}))}))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){E(e,"profile").then(function(e){var t=e.data,n=t.username,r=t.mp,i=r.level,s=r.prestige,c=t.mp.lifetime.all;a.setState({allData:Object.keys(c).map(function(e){return Object.assign({action:e,result:c[e]})}),playerStats:{username:n,level:i,prestige:s},page:"Team Deathmatch"})})},a.Top=function(){var e={backgroundImage:"url(".concat(p(a.state.playerStats.prestige),")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.a.createElement("div",{className:"top",style:e},r.a.createElement("div",{className:"left"},r.a.createElement("div",null,a.state.playerStats.username)),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"right-sub"},"Level: ",a.state.playerStats.level),r.a.createElement("div",{className:"right-sub"},"Prestige: ",a.state.playerStats.prestige)))},a.lifeTime=function(){var e=a.state.allData;return r.a.createElement("div",{className:"middel"},r.a.createElement("div",{className:"card-wrapper"},r.a.createElement("div",{className:"list-nest"},r.a.createElement(g,{data:e,filter:"killEnemy"}),r.a.createElement(g,{data:e,filter:"stats"})),e.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(f,{name:e.action,data:e.result}))})))},a.pagesLabels=function(){return r.a.createElement("div",{className:"page-labels"},r.a.createElement("div",{style:"Team Deathmatch"===a.state.page?a.inPage():a.outPage(),onClick:function(){return a.setState({page:"Team Deathmatch"})}},"Life time"),r.a.createElement("div",{style:"Team Deathmatch"!==a.state.page?a.inPage():a.outPage(),onClick:function(){return a.setState({page:"BlackOut"})}},"Weekly"))},a.pages=function(e){switch(e){case"BlackOut":return r.a.createElement(S,{type:a.state.type?"mp":"wz",playerName:a.state.playerStats.username});default:return a.lifeTime()}},a.outPage=function(){return{marginLeft:"1px",border:"#fc6621 solid thin",borderRadius:"10px 10px 0 0",borderBottom:"#fc6621 solid thin",color:"#553400",backgroundColor:"black",shdowBox:"10px 10px 10px white",padding:"10px"}},a.inPage=function(){return{backgroundColor:"#1b1b1b",padding:"10px",marginLeft:"1px",border:"#fc6621 solid thin",borderRadius:"10px 10px 0 0",borderBottom:"none"}},a.state={allData:null,playerStats:{username:"",level:null,prestige:0},page:"",filter:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.props.name)}},{key:"render",value:function(){var e=null!==this.state.allData?this.state.allData:[];return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,this.Top(),e.length>0?r.a.createElement("div",null,this.pagesLabels(),r.a.createElement("div",{className:"pagination-border"}," ",this.pages(this.state.page))):r.a.createElement(y,null)))}}]),t}(r.a.Component),N=(a(220),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).changeList=function(e){e.show=!e.show,a.setState({user:e})},a.getAllUsers=function(){return a.state.list.map(function(e){return{data:e.data,color:e.color}})},a.validateName=function(e){E(e).then(function(e){var t=e.status;return a.setState({isAutorise:"success"===t})})},a.state={query:"FormingSpoon801",list:[],com:!1,isAutorise:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({list:O()})}},{key:"render",value:function(){var e=this,t=this.getAllUsers(),a=this.state.isAutorise;return r.a.createElement("div",null,r.a.createElement(d,null),a?r.a.createElement("div",{className:"App"},this.state.list.map(function(a,n){return t.length>0?r.a.createElement("div",{key:n,className:"statistic-container"},r.a.createElement(j,{name:e.state.query,color:"rgb(".concat(a.color,")")})):r.a.createElement("div",{key:n},r.a.createElement(y,null))})):r.a.createElement("div",null,r.a.createElement("div",{className:"login-step"},"Enter User name ",r.a.createElement("input",{width:300,onChange:function(t){return e.setState({query:t.target.value})}}),r.a.createElement("button",{onClick:function(){return e.validateName(e.state.query)}},"check"))))}}]),t}(r.a.Component)),O=function(){return[{show:!0,name:"FormingSpoon801",color:"0, 255, 0",data:[]}]};s.a.render(r.a.createElement(N,null),document.getElementById("root"))},65:function(e,t,a){e.exports=a(222)},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.b4a70cd3.chunk.js.map