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

    var given_num= parseInt(readLine())
    
    while(true){
        given_num += 1
        var a = parseInt(given_num / 1000); 
        var b = parseInt(given_num / 100 % 10);
        var c = parseInt(given_num / 10 % 10);
        var d = parseInt(given_num % 10);

        if (a != b && a != c && a != d && b != c && b != d && c != d)
        {
            break;
        }
    }
    console.log(given_num)
}

