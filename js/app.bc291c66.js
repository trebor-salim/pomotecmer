(function(t){function e(e){for(var s,a,r=e[0],d=e[1],l=e[2],u=0,h=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);c&&c(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],s=!0,r=1;r<o.length;r++){var d=o[r];0!==i[d]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},i={app:0},n=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=d;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},7420:function(t,e,o){t.exports=o.p+"img/tomato.1b5b3ac2.png"},cd49:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",dark:""}},[o("v-toolbar-title",{staticClass:"headline text-uppercase"},[o("span",{staticClass:"ma-1"},[t._v(t._s(t.appName))])]),o("p",[t._v(t._s(t.appVersion))]),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"https://en.wikipedia.org/wiki/Pomodoro_Technique",target:"_blank"}},[o("span",{staticClass:"mr-2 d-none d-sm-inline"},[t._v("Pomodoro Technique timer")]),o("v-icon",{attrs:{title:"Pomodoro Technique timer"}},[t._v("mdi-open-in-new")])],1)],1),o("v-main",[o("Layout",{attrs:{appName:t.appName}})],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",md:"4"}},[o("Tomato",{attrs:{appName:t.appName}})],1),o("v-col",{attrs:{cols:"12",md:"8"}},[o("Todos",{attrs:{title:"Pomodoro todos"}})],1)],1)],1)},r=[],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("v-row",{attrs:{dense:""}},[s("v-col",[0===t.timerId?s("v-img",{staticClass:"my-3",attrs:{src:o("7420"),contain:"",height:"120"}}):s("v-progress-circular",{attrs:{rotate:360,size:145,width:25,value:t.position,color:t.$vuetify.theme.themes.light.primary}},[t._v(t._s(Math.floor(t.position))+"%")])],1)],1),s("v-row",{directives:[{name:"show",rawName:"v-show",value:t.isPomodoroEnded,expression:"isPomodoroEnded"}],attrs:{dense:""}},[s("v-col",[s("p",[t._v(t._s(t.whichPomodoroHasBeenEnded))])])],1),s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"3"}}),s("v-col",{attrs:{cols:"6"}},[s("v-form",{on:{submit:function(t){t.preventDefault()}}},[s("v-text-field",{ref:"refToDuration",attrs:{type:"number",label:"Duration",disabled:0!==t.timerId,rules:[function(t){return t.length>0||parseInt(t,10)>2&&parseInt(t,10)<31||"Duration must be a valid number greater than 2 and lesser than 31!"}]},model:{value:t.duration,callback:function(e){t.duration=t._n(e)},expression:"duration"}})],1)],1),s("v-col",{attrs:{cols:"1"}},[s("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:0!=t.timerId,expression:"timerId != 0"}],attrs:{indeterminate:"",color:t.$vuetify.theme.themes.light.primary}})],1)],1),s("v-row",{attrs:{dense:""}},[s("v-col",[s("v-btn",{attrs:{small:"",disabled:0!==t.timerId,title:"Start"},on:{click:t.start}},[s("v-icon",[t._v("mdi-play")])],1),s("v-btn",{attrs:{small:"",disabled:0===t.timerId,title:"Pause"},on:{click:t.pause}},[s("v-icon",[t._v("mdi-pause")])],1),s("v-btn",{attrs:{small:"",disabled:0===t.timerId,title:"Stop"},on:{click:t.stop}},[s("v-icon",[t._v("mdi-stop")])],1),s("v-btn",{attrs:{small:"",disabled:0!==t.timerId,title:"Next"},on:{click:t.next}},[s("v-icon",[t._v("mdi-skip-next")])],1)],1)],1),s("v-row",{attrs:{dense:""}},[s("v-col",[s("v-container",[s("v-row",t._l(t.pomodorosCounter,(function(t){return s("v-col",{key:t,attrs:{cols:"3"}},[s("v-img",{staticClass:"my-3",attrs:{src:o("7420"),contain:"",height:10*t+15}})],1)})),1)],1)],1)],1),s("v-row",{attrs:{dense:""}},[s("v-col",[s("v-form",{on:{submit:function(t){t.preventDefault()}}},[s("v-row",[s("v-col",{attrs:{cols:"4",align:"center"}},[s("v-text-field",{staticStyle:{width:"65px"},attrs:{disabled:"",label:"Pomodoro",value:t.pomodoro}})],1),s("v-col",{attrs:{cols:"4",align:"center"}},[s("v-text-field",{ref:"refToShortBrake",staticStyle:{width:"65px"},attrs:{type:"number",label:"Short brake",disabled:0!==t.timerId,rules:[function(t){return t.length>0||parseInt(t,10)>2&&parseInt(t,10)<6||"Short brake must be a valid number greater than 2 and lesser than 6!"}]},model:{value:t.shortBrake,callback:function(e){t.shortBrake=t._n(e)},expression:"shortBrake"}})],1),s("v-col",{attrs:{cols:"4",align:"center"}},[s("v-text-field",{ref:"refToLongBrake",staticStyle:{width:"65px"},attrs:{type:"number",label:"Long brake",disabled:0!==t.timerId,rules:[function(t){return t.length>0||parseInt(t,10)>14&&parseInt(t,10)<31||"Long brake must be a valid number greater than 14 and lesser than 31!"}]},model:{value:t.longBrake,callback:function(e){t.longBrake=t._n(e)},expression:"longBrake"}})],1)],1)],1)],1)],1)],1)},l=[],c=o("d4ec"),u=o("bee2"),h=(o("e9c4"),function(){function t(){Object(c["a"])(this,t)}return Object(u["a"])(t,null,[{key:"read",value:function(t,e){var o=localStorage.getItem(t);return null!==o?JSON.parse(o):e}},{key:"write",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}}]),t}()),m=s["a"].extend({props:["appName"],data:function(){return{duration:25,timerId:0,position:0,maxPosition:100,increase:1,isPomodoroEnded:!1,whichPomodoroHasBeenEnded:"",pomodorosCounter:0,audio:new Audio("alarm.mp3"),pomodoro:25,shortBrake:5,longBrake:20}},mounted:function(){this.pomodorosCounter=h.read("pomodorosCounter",this.pomodorosCounter),this.shortBrake=h.read("shortBrake",this.shortBrake),this.longBrake=h.read("longBrake",this.longBrake),this.audio.loop=!0},watch:{shortBrake:function(){h.write("shortBrake",this.shortBrake)},longBrake:function(){h.write("longBrake",this.longBrake)}},methods:{start:function(){this.$refs.refToDuration.validate()&&this.$refs.refToShortBrake.validate()&&this.$refs.refToLongBrake.validate()&&(!0===this.isPomodoroEnded&&(this.position=0,this.audio.pause(),this.audio.currentTime=0),this.isPomodoroEnded=!1,this.increase=this.maxPosition*(1/this.duration)/6,this.timerId=setInterval(this.frame,1e4))},pause:function(){0!==this.timerId&&(clearInterval(this.timerId),this.timerId=0)},stop:function(){this.pause(),this.position=0},frame:function(){this.position+this.increase>this.maxPosition?this.position=this.maxPosition:this.position+=this.increase,this.position===this.maxPosition&&(this.pause(),this.duration===this.pomodoro?this.whichPomodoroHasBeenEnded="Pomodoro ended!":this.duration===this.shortBrake?this.whichPomodoroHasBeenEnded="Short brake ended!":this.duration===this.longBrake?this.whichPomodoroHasBeenEnded="Long brake ended!":this.whichPomodoroHasBeenEnded="Timer ended!",this.isPomodoroEnded=!0,this.duration===this.pomodoro?this.pomodorosIncrease(!1):this.duration===this.longBrake&&this.pomodorosReset(),this.audio.play(),this.notify(this.whichPomodoroHasBeenEnded))},next:function(t){!0===this.isPomodoroEnded&&(this.audio.pause(),this.audio.currentTime=0),0===this.timerId&&(t.ctrlKey?this.pomodorosIncrease(!0):this.duration===this.pomodoro?4===this.pomodorosCounter?this.duration=this.longBrake:this.duration=this.shortBrake:this.duration=this.pomodoro)},pomodorosIncrease:function(t){this.pomodorosCounter<4?this.pomodorosCounter++:this.pomodorosCounter=t?0:1,this.savePomodorosCounter()},pomodorosReset:function(){this.pomodorosCounter=0,this.savePomodorosCounter()},savePomodorosCounter:function(){h.write("pomodorosCounter",this.pomodorosCounter)},notify:function(t){var e=this.appName;"Notification"in window?"granted"===Notification.permission?new Notification(e,{body:t}):"denied"!==Notification.permission&&Notification.requestPermission().then((function(o){"granted"===o&&new Notification(e,{body:t})})):alert("This browser does not support desktop notification")}}}),p=m,v=o("2877"),f=o("6544"),k=o.n(f),b=o("8336"),g=o("62ad"),w=o("a523"),x=o("4bd4"),y=o("132d"),T=o("adda"),_=o("490a"),I=o("0fd9"),B=o("8654"),P=Object(v["a"])(p,d,l,!1,null,null,null),C=P.exports;k()(P,{VBtn:b["a"],VCol:g["a"],VContainer:w["a"],VForm:x["a"],VIcon:y["a"],VImg:T["a"],VProgressCircular:_["a"],VRow:I["a"],VTextField:B["a"]});var V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",{directives:[{name:"show",rawName:"v-show",value:t.tasks.length>0,expression:"tasks.length > 0"}],staticClass:"font-weight-bold text-left ml-5"},[void 0===t.title?o("span",[t._v("Todos")]):o("span",[t._v(t._s(t.title))]),o("v-btn",{attrs:{icon:"",disabled:0===t.tasks.length,title:"Remove completed",color:t.$vuetify.theme.themes.light.primary},on:{click:t.removeCompletedTasks}},[o("v-icon",[t._v("mdi-delete")])],1)],1),o("v-card",{directives:[{name:"show",rawName:"v-show",value:t.tasks.length>0,expression:"tasks.length > 0"}],staticStyle:{"max-height":"760px","overflow-y":"auto"},attrs:{tile:""}},[o("v-list",{attrs:{flat:""}},[o("v-list-item-group",t._l(t.tasks,(function(e,s){return o("v-list-item",{key:s},[o("v-list-item-action",{attrs:{title:"Is done"}},[o("v-checkbox",{nativeOn:{click:function(o){return t.saveTasks(e)}},model:{value:e.done,callback:function(o){t.$set(e,"done",o)},expression:"task.done"}})],1),o("v-list-item-content",[e.done?o("div",{staticClass:"text-left task-done"},[t._v(" "+t._s(e.title)+" ")]):t.editedTaskIndex===s?o("v-text-field",{staticClass:"text-left",attrs:{autofocus:"","hide-details":"",height:"16px"},on:{input:t.saveTasks},model:{value:e.title,callback:function(o){t.$set(e,"title",o)},expression:"task.title"}}):o("div",{staticClass:"text-left"},[t._v(" "+t._s(e.title)+" "),o("v-btn",{attrs:{icon:"",title:"Is doing"},on:{click:function(o){e.doing=!e.doing,t.saveTasks()}}},[o("v-progress-circular",{attrs:{indeterminate:e.doing,value:0,size:"20"}})],1)],1)],1),o("v-list-item-action",[o("v-btn",{attrs:{disabled:e.done,icon:"",title:"Toggle edit mode"},on:{click:function(e){t.editedTaskIndex!==s?t.editedTaskIndex=s:t.editedTaskIndex=-1}}},[o("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)],1),o("v-list-item-action",[o("v-btn",{attrs:{icon:"",title:"Delete"},on:{click:function(e){return t.removeTask(s)}}},[o("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1)],1)],1)})),1)],1)],1),o("v-text-field",{attrs:{label:"What's to do?"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)}},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],1)},N=[],O=(o("498a"),o("a434"),s["a"].extend({props:["title"],data:function(){return{newTask:"",tasks:new Array,editedTaskIndex:-1}},mounted:function(){this.tasks=h.read("tasks",this.tasks)},methods:{addTask:function(){this.newTask.trim().length>0&&(this.tasks.unshift({title:this.newTask,doing:!1,done:!1}),this.newTask="",this.saveTasks())},removeCompletedTasks:function(){var t;for(t=this.tasks.length-1;t>=0;t--)this.tasks[t].done&&this.tasks.splice(t,1);this.saveTasks()},removeTask:function(t){this.tasks.splice(t,1),this.saveTasks()},saveTasks:function(t){void 0!==t&&t.done&&t.doing&&(t.doing=!1),h.write("tasks",this.tasks)}}})),S=O,E=(o("e86c"),o("b0af")),j=o("ac7c"),$=o("8860"),L=o("da13"),D=o("1800"),H=o("5d23"),A=o("1baa"),M=Object(v["a"])(S,V,N,!1,null,"4ccf9d91",null),R=M.exports;k()(M,{VBtn:b["a"],VCard:E["a"],VCheckbox:j["a"],VIcon:y["a"],VList:$["a"],VListItem:L["a"],VListItemAction:D["a"],VListItemContent:H["a"],VListItemGroup:A["a"],VProgressCircular:_["a"],VTextField:B["a"]});var q=s["a"].extend({props:["appName"],components:{Tomato:C,Todos:R}}),J=q,F=Object(v["a"])(J,a,r,!1,null,null,null),z=F.exports;k()(F,{VCol:g["a"],VContainer:w["a"],VRow:I["a"]});var G=s["a"].extend({name:"App",components:{Layout:z},data:function(){return{appName:"Pomótecmer",appVersion:"v0.3.0"}}}),K=G,W=o("7496"),Q=o("40dc"),U=o("f6c4"),X=o("2fa4"),Y=o("2a7f"),Z=Object(v["a"])(K,i,n,!1,null,null,null),tt=Z.exports;k()(Z,{VApp:W["a"],VAppBar:Q["a"],VBtn:b["a"],VIcon:y["a"],VMain:U["a"],VSpacer:X["a"],VToolbarTitle:Y["a"]});var et=o("f309");s["a"].use(et["a"]);var ot=new et["a"]({icons:{iconfont:"mdi"},theme:{dark:!1,themes:{light:{primary:"#800000",secondary:"#800000",accent:"#800000",error:"#ffa500"}}}});s["a"].config.productionTip=!1,new s["a"]({vuetify:ot,render:function(t){return t(tt)}}).$mount("#app")},e86c:function(t,e,o){"use strict";o("f231")},f231:function(t,e,o){}});
//# sourceMappingURL=app.bc291c66.js.map