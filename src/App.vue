<template>

<div>
  <div class="header">
    <ul class="header-button-left">
      <li @click="[step -- , cancle()]">Cancel</li>
    </ul>
    <ul class="header-button-right">
       <li v-if=" step == 2 " @click="[publish(), step = 0 ] " >upload</li>
       <li v-else @click="step ++ ">Next</li>
    </ul>
    <div class="logo">
    <div class="home-btn" @click="step = 0" >Home</div>
    <div class="follower-btn" @click="step = 3" >Follower</div>
    </div>
  </div>

  <!-- <p>{{data}} {{a}} {{user}}</p> -->
  <!-- <h4>안녕 {{ $store.state.user[$store.state.user.length - 1].name }} 
    {{$store.state.user[$store.state.user.length - 1].age}}</h4> -->
  <!-- <button @click="$store.state.name = '박' ">버튼</button> 
  vuex 는 store 에 있는 데이터를 직접 수정하면 
  전부다 바껴서 곤란함 컴포넌트로 불러와서 따로 수정 -->
  <!-- <button @click="namechange($store.state.data.length - 1)">버튼</button> -->
  <!-- <button @click="$store.commit('ageplus', $store.state.user.length - 1)">버튼</button> -->

  <Container @uploadwrite="$store.state.uploadcontent = $event " :step="step" />

  <!-- <p>{{now()}} {{카운터}}</p>
  <button @click="카운터++">버튼</button>   -->

  <div style=" text-align : center; ">
    <button @click="$store.dispatch('getData')">더보기</button>
  </div>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="Imagefile" class="inputfile" />
      <label for="Imagefile" class="input-plus">
        <span style="font-size: 16px;">+사진추가</span>
      </label>
    </ul>
   </div>


</div>
 <!-- <div v-if="step == 0">내용0</div>
 <div v-if="step == 1">내용1</div>
 <div v-if="step == 2">내용2</div>
 <button @click="step = 0">버튼0</button>
 <button @click="step = 1">버튼1</button>
 <button @click="step = 2">버튼2</button>
 <div style="margin-top : 500px;"></div> -->

</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Container from './components/Container.vue';
// import InstaData from './assets/InstaData.js';
// import axios from 'axios'
// import InstaFilter from './assets/InstaFilter.js';


export default {
  name: 'App',
  data(){
    return {
      step : 0,
      // 카운터 : 0,
      // data : InstaData,
      // a : 0,
      // uploadImage : 'uploadImage',
      // uploadcontent : '',
      // Filter : InstaFilter,
      // filterreception : this.filterreception,
      // imageDimensions : this.imageDimensions,
    }
  },

  mounted(){
    this.emitter.on('filter-send',(b)=>{ 
      //전송할 데이터가 많으면 vuex 를 쓰는게 좋음
      this.$store.state.filterreception = b;
      console.log(this.filterreception)
    });
  },
  components: {
    Container : Container,
  },

  computed: {
    data(){
      return this.$store.state.data[this.$store.state.data.length-1].name
    },
    ...mapState(['a']),
    ...mapState({ user : 'data'})
    // now2(){
    //   return new Date()
    // },

  },

  methods : {
    ...mapMutations(['publish','namechange']),
    // now(){
    //   return new Date()
    // },
    // imgUpload(val){
    //   let img = new Image();
    //   img.scr = val;
    //   let width = img.width;
    //   let height = img.height;
    // },
    cancle(){
      document.getElementById('Imagefile').value = "";
    },
    // publish(){
    //   var mycontents = {
    //   width: this.imageDimensions.width,
    //   height: this.imageDimensions.height,
    //   name: "Kim Hyun",
    //   userImage: "https://placeimg.com/100/100/arch",
    //   postImage: this.uploadImage,
    //   likes: 0,
    //   date: "May 15",
    //   liked: false,
    //   content: this.uploadcontent,
    //   filter: this.filterreception
    // };
    //   this.data.unshift(mycontents);
    //   this.step = 0 ;
    //   document.getElementById('Imagefile').value = "";
    // },
    async upload(e){
      // let 파일 = e.target.files[0];
      console.log(e);
      let url1 = URL.createObjectURL(e.target.files[0]);
      console.log(url1);
      // this.uploadImage = url1;
      this.$store.commit('uploadImage', url1)
      this.step = 1;
      const image = new Image();
      const imageDimensions = await new Promise((resolve) =>{
        image.onload = () => {
          const dimensions = {
            height : image.height,
            width : image.width,
          };
          resolve(dimensions);
        };
        image.src = url1;
      });
      // this.imageDimensions = imageDimensions;
      this.$store.commit('updateDimentions', imageDimensions)
      console.log(this.imageDimensions);
      // let reader = new FileReader();
      // reader.readAsDataURL(파일);
      // reader.onload = e => {
      //   const src = e.target.result;
      //   const img = new Image();
      // img.onload = () => {
      //   this.$emit('loaded', {src, 파일, width: img.width, height: img.height});
      // };
      // img.onerror = () => {
      //   this.$emit('error');
      // };
      // img.src = src;
      // img.onload = function () {
      //   console.log(img.height)
      // };
      // this.height = function () {console.log(img.height)};
      // };
      // console.log(this.width);
      // console.log(this.height);
    }, 
    // more(){
    //    // axios.post('URL', { name : 'kim'}).then(성공).catch(실패)
    //   this.a = Math.round(Math.random());
    //   if(this.a == 0){
    //   axios.get('https://codingapple1.github.io/vue/more0.json')
    //   .then((result)=>{
    //     // console.log(result.data);
    //     this.data.push(result.data);
    //   })}
    //   if(this.a == 1){
    //     axios.get('https://codingapple1.github.io/vue/more1.json')
    //   .then((result)=>{
    //     this.data.push(result.data);
    //   })}
    // }
  },
}
</script>

<style>
.home-btn{
  width: 50%;
}
.follower-btn{
  width: 50%;
}
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 50%;
  margin: auto;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
  color: skyblue;
  cursor: pointer;
  text-align: center;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  z-index: 1;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
  z-index: 1;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 576px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
