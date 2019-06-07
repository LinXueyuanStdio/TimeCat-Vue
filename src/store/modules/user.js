import Api from 'api/login.js'
import { GetCookie, DelCookie } from 'common/important'

// 设置账户信息
function setAccount(_commit, info) {
	let face = info.headPortrait ? info.headPortrait.url : null;
	_commit('SET_USER_FACE', face);
	_commit('SET_USER_NICKNAME', info.nickName);
	_commit('SET_USER_ID', info.objectId);
}

// 清空账户信息
function clearAccount(_commit) {
	DelCookie('xl_admin_t');
	_commit('SET_USER_TOKEN', '');
	_commit('SET_USER_FACE', '');
	_commit('SET_USER_NICKNAME', '');
	_commit('SET_USER_ID', '');
}

// 用户信息
const user = {
	// 负责存储整个应用的状态数据
	state: {
		// 登录凭证
		token: GetCookie('xl_admin_t'),
		// 用户头像
		headPortrait: '',
		// 昵称
		nickName: '',
		// 用户ID
		userId: '',
	},
	// 计算属性
	getters: {
		token: state => state.token,
		headPortrait: state => state.headPortrait,
		nickName: state => state.nickName,
		userId: state => state.userId,
	},
	// 用来处理数据的函数，只能同步操作
	mutations: {
		SET_USER_TOKEN: (state, token) => {
			state.token = token;
		},
		SET_USER_FACE: (state, headPortrait) => {
			state.headPortrait = headPortrait;
		},
		SET_USER_NICKNAME: (state, nickName) => {
			state.nickName = nickName;
		},
		SET_USER_ID: (state, userId) => {
			state.userId = userId;
		},
	},
	// 异步操作
	actions: {
		// Token验证
		CheckToken({ commit }) {
			Api.GetUserInfo(GetCookie('xl_admin_t'))
				.then(res => {
					// 登录成功
					if (res.code == 200) setAccount(commit, res.data);
					// 登录失败
					else clearAccount(commit);
				})
				.catch(() => clearAccount(commit))
		},
		// 登出
		LogOut({ commit }) {
			clearAccount(commit);
		},
	}
}

export default user;
