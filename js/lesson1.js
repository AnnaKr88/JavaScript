var imgSmall = document.getElementById('imgSmall');
var imgBig = document.getElementById('imgBig');

var imgSmallMass = ['photo1s.jpg', 'photo2s.jpg', 'photo3s.jpg', 'photo4s.jpg', 'photo5s.jpg', 'photo6s.jpg', 'photo7s.jpg'];
var imgBigMass = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg'];

for (var i = 0, n = 3; i < imgSmallMass.length; i++, n += 25) {
    var imgS = document.createElement('img');
    imgSmall.appendChild(imgS);
    //imgS.className = 'imgS';
    imgS.id = 'imgS' + i;
    imgS.src = "img/lesson1/small/" + imgSmallMass[i];
    imgS.style = "position: absolute; top:" + n + '%' + "; left: 11%; width: 80%;";
    imgS.setAttribute('onclick', 'target'+i+'()');
}

for (var i = 0; i < imgBigMass.length; i++) {
    var imgB = document.createElement('img');
    imgBig.appendChild(imgB);
    //imgB.className = 'imgB';
    imgB.id = 'imgB' + i;
    imgB.src = "img/lesson1/big/" + imgBigMass[i];
    imgB.style = "width: 100%; border-radius: 30px;";
    imgB.setAttribute('onerror', 'h()');
}

function h() {
    imgB.src = '';
}

//Задание 3
var l = 0;
var i = 0;

function right() {
    imgBigMass.push(imgBigMass[i]);
    ++i;
    var getImg = document.getElementById('imgB' + l);
    getImg.src = 'img/lesson1/big/' + imgBigMass[i];
    getImg.onerror = this.src = "img/lesson1/big/und.jpg";
    console.log(getImg);


}

function left() {
    --i;
    var getImg = document.getElementById('imgB' + l);
    getImg.src = 'img/lesson1/big/' + imgBigMass[i];
    console.log(getImg);

}

// Задание 1
function target0() { 
    
            var getImgId = document.getElementById('imgB0');
            getImgId.src = 'img/lesson1/big/' + imgBigMass[0];
}

function target1() { 
    
            var getImgId = document.getElementById('imgB0');
            getImgId.src = 'img/lesson1/big/' + imgBigMass[1];
}
function target2() { 
    
            var getImgId = document.getElementById('imgB0');
            getImgId.src = 'img/lesson1/big/und.jpg';
}
function target3() { 
    
            var getImgId = document.getElementById('imgB0');
            getImgId.src = 'img/lesson1/big/' + imgBigMass[3];
}
function target4() { 
    
            var getImgId = document.getElementById('imgB0');
            getImgId.src = 'img/lesson1/big/' + imgBigMass[4];
}
function target5() { 
    
            var getImgId = document.getElementById('imgB0');
            getImgId.src = 'img/lesson1/big/' + imgBigMass[5];
}
function target6() { 
    
            var getImgId = document.getElementById('imgB0');
            getImgId.src = 'img/lesson1/big/' + imgBigMass[6];
}
