process.stdin.resume()
process.stdin.setEncoding('utf-8');

let standardtInputSting= ''
let currentLine= 0

function readLine(){
    return standardtInputSting[currentLine++]
}

process.stdin.on('data', rawData => {
    standardtInputSting += rawData
})

process.stdin.on('end', _ => {
    standardtInputSting = standardtInputSting.trim().split('\n').map(line =>{
        return line.trim()
    })

    main()
})


function main(){
    var given_str= readLine()
    var given_str2= readLine()

    given_str2 = given_str2.split(" ");

    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let sum=0;

    for (i=0; i<given_str2.length; i++){

        if(given_str2[i] == 4){
            c4++
        }
        else if(given_str2[i] == 3){
            c3+= 1
        }
        else if(given_str2[i] == 2){
            c2++
        }
        else if(given_str2[i] == 1){
            c1++
        }
    }

    // sum = sum+c4;
    // c4 = 0;

    // sum = sum + Math.floor(c2/2)
    // c2 = c2%2

    // if (c1>= c3){
    //     sum = sum + c3
    //     c1= c1-c3
    //     c3= 0
        
    //     sum = sum + Math.floor(c1/4) //have to recheck
    //     c1= c1%4

    //     if(c1 + c2*2 <= 4 && c1 + c2*2 >0){
    //         sum ++
    //         c1=0
    //         c2-0
    //     }
    // }

    // else if(c1 == 3 && c2 == 1){
    //     sum = sum + 2;
    //     c1 = 0;
    //     c2 = 0;

    // }

    // else if(c1<c3){

    //     sum = sum + c1;
    //     c3 = c3 - c1;
    //     c1 = 0;
    //     sum = sum + c3 + c2;
    // }

    console.log(c1, c2, c3, c4)

    sum= Math.floor(c4 + c3 + c2 / 2)

    console.log(sum)

    c1 -= c3

    console.log(c1, c2, c3, c4)

    if (c2 % 2 == 1)
    {
        sum += 1;
        c1 -= 2;
    }
    if (c1 > 0)
    {
        sum += Math.floor((c1 + 3) / 4);
    }

    console.log(sum)
}

