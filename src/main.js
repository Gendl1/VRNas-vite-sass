import './styles/_variables.scss'
import './styles/main.scss'

//Делигирование событий для expandable
document.querySelector('.choose-us__expandable').addEventListener(
    'click', 
    function(e) {
        //Проверка клика по div с заголовком
        const title = e.target.closest('.choose-us__expandable-item-title');
        
        // Если клик не по заголовку — игнорируем
        if (!title) return;

        // Находим родительский элемент .choose-us__expandable-item
        const item = title.parentElement;

        // Находим текст и img внутри этого элемента
        const text = item.querySelector('.choose-us__expandable-item-text');
        const icon = item.querySelector('.choose-us__expandable-item-title-img img');

        // Переключаем класс open 
        text.classList.toggle('open');

        // Меняем иконку в зависимости от состояния
        if (text.classList.contains('open')) {
            icon.src = './public/images/expand_open.svg';
        } 

        else {
            icon.src = './public/images/expand_close.svg';
        }
    }
)

//Бургер-меню
document.querySelector('.header__burger')?.addEventListener('click', () => {
    document.querySelector('.header__nav').classList.toggle('open2');
});


