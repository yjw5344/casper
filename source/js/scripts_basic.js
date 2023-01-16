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

window.onload = function() {
    currentColor = 'blue';
    document.getElementById('blue').style.backgroundColor = '#b22222';
    document.getElementById('blue').style.pointerEvents = 'none';
    document.getElementById('confiqurator').play();
    // document.getElementById('confiqurator').pause();

    videoWidth = document.getElementById("confiqurator").offsetWidth;
    videoHeight = document.getElementById("confiqurator").offsetHeight;
    document.getElementById("panorama").style.width = videoWidth + 'px';
    document.getElementById("panorama").style.height = videoHeight + 'px';

    document.getElementById("panorama").style.display = "none";
    load360();
}

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
        video.play();
        video.currentTime = 0.00;
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
        video.play();
        video.currentTime = 24.05;
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
        video.play();
        video.currentTime = 48.05;
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
        video.play();
        video.currentTime = 72.10;
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

// 배경 추가(도시 배경)
document.getElementById("default_blue").addEventListener('click',() => {
    if (currentScreen == 0) {
        currentScreen = 1;
        video.src = SCREEN_1;
        video.load();
        video.play();
        video.currentTime = 0.00;
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
        video.play();
        video.currentTime = 24.10;
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
        video.play();
        video.currentTime = 48.10;
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
        video.play();
        video.currentTime = 72.15;
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
