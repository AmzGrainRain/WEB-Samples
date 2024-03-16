import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    status: {
      showControlCenterUI: false
    }
  }),
  getters: {},
  actions: {}
})