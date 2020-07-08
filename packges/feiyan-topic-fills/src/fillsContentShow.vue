<template>
  <div style="width:100%">
    <div
      style="width:100%;"
      class="pa-2"
      @click="handlerAnswer"
    >
      <vue-mathjax
        :formula="newString"
        class="topic-content"
      />
    </div>

    <feiyan-img
      :imgdata="imgs"
      float="end"
    />

    <fills-input
      v-if="dialog"
      :id="topicid"
      ref="fillsInput"
      v-model="result"
      @focus="dialog = true"
      @blur="dialog = false"
    />

    <v-navigation-drawer
      v-if="drawer"
      :id="topicid"
      v-model="drawer"
      width="100%"
      floating
      bottom
      temporary
    >
      <div class="d-flex flex-column pa-4">
        <v-checkbox
          v-for="(item, index) in answerlist[selectIndex].options"
          :key="index"
          v-model="selectResult"
          :value="item.optionName"
          color="primary"
        >
          <template v-slot:label>
            <vue-mathjax
              :formula="item.content"
              style="line-height:100%"
            />
          </template>
        </v-checkbox>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import fillsInput from './fillsInput'
export default {
  name: 'FillsContentShow',
  components: {
    fillsInput
  },
  props: {
    typelist: {
      type: Array,
      default () {
        return []
      }
    },
    complete: {
      type: Boolean,
      default () {
        return false
      }
    },
    detail: {
      type: String,
      default () {
        return ''
      }
    },
    imgs: {
      type: Array,
      default () {
        return []
      }
    },
    topicid: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      newString: '',
      dialog: false,
      selectIndex: 0,
      answerlist: [],
      result: '', // 输入框回来的结果
      drawer: false, // 选择题抽屉
      selectResult: [] // 选择题答案
    }
  },
  watch: {
    detail: {
      immediate: true,
      handler (val) {
        this.init(val)
      }
    },
    typelist: {
      // 把内容转存到本组件内
      deep: true,
      handler (val) {
        this.answerlist = val.map(ele => {
          // 格式初始化
          ele.answer = ele.answer || ''
          ele.select = ele.select || []
          ele.options = ele.options || []
          ele.type = ele.type || 2
          // ele.isTrue = 0
          return ele
        })
        this.init(this.detail)
      },
      immediate: true
    },
    result (val) {
      // 填空题答案赋值
      let x = JSON.parse(JSON.stringify(this.answerlist))
      if (x[this.selectIndex].type === 1) {
        x[this.selectIndex].answer = val
      }
      this.answerlist = x
      this.init(this.detail)
    },
    dialog (val) {
      // 填空题答案回写
      this.$emit('inputStatus', val)
      if (val) {
        const x = this.answerlist[this.selectIndex].answer
        this.result = ' '
        setTimeout(() => {
          this.$refs.fillsInput.onFocus()
        }, 500)
        this.$nextTick(() => {
          this.result = x
        })
      }
    },
    selectResult (val) {
      // 选择题答案赋值
      let x = JSON.parse(JSON.stringify(this.answerlist))
      if (x[this.selectIndex].type === 2) {
        x[this.selectIndex].select = val
      }
      this.answerlist = x
      this.init(this.detail)
    },
    drawer (val) {
      // 选择题答案回写
      this.$emit('inputStatus', val)
      if (val) {
        const x = this.answerlist[this.selectIndex].select
        this.selectResult = x
      }
    }
  },
  methods: {
    init (topic) {
      if (topic) {
        let x = topic.split('@_@')
        if (x.length > 1) {
          // 向外发出答案
          this.sendUserResult(JSON.parse(JSON.stringify(this.answerlist)))

          x = x.map((val, index) => {
            if (index < x.length - 1) {
              val = `${val}<botton style="max-width:100%;height:auto;border-bottom: 1px solid #757575;border-radius:0px;text-transform:none !important;min-width:64px;padding:0 16px;" class="v-btn v-btn--flat v-btn--text theme--light grey--text text--darken-1" onclick="setFillsIndex(${index})">
              <span class="d-flex flex-wrap align-center mt-1" style="max-width:100%;">
              ${this.makeSpace(index, x.length - 1)}
              </span>
              </botton>`
            }
            return val
          })
          this.newString = x.join('')
        } else {
          this.newString = topic
        }
      } else {
        this.newString = topic
      }
    },
    makeSpace (index, allLength) {
      if (this.answerlist.length === allLength) {
        // 答案和空匹配上了长度
        let x = this.insertAnswer(index)
        if (this.complete && 'isTrue' in this.answerlist[index]) {
          // 未来给单空标识对还是错使用
          const a = '<i class="notranslate success--text mdi mdi-check theme--light"></i>'
          const b = '<i class="notranslate error--text mdi mdi-close theme--light"></i>'
          if (this.answerlist[index].isTrue) {
            x = `${x}${a}`
          } else {
            x = `${x}${b}`
          }
        }
        return x
      } else {
        // 答案和实际空数对不上
        return '内部错误'
      }
    },
    temp (content, index) {
      if ((!content || content === '$$') && !this.complete) {
        const c = '<i class="notranslate primary--text mdi mdi-border-color theme--light"></i>'
        const d = '<i class="notranslate primary--text mdi mdi-cursor-pointer theme--light"></i>'
        if (this.answerlist[index].type === 1) {
          content = c
        } else {
          content = d
        }
      }
      // 超界换行
      const a = `<span style="word-wrap:break-word;white-space:pre-wrap;word-break:normal;width:auto;padding-right:8px">${content}</span>`
      // 超界隐藏
      const b = `<span class="text-truncate pr-2" style="max-width:100%">${content}</span>`
      return b
    },
    insertAnswer (index) {
      // 插入答案
      if (this.answerlist[index].type === 1) {
        // 普通填空题
        return this.temp(this.answerlist[index].answer, index)
      } else if (this.answerlist[index].type === 2) {
        // 选择填空题
        let x = ''
        this.answerlist[index].select.forEach((item, i) => {
          this.answerlist[index].options.forEach(ele => {
            if (ele.optionName === item) {
              x = `${x}${this.temp(ele.content, index)}`
            }
          })
        })
        if (!x) {
          x = this.temp(x, index)
        }
        return x
      }
    },
    handlerAnswer () {
      if (window.fillsIndex !== -1 && !this.complete) {
        // 题目未完成，激活点击事件
        this.selectIndex = window.fillsIndex
        if (this.answerlist[this.selectIndex].type === 1) {
          // 普通填空题
          this.dialog = true
        } else {
          // 选择题
          this.drawer = true
        }
      }
    },
    sendUserResult (value) {
      value.map(ele => {
        if (ele.type === 2) {
          ele.select.sort((a, b) => {
            if (a.toString().toLowerCase() > b.toString().toLowerCase()) return 1
            return -1
          })
        }
        return ele
      })
      this.$emit('userResult', value)
    }
  }
}
</script>

<style lang="sass" scoped>
.topic-content::v-deep span
  line-height: 180%
</style>
