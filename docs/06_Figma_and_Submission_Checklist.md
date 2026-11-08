# Наступні етапи та підготовка до здавання

08.11.2026. Цей пакет містить G1–G5; він ще не є завершеною роботою. Figma file, editable layers, prototype, tests і human review не підміняються текстовими документами.

## Контроль B перед F1

Контроль B закрито користувачем 08.11.2026 відповіддю «принимаю». Переглянуті матеріали: 02_Screen_Map, 03_Screen_Contracts, 03_Traceability_and_Tests та 04_Plan_Review, особливо Lead non-assignee, High/Resolved, Critical/Closed, no-assignee та Closed. Зафіксувати reviewer/date/version і прийняття плану. D-рішення вже погоджені, повторно їх не погоджувати.

## F1 та F2

У Figma Design створити один файл і одну робочу page. Прикріпити 05_Figma_Brief_v1.0.md до Agent та надіслати launcher нижче лише після контролю B. Це не Figma Make і не код застосунку.

> Use the attached 05_Figma_Brief_v1.0.md as the design contract for Mini Issue Tracker. The developer has accepted G2–G4 only if that acceptance is recorded. If absent, stop. Read the full file. Create its editable low-fidelity native layers and compact examples, exact screen IDs, permissions, transitions and Important rule. Keep review annotations outside product frames. Annotate navigation only; do not implement backend or prototype interactions yet. In the same response report created frames, real components, missing rules and limitations. Do not invent requirements or claim persistence/security tests.

Перевірити Layers/редагування тексту/components; зберегти BEFORE_REVIEW .fig. Корекція лише за фактично виявленими DEF-ID; за ліміту виправити вручну; зберегти AFTER_REVIEW. Не записувати вигадані відповіді Agent.

## P1 — базовий прототип

S-02-A як flow start. All/Important: Navigate to; Create: Open overlay; Cancel: Close overlay; valid Create: details fixture; Title: matching details; Return: calling tab. Окремі prepared detail states для assignee status success та comments success/error. Не додавати hotspots disabled controls. Потрібні actor contexts задавати flow starts/annotations поза product UI, не продуктовим role switcher.

Оскільки звичайний prototype не доводить динамічну умовну логіку, кожний fixture route підписати контекстом і очікуваним результатом. Усі 4 allowed status transitions можна довести compact state examples плюс окремі prepared routes, не 16 повних екранів.

## G6 — докази

Пройти TST-01–12 і заповнити actual/evidence/tester/date/status. Зберегти читабельні PNG потрібних станів та overview; додати посилання на конкретні frames. Перевірити важливі issues і права за матрицями. Знайдені DEF-ID виправити, повторити відповідні тести. Disabled screenshot не є server authorization proof; prototype success не є persistence proof.

## AI interaction log — фактичні записи

| Дата / етап | Контекст / запит | Результат / перевірка | Людське рішення / межі |
|---|---|---|---|
| 08.11.2026 G1 | S1, M1; користувач обрав Mini Issue Tracker | Input Pack; 8 US, 33 AC; source check | Користувач підтвердив D-01–D-09 |
| 08.11.2026 G2/G3 | Input Pack і D-log; продовжити після підтвердження | Screen Map, Contracts, 33 traceability rows, 12 test protocols | Тести UI NOT RUN |
| 08.11.2026 G4/G5 | S1 та план; перевірка scope/прав/переходів/coverage | Plan Review, brief, checklist | AI recommend READY; control B прийнятий користувачем 08.11.2026 |
| 08.11.2026 підготовка Figma | Підключення Figma підтверджено користувачем | Підключення не є доказом створення макетів | F1/P1/G6 ще не виконані |

Інструмент ChatGPT; точна модель не підтверджена інтерфейсом користувача. AI-запити в цьому файлі — стислий опис фактичної взаємодії, не вигадана дослівна стенограма; оригінал — цей чат. Для відтворюваності можна експортувати діалог. Figma plan/credits/режим фіксувати лише якщо їх фактично видно. Автор/група ще не надані.

## Що здати

Input Pack + Source Check; Decision Log; Screen Map/Contracts; Traceability; Figma brief; Figma editable file link з доступом викладачеві; Prototype link + actual test record; Review/Defect/Change logs з доказами правок; AI interaction log. Потрібен відеозвіт для заочного захисту, якщо це ваш формат захисту.

Рекомендована демонстрація: учасники й версії; основний прототипний маршрут; внесок кожного; ланцюжок AC→контракт→макет; індивідуальний граничний кейс; реальний журнал виправлень та межі перевірки. Персональні дані/ролі учасників не вигадувати.

## Поточна готовність

G1 — текст завершено, варіант прийнято. G2–G5 — документи підготовлені й перевірені AI, конкретний план прийнятий користувачем 08.11.2026. F1/F2/P1/G6 — не виконані. Результат не називати повністю готовим до здавання до появи макетів, прототипу й фактичних доказів.

08.11.2026 / F1 attempt: Figma підключена. Команди створення/редагування ще не доступні в поточному сеансі; вебсторінка Login. Жодної генерації, credits usage, Figma file або prototype не підтверджено. Наступна дія: відновити доступ до команд підключеної Figma і виконати F1 за brief, без повторного погодження плану.
