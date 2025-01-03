import "./styles.css";
import {loadPage, createMenu, createContact, createAbout,createRestaurtantPage} from "./pageLoader"

const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", () => {
        let dest = button.innerHTML;
        if (dest === "Home") {
            console.log("Homed")
            createRestaurtantPage();

        } 
        else if (dest === "Menu"){
            console.log("Menued")
            createMenu();

        }
        else if (dest === "About"){
            console.log("Abouted")
            createAbout();


        }
        else if (dest === "Contact"){
            console.log("Contacted")
            createContact();

        }
    })
})

loadPage();