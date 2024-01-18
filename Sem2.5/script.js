const images = JSON.parse(dataInfo);
let containerEl = document.querySelector('.container');

images.map(function (value) {
    let img = document.createElement('img');
    img.id = value.id;
    img.height = value.height;
    img.width = value.width;
    img.src = value.url;

    containerEl.appendChild(img);
});