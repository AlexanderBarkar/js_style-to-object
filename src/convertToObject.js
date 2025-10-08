'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const styleObject = {};

  for (const line of lines) {
    if (!line.includes(':')) {
      continue;
    }

    const [property, value] = line.split(':');

    const key = property.trim();
    const val = value.trim();

    if (key && val !== undefined) {
      styleObject[key] = val;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
