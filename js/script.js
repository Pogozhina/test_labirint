const cardWrap = document.querySelector('.card__wrap');
const cardWidth = cardWrap.offsetWidth;

document.querySelector('.button__left').addEventListener('click', () => {
  const cards = document.querySelector('.cards');
  const firstCard = cards.querySelector('.card__wrap:first-child');
  const lastCard = cards.querySelector('.card__wrap:last-child');
  cards.insertBefore(lastCard, firstCard);
  cards.style.transform = `translateX(-${cardWidth}px)`;
  setTimeout(() => {
    cards.style.transition = 'none';
    cards.style.transform = 'translateX(0)';
    setTimeout(() => {
      cards.style.transition = '';
    }, 50);
  }, 0);
});

document.querySelector('.button__right').addEventListener('click', () => {
  const cards = document.querySelector('.cards');
  const firstCard = cards.querySelector('.card__wrap:first-child');
  const secondCard = cards.querySelector('.card__wrap:nth-child(2)');
  cards.style.transform = `translateX(-${cardWidth}px)`;
  setTimeout(() => {
    cards.style.transition = 'none';
    cards.appendChild(firstCard);
    cards.style.transform = 'translateX(0)';
    setTimeout(() => {
      cards.style.transition = '';
    }, 50);
  }, 0);
});



// Получаем все элементы с классом "heart__link"
const hearts = document.querySelectorAll(".heart__link");

// Для каждого элемента добавляем обработчик клика
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    // Получаем элемент сердца
    const heartImg = heart.querySelector("img");

    // Если текущий цвет сердца белый, меняем его на красный
    if (heartImg.getAttribute("src") === "./img/heart.svg") {
      heartImg.setAttribute("src", "./img/heart_red.svg");
    } else {
      // Иначе меняем цвет на белый
      heartImg.setAttribute("src", "./img/heart.svg");
    }
  });
});