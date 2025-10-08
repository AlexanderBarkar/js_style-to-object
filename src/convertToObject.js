'use strict';

function convertToObject(sourceString) {
  const map = new Map();
  const rules = sourceString.split(';');

  for (let rule of rules) {
    rule = rule.trim();

    if (!rule) {
      continue;
    }

    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    map.set(property, value);
  }

  return Object.fromEntries(map);
}

module.exports = convertToObject;
