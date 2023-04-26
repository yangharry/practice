<template>
    <div >
         <div  style="padding : 10px">
             <h4>팔로워</h4>
             <input type="text" @input="search" placeholder="🔍" />
             <div v-for="(a,i) in follower" :key="i" class="post-header">
             <img class="profile" :src="a.image"/>
            <span class="profile-name">{{a.name}}</span>
        </div>
    </div>
</div>
</template>

<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';
// import {useStore} from 'vuex'


export default {
    name : 'today-mypage',
    props : {
        one : Number,
    },

    setup(){
        let follower = ref([]);
        let follower2 = ref([]);

        function search(a){
            console.log(a)
            if(a.data == null){
                follower.value = follower2.value;
            }
            else{
            let re = follower.value.filter((e)=>{
                return e.name.match(new RegExp(a.data,"i"))
            })
            follower.value = re;
            }
        }




    //     let { one } = toRefs(props);
    //     // console.log(one.value);

    //     watch(one,()=>{

    //     });

    //     let re =computed(()=>{
    //         return follower.value.length
    //    })
    //    console.log(re.value)

    //    let store = useStore();
    //    console.log(store.state.data[0].name);
        // let test = reactive({name : 'kim'}) //보통 arry, abject 집어넣음 
        // test;

        onMounted(()=>{
            axios.get('./follower.json').then((a)=>{
                follower.value = a.data
                follower2.value = a.data
            })
        })
        
          return {follower, search}
    },

    date(){
        return{

        }
    },
}
</script>

<style>

</style>