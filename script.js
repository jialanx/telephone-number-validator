const input = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const drawer = document.getElementById("drawer");
const changeDiv = document.getElementById("change-div");
let price = 3.26;
let cid = [
  ['ONE HUNDRED', 100],
  ['TWENTY', 60],
  ['TEN', 20],
  ['FIVE', 55],
  ['ONE', 90],
  ['QUARTER', 4.25],
  ['DIME', 3.1],
  ['NICKEL', 2.05],
  ['PENNY', 1.01]
];

let changeCoins = [
  ['ONE HUNDRED', 0],
  ['TWENTY', 0],
  ['TEN', 0],
  ['FIVE', 0],
  ['ONE', 0],
  ['QUARTER', 0],
  ['DIME', 0],
  ['NICKEL', 0],
  ['PENNY', 0]
];

const dollarKey = [
  ['ONE HUNDRED', 100],
  ['TWENTY', 20],
  ['TEN', 10],
  ['FIVE', 5],
  ['ONE', 1],
  ['QUARTER', 0.25],
  ['DIME', 0.1],
  ['NICKEL', 0.05],
  ['PENNY', 0.01]

]; 

cid.forEach((arr) => {
    let value = document.createElement("p");
    value.textContent = arr[0] + ": " + arr[1];
    drawer.appendChild(value);
});

purchaseBtn.addEventListener("click", () => {
    if (Number(input.value) < price) {
        changeDue.textContent = "you too broke";
    } else {
        let change = input.value - price;
        dollarKey.forEach((arr, index) => {
            while (change - arr[1] >= 0) {
                if (cid[index][1] >= arr[1]) {
                    change -= arr[1];
                    changeCoins[index][1]++;
                    cid[index][1] -= arr[1];
                }
            };
        }); 
    }
    displayChange();
});


const displayChange = () => {
    changeCoins.forEach((arr,index) => {
        let value = document.createElement("p");
        value.textContent = arr[0] + ": " + (arr[1]*dollarKey[index][1]);
        changeDiv.appendChild(value);
    });
}; 