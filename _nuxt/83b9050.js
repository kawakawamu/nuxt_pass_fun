(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{234:function(t,o,e){var content=e(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("4f06b463",content,!0,{sourceMap:!1})},235:function(t,o,e){var content=e(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("1930a9a0",content,!0,{sourceMap:!1})},236:function(t,o,e){"use strict";e(234)},237:function(t,o,e){var n=e(50)(!1);n.push([t.i,".pass_container[data-v-c756d712]{width:100%}.pass__title[data-v-c756d712]{font-size:1.5rem}.copy__field[data-v-c756d712]{display:flex;justify-content:center}.copy__button[data-v-c756d712]{width:140px;border:#000;border-radius:8px}.copy__button[data-v-c756d712],.input__box[data-v-c756d712]{margin:10px 15px;padding:10px;background-color:#fff}.input__box[data-v-c756d712]{border:#5e35b1;border-radius:5px;border-radius:8px}.show__button[data-v-c756d712]{margin:10px 25px;width:140px;padding:10px;background-color:#fff;border-radius:8px}.copy__field-message[data-v-c756d712],.copy__field-message p[data-v-c756d712]{height:20px}",""]),t.exports=n},238:function(t,o,e){"use strict";e(235)},239:function(t,o,e){var n=e(50)(!1);n.push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=n},240:function(t,o,e){"use strict";e.r(o);e(28),e(120),e(36),e(52);var n=e(1).a.extend({name:"InputmakingBox",data:function(){return{textPass:"text",textColor:"colorLevel_0",showPassword:!1,showBtnname:"隠す",passwordStrong:"",passwordmessage:"",passwordStrong2:0,copy_complete:!1}},computed:{backgroundColor:function(){return this.passwordStrong.length>0?this.textColor="colorLevel_".concat(this.passwordStrong2):this.textColor="colorLevel_"+"".concat(this.passwordStrong2)},inputPassScore:function(){var t=this,o=0;this.passwordStrong2=0,this.passwordStrong.length>=8&&(o+=10,this.passwordStrong2+=10);[/\d/,/[a-z]/,/[A-Z]/,/\#/,/\!/].forEach((function(e){t.passwordStrong.match(e)&&(o+=5,t.passwordStrong2+=5)}));return[/[\u3041-\u3096]/,/[\u30A1-\u30FA]/].forEach((function(o){t.passwordStrong.match(o)&&console.log("ひらがなorカタカナあるわ")})),o},passResuletmessage:function(){var t="パスワードを入力してね！！";switch(this.inputPassScore){case 5:t="まだまだいける";break;case 10:t="まだ強くなる";break;case 15:t="ふつうだよ";break;case 20:t="いい感じ！";break;case 25:t="もう一息！！";break;case 30:t="これでOK！！大丈夫！！";break;default:console.log("計測不能")}return t},passwordMessageCss:function(){}},watch:{inputPassScore:{handler:function(){var t=this;30===this.inputPassScore&&(this.$confetti.start(),setTimeout((function(){t.$confetti.stop()}),3e3))}},textColor:{handler:function(){this.$emit("backgroundcolorlevel",this.textColor)}},passwordStrong:{handler:function(){this.copy_complete=!1}}},methods:{chageVisible:function(){this.showPassword=!this.showPassword,this.textPass=this.showPassword?"text":"password",this.showBtnname=this.showPassword?"隠す":"表示する"},start:function(){this.$confetti.start()},stoping:function(){this.$confetti.stop()},copy:function(){this.$copyText(this.passwordStrong),this.copy_complete=!0}}}),r=(e(236),e(38)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"pass_container"},[e("div",{class:t.backgroundColor},[e("div",{staticClass:"md:text-xl sm:text-sm",class:t.passwordMessageCss,domProps:{textContent:t._s(t.passResuletmessage)}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passwordStrong,expression:"passwordStrong",modifiers:{trim:!0}}],staticClass:"input__box",attrs:{type:t.textPass},domProps:{value:t.passwordStrong},on:{input:function(o){o.target.composing||(t.passwordStrong=o.target.value.trim())},blur:function(o){return t.$forceUpdate()}}}),t._v(" "),e("p",[t._v("入力文字数："+t._s(t.passwordStrong.length)+"文字")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("button",{staticClass:"bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-4 m-1 rounded p-1",attrs:{type:"button"},on:{click:t.copy}},[e("p",[t._v("コピーする")])]),t._v(" "),e("button",{staticClass:"bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-4 m-1 rounded p-1",attrs:{type:"button"},on:{click:t.chageVisible}},[t._v("\n        "+t._s(t.showBtnname)+"\n      ")])])]),t._v(" "),t.copy_complete?e("div",{staticClass:"copy__field-message"},[t._v("\n    コピーしました！\n  ")]):t._e()])}),[],!1,null,"c756d712",null);o.default=component.exports},241:function(t,o,e){var content=e(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("13dddd7a",content,!0,{sourceMap:!1})},242:function(t,o,e){"use strict";e.r(o);e(238);var n=e(38),component=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);o.default=component.exports},243:function(t,o,e){"use strict";e(241)},244:function(t,o,e){var n=e(50)(!1);n.push([t.i,'.container[data-v-897c0f08]{min-height:100vh;max-width:100%;display:flex;justify-content:center;align-items:center;text-align:center;background-image:linear-gradient(90deg,#a8edea 0,#fed6e3);transition:.5s}.colorLevel_5[data-v-897c0f08],.colorLevel_10[data-v-897c0f08]{background-image:linear-gradient(90deg,#5ee7df 0,#b490ca)}.colorLevel_10[data-v-897c0f08]{transition:.2s}.colorLevel_15[data-v-897c0f08]{background-image:linear-gradient(90deg,#96fbc4 0,#f9f586);transition:.2s}.colorLevel_20[data-v-897c0f08]{background-image:linear-gradient(90deg,#ff5858 0,#f09819);transition:.2s}.colorLevel_25[data-v-897c0f08]{background-image:linear-gradient(90deg,#a1c4fd 0,#c2e9fb);transition:.2s}.colorLevel_30[data-v-897c0f08]{background-image:linear-gradient(90deg,#f6d365 0,#fda085);transition:.2s}.title[data-v-897c0f08]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle[data-v-897c0f08]{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links[data-v-897c0f08]{padding-top:15px}.pass-field[data-v-897c0f08]{width:80%;margin:40px auto;padding:40px;background-color:hsla(0,0%,100%,.2);min-height:80%}',""]),t.exports=n},257:function(t,o,e){"use strict";e.r(o);var n=e(1),r=e(240),c=n.a.extend({data:function(){return{backgroundColor:""}},components:{InputmakingBox:r.default},methods:{changeColor:function(t){this.backgroundColor=t}}}),d=(e(243),e(38)),component=Object(d.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",class:t.backgroundColor},[e("div",{staticClass:"pass-field w-24 min-w-full"},[e("Logo"),t._v(" "),e("client-only",[e("InputmakingBox",{on:{backgroundcolorlevel:t.changeColor}})],1)],1)])}),[],!1,null,"897c0f08",null);o.default=component.exports;installComponents(component,{Logo:e(242).default,InputmakingBox:e(240).default})}}]);