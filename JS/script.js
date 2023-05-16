
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
