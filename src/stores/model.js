import { defineStore } from 'pinia'

export default defineStore('model', {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? 'hidden' : ''
    },
  },
})
