const SCREEN_0 = './video/AX-0000.mp4';
const SCREEN_1 = './video/AX-0001.mp4';

let currentColor = '';
let currentScreen = 0; // 0: 바다 1: 도시(기존)
let view = 0; // 0:외장, 1: 내장
let sec = 0.00;
let min = 0;
let videoWidth;
let videoHeight;

const video = document.getElementById('confiqurator');

// window.onload = function() {
//     currentColor = 'blue';
//     document.getElementById('blue').style.backgroundColor = '#b22222';
//     document.getElementById('blue').style.pointerEvents = 'none';
//     // document.getElementById('confiqurator').play();
//     document.getElementById('confiqurator').pause();

//     videoWidth = document.getElementById("confiqurator").offsetWidth;
//     videoHeight = document.getElementById("confiqurator").offsetHeight;
//     document.getElementById("panorama").style.width = videoWidth + 'px';
//     document.getElementById("panorama").style.height = videoHeight + 'px';

//     document.getElementById("panorama").style.display = "none";
//     load360();
// }
document.addEventListener("DOMContentLoaded", (e) => {
    currentColor = 'blue';
    document.getElementById('blue').style.backgroundColor = '#b22222';
    document.getElementById('blue').style.pointerEvents = 'none';
    // document.getElementById('confiqurator').play();
    document.getElementById('confiqurator').pause();

    videoWidth = document.getElementById("confiqurator").offsetWidth;
    videoHeight = document.getElementById("confiqurator").offsetHeight;
    document.getElementById("panorama").style.width = videoWidth + 'px';
    document.getElementById("panorama").style.height = videoHeight + 'px';

    document.getElementById("panorama").style.display = "none";
    load360();
});

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

    if (currentScreen == 0) {
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
    } else if (currentScreen == 1) {
        if (currentColor == 'default_blue') {
            if (sec >= 23.80) {        
                console.log(sec);
                video.currentTime = 0;            
            }
        } else if (currentColor == 'default_white') {
            if (sec >= 47.70) {        
                console.log(sec);
                video.currentTime = 24.10;            
            }
        } else if (currentColor == 'default_orange') {
            if (sec >= 11.80 && min >= 1) {        
                console.log(sec);
                video.currentTime = 48.10;            
            }            
        } else if (currentColor == 'default_grey') {
            if (sec >= 35.70 && min >= 1) {        
                console.log(sec);
                video.currentTime = 72.15;            
            }        
        }
    }
});

// 마우스 오버 이벤트
// video.addEventListener('mouseover', function(){
//     video.pause();
// });

// video.addEventListener('mouseout', function(){
//     video.play();
// });

let checkPlay = () => {    
    if (video.paused) {        
        document.getElementById("rotateBtn").src = "./img/play.png";
        document.getElementById("rotateMsg").innerHTML = "재생";        
    } else {
        document.getElementById("rotateBtn").src = "./img/pause.png";
        document.getElementById("rotateMsg").innerHTML = "정지";                
    }
}

