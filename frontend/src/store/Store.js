import axios from 'axios';

const url = 'http://localhost:4500/';

export const storeVuex = {
  state: {
    users: [],
    singleUser: [],
    message: '',
  },
  getters: {},
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setSingleUsers(state, payload) {
      state.singleUser = payload;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    getAllUsers({ commit }) {
      axios
        .get(`${url}api/users`)
        .then((result) => {
          const users = result.data;
          commit('setUsers', users);
        })
        .catch((err) => {
          throw err;
        });
    },
    getSingleUser({ commit }, id) {
      axios
        .get(`${url}api/users/${id.id}`)
        .then((result) => {
          const users = result.data;
          if (result.status === 200) {
            commit('setSingleUsers', users);
          }
        })
        .catch((err) => {
          throw err;
        });
    },
    async addUser({ commit }, data) {
      console.log(data);
      const res = await axios({
        method: 'post',
        url: `${url}api/users`,
        data: data,
      });
      commit('setUsers', data);
      if (res.status === 200) {
        return 1;
      } else {
        return 0;
      }
    },
    async updateUser({ commit }, data) {
      const result = await axios({
        method: 'put',
        url: `${url}api/users/${data.id}`,
        data: data,
      });
      commit('setUsers', data);
      if (result.status === 200) {
        return 1;
      } else {
        return 0;
      }
    },
    async deleteUser({ commit }, id) {
      const res = await axios({
        method: 'delete',
        url: `${url}api/users/${id}`,
      });
      commit('setUsers');
      if (res.status === 200) {
        axios
          .get(`${url}api/users`)
          .then((result) => {
            const users = result.data;
            commit('setUsers', users);
          })
          .catch((err) => {
            throw err;
          });
        return 1;
      } else {
        return 0;
      }
    },
  },
};
