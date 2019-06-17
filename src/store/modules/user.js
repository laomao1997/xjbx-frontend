// initial state
const state = {
    userInfo: {
        userId: 1,
        userName: "Edoge",
        userPassword: "123",
        userDOB: "1997-01-01",
        userDescription: null,
        userAvatar: "/avatar.png",
        blogList: [],
        userGender: 0
    }
}

// getters
const getters = {
    userLogin: state => {
        return state.user.userInfo.userId != null
    }
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
