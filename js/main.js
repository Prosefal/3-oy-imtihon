var elBody = document.querySelector('body');
var elBtn = document.querySelector('.click');


elBtn.addEventListener("click", function(){
    elBody.classList.toggle('dark');
});