const moreButton = document.querySelector("#more-button");
const moreInfo = document.querySelector("#more-info");

moreButton.addEventListener("click", () => {
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        moreButton.textContent = "Ukryj";
    } else {
        moreInfo.style.display = "none";
        moreButton.textContent = "Pokaż więcej";
    }
});