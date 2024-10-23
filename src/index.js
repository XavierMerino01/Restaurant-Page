import { about } from "./about";
import "./styles.css";


let pageState = "Home";  


function createElement(type, text, className = '') {
    const el = document.createElement(type);
    if (text) el.textContent = text;
    if (className) el.classList.add(className);
    return el;
}


function clearContent() {
    const content = document.querySelector("#content");
    content.innerHTML = ''; 
}


function createHomeElements() {
    return [
        { type: "h3", text: "Horaris" },
        { type: "p", text: "Dilluns Festiu per Allah" },
        { type: "p", text: "Dimarts a Divendres 13 - 16" },
        { type: "p", text: "Dissabte i Diumenge 12 - 23" }
    ];
}


function displayHome() {
    const content = document.querySelector("#content");

    clearContent();

    const sectionTitle = createElement("h2", "Cal Magrebí");
    const infoDiv = createElement("div", "A Cal Magrebí trobaràs el millor kebab de Catalunya, acompanyat sempre de les millors verdures de l'hort den Hassan, producte de km 0 garantit girmà.", "info");
    const horarisDiv = createElement("div", "", "info");

    content.append(sectionTitle, infoDiv, horarisDiv);

    const homeElements = createHomeElements();
    homeElements.forEach(el => {
        const newElement = createElement(el.type, el.text);
        horarisDiv.appendChild(newElement);
    });

    const addressDiv = createElement("div", "", "info");
    const addressTitle = createElement("h3", "Adreça");
    const addressInfo = createElement("p", "Passeig de Sant Joan 140, Manlleu");

    addressDiv.append(addressTitle, addressInfo);
    content.appendChild(addressDiv);
}



displayHome();


function setPageState(newState) {
    if (pageState === newState) {
        console.log(`Page is already at ${newState}`);
        return;
    }

    if (newState === "Home") {
        displayHome();
    }

    if(newState === "About"){
        about();
    }

    pageState = newState; 
}


const homeButton = document.querySelector("#home-but"); 
if (homeButton) {
    homeButton.addEventListener('click', () => setPageState("Home"));
} else {
    console.error("Home button not found in the DOM");
}

const aboutButton = document.querySelector("#about-but"); 
if (aboutButton) {
    aboutButton.addEventListener('click', () => setPageState("About"));
} else {
    console.error("Home button not found in the DOM");
}
