function loveBurst(button) {
  const container = document.getElementById("burst-container");

  const rect = button.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const hearts = ["♡", "♥", "♡", "♥", "✦"];

  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("div");

    heart.classList.add("burst-heart");

    heart.innerHTML =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = centerX + "px";
    heart.style.top = centerY + "px";

    const angle = (Math.PI * 2 * i) / 14;
    const distance = 45 + Math.random() * 70;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");

    heart.style.setProperty(
      "--rotation",
      Math.random() * 90 - 45 + "deg"
    );

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1100);
  }
}


function showMessage() {
  const card = document.querySelector(".card");
  const section = document.getElementById("messageSection");

  if (!card || !section) return;

  // Page 1 disappears
  card.classList.add("hide-card");

  // Page 2 appears
  setTimeout(() => {
    card.style.display = "none";
    section.classList.add("show");
  }, 600);
}
function chooseYes() {
  const button = event.currentTarget;

  const page2 = document.getElementById("messageSection");
  const loveMenu = document.getElementById("loveMenuSection");

  if (!page2 || !loveMenu) return;

  loveBurst(button);

  setTimeout(() => {

    page2.classList.remove("show");

    setTimeout(() => {
      loveMenu.classList.add("show");
    }, 600);

  }, 450);
}
function chooseNo() {
  const button = event.currentTarget;
  const page2 = document.getElementById("messageSection");
  const page3 = document.getElementById("noReactionSection");

  loveBurst(button);

  setTimeout(() => {

    page2.classList.remove("show");

    setTimeout(() => {
      page3.classList.add("show");
    }, 350);

  }, 450);
}
function tryAgain() {
  const page2 = document.getElementById("messageSection");
  const page3 = document.getElementById("noReactionSection");

  if (!page2 || !page3) return;

  // Page 3 disappears
  page3.classList.remove("show");

  // Page 2 returns smoothly
  setTimeout(() => {
    page2.classList.add("show");
  }, 600);
}
/* ---------------- PLAYLIST PLAYER ---------------- */

const songs = [
  new Audio("Kaafi Hai Na.mp3"),
  new Audio("Itni Si Baat Hain Azhar 320 Kbps.mp3"),
  new Audio("iris song 3.mp3")
];

let currentSong = null;


/* PLAY / PAUSE */

function toggleSong(index) {

  const song = songs[index];
  const buttons = document.querySelectorAll(".play-btn");

  // If another song is playing
  if (currentSong !== null && currentSong !== index) {

    songs[currentSong].pause();

    buttons[currentSong].textContent = "▶";

  }

  // Pause current song
  if (!song.paused) {

    song.pause();

    buttons[index].textContent = "▶";

    return;
  }

  // Play
  song.play();

  currentSong = index;

  buttons[index].textContent = "Ⅱ";
}


/* UPDATE PROGRESS */

songs.forEach((song, index) => {

  song.addEventListener("timeupdate", () => {

    if (!song.duration) return;

    const progress =
      (song.currentTime / song.duration) * 100;

    const bar =
      document.getElementById("progress-" + index);

    const current =
      document.getElementById("current-" + index);

    if (bar) {
      bar.value = progress;
    }

    if (current) {
      current.textContent =
        formatTime(song.currentTime);
    }

  });


  /* LOAD DURATION */

  song.addEventListener("loadedmetadata", () => {

    const duration =
      document.getElementById("duration-" + index);

    if (duration) {
      duration.textContent =
        formatTime(song.duration);
    }

  });


  /* SONG ENDED */

  song.addEventListener("ended", () => {

    const button =
      document.querySelectorAll(".play-btn")[index];

    button.textContent = "▶";

    const bar =
      document.getElementById("progress-" + index);

    if (bar) {
      bar.value = 0;
    }

    currentSong = null;

  });

});


/* TIME FORMAT */

function formatTime(seconds) {

  if (!isFinite(seconds)) {
    return "0:00";
  }

  const minutes =
    Math.floor(seconds / 60);

  const secs =
    Math.floor(seconds % 60);

  return minutes + ":" +
    (secs < 10 ? "0" : "") +
    secs;
}


/* SEEK */

function seekSong(index, value) {

  const song = songs[index];

  if (!song.duration) return;

  song.currentTime =
    (value / 100) * song.duration;
}


