let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
//this function will create object lists later to use it in console.table()
function receipt(QTY, ITEM, TOTAL) {
  this.QTY = QTY;
  this.ITEM = ITEM;
  this.TOTAL = TOTAL;
}

let receiptForThisOrder = (order) => {
  let totalCost = 0;

  const totalPurchase = order.map(({ quantity, itemName, unitPrice }) => {
    let totalPriceForEachItem = unitPrice * quantity;

    totalCost += totalPriceForEachItem;
    return new receipt(quantity, itemName, totalPriceForEachItem.toFixed(2));
  });

  console.table(totalPurchase);
  console.log(`Please pay total amount: £${totalCost}`);
};

receiptForThisOrder(order);
