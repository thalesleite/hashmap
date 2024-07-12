class HashMap {
  // A prime number size helps in achieving a more uniform distribution of keys.
  // When the size of the array is a prime number, it minimizes the chance that patterns
  // in the data will cause multiple keys to hash to the same index.
  constructor() {
    this.buckets = new Array(16).fill(null).map(() => [])
    this.capacity = this.buckets.length
    this.size = 0
    this.loadFactor = 0.75
  }

  hash(key) {
    let hashCode = 0
    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
    }

    return hashCode % this.buckets.length
  }

  set(key, value) {
    const index = this.hash(key)

    if (!this.buckets[index]) {
      this.buckets[index] = []
    }

    const bucket = this.buckets[index]

    for (let i = 0; i < bucket.length; i++) {
      // If a key already exists, then the old value is overwritten
      // or we can say that we update the key’s value
      if (bucket[i][0] === key) {
        bucket[i][1] = value
        return
      }
    }

    bucket.push([key, value])
    this.size++

    // Check load factor and resize if necessary | Dynamic resizing
    if (this.size / this.capacity > this.loadFactor) {
      this.resize()
    }
  }

  // get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
  get(key) {
    let index = this.hash(key)

    if (!this.buckets[index]) {
      return null
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1]
      }
    }
  }

  // has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
  has(key) {
    const index = this.hash(key)
    const bucket = this.buckets[index]
    if (!bucket) {
      return false
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true
      }
    }
    return false
  }

  // remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
  remove(key) {
    const index = this.hash(key)
    const bucket = this.buckets[index]
    if (!bucket) {
      return false
    }
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1)
        this.size--
        return true
      }
    }
    return false
  }

  // length() returns the number of stored keys in the hash map.
  length() {
    return this.size
  }

  // clear() removes all entries in the hash map.
  clear() {
    this.buckets = new Array(this.buckets.length)
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = []
    }
    this.size = 0
  }

  // keys() returns an array containing all the keys inside the hash map.
  keys() {
    const keys = []
    for (const bucket of this.buckets) {
      if (!bucket) continue
      for (const [key, value] of bucket) {
        keys.push(key)
      }
    }
    return keys
  }

  // values() returns an array containing all the values.
  values() {
    const values = []
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          values.push(this.buckets[i][j][1])
        }
      }
    }
    return values
  }

  // entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {
    const entries = []
    for (const bucket of this.buckets) {
      if (!bucket) continue
      for (const [key, value] of bucket) {
        entries.push([key, value])
      }
    }
    return entries
  }

  resize() {
    const oldBuckets = this.buckets
    this.capacity = this._getNextPrime(this.capacity * 2)
    this.buckets = new Array(this.capacity).fill(null).map(() => [])
    this.size = 0

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value)
      }
    }
  }

  // prefixing function or variable names with an underscore _ is a common convention used
  // to indicate that these functions or variables are intended to be private or for internal use only
  _getNextPrime(num) {
    while (!this._isPrime(num)) {
      num++
    }
    return num
  }

  _isPrime(num) {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
  }
}

module.exports = HashMap
