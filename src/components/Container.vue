<template>
<div>
<div v-if= "step == 0">
  <Post v-for="(k,i) in $store.state.data" :key="k" :data="$store.state.data[i]" :i="i"
  
  />
  <!-- :class="$store.commit('likespublish')"
  :likes="$store.state.data[i].likes" -->
</div>

<!-- 필터선택페이지 -->
<div v-if= " step == 1 ">
  <div class="upload-image">
    <img v-if=" $store.state.imageDimensions.height > $store.state.imageDimensions.width " 
    class="image-setting1" 
    :class="$store.state.filterreception" :src="$store.state.uploadImage"/>
    <img v-else class="image-setting2" 
    :class="$store.state.filterreception" :src="$store.state.uploadImage"/>
  </div>
  <!-- <div class="upload-image" :class="filterreception"
  :style="{ backgroundImage : `url(${uploadImage})`}">
  </div> -->
  <div class="filters" >
    <div>
    <FilterNmae v-for="(a,i) in $store.state.Filter" :key="a" 
    :filter="$store.state.Filter[i]" >
    </FilterNmae>
    </div>
    <div>
    <FilterBox v-for="(a,i) in $store.state.Filter" :key="a" 
    :filter="$store.state.Filter[i]" >
      <!-- {{Filter[i]}} slot 문법-->
      <!-- <template v-slot:a>{{Filter[i]}}</template> slot a,b 각각 -->
      <!-- <template v-slot:b>{{Filter[i+1]}}</template> slot a,b 각각 -->
      <!-- <template v-slot:default="작명">{{작명.msg}}</template> 자식에서 받아오는 slot props-->
    </FilterBox>
    </div>
  </div>
</div>


<!-- 글작성페이지 -->
<div v-if= "step == 2">
  <div class="upload-image">
    <img v-if=" $store.state.imageDimensions.height > $store.state.imageDimensions.width " 
    class="image-setting1" 
    :class="$store.state.filterreception" :src="$store.state.uploadImage"/>
    <img v-else class="image-setting2" 
    :class="$store.state.filterreception" :src="$store.state.uploadImage"/>
  </div>
  <!-- <div class="upload-image" :class="filterreception"
  :style="{ backgroundImage : `url(${uploadImage})`}" ></div> -->
  <div class="write" >
    <textarea @input="$emit('uploadwrite', $event.target.value)" 
    class="write-box">write!</textarea>
  </div>
</div>
<div v-if= "step == 3">
  <MyPage :one="1"/>
</div>

</div>
</template>

<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
import FilterNmae from './FilterNmae.vue';
import MyPage from './MyPage.vue';


export default {

    name : 'today-container',
    date(){
      return{
      }
    },
    components: {
        Post : Post,
        FilterBox : FilterBox,
        FilterNmae : FilterNmae,
        MyPage : MyPage,
  },
  props :{
        step : Number,
    }
}
</script>

<style>
.image-setting1{
  width: auto;
  height: 100%;

}
.image-setting2{
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.upload-image{
width: 100%;
height: 450px;
background: white;
background-size : cover;
text-align: center;
line-height: 450px;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}

</style>