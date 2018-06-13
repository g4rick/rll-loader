const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  const newUrl = options.target;
  return newUrl ? source.replace('hlj-img.b0.upaiyun.com', newUrl) : source;
}
