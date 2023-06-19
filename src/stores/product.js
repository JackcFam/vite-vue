import {defineStore} from 'pinia'
export const useProductStore = defineStore('counter', {
    state: () => ({
        product: []
    }),

    getters: {
        doubleCount: state => state.product
    },
    
    actions: {
        increment() {
            this.product.filter(e => e.name.length > 10)
        },
        logs() {
            console.log(this.product);
        },
    }
})