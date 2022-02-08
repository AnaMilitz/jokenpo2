import axios from "axios";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"

const store = createStore({
    state: {
        user: null,
    },
    getters:{
        getAuth: state => {
            return {Authorization: "Bearer "+ state.user.token};
        },
        getHeader: state => {
            return {headers: {Authorization: "Bearer "+ state.user.token}};            
        }
    },
    mutations: {
        async setToken(state, user){
            state.user = {token: user.access_token, expiration: new Date(user.expiration)}
        },
        async destroyToken(state){
            state.user = null;
        }
    },
    plugins: [createPersistedState()],
});

export default store;