/* OPEN PLAYLIST */

function openPlaylist() {

  const menu =
    document.getElementById("loveMenuSection");

  const playlist =
    document.getElementById("playlistSection");

  if (!menu || !playlist) return;

  menu.classList.remove("show");

  setTimeout(() => {
    playlist.classList.add("show");
  }, 600);
}


/* BACK TO MENU */

function backToMenu() {

  const menu =
    document.getElementById("loveMenuSection");

  const playlist =
    document.getElementById("playlistSection");

  // Stop music
  songs.forEach(song => song.pause());

  currentSong = null;

  playlist.classList.remove("show");

  setTimeout(() => {
    menu.classList.add("show");
  }, 600);
}
function openReasons() {

  const menu = document.getElementById("loveMenuSection");
  const reasons = document.getElementById("reasonsSection");

  if (!menu || !reasons) return;

  menu.classList.remove("show");

  setTimeout(() => {
    reasons.classList.add("show");
  }, 600);
}


function backToReasonsMenu() {

  const menu = document.getElementById("loveMenuSection");
  const reasons = document.getElementById("reasonsSection");

  if (!menu || !reasons) return;

  reasons.classList.remove("show");

  setTimeout(() => {
    menu.classList.add("show");
  }, 600);
}
/* ---------------- FINAL MESSAGE ---------------- */

/* ---------------- FINAL MESSAGE ---------------- */

function openFinalMessage() {

  const menu = document.getElementById("loveMenuSection");
  const message = document.getElementById("finalMessageSection");

  if (!menu || !message) return;

  // Menu fades out
  menu.classList.remove("show");

  // Final message fades in
  setTimeout(() => {
    message.classList.add("show");
  }, 600);
}
/* =========================================================
   CINEMATIC FINAL FLOWER ANIMATION
   ========================================================= */

/* =========================================================
   CINEMATIC FINAL FLOWER ANIMATION
   ========================================================= */

function startCinematicFinal(button) {

  const oldMessage =
    document.getElementById("finalMessageSection");

  const cinematic =
    document.getElementById("cinematicFinalSection");

  const flowerContainer =
    document.getElementById("flowerSpiral");

  const lastMessage =
    document.getElementById("lastMessage");

  const signature =
    document.getElementById("signature");

  if (!cinematic || !flowerContainer || !lastMessage || !signature) {
    return;
  }

  /* Remove previous page */

  if (oldMessage) {
    oldMessage.classList.remove("show");
  }

  /* Small heart burst */

  loveBurst(button);

  /* Start cinematic screen */

  setTimeout(() => {

    cinematic.classList.add("active");

    flowerContainer.innerHTML = "";

    cinematic.classList.remove("flash");
    cinematic.classList.remove("card-visible");
    cinematic.classList.remove("signature-visible");

    lastMessage.textContent = "";
    lastMessage.classList.remove("typing");

    signature.classList.remove("signature-show");

    const signatureText =
      document.getElementById("signatureText");

    const signatureName =
      document.getElementById("signatureName");

    if (signatureText) {
      signatureText.textContent = "";
    }

    if (signatureName) {
      signatureName.textContent = "";
    }


    /* =====================================================
       CREATE FLOWERS
       ===================================================== */

    const flowers = [
      "✿",
      "❀",
      "✽",
      "❁",
      "✾",
      "❋"
    ];

    const totalFlowers = 120;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const maxRadius =
      Math.sqrt(
        screenWidth * screenWidth +
        screenHeight * screenHeight
      ) / 2;


    for (let i = 0; i < totalFlowers; i++) {

      const flower =
        document.createElement("div");

      flower.classList.add("spiral-flower");

      /* Random flower */

      flower.textContent =
        flowers[
          Math.floor(
            Math.random() * flowers.length
          )
        ];


      /* =================================================
         SPIRAL MATHEMATICS
         ================================================= */

      const angle =
        i * 0.48;

      const radius =
        5 + (i / totalFlowers) * maxRadius;


      const endX =
        Math.cos(angle) * radius;

      const endY =
        Math.sin(angle) * radius;


      /* Start close to center */

      const startX =
        (Math.random() - 0.5) * 20;

      const startY =
        (Math.random() - 0.5) * 20;


      /* CSS variables */

      flower.style.setProperty(
        "--start-x",
        startX + "px"
      );

      flower.style.setProperty(
        "--start-y",
        startY + "px"
      );

      flower.style.setProperty(
        "--end-x",
        endX + "px"
      );

      flower.style.setProperty(
        "--end-y",
        endY + "px"
      );

      flower.style.setProperty(
        "--rotation",
        (Math.random() * 360 - 180) + "deg"
      );

      flower.style.setProperty(
        "--flower-size",
        (12 + Math.random() * 17) + "px"
      );

      flower.style.setProperty(
        "--delay",
        (i * 0.018) + "s"
      );

      flower.style.setProperty(
        "--duration",
        (2.8 + Math.random() * 1.1) + "s"
      );


      flowerContainer.appendChild(flower);
    }


    /* =====================================================
       FLOWERS FINISH
       ===================================================== */

    setTimeout(() => {

      cinematic.classList.add("flash");

    }, 4300);


    /* =====================================================
       BLUE CARD APPEARS
       ===================================================== */

    setTimeout(() => {

      cinematic.classList.add("card-visible");

    }, 5600);


    /* =====================================================
       START TYPEWRITER
       ===================================================== */

    setTimeout(() => {

      startFinalTyping();
 }, 6800);


  }, 500);
}


