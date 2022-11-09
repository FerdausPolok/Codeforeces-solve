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

  need = parseInt(num[0]);
  have = parseInt(num[1]);

  var num2 = readLine();
  num2 = num2.split(" ");

  // console.log(num2);

  num2.sort((a, b) => {
    return a - b;
  });

  // console.log(num2);

  hashmap= {};

  for (x of num2){
    if (!hashmap[x]){
      hashmap[x]= 1
    }
    else{
      hashmap[x] +=1
    }
  }
  flag = false
  
  for (x in hashmap){
    if (hashmap[x] >= need){
      flag= true
    }
    else{
      flag= false
    }
  }

  // console.log(num2)
  // console.log(hashmap)

  diff=1
  min_diff= parseInt(num2[need]-1) - parseInt(num2[0])

  // console.log(num2)

  if(flag){
    console.log(0);
  }

  else if(need == have){
    console.log(parseInt(num2[num2.length-1]) - parseInt(num2[0]))
  }
  
  else{
    // console.log("in else")
    for (i= 0; i< num2.length-need+1; i++){
    // console.log("loop")      
      // console.log("index: ", i, " Value: ", num2[i] )
      // console.log("Big ", parseInt(num2[i+3]))
      // console.log("Snall ", parseInt(num2[i]))
      diff= parseInt(num2[i+need-1]) - parseInt(num2[i])
      // console.log(diff)
      min_diff= Math.min(diff, min_diff)
    }

    console.log(min_diff)

  }

}
