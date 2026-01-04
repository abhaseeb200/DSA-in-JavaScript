// Check if a given string is a palindrome
let givenString = "saas"
let b = ""
for (let i = givenString.length - 1; i >= 0; i--) {
    b += givenString[i]
}
console.log(b == givenString)

//Without using any variable
for (let i = 0; i <= givenString.length - 1; i++) {
    console.log(givenString[i] == givenString[givenString.length - 1 - i])
}