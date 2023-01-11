let currentColor = '';
let view = 0; // 0:외장, 1: 내장
let sec = 0.00;
let min = 0;
let videoWidth;
let videoHeight;

const video = document.getElementById('confiqurator');

window.onload = function() {
    currentColor = 'blue';
    document.getElementById('blue').style.backgroundColor = '#b22222';
    document.getElementById('blue').style.pointerEvents = 'none';
    document.getElementById('confiqurator').play();

    videoWidth = document.getElementById("confiqurator").clientWidth;
    videoHeight = document.getElementById("confiqurator").clientHeight;
    document.getElementById("panorama").style.width = videoWidth + 'px';
    document.getElementById("panorama").style.height = videoHeight + 'px';

    document.getElementById("panorama").style.display = "none";
    load360();
}

// // 마우스 클릭 이벤트
// function toggleVideoStatus(e) {    
//     if (video.paused) {        
//         video.play();   // play() 영상 재생하는 메서드
//     } else {
//         video.pause();  // pause() 영상 중지하는 메서드        
//     }
// }

// video.addEventListener("click", toggleVideoStatus);

video.addEventListener("timeupdate", (e) => {
    sec = (e.target.currentTime % 60).toFixed(2);
    min = Math.floor(e.target.currentTime / 60);
    // console.log(min + ":" + sec); // time log

    if (currentColor == 'blue') {
        if (sec >= 23.70) {        
            console.log(sec);
            video.currentTime = 0;            
        }
    } else if (currentColor =='white') {
        if (sec >= 47.80) {        
            console.log(sec);
            video.currentTime = 24.10;            
        }
    } else if (currentColor =='orange') {
        if (sec >= 11.70 && min >= 1) {        
            console.log(sec);
            video.currentTime = 48.10;            
        }
        
    } else if (currentColor =='grey') {
        if (sec >= 35.70 && min >= 1) {        
            console.log(sec);
            video.currentTime = 72.10;            
        }        
    }
    // document.getElementById('time').innerHTML = e.target.currentTime;
});

// 마우스 오버 이벤트
// video.addEventListener('mouseover', function(){
//     video.pause();
// });

// video.addEventListener('mouseout', function(){
//     video.play();
// });

// 색상 변경 이벤트
document.getElementById("blue").addEventListener('click',() => {
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('blue').style.backgroundColor = '#b22222';

    let addtimer = 0;
    if (currentColor == 'white') {
        addtimer = -24.01;
    } else if( currentColor == 'orange') {
        addtimer = -48.05;
    } else if( currentColor == 'grey') {
        addtimer = -71.9;
    }
    
    video.currentTime = (min*60) + parseFloat(sec) + addtimer;

    if(view == 1) {
        document.getElementById('interior').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';;
        document.getElementById('interior').style.pointerEvents = 'auto';
        document.getElementById("confiqurator").style.display = "flex";
        document.getElementById("panorama").style.display = "none";
        view = 0;
    }

    currentColor = 'blue';
});

document.getElementById("white").addEventListener('click',(e) => {    
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('white').style.backgroundColor = '#b22222';
    document.getElementById('white').style.pointerEvents = 'none';

    let addtimer = 0;
    if (currentColor == 'blue') {
        addtimer = 24.02;
    } else if(currentColor == 'orange') {
        addtimer = -24;
    } else if(currentColor == 'grey') {
        addtimer = -48.90;
    }
    
    video.currentTime = (min*60) + parseFloat(sec) + addtimer;

    if( view == 1) {
        document.getElementById('interior').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';;
        document.getElementById('interior').style.pointerEvents = 'auto';
        document.getElementById("confiqurator").style.display = "flex";
        document.getElementById("panorama").style.display = "none";
        view = 0;
    }
    
    currentColor = 'white';
});

