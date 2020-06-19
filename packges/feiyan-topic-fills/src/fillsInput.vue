<template>
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
</template>

<script>
import {
  mKeyboardLayers,
  keyboardsList,
  keyboardAction
} from 'feiyan-math-input/src/mathConfig'
export default {
  name: 'FillsInput',
  props: ['value'],
  data () {
    return {
      config: {
        smartFence: true,
        defaultMode: 'text',
        // virtualKeyboardMode: 'manual',
        virtualKeyboardMode: 'onfocus',
        customVirtualKeyboardLayers: mKeyboardLayers,
        customVirtualKeyboards: keyboardsList,
        virtualKeyboards: keyboardAction
      },
      keystroke: ''
    }
  },
  computed: {
    answer: {
      get () {
        let x = this.value || ''
        return x.replace(/\$/g, '')
      },
      set (val) {
        this.$emit('input', `$${val}$`)
      }
    }
  },
  methods: {
    displayKeystroke (keystroke, _ev) {
      this.keystroke = keystroke
      return true
    },
    onFocus () {
      setTimeout(() => {
        this.$refs.mf.focus()
      }, 0)
    }
  }
}
</script>
