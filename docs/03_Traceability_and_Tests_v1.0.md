# Traceability та план тестування v1.0

08.11.2026 • Source: S1 §5; UIR — локальні ID, не джерельні AC. Позначення C/A — Screen Contracts. Кожний рядок COVERED лише на рівні текстового плану; UI і prototype ще NOT RUN.

## Повне покриття 33 AC

| Source ID | UIR-ID | Surface/state | Control/annotation | Test | Verification level |
|---|---|---|---|---|---|
| AC-01.1 | UIR-01 | M-01 | C-05/06 | TST-01 | Mockup + prototype; persistence/permissions only implementation |
| AC-01.2 | UIR-02 | M-01-VT | C-05/07; A-05 | TST-02 | Mockup + prototype; persistence/permissions only implementation |
| AC-01.3 | UIR-03 | M-01-VD | C-06/07; A-05 | TST-02 | Mockup + prototype; persistence/permissions only implementation |
| AC-01.4 | UIR-04 | S-03 new | A-01/03 | TST-01 | Mockup + prototype; persistence/permissions only implementation |
| AC-01.5 | UIR-05 | S-03 new | A-01; C-12 | TST-01 | Mockup + prototype; persistence/permissions only implementation |
| AC-02.1 | UIR-06 | S-02-A | A-02 | TST-03 | Mockup + prototype; persistence/permissions only implementation |
| AC-02.2 | UIR-07 | S-02-A/B | A-02 | TST-03 | Mockup + prototype; persistence/permissions only implementation |
| AC-02.3 | UIR-08 | S-02 → S-03 | C-04 | TST-03/11 | Mockup + prototype; persistence/permissions only implementation |
| AC-02.4 | UIR-09 | S-03 | A-03 | TST-03 | Mockup + prototype; persistence/permissions only implementation |
| AC-02.5 | UIR-10 | S-02-C | A-02 empty | TST-04 | Mockup + prototype; persistence/permissions only implementation |
| US-03, AC, пункт 1 | UIR-11 | S-03; REF-01 | C-10/11; A-03/06 | TST-05 | Mockup + prototype; persistence/permissions only implementation |
| US-03, AC, пункт 2 | UIR-12 | S-03; REF-01 | C-10/11; A-03/06 | TST-05 | Mockup + prototype; persistence/permissions only implementation |
| US-03, AC, пункт 3 | UIR-13 | S-03; REF-01 | C-10/11; A-03/06 | TST-05 | Mockup + prototype; persistence/permissions only implementation |
| US-03, AC, пункт 4 | UIR-14 | S-03; REF-01 | C-10/11; A-03/06 | TST-05 | Mockup + prototype; persistence/permissions only implementation |
| AC-04.1 | UIR-15 | S-03; REF-01 | C-12/13; A-06 | TST-06 | Mockup + prototype; persistence/permissions only implementation |
| AC-04.2 | UIR-16 | S-03; REF-01 | C-12/13; A-06 | TST-06 | Mockup + prototype; persistence/permissions only implementation |
| AC-05.1 | UIR-17 | S-02/S-03 | A-02/03; C-14 | TST-03/07 | Mockup + prototype; persistence/permissions only implementation |
| AC-05.2 | UIR-18 | S-03 | A-02/03; C-14 | TST-03/07 | Mockup + prototype; persistence/permissions only implementation |
| AC-05.3 | UIR-19 | S-02-A/B | A-02/03; C-14 | TST-03/07 | Mockup + prototype; persistence/permissions only implementation |
| AC-06.1 | UIR-20 | S-03 comments validation | C-16/17; A-04/05 | TST-09 | Mockup + prototype; persistence/permissions only implementation |
| AC-06.2 | UIR-21 | S-03 comments saved | C-16/17; A-04/05 | TST-09 | Mockup + prototype; persistence/permissions only implementation |
| AC-06.3 | UIR-22 | S-03 comments saved | C-16/17; A-04/05 | TST-09 | Mockup + prototype; persistence/permissions only implementation |
| AC-06.4 | UIR-23 | S-03 comments saved | C-16/17; A-04/05 | TST-09 | Mockup + prototype; persistence/permissions only implementation |
| AC-06.5 | UIR-24 | S-03 comments error | C-16/17; A-04/05 | TST-09 | Mockup + prototype; persistence/permissions only implementation |
| AC-07.1 | UIR-25 | S-03; REF-01 | C-14/15; A-01/06 | TST-01 | Mockup + prototype; persistence/permissions only implementation |
| AC-07.2 | UIR-26 | S-03; REF-01 | C-14/15; A-01/06 | TST-07 | Mockup + prototype; persistence/permissions only implementation |
| AC-07.3 | UIR-27 | S-03; REF-01 | C-14/15; A-01/06 | TST-07/11 | Mockup + prototype; persistence/permissions only implementation |
| AC-07.4 | UIR-28 | S-03; REF-01 | C-14/15; A-01/06 | TST-08 | Mockup + prototype; persistence/permissions only implementation |
| AC-07.5 | UIR-29 | S-03; REF-01 | C-14/15; A-01/06 | TST-07 | Mockup + prototype; persistence/permissions only implementation |
| AC-08.1 | UIR-30 | S-02-B | C-02; A-02 | TST-10/11 | Mockup + prototype; persistence/permissions only implementation |
| AC-08.2 | UIR-31 | S-02-B | C-02; A-02 | TST-10/11 | Mockup + prototype; persistence/permissions only implementation |
| AC-08.3 | UIR-32 | S-02-B | C-02; A-02 | TST-10/11 | Mockup + prototype; persistence/permissions only implementation |
| AC-08.4 | UIR-33 | S-02-B | C-02; A-02 | TST-10/11 | Mockup + prototype; persistence/permissions only implementation |

