# Mini Issue Tracker — Screen Contracts v1.0

08.11.2026 • G3 • Контракти для перевірки. Джерела S1 §3/5/8; UX D-01–D-09 погоджені користувачем. T-ID посилаються на 02_Screen_Map_v1.0.md. Контракти не є доказами вже створених макетів.

## Entry та visible data

| Surface | Actors / entry / data contract | States | Incoming / outgoing |
|---|---|---|---|
| S-01 | До authentication; назва і neutral boundary label; inputs відсутні | Mechanism TBD | Немає справжнього authentication transition; demo start S-02-A |
| S-02-A/B | Усі authenticated; issue collection. Кожний рядок ID/Title/Status/Priority, Assignee якщо є; Not Set/Unassigned — погоджене відображення відсутності. Title відкриває повний текст у details | All / Important; дані одного ID узгоджені | T-01/02/07/08/18; T-03 |
| S-02-C | Усі authenticated; issues count = 0; headers, No issues yet | Порожній body, не помилка | T-18/08; T-03 |
| M-01 | Усі authenticated; opened from list; лише Title і Description required. ID/status/priority/assignee/author/time не редагуються | Default, missing Title, missing Description, both empty | T-03; T-04/05/06 |
| S-03 | Усі authenticated; існуючий selected issue. Required display: ID/Title/Description/Status/Priority/Author/Created at; Assignee якщо задано, інакше Unassigned. Not Set — відсутність priority. Comments мають text/author/time; якщо ще немає, entries відсутні | Base, pending selection, changed, comment validation/saved/error; рольові/статусні приклади | T-05/07; T-08–17 |
| REF-01 | Service annotation, не продукт | Матриці й тестові контексти | Немає user navigation |

## Controls

Control-ID локальні й не підміняють джерельні AC. Всі controls видимі за контекстом відповідної surface; role-dependent controls лишаються видимими disabled (D-05). Apply не змінює issue без валідного дозволеного вибору; поточне значення не є новим status transition.

| C-ID | Label / type | Enabled / trigger | Result / T-ID | Source/D |
|---|---|---|---|---|
| C-01 | All Issues / tab | Authenticated; click | All, T-02 | US-02; D-01 |
| C-02 | Important Issues / tab | Authenticated; click | Important, T-01 | US-08; D-01 |
| C-03 | Create Issue / button | Authenticated; click | Overlay, T-03 | BR-02; D-01 |
| C-04 | Issue Title / text link | Existing row; click | Details selected ID, T-07 | AC-02.3 |
| C-05 | Title / single line input | M-01; editable | Local input; required validation | AC-01.1/2 |
| C-06 | Description / multiline input | M-01; editable | Local input; required validation | AC-01.1/3 |
| C-07 | Create / button | Authenticated; click; обов’язкові поля перевіряються | T-05 success або T-06 errors | AC-01.1–5; D-01/09 |
| C-08 | Cancel / button | M-01; click | T-04; без створення | D-01 |
| C-09 | Return to Issues List / link | S-03; click | T-08, попередній tab | D-07 |
| C-10 | Assignee / single select | Лише Lead; options Member A/Member B/Lead; не зовнішні особи | Pending selection, до Apply дані не змінені | US-03, усі 4 пункти; D-04 |
| C-11 | Apply / button біля Assignee | Лише Lead + валідний вибір одного члена | T-09; поточний assignee і permissions оновлені | US-03; D-06 |
| C-12 | Priority / single select | Лише Lead; Low/Normal/High/Critical; Not Set display-only, reset відсутній | Pending selection | AC-04.1/2; BR-04/05; D-03 |
| C-13 | Apply / button біля Priority | Лише Lead + валідний встановлений priority | T-10; нове значення | AC-04.1/2; D-06 |
| C-14 | Status / single select | Current user = current assignee AND є дозволений destination; options лише BR-08.1 | Pending destination; інші/поточний status не пропонуються як transition | BR-07/08.1; AC-07.4/5 |
| C-15 | Apply / button біля Status | Та сама permission + valid destination | T-11/12/13/14; видимий status оновлений | AC-07.3; D-06 |
| C-16 | Comment / multiline input | Усі authenticated, включно з Closed | Local comment text | US-06 |
| C-17 | Add Comment / button | Усі authenticated; click | T-15 saved; T-16 empty; T-17 save failure | AC-06.1–5; D-09 |

