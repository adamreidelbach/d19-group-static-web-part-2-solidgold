var products= [{name:"lamp1",description:" this is the first lamp ",price:" $10.00", url: "images/lamp1.jpeg"},
			{name:"lamp2",description:" this is the second lamp ",price:" $10.00", url: "images/lamp2.jpeg"},
			{name:"lamp3",description:" this is the third lamp ",price:" $10.00", url: "images/lam3.jpeg"},
			{name:"lamp4",description:" this is the fourth lamp ",price:" $10.00", url: "images/lamp4.jpeg"},
			{name:"lamp5",description:" this is the fith lamp ",price:" $10.00", url: "images/lamp5.jpeg"},
			{name:"lamp6",description:" this is the sixth lamp ",price:" $10.00", url: "images/lamp6.jpeg"},
			{name:"lamp7",description:" this is the seventh lamp ",price:" $10.00", url: "images/lamp7.jpeg"},
			{name:"lamp8",description:" this is the eigth lamp ",price:" $10.00", url: "images/lamp8.jpeg"},
			{name:"lamp9",description:" this is the ninth lamp ",price:" $10.00", url: "images/lamp9.jpeg"}
];

var divElement= document.getElementById('test');
for (prop in products) {
    var cards = `<article class="articles">
                    <img class="image-size" src="${products[prop].url}">
                    <h3 class="prodName"> ${products[prop].name} </h3>
                    <p class="prodDesc"> ${products[prop].description}</p>
                    <p class=prodPrice"> ${products[prop].price} </p>
                </article>`;
    divElement.innerHTML += cards;
}
