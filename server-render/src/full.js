const mathjax = require('mathjax-full/js/mathjax.js').mathjax
const TeX = require('mathjax-full/js/input/tex.js').TeX
const CHTML = require('mathjax-full/js/output/chtml.js').CHTML
const liteAdaptor = require('mathjax-full/js/adaptors/liteAdaptor.js').liteAdaptor
const RegisterHTMLHandler = require('mathjax-full/js/handlers/html.js').RegisterHTMLHandler
const AllPackages = require('mathjax-full/js/input/tex/AllPackages.js').AllPackages

const argv = {
  inline: true,
  css: true,
  packages: 'action, ams, amsCd, base, bbox, boldsymbol, braket, cancel, color, configMacros, enclose, extpfeil, html, mhchem, newcommand, noerrors, noundefined, unicode, verb'
}

const adaptor = liteAdaptor()
RegisterHTMLHandler(adaptor)

const tex = new TeX({
  // packages: argv.packages.split(/\s*,\s*/),
  packages: AllPackages,
  inlineMath: [['$', '$'], ['(', ')']],
  displayMath: [['$$', '$$'], ['[', ']']],
  processEscapes: true,
  processEnvironments: false
})
const chtml = new CHTML({
  adaptiveCSS: false,
  displayAlign: 'left',
  fontURL: 'https://css.feiyanmath.com/woff-v2'
})
const html = mathjax.document('', { InputJax: tex, OutputJax: chtml })

const make2chtml = async (latex, css) => {
  // CHTML.prototype.unknownText [...new Set(this.font.getCssFont(variant))] 有错误
  const node = html.convert(latex || '', {
    display: !argv.inline,
    em: argv.em,
    ex: argv.ex,
    containerWidth: argv.width
  })

  if (css) {
    // console.log(adaptor.textContent(chtml.styleSheet(html)));
    // chtml.clearCache()
    const x = `mjx-c.mjx-c394::before {
      content: "\\394";
      margin-right: 0.8rem;
    }

    mjx-container[jax="CHTML"][display="true"] {
      display: inline;
      text-align: center;
      margin: 1em 0;
    }`
    // return `${adaptor.textContent(chtml.styleSheet(html))}${x}`
    return adaptor.textContent(chtml.styleSheet(html))
  } else {
    chtml.clearCache()
    return adaptor.outerHTML(node)
  }
}

const splitString = async (str, renderkey) => {
  // 处理字符串
  if (!str) {
    return ''
  }
  str = str.replace(/[/\&]gt;/g, '>')
  str = str.replace(/\\placeholder/g, ' ')
  str = str.replace(/[/\&]lt;/g, '< ')
  if (str.indexOf(`\\$`) === -1) {
    const x = str.split(renderkey)
    if (x.length > 1) {
      let y = []
      for (let i = 0; i < x.length; i++) {
        const element = x[i]
        if (i % 2) {
          const val = element.replace(/\\frac/g, '\\cfrac')
          y.push(await make2chtml(val))
        } else {
          // 加logo
          y.push(element)
        }
      }
      return y.join('')
    } else {
      // 没有公式
      return str
    }
  } else {
    // 含有独立的$符
    // console.log('含有独立的$符')
    let z = str.replace(/[\\]\$/g, '@@')
    const x = z.split(renderkey)
    if (x.length > 1) {
      let y = []
      for (let i = 0; i < x.length; i++) {
        const element = x[i]
        if (i % 2) {
          y.push(await make2chtml(element))
        } else {
          y.push(element)
        }
      }
      let a = y.join('')
      return a.replace(/@@/g, renderkey)
    } else {
      return str.replace(/[\\]\$/g, renderkey)
    }
  }
}

const _addLogo = (str) => {
  const x = str.split('')
  const y = _makeLocation(x)
  return y.join('')
}

const _makeLocation = (arr) => {
  const a1 = ['飞', '燕', '数', '学']
  const a2 = ['广', '州', '凤', '腾', '阁', '科', '技', '有', '限', '公', '司']
  let b = []
  if ((arr.length - 2) > a2.length) {
    b = a2
  } else if ((arr.length - 2) > a1.length) {
    b = a1
  }
  const c = _makeRandom(arr.length, b.length)
  for (let i = 0; i < c.length; i++) {
    const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
    if (reg.test(arr[c[i]])) {
      arr[c[i]] = `${arr[c[i]]}${_makeLogoItem(b[i])}`
    }
  }
  return arr
}

const _makeRandom = (limit, value) => {
  let d = []
  for (let i = 0; i < value; i++) {
    d[i] = parseInt(Math.random() * limit)
  }
  const e = Array.from(new Set(d))
  const f = value - e.length
  if (f) {
    for (let j = 0; j < f; j++) {
      e.push(j + 1 + d[j])
    }
  }
  return d.sort((a, b) => {
    return a - b
  })
}

const _makeLogoItem = item => {
  return `<span style="display:none">${item}</span>`
}

module.exports = {
  splitString,
  make2chtml
}
