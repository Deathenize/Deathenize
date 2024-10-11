const script = [
    // Scene 1: Intro message with timestamp
    {
        "bg": "blackScreen",
        "char1": {
            "emotion": "IDLE",
            "name": ""
        },
        "talker": "char1",
        "say": "October 24th, 09:26 ✦",
        "choices": []
    },
    
    // Scene 2: Artemiy wakes up and asks for a choice
    {
        "bg": "house",
        "char1": {
            "emotion": "STAND",
            "animation": "appear",
            "name": "Deathenize",
            "src": "../CharacterSprites/DeathenizeSTAND.png"
        },
        "talker": "char1",
        "say": "YOU FINALLLY FINISHED CODING YOUR SYSTEM",
        "choices": [
           
        ]
    },
    
    // Scene 3: Artemiy wakes up and asks for a choice
    {
        "bg": "house",
        "char1": {
            "emotion": "UNSURE",
            "animation": "",
            "name": "Deathenize",
            "src": "../CharacterSprites/DeathenizeSTAND.png"
        },
        "talker": "char1",
        "say": "Arent you glad",
        "choices": [
           
        ]
    },
    // Scene 4: Artemiy wakes up and asks for a choice
    {
        "bg": "house",
        "char1": {
            "emotion": "CUNNING",
            "animation": "",
            "name": "Deathenize",
            "src": "../CharacterSprites/DeathenizeSTAND.png"
        },
        "talker": "char1",
        "say": "It took a huge while you know",
        "choices": [
           
        ]
    },
    // Scene 5: Artemiy wakes up and asks for a choice
    {
        "bg": "house",
        "char1": {
            "emotion": "YIPEEE",
            "animation": "wobble",
            "name": "Deathenize",
            "src": "../CharacterSprites/DeathenizeSTAND.png"
        },
        "talker": "char1",
        "say": "BUT you finnaly did it with script and html, and css",
        "choices": [
           
        ]
    },
    // Scene 6: Artemiy wakes up and asks for a choice
    {
        "bg": "house",
        "char1": {
            "emotion": "UNSURE",
            "animation": "",
            "name": "Deathenize",
            "src": "../CharacterSprites/DeathenizeSTAND.png"
        },
        "talker": "char1",
        "say": "Now all the  a test",
        "choices": [
           
        ]
    },
    // Scene 7: Artemiy wakes up and asks for a choice
    {
        "bg": "house",
        "char1": {
            "emotion": "UNSURE",
            "animation": "",
            "name": "Deathenize",
            "src": "../CharacterSprites/DeathenizeSTAND.png"
        },
        "talker": "char1",
        "say": "i got help ",
        "choices": [
           
        ]
    },
    // Scene 8: Artemiy wakes up and asks for a choice
    {
        "bg": "house",
        "char1": {
            "emotion": "CUNNING",
            "animation": "",
            "name": "Deathenize",
            "src": "../CharacterSprites/DeathenizeSTAND.png"
        },
        "talker": "char1",
        "say": "for example",
        "choices": [
           
        ]
    },
    // Scene 8: Artemiy wakes up and asks for a choice
    {
        "bg": "muerANGY",
        "char1": {
            "emotion": "NONE",
            "animation": "",
            "name": "Artemiy",
            "src": ""
        },
        "talker": "char1",
        "say": "you see a grumpy old man",
        "choices": [
           
        ]
    },
   
   
       // Scene 10: Artemiy wakes up and asks for a choice

    {
       "bg": "muerANGY",
       "char1": {
        "emotion": "NONE",
        "animation": "",
        "name": "Artemiy",
        "src": ""
    },
        "talker": "char1",
        "say": "Should we give him toys or flowers",
        "choices": [
            { text: "Give him flowers", next: 10 }, //leads to scene 11
            { text: "Give him toys to play with", next: 11 } //leads to scene 12
        ]
    },
    
    
       // Scene 11: Artemiy wakes up and asks for a choice

    {
        "bg": "../backgrounds/muerBLOOM.png",
        "char1": {
            "emotion": "NONE",
            "animation": "",
            "name": "Artemiy",
            "src": ""
        },
        "talker": "char1",
        "say": "Youu gave him flowersss",
        "choices": [
          
        ]
    },
    
    
     

    
    

    // Scene 9: Thank you message
    {
        "bg": "blackScreen",
        "char1": {
            "emotion": "IDLE",
            "name": "Artemiy",
            "src": "path/to/ArtemiySprite.png"
        },
        "talker": "char1",
        "say": "Thank you for reading!",
        "choices": []
    },
];

// Function to simulate typing effect
function typeWriter(text, speed, callback) {
    let index = 0;
    const dialogueBox = document.getElementById("dialogue");
    
    dialogueBox.innerHTML = "";  

    function type() {
        if (index < text.length) {
            dialogueBox.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            if (callback) callback();
        }
    }

    type();  
}

// Manage background and character updates
function updateVisuals(dialogue) {
    document.getElementById("bg").src = dialogue.bg;

    if (dialogue.char1) {
        const char1Element = document.getElementById("char1");
        char1Element.src = dialogue.char1.src;
        char1Element.style.display = 'block'; // Show char1
        char1Element.style.opacity = 1; // Make char1 visible
    }

    if (dialogue.char2) {
        const char2Element = document.getElementById("char2");
        char2Element.src = dialogue.char2.src;
        char2Element.style.display = 'block';
        char2Element.style.opacity = 1; // Ensure it's visible
        char2Element.style.right = "0"; // Place it on the right side
    } else {
        document.getElementById("char2").style.display = 'none'; // Hide char2 if not used
    }
    
}



let currentDialogue = 0;
const typingSpeed = 10;
function showDialogue(index) {
    const dialogue = script[index];  // Get the dialogue at the current index
    if (dialogue) {
        updateVisuals(dialogue);  // This function handles char1 and char2 display

        const characterNameElement = document.getElementById("characterName");
        
        // Determine which character is talking (either char1 or char2)
        if (dialogue.talker === "char1") {
            characterNameElement.innerText = dialogue.char1.name;
            characterNameElement.className = dialogue.char1.name; // Apply character-specific styling
        } else if (dialogue.talker === "char2" && dialogue.char2) {
            characterNameElement.innerText = dialogue.char2.name;
            characterNameElement.className = dialogue.char2.name; // Apply character-specific styling
        }

        const dialogueBox = document.getElementById("dialogue");
        dialogueBox.innerHTML = "";  // Clear the dialogue box before typing

        // Type the dialogue and show choices after it is done
        setTimeout(() => {
            typeWriter(dialogue.say, typingSpeed, function() {
                displayChoices(dialogue.choices);
            });
        }, 100);
    }
}



// Function to display choices
function displayChoices(choices) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    if (choices.length > 0) {
        choices.forEach((choice) => {
            const choiceButton = document.createElement("button");
            choiceButton.innerText = choice.text;
            choiceButton.addEventListener("click", () => {
                currentDialogue = choice.next; // Set the current dialogue to the chosen next index
                showDialogue(currentDialogue);
            });
            choicesContainer.appendChild(choiceButton);
        });
    } else {
        // Hide choices if there are none and show the "Next" button if desired
        const nextButton = document.getElementById("button");
        nextButton.style.display = "block"; // Show next button
    }
}

// Set up event listener for the "Next" button
document.getElementById("button").addEventListener("click", function() {
    currentDialogue++;
    if (currentDialogue < script.length) {
        showDialogue(currentDialogue);
    } else {
        window.location.href = "../../index.html"; // Redirect to main page
    }
});

// Initialize the first dialogue
showDialogue(currentDialogue);
