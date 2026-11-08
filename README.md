# Mini Issue Tracker — UX/UI та клікабельний прототип

Навчальна робота за методичними рекомендаціями «Від специфікації до перевіреного UX/UI-макета». Дата комплектації: **08.11.2026**. Виконавець ручної перевірки: **Максим**; повне ПІБ і групу ще не надано.

Результат — low-fidelity desktop wireframes і симуляційний прототип у Figma. Release scope: **US-01–US-08; 33 змістові критерії приймання**. Backend, справжня authentication і база даних до цього результату не входять.

## Швидкий перегляд

1. [Підсумковий звіт: фактичні тести, дефекти й обмеження](verification/07_Final_Review_and_Test_Report_UA.md).
2. [Design-файл Figma](https://www.figma.com/design/sPgIIOhd8e5rJjf5piu6sD/Mini-Issue-Tracker-%E2%80%94-UX-UI?node-id=0-1). Відкрити **Present** та обрати **01 · Main — All Issues**. Доступ викладачеві перевіряється власником; публічне редагування не потрібне.
3. [Фінальний вихідний файл .fig](figma/Mini_Issue_Tracker_FINAL.fig). Це файл, наданий користувачем після встановлення зв’язків і ручних перевірок; байти збережено без змін.
4. [Оригінальний звіт запису 50 зв’язків](verification/MIT_wiring_report.json) і [покажчик скриншотів](evidence/INDEX.md).

Окреме посилання Present не надано; вигадана URL-адреса прототипу не додається. Прототип відкривається з Design через Present.

## Матеріали

| Шлях | Зміст |
|---|---|
| `sources/` | Вихідна специфікація та методичні рекомендації, без редагування |
| `docs/01_Input_Pack_v0.1.md` | Input Pack + Source Check + погоджений Decision Log; вміст оновлено до 1.0, історичне ім’я збережено |
| `docs/02_Screen_Map_v1.0.md` | Екрани, стани, сценарії, переходи |
| `docs/03_Screen_Contracts_v1.0.md` | Контракти, controls, permission/status matrices, data fixtures |
| `docs/03_Traceability_and_Tests_v1.0.md` | Усі 33 AC та початкові 12 тестових протоколів |
| `docs/04_Plan_Review_v1.0.md` | Review плану, контроль B, ранні документальні правки |
| `docs/05_Figma_Brief_v1.0.md` | Самодостатній контракт генерації Figma |
| `docs/06_Figma_and_Submission_Checklist.md` | Початковий handoff/checklist та AI interaction summary |
| `figma/` | FINAL.fig та історичний PDF макетів **до** останніх outcome frames |
| `verification/` | Актуальний підсумковий звіт і фактичний JSON API readback |
| `evidence/` | Скриншоти перевірок, індекс і короткі текстові підтвердження |
| `tools/prototype-wiring/` | Вихідний код локального плагіна, JSON 50 переходів, mock tests, інструкція |
| `submission/` | Порядок завершення GitHub/DL здавання |

Файли `docs/` фіксують план і стан підготовки на їхньому етапі. Їхні ранні NOT RUN/технічні блокери не є поточним summary: **пізніші результати наведені у verification/07_Final_Review_and_Test_Report_UA.md**. Початковий PDF теж не підміняє FINAL.fig. Не стверджується «12/12 PASS» або повний live-аудит усіх 50 переходів.

## Що реалізовано у прототипі

- All / Important tabs; Important = High або Critical, зі status != Closed; Resolved включено.
- Перегляд ISS-003; підготовлене створення ISS-009, Cancel і Return.
- Comment validation / success / failure fixtures.
- Окремі сценарії Lead assignment/priority та assignee status lifecycle.
- Усього 50 native reactions і 6 flow starts підтверджені API readback. Основні маршрути перевірив користувач; асистент оцінив його screenshots і підтвердження.

## Обмеження, які потрібно знати рецензенту

- Створення працює через Navigate на full-screen modal fixtures, а не справжнє Open/Close overlay з вихідного плану. Це відкрите відхилення; його остаточне прийняття рецензентом не засвідчене.
- Немає outcomes для кожного видимого control: зокрема comments ISS-009, status ISS-003, post-property/closure list snapshots і repeated create.
- Conditions у JSON — пояснення prepared fixture, не runtime-логіка. Ввід тексту симулюється.
- Не доведено backend persistence, server authorization, час відповіді, HTTPS/backup. Редагованість/components/Auto Layout не підтверджені незалежним переглядом Layers; фінальний .fig надано для перевірки.

## Як відтворити

Для звичайного перегляду достатньо відкрити Design → Present або імпортувати фінальний .fig. Повторна установка плагіна для перегляду не потрібна.

Для відтворення запису зв’язків у **початковому файлі з тими самими IDs** див. [README плагіна](tools/prototype-wiring/README_RU.md). Плагін змінює лише reactions/flow starts, не перерисовує UI, не потребує мережі або токенів. Копія файлу може мати інші IDs; тоді перевірка має зупинитись. Не запускати його на невідповідному документі.

Локальна перевірка коду: `node tools/prototype-wiring/test_mock.cjs`. Це mock test, а не Figma user test. Резервна копія BEFORE_WIRING підтверджена користувачем, але не надана в репозиторій; FINAL.fig міститься в комплекті.

## Участь AI та студента

AI підготував вимогові документи, review, запити для Figma Agent, код wiring plugin і звіт. Figma Agent створив wireframes та додаткові стани. Студент погодив рішення, працював у власному Figma, імпортував/запустив плагін, виконав ручні перевірки, надав докази й фінальний .fig. Незалежна перевірка викладачем/іншим студентом не заявляється. Summary журналів наведені у docs/06 та verification/07; повний експорт діалогу в цей комплект не входить.

## Стан здавання

Репозиторій матеріалів: **https://github.com/NureDiachenkoMaksym/mini-issue-tracker**. Файли розміщені по папках, не лише ZIP-архівом. Додаткове указання викладача: всі матеріали — у GitHub, на DL — лише короткий `readme.txt`. У методичці §22 (с.23–24) задано комплект, але конкретні назви папок і шаблон DL-файла не встановлені; наведена структура — організаційне рішення.

Перед здаванням: вписати повне ПІБ/групу, перевірити доступ до Figma, одержати рішення щодо відкритих відхилень і доповнити докази Layers за потреби. Репозиторій створений власником як public; видимість не змінювалась під час завантаження. Для заочного захисту — відеозвіт за методичкою; запис ще не надано. Короткий [readme.txt для DL](submission/readme.txt) містить справжню адресу цього репозиторію.
