const imgsEl = JSON.parse(dataInfo);
let containerEl = document.querySelector('.container');

imgsEl.map(function (value) {
    let img = document.createElement('img');
    img.id = value.id;
    img.src = value.url;
    img.h2 = value.h2;
    img.p = value.p;

    containerEl.appendChild(img);
});