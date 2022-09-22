let songIndex = 1;
let audioElement = new Audio('audio1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let mygif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Keep it 100 - Rico Dola ft ArmaniaJ", filePath: "audio1.mp3", coverPath: "swag.jpg"},
    {songName: "Set Fire to the Rain", filePath: "audio2.mp3", coverPath: "audio2.jpg"},
    {songName: "Someone Like You", filePath: "audio3.mp3", coverPath: "audio3.jpg"},
    {songName: "Happier Than Ever", filePath: "audio4.mp3", coverPath: "audio4.jpg"},
    {songName: "I Love You", filePath: "audio5.mp3", coverPath: "audio5.jpg"},
    {songName: "No Time to Die", filePath: "audio6.mp3", coverPath: "audio6.jpg"},
]

songItems.forEach((element, i)=> {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        mygif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        mygif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=> {
    // Update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
});

myprogressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myprogressBar.value*audioElement.duration / 100
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        audioElement.currentTime = 0;
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `audio${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        console.log(songIndex)
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=6) {
        songIndex=1;
    }
    else {
        songIndex +=1;
    }
    audioElement.src = `audio${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=1) {
        songIndex=6;
    }
    else {
        songIndex -=1;
    }
    console.log(songIndex);
    audioElement.src = `audio${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})