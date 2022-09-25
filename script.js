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
    {songName: "The Witchs Daughter Ashley Serena", filePath: "audio7.mp3", coverPath: "audio7.jpg"},
    {songName: "Payphone - Maroon 5 Feat Wiz Kalifa", filePath: "audio8.mp3", coverPath: "audio8.jpg"},
    {songName: "Easy On Me Remake - Adele", filePath: "audio9.mp3", coverPath: "audio9.jpg"},
    {songName: "Plany Dance", filePath: "audio10.mp3", coverPath: "audio10.jpg"},
    {songName: "WindowsXP Error", filePath: "audio11.mp3", coverPath: "audio11.jpg"},
    {songName: "Ed Sheeran - Bad Habits", filePath: "audio12.mp3", coverPath: "audio12.jpg"},
    {songName: "jiggle jiggle x To the next Episode", filePath: "audio13.mp3", coverPath: "audio13.jpg"},
    {songName: "Wisthly Babe - ArmaniaJ", filePath: "audio14.mp3", coverPath: "audio14.jpg"},
    {songName: "No One Like You Song - Sam Smyers ft ArmaniaJ", filePath: "audio15.mp3", coverPath: "audio15.jpg"},
    {songName: "High On Groove - ArmaniaJ", filePath: "audio16.mp3", coverPath: "audio16.jpg"},
    {songName: "I'm in Love - ArmaniaJ", filePath: "audio17.mp3", coverPath: "audio17.jpg"},
    {songName: "Mamla Dil Da Hai - Tonny Kakkar", filePath: "audio18.mp3", coverPath: "audio18.jpg"},
    {songName: "Saringum - ArmaniaJ", filePath: "audio19.mp3", coverPath: "audio19.jpg"},
    {songName: "Pretty Bitches ArmaniaJ", filePath: "audio20.mp3", coverPath: "audio20.jpg"},
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
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `audio${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        console.log(songIndex)
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=songs.length) {
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
        songIndex=songs.length;
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
