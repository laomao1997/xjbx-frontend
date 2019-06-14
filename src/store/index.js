import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            userId: 1,
            userName: "Edoge",
            userPassword: "123",
            userDOB: "1997-01-01",
            userDescription: null,
            userAvatar: "/avatar.png",
            blogList: [],
            userGender: 0
        },
        articles: [
            {
                title: "我的兄弟叫顺口溜",
                person: "ShunLiu",
                created: "2018-03-25",
                modified: "2019-06-01"
            },
            {
                title: "哈利波特大",
                person: "HarryBot",
                created: "2018-03-19",
                modified: "2019-05-28"
            },
            {
                title: "我的父亲是板凳腿",
                person: "FatherBan",
                created: "2019-01-01",
                modified: "2019-05-27"
            },
            {
                title: "Software Engineering Studio",
                person: "YkWang",
                created: "2017-05-06",
                modified: "2019-01-01"
            }
        ]
    }
})