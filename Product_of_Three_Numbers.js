process.stdin.resume();
process.stdin.setEncoding("utf-8");
let standardtInputSting = "";
let currentLine = 0;
function readLine() {
  return standardtInputSting[currentLine++];
}
process.stdin.on("data", (rawData) => {
  standardtInputSting += rawData;
});
process.stdin.on("end", (_) => {
  standardtInputSting = standardtInputSting
    .trim()
    .split("\n")
    .map((line) => {
      return line.trim();
    });
  main();
});



function main() {

}
