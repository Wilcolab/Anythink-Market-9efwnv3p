/**
 * Converts a given string to camelCase format by capitalizing the first letter of each word
 * except the first word, and removing word separators.
 * 
 * The function handles various word separators including spaces, hyphens, and underscores.
 * Non-letter characters are stripped from individual words. The first word remains lowercase
 * while subsequent words have their first letter capitalized.
 * 
 * @function camelCase
 * @param {string|null|undefined} input - The string to convert to camelCase format.
 *                                        Accepts null and undefined which return empty string.
 * @returns {string} The camelCase version of the input string. Returns empty string for
 *                   null, undefined, empty string, or strings with no valid letter characters.
 * 
 * @throws {Error} Throws an error if input is not a string, null, or undefined.
 *                 Specifically throws when input is a number, boolean, object, array, etc.
 * 
 * @example
 * // Basic usage with different separators
 * camelCase('hello world');        // Returns: 'helloWorld'
 * camelCase('hello-world');        // Returns: 'helloWorld'
 * camelCase('hello_world');        // Returns: 'helloWorld'
 * 
 * @example
 * // Handling mixed case input
 * camelCase('Hello World');        // Returns: 'helloWorld'
 * camelCase('HELLO WORLD');        // Returns: 'helloWorld'
 * 
 * @example
 * // Handling complex separators and numbers
 * camelCase('hello-world_test case');  // Returns: 'helloWorldTestCase'
 * camelCase('hello123world');          // Returns: 'helloworld'
 * camelCase('hello   world');          // Returns: 'helloWorld'
 * 
 * @example
 * // Edge cases
 * camelCase('');                   // Returns: ''
 * camelCase(null);                 // Returns: ''
 * camelCase(undefined);            // Returns: ''
 * camelCase('123');                // Returns: ''
 * 
 * @example
 * // Error cases
 * camelCase(123);                  // Throws: Error('Input must be a string')
 * camelCase(true);                 // Throws: Error('Input must be a string')
 * camelCase([]);                   // Throws: Error('Input must be a string')
 * 
 * @since 1.0.0
 * @author Generated for Anythink Market
 * @see {@link https://en.wikipedia.org/wiki/Camel_case|Camel Case Wikipedia}
 */
function camelCase(input) {
    // Handle edge cases: null, undefined, or empty string
    if (input === null || input === undefined || input === '') {
        return '';
    }
    
    // Throw error if input is not a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Split the string by common word separators (spaces, hyphens, underscores)
    // and filter out empty strings
    const words = input
        .split(/[\s\-_]+/)
        .filter(word => word.length > 0);
    
    // If no valid words found, return empty string
    if (words.length === 0) {
        return '';
    }
    
    // Convert to camelCase
    return words
        .map((word, index) => {
            // Remove non-letter characters from each word
            const cleanWord = word.replace(/[^a-zA-Z]/g, '');
            
            // Skip empty words after cleaning
            if (cleanWord.length === 0) {
                return '';
            }
            
            // First word stays lowercase, subsequent words are capitalized
            if (index === 0) {
                return cleanWord.toLowerCase();
            } else {
                return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
            }
        })
        .filter(word => word.length > 0) // Remove any empty strings
        .join('');
}

// Export the function for use in other modules
module.exports = camelCase;

// Example usage and tests
if (require.main === module) {
    console.log('Testing camelCase function:');
    
    // Test cases
    const testCases = [
        'hello world',
        'hello-world',
        'hello_world',
        'Hello World',
        'HELLO WORLD',
        'hello-world_test case',
        'hello123world',
        'hello   world',
        '---hello---world---',
        'a',
        'A',
        '',
        null,
        undefined,
        '123',
        'hello123-world456',
        'multiple   spaces    here'
    ];
    
    testCases.forEach(testCase => {
        try {
            const result = camelCase(testCase);
            console.log(`Input: "${testCase}" => Output: "${result}"`);
        } catch (error) {
            console.log(`Input: "${testCase}" => Error: ${error.message}`);
        }
    });
    
    // Test error case
    try {
        camelCase(123);
    } catch (error) {
        console.log(`Input: 123 => Error: ${error.message}`);
    }
}