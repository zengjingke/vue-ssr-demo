import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 将实例 改造成工厂函数

export function createStore() {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
  });
}
