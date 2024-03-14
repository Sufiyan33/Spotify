console.log("Welcone to Spotify")

// Initialize variables 
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
]

// Handle play or pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        audioElement.classList.remove('fa-circle-play');
        audioElement.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity =0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    // Update seekbar here
    progess = parseInt((audioElement.currentTime/audioElement.duration) * 100)
    console.log(progess)
    myProgressBar.value = progess
})

// Add change event on myProgressBar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})