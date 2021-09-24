import { ADD_COUNTER, ADD_PRODUCT } from "./mutations-types"
export default {

    addCart(context, payLoad) {
        return new Promise((reslove, reject) => {
            let oldproduct = null;
            for (let item of context.state.cartList) {
                // console.log(item);
                if (item.iid == payLoad.iid) {
                    oldproduct = item;
                }
            }
            if (oldproduct) {
                context.commit(ADD_COUNTER, oldproduct)
                reslove('添加的商品数加1')
            } else {
                payLoad.count = 1;
                // context.state.cartList.push(payLoad)
                context.commit(ADD_PRODUCT, payLoad)
                reslove('添加商品成功')
            }
        })
    }

}