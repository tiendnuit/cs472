$(document).ready(function(){
    $("#new-product-form").submit(function(e) {
        let message = `Product No: ${$("#productNo").val()} - `;
        message += `Quantity in stock: ${$("#inputQuantity").val()} - `;
        message += `Name: ${$("#inputName").val()} - `;
        message += `Supplier: ${$("#inputGroupSelect01").val()} - `;
        message += `Unit price: ${$("#inputUnit").val()} - `;
        message += `Date Supplied: ${$("#inputDate").val()}`;

        console.log(message);
        const newElement = $("<div>", {"text":message});
        $("#container").append(newElement);
        e.preventDefault();
    });
});

/* ==> Using DOM
function addProduct() {
    let productNo = document.getElementById("productNo").value;
    let inputQuantity = document.getElementById("inputQuantity").value;
    let inputName = document.getElementById("inputName").value;
    let inputGroupSelect01 = document.getElementById("inputGroupSelect01").value;
    let inputUnit = document.getElementById("inputUnit").value;
    let inputDate = document.getElementById("inputDate").value;

    let message = "Product No: " + productNo + "\n"
    message += "Quantity in stock: " + inputQuantity + "\n"
    message += "Name: " + inputName + "\n"
    message += "Supplier: " + inputGroupSelect01 + "\n"
    message += "Unit price: " + inputUnit + "\n"
    message += "Date Supplied: " + inputDate + "\n"
    alert(message);
};
*/