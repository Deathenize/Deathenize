const visual = document.getElementById("visual");
const dialogue = document.getElementById("dialogue");
const button = document.getElementById("button");
const background = document.getElementById("bg");

let dialogueBetter = script[0];

const animations = { 
    "shake": [
        { transform: "translateX(0)" },
        { transform: "translateX(15px)" },
        { transform: "translateX(-15px)" },
        { transform: "translateX(15px)" },
        { transform: "translateX(0)" },
    ],
    "shakeChar2": [ 
        { transform: "translateX(0) scaleX(-1)" },
        { transform: "translateX(15px) scaleX(-1)" },
        { transform: "translateX(-15px) scaleX(-1)" },
        { transform: "translateX(15px) scaleX(-1)" },
        { transform: "translateX(0) scaleX(-1)" },
    ],
    "appear": [
        { opacity: 0 },
        { opacity: 1 },
    ],
    "disappear": [
        { opacity: 1 },
        { opacity: 0 },
    ]
};

const timings = {
    "shake": {
        duration: 200,
        iterations: 2,
    },
    "shakeChar2": {
        duration: 200,
        iterations: 2,
    },
    "appear": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    },
    "disappear": {
        duration: 400,
        iterations: 1,
        fill: "forwards",
    }
};

const extensions = { // aint this a mess
    // PNG (the boring ones)
    "IDLE": ".png",
    "SAD": ".png",
    "SAD2": ".png",
    "HAPPY": ".png",
    "HAPPY2": ".png",
    "ANGRY": ".png",
    "PAPERS": ".png",
    "PAPERS1": ".png",
    "CONFUSED": ".png",
    "OWIE": ".png",
    "MAD": ".png",
    "SMUG": ".png",
    "GEARDUP": ".png",
    "GEARDUPTIRED": ".png",
    "GEARDUPSCARED": ".png",
    "GEARDUPBIRD": ".png",
    "GEARDUPBIRD2": ".png",
    "LAUGH1": ".png",
    "SHOCK": ".png",
    "SHOCK2": ".png",
    "TIEDUP": ".png",
    "TIEDUP2": ".png",
    "BOTTLE": ".png",
    "BOTTLE2": ".png",
    "BOTTLE3": ".png",
    "CARDS": ".png",
    "NONE": ".png",
    "HUNGOVER": ".png",
    "HUNGOVER1": ".png",
    "HUNGOVER2": ".png",
    "HUNGOVER3": ".png",
    "WAH": ".png",
    "WAH1": ".png",
    "WAH2": ".png",
    "WAH3": ".png",
    "WAH4": ".png",
    "SWAG": ".png",
    "SWAGPAPERS": ".png",
    "SWAGWHAT": ".png",
    "SWAGCONFUSED": ".png",
    "SWAGANGRY": ".png",
    "SWAGSAD": ".png",
    "HATOFF": ".png",
    "HATOFFSWAGLESS": ".png",
    "SCAREDpng": ".png",
    "GRUMPYpng": ".png",
    "CRYpng": ".png",
    // GIF (the fun ones)
    "SLEEP": ".gif",
    "SCARED": ".gif",
    "LAUGH": ".gif",
    "CRY": ".gif",
    "FURIOUS": ".gif",
    "GRUMPY": ".gif"
};

// most of this was written by my friend

function setChar(charName, dialogue) {
    if (dialogue[charName]) {
        let char = document.getElementById(charName);
        let imageSrc = `../CharacterSprites/${dialogue[charName]["name"]}${dialogue[charName]["emotion"]}${extensions[dialogue[charName]["emotion"]]}`;
        let animationName = dialogue[charName]["animation"];
        char.setAttribute("src", imageSrc);
        if (animationName) {
            char.animate(animations[animationName], timings[animationName]);
        }
    }
};

background.src= `../backgrounds/${dialogueBetter["bg"]}.png`;
dialogue.innerHTML = `<span class ="${dialogueBetter[dialogueBetter["talker"]]["name"]}">${dialogueBetter[dialogueBetter["talker"]]["name"]}:</span><p>${dialogueBetter["say"]}</p>`;

setChar("char1", dialogueBetter);
setChar("char2", dialogueBetter);

let dialogueNum = 0;

function talkie() {
    dialogueNum++;
    
    let dialogueBetter = script[dialogueNum];

    if (dialogueNum == script.length){
        window.location.href = exit;
    };
    
    setChar("char1", dialogueBetter);
    setChar("char2", dialogueBetter);

    background.src= `../backgrounds/${dialogueBetter["bg"]}.png`;
    dialogue.innerHTML = `<span class ="${dialogueBetter[dialogueBetter["talker"]]["name"]}">${dialogueBetter[dialogueBetter["talker"]]["name"]}:</span><p>${dialogueBetter["say"]}</p>`;
    console.log(dialogueNum); // fuck you im not removing console log
};

document.addEventListener("keydown", (event) => {
    if (["Enter", "ArrowRight", " "].includes(event.key)) {
        talkie();
    }
});

button.addEventListener("click", async () => {
    talkie();
});