(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{234:function(t,o,e){var content=e(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("4f06b463",content,!0,{sourceMap:!1})},236:function(t,o,e){"use strict";e(234)},237:function(t,o,e){var r=e(50)(!1);r.push([t.i,".pass_container[data-v-c756d712]{width:100%}.pass__title[data-v-c756d712]{font-size:1.5rem}.copy__field[data-v-c756d712]{display:flex;justify-content:center}.copy__button[data-v-c756d712]{width:140px;border:#000;border-radius:8px}.copy__button[data-v-c756d712],.input__box[data-v-c756d712]{margin:10px 15px;padding:10px;background-color:#fff}.input__box[data-v-c756d712]{border:#5e35b1;border-radius:5px;border-radius:8px}.show__button[data-v-c756d712]{margin:10px 25px;width:140px;padding:10px;background-color:#fff;border-radius:8px}.copy__field-message[data-v-c756d712],.copy__field-message p[data-v-c756d712]{height:20px}",""]),t.exports=r},240:function(t,o,e){"use strict";e.r(o);e(28),e(120),e(36),e(52);var r=e(1).a.extend({name:"InputmakingBox",data:function(){return{textPass:"text",textColor:"colorLevel_0",showPassword:!1,showBtnname:"隠す",passwordStrong:"",passwordmessage:"",passwordStrong2:0,copy_complete:!1}},computed:{backgroundColor:function(){return this.passwordStrong.length>0?this.textColor="colorLevel_".concat(this.passwordStrong2):this.textColor="colorLevel_"+"".concat(this.passwordStrong2)},inputPassScore:function(){var t=this,o=0;this.passwordStrong2=0,this.passwordStrong.length>=8&&(o+=10,this.passwordStrong2+=10);[/\d/,/[a-z]/,/[A-Z]/,/\#/,/\!/].forEach((function(e){t.passwordStrong.match(e)&&(o+=5,t.passwordStrong2+=5)}));return[/[\u3041-\u3096]/,/[\u30A1-\u30FA]/].forEach((function(o){t.passwordStrong.match(o)&&console.log("ひらがなorカタカナあるわ")})),o},passResuletmessage:function(){var t="パスワードを入力してね！！";switch(this.inputPassScore){case 5:t="まだまだいける";break;case 10:t="まだ強くなる";break;case 15:t="ふつうだよ";break;case 20:t="いい感じ！";break;case 25:t="もう一息！！";break;case 30:t="これでOK！！大丈夫！！";break;default:console.log("計測不能")}return t},passwordMessageCss:function(){}},watch:{inputPassScore:{handler:function(){var t=this;30===this.inputPassScore&&(this.$confetti.start(),setTimeout((function(){t.$confetti.stop()}),3e3))}},textColor:{handler:function(){this.$emit("backgroundcolorlevel",this.textColor)}},passwordStrong:{handler:function(){this.copy_complete=!1}}},methods:{chageVisible:function(){this.showPassword=!this.showPassword,this.textPass=this.showPassword?"text":"password",this.showBtnname=this.showPassword?"隠す":"表示する"},start:function(){this.$confetti.start()},stoping:function(){this.$confetti.stop()},copy:function(){this.$copyText(this.passwordStrong),this.copy_complete=!0}}}),n=(e(236),e(38)),component=Object(n.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"pass_container"},[e("div",{class:t.backgroundColor},[e("div",{staticClass:"md:text-xl sm:text-sm",class:t.passwordMessageCss,domProps:{textContent:t._s(t.passResuletmessage)}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passwordStrong,expression:"passwordStrong",modifiers:{trim:!0}}],staticClass:"input__box",attrs:{type:t.textPass},domProps:{value:t.passwordStrong},on:{input:function(o){o.target.composing||(t.passwordStrong=o.target.value.trim())},blur:function(o){return t.$forceUpdate()}}}),t._v(" "),e("p",[t._v("入力文字数："+t._s(t.passwordStrong.length)+"文字")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("button",{staticClass:"bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 px-4 m-1 rounded p-1",attrs:{type:"button"},on:{click:t.copy}},[e("p",[t._v("コピーする")])]),t._v(" "),e("button",{staticClass:"bg-red-400 hover:bg-red-500 text-white font-bold py-3 px-4 m-1 rounded p-1",attrs:{type:"button"},on:{click:t.chageVisible}},[t._v("\n        "+t._s(t.showBtnname)+"\n      ")])])]),t._v(" "),t.copy_complete?e("div",{staticClass:"copy__field-message"},[t._v("\n    コピーしました！\n  ")]):t._e()])}),[],!1,null,"c756d712",null);o.default=component.exports}}]);