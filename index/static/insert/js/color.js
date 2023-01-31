

const toHexBtn = document.querySelector('[name="btn"]')
const result = document.querySelector('.hex')
let r = document.querySelector('.r')
let g = document.querySelector('.g')
let b = document.querySelector('.b')



const donut = document.querySelector(".donut")

if( $("#r_").length != 0 ){
let r_= $("#r_")[0].innerText/1
let g_= $("#g_")[0].innerText/1
let b_= $("#b_")[0].innerText/1
r.value=`${r_}`
g.value=`${g_}`
b.value=`${b_}`
donut.style.background = `rgb(${r_},${g_},${b_})`

}

//function minSubmit() {
//
//  donut.style.background = `rgb(${r.value},${g.value},${b.value})`;
//
//
//  }
//function inputRGB(){
//
//}
//
//toHexBtn.addEventListener('onSubmit', function(){
//
//  donut.style.background = `rgb(${r.value},${g.value},${b.value})`
//
//
//
//
//})