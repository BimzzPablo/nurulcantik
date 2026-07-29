// =================================
// LUXURY CINEMATIC AUTO MOVIE
// =================================


const scenes = document.querySelectorAll(".scene");

let currentScene = 0;


// durasi scene

const sceneDuration = [

    8000,   // opening

    8000,   // nama

    10000,  // foto 1

    10000,  // foto 2

    10000,  // foto 3

    30000,  // surat

    999999  // ending

];





// =================================
// START BUTTON
// =================================


function startFilm(){


    const music =
    document.getElementById("music");


    // nyalakan musik

    music.volume = 0;


    music.play()
    .catch(error=>{

        console.log("Audio error:", error);

    });



    // fade in musik


    let fadeMusic =
    setInterval(()=>{


        if(music.volume < 0.45){


            music.volume +=0.02;


        }else{


            clearInterval(fadeMusic);


        }


    },200);





    // hilangkan start screen


    const start =
    document.getElementById("startScreen");



    if(start){


        start.style.opacity="0";


        setTimeout(()=>{


            start.style.display="none";


        },2000);


    }




    // mulai film


    startMovie();


}







// =================================
// MOVIE CONTROL
// =================================


function startMovie(){



    setTimeout(()=>{


        changeScene();



        if(currentScene < scenes.length - 1){


            startMovie();


        }



    }, sceneDuration[currentScene]);



}





function changeScene(){



    scenes[currentScene]
    .classList.remove("active");



    currentScene++;



    if(scenes[currentScene]){


        scenes[currentScene]
        .classList.add("active");


        sceneEffect(currentScene);


    }



}







// =================================
// SCENE EFFECT
// =================================


function sceneEffect(sceneNumber){



    // efek foto


    if(
        sceneNumber >=2 &&
        sceneNumber <=4
    ){


        let img =
        scenes[sceneNumber]
        .querySelector("img");



        if(img){


            img.style.opacity="0";



            setTimeout(()=>{


                img.style.transition=
                "opacity 3s ease";


                img.style.opacity="1";



            },500);


        }



    }






    // surat


    if(sceneNumber === 5){


        typingLetter();


    }






    // ending


    if(sceneNumber === 6){


        createParticles();


    }



}








// =================================
// LETTER TYPING
// =================================


const letterText = `

Aku membuat ini
bukan karena sesuatu yang besar.


Aku hanya ingin membuat
sebuah hal kecil untuk kamu.


Terima kasih sudah hadir
dan menjadi bagian dari cerita ini.


Semoga hari-hari kamu selalu
dipenuhi hal baik.


- dari aku

`;





function typingLetter(){


    const target =
    document.getElementById("typing");


    if(!target) return;



    target.innerHTML="";



    let index = 0;



    function write(){



        if(index < letterText.length){


            target.innerHTML +=
            letterText.charAt(index);



            index++;



            setTimeout(
            write,
            130
            );


        }



    }



    write();



}








// =================================
// ENDING PARTICLE
// =================================


function createParticles(){


    setInterval(()=>{


        let particle =
        document.createElement("span");



        particle.innerHTML="✦";



        particle.style.position="fixed";


        particle.style.left =
        Math.random()*100+"vw";


        particle.style.bottom="-20px";


        particle.style.color="#d7b878";


        particle.style.fontSize =
        Math.random()*15+10+"px";


        particle.style.zIndex="50";


        particle.style.animation=
        "rise 6s linear";



        document.body.appendChild(particle);



        setTimeout(()=>{


            particle.remove();


        },6000);



    },500);


}





// particle animation

const particleStyle =
document.createElement("style");


particleStyle.innerHTML=`

@keyframes rise{


0%{

transform:translateY(0);

opacity:0;

}


20%{

opacity:1;

}


100%{

transform:translateY(-110vh);

opacity:0;

}


}

`;



document.head.appendChild(particleStyle);