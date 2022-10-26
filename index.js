const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// 1. Grabbing elements from DOM

let generateButton = document.getElementById("generate-btn")
let passwordEl1 = document.getElementById("output1")
let passwordEl2 = document.getElementById("output2")

//2. Function that generates passwords

function generatePassword(){
    
    //2.1. For loop that create 15 char long password
    
    let passwordArray = []
    for (let i = 0;i < 15;i++){
        let randomNum = Math.floor( Math.random() * characters.length )
        let randomChar = characters[randomNum]
        passwordArray[i] = randomChar
    }
    
    //2.1. Change passwordArray to right string
     
    let passwordProt = passwordArray.toString()
    let password = passwordProt.replaceAll(",","")
    return password
    //2.3 Log out passwords to DOM function          
}
//3. Log out passwords to DOM function 
function displayPassword() {
        passwordEl1.textContent = ""
        passwordEl1.textContent += generatePassword()
        passwordEl2.textContent = ""
        passwordEl2.textContent += generatePassword()
        
}
//4. Copy to clipborad function from internet
function copyToClipBoard() {
    let content = document.getElementById("output1")
    content.select()
    document.execCommand("copy")
    alert("Successfully Copied")
}








    
   
    
    
     
    
     

// 3. Password string concat
   // let password = randomIndexOne.concat(randomIndexTwo)
   // passwordEl1.textContent = password  