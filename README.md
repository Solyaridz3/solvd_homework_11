## solvd_homework_11

# Custom JSON Parser

This project provides a simple JSON parser that converts JSON strings into corresponding JavaScript objects. The parser consists of three main functions: `tokenize`, `parseValue`, and `myJSONParse`.

### Parsing example 

```bash
npm run example
```

### Parsing from json file example

```bash
npm run fileExample
```

### Data samples
Some json data samples included in dataSamples project folder

## Functions

### `tokenize(jsonString)`

Tokenizes a JSON string into an array of tokens.

-   **Parameters:**

    -   `jsonString` (string): The JSON string to be tokenized.

-   **Returns:**

    -   `Array<string>`: An array of tokens representing the JSON string.

-   **Throws:**
    -   `SyntaxError`: If the JSON string contains an unexpected token.

#### Example Usage

```javascript
const tokens = tokenize('{"key": "value"}');
// tokens = [ '{', '"key"', ':', '"value"', '}' ]
```

### `parseValue(tokens)`

Parses a JSON string into a JavaScript value based on the provided tokens able. **(Able to deal with unicode and has custom reviver to convert valid date string to Date object)**

-   **Parameters:**

    -   `tokens` (Array<string>): An array of tokens representing the JSON string.

-   **Returns:**

    -   `any`: The parsed JavaScript value.

-   **Throws:**
    -   `SyntaxError`: If the JSON string contains an unexpected token.

#### Example Usage

```javascript
const tokens = tokenize('{"key": "value"}');
const parsedValue = parseValue(tokens);
// parsedValue = { key: "value" }
```

### `isDate(dateStr)`

Checks if a string is a valid date.

-   **Parameters:**

    -   `dateStr` (string): The string to be checked.

-   **Returns:**
    -   `boolean`: `true` if the string is a valid date, otherwise `false`.

#### Example Usage

```javascript
const isValidDate = isDate("2021-12-31");
// isValidDate = true
```

### `myJSONParse(jsonString)`

Parses a JSON string into a JavaScript value.

-   **Parameters:**

    -   `jsonString` (string): The JSON string to be parsed.

-   **Returns:**

    -   `any`: The parsed JavaScript value.

-   **Throws:**
    -   `SyntaxError`: If the JSON string contains an unexpected token.

#### Example Usage

```javascript
import myJSONParse from "./path/to/your/module";

const jsonString = '{"name": "John", "age": 30, "isStudent": false}';
const parsedObject = myJSONParse(jsonString);
// parsedObject = { name: "John", age: 30, isStudent: false }
```

## Installation

To use the JSON parser, you need to import the `myJSONParse` function from your module:

```javascript
import myJSONParse from "./path/myJSONParse.js";
```

## Usage

Here is a basic example of how to use the `myJSONParse` function:

```javascript
import myJSONParse from "./path/to/your/module";

const jsonString =
    '{"greeting": "Hello, world!", "isToday": true, "date": "2024-06-03"}';
const parsedValue = myJSONParse(jsonString);

console.log(parsedValue);
// Output: { greeting: 'Hello, world!', isToday: true, date: 2024-06-03T00:00:00.000Z }
```


## Reflect
It was quite difficult to debug regular expression code and find problems in it. I rewrote the entire project 3 times. At first I came up with huge, hard to understand and objectively bad solutions, but once I got a better understanding of regular expressions, discovered tokenization and did some research on it, it became not that difficult to identify nested data, with which I had difficulty with at first. In fact, tokenization has made this job much easier.
