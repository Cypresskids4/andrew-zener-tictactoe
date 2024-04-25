let currentTurn = 0
let gameOver = false

// playerturns = 0,2,4...
// AI turns = 1,3,5...

const button1 = document.getElementById("sq0")
const button2 = document.getElementById("sq1")
const button3 = document.getElementById("sq2")
const button4 = document.getElementById("sq3")
const button5 = document.getElementById("sq4")
const button6 = document.getElementById("sq5")
const button7 = document.getElementById("sq6")
const button8 = document.getElementById("sq7")
const button9 = document.getElementById("sq8")

const box = document.querySelector(".box")

let buttonList = [
    button1, button2, button3, button4, button5, button6, button7, button8, button9
]

gameplay() //function call

function gameplay(){ //function definition
    buttonList.forEach(button => {
        button.onclick = () => { //arrow function
            let pTag = button.children[0]
            if(currentTurn % 2 == 0){
                currentTurn++ //iterator, adds 1
                pTag.innerHTML = "o" //changes the text
                button.disabled = true
                buttonList.splice(buttonList.indexOf(button),1)
                checkwin()
                if(gameOver == false){
                    AITurn(buttonList)
                }
            }
        }
    })
}

function AITurn(list){
    if(list.length > 0){
        let random = Math.floor(Math.random() * list.length)
        let aiChoice = list[random]
        aiChoice.disabled = true
        list.splice(buttonList.indexOf(aiChoice),1)
        let pTag = aiChoice.children[0]
        pTag.innerHTML = "x"
        currentTurn++
        checkwin()
    }
}

function checkwin(){
    if( // horizontal user cases
          button1.textContent.trim() == "x" && button2.textContent.trim() == "x" && button3.textContent.trim() == "x" ||
          button4.textContent.trim() == "x" && button5.textContent.trim() == "x" && button6.textContent.trim() == "x" ||
          button7.textContent.trim() == "x" && button8.textContent.trim() == "x" && button9.textContent.trim() == "x" ||

        // vertical user cases
          button1.textContent.trim() == "x" && button2.textContent.trim() == "x" && button3.textContent.trim() == "x" ||
          button4.textContent.trim() == "x" && button5.textContent.trim() == "x" && button6.textContent.trim() == "x" ||
          button7.textContent.trim() == "x" && button8.textContent.trim() == "x" && button9.textContent.trim() == "x" ||
        // diagonal user cases
          button1.textContent.trim() == "x" && button5.textContent.trim() == "x" && button9.textContent.trim() == "x" ||
          button3.textContent.trim() == "x" && button5.textContent.trim() == "x" && button7.textContent.trim() == "x" 
    ){
        gameOver = true
        endGame("you won")
    }
    if( // horizontal user cases
          button1.textContent.trim() == "o" && button2.textContent.trim() == "o" && button3.textContent.trim() == "o" ||
          button4.textContent.trim() == "o" && button5.textContent.trim() == "o" && button6.textContent.trim() == "o" ||
          button7.textContent.trim() == "o" && button8.textContent.trim() == "o" && button9.textContent.trim() == "o" ||

        // vertical user cases
          button1.textContent.trim() == "o" && button2.textContent.trim() == "o" && button3.textContent.trim() == "o" ||
          button4.textContent.trim() == "o" && button5.textContent.trim() == "o" && button6.textContent.trim() == "o" ||
          button7.textContent.trim() == "o" && button8.textContent.trim() == "o" && button9.textContent.trim() == "o" ||
        // diagonal user cases
          button1.textContent.trim() == "o" && button5.textContent.trim() == "o" && button9.textContent.trim() == "o" ||
          button3.textContent.trim() == "o" && button5.textContent.trim() == "o" && button7.textContent.trim() == "o" 
    ){
        gameOver = true
        endGame("your mom")
    }
}

function endGame(winner){
    buttonList.forEach(button => {
        button.disabled = true
    })
    const word = document.createElement('h1')
    word.classList.add("winner-text")
    word.innerHTML = winner + "won!111!1212!!1!!!11!@!093274023987409237840293840286728374529o71364-098632q9048678972348901"
    box.appendChild(word)

    const reset = document.createElement('button')
    reset.classList.add("reset-button")
    reset.innerHTML = "Play again?"
    box.appendChild(reset)

    reset.onclick = () => {
        currentTurn = 0
        gameOver = false
        buttonList.splice(0, buttonList.length)
        buttonList = [button1,button2,button3,button4,button5,button6,button7,button8,button9,]
        box.removeChild(reset)
        box.removeChild(word)

        buttonList.forEach(element => {
            element.children[0].innerHTML = ""
            element.disabled = false
        })
        gameplay()
    }
}