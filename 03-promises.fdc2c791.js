!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");function a(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setInterval((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector("form").addEventListener("submit",(function(n){n.preventDefault();var t=n.target,o=t.delay,i=t.step,u=t.amount,l=parseInt(o.value),c=parseInt(i.value);!function(n,t,o){for(var i=1;i<=n;i+=1){a(i,t+o*(i-1)).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"),{timeout:2e3})})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"),{timeout:2e3})}))}}(parseInt(u.value),l,c)}))}();
//# sourceMappingURL=03-promises.fdc2c791.js.map
