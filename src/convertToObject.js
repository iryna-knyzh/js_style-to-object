'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');

  return lines.reduce((prev, line) => {
    if (line.trim().length === 0) {
      return prev;
    }

    const parts = line.split(':');

    if (parts.length < 2) {
      return prev;
    }

    const [key, value] = parts;

    if (!key || !value) {
      return prev;
    }

    const keyTrimed = key.trim();
    const valueTrimed = value.trim();

    if (!keyTrimed || !valueTrimed) {
      return prev;
    }

    return {
      ...prev,
      [keyTrimed]: valueTrimed,
    };
  }, {});
}

module.exports = convertToObject;
