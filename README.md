Инструкция по  запуску приложения:
```
npm install
npm start
```
Приложение запускается на localhost:3999

Описание: 

Приложение-редактор, для создания баннеров написано на React Create App.
Имеет форму параметров ввода:
1. Ссылка на которую ведет баннер (при клике на баннер можно будет перейти по данной ссылке)
2. Ссылка на картинку (картинка отобразится в превью баннера)
3. Заголовок (заголовок отобразится в превью баннера)
4. Основной текст (текст отобразится в превью баннера)
5. Выбор цвета заливки картинки и выбор цвета текста (изменения отобразятся в превью баннера)
6. Четыре кнопки: сохранение в png(здесь я пыталась обойти CORS экспортируя картинку в base64, но ошибка все равно осталась - я добавила предупреждение, что картинка не сохранится из-за CORS. Копирование файла в буфер обмена, как html и json. Файлы не будут сохранены, если текст в инпутах слишком длинный. Текст по тех заданию может быть не длиннее 3-х срок(я сделала заголовок - это одна строка и основной текст - это 2 строки. Всего получается 3 строки). Последняя кнопка - очистка формы.

