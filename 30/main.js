const purchaseList = [
    {
        product: "tomatoes",
        amount: 9,
        status: "purchased",
        pricePerItem: 15,
        totalCost: 0,
        calcTotalCost: function () {
            this.totalCost = this.amount * this.pricePerItem;
        }
    },
    {
        product: "shampoo",
        amount: 1,
        status: "not purchased",
        pricePerItem: 55,
        totalCost: 0,
        calcTotalCost: function () {
            this.totalCost = this.amount * this.pricePerItem;
        }
    },
    {
        product: "sweet cherries",
        amount: 500,
        status: "purchased",
        pricePerItem: 7,
        totalCost: 0,
        calcTotalCost: function () {
            this.totalCost = this.amount * this.pricePerItem;
        }
    },
    {
        product: "gloves",
        amount: 2,
        status: "not purchased",
        pricePerItem: 45,
        totalCost: 0,
        calcTotalCost: function () {
        this.totalCost = this.amount * this.pricePerItem;
        }
    },
];
for (let i = 0; i < purchaseList.length; i++) {
    purchaseList[i].calcTotalCost();
}

//мінімум
let purchased = purchaseList.filter(function(item) {
    return item.status == "purchased";
});
let notPurchased = purchaseList.filter(function(item) {
    return item.status == "not purchased";
});
const newPurchaseList = notPurchased.concat(purchased);
console.log(newPurchaseList);  

purchaseList.forEach((item) => item.product === "shampoo" ? item.status = "purchased" : item.status = item.status);
console.log(purchaseList);

let notPurchasedProducts = purchaseList.filter(function(el) {
    return el.status === "not purchased";
});
let purchasedProducts = purchaseList.filter(function(el) {
    return el.status === "purchased";
});
    console.log(notPurchasedProducts);
console.log(purchasedProducts);

//норма
let toDelete = prompt("What product do you want to delete from the list? Please choose from 'tomatoes', 'shampoo', 'sweet cherries', 'gloves'.");
const reducedList = purchaseList.filter(function(item) {
    return item.product !== toDelete;
});
console.log(reducedList);

const newProduct = {
    product: null,
    amount: null,
    status: null,
    pricePerItem: null,
    totalCost: function() {
        return this.amount * this.pricePerItem;
    }
}
function fillObject(object) {
    for (const key in object) {

        if(object[key] !== null) {
            continue;
        } else {
            newProduct[key] = prompt(`Enter ${key}`);
        }
    }
}
fillObject(newProduct);

function addProduct(arrDefault, objNew) {
    let flag = false;
    for (let i = 0; i < arrDefault.length; i++) {
    if (objNew.product == arrDefault[i].product) {
        arrDefault[i].amount++;
        purchaseList[i].calcTotalCost();
        flag = true;
        break;
    }
    }
    if (flag == false) {
        arrDefault.push(objNew);
}
}
addProduct(purchaseList, newProduct);
console.log(purchaseList);

//максимум
function addCosts () {
    let addAllCosts = 0;
    for (item of purchaseList) {
        addAllCosts += item.totalCost;
    }
    return addAllCosts;
}
console.log(addCosts());

function addNotPurchased () {
    let notPurchasedProducts = purchaseList.filter(function(el) {
        return el.status === "not purchased";
    });

    let addAllCosts = 0;
    for (item of notPurchasedProducts) {
        addAllCosts += item.totalCost;
    }
    return addAllCosts;
}
console.log(addNotPurchased());

let sortingChoice = prompt("Let's sort our list. if you want to see the cheapest products first, print '+', if you want to see the most expensive - print '-'.");
function sortProductList() {
    if (sortingChoice === "+") {
        purchaseList.sort((a, b) => b.totalCost - a.totalCost);
    } else {
        purchaseList.sort((a, b) => a.totalCost - b.totalCost);
    }
    console.log(purchaseList);
}  
sortProductList();
