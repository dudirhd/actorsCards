import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    popupFlag: false,
    cardsInfo: []
  }),
})
