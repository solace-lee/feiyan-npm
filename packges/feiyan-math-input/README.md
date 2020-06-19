# 作用：
  **对数学公式输入框**
```
  <math-input
    id="mf"
    ref="mf"
    v-model="answer"
    class="mt-2"
    :on-keystroke="displayKeystroke"
    :config="config"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  />
```
```
    config: { // 必填
      smartFence: false,
      defaultMode: 'text', // 中文公式混合
      // virtualKeyboardMode: 'manual', // 手动打开
      virtualKeyboardMode: 'onfocus', // 自动展开
      customVirtualKeyboardLayers: mKeyboardLayers,
      customVirtualKeyboards: keyboardsList,
      virtualKeyboards: keyboardAction
    },
    id: // 必填用来挂载节点
    ref: // 非必须
    answer: // 公式输入输出结果，不带$
    focus: // 聚焦事件
    blur： // 脱焦事件
```

# 默认标签 < math-input />
# 引入css样式 /feiyan-math-input/src/math-input.css
# 键盘布局 /feiyan-math-input/src/mathConfig
# import MathLive from 'feiyan-math-input'
# import 'feiyan-math-input/src/math-input.css'
# Vue.use(VueMathjax)
