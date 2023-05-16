
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback (e) 
    })
}

addGlobalEventListener('click', ".btnx", e => {
    clicked = e.target
    value = clicked.innerText;
    console.log(value)
})

{/* <div class="char col ">
                    <button type="button" id="Q" class="btnx" >Q</button>
                </div> */}


keyboardfirstrow=["Q","W","E","R","T",'Y','U','I','O','P']
keyboardfirstrow.forEach(element => addkey(element, "first-row"));
keyboardsecondrow=['A','S','D','F','G','H','J','K','L']
keyboardsecondrow.forEach(element => addkey(element, "second-row"));

function addkey (key, row) {
    buttuncont = document.createElement('div')
    buttuncont.classList.add('char', 'col')
    butt = document.createElement('button')
    butt.classList.add('btnx')
    butt.id = key
    butt.type = 'button'
    butt.innerText = key
    buttuncont.appendChild(butt)

    row = document.querySelector(`.${row}`)
    row.appendChild(buttuncont)
}
