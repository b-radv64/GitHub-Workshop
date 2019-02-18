var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

convertBtnBTN.addEventListener('click', () =>{
    SVGAnimatedNumberList(URLinput.value);
});

function sendURL(URL){
    window.location.href = 'http://localhost:4000/download?URL=${URL}';
}