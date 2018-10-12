import * as v from './mutation-type.js'

export default {
  async getHomeData({commit}, obj){  // 获取列表
    const getData = new Promise((resolve, reject) => {
			$.get('https://cnodejs.org/api/v1/topics',{ tab: obj.tab, limit:'46', page: obj.page }, function(data){
				resolve(data.data);
          console.log(data);
			})

    });
    commit(v.GET_HOME_DATA, {
			type: obj.tab,
			data:await getData
		})
  },
	clearData({commit}){
		commit(v.CLEAR_DATA)
	},
	changeTime({commit}) {
		commit(v.CHANGE_TIME)
	},
	async getThemeDetails({commit}, id){  // 获取列表详情
		const getData = new Promise((resolve, reject) =>{
			$.get(`https://cnodejs.org/api/v1/topic/${id}`, function(data){
				resolve(data.data)
			})
		})
		commit(v.GET_THEME_DETAILS, await getData)
	},

	async getUserData({commit}, name){  // 获取用户信息
		const getData = new Promise((resolve, reject) =>{
			$.get(`https://cnodejs.org/api/v1/user/${name}`,function(data){
				resolve(data.data)
			})
		})
		commit(v.GET_USER_DATA, await getData)
	}
}