/* =========================================================
   FINAL TYPEWRITER
   ========================================================= */

function startFinalTyping() {

  const message =
    document.getElementById("lastMessage");

  const signature =
    document.getElementById("signature");

  const signatureText =
    document.getElementById("signatureText");

  const signatureName =
    document.getElementById("signatureName");


  if (
    !message ||
    !signature ||
    !signatureText ||
    !signatureName
  ) {
    return;
  }


  /* -------------------------------------------------------
     RESET EVERYTHING
     ------------------------------------------------------- */

  message.textContent = "";

  signatureText.textContent = "";
  signatureName.textContent = "";

  signature.classList.remove("signature-show");

  message.classList.add("typing");


  /* -------------------------------------------------------
     MAIN MESSAGE
     ------------------------------------------------------- */

  const text =
    "Thats all i want you to know.";

  let i = 0;

  const typingSpeed = 115;


  function typeMessage() {

    if (i < text.length) {

      message.textContent +=
        text.charAt(i);

      i++;

      setTimeout(
        typeMessage,
        typingSpeed
      );

    } else {

      message.classList.remove("typing");


      /* ---------------------------------------------------
         SIGNATURE STARTS
         --------------------------------------------------- */

      setTimeout(() => {

        signature.classList.add(
          "signature-show"
        );


        const signatureLine =
          "- Urs always,";

        let j = 0;


        function typeSignature() {

          if (j < signatureLine.length) {

            signatureText.textContent +=
              signatureLine.charAt(j);

            j++;

            setTimeout(
              typeSignature,
              120
            );

          } else {

            /* ---------------------------------------------
               J. appears after "me always,"
               --------------------------------------------- */

            setTimeout(() => {

              let k = 0;

              const name =
                "J.";

              function typeName() {

                if (k < name.length) {

                  signatureName.textContent +=
                    name.charAt(k);

                  k++;

                  setTimeout(
                    typeName,
                    180
                  );

                }

              }

              typeName();

            }, 400);

          }

        }

        typeSignature();

      }, 900);

    }

  }


  typeMessage();
}
/* =========================================================
   SECRET LOVE LOCK
   ========================================================= */

function openSecretLock() {

  const menu =
    document.getElementById("loveMenuSection");

  const lock =
    document.getElementById("secretLockSection");

  const input =
    document.getElementById("secretCode");

  const wrong =
    document.getElementById("wrongCode");

  if (!menu || !lock) return;

  menu.classList.remove("show");

  if (input) {
    input.value = "";
  }

  if (wrong) {
    wrong.classList.remove("show");
  }

  setTimeout(() => {

    lock.classList.add("show");

    setTimeout(() => {
      if (input) input.focus();
    }, 500);

  }, 600);
}

/* =========================================================
   SECRET LOVE GAME
   ========================================================= */

let selectedLuckyOption = null;
let wheelRotation = 0;

const luckyOptions = [
  "Go on a long drive",
  "Take me to haunted place",
  "Have a sunset date ",
  "Teach each other something new",
  "Eat our favourite food ",
  "Go somewhere new ",
  "Have a long hug ",
  "Have a cute photograph session",
  "Go on a little adventure",
  "Js spend whole time sitting quietly"
];


