var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var score = 0 
$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)

function startGame(){
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')

    console.log('start')
    renderBox()
}

function handleBoxClick(event) {
    if (event.target.dataset.box) {
        renderBox()
        score ++
    }
}

function renderBox() {
    $game.innerHTML = ''
var box = document.createElement('div')

box.style.height = box.style.width = '50px'
box.style.position = 'absolute'
box.style.backgroundColor = '#000'
box.style.top = '50'
box.style.left = '70'
box.style.cursor = 'pointer'
box.setAttribute('data-box', 'true')


$game.insertAdjacentElement('afterbegin', box)
}