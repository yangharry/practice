(function(){"use strict";var e={4935:function(e,t,a){var i=a(9963),o=a(6252);const s={class:"header"},n={class:"header-button-left"},r={class:"header-button-right"},l={class:"logo"},u={style:{"text-align":"center"}},c={class:"footer"},d={class:"footer-button-plus"},p={for:"Imagefile",class:"input-plus"};function g(e,t,a,i,g,f){const m=(0,o.up)("Container"),h=(0,o.up)("sapn");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",s,[(0,o._)("ul",n,[(0,o._)("li",{onClick:t[0]||(t[0]=e=>[g.step--,f.cancle()])},"Cancel")]),(0,o._)("ul",r,[2==g.step?((0,o.wg)(),(0,o.iD)("li",{key:0,onClick:t[1]||(t[1]=t=>[e.publish(),g.step=0])},"upload")):((0,o.wg)(),(0,o.iD)("li",{key:1,onClick:t[2]||(t[2]=e=>g.step++)},"Next"))]),(0,o._)("div",l,[(0,o._)("div",{class:"home-btn",onClick:t[3]||(t[3]=e=>g.step=0)},"Home"),(0,o._)("div",{class:"follower-btn",onClick:t[4]||(t[4]=e=>g.step=3)},"Follower")])]),(0,o.Wm)(m,{onUploadwrite:t[5]||(t[5]=t=>e.$store.state.uploadcontent=t),step:g.step},null,8,["step"]),(0,o._)("div",u,[(0,o._)("button",{onClick:t[6]||(t[6]=t=>e.$store.dispatch("getData"))},"더보기")]),(0,o._)("div",c,[(0,o._)("ul",d,[(0,o._)("input",{onChange:t[7]||(t[7]=(...e)=>f.upload&&f.upload(...e)),type:"file",id:"Imagefile",class:"inputfile"},null,32),(0,o._)("label",p,[(0,o.Wm)(h,{style:{"font-size":"16px"}},{default:(0,o.w5)((()=>[(0,o.Uk)("+사진추가")])),_:1})])])])])}var f=a(3907),m=a(3577);const h={key:0},w={key:1},v={class:"upload-image"},b=["src"],k=["src"],y={class:"filters"},x={key:2},D={class:"upload-image"},_=["src"],I=["src"],M={class:"write"},H={key:3};function $(e,t,a,i,s,n){const r=(0,o.up)("Post"),l=(0,o.up)("FilterNmae"),u=(0,o.up)("FilterBox"),c=(0,o.up)("MyPage");return(0,o.wg)(),(0,o.iD)("div",null,[0==a.step?((0,o.wg)(),(0,o.iD)("div",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.$store.state.data,((t,a)=>((0,o.wg)(),(0,o.j4)(r,{key:t,data:e.$store.state.data[a],i:a},null,8,["data","i"])))),128))])):(0,o.kq)("",!0),1==a.step?((0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("div",v,[e.$store.state.imageDimensions.height>e.$store.state.imageDimensions.width?((0,o.wg)(),(0,o.iD)("img",{key:0,class:(0,m.C_)(["image-setting1",e.$store.state.filterreception]),src:e.$store.state.uploadImage},null,10,b)):((0,o.wg)(),(0,o.iD)("img",{key:1,class:(0,m.C_)(["image-setting2",e.$store.state.filterreception]),src:e.$store.state.uploadImage},null,10,k))]),(0,o._)("div",y,[(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.$store.state.Filter,((t,a)=>((0,o.wg)(),(0,o.j4)(l,{key:t,filter:e.$store.state.Filter[a]},null,8,["filter"])))),128))]),(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.$store.state.Filter,((t,a)=>((0,o.wg)(),(0,o.j4)(u,{key:t,filter:e.$store.state.Filter[a]},null,8,["filter"])))),128))])])])):(0,o.kq)("",!0),2==a.step?((0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("div",D,[e.$store.state.imageDimensions.height>e.$store.state.imageDimensions.width?((0,o.wg)(),(0,o.iD)("img",{key:0,class:(0,m.C_)(["image-setting1",e.$store.state.filterreception]),src:e.$store.state.uploadImage},null,10,_)):((0,o.wg)(),(0,o.iD)("img",{key:1,class:(0,m.C_)(["image-setting2",e.$store.state.filterreception]),src:e.$store.state.uploadImage},null,10,I))]),(0,o._)("div",M,[(0,o._)("textarea",{onInput:t[0]||(t[0]=t=>e.$emit("uploadwrite",t.target.value)),class:"write-box"},"write!",32)])])):(0,o.kq)("",!0),3==a.step?((0,o.wg)(),(0,o.iD)("div",H,[(0,o.Wm)(c,{one:1})])):(0,o.kq)("",!0)])}const j={class:"post"},C={class:"post-header"},B=["src"],O={class:"profile-name"},F=["src"],G=["src"],A={class:"post-content"},q={class:"date"};function W(e,t,a,i,s,n){return(0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("div",C,[(0,o._)("img",{class:"profile",src:a.data.userImage},null,8,B),(0,o._)("span",O,(0,m.zw)(a.data.name),1)]),(0,o._)("div",{class:"post-body",onDblclick:t[0]||(t[0]=t=>e.$store.commit("likesplus",a.i))},[a.data.height>=a.data.width?((0,o.wg)(),(0,o.iD)("img",{key:0,class:(0,m.C_)(["image-setting1",a.data.filter]),src:a.data.postImage},null,10,F)):((0,o.wg)(),(0,o.iD)("img",{key:1,class:(0,m.C_)(["image-setting2",a.data.filter]),src:a.data.postImage},null,10,G))],32),(0,o._)("div",A,[(0,o._)("p",null,(0,m.zw)(a.data.likes)+" Likes",1),(0,o._)("p",null,[(0,o._)("strong",null,(0,m.zw)(a.data.name),1),(0,o.Uk)(" "+(0,m.zw)(a.data.content),1)]),(0,o._)("p",q,(0,m.zw)(a.data.date),1)])])}var Y={date(){return{margintop:0}},name:"today-post",methods:{},props:{data:Object,i:Number}},P=a(3744);const Z=(0,P.Z)(Y,[["render",W]]);var z=Z;function N(e,t,a,i,s,n){return(0,o.wg)(),(0,o.iD)("div",{class:(0,m.C_)(["filter-item",[a.filter,{"filter-overmouse":s.hover}]]),onMouseleave:t[0]||(t[0]=e=>s.hover=""),onMouseenter:t[1]||(t[1]=e=>s.hover=!0),style:(0,m.j5)({backgroundImage:`url(${e.$store.state.uploadImage})`}),onClick:t[2]||(t[2]=(...e)=>n.fire&&n.fire(...e))},null,38)}var V={data(){return{msg:"hello",hover:""}},name:"today-filterbox",methods:{fire(){this.emitter.emit("filter-send",this.filter)}},props:{filter:String}};const K=(0,P.Z)(V,[["render",N]]);var E=K;const U={class:"filter-name"};function R(e,t,a,i,s,n){return(0,o.wg)(),(0,o.iD)("div",U,(0,m.zw)(a.filter),1)}var L={name:"today-filterbox",props:{filter:String}};const S=(0,P.Z)(L,[["render",R]]);var T=S;const J={style:{padding:"10px"}},Q=(0,o._)("h4",null,"팔로워",-1),X=["src"],ee={class:"profile-name"};function te(e,t,a,i,s,n){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",J,[Q,(0,o._)("input",{type:"text",onInput:t[0]||(t[0]=(...e)=>i.search&&i.search(...e)),placeholder:"🔍"},null,32),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.follower,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"post-header"},[(0,o._)("img",{class:"profile",src:e.image},null,8,X),(0,o._)("span",ee,(0,m.zw)(e.name),1)])))),128))])])}var ae=a(2262),ie=a(594),oe={name:"today-mypage",props:{one:Number},setup(){let e=(0,ae.iH)([]),t=(0,ae.iH)([]);function a(a){if(console.log(a),null==a.data)e.value=t.value;else{let t=e.value.filter((e=>e.name.match(new RegExp(a.data,"i"))));e.value=t}}return(0,o.bv)((()=>{ie.Z.get("./follower.json").then((a=>{e.value=a.data,t.value=a.data}))})),{follower:e,search:a}},date(){return{}}};const se=(0,P.Z)(oe,[["render",te]]);var ne=se,re={name:"today-container",date(){return{}},components:{Post:z,FilterBox:E,FilterNmae:T,MyPage:ne},props:{step:Number}};const le=(0,P.Z)(re,[["render",$]]);var ue=le,ce={name:"App",data(){return{step:0}},mounted(){this.emitter.on("filter-send",(e=>{this.$store.state.filterreception=e,console.log(this.filterreception)}))},components:{Container:ue},computed:{data(){return this.$store.state.data[this.$store.state.data.length-1].name},...(0,f.rn)(["a"]),...(0,f.rn)({user:"data"})},methods:{...(0,f.OI)(["publish","namechange"]),cancle(){document.getElementById("Imagefile").value=""},async upload(e){console.log(e);let t=URL.createObjectURL(e.target.files[0]);console.log(t),this.$store.commit("uploadImage",t),this.step=1;const a=new Image,i=await new Promise((e=>{a.onload=()=>{const t={height:a.height,width:a.width};e(t)},a.src=t}));this.$store.commit("updateDimentions",i),console.log(this.imageDimensions)}}};const de=(0,P.Z)(ce,[["render",g]]);var pe=de,ge=a(9391),fe=(a(541),a(7658),[{width:1170,height:780,name:"Kim Hyun",userImage:"https://images.unsplash.com/photo-1518833895278-e789e65b2b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",postImage:"https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",likes:36,date:"May 15",liked:!1,content:"오늘 무엇을 했냐면요 아무것도 안했어요 ?",filter:"perpetua"},{width:1176,height:779,name:"John Doe",userImage:"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",postImage:"https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",likes:20,date:"Apr 20",liked:!1,content:"흔한 자랑스타그램",filter:"clarendon"},{width:1170,height:781,name:"Minny",userImage:"https://images.unsplash.com/photo-1530193887105-e326e00b98c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",postImage:"https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",likes:49,date:"Apr 4",liked:!1,content:"우리집 개는 화장실 물도 내림",filter:"lofi"}]),me=["aden","_1977","brannan","brooklyn","clarendon","earlybird","gingham","hudson","inkwell","kelvin","lark","lofi","maven","mayfair","moon","nashville","perpetua","reyes","rise","slumber","stinson","toaster","valencia","walden","willow","xpro2"];const he=(0,f.MT)({state(){return{data:fe,a:0,uploadImage:"uploadImage",uploadcontent:"",imageDimensions:{},filterreception:"",Filter:me}},mutations:{uploadImage(e,t){e.uploadImage=t},updateDimentions(e,t){e.imageDimensions=t},namechange(e,t){e.data[t].name="park"},stepplus(e){e.step++},stepminus(e){e.step--},likesplus(e,t){0==e.data[t].liked?(e.data[t].likes++,e.data[t].liked=!0):(e.data[t].likes--,e.data[t].liked=!1)},likespublish(e){var t={likes:0,liked:!1};e.data.unshift(t)},publish(e){var t={width:e.imageDimensions.width,height:e.imageDimensions.height,name:"Kim Hyun",userImage:"https://images.unsplash.com/photo-1518833895278-e789e65b2b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",postImage:e.uploadImage,likes:0,date:"May 15",liked:!1,content:e.uploadcontent,filter:e.filterreception};e.data.unshift(t),document.getElementById("Imagefile").value=""}},actions:{async getData(e){e.a=Math.round(Math.random()),0==e.a&&await ie.Z.get("https://yangharry.github.io/vue/more0.json").then((e=>{console.log(e.data),this.state.data.push(e.data)})),1==e.a&&await ie.Z.get("https://yangharry.github.io/vue/more1.json").then((e=>{console.log(e.data),this.state.data.push(e.data)}))}}});var we=he,ve=a(5205);(0,ve.z)("/practice/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});let be=(0,ge.Z)(),ke=(0,i.ri)(pe);ke.config.globalProperties.emitter=be,ke.use(we).mount("#app")}},t={};function a(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,o,s){if(!i){var n=1/0;for(c=0;c<e.length;c++){i=e[c][0],o=e[c][1],s=e[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(r=!1,s<n&&(n=s));if(r){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,o,s]}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,n=i[0],r=i[1],l=i[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(l)var c=l(a)}for(t&&t(i);u<n.length;u++)s=n[u],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},i=self["webpackChunkvuestagram"]=self["webpackChunkvuestagram"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(4935)}));i=a.O(i)})();
//# sourceMappingURL=app.a5e635c3.js.map