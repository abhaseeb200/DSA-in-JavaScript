let data = [3,4,5,12,7,8,9,6,0,2];

let a = data[0];
let b = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i] > a) {
        a = data[i];
    }
}

for (let i = 0; i < data.length; i++) {
    if (data[i] < a && data[i] > b) {
        b = data[i];
    }
    
}
console.log(a,b) // 12, 9

// Now solve this only one loop 
let d = data[0]
let e = data[0]

for (let i = 1; i < data.length; i++) {
    if (data[i] > d) {
        d = data[i]
    }
    
    if (data[i] > e && data[i] < d) {
        e = data[i]
    }
}
console.log(d,e)


//Now solve this only with difference method ( array[i + 1] )