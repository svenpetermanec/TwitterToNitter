// ==UserScript==
// @name         Twitter to Nitter
// @description  Redirect twitter links to nitter
// @version      0.1
// @author       Sven Petermanec
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @updateURL    https://github.com/svenpetermanec/TwitterToNitter/raw/master/script.user.js
// @downloadURL  https://github.com/svenpetermanec/TwitterToNitter/raw/master/script.user.js
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const nitter = 'https://nitter.net';
    const url = new URL(window.location.href);

    const newUrl = `${nitter}${url.pathname}${url.search}${url.hash}`;
    window.location.href = newUrl;
})();

