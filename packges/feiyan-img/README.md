# 作用：
  **图片显示控件**
```
    imgdata: { // 图片链接，字符串或数组
      type: String || Array,
      default: ''
    },
    float: { // 从左往右 start end space-between space-around // flex布局下生效
      type: String,
      default: 'end'
    },
    display: { // 图片布局方式
      type: String,
      default: 'flex' // flex block inline-block inline //flex 会启用flex-wrap
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    }
```

#### 依赖vuetify style。
# import feiyanImg from 'feiyan-img'
# Vue.use(feiyanImg)

# 默认标签 < feiyan-img />