/* ---------------------------------------------------------
   CHECK SECRET CODE
   --------------------------------------------------------- */

function checkSecretCode() {

  const input =
    document.getElementById("secretCode");

  const lock =
    document.getElementById("secretLockSection");

  const game =
    document.getElementById("secretGameSection");

  const wrong =
    document.getElementById("wrongCode");

  if (!input || !lock || !game) return;

  const enteredCode =
    input.value.trim().toLowerCase();


  /* CORRECT CODE */

  if (enteredCode === "🤍") {

    if (wrong) {
      wrong.classList.remove("show");
    }

    loveBurst(
      document.querySelector(".unlock-btn")
    );

    lock.classList.remove("show");

    setTimeout(() => {

      game.classList.add("show");

      showGameStep("wishStep");

      resetSecretGame();

    }, 600);

  }


  /* WRONG CODE */

  else {

    if (wrong) {
      wrong.classList.add("show");
    }

    input.classList.add("wrong");

    setTimeout(() => {

      input.classList.remove("wrong");

    }, 450);

  }

}


/* =========================================================
   RESET GAME
   ========================================================= */

function resetSecretGame() {

  const wishInput =
    document.getElementById("wishInput");

  const songInput =
    document.getElementById("ourSongInput");

  const wishCount =
    document.getElementById("wishCount");

  const wheel =
    document.getElementById("luckyWheel");

  const result =
    document.getElementById("wheelResult");

  const resultText =
    document.getElementById("wheelResultText");

  const spinButton =
    document.getElementById("spinWheelBtn");

  const nextButton =
    document.getElementById("wheelNextBtn");

  const confirmation =
    document.getElementById("songConfirmation");


  selectedLuckyOption = null;

  wheelRotation = 0;


  if (wishInput) {
    wishInput.value = "";
  }

  if (songInput) {
    songInput.value = "";
  }

  if (wishCount) {
    wishCount.textContent = "0";
  }

  if (wheel) {
    wheel.style.transition = "none";
    wheel.style.transform = "rotate(0deg)";

    /* Force browser to apply reset */
    void wheel.offsetWidth;

    wheel.style.transition =
      "transform 4.5s cubic-bezier(.12,.75,.15,1)";
  }

  if (result) {
    result.classList.remove("show");
  }

  if (resultText) {
    resultText.textContent = "";
  }

  if (spinButton) {
    spinButton.classList.remove("spinning");
    spinButton.disabled = false;
  }

  if (nextButton) {
    nextButton.classList.remove("show");
  }

  if (confirmation) {
    confirmation.classList.remove("show");
  }

}
/* =========================================================
   GAME STEP CONTROLLER
   ========================================================= */

function showGameStep(stepId) {

  const steps = [
    "wishStep",
    "wheelStep",
    "songStep",
    "gameSummaryStep"
  ];

  steps.forEach(id => {

    const step =
      document.getElementById(id);

    if (!step) return;

    step.classList.remove("game-active");

  });


  const selected =
    document.getElementById(stepId);

  if (selected) {

    selected.classList.add("game-active");

  }

}


/* =========================================================
   WISH CHARACTER COUNT
   ========================================================= */

document.addEventListener("input", function(event) {

  if (event.target.id !== "wishInput") return;

  const count =
    document.getElementById("wishCount");

  if (!count) return;

  count.textContent =
    event.target.value.length;

});


/* =========================================================
   STEP 1 → STEP 2
   ========================================================= */

function goToLuckyWheel() {

  const wishInput =
    document.getElementById("wishInput");

  const hint =
    document.getElementById("wishHint");

  if (!wishInput) return;


  const wish =
    wishInput.value.trim();


  /* Don't allow empty wish */

  if (!wish) {

    if (hint) {

      hint.textContent =
        "you have to write your little wish first ♡";

      hint.style.color = "#b47788";

      setTimeout(() => {

        hint.textContent =
          "take your time... this one is just for us ♡";

        hint.style.color = "";

      }, 2200);

    }

    wishInput.focus();

    return;

  }


  /* Save wish */

  localStorage.setItem(
    "anixWish",
    wish
  );


  showGameStep("wheelStep");

}


