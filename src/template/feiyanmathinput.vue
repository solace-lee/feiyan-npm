<template>
  <div class="item">
    <div>数学公式输入框</div>
    <div style="width:300px">
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
    </div>
    
  </div>
</template>

<script>
import {
  mKeyboardLayers,
  keyboardsList,
  keyboardAction
} from '../../packges/feiyan-math-input/src/mathConfig'
export default {
  name: 'FeiyanMathInput',
  data () {
    return {
      config: {
        smartFence: false,
        defaultMode: 'text',
        // virtualKeyboardMode: 'manual',
        virtualKeyboardMode: 'onfocus',
        customVirtualKeyboardLayers: mKeyboardLayers,
        customVirtualKeyboards: keyboardsList,
        virtualKeyboards: keyboardAction
      },
      answer: ''
    }
  },
  watch: {
    answer (val) {
      console.log(val);
    }
  },
  methods: {
    displayKeystroke (keystroke, _ev) {
      // 键盘事件
      console.log(_ev);
      this.keystroke = keystroke
      return true
    }
  }
}
</script>