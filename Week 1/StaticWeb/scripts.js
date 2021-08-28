// dataset variable -> itemlist.js
function cardGenerator(objectData) {
    const newCard   = document.createElement("div");
    newCard.classList.add("card");
    newCard.id      = objectData.judul;

    const cardThumb = document.createElement("img");
    cardThumb.src   = objectData.primer["url-foto"];
    cardThumb.width = 100;
    newCard.appendChild(cardThumb);

    const cardNameHeader  = document.createElement("h4");
    const cardHeaderText  = document.createTextNode(objectData.judul);
    cardNameHeader.appendChild(cardHeaderText);
    newCard.appendChild(cardNameHeader);

    const cardPrice = document.createTextNode("Rp." + objectData.primer.harga);
    newCard.appendChild(cardPrice);

    return newCard;
}

function cardClickEvent(dataIndex) {
    // Redirect ke page barang
    window.location.href = "pagebarang.html?index=" + dataIndex;
}


function main() {
    for (var i = 0; i < dataset.books.length; i++) {
        document.getElementById("catalog")
            .appendChild(cardGenerator(dataset.books[i]));

        var onclickEvent = "cardClickEvent(" + i + ")";
        document.getElementById(dataset.books[i].judul)
            .setAttribute("onclick", onclickEvent);
    }
}

window.onload = main;