// 색상 변경 이벤트
document.getElementById("blue").addEventListener('click',() => {
    if (currentScreen == 0) {        
        let addtimer = 0;
        if (currentColor == 'white') {
            addtimer = -24.05;
        } else if( currentColor == 'orange') {
            addtimer = -48.05;
        } else if( currentColor == 'grey') {
            addtimer = -72.10;
        }    
        video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    } else if (currentScreen == 1) {
        currentScreen = 0;
        video.src = SCREEN_0;
        video.load();
        // video.play();
        video.currentTime = 0.00;
        video.pause();
        checkPlay();
    }

    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('blue').style.backgroundColor = '#b22222';

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
    if (currentScreen == 0) {
        let addtimer = 0;
        if (currentColor == 'blue') {
            addtimer = 24.05;
        } else if(currentColor == 'orange') {
            addtimer = -24;
        } else if(currentColor == 'grey') {
            addtimer = -48.05;
        }
        video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    } else if (currentScreen == 1) {
        currentScreen = 0;
        video.src = SCREEN_0;
        video.load();
        // video.play();
        video.currentTime = 24.05;
        video.pause();
        checkPlay();
    }

    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('white').style.backgroundColor = '#b22222';
    document.getElementById('white').style.pointerEvents = 'none';

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
    if (currentScreen == 0) {
        let addtimer = 0;
        if (currentColor == 'blue') {
            addtimer = 48.05;
        } else if(currentColor == 'white') {
            addtimer = 24.00;
        } else if(currentColor == 'grey') {
            addtimer = -24.05;
        }    
        video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    } else if (currentScreen == 1) {
        currentScreen = 0;
        video.src = SCREEN_0;
        video.load();
        // video.play();
        video.currentTime = 48.05;
        video.pause();
        checkPlay();
    }

    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('orange').style.backgroundColor = '#b22222';
    document.getElementById('orange').style.pointerEvents = 'none';

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
    if (currentScreen == 0) {
        let addtimer = 0;
        if (currentColor == 'blue') {            
            addtimer = 72.10;
        } else if(currentColor == 'white') {
            addtimer = 48.05;
        } else if(currentColor == 'orange') {
            addtimer = 24.05;
        }
        video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    } else if (currentScreen == 1) {
        currentScreen = 0;
        video.src = SCREEN_0;
        video.load();
        // video.play();
        video.currentTime = 72.10;
        video.pause();
        checkPlay();
    }

    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('grey').style.backgroundColor = '#b22222';
    document.getElementById('grey').style.pointerEvents = 'none';    

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

// Mobile : Touch Drag Event
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

    if (currentColor == "blue" || currentColor == "default_blue") {
        pivotTime = 24.0;
    } else if (currentColor == "white" || currentColor == "default_white") {
        pivotTime = 48.0;
    } else if (currentColor == "orange" || currentColor == "default_orange") {
        pivotTime = 72.0;
    } else if (currentColor == "grey" || currentColor == "default_grey") {
        pivotTime = 96.0;        
    }
    
    timeCheck = setInterval( () => {
        if (m_xDir=="left") { // 오른쪽 이동
            moveTime = (moveTime + 0.4);
            // console.log(moveTime);
            if(moveTime > pivotTime) {
                moveTime -= 24.0;        
            }
            video.currentTime = moveTime;
            m_xDir = "";
        } else if (m_xDir=="right") { // 왼쪽 이동
            moveTime = moveTime - 0.4;
            if(moveTime < pivotTime-24.0) {
                moveTime =+ pivotTime;
            }
            video.currentTime = moveTime;
            m_xDir = "";
        }
    },50)
});

confiqurator.addEventListener('touchend', (e) => {
    clearInterval(timeCheck);
    // video.play();
});

// PC : Mouse Drag Event
let timeCheck;
let prevX = 0;
let xDir = "";
confiqurator.addEventListener('mousemove', (e) => {
    if (prevX < e.pageX) {
        xDir = "right";
    } else if (prevX > e.pageX) {
        xDir = "left";
    } else {
        xDir = "";
    }
    prevX = e.pageX;    
});

// 일정한 속도로 빨리감기 & 리와인드 되는 버전
confiqurator.addEventListener('mousedown', (e) => {
    let moveTime = video.currentTime;
    let pivotTime;   
    
    // video.pause();

    if (currentColor == "blue" || currentColor == "default_blue") {
        pivotTime = 24.0;
    } else if (currentColor == "white" || currentColor == "default_white") {
        pivotTime = 48.0;
    } else if (currentColor == "orange" || currentColor == "default_orange") {
        pivotTime = 72.0;
    } else if (currentColor == "grey" || currentColor == "default_grey") {
        pivotTime = 96.0;        
    }
    
    timeCheck = setInterval( () => {
        if (xDir=="left") { // 오른쪽 이동
            moveTime = (moveTime + 0.5);
            // console.log(moveTime);
            if(moveTime > pivotTime) {
                moveTime -= 24.0;        
            }
            video.currentTime = moveTime;
            xDir = "";
        } else if (xDir=="right") { // 왼쪽 이동
            moveTime = moveTime - 0.5;
            if(moveTime < pivotTime-24.0) {
                moveTime =+ pivotTime;
            }
            video.currentTime = moveTime;
            xDir = "";
        }
        // console.log("currentTime : " + moveTime);
    }, 50);
});

confiqurator.addEventListener('mouseup', (e) => {
    clearInterval(timeCheck);
    // video.play();
});

confiqurator.addEventListener('mouseleave', (e) => {
    clearInterval(timeCheck);
    // video.play();    
});


