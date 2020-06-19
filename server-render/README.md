# 作用：
  **对数学公式采用mathjax-full服务端渲染框架进行渲染, 减少页面抖动，提升性能和体验**
```
    formula: {
      type: String,
      default: ''
    },
    renderkey: {
      type: String,
      default: '$'
    },
    showstyle: {
      type: Boolean,
      default: false
    }
```

#### formula：必传，待渲染的字符串。
#### renderkey：选填，默认为$,公式间隔符。
#### showstyle：选填，是否回传样式（未完成）。

###### 数据渲染实现了100ms的防抖，提升学生输入公式时的渲染速度
# 默认标签 < vue-mathjax />