/* =========================================================
   CREATE WHEEL LABELS
   ========================================================= */

function createWheelLabels() {

  const wheel =
    document.getElementById("luckyWheel");

  if (!wheel) return;


  wheel
    .querySelectorAll(".wheel-label")
    .forEach(label => label.remove());


  luckyOptions.forEach((option, index) => {

    const label =
      document.createElement("div");

    label.className = "wheel-label";

    const angle =
      index * 36 + 18;

    label.style.setProperty(
      "--angle",
      angle + "deg"
    );

    label.textContent =
      option
        .replace(" ♡", "")
        .replace(" 🎬", "")
        .replace(" 🌅", "")
        .replace(" 📸", "")
        .replace(" 🍜", "")
        .replace(" ✨", "")
        .replace(" 🌙", "")
        .replace(" 💌", "")
        .replace(" 🫶", "");

    wheel.appendChild(label);

  });

}


/* Create labels immediately */

createWheelLabels();


/* =========================================================
   SPIN LUCKY WHEEL
   ========================================================= */

function spinLuckyWheel() {

  const wheel =
    document.getElementById("luckyWheel");

  const button =
    document.getElementById("spinWheelBtn");

  const result =
    document.getElementById("wheelResult");

  const resultText =
    document.getElementById("wheelResultText");

  const nextButton =
    document.getElementById("wheelNextBtn");


  if (
    !wheel ||
    !button ||
    !result ||
    !resultText ||
    !nextButton
  ) {
    return;
  }


  /* Prevent second spin */

  if (button.classList.contains("spinning")) {
    return;
  }


  button.classList.add("spinning");

  button.textContent = "Spinning...";


  result.classList.remove("show");

  nextButton.classList.remove("show");


  /* Random option */
  const selectedIndex =
    Math.floor(
      Math.random() * luckyOptions.length
    );
  selectedLuckyOption =
    luckyOptions[selectedIndex];
  /*
    Each section is 36 degrees.
    Pointer is at top.
  */

  const optionCenter =
    selectedIndex * 36 + 18;


  /*
    Rotate enough full rounds
    + align selected section under pointer.
  */

  const extraSpins =
    6 + Math.floor(Math.random() * 3);


  const targetRotation =
    extraSpins * 360 +
    (360 - optionCenter);


  wheelRotation += targetRotation;


  wheel.style.transform =
    `rotate(${wheelRotation}deg)`;


  /* Wait for animation */

  setTimeout(() => {

    resultText.textContent =
      selectedLuckyOption;


    result.classList.add("show");


    button.classList.remove("spinning");

    button.textContent =
      "Spin again ♡";


    nextButton.classList.add("show");


    /* Tiny celebration */

    createGameHearts();

  }, 4700);

}


/* =========================================================
   STEP 2 → STEP 3
   ========================================================= */

function goToSongStep() {

  if (!selectedLuckyOption) return;

  showGameStep("songStep");

}


/* =========================================================
   SAVE SONG
   ========================================================= */

function saveOurSong() {

  const input =
    document.getElementById("ourSongInput");

  const confirmation =
    document.getElementById("songConfirmation");


  if (!input) return;


  const song =
    input.value.trim();


  if (!song) {

    input.focus();

    input.style.borderColor =
      "#d99aaa";

    setTimeout(() => {

      input.style.borderColor = "";

    }, 700);

    return;

  }


  /* Save */

  localStorage.setItem(
    "anixSong",
    song
  );


  if (confirmation) {

    confirmation.classList.add("show");

  }


  /* Fill final summary */

  const summaryWish =
    document.getElementById("summaryWish");

  const summaryWheel =
    document.getElementById("summaryWheel");

  const summarySong =
    document.getElementById("summarySong");


  if (summaryWish) {

    summaryWish.textContent =
      localStorage.getItem("anixWish") || "";

  }
  if (summaryWheel) {
    summaryWheel.textContent =
      selectedLuckyOption || "";
  }
  if (summarySong) {

    summarySong.textContent =
      song;
  }
  /*
    Give the confirmation a moment,
    then show the cute summary.
  */
  setTimeout(() => {
    showGameStep("gameSummaryStep");
  }, 1000);
}

/* =========================================================
   LITTLE HEART CELEBRATION
   ========================================================= */

