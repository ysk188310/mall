import { request } from "./request";
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.discountBgColor = itemInfo.descountBgColor
        this.realPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.services = services
    }
}
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}
export class GoodsParams {
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : ''; //判断有没有有的话
        this.set = info.set;
        this.infoTitle = info.key;
        this.rule = rule.tables;
    }
}
export class GoodsRate {
    constructor(rate) {
        this.content = rate.content;
        this.style = rate.style;
        this.time = rate.created;
        this.image = rate.user.avatar;
    }
}