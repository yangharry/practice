<template>
  <div class="filter-name">
    {{filter}}
  </div>
</template>

<script>
export default {
    name : 'today-filterbox',
    props :{
        filter : String,
    }

}
</script>

<style>

.filter-name {
  width: 100px;
  height: 0px;
  margin: 10px 15px 5px auto;
  padding: 8px;
  /* float: left; */
  display: inline-block;
  color : skyblue;
  background-size: cover;
  background-position : center;
  text-align: center;
  font-size: 15px;
 }


</style>