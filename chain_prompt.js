function toKebabCase(input) {
    // Convert input to string and lowercase for uniformity
    let str = String(input).trim().toLowerCase();

    // Replace underscores and spaces with a single space
    str = str.replace(/[_\s]+/g, ' ');

    // Split words by spaces or by transitions from lowercase to uppercase (advanced)
    // For advanced: insert space before uppercase letters (if not at start)
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Split into words, filter out empty strings
    const words = str.split(/\s+/).filter(Boolean);

    // Join with hyphens
    return words.join('-');
}