var products= [{name:"Glass bodied white lamp",description:" All white lamp with a glass body ",price:" $55.00", url: "images/lamp1.jpeg"},
			{name:"Desk lamp ",description:" Angled neck with platform ",price:" $29.99", url: "images/lamp2.jpeg"},
			{name:"Table lamp ",description:" All black with a touch activatioin",price:" $18.00", url: "images/lam3.jpeg"},
			{name:"Miniature street lamp",description:" Styled after common streep lamps with a metal frame ",price:" $40.00", url: "images/lamp4.jpeg"},
			{name:"Brass bodied lamp",description:" Polished brass body that comes with an assorment of shades ",price:" $35.00", url: "images/lamp5.jpeg"},
			{name:"Table lamp",description:" Angled neck, perfect for a reading light",price:" $25.00", url: "images/lamp6.jpeg"},
			{name:"Open table lamp",description:" Stylish home decor ",price:" $120.00", url: "images/lamp7.jpeg"},
			{name:"Ceramic boddied lamp",description:" Made from ceramic on the body, and comes with a white parchment shade ",price:" $100.00", url: "images/lamp8.jpeg"},
			{name:"Floor Lamp",description:" Great for sitting in the corner of your home",price:" $89.99", url: "images/lamp9.jpeg"}
];

var divElement= document.getElementById('test');
for (prop in products) {
    var cards = `<article class="articles">
                    <img class="image-size" src="${products[prop].url}">
                    <h3 class="prodName"> ${products[prop].name} </h3>
                    <p class="prodDesc"> ${products[prop].description}</p>
                    <p class=prodPrice"> ${products[prop].price} </p>
                    <img src="images/buy.png" class="buy">
                    <img src="images/cart.png" class='cart'>
                </article>`;
    divElement.innerHTML += cards;
}
/*
var buyButton= document.getElementsByClassName('buy')[0];


buyButton.addEventListener('click',() =>{
	console.log('testing');

});
//<button type="submit" class="addButton"></button>
*/