## Запуск
- установка зависимостей `yarn install` в корне проекта
- запуск дев-сервера `yarn start`
- после запуска, проект будет доступен на [http://localhost:5050/](http://localhost:5050/)
 
 
## Работа
- страница для лэндинга [http://localhost:5050/landing.html](http://localhost:5050/landing.html)
- страница с документацией по сетке [http://localhost:5050/layout-docs.html](http://localhost:5050/layout-docs.html)
- вместо шрифта Gotham, который используется в макете, нужно использовать набор из системных шрифтов. (Он уже добавлен для body в `index.entry.pcss`) 
- не использовать jQuery

## Условия
- адаптивность страницы лэндинга
- подход к адаптивности - desktop-first
- не менять текущую структуру файлов
- использовать только PostCSS
- не использовать сторонние библиотеки для построения лейаута страницы, только [http://localhost:5050/layout-docs.html](http://localhost:5050/layout-docs.html)
- использовать брейкпойнты из `exterrnal-libs/breakpoints/index.css`, пример использования есть в `index.entry.pcss`
- использовать css переменные

## Пожелания
- Описать проблемы с которыми пришлось столкнуться