let count = 0
const list = ['A', 'B', 'C', 'D', 'E']

list.forEach((itemA, iA) => {
  list.forEach((itemB, iB) => {
    if (iA !== iB && iA < iB) {
      count++
      //console.log(`Index: ${iA} ${iB}`)
      console.log(`${itemA} ${itemB}`)
    }
  })
})

console.log(`\nTotal items: ${count}\n`)
console.log(list)
