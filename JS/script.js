
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




keyboardfirstrow=["Q","W","E","R","T",'Y','U','I','O','P']
keyboardfirstrow.forEach(element => addkey(element, "first-row"));
keyboardsecondrow=['A','S','D','F','G','H','J','K','L']
keyboardsecondrow.forEach(element => addkey(element, "second-row"));

function addkey (key, row) {addEventListener
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


{/* <div class="input-text row1" id="one-one" type="text" name="one-one"></div> */}

gridcolumn = ["one", "two", "three", "four", "five", "six"]
gridrow = ["one", "two", "three", "four", "five"]

function createrow (numberofelements, rownumber) {
    let gridrow = ["one", "two", "three", "four", "five", "six", "seven"]

    for (let i = 0; i < numberofelements; i++) {
        square = document.createElement("div")
        square.classList.add("input-text", `row${rownumber}`)
        square.id=`${rownumber}-${gridrow[i]}`
        square.type="text"
        square.name=`${rownumber}-${gridrow[i]}`
        container = document.querySelector(".grid-container")
        container.appendChild(square)
      }
}


function creategrid (numberofrows, numberofcolumns) {
    let gridcolumn = ["one", "two", "three", "four", "five", "six", "seven", "eight"]
    for (let i = 0; i < numberofrows; i++) {
        createrow  (numberofcolumns, gridcolumn[i])
    }
}
creategrid(6,5)

// square = document.createElement("div")
// square.classList.add("input-text", "row1")


// grid-container = 

option = document.querySelector(".optwo")

option.addEventListener("click",() => {
    console.log("entered")
    container = document.querySelector(".optionspagecontainer")
    style = window.getComputedStyle(container)
    container.style.display = "block"
    console.log(style.display)

    
} )


closesign = document.querySelector(".closesign")

closesign.addEventListener("click", () => {
    container = document.querySelector(".optionspagecontainer")
    container.style.display = "none"
})