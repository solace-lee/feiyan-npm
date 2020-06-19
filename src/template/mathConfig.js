const mKeyboardLayers = {
  "number": {
    "styles": "",
    "rows": [
      [{
        "class": "keycap btn",
        "label": "+",
        "altKeys": ''
      },
      {
        "class": "keycap",
        "latex": "\>",
        "altKeys": ''
      },
      {
        "class": "separator w5",
      },
      {
        "class": "keycap",
        "label": "7",
        "altKeys": "",
      },
      {
        "class": "keycap",
        "label": "8"
      },
      {
        "class": "keycap",
        "label": "9"
      },
      {
        "class": "separator w5",
      },
      {
        "class": "keycap altcolor",
        "latex": "\\%", // 正负
        "altKeys": "key0",
      },
      {
        "class": "keycap altcolor",
        "latex": "\\frac{#2}{#2}", // 分数
        "altKeys": "key1",
      },
      {
        "class": "keycap w20 altcolor",
        "latex": "\\left( {#2}, {#2} \\right)", // 括号
        "altKeys": "key2",
      },
        // {
        //     "class": "keycap",
        //     "label": "italic",
        //     command: ['apply-style', { 'shape': 'it' }]
        // },
        // {
        //     "class": "separator w10",
        // }
      ],
      [{
        "class": "keycap btn",
        "label": "-"
      },
      {
        "class": "keycap",
        "latex": "\<" // 小于
      },
      {
        "class": "separator w5",
      },
      {
        "class": "keycap",
        "label": "4"
      },
      {
        "class": "keycap",
        "label": "5"
      },
      {
        "class": "keycap",
        "label": "6"
      },
      {
        "class": "separator w5",
      },
      {
        "class": "keycap altcolor",
        "latex": "^\\circ", // 百分号
        "altKeys": "key3",
      },
      {
        "class": "keycap w15 altcolor",
        "latex": "\\sqrt", // 根号
        "altKeys": "key4",
      },
      {
        "class": "keycap w15 altcolor",
        "latex": "sin", // 根号
        "altKeys": "key5",
      },
      // {
      //   "class": "keycap w15",
      //   "insert": "{#2} ^ {2}" // 指数
      // },

        // {
        //     "class": "keycap",
        //     "label": "bold",
        //     command: ['apply-style', { 'series': 'b' }]
        // },
        // {
        //     "class": "separator w10",
        // }
      ],
      [{
        "class": "keycap btn",
        "latex": "=" // 等号
      },
      // {
      //   "class": "keycap btn",
      //   "insert": "\\times ",
      //   "latex": "\\times" // 乘
      // },
      {
        "class": "keycap",
        "latex": "\\ge" // 大于等于
      },
      {
        "class": "separator w5",
      },
      {
        "class": "keycap",
        "label": "1"
      },
      {
        "class": "keycap",
        "label": "2"
      },
      {
        "class": "keycap",
        "label": "3"
      },
      {
        "class": "separator w5",
      },
      {
        "class": "keycap w15 altcolor",
        "insert": "{#2} ^ {#2}", // 指数
        "altKeys": "key6"
      },
      {
        "class": "keycap altcolor",
        "latex": "x",
        "altKeys": "key7"
      },
      // {
      //   "class": "keycap",
      //   "latex": "^\\circ" // 度
      // },
      // {
      //   "class": "keycap w15",
      //   "latex": "\\left( {#2}, {#2} \\right)" // 坐标
      // },

      {
        "class": "action font-glyph bottom right w15",
        "command": "deletePreviousChar",
        "label": "&#x232b;", // 删除
        "altKeys": "delete"
      },

        // {
        //     "class": "separator w5",
        // },

      ],
      [{
        "class": "keycap btn",
        "latex": "\\pm" // 正负
      },
      // {
      //   "class": "keycap btn",
      //   "latex": "\\div" // 除
      // },
      {
        "class": "keycap",
        "latex": "\\le" // 小于等于
      },
      {
        "class": "separator w5",
      },
      {
        "class": "keycap",
        "insert": "",
        "key": "",
        "command": "",
        "label": "."
      },
      {
        "class": "keycap",
        "insert": "",
        "key": "0",
        "command": "",
        "label": "0"
      },
      // {
      //   "class": "keycap",
      //   "latex": "\\%" // 百分号
      // },
      {
        "class": "keycap",
        "insert": "\\pi ",
        "key": "",
        "command": "",
        "label": "<aside class='above tex'>" +
          "<i>x</i>&thinsp;!</aside>" +
          "<span>π</span>" +
          "<aside class='below'>3.14</aside>" // 派
      },
      {
        "class": "separator w5",
      },

      // {
      //   "class": "keycap",
      //   "latex": "\\ne" // 不等
      // },
      {
        "class": "keycap altcolor",
        "latex": "或", // 中文
        "altKeys": "key8"
      },
      {
        "class": "action",
        "command": "moveToPreviousChar",
        "label": "<svg><use xlink:href='#svg-arrow-left' /></svg>", // 左
      },
      {
        "class": "action",
        "command": "moveToNextChar",
        "label": "<svg><use xlink:href='#svg-arrow-right' /></svg>" // 右
      },
      {
        "class": "action",
        "command": "moveToNextPlaceholder",
        "label": "<svg><use xlink:href='#svg-tab' /></svg>" //下一个
      },
      ]
    ]
  }
}

const keyboardsList = {
  "part1": {
    "label": "123",
    "tooltip": "Json keyboard",
    "layer": "number"
  },
  'roman': {
    tooltip: 'keyboard.tooltip.roman',
    layer: 'lower-roman',
    label: 'ABC',
    layers: ['lower-roman', 'upper-roman', 'symbols']
  },
}

// const keyboardAction = 'keyboard-name'
const keyboardAction = 'part1 roman'

export {
  mKeyboardLayers,
  keyboardsList,
  keyboardAction
}
