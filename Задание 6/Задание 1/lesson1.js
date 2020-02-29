
var lesson1Div = document.getElementById('lesson1_div')    
var grid = document.createElement('div');
grid.id='grid';
lesson1Div.appendChild(grid);
    
var imgSmall = document.createElement('div');
imgSmall.id='imgSmall';
grid.appendChild(imgSmall);
    
var line = document.createElement('div');
line.id='line';
grid.appendChild(line);     

var imgBig = document.createElement('div');
imgBig.id='imgBig';
grid.appendChild(imgBig); 

var imgSmallMass = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];


    for (var i = 0, n = 3; i < imgSmallMass.length; i++, n += 25) {
    var imgS = document.createElement('img');
    imgSmall.appendChild(imgS);
    //imgS.className = 'imgS';
    imgS.id = 'imgS' + i;
    imgS.src = "img/small/" + imgSmallMass[i];
    imgS.style = "position: absolute; top:" + n + '%' + "; left: 11%; width: 80%;";
    imgS.onclick=bigPic;
}

function bigPic(){
    var imgBig = document.getElementById("imgBig");
    imgBig.innerHTML = "";
    eventId = this.id.split("imgS");
    srcEvent = "img/big/"+eventId[1]+".jpg";
    imgB = document.createElement("img");
    imgB.src = srcEvent;
    imgB.style="width: 100%; border-radius: 30px;";
    imgB.onerror = function(){
        imgBig.innerHTML = "<h1>Фото отсутствует</h1>";
    }
    imgBig.append(imgB);
}


