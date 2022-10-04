const input = document.querySelector("input")
const ul = document.querySelector("ul")
let array = []

function add() {
    array.push(input.value)
    input.value = ''
    render()
    console.log(array)
};

function render(){
    ul.innerHTML = null
    array.forEach(function(Uebung){
        const li = document.createElement('li')
        li.innerHTML = Uebung
        ul.appendChild(li)
    })
};

function clean() {
    array = []
    ul.innerHTML = null
}