const loader = document.querySelector("#page-loader");
const loaderWord = document.querySelector('.loader-word')
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]<>/"

function scrambleText(element) {
    const finalText = element.dataset.loaderText
    let iteration = 0 

    const interval = window.setInterval(() => {
        element.textContent = finalText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return finalText[index];
                }

                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");

        if (iteration >= finalText.length) {
            window.clearInterval(interval);
        }

        iteration += 1 / 2;
    }, 45);
}

if (loaderWord) {
    scrambleText(loaderWord);
}


window.addEventListener("load", () => {
    window.setTimeout(() => {
        loader?.classList.add("is-hidden");
    }, 2000);
});

loader?.addEventListener("transitionend", () => {
    loader.remove();
});
