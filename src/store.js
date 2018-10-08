import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/../firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: false,
    errorMessages: [],
    loading: false,
    words: [],
  },
  mutations: {
    ADD_WORD(state, word) {
      state.words.push(word)
    },
    LOADING(state, loading) {
      state.loading = loading
    },
    LOG_ERROR(state, errorMessage) {
      state.error = true
      state.errorMessages.push(errorMessage)
    },
  },
  actions: {
    addWord({commit}, {word, definition}) {
      commit('LOADING', true)

      const newWord = {}
      newWord[word] = definition

      db.collection('words')
        .doc(word)
        .set(newWord)
        .then(() => {
          commit('LOADING', false)
          commit('ADD_WORD', {word, definition})
        })
        .catch(function(error) {
          commit('LOG_ERROR', `failed to add ${word}: ${error}`)
        })
    },
  },
  getters: {
    words: state => state.words,
    hasError: state => state.error,
  },
})
