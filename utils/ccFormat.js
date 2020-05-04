/**
 * Formats raw form input for a credit card number into segments of numbers separated by a space
 *
 * @param {string} value
 * @returns {string}
 */
function cc_format(value) {
  var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || ''
  var parts = []
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }
  if (parts.length) {
    return parts.join(' ')
  }
  return value
}

export default cc_format;
