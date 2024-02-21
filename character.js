// Thanks barrel for helping with the syntax that is JS
document.addEventListener("DOMContentLoaded", function () {
    let textbox = document.getElementById("textbox");

    const texts = {
        Pechi: "Pechi",
        Hilda: "Hilda",
        Valerian: "Valerian",
        Huhner: "HUH?",
        Beatrice: "Beatrice",
        Rav: "Rav",
        Elliot: "Elliot",
        Veri: "Veroni",
        Diph: "Dip",    
        May: "May",    
        Bibi: "Bibi",    
        Mara: "Mara",    
        Diaz: "Diaz",    
        Muertoz: "Muertoz",    
        Sume: "Sume",    
        Cleora: "Cleora",    
        Ori: "Ori",    
        Caramelo: "Caramelo",    
        Bermuda: "Bermuda",    
        Heizenga: "Heizenga",  
        Boroque: "Boroque",    
        Zal: "Zal",    
        Fish: "Fish",    
        NoChar: "???",
    };

    document.querySelectorAll('[id]').forEach((element) => {
        element.addEventListener("mouseenter", (event) => {
            const id = element.id;
            textbox.innerHTML = texts[id] || "";
        });

        element.addEventListener("mouseleave", (event) => {
            textbox.innerHTML = "";
        });
    });
});

function checkPassword() {
    // Numbercode
    var code = document.getElementById("codeInput").value;

    var codeNumber = parseInt(code);

    switch (codeNumber) {
        case 0001:
            window.location.href = "https://deathenize.github.io/Deathenize/1-ch.html";
            break;
        case 0002:
            window.location.href = "https://deathenize.github.io/Deathenize/2-ch.html";
            break;
        case 0003:
            window.location.href = "https://deathenize.github.io/Deathenize/3-ch.html";
            break;
        case 0004:
            window.location.href = "https://deathenize.github.io/Deathenize/4-ch.html";
            break;
        case 0005:
            window.location.href = "https://deathenize.github.io/Deathenize/5-ch.html";
            break;
        case 0006:
            window.location.href = "https://deathenize.github.io/Deathenize/6-ch.html";
            break;
        case 0021:
            window.location.href = "https://deathenize.github.io/Deathenize/21-ch.html";
            break;
        case 0023:
            window.location.href = "https://deathenize.github.io/Deathenize/23-ch.html";
            break;
        case 0025:
            window.location.href = "https://deathenize.github.io/Deathenize/25-ch.html";
            break;
        case 0026:
            window.location.href = "https://deathenize.github.io/Deathenize/26-ch.html";
            break;
        case 0041:
            window.location.href = "https://deathenize.github.io/Deathenize/41-ch.html";
            break;
        case 0042:
            window.location.href = "https://deathenize.github.io/Deathenize/42-ch.html";
            break;
        case 0043:
            window.location.href = "https://deathenize.github.io/Deathenize/43-ch.html";
            break;
        case 0044:
            window.location.href = "https://deathenize.github.io/Deathenize/44-ch.html";
            break;
        case 0047:
            window.location.href = "https://deathenize.github.io/Deathenize/47-ch.html";
            break;
        case 0051:
            window.location.href = "https://deathenize.github.io/Deathenize/51-ch.html";
            break;
        case 0056:
            window.location.href = "https://deathenize.github.io/Deathenize/56-ch.html";
            break;
        case 0064:
            window.location.href = "https://deathenize.github.io/Deathenize/64-ch.html";
            break;
        case 0081:
            window.location.href = "https://deathenize.github.io/Deathenize/81-ch.html";
            break;
        case 0099:
            window.location.href = "https://deathenize.github.io/Deathenize/99-ch.html";
            break;
        case ▲★▲:
            window.location.href = "https://deathenize.github.io/Deathenize/99-ch.html";
            break;

        default:
            alert("OOOPS = The characterLock is not available/Not yet been made");
    }
}