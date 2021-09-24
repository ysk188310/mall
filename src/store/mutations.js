import { ADD_COUNTER, ADD_PRODUCT } from "./mutations-types"
export default {

    [ADD_COUNTER](state, payLoad) {
        payLoad.count += 1
    },
    [ADD_PRODUCT](state, payLoad) {
        payLoad.checked = true
        state.cartList.push(payLoad)
    }

}