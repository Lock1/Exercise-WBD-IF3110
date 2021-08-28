// dataset variable -> itemlist.js

function main() {
    const currentURL = window.location.href;
    const itemTargetIndex = parseInt(currentURL.slice(currentURL.indexOf("?index=") + 7, currentURL.length));

    const targetObject = dataset.books[itemTargetIndex];
    const overlayImageObj = document.getElementById("overlay-img");
    overlayImageObj.src = targetObject.primer["url-foto"];

    document.getElementById("overlay-title").innerText = targetObject.judul;
    document.getElementById("overlay-price").innerText = "Rp." + targetObject.primer.harga;

    const descObj = targetObject.deskripsi;
    var descriptionText = "";
    for (key in descObj) {
        const keyDesc = key.charAt(0).toUpperCase() + key.slice(1);
        descriptionText += keyDesc + " : " + descObj[key];
        descriptionText += "\n";
    }


    document.getElementById("overlay-desc").innerText = descriptionText;
}

window.onload = main;