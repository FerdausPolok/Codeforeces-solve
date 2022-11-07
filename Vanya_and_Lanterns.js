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
    num = num.split(" ");

    var lightStands = readLine();
    lightStands = lightStands.split(" ");

    numOflight= num[0]
    lengthOfRoad= num[1]
    
    // console.log(numOflight)
    // console.log(lengthOfRoad)

    lightStands.sort((a, b) => {return a-b}) 
    // console.log(lightStands)

    maxDiff= 0
    diff=0 

    for (i=1; i<lightStands.length; i++){
        diff= lightStands[i] - lightStands[i-1]
        maxDiff= Math.max(diff, maxDiff)
    }

    ans= maxDiff/2
    
    firstGap= lightStands[0]- 0
    lastGap= lengthOfRoad- lightStands[lightStands.length- 1]

    
    if ( (firstGap > ans) || (lastGap> ans) ){
        console.log(Math.max(firstGap, lastGap))
    }

    else{
        console.log(ans)
    }

}
