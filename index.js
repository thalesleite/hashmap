/**
 * Hash Table (also known as hash map, map, dictionary or obj) is a data structure that helps with mapping
 * keys to values for highly efficient operations like the lookup, insertion and deletion operations.
 *
 * Time complexity:
 * hash(key):       O(n)
 * set(key, value): O(1)
 * get(key):        O(1)
 * has(key):        O(1)
 * remove(key):     O(1)
 * values():        O(m+n), where m is the capacity of the hash table and n is the number of elements.
 *
 * Space complexity: O(n)
 */
const HashMap = require("./HashMap")

const myHashMap = new HashMap()

myHashMap.set("apple", "red")
myHashMap.set("banana", "yellow")
myHashMap.set("carrot", "orange")
myHashMap.set("dog", "brown")
myHashMap.set("elephant", "gray")
myHashMap.set("frog", "green")
myHashMap.set("grape", "purple")
myHashMap.set("hat", "black")
myHashMap.set("ice cream", "white")
myHashMap.set("jacket", "blue")
myHashMap.set("kite", "pink")
myHashMap.set("lion", "golden")

console.log(myHashMap.get("grape")) // Output: purple
console.log(myHashMap.has("kite")) // Output: true
console.log(myHashMap.remove("lion")) // Output: true
console.log(myHashMap.length()) // Output: 11
myHashMap.clear()
console.log(myHashMap.length()) // Output: 0

myHashMap.set("city", "New York")
console.log(myHashMap.keys()) // Output: ['city']
console.log(myHashMap.values()) // Output: ['New York']
console.log(myHashMap.entries())
