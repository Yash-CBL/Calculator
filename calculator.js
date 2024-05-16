let btns = document.querySelectorAll("button")
input = document.getElementById("inputField").value
btns.forEach(btt => {
    btt.addEventListener("click", () => {
        let value = btt.innerHTML
        if (!isNaN(value)) {
            input += value
            document.getElementById("inputField").value = input
        }
        else if (value == 'AC') {
            input = "";
            document.getElementById("inputField").value = input
            document.getElementById("result").value = ""
        }
        else if (value == "+") {
            if(input.length!=0){
            let checkstr = input.charAt(input.length - 1)
            if (checkstr != '+' && checkstr != '-' && checkstr != '*' && checkstr != '/' && checkstr != '.') {
                input += "+"
               
                document.getElementById("inputField").value = input
            }else{
                input= input.replace(/.$/,'');
                input+=value
                document.getElementById("inputField").value = input
                console.log(input)
            }
        }
        }
        else if (value == "-") {
           
            let checkstr = input.charAt(input.length - 1)
            if (checkstr != '+' && checkstr != '-' && checkstr != '*' && checkstr != '/' && checkstr != '.') {
                input += "-"
                document.getElementById("inputField").value = input
            }else{
                input= input.replace(/.$/,'');
                input+=value
                document.getElementById("inputField").value = input
                console.log(input)
            }
        }
        else if (value == "*") {
            if(input.length!=0){
            let checkstr = input.charAt(input.length - 1)
            if (checkstr != '+' && checkstr != '-' && checkstr != '*' && checkstr != '/' && checkstr != '.' && checkstr != '(') {
                input += "*"
                document.getElementById("inputField").value = input
            }else{
                input= input.replace(/.$/,'');
                input+=value
                document.getElementById("inputField").value = input
                console.log(input)
            }}
        }
        else if (value == "/") {
            if(input.length!=0){
            let checkstr = input.charAt(input.length - 1)
            if (checkstr != '+' && checkstr != '-' && checkstr != '*' && checkstr != '/' && checkstr != '.' && checkstr != '(') {
                input += "/"
                document.getElementById("inputField").value = input
            }else{
                input= input.replace(/.$/,'');
                input+=value
                document.getElementById("inputField").value = input
                console.log(input)
            }
        }}
        else if (value == "Clear") {
            input = input.replace(/.$/, '')
            document.getElementById("inputField").value = input
            document.getElementById("result").value = ""
        }




        else if (value == "(") {
            let checkstr = input.charAt(input.length - 1)
            if(input.length!=0 && checkstr != '+' && checkstr != '-' && checkstr != '*' && checkstr != '/' && checkstr != '.' && checkstr != '('){

            input += "*("
            console.log(input)
            document.getElementById("inputField").value = input
            }
       else {
        input += "("
        console.log(input)
        document.getElementById("inputField").value = input
       }}
       




        else if (value == ")") {
            input += ")"
            console.log(input)
            document.getElementById("inputField").value = input
        }
    })
});
let ans2 = document.getElementById("equals");
ans2.addEventListener("click", function () {

    let input = document.getElementById("inputField").value
    // parseFloat(input)
    var equalans = eval(input)
    document.getElementById("result").value = equalans;
})




