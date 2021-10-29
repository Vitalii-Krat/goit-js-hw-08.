
import throttle from 'lodash.throttle';

const filterForm = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

filterForm.addEventListener('input', throttle(onInput, 300));

initForm();

// РАБОТА С ФОРМОЙ

filterForm.addEventListener('submit', evt => {
  evt.preventDefault();
 
  let dataFromStorage = localStorage.getItem(STORAGE_KEY);
  //ПРОВЕРКА НА ЗАПОЛНЕНИЕ ПОЛЕЙ ФОРМЫ
   if (!dataFromStorage) {
    alert('Все поля формы должны быть заполнены!');
    return;
  }
  const formData = new FormData(filterForm);
  formData.forEach((name, value) => console.log(name, value));
  console.log('SENDED-FORM-OBJECT >');
  console.log('FORM-DATA-', JSON.parse(dataFromStorage));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)
  
});

// РАБОТА С ИНПУТОМ
function onInput(evt) {
    let dataFromStorage = localStorage.getItem(STORAGE_KEY);
    dataFromStorage = dataFromStorage ? JSON.parse(dataFromStorage) : {};
    dataFromStorage[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataFromStorage));
};

// ПОЛУЧЕНИЕ ДАННЫХ ИЗ LOKAL_STORAGE И НАПОЛНЕНИЕ ИМИ ФОРМЫ
function initForm() {
  let dataFromStorage = localStorage.getItem(STORAGE_KEY);
  if (dataFromStorage) {
    dataFromStorage = JSON.parse(dataFromStorage);
    Object.entries(dataFromStorage).forEach(([name, value]) => {
      filterForm.elements[name].value = value;
    });
  }
}
