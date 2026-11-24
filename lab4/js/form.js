class ContactRequest {
  // конструктор принимает введённые данные
  constructor(name, email, telegram, message, agree) {
    this.name = name;
    this.email = email;
    this.telegram = telegram;
    this.message = message;
    this.agree = agree;
    this.createdAt = new Date();
  }

  print() {
    console.log('%c══════ НОВАЯ ЗАЯВКА CITRUS ══════', 'color:#7149ab; font-weight:bold; font-size:14px;');
    console.log(`%cИмя:        %c${this.name}`, 'color:#7149ab; font-weight:bold;', 'color:#e4d7f7;');
    console.log(`%cEmail:      %c${this.email}`, 'color:#7149ab; font-weight:bold;', 'color:#e4d7f7;');
    console.log(`%cTelegram:   %c${this.telegram}`, 'color:#7149ab; font-weight:bold;', 'color:#e4d7f7;');
    console.log(`%cСообщение:  %c${this.message}`, 'color:#7149ab; font-weight:bold;', 'color:#e4d7f7;');
    console.log(`%cСогласие:   %c${this.agree ? 'да' : 'нет'}`, 'color:#7149ab; font-weight:bold;', 'color:#e4d7f7;');
    console.log(`%cДата:       %c${this.createdAt.toLocaleString('ru-RU')}`, 'color:#7149ab; font-weight:bold;', 'color:#e4d7f7;');
    console.log('%c══════════════════════════════════', 'color:#7149ab; font-weight:bold;');
  }
}

const form = document.getElementById('contact-form');
const hint = document.getElementById('contact-result');

form.addEventListener('submit', (event) => {
  // отменяем стандартную отправку (перезагрузку страницы)
  event.preventDefault();

  // считываем значения полей
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const telegram = form.telegram.value.trim();
  const message = form.message.value.trim();
  const agree = form.agree.checked;

  // простая валидация
  if (!name || !email || !telegram || !message || !agree) {
    hint.textContent = 'Заполните все поля и дайте согласие на обработку данных.';
    hint.style.color = '#c20000';
    return;
  }

  // создаём объект с введёнными данными
  const request = new ContactRequest(name, email, telegram, message, agree);

  // вызываем метод форматированного вывода в консоль
  request.print();

  // показываем сообщение на странице
  hint.textContent = `Спасибо, ${request.name}! Ваше сообщение отправлено.`;
  hint.style.color = '#7149ab';

  // очищаем форму
  form.reset();
});