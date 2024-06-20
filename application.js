let modWind = document.querySelector('.modWind');
let modWindDark = document.querySelector('.modWind-dark');
const form = document.querySelector('.application');
const nameInput = form.querySelector('#name');
const phoneInput = form.querySelector('#phone');
const dateInput = form.querySelector('#date');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    const name = nameInput.value;
    const phone = phoneInput.value;
    const date = dateInput.value;
    if (!name || !phone  || !date) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    if (!isValidName(name)) {
        alert('Имя должно начинаться с заглавной буквы, может содержать только русские буквы, пробел и дефис');
        return;
    }
    
    if (!isValidPhone(phone)) {
        alert('Телефон может содержать только цифры, начинаетмя с +7 или 8, и 10 цифр после');
        return;
    }
    form.submit();
});

function isValidName(name) {
    const pattern = /^[А-ЯЁ][а-яё]{0,30}(( |-)([А-ЯЁ][а-яё]{0,30})){0,2}$/;
    return pattern.test(name);
}

function isValidPhone(phone) {
    const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/;
    return pattern.test(phone);
}

function show() {
    modWind.classList.toggle('hidden');
    modWindDark.classList.toggle('hidden');
    modWindDark.classList.toggle('when_modal');
}

function hide() {
    modWind.classList.toggle('hidden');
    modWindDark.classList.toggle('hidden');
    modWindDark.classList.toggle('when_modal');
    container.style.backgroundColor = "";
}