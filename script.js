let n = [0,1,2,3,4,5,6,7,8,9,10];


document.querySelectorAll('.botoes button').forEach((item => {
    item.addEventListener('click', clickEvent);
}));

function clickEvent(e) {
    let key = e.target.getAttribute('data')
    let resultados = ''

    for (let i in n) {
        resultados += `${key} X ${i} = ${key * i}<br>`
    }
    document.querySelector('.resultado').innerHTML = resultados;  
    document.querySelector('.resultado').style.display = 'flex'; 
}