const fs = require("fs");
const readline = require("readline");

const input_path = "input.txt";
const output_path = "output.txt";

const inputStream = fs.createReadStream(input_path);
const outputStream = fs.createWriteStream(output_path, { encoding: "utf8" });
var lineReader = readline.createInterface({
  input: inputStream,
  terminal: false,
});
lineReader.on("line", function (line) {
  // outputStream.write(line + "\n");
  outputStream.write(line + " ");
});
