// components/rgb/rgb.js
Component({
  options: {
    pureDataPattern: /^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        '_rgb.r': this.data._rgb.r >= 255 ? 255 : this.data._rgb.r + 5
      })
    },
    changeG() {
      this.setData({
        '_rgb.g': this.data._rgb.g >= 255 ? 255 : this.data._rgb.g + 5
      })
    },
    changeB() {
      this.setData({
        '_rgb.b': this.data._rgb.b >= 255 ? 255 : this.data._rgb.b + 5
      })
    }
  },
  observers: {
    /* 'rgb.r, rgb.g, rgb.b': function(r, g, b) {
      this.setData({
        fullColor: `${r}, ${g}, ${b}`
      })
    } */
    '_rgb.**': function(obj) {
      this.setData({
        fullColor: `${obj.r}, ${obj.g}, ${obj.b}`
      })
    }
  }
})
