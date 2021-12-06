// console.log("Welcome to Listen");
let v=1;
let songIndex = 0;
// 
let volume=document.getElementById('volume');
let startDuration=document.getElementsByClassName('lefti');
let songDuration=document.getElementsByClassName('righti');
let middle=document.getElementById('middle');
let icons=document.getElementById('icons');
let songInfo=document.getElementById('songInfo');
let foot=document.getElementById('foot');
let tops=document.getElementById('top');
let controls=document.getElementById('controls');
let masterPlay= document.getElementById('masterPlay');
let masterPlays= document.getElementById('masterPlays');
let audioElement = new Audio('songs/0.mp3');
let bottom= document.getElementById('bottom');
let myProgressBar = document.getElementsByClassName('myProgressBar');
let marquee = document.getElementById('sName');
let topSongName = document.getElementById('tbName');
let pause = document.getElementById('pause');
let body = document.getElementById('w');
let pauses = document.getElementById('pauses'); 
let backtoHome=document.getElementById('topButton');
let topButtonBack=document.getElementById('back-to-home');
 let rotate = document.getElementById('rotate');
 let rights = document.getElementById('rights');
//  let right = document.getElementById('right');
let gif = document.getElementById('gif');
let giff = document.getElementsByClassName('gif');
let nameSong = document.getElementById('nameSong');
let songList= document.getElementsByClassName('songList');
let songs = [
    { sN: "Param Sundari", filePath: "songs/0.mp3", coverPath: "pics/0.jpg" },
    { sN: "O saki saki- Neha Kakkar", filePath: "song/O.mp3.mp3", coverPath: "pics/1.jpg" },
    { sN: "Teri Saanson Mein-Arijit Singh", filePath: "song/nazm.mp3.mp3", coverPath: "pics/2.jpg" },
    { sN: "Nazm-Nazm Arko", filePath: "song/sayyoni.mp3", coverPath: "pics/3.jpg" },
    { sN: "Khali Salaam duaa- Amit Trivedi ", filePath: "song/khali.mp3", coverPath: "pics/4.jpg" },
    { sN: "Kiston-Jubin Nautiyal ", filePath: "song/kiston.mp3", coverPath: "pics/5.jpg" },
    { sN: "Thoda Thoda pyar hua -Tanisk bagchi", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Chale Aana -Armaan malik", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Aabaad Barbaad Arijit Singh", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Besabriyan- Aramaan Malik", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Bimar dil-Jubin nautiyal,Dhwani Bhanushali", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Gali Gali-Neha Kakkar", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Ghunghroo- Arijit Singh", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Haule Haule- Sukhwinder Singh", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Hawa Banke", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
    { sN: "Is Kadar Pyaar Hai- Ankit", filePath: "song/1.mp3", coverPath: "pics/6.jpg" },
]
//handle play/pause
    var styleE= document.head.appendChild(document.createElement("style"));
    var styleF= document.head.appendChild(document.createElement("style"));
masterPlay.addEventListener('click', () => {
    // if(audioElement.paused || audioElement.currentTime<=0){
        v=1;
    audioElement.play();
    pause.style.display = 'block';
    masterPlay.style.display = 'none';
    
    pauses.style.display = 'block';
    masterPlays.style.display = 'none';
    // gif.style.opacity = '1';
        rotate.style.animation='rotate 3.5s linear infinite'; 
        rights.style.animation='rotate 5.5s linear infinite'; 
})
//  let s=()=>{
//     bottom.addEventListener('click',()=>{
//         bottom.style.animation='transform 0.4s';
//         bottom.style.animationFillMode='forwards';
//          right.style.display='flex';
//          right.style.animation='y 0.4s';
//          right.style.animationFillMode='forwards';
//          body.style.overflowY='hidden';
//         //  r();
//          console.log(v);
//     })
//  }
//  s();
// let r=()=>{
    volume.addEventListener('click',()=>{
        if(audioElement.muted==true){
               audioElement.muted=false;
               volume.src="pics/volume-up-4-xxl.png";
        }
        else{
            audioElement.muted=true;
            volume.src="pics/mute-2-xxl.png";
        }
    })
    backtoHome.addEventListener('click',()=>{
       
            tops.style.display='none';
        middle.style.display='none';
        foot.style.display='none';
        controls.style.display='none';
        icons.style.display='flex';
        songInfo.style.display='flex';
       bottom.classList.remove("active");
        // v=2;
    })
     
    topButtonBack.addEventListener('click',()=>{
       
        tops.style.display='none';
    middle.style.display='none';
    foot.style.display='none';
    controls.style.display='none';
    icons.style.display='flex';
    songInfo.style.display='flex';
   bottom.classList.remove("active");
    // v=2;
})
songInfo.addEventListener('click',()=>{
    // if(v>=2){
        tops.style.display='flex';
        middle.style.display='flex';
        foot.style.display='flex';
        controls.style.display='flex';
        v=1;
        icons.style.display='none';
        songInfo.style.display='none';
        bottom.classList.add('active');
    // }
    // v++;
    
    // setTimeout(()=>{
    //     v=1;
    // })
    
 })

pause.addEventListener('click', () => {
    v=1;
    makeAllPlays();
    audioElement.pause();
    pause.style.display = 'none';
    masterPlay.style.display = 'block';
    pauses.style.display = 'none';
    masterPlays.style.display = 'block';
    // gif.style.opacity = '0';
    rotate.style.animation=' rotate 0s linear 0s'; 
    rights.style.animation=' rotate 0s linear 0s'; 
})
masterPlays.addEventListener('click', () => {
    // if(audioElement.paused || audioElement.currentTime<=0){
        
    audioElement.play();
    pauses.style.display = 'block';
    masterPlays.style.display = 'none';
   pause.style.display = 'block';
    masterPlay.style.display = 'none';
//     // gif.style.opacity = '1';
        rights.style.animation='rotate 3.5s linear infinite'; 
        rotate.style.animation='rotate 5.5s linear infinite'; 
})
pauses.addEventListener('click', () => {
    makeAllPlays();
    audioElement.pause();
    pauses.style.display = 'none';
    masterPlays.style.display = 'block';
    pause.style.display = 'none';
    masterPlay.style.display = 'block';
    // // gif.style.opacity = '0';
    rights.style.animation=' rotate 0s linear 0s'; 
    rotate.style.animation=' rotate 0s linear 0s'; 
})
let play=()=>{
    index = songIndex + 1;
    if (index <= 15) {
        audioElement.src = `songs/${index}.mp3`;
        songIndex = index;
        rotate.src=`pics/${index}.jpg`;
        styleE.innerHTML=`#bottom.active:before{background: url('pics/${index}.jpg')no-repeat center center/cover}`;
        styleF.innerHTML=`#w:before{background: url('pics/${index}.jpg')no-repeat center center/cover}`; 
        rights.src=songs[songIndex].coverPath;
    }
    else {
        audioElement.src = "songs/0.mp3";
        songIndex = 0;
        rotate.src=`pics/0.jpg`;
        styleE.innerHTML=`#bottom.active:before{background: url('pics/0.jpg')no-repeat center center/cover}`; 
        styleF.innerHTML=`#w:before{background: url('pics/0.jpg')no-repeat center center/cover}`; 
        rights.src="pics/0.jpg";
    }
    audioElement.currentTime = 0;
    audioElement.play();
    nameSong.innerText = songs[songIndex].sN;
    pause.style.display = 'block';
    masterPlay.style.display = 'none';
    
    rotate.style.animation='rotate 3.5s linear infinite';
}
Array.from(document.getElementsByClassName('foreward')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = songIndex + 1;
        console.log(index);
    if (index <= 15) {
        audioElement.src = `songs/${index}.mp3`;
        songIndex = index;
        rotate.src=`pics/${index}.jpg`;
        rights.src=`pics/${index}.jpg`;
        console.log("chala");
        styleE.innerHTML=`#bottom.active:before{background: url('pics/${index}.jpg')no-repeat center center/cover}`;
        // styleF.innerHTML=`#w:before{background: url('pics/${index}.jpg')no-repeat center center/cover}`; 
        console.log("baad Bhi");
    }
    else {
        audioElement.src = "songs/0.mp3";
        songIndex = 0;
        rotate.src=`pics/0.jpg`;
        rights.src="pics/0.jpg";
        styleE.innerHTML=`#bottom.active:before{background: url('pics/0.jpg')no-repeat center center/cover}`; 
        // styleF.innerHTML=`#w:before{background: url('pics/0.jpg')no-repeat center center/cover}`; 
    }
    v=1;
    // songDuration.innerHTML="00:00";
    audioElement.currentTime = 0;
    audioElement.play();
    marquee.innerText=songs[songIndex].sN;
    topSongName.innerText=songs[songIndex].sN;
    nameSong.innerText = songs[songIndex].sN;
    pause.style.display = 'block';
    masterPlay.style.display = 'none';
    pauses.style.display = 'block';
    masterPlays.style.display = 'none';
    rotate.style.animation='rotate 3.5s linear infinite';
    rights.style.animation='rotate 5.5s linear infinite';
    })
})
Array.from(document.getElementsByClassName('backward')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = songIndex - 1;
        if (index >= 0) {
            audioElement.src = `songs/${index}.mp3`;
            songIndex = index;
            rights.src=`pics/${index}.jpg`;
            rotate.src=`pics/${index}.jpg`;
            styleE.innerHTML=`#bottom.active:before{background: url('pics/${index}.jpg')no-repeat center center/cover}`; 
            // styleE.innerHTML=`#w.active:before{background: url('pics/${index}.jpg')no-repeat center center/cover}`; 
        }
        else {
            audioElement.src = "songs/15.mp3";
            songIndex = 15;
            rights.src="pics/15.jpg";
            rotate.src=`pics/15.jpg`;
            styleE.innerHTML=`#bottom.active:before{background: url('pics/15.jpg')no-repeat center center/cover}`; 
            // styleE.innerHTML=`#w.active:before{background: url('pics/15.jpg')no-repeat center center/cover}`;
        }
        v=1;
        // songDuration.innerHTML="00:00";
        audioElement.currentTime = 0;
        marquee.innerText=songs[songIndex].sN;
        topSongName.innerText=songs[songIndex].sN;
        audioElement.play();
        nameSong.innerText = songs[songIndex].sN;
        pause.style.display = 'block';
        masterPlay.style.display = 'none';
        pauses.style.display = 'block';
        masterPlays.style.display = 'none';
        rights.style.animation='rotate 5.5s linear infinite'; 
    })
})
// foreward.addEventListener('click', () => {
//     index = songIndex + 1;
//     if (index <= 15) {
//         audioElement.src = `songs/${index}.mp3`;
//         songIndex = index;
//         rotate.src=`pics/${index}.jpg`;
//     }
//     else {
//         audioElement.src = "songs/0.mp3";
//         songIndex = 0;
//         rotate.src=`pics/0.jpg`;
//     }
//     audioElement.currentTime = 0;
//     audioElement.play();
//     nameSong.innerText = songs[songIndex].sN;
//     pause.style.display = 'block';
//     masterPlay.style.display = 'none';
    
