var productMass = [
    prod1 = {
        src: 'img/cups.jpg',
        des: 'кружка с совой',
        prise: 100,
        id: 'p1',
        amount: 1
    },
    prod2 = {
        src: 'img/cups.jpg',
        des: 'кружка с лисой',
        prise: 100,
        id: 'p2',
        amount: 1
    },
    prod2 = {
        src: 'img/cups.jpg',
        des: 'кружка с ёжиком',
        prise: 100,
        id: 'p3',
        amount: 1
    }
];

var col = 0;
var summa = 0;

var countBasketPrice = document.createElement('div');
countBasketPrice.id = 'countBasketPrice';
document.body.appendChild(countBasketPrice);

var product = document.createElement('div');
product.id = 'product';
countBasketPrice.appendChild(product);

for (var i = 0; i < productMass.length; i++) {
    var product = document.getElementById('product');

    var productDiv = document.createElement('div');
    productDiv.id = 'p' + i;
    productDiv.className = 'productDiv';
    product.appendChild(productDiv);

    var image = document.createElement('img');
    image.className = 'image';
    image.src = productMass[i].src;
    productDiv.appendChild(image);

    var desc = document.createElement('div');
    desc.className = 'description';
    desc.id = 'desc' + i;
    desc.innerHTML = "<h4><b>Описание:<b></h4>" + " " + "<p>" + productMass[i].des + "</p>" + "<br>" + "<h4><b>Стоимость:<b></h4>" + " " + "<p>" + productMass[i].prise + "p." + "</p>";
    productDiv.appendChild(desc);

    var buy = document.createElement('button');
    buy.className = 'buyButton';
    buy.id = 'buy' + i;
    buy.innerHTML = "BUY";
    buy.onclick = addBasket;
    desc.appendChild(buy);
}

var sum = document.createElement('div');
sum.id = 'sum';
sum.innerHTML = "<h4>Общее кол-во:</h4>" + " " + col + "шт." + '<br>' + "<h4>Общая сумма:</h4>" + " " + summa + "p.";
countBasketPrice.appendChild(sum);

var basket = document.createElement('div');
basket.id = 'basket';
basket.innerHTML = "<h4>Корзина</4>"
countBasketPrice.appendChild(basket);

function addBasket(event) {

    var cart = document.getElementById('basket');

    var buyId = event.target.id.split('buy');

    var am = parseInt(productMass[buyId[1]].amount);
    var pr = parseInt(productMass[buyId[1]].prise);

    var desc = document.createElement('div');
    desc.className = 'description';
    desc.id = 'desc' + buyId[1];
    desc.innerHTML = "<h4><b>Описание:<b></h4>" + " " + "<p>" + productMass[buyId[1]].des + "</p>" + "<br>" + "<h4><b>Стоимость:<b></h4>" + " " + "<p>" + pr + "p." + "</p>" + "<br>" + "<h4><b>Количество:<b></h4>" + " " + "<p>" + am + "шт." + "</p>";
    cart.appendChild(desc);
    total(am, pr);
   
}

function total(am, pr) {
    col += am;
    summa += pr;

    var g = document.getElementById('sum');
    g.innerHTML = "<h4>Общее кол-во:</h4>" + " " + col + "шт." + '<br>' + "<h4>Общая сумма:</h4>" + " " + summa + "p.";
}