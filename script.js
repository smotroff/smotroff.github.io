// let response = fetch('https://jsonplaceholder.typicode.com/todos/'+rndNum)
//   .then(response => response.json())
//   .then(json => p1.innerHTML = json.title)
// let greetingPrase = "Welcome to the terminal, please enter your local time";
// let greetingArr = [];
// let actuaStrArr = [];
// let str = document.getElementsByClassName('string')[0]
// // str.innerHTML = greetingArr.join('')
// str.innerHTML = ">"
// let i = 0;
//
// }
//

//
// let testArray = ["[]"]


//*declaring*//
let actualStrArr = []
let enders = "$"
let div
let i =0
let o =0
let str = document.getElementsByClassName('s'+o)[0]
str.innerHTML= '>' + actualStrArr.join('').toUpperCase() + enders



//*writing request to the terminal*////


let newStringFunc = function(){
  o++
  let div = document.createElement('div');
  div.className = "string " +"s"+o;
  str.after(div)
  str.innerHTML = '>'+actualStrArr.join('').toUpperCase()
  actualStrArr = []
  str = document.getElementsByClassName('s'+o)[0]
}





///*Blinking*//////
let blinkingFunc = setInterval(function(){
if(i==0){
  enders = ['']
  str.innerHTML= '>' + actualStrArr.join('').toUpperCase() + enders
}else{
  enders = ["$"]
  str.innerHTML= '>' + actualStrArr.join('').toUpperCase() + enders
}
i++
if(i>1){
  i=0
}
},400)


document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() == "backspace") {
    // console.log(actualStrArr);
    actualStrArr.pop()
    str.innerHTML = '>' + actualStrArr.join('').toUpperCase() + enders
  }
});



document.addEventListener('keypress',()=>{
  if(event.key == 'Enter'){
    if(actualStrArr.join('').toUpperCase()=="TEST"){
      let response = fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(r => r.json())
        .then(json => writingFunc(json[0]))
    }
    o++
    newStringFunc()
    if(o>=25){
      document.getElementsByClassName("s" + (o - 25))[0].remove();
    }





  }
  if(event.key != "Enter"){actualStrArr.push(event.key)}
  str.innerHTML= '>' + actualStrArr.join('').toUpperCase() + enders

})

let writingFunc =function(r){
  let x = 0
  let snt = setInterval(function(){
  actualStrArr.push(r[x])
  x = x+1
  str.innerHTML= '>' + actualStrArr.join('').toUpperCase() + enders
  if(x===r.length){
    clearInterval(snt)
    newStringFunc()
    actualStrArr = []
    // console.log(actualStrArr.length);
  }
}, 40)
}


writingFunc("welcome to the terminal")
setTimeout(writingFunc,4000,"Please use /test/ command")
