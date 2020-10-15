const box = document.querySelector('.box')
const res = document.querySelector('.calc__res')

window.addEventListener('keypress', (event)=> {
    if (event.key.match(/[0-9]/)) {
        res.textContent += event.key.match(/[0-9]/)
    }
})
box.addEventListener('mousedown', calc.bind(this))


function calc(event) {
    const data = event.target.dataset.value
    
    switch(data) {
        case '*':
            res.textContent += '*'
            break
        case '-':
            res.textContent += '-'
            break
        case '+':
            res.textContent += '+'
            break
        case '/':
            res.textContent += '/'
            break
        case 'res':
            res.textContent = eval(res.textContent)
            break
        case 'del':
            res.textContent = ''
            break
        default:
            res.textContent += data 
            break
    }
}

