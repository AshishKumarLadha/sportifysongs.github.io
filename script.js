console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Shape of You - Ed Sheeran", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Faded - Alan Walker", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Alone, Pt.2 - Alan Walker & Ava Max", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "DJ Snake - Let Me Love You ft. JUstin Bieber", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Perfect - Ed Sheeran", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Luis Fonsi - Despacito ft. Daddy Yankee", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "On My Way - Alan Walker, Sabrina Carpenter & Farruko", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "Sing Me to Sleep - Alan Walker", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "Paradise - Alan Walker", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Diamond Heart - Alan Walker", filePath: "4.mp3", coverPath: "10.jpg"},
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// let audioElement = new Audio('1.mp3');
// audioElement.play

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
       console.log('timeupdate');
       //Update Seekbar
       progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //    console.log(progress);
       myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-pause-circle');
    element.classList.add('fa-play-circle');  

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=   `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
    
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioElement.src=   `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src=   `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
})