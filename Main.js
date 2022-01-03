music1 = music;
music2 = music2;
song = "";  

function setup ()
{
    canvas = createCanvas (600,500);
    canvas.center ();

    video = createCapture (VIDEO);
    video.size (550,500);
}

function draw ()
{
    image (video, 0, 0, 650, 500);
}

function preload ()
{
    song = loadSound (music.mp3);
}

function play ()
{
    song.play();
}