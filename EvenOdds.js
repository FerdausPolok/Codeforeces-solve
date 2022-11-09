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
  var num = readLine();
  num = num.trim().split(/\s+/);

  //     given_num= num[0]
  //     given_num2= num[1]

  //     res_num=""

  //     for (i=1; i<=given_num; i++){
  //         if (i%2 != 0){
  //             res_num += i
  //         }
  //     }

  //     for (i=1; i<=given_num; i++){
  //         if (i%2 == 0){
  //             res_num += i
  //         }
  //     }

  //    //console.log(res_num)
  //      console.log(res_num[given_num2-1])

  a = parseInt(num[0]);
  b = parseInt(num[1]);

  if (a % 2 == 0) {
    c = a / 2;
  } else {
    c = (a + 1) / 2;
  }

  if (b <= c) {
    console.log(b * 2 - 1);
  } else {
    console.log((b - c) * 2);
  }
}
