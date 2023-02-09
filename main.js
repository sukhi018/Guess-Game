var number = rand();
var mx = 0;
var chances = 100;
console.log(number)

function rand() {

    return Math.floor(Math.random() * (100) + 1)
}

function fun() {

    var val = parseInt(document.getElementById('value').value)
    if (val == number) {
        var box = document.getElementById('guessBox').getElementsByTagName('h1')[0]
        console.log(box)
        box.innerHTML = `${number}`
        var guess = document.getElementById('guess')
        guess.innerHTML = `🤩🤩Hurray you won🤩🤩!!`
        var score = document.getElementById('maxscore')
        mx = Math.max(mx, chances)
        console.log(mx, chances)
        score.innerHTML = `🏅Highscore: ${mx}`
        let body = document.getElementsByTagName('body')
        body[0].style.backgroundColor = 'green';
        document.getElementById('hide').style.visibility = 'hidden'
        console.log(document.getElementById('guessBox'))
        document.getElementById('guessBox').style.width = '100px'
    } else {
        chances -= 1
        var guess = document.getElementById('guess')
        let el = document.getElementById('chance')
        el.innerHTML = `<span>💯</span> Chances : ${chances}`
        if (val < number) {
            guess.innerHTML = `Your Guess Is Low`
        } else {
            guess.innerHTML = `Your Guess Is High`

        }

    }
    if (chances == 0) {
        document.getElementById('notif').innerHTML = ` GAME OVER`
        document.getElementById('hide').style.visibility = 'hidden'
        let body = document.getElementsByTagName('body')[0].style.backgroundColor = 'red'

    }



}

function reset() {
    let body = document.getElementsByTagName('body')
    number = rand()
    console.log(number)

    mx = 0;
    chances = 100;
    box = document.getElementById('guessBox').getElementsByTagName('h1')[0]
    guess = document.getElementById('guess')
    let el = document.getElementById('chance')
    document.getElementById('value').value = 1
    box.innerHTML = `?`
    guess.innerHTML = `Start Guessing`
    body[0].style.backgroundColor = 'indianred';
    el.innerHTML = `<span>💯</span> Chances : ${chances}`
    document.getElementById('hide').style.visibility = 'visible'
    document.getElementById('guessBox').style.width = '150px'


}
var check = document.getElementById('result').getElementsByTagName('button')[0]
console.log(check)
check.addEventListener('click', fun)
var reset = document.getElementById('reset').addEventListener("click", reset)