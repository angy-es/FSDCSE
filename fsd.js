/*function orderRecieve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order received");
        }, 1000);
    });
}
function orderPrepare(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order prepared");
        }, 1000);
    });
}
function orderDeliver() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order delivered");
        }, 1000);
    });
}
function orderComplete() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order completed");
        }, 1000);
    });
}

async function orderHandler() {
    try {
        const status = await orderRecieve();
        const preparedStatus = await orderPrepare();
        const deliveredStatus = await orderDeliver();
        const completedStatus = await orderComplete();

        console.log(status);
        console.log(preparedStatus);
        console.log(deliveredStatus);
        console.log(completedStatus);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Order handling completed");
    }
}

orderHandler();
*/
/*async function fetchData(){
    const serverData=await fetch("https://fakestoreapi.com/products/1");
    const jsonData=await serverData.json();
    console.log(jsonData);
}
    
fetchData();*/

const button = document.getElementById("myButton");
const container = document.getElementById("container");

const loading = document.createElement("div");
container.appendChild(loading);

async function fetchData() {
    try {
        loading.innerHTML = "<h2>Loading Data......</h2>";

        const serverData = await fetch(
            "https://fakestoreapi.com/products"
        );

        const jsonData = await serverData.json();

        console.log(jsonData);

        let table = `
            <table border="4px">
                <tr>
                    <td>ITEM_ID</td>
                    <td>TITLE</td>
                    <td>PRICE</td>
                    <td>IMAGE</td>
                </tr>

                ${jsonData.map((ele) => `
                    <tr>
                         <td>img src="${ele.image}" width="100px" height="100px" alt="${ele.title}"></td>
                        <td>${ele.id}</td>
                        <td>${ele.title}</td>
                        <td>${ele.price}</td>
                    </tr>
                `).join("")}

            </table>
        `;

        container.innerHTML = table;

    } catch (err) {
        console.log(err);
        loading.innerHTML = "<h2>Loading Error</h2>";
    }
}

button.addEventListener("click", fetchData);