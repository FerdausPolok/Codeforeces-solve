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
  var n = readLine();
  n = parseInt(n);
  N = n;
  counter = 0;
  arr1 = [];

  for (i = 2; i * i <= N; i++) {
    if (n % i == 0) {
      counter++;
      n = n / i;
      arr1.push(i);
    }
    if (counter == 2) {
      arr1.push(n);
      break;
    }
  }

  if (counter < 2) {
    console.log("No");
  } else if (arr1[0] == arr1[2] || arr1[1] == arr1[2]) {
    console.log("No");
  } else {
    console.log("Yes");
    console.log(arr1);
  }
}
