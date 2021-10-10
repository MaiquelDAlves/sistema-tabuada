let n = [0,1,2,3,4,5,6,7,8,9,10];


document.querySelectorAll('.botoes button').forEach((item => {
    item.addEventListener('click', clickEvent);
}));

function clickEvent(e) {
    let key = e.target.getAttribute('data')
    let resultado = ''
    let options = ''

    for (let i in n) {
        options += `${key} X ${i} = ${resultado = key * i}<br>`
    }
    document.querySelector('.resultado').innerHTML = options;  
    document.querySelector('.resultado').style.display = 'flex'; 
}