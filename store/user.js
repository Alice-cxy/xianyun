export const state = {
    userInfo:{
        token:'',
        user:{}
    }
}
//同步处理
export const mutations = {
    setUserInfo(state, data) {
        state.userInfo = data
    },
    //清除用户数据
    cleanUserInfo(state, info){
        if(process.browser){
            localStorage.removeItem('userInfo');
        }
        state.userInfo = {}
    }
}
//异步处理
export const actions = {
    login({commit},data){
        return this.$axios({
            url: '/accounts/login',
            method:'POST',
            data
        }).then(res => {
            const data =res.data
            commit('setUserInfo',data)
            return data
        })
    }
}