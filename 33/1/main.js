const text = document.getElementsByClassName(".js-text").value;
const input = document.querySelector(".js-input");
const textHolder = document.querySelector(".text-holder");

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'e' && (event.ctrlKey || event.metaKey)) {
        input.classList.add('active');
        textHolder.classList.add('disabled');
        document.getElementsByClassName('.js-input').value = text;
        console.log(text);

        event.stopPropagation();
        event.preventDefault();
    }
})

document.body.addEventListener('keydown', (event) => {
    if(event.key === '+' && (event.ctrlKey || event.metaKey)) {
        textHolder.classList.remove('disabled');
        input.classList.remove('active')

        event.stopPropagation();
        event.preventDefault();
    }
})
