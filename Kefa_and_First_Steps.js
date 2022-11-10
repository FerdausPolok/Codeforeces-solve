//Codeforces Tempalte starts from here
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
//Codeforces Tempalte ends here

function main() {
  var num = readLine();
  var num2 = readLine();
  num2 = num2.split(" ");

  let count = 1;
  let max_count = 1;
  flag = false;

  for (i = 1; i < num; i++) {
    // console.log(num2[i])
    // console.log(num2[i-1])

    if (parseInt(num2[i]) >= parseInt(num2[i - 1])) {
      flag = true;
      count += 1;
      max_count = Math.max(count, max_count);
      // console.log(`if block Count = ${count}`)
      // console.log(`if block MaxCount = ${max_count}`)
    } else {
      max_count = Math.max(count, max_count);
      count = 1;
      // console.log(`else block Count = ${count}`)
      // console.log(`else block MaxCount = ${max_count}`)
      // console.log(flag)
    }
  }

  console.log(max_count);
}
