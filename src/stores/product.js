import {defineStore} from 'pinia'
export const useProductStore = defineStore('product', {
    state: () => ({
        product: [],
        name: 'hello'
    }),

    getters: {
        doubleCount: state => state.product
    },
    
    actions: {
        increment() {
            //1 giá trị thay đổi thì ta dùng luôn this.
            this.product.filter(e => e.name.length > 10)
        },
        logs() {
            // sử dụng $patch khi có nhiều sự thay đổi
            this.$patch((state) =>{
                state.product = state.product.reverse()
                state.name =  'aa'
              })
        },
    }
})