const state = () => {
    return { productList: []}
}
//xử lý đồng bộ
const mutations = {
    SET_DATA_PRODUCT(state, payload) {
        state.productList = payload
    }
}





//chứa các tác vụ bất đồng bộ
const actions = {
    // async getProductList(context, payload) {
    //   let data = []
    //   context.commit("SET_DATA_PRODUCT", data);
    // },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };