window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();


if (isMathjaxConfig === false) { // If: MathJax is not configured
  initMathjaxConfig();
}

// If the third parameter is not passed in, the entire document is rendered
window.MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
// Because Vuejs are used, specify # app to increase speed
//window.MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('app')]);