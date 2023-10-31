## Сведения о команде и роль каждого участника команды

- Роль каждого участника команды фронтов распределялась так:
  - Эвелина: создание репо и установка зависимостей; выполнение самых сложных задач; реализация функционала поиска и фильтрации кандидатов; верстка сложных компонентов; валидация форм; страница логина полностью; подключение репо к Vercel; код-ревью других участников.
  - Владимир: верстка отдельных компонентов; использование и стилизация MUI-компонентов; генерация БД для бэка.
  - Анна: коммуникация с бэками и дизайнерами; определение приоритетности задач; распределение на доске github задач по силам каждому из участников; создание моделей сущностей, приходящих с бэка; сборка страниц из компонентов, сделанных Вовой; работа с задачами средней сложности и тех, которые нерационально давать другим участникам.

## Ссылка на Vercel

- https://hakaton-tracker-team-13.vercel.app/applicants

## Инструкция по установке

1. Перейдите в каталог проекта в командной строке (терминале) и убедитесь, что у вас установлен Node.js и npm. Затем выполните команду для установки зависимостей проекта:

### npm install

2. Запустите проект:

### npm run start

3. Сборка для продакшена:

### npm run build

## Стек технологий

- React
- Typescript
- Redux Toolkit
- Material UI

## Описание выполненной работы

- В проекте использовались следующие технологии: TypeScript, React, Redux toolkit, а также библиотека MUI. В процессе работы мы также пользовались канбан-доской Github, чтобы распределять задачи и видеть, что уже сделано, а что сделать еще предстоит. Ближе к дедлайну задачи стали распределять еще и по приоритизации.

- Что сделано:
  Страница кандидатов:

* Подгрузка массива кандидатов с сервера
* Кнопка для добавления/удаления кандидата в/из вакансии
* Поиск по ключевому слову
* Фильтрация кандидатов по query-параметрам
* Модальное окно с полной информацией о кандидате при клике на его карточку

Страница вакансий:

- Подгрузка с сервера активных вакансий, опубликованных компанией
- Кнопка добавления вакансии
- Кнопка редактирования вакансии
- Кнопка уведомлений (колокольчик), при открытии - модальное окно
- При нажатии на карточку вакансии открывается страница с инфо вакансии, также при переключении таба появляется таблица пользователей, добавленных/откликнувшихся в/на вакансию
- Фильтрация кандидатов в вакансии по query-параметрам
- Поиск по ключевому слову
- Модальное окно с полной информацией о кандидате при клике на его строку в таблице
- Если отмечены 2 чекбокса, появляется кнопка "сравнить кандидатов", при нажатии на которую можно сравнить информацию об обоих

Страница логина:

- Полностью реализована, осталось прикрутить апи.
- Страница восстановления пароля
- При успешном восстановлении - сообщение об успешной отправке письма на почту

На страницы, которые не успели реализовать, поставлена заглушка "страница в разработке"
