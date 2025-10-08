'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(line => line.trim())
    .filter(line => line.includes(':'))
    .map(line => line.split(/:(.+)/))
    .reduce((stylesMap, [property, value]) => {
      const key = property.trim();
      const val = value.trim();

      if (val !== '') {
        stylesMap[key] = val;
      }

      return stylesMap;
    }, {});
}

module.exports = convertToObject;
