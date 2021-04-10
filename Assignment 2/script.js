function startAssign(){
    //console.clear();
    const taxRate = .16;
    const taxStr = `${taxRate * 100}%`;
    var prodName = prompt(`Enter the Product Name`);
    var quantityStr = prompt(`How many units of ${prodName} would you like to purchase?`);
    var priceStr = prompt(`How much does each unit of ${prodName} cost?`);
    var quantity = Math.round(parseInt(quantityStr.replace(/[^\d.]/g,``)));
    var price = (Math.round(parseFloat(priceStr.replace(/[^\d.]/g,``)) * 100) / 100);
    var subTotal = (Math.round(quantity * price * 100) / 100);
    var grandTotal = (Math.round(subTotal * (1 + taxRate) * 100) / 100);
    console.log(`Product Name: ${prodName}`);
    console.log(`Quantity: ${quantity.toLocaleString(undefined, {'maximumFractionDigits':0})}`);
    console.log(`Price Per Unit: $${price.toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2})}`);
    console.log(`Pre-tax Price: $${subTotal.toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2})}`);
    console.log(`At a tax rate of ${taxStr}, your total cost will be $${grandTotal.toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2})}`);
    console.log(``);
    addData(prodName,quantity,price,subTotal,taxStr,grandTotal);
}
function addData(prodName,quantity,price,subTotal,taxRate,grandTotal){
    if (!document.getElementsByTagName) return;
    tabBody=document.getElementsByTagName("tbody").item(0);
    row=document.createElement("tr");
    nameCell=document.createElement("td");
    quanCell=document.createElement("td");
    priceCell=document.createElement("td");
    subCell=document.createElement("td");
    taxCell=document.createElement("td");
    grandCell=document.createElement("td");
    nameNode=document.createTextNode(prodName);
    quanNode=document.createTextNode(quantity.toLocaleString(undefined, {'maximumFractionDigits':0}));
    priceNode=document.createTextNode(`$` + price.toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2}));
    subNode=document.createTextNode(`$` + subTotal.toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2}));
    taxNode=document.createTextNode(taxRate);
    grandNode=document.createTextNode(`$` + grandTotal.toLocaleString(undefined, {'minimumFractionDigits':2,'maximumFractionDigits':2}));
    nameCell.appendChild(nameNode);
    quanCell.appendChild(quanNode);
    priceCell.appendChild(priceNode);
    subCell.appendChild(subNode);
    taxCell.appendChild(taxNode);
    grandCell.appendChild(grandNode);
    row.appendChild(nameCell);
    row.appendChild(quanCell);
    row.appendChild(priceCell);
    row.appendChild(subCell);
    row.appendChild(taxCell);
    row.appendChild(grandCell);
    tabBody.appendChild(row);
}