// components/test/test.js
Component({
  data: {
    n1: 0,
    n2: 0,
    sum: 0
  },
  methods: {
    addN1() {
      this.setData({
        n1: this.data.n1 + 1
      })
    },
    addN2() {
      this.setData({
        n2: this.data.n2 + 1
      })
    }
  },
  observers: {
    'n1, n2': function(n1, n2) {
      this.setData({
        sum: n1 + n2
      })
    }
  }
})