function createGameHearts() {

  const container =
    document.getElementById("burst-container");

  if (!container) return;


  const centerX =
    window.innerWidth / 2;

  const centerY =
    window.innerHeight / 2;


  for (let i = 0; i < 14; i++) {

    const heart =
      document.createElement("div");

    heart.classList.add("burst-heart");

    heart.innerHTML =
      i % 2 === 0 ? "♡" : "♥";


    heart.style.left =
      centerX + "px";

    heart.style.top =
      centerY + "px";


    const angle =
      (Math.PI * 2 * i) / 14;


    const distance =
      45 + Math.random() * 80;


    heart.style.setProperty(
      "--x",
      Math.cos(angle) * distance + "px"
    );

    heart.style.setProperty(
      "--y",
      Math.sin(angle) * distance + "px"
    );

    heart.style.setProperty(
      "--rotation",
      (Math.random() * 90 - 45) + "deg"
    );


    container.appendChild(heart);


    setTimeout(() => {

      heart.remove();

    }, 1100);

  }

}


/* =========================================================
   BACK TO LOVE MENU
   ========================================================= */

function backFromSecretGame() {

  const menu =
    document.getElementById("loveMenuSection");

  const game =
    document.getElementById("secretGameSection");


  if (!menu || !game) return;


  game.classList.remove("show");


  setTimeout(() => {

    menu.classList.add("show");

  }, 600);

}

/* BACK FROM SECRET CODE LOCK */

function backFromSecretLock() {

  const menu =
    document.getElementById("loveMenuSection");

  const lock =
    document.getElementById("secretLockSection");

  if (!menu || !lock) return;

  lock.classList.remove("show");

  setTimeout(() => {
    menu.classList.add("show");
  }, 600);

}



/* ENTER KEY ALSO UNLOCKS */

document.addEventListener("keydown", function(event) {

  if (event.key !== "Enter") return;

  const lock =
    document.getElementById("secretLockSection");

  if (
    lock &&
    lock.classList.contains("show")
  ) {
    checkSecretCode();
  }

});
/* =========================================================
   CONNECT THE DOTS LOVE PAGE
   ========================================================= */
/* =========================================================
   REEL STYLE DOT MAP
   ========================================================= */

const dotPoints = [

  /* -------------------------------------------------------
     I
     ------------------------------------------------------- */

  { x: 105, y: 105, word: "If",        labelDy: -14 },
  { x: 135, y: 105, word: "you",       labelDy: -14 },

  { x: 105, y: 155, word: "connect",   labelDy: 28 },
  { x: 135, y: 155, word: "these",     labelDy: 28 },

  { x: 105, y: 205, word: "dots",      labelDy: 28 },
  { x: 135, y: 205, word: "slowly",    labelDy: -14 },


  /* -------------------------------------------------------
     L
     ------------------------------------------------------- */

  { x: 190, y: 105, word: "you",       labelDy: -14 },
  { x: 190, y: 155, word: "will",      labelDy: -14 },
  { x: 190, y: 205, word: "know",      labelDy: 28 },

  { x: 235, y: 205, word: "how",       labelDy: -14 },
  { x: 280, y: 205, word: "much",      labelDy: -14 },


  /* -------------------------------------------------------
     O
     ------------------------------------------------------- */

  { x: 355, y: 105, word: "it",        labelDy: -14 },
  { x: 405, y: 105, word: "means",     labelDy: -14 },

  { x: 435, y: 145, word: "to",        labelDy: 28 },
  { x: 435, y: 195, word: "have",      labelDy: 28 },

  { x: 405, y: 235, word: "you",       labelDy: 28 },
  { x: 355, y: 235, word: "in",        labelDy: 28 },

  { x: 325, y: 195, word: "my",        labelDy: 28 },
  { x: 325, y: 145, word: "life",      labelDy: -14 },


  /* -------------------------------------------------------
     V
     ------------------------------------------------------- */

  { x: 485, y: 105, word: "♡",         labelDy: -14 },
  { x: 505, y: 145, word: "",          labelDy: 0 },
  { x: 525, y: 185, word: "",          labelDy: 0 },
  { x: 545, y: 225, word: "",          labelDy: 28 },

  { x: 565, y: 185, word: "",          labelDy: 0 },
  { x: 585, y: 145, word: "",          labelDy: 0 },
  { x: 605, y: 105, word: "",          labelDy: -14 },


  /* -------------------------------------------------------
     SPACE / SECOND LINE
     ------------------------------------------------------- */

  { x: 120, y: 330, word: "I",         labelDy: -14 },

  { x: 175, y: 330, word: "love",      labelDy: 28 },

  { x: 250, y: 330, word: "you",       labelDy: -14 },

  { x: 325, y: 330, word: "♡",         labelDy: 28 }

];
let currentDotIndex = -1;
let isDrawingDots = false;
let dotPointsConnected = [];

