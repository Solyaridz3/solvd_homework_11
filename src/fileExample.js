import fs from "fs";
import myJSONParse from "./myJSONParse.js";
import util from "util";

// Function to read JSON file as string
function readJSONFile(filePath) {
    try {
        const jsonString = fs.readFileSync(filePath, "utf8");
        return jsonString;
    } catch (error) {
        console.error("Error reading JSON file:", error);
    }
}

const filePath = "./src/dataSamples/sample2.json";

const pureData = readJSONFile(filePath);

const parsedData = myJSONParse(pureData);

console.log(util.inspect(parsedData, { depth: null }));
