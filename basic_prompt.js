/**
 * Converts a string to camelCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
function toCamelCase(str) {
    // Replace spaces or underscores followed by a character with the uppercase version of that character.
    // The `g` flag ensures all occurrences are replaced.
    // The `(.)` captures the character immediately following the space/underscore.
    // The `(.)` becomes `p1` in the replacer function.
    return str.toLowerCase().replace(/[\s_]+(.)/g, (match, p1) => p1.toUpperCase());
}