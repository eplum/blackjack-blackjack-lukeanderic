const buttons = document.querySelectorAll(".button"); //references all html elements ".button"
                                                     //also document.querySelector(".button") for 
                                                     //first instance

buttons.forEach(function(button) { 
    button.addEventListener ("click", () => {
        const paragraph = document.createElement("p"); //creates variable 'paragraph' for new <p>

        paragraph.classList.add("newParagraph");  

        paragraph.textContent = "My new paragraph";

        document.body.append(paragraph) //reference <body> of html doc
    });
});

