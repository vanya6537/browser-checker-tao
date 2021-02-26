const BrowserList = require('@oat-sa/browserslist-config-tao');
const { getUserAgentRegExp } = require('browserslist-useragent-regexp');

const options = { browsers: BrowserList };
const isSupported = getUserAgentRegExp(options).test(navigator.userAgent);

if (!isSupported) {
    document.open();
    document.write('<h1>Browser is not supported!</h1>');
    document.close();
}
