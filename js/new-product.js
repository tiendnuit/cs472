window.onload = function() {
    document.getElementById("btnAdd").onclick = addProduct;
};

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