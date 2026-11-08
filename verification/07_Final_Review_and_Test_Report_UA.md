# Mini Issue Tracker — підсумковий звіт перевірки UX/UI та прототипу

Дата: 08.11.2026. Версія звіту: 1.0. Виконавець ручного проходження: Дяченко Максим Михайлович, група ПЗПІ-23-6. Аналітична перевірка доказів і оформлення: AI-асистент. Незалежна перевірка викладачем або іншим студентом не засвідчена.

## 1. Результат та статус готовності

Для Mini Issue Tracker підготовлено Input Pack, план екранів, контракти, матриці прав/статусів, traceability для 8 US / 33 AC, тестовий план і Figma brief. Користувач погодив UX-рішення та конкретний план до генерації. У Figma створено макети й підготовлені стани; у поточному файлі встановлено 50 прототипних зв’язків і 6 flow starting points. Основні позитивні й негативні маршрути пройдено користувачем під керівництвом асистента.

Статус: основний демонстраційний маршрут перевірено; підготовлено матеріали до фінального оформлення. Це не твердження про повне проходження кожного підвипадку 12 тестів чи усіх 50 зв’язків у Presentation view. Часткові, статичні та неперевірені пункти розділено нижче.

До здавання потрібно зберегти фінальну копію .fig, забезпечити доступ викладачеві та, якщо передбачено форматом захисту, записати відеозвіт. Відомі відхилення від контракту слід показати рецензенту; їх прийняття не вигадувалося.

## 2. Джерела та артефакти

| Позначення | Матеріал | Використання |
|---|---|---|
| S1 | SD_Spec.docx(2).pdf, §§1/3/5/8 | Продуктові вимоги; Release US-01–US-08 |
| M1 | Mini_Issue_Tracker_UX_UI_Methodological_Guide_UA.docx(1).pdf | Процес, контрольні точки, межі доказів |
| G1–G5 | Mini_Issue_Tracker_G1-G5.zip та окремі Markdown-документи | Погоджений план, 33 рядки traceability, 12 протоколів |
| F1 | Mini Issue Tracker — UX_UI.pdf, 12 сторінок | Статичний перегляд початкових wireframes і REF-01; експорт до останніх доданих станів |
| MAP | Вставленный текст(5).txt | JSON із 50 переходами та точними IDs, наданий користувачем із відповіді Figma Agent |
| W1 | MIT_wiring_report.json | Фактична readback-перевірка записаних reactions / starts |
| E1–E7 | Скриншоти користувача й текстові підтвердження | Докази окремих результатів у Present |
| P1 | MIT_Prototype_Wiring.zip, виправлена версія з призначеним Figma ID | Локальний плагін для запису прототипних зв’язків |

Design file: https://www.figma.com/design/sPgIIOhd8e5rJjf5piu6sD/Mini-Issue-Tracker-%E2%80%94-UX-UI?node-id=0-1

Посилання на файл надане користувачем; поточний доступ викладача й самостійне відкриття AI-асистентом після змін не підтверджені. Асистент не запускав живий прототип: дії виконував користувач, асистент оцінював надані докази.

## 3. Підтверджені результати автоматичного запису

У W1 фактично прочитано:

| Поле | Значення |
|---|---|
| phase | applied |
| ok | true |
| total | 50 |
| written | 50 |
| alreadyWired | 50 |
| ready | 0 |
| readBackVerified | 50 |
| errors | порожній список |
| rows | 50, усі ALREADY WIRED |
| pageId | 0:1 |
| livePrototypeTest | NOT RUN — стан на момент створення автоматичного звіту |

Пізніші ручні перевірки наведені в цьому звіті; оригінальний W1 не змінювався і його поле NOT RUN не переписувалось заднім числом.

| Flow | Frame ID | Призначення |
|---|---|---|
| 01 · Main — All Issues | 2:4727 | Списки, перегляд, створення, comments |
| 02 · Lead — Assignment & Priority | 5:1566 | Призначення та priority |
| 03 · Assignee — Status lifecycle | 5:1632 | Дозволені status transitions |
| 04 · Comment failure — All | 5:1031 | Підготовлена помилка comment |
| 05 · Comment failure — Important | 5:1303 | Альтернативний контекст помилки |
| 06 · Empty Create validation | 2:4930 | Порожні Title/Description |

