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
  var given_str = readLine();

  flag = false;
  count = 1;

  str_len = given_str.length;

  for (var i = 1; i <= str_len; i++) {
    if (given_str[i - 1] == given_str[i]) {
      count++;
      if (count >= 7) {
        flag = true;
      }
    } else {
      count = 1;
    }
  }

  if (flag) {
    console.log("YES");
    // return 'YES'
  } else {
    console.log("NO");
    // return 'NO'
  }
}