// 배경 추가(도시 배경)
document.getElementById("default_blue").addEventListener('click',() => {
    if (currentScreen == 0) {
        currentScreen = 1;
        video.src = SCREEN_1;
        video.load();
        // video.play();
        video.currentTime = 0.00;
        video.pause();
        checkPlay();
    } else if (currentScreen == 1) {        
        let addtimer = 0;
        if (currentColor == 'default_white') {
            addtimer = -24.10;
        } else if( currentColor == 'default_orange') {
            addtimer = -48.10;
        } else if( currentColor == 'default_grey') {
            addtimer = -72.05;
        }
        video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    }  

    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('default_blue').style.backgroundColor = '#b22222';

    if(view == 1) {
        document.getElementById('interior').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';;
        document.getElementById('interior').style.pointerEvents = 'auto';
        document.getElementById("confiqurator").style.display = "flex";
        document.getElementById("panorama").style.display = "none";
        view = 0;
    }
    currentColor = 'default_blue';
});

document.getElementById("default_white").addEventListener('click',() => {
    if (currentScreen == 0) {
        currentScreen = 1;
        video.src = SCREEN_1;
        video.load();
        // video.play();
        video.currentTime = 24.10;
        video.pause();
        checkPlay();
    } else if (currentScreen == 1) {        
        let addtimer = 0;
        if (currentColor == 'default_blue') {
            addtimer = 24.10;
        } else if( currentColor == 'default_orange') {
            addtimer = -24.00;
        } else if( currentColor == 'default_grey') {
            addtimer = -48.02;
        }
        video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    }

    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('default_white').style.backgroundColor = '#b22222';

    if(view == 1) {
        document.getElementById('interior').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';;
        document.getElementById('interior').style.pointerEvents = 'auto';
        document.getElementById("confiqurator").style.display = "flex";
        document.getElementById("panorama").style.display = "none";
        view = 0;
    }
    currentColor = 'default_white';
});

document.getElementById("default_orange").addEventListener('click',() => {
    if (currentScreen == 0) {
        currentScreen = 1;
        video.src = SCREEN_1;
        video.load();
        // video.play();
        video.currentTime = 48.10;
        video.pause();
        checkPlay();
    } else if (currentScreen == 1) {        
        let addtimer = 0;
        if (currentColor == 'default_blue') {
            addtimer = 48.10;
        } else if( currentColor == 'default_white') {
            addtimer = 24.00;
        } else if( currentColor == 'default_grey') {
            addtimer = -24.00;
        }
        video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    }

    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('default_orange').style.backgroundColor = '#b22222';

    if(view == 1) {
        document.getElementById('interior').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';;
        document.getElementById('interior').style.pointerEvents = 'auto';
        document.getElementById("confiqurator").style.display = "flex";
        document.getElementById("panorama").style.display = "none";
        view = 0;
    }
    currentColor = 'default_orange';
});

document.getElementById("default_grey").addEventListener('click',() => {    
    if (currentScreen == 0) {
        currentScreen = 1;
        video.src = SCREEN_1;
        video.load();
        // video.play();
        video.currentTime = 72.15;
        video.pause();
        checkPlay();
    } else if (currentScreen == 1) {        
        let addtimer = 0;
        if (currentColor == 'default_blue') {
            addtimer = 72.12;
        } else if( currentColor == 'default_white') {
            addtimer = 48.02;
        } else if( currentColor == 'default_orange') {
            addtimer = 24.02;
        }
        video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    }

    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('default_grey').style.backgroundColor = '#b22222';

    if(view == 1) {
        document.getElementById('interior').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';;
        document.getElementById('interior').style.pointerEvents = 'auto';
        document.getElementById("confiqurator").style.display = "flex";
        document.getElementById("panorama").style.display = "none";
        view = 0;
    }
    currentColor = 'default_grey';
});

// 재생 버튼
document.getElementById("rotateBtn").addEventListener('click',(e) => {    
    if (video.paused) {        
        video.play();
        document.getElementById("rotateBtn").src = "./img/pause.png";
        document.getElementById("rotateMsg").innerHTML = "정지";
    } else {
        video.pause();
        document.getElementById("rotateBtn").src = "./img/play.png";
        document.getElementById("rotateMsg").innerHTML = "재생";
    }
});

// 저전력모드인 경우
// video.addEventListener('suspend', () => {
//     alert("저전력 모드를 해제하세요!");
// });