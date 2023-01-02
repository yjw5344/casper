let currentColor = '';
let sec = 0.00;
let min = 0;

const video = document.getElementById('confiqurator');

window.onload = function() {
    currentColor = 'blue';
    document.getElementById('blue').style.backgroundColor = '#b22222';
    document.getElementById('blue').style.pointerEvents = 'none';
    document.getElementById('confiqurator').play();    
}

// 마우스 클릭 이벤트
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
        if (sec >= 47.70) {        
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


video.addEventListener('mouseover', function(){
    video.pause();
});

video.addEventListener('mouseout', function(){
    video.play();
});

// 색상 변경 이벤트
document.getElementById("blue").addEventListener('click',() => {
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('blue').style.backgroundColor = '#b22222';

    let addtimer = 0;
    if (currentColor == 'white') {
        addtimer = -24;
    } else if( currentColor == 'orange') {
        addtimer = -48;
    } else if( currentColor == 'grey') {
        addtimer = -71.9;
    }
    
    video.currentTime = (min*60) + parseFloat(sec) + addtimer;

    currentColor = 'blue';
});

document.getElementById("white").addEventListener('click',(e) => {    
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('white').style.backgroundColor = '#b22222';
    document.getElementById('white').style.pointerEvents = 'none';

    let addtimer = 0;
    if (currentColor == 'blue') {
        addtimer = 24.1;
    } else if( currentColor == 'orange') {
        addtimer = -24;
    } else if( currentColor == 'grey') {
        addtimer = -48;
    }
    
    video.currentTime = (min*60) + parseFloat(sec) + addtimer;
    
    currentColor = 'white';
});

document.getElementById("orange").addEventListener('click',() => {
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('orange').style.backgroundColor = '#b22222';
    document.getElementById('orange').style.pointerEvents = 'none';

    let addtimer = 0;
    if (currentColor == 'blue') {
        addtimer = 48.1;
    } else if( currentColor == 'white') {
        addtimer = 24;
    } else if( currentColor == 'grey') {
        addtimer = -24;
    }
    
    video.currentTime = (min*60) + parseFloat(sec) + addtimer;

    currentColor = 'orange';
});

document.getElementById("grey").addEventListener('click',() => {
    document.getElementById(currentColor).style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    document.getElementById(currentColor).style.pointerEvents = 'auto';
    document.getElementById('grey').style.backgroundColor = '#b22222';
    document.getElementById('grey').style.pointerEvents = 'none';

    let addtimer = 0;
    if (currentColor == 'blue') {
        addtimer = 72.2;
    } else if( currentColor == 'white') {
        addtimer = 48;
    } else if( currentColor == 'orange') {
        addtimer = 24;
    }

    video.currentTime = (min*60) + parseFloat(sec) + addtimer;

    currentColor = 'grey';
});


/* 시간 정리
00:00:00 ~ 00:24:30 파란색 (24초30) 인테스 블루 펄( https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/YP5/colorchip-exterior.png ) 
00:24:30 ~ 00:48:30 흰색 (24초) 아틀라스 화이트 ( https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/SAW/colorchip-exterior.png)
00:48:30 ~  01:12:30 붉은색 (24초) 소울트로닉 오렌지 펄 (https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/SOP/colorchip-exterior.png)
01:12:30 ~ 01:36 그레이(24초) 티탄 그레이 메탈릭 ( https://casper.hyundai.com/wcontents/repn-car/side-45/AX01/exterior/R4G/colorchip-exterior.png )

시작점/끝점
블루 > 00:00 24:00
흰색 > 24:10 48:00
오렌지 > 48:10 1:12:00
그레이 > 1:12:10 1:36:00

문제점 : timeStamp가 0.26~0.27초에 한번씩 찍음   
*/

