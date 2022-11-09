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



  tc= prompt()

  var num = readLine();
  num = num.split(" ");

  a = parseInt(num[0]);
  b = parseInt(num[1]);

  if(a>=b){ 
    [a, b] = [b, a]
  }

  if((a+b)%3== 0 && a*2 >=b){
    console.log("Yes")
  }

  else{
    console.log("No")
  }

}
