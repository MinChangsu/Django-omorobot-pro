
const btn = document.querySelector(".bb")
const l1__area = document.querySelector(".l1__area")
const r1__area = document.querySelector(".r1__area")

btn.addEventListener("click", func)

function func() {
    let pulse1 = document.getElementById('rpm1').value;
    let pulse2 = document.getElementById('rpm2').value;

      if(pulse1 > 9999 || pulse2 > 9999){
        alert("펄스의 값은 9999를 초과할수 없습니다.\n현재 왼쪽 바퀴 펄스 값은 " + pulse1 + "입니다. \n현재 오른쪽 바퀴 펄스 값은" + pulse2 +"입니다." );
      }
      else if(pulse1 == "" || pulse2 == ""){
        alert("펄스의 값은 공백일수 없습니다.");
      }
      else{
        let pp1 = pulse1
        let pp2 = pulse2
        alert("현재 왼쪽 바퀴 펄스 값으로 " + pulse1 +" 을 입력 받았습니다. \n현재 오른쪽 바퀴 펄스 값으로 " + pulse2 +" 을 입력 받았습니다.");
        l1__area.innerHTML += `<br>${pulse1}` 
        r1__area.innerHTML += `<br>${pulse2}` 

      }
  }
  