Read-only annotations: A-01 = ID/status/author/time/default priority нового issue; A-02 = list row fields; A-03 = details fields; A-04 = saved comment text/author/time; A-05 = error/validation; A-06 = role/status matrix. A-ID — локальні позначення для traceability, не нові controls.

## Permission matrix

| Дія | Member non-assignee | Member assignee | Lead non-assignee | Lead assignee |
|---|---|---|---|---|
| View / Create / Comment | Так | Так | Так | Так |
| Assign / reassign | Ні | Ні | Так | Так |
| Set / change priority | Ні | Ні | Так | Так |
| Change status | Ні | Лише BR-08.1 | Ні | Лише BR-08.1 |

Source: BR-02/06/08, AC-07.4, US-02/03/06; перепризначення D-04. Assignee — issue relationship. No assignee → немає користувача з правом status. У Closed навіть assignee не має наступної status дії; comments/priority автоматично не блокуються.

## Status transition matrix

| Current → target | Open | In Progress | Resolved | Closed |
|---|---|---|---|---|
| Open | Поточний, не дія | Дозволено | Заборонено | Заборонено |
| In Progress | Заборонено | Поточний, не дія | Дозволено | Заборонено |
| Resolved | Заборонено | Дозволено | Поточний, не дія | Дозволено |
| Closed | Заборонено | Заборонено | Заборонено | Поточний, не дія |

Source BR-08.1 + AC-07.4. Кожний дозволений перехід додатково вимагає current assignee. Статус поза цими чотирма значеннями заборонено AC-07.5.

## Important predicate та data fixture

DERIVED з AC-08.1–4 + BR-09/09.1: `priority in {High, Critical} AND status != Closed`.

| Issue ID | Title | Status | Priority | Assignee | У Important |
|---|---|---|---|---|---|
| ISS-001 | Login fails | Open | Critical | Member A | Так |
| ISS-002 | Report opens slowly | In Progress | High | Member B | Так |
| ISS-003 | Export omits a column | Resolved | High | Member A | Так |
| ISS-004 | Broken settings link | Closed | Critical | Member B | Ні |
| ISS-005 | Tooltip overlaps label | Open | Normal | Unassigned | Ні |
| ISS-006 | Missing help text | Open | Not Set | Unassigned | Ні |
| ISS-007 | Save action fails | Resolved | Critical | Lead | Так |
| ISS-008 | Uneven form spacing | In Progress | Low | Member A | Ні |

Sample data D-08, не джерельні вимоги. Для кожного issue Description = «Reproduce the problem described in the title and verify the expected behavior.»; Author = Lead; Created at = 08 Nov 2026, 14:00. Ті самі ID/дані в All/Important/details. Для нового issue fixture ISS-009: Title «Button does not respond», Description «Clicking Save produces no visible result», Open, Not Set, Unassigned, author Member A, Created at 08 Nov 2026, 14:10. Це заданий результат сценарію Member A, а не реальний timestamp/session. Sample comment «Reproduced in the test environment», Member A, 08 Nov 2026, 14:15.

## Default / empty / error contracts

Create: поля порожні; required labels. Missing Title → «Title is required»; missing Description → «Description is required»; обидва empty → обидві помилки. Жодна invalid submission не відкриває success. Cancel не створює issue. Після success defaults A-01 автоматичні.

Comment: ready input; empty submit → «Comment is required», entries unchanged. Save success → A-04. Save failure → «Could not save comment», жодного нового saved entry. Не вигадувати automatic retry або обмеження довжини.

Non-assignee бачить disabled Status із поясненням «Only the current assignee can change status». Member assignment/priority disabled із «Team Lead only». Closed → поточне значення та «No further status transitions». Це робочі пояснювальні labels D-05; права з джерела.

## Verification levels

Макет: fields, labels, default/empty/error, option sets, disabled appearance, compact reference matrix. Прототип: hotspots і prepared transitions, збереження tab через задані маршрути. Реалізація: справжня authentication, server-side authorization, persistence, input hardening, concurrency, network errors, response time, HTTPS, backup/restore. Не ставити PASS implementation-only вимогам за зображенням або Navigate to.
