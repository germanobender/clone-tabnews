document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Bem-vindo Germano"
    ];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenMessages = 2000;
    const textElement = document.createElement("h1");
    textElement.style.fontFamily = "Arial, sans-serif";
    textElement.style.color = "#ffcc00";
    textElement.style.textAlign = "center";
    document.body.appendChild(textElement);

    function typeMessage() {
        if (charIndex < messages[index].length) {
            textElement.textContent += messages[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, typingSpeed);
        } else {
            setTimeout(eraseMessage, delayBetweenMessages);
        }
    }

    function eraseMessage() {
        if (charIndex > 0) {
            textElement.textContent = messages[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseMessage, erasingSpeed);
        } else {
            index = (index + 1) % messages.length;
            setTimeout(typeMessage, typingSpeed);
        }
    }

    typeMessage();
});