document.getElementById("orange").addEventListener('click',() => {
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('orange').style.backgroundColor = '#b22222';
    document.getElementById('orange').style.pointerEvents = 'none';

    let addtimer = 0;
    if (currentColor == 'blue') {
        addtimer = 48.05;
    } else if(currentColor == 'white') {
        addtimer = 24.1;
    } else if(currentColor == 'grey') {
        addtimer = -24;
    }
    
    video.currentTime = (min*60) + parseFloat(sec) + addtimer;

    if( view == 1) {
        document.getElementById('interior').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';;
        document.getElementById('interior').style.pointerEvents = 'auto';
        document.getElementById("confiqurator").style.display = "flex";
        document.getElementById("panorama").style.display = "none";
        view = 0;
    }

    currentColor = 'orange';
});

document.getElementById("grey").addEventListener('click',() => {
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('grey').style.backgroundColor = '#b22222';
    document.getElementById('grey').style.pointerEvents = 'none';    

    let addtimer = 0;
    if (currentColor == 'blue') {
        // addtimer = 72.07;
        addtimer = 71.05;
    } else if(currentColor == 'white') {
        addtimer = 47.8;
    } else if(currentColor == 'orange') {
        addtimer = 24;
    }

    video.currentTime = (min*60) + parseFloat(sec) + addtimer;

    if( view == 1) {
        document.getElementById('interior').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';;
        document.getElementById('interior').style.pointerEvents = 'auto';
        document.getElementById("confiqurator").style.display = "flex";
        document.getElementById("panorama").style.display = "none";
        view = 0;
    }

    currentColor = 'grey';

});

document.getElementById("interior").addEventListener('click',(e) => {
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('interior').style.backgroundColor = '#b22222';
    document.getElementById('interior').style.pointerEvents = 'none';

    document.getElementById("confiqurator").style.display = "none";    
    document.getElementById("panorama").style.display = "flex";
    load360();

    view = 1;    
});

//panorama
function load360() {
    var img = new Image();    
    img.src = "./img/360.jpg";

    pannellum.viewer('panorama', {               
        "autoLoad": true,
        "panorama": img.src,    
    });
}

// Rotate slider
// let slider = document.getElementById("myRange");
// slider.oninput = function() {
//     video.pause();

//     let addTimer = 0;
//     if (currentColor == "blue") {
//         addTimer = 0;
//     } else if (currentColor == "white") {
//         addTimer = 24;
//     } else if (currentColor == "orange") {
//         addTimer = 48;
//     } else if (currentColor == "grey") {
//         addTimer = 72;
//     }

//     let rotateValue = parseFloat(this.value)/4; //0.25초 간격
//     console.log("Rotate position : " + rotateValue);

//     video.currentTime = rotateValue + addTimer;
// }

// slider.onchange = function() {
//     setTimeout( () => {
//         video.play();
//         slider.value = 1;        
//     }, 3000);
// }


// Mobile Touch
let m_prevX = 0;
let m_xDir = "";
confiqurator.addEventListener('touchmove', (e) => {
    if (m_prevX < e.changedTouches[0].pageX) {
        m_xDir = "right";
    } else if (m_prevX > e.changedTouches[0].pageX) {
        m_xDir = "left";
    } else {
        m_xDir = "";
    }
    m_prevX = e.changedTouches[0].pageX;
});

confiqurator.addEventListener('touchstart', (e) => {
    let moveTime = video.currentTime;
    let pivotTime;    
    
    video.pause();

    if (currentColor == "blue") {
        pivotTime = 24.0;
    } else if (currentColor == "white") {
        pivotTime = 48.0;
    } else if (currentColor == "orange") {
        pivotTime = 72.0;
    } else if (currentColor == "grey") {
        pivotTime = 96.0;        
    }
    
    timeCheck = setInterval( () => {
        if (m_xDir=="right") { // 오른쪽 이동
            moveTime = (moveTime + 0.5);
            // console.log(moveTime);
            if(moveTime > pivotTime) {
                moveTime -= 24.0;        
            }
            video.currentTime = moveTime;
            m_xDir = "";
        } else if (m_xDir=="left") { // 왼쪽 이동
            moveTime = moveTime - 0.5;
            if(moveTime < pivotTime-24.0) {
                moveTime =+ pivotTime;
            }
            video.currentTime = moveTime;
            m_xDir = "";
        }
    },50);
});

confiqurator.addEventListener('touchend', (e) => {
    clearInterval(timeCheck);
    video.play();
});