Readback доводить наявність налаштованих зв’язків за таблицею, а не правильність усіх текстів/прав або проходження всіх маршрутів людиною.

## 4. Реєстр фактичних доказів

| Доказ | Файл / повідомлення | Що видно або підтверджено |
|---|---|---|
| E1 | image(20261108-151640).png + W1 | Плагін завершив запис, 50/50 підтверджено, errors=[] |
| E2 | Повідомлення «работает» після All ↔ Important | Користувач підтвердив перемикання вкладок в обидва боки |
| E3 | image(20261108-152001).png + «Всё работает…» | ISS-009: Open, Not Set, Unassigned, author Member A; користувач підтвердив запропонований сценарій Create/Cancel/Return |
| E4 | image(20261108-152117).png | ISS-003: saved comment, text, Member A, час, Comment added |
| E5 | image(20261108-152304).png | Could not save comment, чернетка залишилась, нового saved entry немає |
| E6 | image(20261108-152358).png | ISS-006, Viewer Lead, Assignee Member A, Priority High, Status disabled |
| E7 | image(20261108-152527).png + два повідомлення «работает» | На зображенні Resolved із pending Closed; після окремої вказівки Apply користувач підтвердив Closed, потім Resolved → In Progress. Фінальні Closed/reopen не мають окремих скриншотів |
| E8 | image(20261108-152649).png | Обидва порожні поля Create; Title is required і Description is required; форма залишається відкритою |
| E9 | image(20261108-152727).png | Comment is required, порожнє поле, нового saved entry немає |

Це скриншоти прототипу, надані користувачем, а не скриншоти виконання AI-асистентом. Час зображень у назвах не нормалізувався; дата перевірок — 08.11.2026.

## 5. Результати 12 тестових сценаріїв

PASS (fixture) — продемонстрований конкретний маршрут/результат симуляції. PARTIAL — перевірено частину підвипадків або лише видимий стан. STATIC — оцінка PDF. NOT VERIFIED — доказу недостатньо. Сумарний «12/12 PASS» не ставиться.

| Test ID | Предмет / очікування | Фактичний результат та доказ | Статус / межа |
|---|---|---|---|
| TST-01 | Create із Title/Description; ID/Open/Not Set/author/time | E3: підготовлений ISS-009 відкрився, очікувані defaults видно; користувач підтвердив маршрут | PASS (fixture); генерація ID, справжній час і persistence не перевірені |
| TST-02 | Required поля окремо й разом | E8: обидві помилки й відсутність success; окремі missing-Title/Description приклади є у початковому PDF/REF | PASS для обох empty; окремі одно-польові live маршрути NOT RUN |
| TST-03 | Список і відкриття details із полями | PDF перевірено; E3/E4/E9 показують деталі ISS-009/003; користувач дійшов до ISS-003 зі списку | PASS для підготовлених записів; кожна row title не перевірена |
| TST-04 | Zero registered issues | Початковий PDF містить No issues yet | STATIC; live empty-list flow NOT RUN |
| TST-05 | Lead призначає одного team member; Member не може | E6: Lead, Assignee Member A; на E4/E9 Member assignment disabled | PARTIAL: результат Lead та appearance Member підтверджені; усі options/reassignment/спроба забороненої дії окремо не пройдені |
| TST-06 | Priority лише Lead; 4 рівні й absent Not Set | E6: High для Lead; E3: Not Set; E4/E9: Member control disabled; REF-01 містить 4 options | PARTIAL: prepared High/default/disabled; усі рівні в live menu не перевірені |
| TST-07 | 4 legal transitions; Closed terminal; решта заборонені | E7 та user confirmations: досягнуто Resolved, Apply→Closed і Resolved→In Progress працюють; W1 підтверджує 4 intended Apply routes | PASS для підтверджених маршрутів; повний набір незаконних переходів не перебрано; Closed final — текстове підтвердження користувача |
| TST-08 | Status тільки current assignee, зокрема Lead | E6: Lead non-assignee disabled; E3 unassigned disabled; E4/E9 Member A assignee enabled | PARTIAL: видимі контексти підтверджені; серверні права не перевіряються; всі заборонені натискання не засвідчені |
| TST-09 | Comment empty/success/failure | E4 saved text/author/time; E5 error без saved entry; E9 empty validation | PASS (fixtures) для трьох outcome states; retry і failure-from-Important live NOT RUN |
| TST-10 | Important: High/Critical AND status != Closed | PDF містить лише ISS-001/002/003/007; користувач підтвердив роботу tabs (E2) | STATIC predicate/data + PASS switching; оновлення списку після status/priority change не реалізоване в таблиці |
| TST-11 | Return/tab, Cancel без create, success new details | E2/E3; користувач підтвердив запропонований main Create/Cancel/Return | PASS основного маршруту за user report; Important-origin create/returns і всі 50 links людиною не перевірені |
| TST-12 | Scope, editable native layers, reusable components | PDF без delete/attachments/AI; Agent повідомив 9 masters; розробка/запуск wiring plugin пройшли | STATIC scope; editability/components/Auto Layout не підтверджені незалежним оглядом Layers; НЕ ставити PASS лише зі слів Agent |

