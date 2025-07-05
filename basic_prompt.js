function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Example usage:
// console.log(toCamelCase("hello world")); // "helloWorld"
// console.log(toCamelCase("hello_world")); // "helloWorld"