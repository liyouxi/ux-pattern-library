define(["jquery","/public/pldoc/js/jquery.smooth-scroll.js","/public/pldoc/js/tabs.js","/public/pldoc/js/size-slider.js","/public/pldoc/js/color-contrast.js","/public/js/select-replace.js"],function(e,t,n,o,i){var l={init:function(){l.setupHtml(),l.smoothScrollLink(),l.openNewWindow(),l.navigationHighlight(),l.setupPalettes(),l.listenForPaletteClick()},setupHtml:function(){e("html").removeClass("no-js")},setupPalettes:function(){e(".example").each(function(){var t=e(this).css("backgroundColor");e(this).find(".color-meta .color-rgb").text(t),e(this).find(".color-meta .color-hex").text(l.rgbaToHex(t))})},smoothScrollLink:function(t){e('a[href^="#"]').not(".pldoc-tab-wrapper .pldoc-link").on("click",function(){e.smoothScroll({offset:-200,easing:"swing",preventDefault:!1,speed:1e3,scrollElement:null,scrollTarget:e(this).attr("href")})})},openNewWindow:function(){e('a[rel="external"]').on("click",function(t){t.preventDefault(),window.open(e(this).attr("href"))})},navigationHighlight:function(){e(".pldoc-nav-elements .pldoc-link").on("click",function(){e(".pldoc-nav-elements .pldoc-link").removeClass("is-current"),e(this).addClass("is-current")})},newWindowLink:function(t){t.preventDefault(),window.open(e(this).attr("href"))},rgbaToHex:function(e){if("undefined"!=typeof e){var t,n=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);t=n&&4===n.length?"#"+("0"+parseInt(n[1],10).toString(16)).slice(-2)+("0"+parseInt(n[2],10).toString(16)).slice(-2)+("0"+parseInt(n[3],10).toString(16)).slice(-2):""}return t},selectText:function(e){var t=document,n=e[0];if(t.body.createTextRange){var o=t.body.createTextRange();o.moveToElementText(n),o.select()}else if(window.getSelection){var i=window.getSelection(),o=t.createRange();o.selectNodeContents(n),i.removeAllRanges(),i.addRange(o)}},listenForPaletteClick:function(){e(".is-copyable").on("click",function(){l.selectText(e(this))})}};l.init()});