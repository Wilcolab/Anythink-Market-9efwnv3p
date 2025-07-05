/**
 * Converts a string to camelCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
function toCamelCase(str) {
    if (typeof str !== 'string' || !str) {
        return '';
    }

    // Regular expression to find separators (space, underscore, hyphen)
    // followed by a letter.
    const regex = /[_\s-]([a-zA-Z])/g;

    // First, convert the entire string to lowercase to handle cases like 'SCREEN_NAME'.
    // Then, use replace with a callback function.
    // The callback capitalizes the letter that follows a separator.
    // Finally, remove all remaining separators.
    const camelCased = str.toLowerCase()
        .replace(regex, (match, letter) => letter.toUpperCase())
        .replace(/[_\s-]/g, '');

    return camelCased;
}
