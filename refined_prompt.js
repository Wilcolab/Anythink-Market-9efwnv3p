/**
 * @file Provides a set of utility functions for string case conversion.
 * @summary This module contains functions to convert strings into various casing formats,
 * such as camelCase and dot.case. It is designed to handle multiple types of
 * separators (spaces, hyphens, underscores) and also correctly transforms
 * existing camelCased strings.
 *
 * @module StringCaseUtils
 */

/**
 * Converts a string from various separator-based formats to camelCase.
 *
 * This function processes a string, identifying separators like spaces,
 * underscores, or hyphens. It removes these separators and capitalizes the
 * character immediately following each separator, effectively joining the
 * words together in camelCase format. The function is null-safe and returns
 * an empty string for invalid input.
 *
 * @param {string} str The input string to be converted. For example, "hello-world" or "hello_world".
 * @returns {string} The resulting camelCased string (e.g., "helloWorld"). Returns an empty string if the input is not a valid string.
 * @example
 * // Converts from kebab-case
 * toCamelCase("foo-bar-baz"); // "fooBarBaz"
 *
 * @example
 * // Converts from snake_case
 * toCamelCase("foo_bar_baz"); // "fooBarBaz"
 *
 * @example
 * // Converts from space-separated words
 * toCamelCase("foo bar baz"); // "fooBarBaz"
 *
 * @example
 * // Handles mixed separators
 * toCamelCase("foo-bar_baz baz"); // "fooBarBazBaz"
 */

/**
 * Converts a string from various formats to dot.case.
 *
 * This function transforms a string into dot.case by replacing separators
 * (spaces, underscores, hyphens) with a single dot. It also intelligently
 * handles camelCased input by inserting a dot before any uppercase letter
 * that is preceded by a lowercase letter. The entire resulting string is
 * converted to lowercase.
 *
 * @param {string} str The input string to convert. Can be camelCase, kebab-case, snake_case, etc.
 * @returns {string} The dot.cased version of the string (e.g., "hello.world"). Returns an empty string for invalid input.
 * @example
 * // Converts from camelCase
 * toDotCase("helloWorldAgain"); // "hello.world.again"
 *
 * @example
 * // Converts from kebab-case
 * toDotCase("foo-bar-baz"); // "foo.bar.baz"
 *
 * @example
 * // Converts from snake_case
 * toDotCase("foo_bar_baz"); // "foo.bar.baz"
 *
 * @example
 * // Handles mixed formats
 * toDotCase("myHTMLFile_is-ready"); // "my.html.file.is.ready"
 */
function toCamelCase(str) {
    if (typeof str !== 'string' || !str) {
        return '';
    }

    // Use a regular expression to find separators (hyphens, underscores, spaces)
    // followed by a character. The callback function then converts the character
    // following the separator to uppercase.
    return str.replace(/[-_\s]+(.)?/g, (match, chr) => {
        // If a character is captured after the separator, convert it to uppercase.
        // Otherwise (e.g., trailing separators), return an empty string.
        return chr ? chr.toUpperCase() : '';
    });
}

/**
 * Converts a string to dot.case.
 *
 * This function takes a string that may contain spaces, underscores, or hyphens
 * as separators and converts it into a dot.case string. It also handles
 * camelCase input by inserting a dot before uppercase letters.
 *
 * @param {string} str The input string to convert.
 * @returns {string} The dot.cased version of the string.
 */
function toDotCase(str) {
    if (typeof str !== 'string' || !str) {
        return '';
    }

    return str
        // Insert a dot before an uppercase letter if it's preceded by a lowercase letter.
        .replace(/([a-z])([A-Z])/g, '$1.$2')
        // Replace spaces, underscores, or hyphens with a single dot.
        .replace(/[\s_-]+/g, '.')
        // Convert the entire string to lowercase.
        .toLowerCase();
}

