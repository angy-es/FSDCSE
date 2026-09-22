const root = document.getElementById("container");
const button = document.getElementById("btn");

console.log(root);
console.log(button);

const h2 = document.createElement("h2");
h2.innerHTML = "Resume Builder";

const loader = document.createElement("h1");
root.appendChild(loader);

const img = document.createElement("img");
const table = document.createElement("table");

function buildResume() {
    try {
        loader.innerHTML = "Building.....";

        img.src = "logo1.png";
        img.setAttribute("height", 100);
        img.setAttribute("width", 100);
        table.setAttribute('width',100);
        table.setAttribute('height',100);

        table.setAttribute("border", "1");

        // Row 1
        const row1 = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.appendChild(img);

        const cell2 = document.createElement("td");
        cell2.innerHTML = "ESHA SARSWAT";

        row1.appendChild(cell1);
        row1.appendChild(cell2);

        table.appendChild(row1);

        // Row 2
        const row2 = document.createElement("tr");

        const cell3 = document.createElement("td");
        cell3.innerHTML = "Qualification";

        const cell4 = document.createElement("td");
        cell4.innerHTML = "BTECH";

        row2.appendChild(cell3);
        row2.appendChild(cell4);

        table.appendChild(row2);

        // Row 3
        const row3 = document.createElement("tr");

        const cell5 = document.createElement("td");
        cell5.innerHTML = "Stream";

        const cell6 = document.createElement("td");
        cell6.innerHTML = "CSE";

        row3.appendChild(cell5);
        row3.appendChild(cell6);

        table.appendChild(row3);

        root.appendChild(table);
        root.appendChild(h2);

        loader.innerHTML = "";

    } catch (e) {
        console.log(e);
        loader.innerHTML = "Error in building resume";
    }
}

button.addEventListener("click", buildResume);