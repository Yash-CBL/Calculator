let btns=document.querySelectorAll("button")
input=document.getElementById("inputField").value
btns.forEach(btt => {
    btt.addEventListener("click",()=>{
        
        let value=btt.innerHTML
        if(!isNaN(value)){
        input+=value
        document.getElementById("inputField").value=input
    }
    else if(value=='AC'){
        input="";
        document.getElementById("inputField").value=input
        document.getElementById("result").value=""
    }
    else if(value=="+"){
        let checkstr=input.charAt(input.length-1)
        if(checkstr!='+' && checkstr!='-' && checkstr!='*' && checkstr!='/' &&checkstr!='.'){
        input+="+"
        console.log(input)
        document.getElementById("inputField").value=input
        }
    }
    else if(value=="-"){
        let checkstr=input.charAt(input.length-1)
        if(checkstr!='+' && checkstr!='-' && checkstr!='*' && checkstr!='/' &&checkstr!='.'){
        input+="-"
        console.log(input)
        document.getElementById("inputField").value=input
    }
    }
    else if(value=="*"){
        let checkstr=input.charAt(input.length-1)
        if(checkstr!='+' && checkstr!='-' && checkstr!='*' && checkstr!='/' &&checkstr!='.' && checkstr!='('){
        input+="*"
        console.log(input)
        document.getElementById("inputField").value=input
        }
    }
    else if(value=="/"){
        let checkstr=input.charAt(input.length-1)
        if(checkstr!='+' && checkstr!='-' && checkstr!='*' && checkstr!='/' &&checkstr!='.'&& checkstr!='('){
        input+="/"
        console.log(input)
        document.getElementById("inputField").value=input
        }
    }
    else if(value=="Clear"){        
        input = input.replace(/.$/, '')
        document.getElementById("inputField").value=input
       
    }
    else if(value=="("){

        input+="*("
        console.log(input)
        document.getElementById("inputField").value=input

    }
    else if(value==")"){
        input+=")"
        console.log(input)
        document.getElementById("inputField").value=input

    }
    
})
});



// let ans=document.getElementById("answer");
// ans.addEventListener("click",function(){

//     let input = document.getElementById("inputField").value
//     // parseFloat(input)
//     var newans = eval(input)
//     document.getElementById("result").value=newans
   
    
// })

let ans2=document.getElementById("equals");
ans2.addEventListener("click",function(){

    let input = document.getElementById("inputField").value
    // parseFloat(input)
    var equalans = eval(input)
    document.getElementById("result").value=equalans;
   
    
})




