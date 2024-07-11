class HashMap {
  // A prime number size helps in achieving a more uniform distribution of keys.
  // When the size of the array is a prime number, it minimizes the chance that patterns
  // in the data will cause multiple keys to hash to the same index.
  constructor(size = 53) {
    this.buckets = new Array(size)
  }

  hash(key) {
    let hashCode = 0

    // In some collision resolution strategies like open addressing,
    // using a prime number helps in reducing secondary clustering,
    // which occurs when clusters of occupied slots form and lead to increased collisions.
    const primeNumber = 31
    for (let i = 0; index < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
    }

    return hashCode
  }

  set(key, value) {
    let index = this.hash(key)

    if (!this.buckets[index]) {
      this.buckets[index] = []
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      // If a key already exists, then the old value is overwritten
      // or we can say that we update the key’s value
      if (this.buckets[index][i][0] === key) {
        this.buckets[index][i][1] = value
        return
      }
    }

    this.buckets[index].push([key, value])
  }
}

module.exports = HashMap
