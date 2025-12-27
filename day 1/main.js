let a = [0, 2, 4, 10]
let j = 0
let missings = []
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        if (i === a[j]) {
            j++
        } else {
            missings.push(i)
        }
    }
}
console.log(missings)

//More Reduceable code
let aa = [0, 2, 4, 10]
let jj = 0
let missings2 = []
for (let i = 0; i <= 10; i += 2) {
    if (i === a[j]) {
        j++
    } else {
        missings2.push(i)
    }
}
console.log(missings2)