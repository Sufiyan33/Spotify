console.log("Welcone to Spotify")

// Initialize variables 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Naa Jane tu", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Le ja tu mujhe", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Jaani dushman", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Lo safar suru", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tery yaado me", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Tera yaar hu mai", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Kaha ho", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Hamari Adhuri kahani", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Chal mahiye", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
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