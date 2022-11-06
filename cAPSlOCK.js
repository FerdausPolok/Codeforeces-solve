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
    str_len= given_str.length
    flag= false

    rest_of_the_letters= ''
    for (i= 1; i<str_len; i++){
        rest_of_the_letters+= given_str[i]
    }

    if (rest_of_the_letters.toUpperCase() === rest_of_the_letters) {
        flag= true
    }

    if (flag){
        first_letter= given_str[0]

        if (first_letter.toUpperCase() == first_letter){
            console.log(given_str.toLowerCase())
        }

        else{

            if (first_letter.charCodeAt(0) > 96){
                first_letter= String.fromCharCode ((first_letter.charCodeAt(0) - 32))
            }
            // console.log(first_letter)
            rest_of_the_letters= rest_of_the_letters.toLowerCase()
            final_ans= first_letter + rest_of_the_letters
            console.log(final_ans)
        }

    }

    else{
        console.log(given_str)
    }
}

