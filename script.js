/* =====================================================
   HAPPY SPECIAL DAY — HABIBI
   SCRIPT.JS
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const giftButton =
    document.getElementById("giftButton");

const surpriseScreen =
    document.getElementById("surpriseScreen");

const flowerContainer =
    document.getElementById("flowerContainer");

const herPhotoButton =
    document.getElementById("herPhotoButton");

const photoMessage =
    document.getElementById("photoMessage");

const closePhotoMessage =
    document.getElementById("closePhotoMessage");

const envelopeButton =
    document.getElementById("envelopeButton");

const letterScreen =
    document.getElementById("letterScreen");

const envelopeAnimation =
    document.getElementById("envelopeAnimation");

const letter =
    document.getElementById("letter");

const typedMessage =
    document.getElementById("typedMessage");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const closeLetter =
    document.getElementById("closeLetter");

const finalScreen =
    document.getElementById("finalScreen");

const letterPetals =
    document.getElementById("letterPetals");


/* =====================================================
   LOVE LETTER
===================================================== */

/*
   Change this message to your own message.

   Keep the backticks ` ` because they allow
   multiple lines.
*/

const loveMessage = `
My Dearest Habibi,

Happy Special Day, my beautiful HABIBI. ❤️

I want you to know how grateful I am to have you in my life.

I know that I am not perfect. There are times when I make mistakes, say things I don't mean, or make you feel hurt. For all of those moments, I am truly sorry.

I never want you to feel that you are not loved, appreciated, or important to me.

You mean so much more to me than I can explain with words.

If I could give you everything you deserve, I would give you all the chocolates, all the flowers, all the food, and all the dates in the world.

But even those things would never be enough.

Because you deserve the very best.

You deserve happiness.

You deserve peace.

You deserve someone who will choose you again and again.

And I want to be that person for you.

Thank you for being patient with me.

Thank you for understanding me.

Thank you for staying even during the difficult days.

Thank you for every smile, every conversation, every memory, and every moment we have shared.

Distance may sometimes make things difficult, but it will never change how much you mean to me.

I hope this little surprise reminds you that somewhere in this world, there is someone who loves you deeply and thinks about you more than you know.

I am sorry for the times I hurt you.

I am sorry for the moments when I failed to show you how much you mean to me.

And I promise that I will continue learning, growing, and becoming better—not only for myself, but for us.

You don't have to choose between chocolates, flowers, food, or a date.

You deserve them all.

You deserve every beautiful thing life has to offer.

And if I had the chance, I would give all of them to you myself.

Happy Special Day, Habibi.

I love you.

More than yesterday.

Less than tomorrow.

Forever and always. ❤️
`;


/* =====================================================
   FLOATING FLOWERS
===================================================== */

const flowers = [
    "🌸",
    "🌷",
    "🌺",
    "🌹",
    "🌼",
    "💮",
    "🌻"
];


function createFlower() {

    const flower =
        document.createElement("div");

    flower.classList.add("flower");

    flower.textContent =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        (18 + Math.random() * 22) + "px";

    flower.style.animationDuration =
        (6 + Math.random() * 7) + "s";

    flower.style.animationDelay =
        (Math.random() * 1) + "s";

    flowerContainer.appendChild(flower);


    setTimeout(() => {

        flower.remove();

    }, 15000);
}


/*
   Start flowers immediately.
*/

for (let i = 0; i < 12; i++) {

    setTimeout(
        createFlower,
        i * 250
    );

}


/*
   Continue creating flowers.
*/

setInterval(
    createFlower,
    650
);


/* =====================================================
   OPEN ME
===================================================== */

giftButton.addEventListener(
    "click",
    function () {

        /*
           Fade out the welcome screen.
        */

        welcomeScreen.classList.add("hide");


        /*
           Show the surprise screen
           after the fade begins.
        */

        setTimeout(
            function () {

                surpriseScreen.classList.add("show");

            },
            500
        );

    }
);


/* =====================================================
   CHOICES
===================================================== */

/*
   IMPORTANT:

   The choices intentionally do NOTHING.

   Chocolate
   Flowers
   Foods
   Date

   They cannot trigger alerts,
   popups, or navigation.
*/

const choices =
    document.querySelectorAll(".choice");


choices.forEach(
    function (choice) {

        choice.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                /*
                   Nothing happens.
                */

            }
        );

    }
);


/* =====================================================
   HER PHOTO
===================================================== */

herPhotoButton.addEventListener(
    "click",
    function () {

        photoMessage.classList.add("show");

    }
);


/* =====================================================
   CLOSE PHOTO MESSAGE
===================================================== */

closePhotoMessage.addEventListener(
    "click",
    function () {

        photoMessage.classList.remove("show");

    }
);


/*
   Allow tapping outside the popup
   to close it.
*/

photoMessage.addEventListener(
    "click",
    function (event) {

        if (
            event.target === photoMessage
        ) {

            photoMessage.classList.remove("show");

        }

    }
);


/* =====================================================
   ENVELOPE
===================================================== */

let letterOpened = false;


