let options = [
    {icon:'👊',name:'rock'},
    {icon:'🖐',name:'paper'},
    {icon:'✌️',name:'scissor'},
]

let results = []


let user_name="Aziz Sobirov"


let user_options = document.querySelector(".game_options")
let user_score = document.getElementById('user_score')
let user_icon = document.getElementById('user_icon')
let user_result = document.getElementById('user_result')
let userScore = 0

let bot_score = document.getElementById('bot_score')
let bot_icon = document.getElementById('bot_icon')
let bot_result = document.getElementById('bot_result')
let botScore = 0

for(let i=0;i<options.length;i++){
    user_options.innerHTML+=`<span onclick='loadGame(${i})'>${options[i].icon}</span>`
}

function loadGame(user){
    let userIcon = options[user].icon
    let userName = options[user].name

    let bot = Math.floor(Math.random() * 3)
    let botIcon = options[bot].icon
    let botName = options[bot].name
    

    if(userName == 'rock' && botName == 'paper'){
        botScore++
        bot_result.innerHTML='Bot win!'
        user_result.innerHTML='You lost!'
    }else if(userName == 'paper' && botName == 'scissor'){
        botScore++
        bot_result.innerHTML='Bot win!'
        user_result.innerHTML='You lost!'
    }else if(userName == 'scissor' && botName == 'rock'){
        botScore++
        bot_result.innerHTML='Bot win!'
        user_result.innerHTML='You lost!'
    }else if(botName == 'rock' && userName == 'paper'){
        userScore++
        user_result.innerHTML='You win!'
        bot_result.innerHTML='Bot lost!'
    }else if(botName == 'paper' && userName == 'scissor'){
        userScore++
        user_result.innerHTML='You win!'
        bot_result.innerHTML='Bot lost!'
    }else if(botName == 'scissor' && userName == 'rock'){
        userScore++
        user_result.innerHTML='You win!'
        bot_result.innerHTML='Bot lost!'
    }else if(userName == botName){
        user_result.innerHTML='It\'s Draw!'
        bot_result.innerHTML='It\'s Draw!'
    }


    results.push({
        name:user_name,
        result:userScore + ':' + botScore
    })
    user_score.innerHTML='You: ' + userScore
    bot_score.innerHTML='Bot: ' + botScore
    user_icon.innerHTML=userIcon
    bot_icon.innerHTML=botIcon
}