## Test protocol — усі NOT RUN для макета/прототипу

### TST-01 — Create

- Actor/precondition: Member A; All; поля заповнені.
- Action: Create Issue → Title/Description → Create.
- Expected visible result: ISS-009 details; ID, Open, Not Set, Unassigned, Author Member A, час.
- Source: AC-01.1/4/5; AC-07.1.
- Межі доказу: Не доводить генерацію ID, реальну сесію або persistence.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-02 — Create validation

- Actor/precondition: Member A; M-01.
- Action: Окремо порожній Title, Description, обидва → Create.
- Expected visible result: Помилки біля потрібних полів; немає нового issue/success.
- Source: AC-01.2/3.
- Межі доказу: Не доводить backend validation або whitespace rules.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-03 — List and details

- Actor/precondition: Authenticated; All fixture.
- Action: Переглянути rows; відкрити ISS-003.
- Expected visible result: Row ID/Title/Status/Priority/Assignee; details також Description/Author/Created at.
- Source: AC-02.1–4; AC-05.1–3.
- Межі доказу: Не доводить завантаження з БД.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-04 — Empty

- Actor/precondition: Authenticated; zero dataset.
- Action: Відкрити S-02-C; Create Issue.
- Expected visible result: No issues yet, без rows; modal доступний.
- Source: AC-02.5.
- Межі доказу: Не доводить реальний zero response.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-05 — Assignment

- Actor/precondition: Окремі Member/Lead contexts, ISS-006 unassigned.
- Action: Member: спроба control; Lead: Member B → Apply; далі Lead → Apply.
- Expected visible result: Member disabled/no hotspot; Lead обирає одного з 3 team users; поточний assignee оновлено і status permission змінюється.
- Source: US-03 усі 4 пункти; D-04.
- Межі доказу: Не доводить server authorization або concurrency.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-06 — Priority

- Actor/precondition: Окремі Member/Lead contexts; ISS-006 Not Set.
- Action: Перевірити options; Lead High → Apply; Member спроба.
- Expected visible result: Лише 4 selectable levels; Not Set display-only; Lead оновлює priority; Member disabled.
- Source: AC-04.1/2; BR-04/05.
- Межі доказу: Не доводить persistence/серверні права.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-07 — Status transitions

- Actor/precondition: Member A assignee ISS-001; Lead assignee ISS-007.
- Action: Пройти Open→In Progress→Resolved→Closed; окремо Resolved→In Progress.
- Expected visible result: 4 дозволені маршрути; у Closed немає next action; решта 8 переходів між різними статусами заборонені; поточний status не дія.
- Source: BR-08.1; AC-07.2/3/5.
- Межі доказу: Не доводить збереження після реального reload; довільне forged status — implementation test.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-08 — Status permissions

- Actor/precondition: Member non-assignee; Lead non-assignee ISS-003; unassigned ISS-006; обидва assignee contexts.
- Action: Перевірити C-14/15 і hotspots для кожного context.
- Expected visible result: Non-assignee/Unassigned disabled; assignee лише legal transitions.
- Source: AC-07.4.
- Межі доказу: Не доводить server authorization.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-09 — Comments

- Actor/precondition: Authenticated Member A, S-03.
- Action: Окремо empty submit; nonempty success; nonempty save failure.
- Expected visible result: Validation без entry; saved text/author/time; failure error і немає нового entry.
- Source: AC-06.1–5.
- Межі доказу: Не доводить transactional save; failure fixture не є реальною network failure.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-10 — Important

- Actor/precondition: Authenticated; All 8 fixture issues.
- Action: Important Issues; порівняти IDs; відкрити ISS-003 і повернутися.
- Expected visible result: Лише ISS-001/002/003/007; High/Critical Resolved included; Closed/Low/Normal/Not Set excluded; той самий ID має ті самі дані.
- Source: AC-08.1–4; BR-09.1.
- Межі доказу: Не доводить server filtering.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-11 — Navigation

- Actor/precondition: Authenticated; окремо All/Important.
- Action: Title → details → Return; Create → Cancel; Create success.
- Expected visible result: Return відновлює tab; Cancel не створює issue; success відкриває new details; після Closed issue лишається в All, зникає з Important.
- Source: D-01/07; AC-02.3; AC-08.4.
- Межі доказу: Не доводить динамічну синхронізацію усіх даних у Figma.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

### TST-12 — Scope/editability

- Actor/precondition: Figma editor, усі frames.
- Action: Переглянути Layers; редагувати копію text; components/Auto Layout; переглянути весь scope.
- Expected visible result: Нативні editable layers; реальні reusable components; annotations поза product frames; немає attachments/AI/delete/history/search/bulk/user admin.
- Source: §8; BR-10/11; D-01.
- Межі доказу: Не доводить production application.
- Actual result / evidence / tester / date: ще не зафіксовано.
- Status: NOT RUN.

## Implementation-only backlog

NFR-01 response <1s; NFR-02 authentication/session; server permission checks для assignment/priority/status; AC-01 generated ID/author/time; AC-06 persistence/transactional failure; AC-07.3 persistence after reload; NFR-03 HTTPS; NFR-04 backup/restore. Статус NOT VERIFIED BY DESIGN. Для AC-07.5 forged invalid status тестується реалізація; макет доводить лише options.

## UX-проходження з іншою людиною

Дати без підказок: створити заявку; знайти важливу Resolved; пояснити disabled status для Lead non-assignee. Записати фактичний маршрут, вагання, незрозумілі labels, учасника й дату. Поки NOT RUN; не заповнювати вигаданими відповідями.
