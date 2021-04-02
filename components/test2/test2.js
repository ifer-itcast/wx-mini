// components/test2/test2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      this.setData({
        count: this.properties.count + 1
      })

      this.triggerEvent('add', {
        value: this.properties.count
      })
    }
  }
})
