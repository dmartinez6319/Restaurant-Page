import checkMan from "../images/robox.PNG"
import startPage from "./homePage.js"

export const loadPage = () => {
    startPage();
};

export const createRestaurtantPage = () =>{
    const content = document.querySelector("#content");
    content.replaceChildren();
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // Title
    const pageText = document.createElement("p");
    pageText.innerHTML = "Food served best by Emily";

    // Image
    const pageImage = document.createElement("img");
    console.log(checkMan)
    pageImage.src = checkMan;
    pageImage.width = "200";
    pageImage.height = "100";

    // Initialize
    pageContent.appendChild(pageText);
    pageContent.appendChild(pageImage);
    content.appendChild(pageContent);
}

export const createMenu = () =>{
    const content = document.querySelector("#content");
    content.replaceChildren();
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // Title
    const pageText = document.createElement("ul");
    pageText.innerHTML = "Catnip";

    // Image
    const pageImage = document.createElement("img");
    console.log(checkMan)
    pageImage.src = checkMan;
    pageImage.width = "200";
    pageImage.height = "100";

    // Initialize
    pageContent.appendChild(pageText);
    pageContent.appendChild(pageImage);
    content.appendChild(pageContent);
}

export const createAbout = () =>{
    const content = document.querySelector("#content");
    content.replaceChildren();
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // Title
    const pageText = document.createElement("p");
    pageText.innerHTML = "A really cool palce";

    // Image
    const pageImage = document.createElement("img");
    console.log(checkMan)
    pageImage.src = checkMan;
    pageImage.width = "200";
    pageImage.height = "100";

    // Initialize
    pageContent.appendChild(pageText);
    pageContent.appendChild(pageImage);
    content.appendChild(pageContent);
}

export const createContact = () =>{
    const content = document.querySelector("#content");
    content.replaceChildren();
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // Title
    const pageText = document.createElement("p");
    pageText.innerHTML = "Name: Emily";

    // Image
    const pageImage = document.createElement("img");
    console.log(checkMan)
    pageImage.src = checkMan;
    pageImage.width = "200";
    pageImage.height = "100";

    // Initialize
    pageContent.appendChild(pageText);
    pageContent.appendChild(pageImage);
    content.appendChild(pageContent);
}
