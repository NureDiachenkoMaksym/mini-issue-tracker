# Mini Issue Tracker — Screen Map v1.0

08.11.2026 • G2 • План для review. S1 = SD_Spec.docx(2).pdf; погоджені D-01–D-09 — Input Pack §8. Усі джерельні вимоги SOURCE, розміщення та взаємодії APPROVED DESIGN. План прийнятий користувачем чату 08.11.2026 («принимаю»); незалежний reviewer не заявлений.

## Inventory та state contracts

| ID / тип | Мета, actors та entry | Visible data / inputs | Actions та умови | Empty/errors / exit | Source |
|---|---|---|---|---|---|
| S-01 / boundary annotation | Позначити обов’язковий authentication; до входу | Mini Issue Tracker; Authentication entry — mechanism TBD; без inputs | Без справжнього login | Demo start у S-02-A задається у Prototype; це не login transition | BR-01; D-02 |
| S-02-A / list state All | Список усіх issues; усі автентифіковані | ID, Title, Status, Priority, Assignee; без search/selection | Title → S-03; Create Issue → M-01; Important → S-02-B | За нуля issues S-02-C; Return з деталей відновлює tab | US-02/05; D-01/07 |
| S-02-B / list state Important | Той самий список із predicate; усі автентифіковані | Ті самі поля; лише High/Critical AND status != Closed | Title, Create Issue, All Issues | Якщо немає important — порожній табличний body; нуль issues загалом окремо S-02-C | US-08; BR-09.1; D-01 |
| S-02-C / empty list state | Немає зареєстрованих issues; усі автентифіковані | Headers і No issues yet; без фіктивних рядків | Create Issue; tabs | Відсутність даних, не loading error | AC-02.5 |
| M-01 / modal | Створення; із будь-якого S-02; усі автентифіковані | Title; Description; обидва required | Create; Cancel | M-01-VT: Title is required; M-01-VD: Description is required; обидва empty → обидві помилки; без issue. Cancel → попередній state; success → S-03 нового issue | US-01; D-01/09 |
| S-03 / details | Перегляд обраного issue; усі автентифіковані | ID, Title, Description, Status, Priority, Assignee, Author, Created at; comments text/author/time | Return; Assignee+Apply і Priority+Apply тільки Lead; Status+Apply лише current assignee і valid transition; Comment+Add Comment для всіх | Not Set/Unassigned як відсутні значення; comment validation/save-error/saved states; успішні зміни залишають S-03 | US-02–07; D-03–09 |
| REF-01 / service annotation | Доказові примітки поза продуктовими frames | Матриці прав/статусів, actor/issue context, sample errors, джерела | Без продуктового перемикача ролей | Не входить до user flow | M1 §8–10 |

Мінімум 4 canonical surfaces: boundary S-01, один list S-02, modal M-01, details S-03. REF-01 — документація. Для показу canonical станів: 6 frames (S-01; S-02-A/B/C; M-01; S-03). Додатково 2 modal validation frames, 3 comment variants, компактні 4 role та 4 status component examples у REF-01. Базове представлення: 11 демонстраційних frames + REF-01; для клікабельних success routes допустимі додаткові state frames, а не нові продуктові екрани. Не робити 16 повних details за role × status.

## Transition table

Точні permitted transitions наведені нижче. Вибір у control до Apply — локальний pending state, без зміни issue. У симуляції зміни — підготовлені приклади, а не backend.

