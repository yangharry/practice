import { createStore } from 'vuex'
import axios from 'axios'
import InstaData from './assets/InstaData.js';
import InstaFilter from './assets/InstaFilter.js';

const store = createStore({
    state() {
        return {
            data: InstaData,
            a: 0,
            uploadImage: 'uploadImage',
            uploadcontent: '',
            imageDimensions: {},
            filterreception: '',
            Filter: InstaFilter,
        }
    },
    mutations: {
        // setMore(state, data){
        //     state.more = data;
        // },
        uploadImage(state, payload) {
            state.uploadImage = payload;
        },
        updateDimentions(state, payload) {
            state.imageDimensions = payload;
        },
        namechange(state, payload) {
            state.data[payload].name = 'park';
        },
        stepplus(state) {
            state.step++;
        },
        stepminus(state) {
            state.step--;
        },
        likesplus(state, payload) {
            if (state.data[payload].liked == false) {
                state.data[payload].likes++;
                state.data[payload].liked = true;
            }
            else {
                state.data[payload].likes--;
                state.data[payload].liked = false;
            }
        },
        likespublish(state) {
            var mycontents = {
                likes: 0,
                liked: false,
            };
            state.data.unshift(mycontents);
        },
        publish(state) {
            var mycontents = {
                width: state.imageDimensions.width,
                height: state.imageDimensions.height,
                name: "Kim Hyun",
                userImage: "https://images.unsplash.com/photo-1518833895278-e789e65b2b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
                postImage: state.uploadImage,
                likes: 0,
                date: "May 15",
                liked: false,
                content: state.uploadcontent,
                filter: state.filterreception
            };
            state.data.unshift(mycontents);
            document.getElementById('Imagefile').value = "";
        },
    },
    actions: {
        async getData (state) {
            state.a = Math.round(Math.random());
              if  (state.a == 0) {
               await  axios.get ("https://yangharry.github.io/vue/more0.json")
                    .then(  (result) => {
                        console.log(result.data);
                        // context.commit('setMore', result.data);
                        this.state.data.push(result.data);
                    })
            }
            if (state.a == 1) {
                await  axios.get("https://yangharry.github.io/vue/more1.json")
                    .then((result) => {
                        console.log(result.data);
                        // context.commit('setMore', result.data);
                        this.state.data.push(result.data);
                    })
            }
        },
    },
})

export default store;