function openConnectDots() {

  const menu =
    document.getElementById("loveMenuSection");

  const dots =
    document.getElementById("connectDotsSection");

  if (!menu || !dots) return;

  menu.classList.remove("show");

  setTimeout(() => {

    dots.classList.add("show");

    setTimeout(() => {
      initializeConnectDots();
    }, 250);

  }, 600);
}


function initializeConnectDots() {

  const svg =
    document.getElementById("dotCanvas");

  const line =
    document.getElementById("drawnLine");

  const card =
    document.querySelector(".connect-dots-card");

  const hiddenLove =
    document.getElementById("hiddenLove");

  const hint =
    document.getElementById("connectHint");

  if (!svg || !line) return;

  /* Reset */

  svg.querySelectorAll(".connect-dot, .dot-word")
    .forEach(element => element.remove());

  line.setAttribute("points", "");

  currentDotIndex = -1;
  isDrawingDots = false;
  dotPointsConnected = [];

  if (card) {
    card.classList.remove("completed");
  }

  if (hiddenLove) {
    hiddenLove.classList.remove("show");
  }

  if (hint) {
    hint.textContent = "start from the first dot ♡";
    hint.style.opacity = "1";
  }


  /* Create dots + words */

  dotPoints.forEach((point, index) => {

    const group =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      );

    group.dataset.index = index;


    /* WORD */

    const text =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );

    text.classList.add("dot-word");

    text.setAttribute("x", point.x);
    text.setAttribute(
  "y",
  point.y + (point.labelDy ?? -14)
);

    text.setAttribute("text-anchor", "middle");

    text.textContent = point.word;


    /* DOT */

    const circle =
      document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

    circle.classList.add("connect-dot");

    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
    circle.setAttribute("r", "5");

    circle.dataset.index = index;


    group.appendChild(text);
    group.appendChild(circle);

    svg.appendChild(group);

  });


  addDotInteraction();
}


/* =========================================================
   DOT INTERACTION
   ========================================================= */

function addDotInteraction() {

  const svg =
    document.getElementById("dotCanvas");

  if (!svg) return;


  /* -------------------------------------------------------
     START
     ------------------------------------------------------- */

  svg.onpointerdown = function(event) {

    const point =
      getPointerPosition(event);

    const firstDot =
      getDotAtPosition(point.x, point.y);


    /* Must start from dot 0 */

    if (firstDot !== 0) {

      showDotHint("start from the first dot ♡");

      return;
    }


    isDrawingDots = true;

    currentDotIndex = 0;

    dotPointsConnected = [
      dotPoints[0]
    ];


    updateDrawnLine();

    markDotActive(0);


    event.preventDefault();


    if (svg.setPointerCapture) {

      svg.setPointerCapture(
        event.pointerId
      );

    }

  };


  /* -------------------------------------------------------
     MOVE
     ------------------------------------------------------- */

  svg.onpointermove = function(event) {

    if (!isDrawingDots) return;


    const point =
      getPointerPosition(event);


    const nextIndex =
      currentDotIndex + 1;


    if (
      nextIndex >=
      dotPoints.length
    ) {
      return;
    }


    const nextDot =
      dotPoints[nextIndex];


    const distance =
      Math.hypot(
        point.x - nextDot.x,
        point.y - nextDot.y
      );


    /*
      User must physically move
      onto the next dot.
    */

    if (distance < 20) {

      currentDotIndex =
        nextIndex;


      dotPointsConnected.push(
        nextDot
      );


      markDotActive(
        nextIndex
      );


      updateDrawnLine();


      if (
        currentDotIndex ===
        dotPoints.length - 1
      ) {

        finishConnectDots();

      }

    }


    event.preventDefault();

  };


  /* -------------------------------------------------------
     END
     ------------------------------------------------------- */

  svg.onpointerup = function(event) {

    if (!isDrawingDots) return;


    /*
      If user released before
      reaching the final dot,
      keep the progress but stop
      the current drag.
    */

    isDrawingDots = false;


    if (
      svg.releasePointerCapture &&
      svg.hasPointerCapture &&
      svg.hasPointerCapture(
        event.pointerId
      )
    ) {

      svg.releasePointerCapture(
        event.pointerId
      );

    }

  };


  svg.onpointercancel = function() {

    isDrawingDots = false;

  };

}