| T-ID | From | Actor | Trigger / precondition | To / visible result | Source |
|---|---|---|---|---|---|
| T-01 | S-02-A | Any authenticated | Important Issues | S-02-B; predicate results | US-08; D-01 |
| T-02 | S-02-B | Any authenticated | All Issues | S-02-A, той самий набір | US-02; D-01 |
| T-03 | S-02-A/B/C | Any authenticated | Create Issue | M-01 поверх поточного списку | US-01; D-01 |
| T-04 | M-01 | Any authenticated | Cancel | Попередній list state; без нового issue | D-01 |
| T-05 | M-01 | Any authenticated | Create; обидва поля filled | S-03 нового issue; ID, Open, Not Set, Unassigned, current author/time | AC-01.1–5; D-01/04 |
| T-06 | M-01 | Any authenticated | Create; missing Title/Description | M-01-VT/VD, помилки; без success | AC-01.2/3; D-09 |
| T-07 | S-02-A/B | Any authenticated | Title існуючого issue | S-03 саме цього ID з повними даними | AC-02.3/4 |
| T-08 | S-03 | Any authenticated | Return to Issues List | Попередній All/Important; актуальні значення зберігаються у задумі | D-07; AC-07.3 |
| T-09 | S-03 | Lead | Select one team member → Apply | S-03; поточний assignee оновлено; status permission перераховано | US-03; D-04/06 |
| T-10 | S-03 | Lead | Low/Normal/High/Critical → Apply | S-03; priority оновлено; Important при поверненні відповідає predicate | AC-04.1/2; D-03/06 |
| T-11 | S-03 Open | Current assignee | In Progress → Apply | S-03 In Progress | BR-08.1; AC-07.3/4 |
| T-12 | S-03 In Progress | Current assignee | Resolved → Apply | S-03 Resolved | BR-08.1; AC-07.3/4 |
| T-13 | S-03 Resolved | Current assignee | Closed → Apply | S-03 Closed; немає next status; issue виключено з Important | BR-08.1; AC-08.4 |
| T-14 | S-03 Resolved | Current assignee | In Progress → Apply | S-03 In Progress; роботу поновлено | BR-08.1 |
| T-15 | S-03 | Any authenticated | Nonempty comment → Add Comment; success | S-03 saved; новий text/author/time | AC-06.1–4 |
| T-16 | S-03 | Any authenticated | Empty comment → Add Comment | S-03 validation; Comment is required; без запису | AC-06.1; D-09 |
| T-17 | S-03 | Any authenticated | Nonempty comment → Add Comment; save failure | S-03 error; Could not save comment; нового saved entry немає | AC-06.5; D-09 |
| T-18 | S-02, zero issues | Any authenticated | Відкрити список у zero dataset | S-02-C; No issues yet | AC-02.5; D-08 |

Заборонені дії не мають transition: Member assignment/priority; non-assignee status; Closed next status; статус поза переліком; будь-який не передбачений BR-08.1 перехід. Disabled controls не мають hotspots.

## User flows

1. Create: S-02-A → T-03 → M-01 → T-06 validation → виправлення полів → T-05 → S-03 нового issue → T-08 → All. Cancel: T-03 → T-04, issue не створено.
2. View: S-02-A → T-07 → S-03 вибраного ID → T-08 → S-02-A.
3. Assignment/Priority: Lead у S-03 → T-09 одного assignee → T-10 priority → T-08; Member бачить disabled controls; спроба не породжує переходу.
4. Status: assignee у S-03 Open → T-11 → In Progress → T-12 → Resolved → T-13 → Closed; для reopen використовують Resolved → T-14 → In Progress. Lead non-assignee залишається у S-03 без status action.
5. Comments: S-03 → T-16 empty validation; окремо T-15 saved з author/time; окремо T-17 error без нового comment. Failure — не success.
6. Important: S-02-A → T-01 → S-02-B з High/Critical Resolved → T-07 → S-03 → T-08 → S-02-B. Після Closed рядок зникає з Important, але лишається в All.
7. Empty: fixture zero dataset → T-18 → S-02-C → T-03 → M-01 → T-05 → S-03.

Не додавати, хоча типово для trackers: search/dashboard; attachments/AI; delete/user-visible history. Тексти Title/Description після створення read-only у цьому scope. Непокритих MVP-сценаріїв на рівні плану не виявлено; докази фактичного UI/прототипу ще відсутні. Authentication та технічні деталі Q-09 залишаються implementation-only.