//     rotate.style.animation='rotate 3.5s linear infinite';
//     // gif.style.opacity = '1';
// })
// backward.addEventListener('click', () => {
//     index = songIndex - 1;
//     if (index >= 0) {
//         audioElement.src = `songs/${index}.mp3`;
//         songIndex = index;
//     }
//     else {
//         audioElement.src = "songs/6.mp3";
//         songIndex = 6;
//     }
//     audioElement.currentTime = 0;
//     audioElement.play();
//     nameSong.innerText = songs[songIndex].sN;
//     pause.style.display = 'block';
//     masterPlay.style.display = 'none';
//     // gif.style.opacity = '1';
// })
            //   while(1){

            //   }
        
            let second=0;
audioElement.addEventListener('timeupdate', () => {
         let sec=parseInt(audioElement.duration%60);
          if(sec<10){
              songDuration[0].innerHTML=`${parseInt(audioElement.duration/60)}:0${sec}`;
              songDuration[1].innerHTML=`${parseInt(audioElement.duration/60)}:0${sec}`;
        }
    else{
        songDuration[0].innerHTML=`${parseInt(audioElement.duration/60)}:${sec}`;
        songDuration[1].innerHTML=`${parseInt(audioElement.duration/60)}:${sec}`;
    }
    // let dur=audioElement.duration;
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar[0].value = progress;
    myProgressBar[1].value = progress;
    let minute=parseInt(audioElement.currentTime/60);
    
          second=parseInt(audioElement.currentTime%60);
    if(second<10){
        startDuration[0].innerHTML=`${minute}:0${second}`;
        startDuration[1].innerHTML=`${minute}:0${second}`;
    }
    else{
        startDuration[1].innerHTML=`${minute}:${second}`;
        startDuration[0].innerHTML=`${minute}:${second}`;
    }
    
    if(progress==100)
    {
        play();
    }
     
})
// Array.from(myProgressBar).forEach((element)=>{
//     audioElement.currentTime = (myProgressBar[element].value * audioElement.duration) / 100;
// })
myProgressBar[0].addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar[0].value * audioElement.duration) / 100;
    // audioElement.currentTime = (myProgressBar[1].value * audioElement.duration) / 100;

})
myProgressBar[1].addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar[1].value * audioElement.duration) / 100;
    // audioElement.currentTime = (myProgressBar[0].value * audioElement.duration) / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('duratio')).forEach((element) => {

        element.classList.remove('ppause');
        element.classList.add('pplay');
        // element.style.backgroundColor='';

    })
}
 
 
Array.from(document.getElementsByClassName('duratio')).forEach((element) => {
    element.addEventListener('click', (e) => {
     
        makeAllPlays();
        element.classList.add('ppause');
            index = parseInt(e.target.id);
            pause.style.display = 'block';
            masterPlay.style.display = 'none';
            pauses.style.display = 'block';
            masterPlays.style.display = 'none';
            styleE.innerHTML=`#bottom.active:before{background: url('pics/${index}.jpg')no-repeat center center/cover}`;
            // e.target.style.animation='size 0.3s linear 0.1s';
            // e.target.style.backgroundColor='none';
            //   e.target.style.backgroundColor='rgb(3 61 15)';
            e.target.style.padding='0 0';
            audioElement.src = `songs/${index}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            marquee.innerText=songs[index].sN;
            topSongName.innerText=songs[songIndex].sN;
            songIndex = index;
            rotate.src=`pics/${index}.jpg`;
            rotate.style.animation='rotate 3.5s linear infinite';
            rights.src=`pics/${index}.jpg`;
            rights.style.animation='rotate 3.5s linear infinite';
            nameSong.innerText = songs[index].sN;
        
        
    })
})
 

Array.from(document.getElementsByClassName('songName')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
    })
})


// // audioElement.play();