function showDotHint(message) {

  const hint =
    document.getElementById(
      "connectHint"
    );

  if (!hint) return;

  hint.textContent = message;

}
/* =========================================================
   POINTER POSITION
   ========================================================= */

function getPointerPosition(event) {

  const svg =
    document.getElementById("dotCanvas");

  const rect =
    svg.getBoundingClientRect();

  const viewBox =
    svg.viewBox.baseVal;

  return {

    x:
      (event.clientX - rect.left)
      * (viewBox.width / rect.width),

    y:
      (event.clientY - rect.top)
      * (viewBox.height / rect.height)

  };
}


/* =========================================================
   FIND DOT
   ========================================================= */

function getDotAtPosition(x, y) {

  for (let i = 0; i < dotPoints.length; i++) {

    const dot =
      dotPoints[i];

    const distance =
      Math.hypot(
        x - dot.x,
        y - dot.y
      );

    if (distance < 22) {
      return i;
    }
  }

  return -1;
}


/* =========================================================
   ACTIVE DOT
   ========================================================= */

function markDotActive(index) {

  const dots =
    document.querySelectorAll(".connect-dot");

  if (dots[index]) {
    dots[index].classList.add("active");
  }
}


/* =========================================================
   DRAW LINE
   ========================================================= */

function updateDrawnLine() {

  const line =
    document.getElementById("drawnLine");

  if (!line) return;

  const points =
    dotPointsConnected
      .map(point =>
        `${point.x},${point.y}`
      )
      .join(" ");

  line.setAttribute(
    "points",
    points
  );
}
/* =========================================================
   FINISHED
   ========================================================= */
function finishConnectDots() {
  isDrawingDots = false;

  const section =
    document.getElementById(
      "connectDotsSection"
    );

  const hint =
    document.getElementById(
      "connectHint"
    );


  if (section) {

    section.classList.add(
      "completed"
    );

  }


  if (hint) {

    hint.textContent =
      "you found what I wanted to tell you ♡";

    setTimeout(() => {

      hint.style.opacity = "0";

    }, 1200);

  }


  createLittleHearts();

}


/* =========================================================
   LITTLE HEARTS
   ========================================================= */

function createLittleHearts() {

  const container =
    document.getElementById("burst-container");

  if (!container) return;

  const card =
    document.querySelector(".connect-dots-card");

  if (!card) return;

  const rect =
    card.getBoundingClientRect();

  const centerX =
    rect.left + rect.width / 2;

  const centerY =
    rect.top + rect.height * 0.72;


  for (let i = 0; i < 10; i++) {

    const heart =
      document.createElement("div");

    heart.classList.add("burst-heart");

    heart.innerHTML =
      i % 2 === 0 ? "♡" : "♥";

    heart.style.left =
      centerX + "px";

    heart.style.top =
      centerY + "px";


    const angle =
      (Math.PI * 2 * i) / 10;

    const distance =
      35 + Math.random() * 55;


    heart.style.setProperty(
      "--x",
      Math.cos(angle) * distance + "px"
    );

    heart.style.setProperty(
      "--y",
      Math.sin(angle) * distance + "px"
    );

    heart.style.setProperty(
      "--rotation",
      (Math.random() * 90 - 45) + "deg"
    );
    container.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 1100);

  }
}

/* =========================================================
   BACK TO LOVE MENU
   ========================================================= */

function backFromConnectDots() {

  const menu =
    document.getElementById("loveMenuSection");

  const dots =
    document.getElementById("connectDotsSection");

  if (!menu || !dots) return;

  dots.classList.remove("show");

  setTimeout(() => {

    menu.classList.add("show");

  }, 600);
}