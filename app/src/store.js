import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    readHistory: []
  },
  mutations: {

    callApi: (state, params) => {

      let user = "mediadiet";
  	  let key = "bret5cise7achaxoR@0u$iSTLTiV";
      let headers = {"Authorization": 'Basic ' + btoa(user+':'+key)}

      let d = {
        headers: headers,
        mode: 'cors',
        contentType: 'text/html;charset=utf-8',
        dataType: 'text',
        crossDomain: true,
        data: params.data
      }

      axios.post(params.url,{},d)
      .then(
        params.successCallback,
        this.errorCallback
      )
      .catch(error => {
        console.log(error);
      })

      console.log("iMatrics API call: " + params.url)
      d.headers = "hidden for debug log";
      console.log(d)
    },

    errorCallback: (state, data) => {
      console.log("Error")
      console.log(data)
    }

  },
  getters: {

    isSelectedTheme: state => {
      return state.idSelectedTheme > -1;
    },

  },
});
