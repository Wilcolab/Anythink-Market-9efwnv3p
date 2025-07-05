/**
 * Step 1: Sanitization
 * Removes all characters except letters, numbers, and spaces,
 * collapses runs of non-alphanumeric characters into a single space,
 * and trims leading/trailing whitespace.
 *
 * @param {string} input The string to sanitize.
 * @returns {string} The sanitized string.
 */
function sanitize(input) {
    if (typeof input !== 'string') {
        return '';
    }
    // Replace any sequence of non-alphanumeric characters with a single space
    const cleaned = input.replace(/[^a-zA-Z0-9]+/g, ' ');
    return cleaned.trim();
}

/**
 * Step 2: Tokenization
 * Splits a cleaned string into word tokens. It handles spaces,
 * camelCase transitions (e.g., "fooBar"), and preserves acronyms
 * (e.g., "NASA").
 *
 * @param {string} cleaned The sanitized string.
 * @returns {string[]} An array of word tokens.
 */
function tokenize(cleaned) {
    if (!cleaned) {
        return [];
    }
    // Split on spaces and camelCase transitions (e.g., fooBar -> foo Bar)
    // and transitions before an acronym (e.g., fooNASA -> foo NASA).
    const tokens = cleaned
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // fooBar -> foo Bar
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // NASAIsGreat -> NASA IsGreat
        .toLowerCase()
        .split(' ');

    // Filter out any empty tokens that might result from multiple spaces
    return tokens.filter(Boolean);
}

/**
 * Step 3: Assembly
 * Converts a string to kebab-case by sanitizing, tokenizing,
 * and joining the tokens with hyphens.
 *
 * @param {string} str The input string.
 * @returns {string} The kebab-cased string.
 */
function toKebabCase(str) {
    const cleaned = sanitize(str);
    const tokens = tokenize(cleaned);
    return tokens.join('-');
}

// Bonus Edge-Case Tests:
// console.log(`" Hello--World__FooBarNASA " -> "${toKebabCase(" Hello--World__FooBarNASA ")}"`);
// console.log(`"userIDAndURL" -> "${toKebabCase("userIDAndURL")}"`);
// console.log(`"multiple   spaces" -> "${toKebabCase("multiple   spaces")}"`);
// console.log(`"FOO_BAR" -> "${toKebabCase("FOO_BAR")}"`);
// console.log(`"__FOO_BAR__" -> "${toKebabCase("__FOO_BAR__")}"`);
// console.log(`"123Test" -> "${toKebabCase("123Test")}"`);
// console.log(`"test-123" -> "${toKebabCase("test-123")}"`);
// console.log(`"a-b-c" -> "${toKebabCase("a-b-c")}"`);
// console.log(`"HTMLParser" -> "${toKebabCase("HTMLParser")}"`);