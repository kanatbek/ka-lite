(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function computePrefixedTransform(){var r=document.createElement("div"),n=["transform","msTransform","MozTransform","WebkitTransform","OTransform"],e=null;return _.each(n,function(n){"undefined"!=typeof r.style[n]&&(e=n)}),e}function computeCanUse3dTransform(){var r=document.createElement("div"),n=KhanUtil.getPrefixedTransform();return r.style[n]="translateZ(0px)",!!r.style[n]}var prefixedTransform=null,canUse3dTransform=null;$.extend(KhanUtil,{getPrefixedTransform:function(){return prefixedTransform=prefixedTransform||computePrefixedTransform()},getCanUse3dTransform:function(){return null==canUse3dTransform&&(canUse3dTransform=computeCanUse3dTransform()),canUse3dTransform}});
},{}]},{},[1]);