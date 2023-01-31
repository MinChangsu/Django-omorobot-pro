
//=======================================================배터리============================================================
$(function(){
    if( $("#box_bat_num").length == 0 ) return;
    if( $("#box_bat_num")[0].innerText==100 ){
    let options = {
        startAngle: -1.55,
        size: 150,
        value: 100,
        fill: {gradient: ["#a445b2", "#fa4299"]}
    }

    $(".circle .bar").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(0).slice(0)) + "%");
    })
    return;
    }
    let options = {
        startAngle: -1.55,
        size: 150,
        value: $("#box_bat_num")[0].innerText / 100,
        fill: {gradient: ["#a445b2", "#fa4299"]}
    }

    $(".circle .bar").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).slice(2)) + "%");
    })
})

//========================================================컬러==========================================================
const toHexBtn = document.querySelector('[name="rgb-btn"]')
const result = document.querySelector('.hex')
const r = document.querySelector('.r')
const g = document.querySelector('.g')
const b = document.querySelector('.b')

const rgbValues = []  
if($("#r_").text() != ""){
  rgbValues.push($("#r_").text())
}
if($("#g_").text() != ""){
  rgbValues.push($("#g_").text())
}
if($("#b_").text() != ""){
  rgbValues.push($("#b_").text())
}


if( rgbValues.length > 0 ){
console.log("색상 값 is there")
let r_= parseInt($("#r_").text())
let g_= parseInt($("#g_").text())
let b_= parseInt($("#b_").text())
r.value=`${r_}`
g.value=`${g_}`
b.value=`${b_}`


const progress = document.querySelector(".progress-bar-col")


let rpercent = parseInt(r.value) / 255 * 100
let gpercent = parseInt(g.value) / 255 * 100
let bpercent = parseInt(b.value) / 255 * 100

$(".red").css({
  width: `${rpercent}%`
})
$(".green").css({
 width: `${gpercent}%`
})
$(".blue").css({
 width: `${bpercent}%`
})
progress.style.background = `rgb(${r.value},${g.value},${b.value})`

}

//=======================================================바퀴수====================================================================

 const resultNum = document.querySelector(".cc")
 const number = document.querySelector(".aa")
 const number2 = document.querySelector(".bb")


 if($("#rpm1_").text()){
   const counter_l = document.querySelector(".l1__area");
   const counter_r = document.querySelector(".r1__area");
   const max_l = `${$("#rpm1_").text()}`;
   const max_r = `${$("#rpm2_").text()}`;
   setTimeout(() => counter(counter_l, max_l), 50);
   setTimeout(() => counter(counter_r, max_r), 50);

     const counter = (_counter, max) => {
     let now = max;

     const handle = setInterval(() => {
     _counter.innerHTML = Math.ceil(max - now);
     if (now < 1) {
      clearInterval(handle);
     }

   const step = now / 10;
   now -= step;
   }, 50);
   }
}





