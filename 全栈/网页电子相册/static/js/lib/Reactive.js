/**
 * Reactive
 * @description 基于 Proxy 封装的数据劫持工具
 * @param {*} val 传入一个值或对象
 * @param {function(target, key, newValue)} callback callback(target, key, newValue)
 * @returns Proxy Object
 */
const reactive = (val, callback) => {
  let reactiveData = {}

  if (typeof(val) !== 'object') reactiveData.value = val
  else reactiveData = val

  return new Proxy(reactiveData, {
    get: (target, key) => target[key],
    set: async (target, key, newValue) => {
      callback(target, key, newValue)
      return true
    }
  })
}

export default reactive








/* 一个简单的动态数据 */

/*
const dy = reactive(0, (target, key, newValue) => {
  // 允许修改数据
  target[key] = newValue
  // 控制台打印
  console.log('数据更新为: ', newValue)
})
dy.value = 1  // 控制台输出: "数据更新为: 1"
*/




/* 一个简单的动态对象 */
/*
const obj = {
  a: 1,
  b: 2,
  c: 3
}
const dy = reactive(obj, (target, key, newValue) => {
  // 允许修改数据
  target[key] = newValue
  // 控制台打印
  console.log('数据更新为: ', newValue)
})
dy.a = 2  // 控制台输出: "数据更新为: 2"
*/
