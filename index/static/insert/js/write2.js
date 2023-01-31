

//=======================================================배터리===================================
  $(function(){
    $(".form").on("submit", function(e){

        var bat_input = parseInt($("#bat_input").val())
//=======================배터리데이터보내기================================================

        $.ajax({
        type:'POST',
        url:"/../save/1",
        data:JSON.stringify(bat_input)
        });
//========================================================================================
        if(bat_input==100){
        $("#box_bat_num").text(bat_input)

        let options = {
        startAngle: -1.55,
        size: 150,
        value: 100,
        fill: {gradient: ["#a445b2", "#fa4299"]}
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(0).slice(0)) + "%");
    });
        return;
        }

        $("#box_bat_num").text(bat_input)

        let options = {
        startAngle: -1.55,
        size: 150,
        value: bat_input / 100,
        fill: {gradient: ["#a445b2", "#fa4299"]}
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).slice(2)) + "%");
    });
    })
    })

  let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.00,
    fill: {gradient: ["#a445b2", "#fa4299"]}
    }
$(".circle .bar").circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).slice(2)) + "%");
});
//=======================================================컬러===================================

const toHexBtn = document.querySelector('[name="rgb-btn"]')
const result = document.querySelector('.hex')
const r = document.querySelector('.r')
const g = document.querySelector('.g')
const b = document.querySelector('.b')

const progress = document.querySelector(".progress-bar-col")

toHexBtn.addEventListener('click', function(){
  let rpercent = parseInt(r.value) / 255 * 100
  let gpercent = parseInt(g.value) / 255 * 100
  let bpercent = parseInt(b.value) / 255 * 100
//=======================컬러데이터보내기================================================

        $.ajax({
        type:'POST',
        url:"../save/2",
        data:JSON.stringify({
        "r":r.value,
        "g":g.value,
        "b":b.value
        })
        });
//========================================================================================
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

});
//=======================================================엔코더===================================

const resultNum = document.querySelector(".cc")
const number = document.querySelector(".aa")
const number2 = document.querySelector(".bb")

resultNum.addEventListener('click', function(){
//=======================================================엔코더데이터보내기===================================
  $.ajax({
        type:'POST',
        url:"../save/3",
        data:JSON.stringify({
        "encoder_l":number.value,
        "encoder_r":number2.value,

        })
        });
//==========================================================================================
  const counter_l = document.querySelector(".l1__area");
  const counter_r = document.querySelector(".r1__area");
  const max_l = `${number.value}`;
  const max_r = `${number2.value}`;
  setTimeout(() => counter(counter_l, max_l), 200);
  setTimeout(() => counter(counter_r, max_r), 200);
})

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





