/*
* name showLaTex.js
* Depending on MathJax.js
* varsion: v0.1
*ES6*/
let isMathjaxConfig = false; // Prevent repetitive calls to Config, resulting in performance degradation

const initMathjaxConfig = () => {
  if (!window.MathJax) {
    return;
  }
  window.MathJax.Hub.Config({
    showProcessingMessages: false, //Close js loading process information
    messageStyle: "none", //Not displaying information
    jax: ["input/TeX", "output/HTML-CSS"],
    tex2jax: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]], //In-line formula selector
      displayMath: [["$$", "$$"], ["\\[", "\\]"]], //Intra-paragraph formula selector
      skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] //Avoid certain labels
    },
    "HTML-CSS": {
      availableFonts: ["STIX", "TeX"], //Optional font
      showMathMenu: false //Close right-click menu display
    }
  });
  isMathjaxConfig = true; // 
};


if (isMathjaxConfig === false) { // If: MathJax is not configured
  initMathjaxConfig();
}

// If the third parameter is not passed in, the entire document is rendered
window.MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
// Because Vuejs are used, specify # app to increase speed
//window.MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('app')]);