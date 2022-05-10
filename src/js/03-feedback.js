
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let KEY_Save = "feedback-form-state";

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let valueInput = {
    email: '',
    message: '',
};

function onInput(evt) {
    valueInput[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_Save, JSON.stringify(valueInput))
}

function onPageTextarea() {
    const messageEL = getStorage(valueInput);

    if (messageEL) {
        input.value = messageEL.email;
        textarea.value = messageEL.message;
    }
}
onPageTextarea()

function onSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(KEY_Save);

}

function getStorage(key) {
    try {
        const values = localStorage.getItem(key);
        if (values === null) {
            return;
        } else {
            JSON.parse(values)
        }
    } catch (error) {
        console.error("Error parse")
    }
}

