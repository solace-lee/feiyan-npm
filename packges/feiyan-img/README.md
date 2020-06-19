# 作用：
  **图片显示控件**
```
    typelist: { // 答案列表(已答题) || 空数列表和空类型
      type: Array,
      default () {
        return []
      }
    },
    complate: { // 题目是否完成
      type: Boolean,
      default () {
        return false
      }
    },
    detail: { // 题目内容
      type: String,
      default () {
        return ''
      }
    },
    imgs: { // 题目图片
      type: Array,
      default () {
        return []
      }
    },
    topicid: { // 题目ID或者其它，最终会绑定到答题框中，可用户聚焦时滚动定位
      type: String,
      default () {
        return ''
      }
    }
```

#### 依赖vuetify（v-navigation-drawer，v-checkbox），vuetify style，sass。
#### 依赖feiyan-math-input

# 默认标签 < fillsContentShow />