// Mouse Drag Event
let mouseX;
let timeCheck;

let prevX = 0;
let xDir = "";
confiqurator.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;

    if (prevX < e.pageX) {
        xDir = "right";
    } else if (prevX > e.pageX) {
        xDir = "left";
    } else {
        xDir = "";
    }
    prevX = e.pageX;
    // console.log(e.pageX);
    // console.log(xDir);
});

// 남은 비율 계산 버전
// confiqurator.addEventListener('mousedown', (e) => {
//     let current = video.currentTime;
//     let videoElement = video.getBoundingClientRect();    
//     video.pause();
//     let pivotTime;

//     if (currentColor == "blue") {
//         pivotTime = 24.0;
//     } else if (currentColor == "white") {
//         pivotTime = 48.0;
//     } else if (currentColor == "orange") {
//         pivotTime = 72.0;
//     } else if (currentColor == "grey") {
//         pivotTime = 96.0;        
//     }

//     timeCheck = setInterval( () => {
//         let videoDrag;
//         if (mouseX > e.clientX) { // 오른쪽 이동
//             videoDrag = ((mouseX-e.clientX)/((videoElement.x+videoWidth)-e.clientX)).toFixed(2);
//             let moveTime = (pivotTime-current)*videoDrag;
//             video.currentTime = current + moveTime;            
//         } else { // 왼쪽 이동
//             videoDrag = ((e.clientX-mouseX)/(e.clientX-videoElement.x)).toFixed(2);            
//             let moveTime = current-((current-pivotTime+23.5)*videoDrag);
//             video.currentTime = moveTime;            
//         }
//         // console.log(videoDrag);
//     },50);
// });

// 일정한 속도로 빨리감기 & 리와인드 되는 버전
confiqurator.addEventListener('mousedown', (e) => {
    let moveTime = video.currentTime;
    let pivotTime;    
    
    video.pause();

    if (currentColor == "blue") {
        pivotTime = 24.0;
    } else if (currentColor == "white") {
        pivotTime = 48.0;
    } else if (currentColor == "orange") {
        pivotTime = 72.0;
    } else if (currentColor == "grey") {
        pivotTime = 96.0;        
    }
    
    timeCheck = setInterval( () => {
        if (xDir=="right") { // 오른쪽 이동
            moveTime = (moveTime + 0.5);
            // console.log(moveTime);
            if(moveTime > pivotTime) {
                moveTime -= 24.0;        
            }
            video.currentTime = moveTime;
            xDir = "";
        } else if (xDir=="left") { // 왼쪽 이동
            moveTime = moveTime - 0.5;
            if(moveTime < pivotTime-24.0) {
                moveTime =+ pivotTime;
            }
            video.currentTime = moveTime;
            xDir = "";
        }
    },50);
});

confiqurator.addEventListener('mouseup', (e) => {
    clearInterval(timeCheck);
    video.play();
});

confiqurator.addEventListener('mouseleave', (e) => {
    clearInterval(timeCheck);
    video.play();
});

// 저전력모드인 경우
// video.addEventListener('suspend', () => {
//     alert("저전력 모드를 해제하세요!");
// });

/* 시간 정리
00:00:00 ~ 00:24:30 파란색 (24초30) 인테스 블루 펄( https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/YP5/colorchip-exterior.png ) 
00:24:30 ~ 00:48:30 흰색 (24초) 아틀라스 화이트 ( https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/SAW/colorchip-exterior.png)
00:48:30 ~  01:12:30 붉은색 (24초) 소울트로닉 오렌지 펄 (https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/SOP/colorchip-exterior.png)
01:12:30 ~ 01:36 그레이(24초) 티탄 그레이 메탈릭 ( https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/R4G/colorchip-exterior.png )

시작점/끝점
블루 > 00:00 24:02 >> 24:02
흰색 > 24:03 48:04 >> 24:01
오렌지 > 48:05 1:12:07 >> 24:02
그레이 > 1:12:08 1:36:00 >> 23:02

문제점 : timeStamp가 0.26~0.27초에 한번씩 찍음
*/

// to-do
// 내장&외장 height 값이 왜 달라지는 확인 필요


