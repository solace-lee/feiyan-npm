# 作用：
  **对填空题的渲染和学生答题的完善，高耦合度**
```
    typelist: { // 答案列表(已答题) || 空数列表和空类型
      type: Array,
      default () {
        return []
      }
    },
    complete: { // 题目是否完成
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
```
    @userResult="answerChange" // 回传用户答案
    @inputStatus="" // 是否聚焦，value：布尔类型
```
# 答案数量和空的数量不匹配时会报内部错误
#### 依赖vuetify（v-navigation-drawer，v-checkbox），vuetify style，sass。
#### 依赖feiyan-math-input feiyan-img
# import fillsContentShow from 'feiyan-topic-fills'
# Vue.use(fillsContentShow)


# 默认标签 < fillsContentShow />