Серверна authentication/authorization, persistence після restart/reload, NFR-01 response <1s, NFR-03 HTTPS, NFR-04 backup/restore — NOT VERIFIED BY DESIGN. Відсутність живої БД не є дефектом low-fi завдання.

## 6. Review / Defect / Change Log

| ID / етап | Хто, артефакт і спосіб перевірки | Виявлене / причина | Дія та повторна перевірка | Стан |
|---|---|---|---|---|
| DOC-01 / G1 | AI + підтвердження користувача; Input Pack/D-log | Статуси PROPOSED застаріли після прийняття | Записано підтвердження D-01–D-09 та контроль B; оновлено G1–G5 | Виправлено на рівні документів |
| GAP-01 / F1 | AI переглянув 12-сторінковий PDF | Після Create існувала лише compact ISS-009 card, не full details; prototype ще не з’єднаний | Користувач передав Agent запит; додано S-03-NEW/fixtures; E3 підтверджує відкриття full ISS-009 | Full fixture виправлено |
| GAP-02 / P1 | Agent response і JSON MAP | 50 переходів описані, але не записані | AI підготував локальний plugin; користувач імпортував/запустив; W1 readback 50/50 | Запис виправлено; full live traversal не виконано |
| DEF-01 / plugin | Користувач, image(20261108-150654).png / image(20261108-151427).png | getPluginData відмовив: plugin без Figma-assigned ID; початковий manifest не містив id | Користувач створив плагін у Figma, надав manifest(1).json; AI додав реальний ID; користувач замінив code.js/ui.html у зареєстрованому MIT Prototype Wiring і запустив саме його | W1 та E1 підтверджують виправлення; initial failure до reactions write |
| LIMIT-01 / review | W1 warnings, MAP | NAVIGATE на full-screen modal fixtures замість Open/Close overlay із контракту D-01 | Не виправлено; зафіксовано спрощення, потрібне прийняття reviewer або окрема доробка overlay | Відкрите відхилення |
| LIMIT-02 / prototype | W1 warnings, MAP | Не всі елементи product UI мають clickable outcomes: ISS-003 status, ISS-009 comments; немає post-property/closure lists та repeated create | У звіті позначено межі, додаткових PASS не присвоєно | Відкрите обмеження |
| EVID-01 / Layers | AI, доступні PDF і screenshots | Редагованість, 9 masters і Auto Layout заявлені Agent, незалежного Layers доказу немає | Потрібен огляд у Figma перед остаточною здачею; count не видається за перевірений факт | Доказ очікується |

Зміни зберігали вихідну специфікацію; технічні відмови WebGL/відсутність команд прямого редагування AI були причиною переходу на Figma Agent і локальний plugin, а не дефектами продукту. Облікові дані, паролі або токени не передавались.

