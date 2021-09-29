let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

//make new obj keys
function makeReceipt(QTY, ITEM, TOTAL) {
  this.QTY = QTY;
  this.ITEM = ITEM;
  this.TOTAL = TOTAL;
}

function printOrder(array) {

  let totalBill = 0;

  //stores array of makeReceipt objects (QTY, ITEM & TOTAL keys)
  let totalPurchase = array.map(({ itemName, quantity, unitPrice }) => {
    let itemTotal = quantity * unitPrice; //gives total for each item
    totalBill += itemTotal;    //adds each item's total to final bill

    //creates makeReceipt obj, itemTotal upto 2 decimals
    return new makeReceipt(quantity, itemName, itemTotal.toFixed(2))
  });

  console.table(totalPurchase);  //logs all items table
  console.log(`Total: ${totalBill}`);
}

printOrder(order);
