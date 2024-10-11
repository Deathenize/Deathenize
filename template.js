// Scene : choice
{
    "bg": "house",
    "char1": {
        "emotion": "IDLE",
        "animation": "appear",
        "name": "Artemiy",
        "src": "path/to/ArtemiySprite.png"
    },
    "talker": "char1",
    "say": "What do you want to do?",
    "choices": [
        { text: "Look around", next: 2 }, //leads to scene 3
        { text: "Go back to sleep", next: 3 } //leads to scene 4
    ]
},
  // Scene 5: 1 character talking
  {
    "bg": "house",
    "char1": {
        "emotion": "IDLE",
        "name": "Artemiy",
        "src": "path/to/ArtemiySprite.png"
    },
    "talker": "char1",
    "say": "You decided to ignore it.",
    "choices": []
},
// 2 charachters talking
{
    "bg": "../backgrounds/house.png",
    "char1": {
        "emotion": "IDLE",
        "name": "Artemiy",
        "src": "../CharacterSprites/ArtemiyIDLE.png"
    },
    "char2": {
        "emotion": "CONFUSED",
        "name": "Erik",
        "src": "../CharacterSprites/ErikCONFUSED.png"
    },
    "talker": "char2",
    "say": "In it it says: YOU CODED A VIS SYSTEM, CONGRATULATIONS!",
    "choices": []
},