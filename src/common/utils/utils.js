 // 防抖
 export function debounce(func, delay) {
     let timer = null;
     return function(...args) {
         if (timer) clearTimeout(timer)
         timer = setTimeout(() => {
             func.apply(this, args)
         }, delay)
     }
 }
 //  时间戳格式化
 // 正则表达式是干什么的？
 // 字符串匹配利器
 // y+  一个或者多个y
 //y*  0个或者多个y
 //y? 0个或者1个y
 export function formatDate(date, fmt) {
     //获取的年份
     if (/(y+)/.test(fmt)) {
         fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '')
             // fmt = fmt.replace(''yyyy, (2018)
             // .substr(4 - 4))
             .substr(4 - RegExp.$1.length))
     };
     let o = {
         'M+': date.getMonth() + 1,
         'd+': date.getDate(),
         'h+': date.getHours(),
         'm+': date.getMinutes(),
         's+': date.getSeconds()
     };
     for (let k in o) {
         if (new RegExp(`(${k})`).test(fmt)) {
             let str = o[k] + '';
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
         }
     }
     return fmt;
 };

 function padLeftZero(str) {
     //拼接0防止出现4：4：4  如果传过来20 0020.substr（2） 20
     return ('00' + str).substr(str.length);
 }