envelopeButton.addEventListener(
    "click",
    function () {

        if (letterOpened) {
            return;
        }

        letterOpened = true;


        /*
           Show the full-screen letter background.
        */

        letterScreen.classList.add("show");


        /*
           Reset the envelope animation.
        */

        envelopeAnimation.classList.remove("hide");

        letter.classList.remove("show");


        /*
           Reset typed message.
        */

        typedMessage.textContent = "";


        /*
           Start music.

           Browsers generally allow this because
           the music is triggered by the user's tap.
        */

        backgroundMusic.volume = 0;

        backgroundMusic.currentTime = 0;

        const playPromise =
            backgroundMusic.play();


        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function (error) {

                    console.log(
                        "Music playback blocked:",
                        error
                    );

                }
            );

        }


        /*
           Fade music in.
        */

        fadeMusicIn();


        /*
           Create petals.
        */

        startLetterPetals();


        /*
           Let the envelope animation
           play before showing the letter.
        */

        setTimeout(
            function () {

                envelopeAnimation.classList.add(
                    "hide"
                );

            },
            2500
        );


        /*
           Show the letter.
        */

        setTimeout(
            function () {

                letter.classList.add("show");

                typeLetter();

            },
            3100
        );

    }
);


/* =====================================================
   MUSIC FADE IN
===================================================== */

function fadeMusicIn() {

    let volume = 0;

    const fade =
        setInterval(
            function () {

                volume += 0.02;

                if (volume >= 0.5) {

                    volume = 0.5;

                    clearInterval(fade);

                }

                backgroundMusic.volume =
                    volume;

            },
            100
        );

}


/* =====================================================
   TYPEWRITER EFFECT
===================================================== */

let typingTimer = null;


function typeLetter() {

    /*
       Stop any previous typing.
    */

    if (typingTimer) {

        clearTimeout(typingTimer);

    }


    let index = 0;


    function typeCharacter() {

        if (
            index >= loveMessage.length
        ) {

            return;

        }


        typedMessage.textContent +=
            loveMessage.charAt(index);


        index++;


        /*
           Different timing makes
           punctuation feel natural.
        */

        let speed = 25;


        if (
            loveMessage.charAt(index - 1) === "."
        ) {

            speed = 250;

        }


        if (
            loveMessage.charAt(index - 1) === ","
        ) {

            speed = 100;

        }


        if (
            loveMessage.charAt(index - 1) === "\n"
        ) {

            speed = 180;

        }


        typingTimer =
            setTimeout(
                typeCharacter,
                speed
            );

    }


    typeCharacter();

}


/* =====================================================
   FALLING PETALS INSIDE LETTER
===================================================== */

const letterFlowerTypes = [
    "🌸",
    "🌹",
    "🌷",
    "🌺"
];


function createLetterPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add(
        "letterPetal"
    );

    petal.textContent =
        letterFlowerTypes[
            Math.floor(
                Math.random() *
                letterFlowerTypes.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (16 + Math.random() * 15) + "px";

    petal.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    letterPetals.appendChild(petal);


    setTimeout(
        function () {

            petal.remove();

        },
        13000
    );

}


let petalInterval = null;


function startLetterPetals() {

    /*
       Create some immediately.
    */

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        setTimeout(
            createLetterPetal,
            i * 250
        );

    }


    /*
       Continue creating petals.
    */

    if (!petalInterval) {

        petalInterval =
            setInterval(
                createLetterPetal,
                800
            );

    }

}


/* =====================================================
   STOP PETALS
===================================================== */

function stopLetterPetals() {

    if (petalInterval) {

        clearInterval(
            petalInterval
        );

        petalInterval = null;

    }


    letterPetals.innerHTML = "";

}


/* =====================================================
   CLOSE LETTER
===================================================== */

closeLetter.addEventListener(
    "click",
    function () {

        /*
           Hide letter.
        */

        letterScreen.classList.remove(
            "show"
        );


        /*
           Stop music.
        */

        fadeMusicOut();


        /*
           Stop petals.
        */

        stopLetterPetals();


        /*
           Reset state so the envelope
           can be opened again.
        */

        setTimeout(
            function () {

                letterOpened = false;

                envelopeAnimation.classList.remove(
                    "hide"
                );

                letter.classList.remove(
                    "show"
                );

                typedMessage.textContent = "";

            },
            1000
        );

    }
);


/* =====================================================
   MUSIC FADE OUT
===================================================== */

function fadeMusicOut() {

    let volume =
        backgroundMusic.volume;


    const fade =
        setInterval(
            function () {

                volume -= 0.04;


                if (volume <= 0) {

                    volume = 0;

                    backgroundMusic.pause();

                    backgroundMusic.currentTime = 0;

                    clearInterval(fade);

                }


                backgroundMusic.volume =
                    volume;

            },
            80
        );

}


/* =====================================================
   PREVENT ACCIDENTAL PAGE ZOOM
===================================================== */

document.addEventListener(
    "gesturestart",
    function (event) {

        event.preventDefault();

    }
);


/* =====================================================
   INITIALIZATION
===================================================== */

console.log(
    "❤️ Happy Special Day, Habibi website loaded!"
);