## 7. Журнал AI-взаємодій — підсумок

| Етап | Фактичний контекст і запит | Результат / перевірка | Рішення людини |
|---|---|---|---|
| G1 | Повні S1/M1; вибір Mini Issue Tracker | Input Pack, 8 US/33 AC, Q-ID і D-log | Користувач «подтверждаю» |
| G2–G5 | Погоджені D, plan/contracts/traceability | Текстове review й brief | Користувач «принимаю» конкретний план |
| F1 / корекція | Brief переданий користувачем Agent | PDF; AI переглянув усі 12 сторінок; додатковий запит на ISS-009 і outcome frames | Користувач виконав дії у Figma |
| P1 / дані | MAP із 50 source/destination IDs | Плагін, локальні mock tests; це не live Figma tests | Користувач встановив desktop plugin |
| P1 / fix | Повідомлення getPluginData; справжній manifest із ID | Виправлена реєстрація, W1 readback 50/50, 6 starts | Користувач запустив виправлену версію |
| G6 / manual | W1, E1–E9, textual confirmations | Основні маршрути, validation і failure outcomes | Дії виконував користувач; AI оцінював докази |

Дата всіх етапів — 08.11.2026. Точна назва моделі не підтверджена інтерфейсом користувача, тому не вигадується. План і фактичні AI credits Figma не зафіксовані; кількість/вартість генерацій не стверджуються. Це summary log, не дослівний експорт усіх prompt/response; оригінальний діалог залишається джерелом відтворюваності.

## 8. Що залишається для здавання

1. Зберегти поточний source як Mini_Issue_Tracker_FINAL.fig; BEFORE_WIRING уже збережено за підтвердженням користувача.
2. Перевірити Layers: змінність текстів на копії елемента, реальні instances/master components, Auto Layout; зберегти стислий доказ. Не змінювати основні records під час перевірки.
3. Передати reviewer відхилення LIMIT-01/02 та неперевірені підвипадки з таблиці. Якщо потрібен повний scope клікабельних дій або справжні overlay — доробити й повторно перевірити відповідні тести.
4. Перевірити доступ викладача до Design та Present; зафіксувати final версію. Не відкривати публічне редагування заради перегляду.
5. Додати до комплекту G1–G5 цей звіт, оригінальний MIT_wiring_report.json, source .fig і посилання Design/Prototype. Раніше підготовлені тести з NOT RUN читати разом із цим новішим звітом; вони не є актуальним summary результатів.
6. Якщо заочний захист — записати відео: учасники/версії; основний маршрут; джерело→контракт→UI; граничний випадок; фактичні виправлення та обмеження. Викладацьке прийняття й виконане відео не заявляються до підтвердження.

## 9. Підсумкова оцінка

Демонстраційні маршрути основного прототипу працюють за наданими користувачем доказами. 50 native links та 6 flow starts підтверджені readback. Помилки required/comment failure представлені, права Lead non-assignee не підміняються правом статусу, Resolved відрізняється від Closed. Повне покриття текстових AC у плані не дорівнює повній інтерактивній перевірці. Відомі відхилення та відсутні докази явно перелічені; безумовний статус «усе перевірено / повністю готово до здавання» не присвоєно.

## 10. Додаток після одержання FINAL.fig

Користувач надав Mini_Issue_Tracker_FINAL.fig для комплектації GitHub. Перевірено цілісність ZIP-контейнера .fig; наявні canvas.fig, thumbnail.png, meta.json. Файл скопійовано без зміни байтів. Цей контроль цілісності не замінює перевірку editable layers/components/Auto Layout або повторне проходження прототипу. Враховано додаткове указання викладача: матеріали у GitHub, на DL — короткий readme.txt. Репозиторій для публікації: https://github.com/NureDiachenkoMaksym/mini-issue-tracker. Після первинної комплектації користувач надав ПІБ, групу та підтвердив публікацію. Комплект доповнено submission/readme.txt; актуальні ідентифікаційні дані внесено до README й цього звіту. Ця комплектація не змінює наведених вище результатів ручних тестів та відкритих обмежень.
