/**
 * Formats raw form input for a credit card number into segments of numbers separated by a space
 *
 * @param {string} value
 * @returns {string}
 */
function cc_format(value) {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || ''
  const parts = []
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4))
  }
  if (parts.length) {
    return parts.join(' ')
  }
  return value
}

export default cc_format;
