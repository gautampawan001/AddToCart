let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');

})
let products = [
    {
        id:1,
        name:'Spicy Chinese curry',
        image:'2.jpg',
        price:600
    },
    {
        id:1,
        name:'Mexican mixed rice puddling',
        image:'3.jpg',
        price:800
    },
    {
        id:3,
        name:'Nepali piro Chatpatee',
        image:'4.jpg',
        price:200
    },
    {
        id:4,
        name:'Popular Chicken Birayani',
        image:'5.webp',
        price:400
    },
    {
        id:5,
        name:'Mixed Veggies ',
        image:'6.jpeg',
        price:780
    },
    {
        id:6,
        name:'Chinese Moxed Noodles',
        image:'7.jpg',
        price:499
    },

];
let listCards = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src ="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
         `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;

    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
             <div><img src="image/${value.image}"/></div>
             <div>${value.name}</div>
             <div>${value.price.toLocaleString()}</div>
             
             <div>
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class= "count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>

             </div>

            `;
            listCard.appendChild(newDiv);
        }
    }) 
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


