'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');

  return arr.reduce((prev, line) => {
    if (line.trim().length === 0) {
      return prev;
    }

    const [key, value] = line.split(':');
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
