// const p = document.getElementById('txtcount')
let id = 1
function imgForward() {
    id++
    txtcount.innerHTML = `${id}`
    img.src=`https://picsum.photos/id/${id}/200/300`
}


btn_back.onclick = function clickBtn(){
    if (id > 1) {
        id--
    }
    img.src=`https://picsum.photos/id/${id}/200/300`
    txtcount.innerHTML = `${id}`
}
btn_forward.onclick = function clickBtn(){
    id++
    txtcount.innerHTML = `${id}`
    img.src=`https://picsum.photos/id/${id}/200/300`
}

let timerid
btnscroll.onclick = function click(){

    if (btnscroll.innerText == 'Stop scroll') {
        btnscroll.innerText = 'Start scroll'
        clearInterval(timerid)
    } else {
        btnscroll.innerHTML = 'Stop scroll'
        timerid = setInterval(() => imgForward(), 3000)
    }
}