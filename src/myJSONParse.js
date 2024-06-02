/**
 * Tokenizes a JSON string into an array of tokens.
 *
 * @param {string} jsonString - The JSON string to be tokenized.
 * @return {Array<string>} An array of tokens representing the JSON string.
 * @throws {SyntaxError} If the JSON string contains an unexpected token.
 */
function tokenize(jsonString) {
    const regex =
        /"(?:\\.|[^"\\])*"|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null|[\{\}\[\],:]/g;
    const tokens = jsonString.match(regex);
    if (!tokens) throw new SyntaxError("Unexpected token");
    return tokens;
}

/**
 * Parses a JSON string into a JavaScript value.
 *
 * @param {Array<string>} tokens - An array of tokens representing the JSON string.
 * @return {any} The parsed JavaScript value.
 * @throws {SyntaxError} If the JSON string contains an unexpected token.
 */
function parseValue(tokens) {
    const token = tokens.shift(); // better change to queue with O(1) dequeue complexity

    if (token === "{") { // handle objects
        const obj = {};
        while (tokens[0] !== "}") {
            const key = parseValue(tokens);
            if (tokens.shift() !== ":")
                throw new SyntaxError("Expected colon after key");
            obj[key] = parseValue(tokens);
            if (tokens[0] === ",") tokens.shift();
        }
        tokens.shift(); // remove '}' in the end
        return obj;
    }

    if (token === "[") { // handle arrays
        const arr = [];
        while (tokens[0] !== "]") {
            arr.push(parseValue(tokens));
            if (tokens[0] === ",") tokens.shift();
        }
        tokens.shift(); // remove ']'
        return arr;
    }
    
    if (token.startsWith('"')) return token.slice(1, -1); // string without quotes
    if (token === "true") return true;
    if (token === "false") return false;
    if (token === "null") return null;
    if (!isNaN(token)) return Number(token); // number

    throw new SyntaxError("Unexpected token");
}

/**
 * Parses a JSON string into a JavaScript value.
 *
 * @param {string} jsonString - The JSON string to be parsed.
 * @return {any} The parsed JavaScript value.
 * @throws {SyntaxError} If the JSON string contains an unexpected token.
 */
function myJSONParse(jsonString) {
    const tokens = tokenize(jsonString);
    const result = parseValue(tokens);
    if (tokens.length !== 0) throw new SyntaxError("Unexpected token");
    return result;
}

export default myJSONParse;

