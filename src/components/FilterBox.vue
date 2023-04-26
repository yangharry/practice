<template>
  <div class="filter-item" 
  :class="[filter,{'filter-overmouse' : hover}]"
  @mouseleave="hover = ''" @mouseenter="hover = true"
  :style="{ backgroundImage : `url(${$store.state.uploadImage})`}" 
  @click="fire">
    <!-- <slot></slot> slot 문법 -->
    <!-- <slot name="a"></slot>
    <slot name="b"></slot> slot a,b 각각 -->
    <!-- <slot :msg="msg"></slot> 자식에서 받아오는 slot props -->
    
  </div>
  <!--  <div :class="filter + ' filter-item' "  :style="{ backgroundImage : `url(${uploadImage})`}"></div> -->
</template>

<script>

export default {
  data(){
    return{
      msg : 'hello',
      hover : '',
    }
  },
    name : 'today-filterbox',
    methods : {
      fire(){
        this.emitter.emit('filter-send', this.filter )
        //전송할 데이터가 많으면 vuex 를 쓰는게 좋음
      }
    },
    props :{
        filter : String,
    }

}
</script>

<style>
.filter-overmouse{
  transform: scale(0.9);
  transition: all 1s;

}
.filter-item {
  width: 100px;
  height: 100px;
  margin: 5px 15px 15px auto;
  padding: 8px;
  /* float: left; */
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  text-align: center;
  transition: all 1s;
}


</style>