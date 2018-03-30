// highlight.js
import Hljs from 'Highlight.js'
import '../node_modules/highlight.js/styles/color-brewer.css'

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}
export default Highlight
