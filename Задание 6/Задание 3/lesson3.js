var lesson3Div = document.getElementById('lesson3_div');
var imgBig = document.createElement('div');
imgBig.id = 'imgBig';
imgBig.style = "height:100%; width: 80%; margin: 0 auto; text-align: center; "
lesson3Div.appendChild(imgBig);

var bigPic = document.createElement('div');
bigPic.id = 'bigPic';
imgBig.appendChild(bigPic);

var picBig = document.getElementById('bigPic');
var imgBPic = document.createElement('img');
imgBPic.id = "imgB";
imgBPic.src = 'img/0.jpg';
picBig.appendChild(imgBPic);

var pagPrev = document.createElement('button');
pagPrev.id = 'pagPrev';
pagPrev.setAttribute('onclick', 'left()');
imgBig.appendChild(pagPrev);


var pagNext = document.createElement('button');
pagNext.id = 'pagNext';
pagNext.setAttribute('onclick', 'right()');
imgBig.appendChild(pagNext);

var imgBMass = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
var n = 0;

function right() {
    var picBig = document.getElementById('bigPic');
    picBig.innerHTML = "";
    ++n;
    createImg();

}

function left() {
    --n;
    var picBig = document.getElementById('bigPic');
    picBig.innerHTML = "";
    createImg();
}


function createImg() {
    if (n > imgBMass.length - 1) {
        n = 0;
    } else if (n < 0) {
        n = imgBMass.length - 1;
    }
    var imgB = document.createElement('img');
    imgB.id = 'imgB';
    imgB.src = 'img/' + imgBMass[n];
    imgB.onerror = function () {
        picBig.innerHTML = "<h1>Фото отсутствует</h1>"
    }
    picBig.appendChild(imgB);

}
