import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    name: '',
    hello: 'hello',
  }),
  getters: {
    greetings() { return `${this.hello} ${this.name}` },
  },
  actions: {
    changeName(newName) {
      this.name = newName
    },
  },
})
