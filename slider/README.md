# Задача 1. Слайдер

#### В рамках домашнего задания к лекции «Изменение структуры HTML-документа»

## Описание

Необходимо разработать интерфейс слайдера, реализованный на основе списка слайдов. При открытии отображается первый слайд. Для навигации по слайдам доступно 4 кнопки, которые функционируют в соответствии с их названиями:
- «следующий слайд»;
- «предыдущий слайд»;
- «последний слайд»;
- «первый слайд».

![Слайдер](./res/slider.gif)

## Интерфейс

Весь интерфейс слайдера должен быть реализован внутри тега с классом `slider`.

Список слайдов доступен в теге с классом `slides`. Каждый слайд является дочерним тегом списка слайдов.

Для того, чтобы показать текущий слайд, добавьте ему класс `slide-current`. При открытии текущим должен быть выбран первый слайд.

Кнопки навигации по слайдеру помещены в тег с классом `slider-nav` и помечены дата-атрибутом `data-action`:
- `prev` — переходит к предыдущему слайду;
- `next` — к следующему;
- `first` — к первому;
- `last` — к последнему.

Если мы находимся на первом слайде, кнопки `prev` и `first` должны быть заблокированы. Если на последнем слайде, то заблокированы кнопки `next` и `last`. Для блокировки кнопки добавьте ей класс `disabled` и не реагируйте на клик по этой кнопке.

## Реализация

При реализации нельзя изменять HTML-код и CSS-стили.

### В песочнице CodePen

Реализуйте компонент во вкладке JS.

В онлайн-песочнице на [CODEPEN](https://codepen.io/Netology/pen/QaBxMz).

### Локально с использованием git

Реализацию необходимо поместить в файл `./js/slider.js`. Файл уже подключен к документу, поэтому другие файлы изменять не требуется.

В репозитории на [GitHub](https://github.com/netology-code/hj-homeworks/tree/master/html-document-structure/slider).

## Инструкция по выполнению домашнего задания

### В онлайн-песочнице

Потребуется только ваш браузер.

1. Открыть код в [песочнице](https://codepen.io/Netology/pen/QaBxMz).
2. Нажать кнопку «Fork».
3. Выполнить задание.
4. Нажать кнопку «Save».
5. Скопировать адрес страницы, открытой в браузере.
6. Прислать скопированную ссылку через личный кабинет на сайте [netology.ru](http://netology.ru/).    

### Локально

Потребуются: браузер, редактор кода, система контроля версий [git](https://git-scm.com), установленная локально, и аккаунт на [GitHub](https://github.com/) или [BitBucket](https://bitbucket.org/).

1. Клонировать репозиторий с домашними заданиями `git clone https://github.com/netology-code/hj-homeworks.git`.
2. Перейти в папку задания `cd hj-homeworks/html-document-structure/slider`.
3. Выполнить задание.
4. Создать репозиторий на [GitHub](https://github.com/) или [BitBucket](https://bitbucket.org/).
5. Добавить репозиторий в проект `git remote add homeworks %repo-url%`, где `%repo-url%` — адрес созданного репозитория.
6. Опубликовать код в репозиторий `homeworks` с помощью команды `git push -u homeworks master`.
7. Прислать ссылку на репозиторий через личный кабинет на сайте [netology.ru](http://netology.ru/).