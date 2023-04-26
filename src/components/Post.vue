<template>
  <div class="post">
    <div class="post-header">
      <img class="profile" :src="data.userImage"/>
      <span class="profile-name">{{data.name}}</span>
    </div>
      <div class="post-body" @dblclick="$store.commit('likesplus', i)">
      <img v-if=" data.height >= data.width " class="image-setting1" 
      :class="data.filter" :src="data.postImage" />
      <img v-else class="image-setting2" 
      :class="data.filter" :src="data.postImage" />
      </div>
      <!-- <div class="post-body" :class="data.filter"
      :style="{ backgroundImage : `url(${uploadImage})`}"></div> -->
      <div class="post-content">
      <p>{{data.likes}} Likes</p>
      <p><strong>{{data.name}}</strong> {{data.content}}</p>
      <p class="date">{{data.date}}</p>
    </div>
</div>
</template>

<script>
export default {
    date(){
      return{
        margintop : 0,
      }
    },
    name : 'today-post',
    methods : {
    },
    props :{
        data : Object,
        i : Number,
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
    .post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  width: 100%;
  height: 450px;
  background-position: center;
  background-size: cover;
  text-align: center;
  line-height: 450px;
  overflow: hidden;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>