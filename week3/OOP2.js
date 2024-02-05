var purchase1 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = purchase1.shoes * purchase1.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase1.totalPrice(); // Total price: 120
