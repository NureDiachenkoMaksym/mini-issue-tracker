# Mini Issue Tracker — low-fidelity design implementation brief v1.0

## Authority and scope

Product source S1: SD_Spec.docx(2).pdf, sections 1/3/5/8. Include US-01–US-08 only. UX decisions D-01–D-09 were approved by the user on 08 Nov 2026. Assignee is an issue-specific relationship, not a system role. Three fictional team users: Member A, Member B, Lead. This is an editable wireframe design and later a simulated prototype, not an application.

Pre-generation gate satisfied: the user accepted the concrete G2–G4 plan on 08 Nov 2026 with “принимаю”. Proceed with this contract; no repeat plan approval is needed. Actual design/prototype validation remains pending.

## Design/output constraints

Desktop, grayscale, low fidelity, readable hierarchy. One Design page; editable native text/shapes, reusable local controls/rows, Auto Layout where practical, meaningful frame/layer names. Preserve exact surface IDs. Review/source annotations must stay outside product frames in REF-01. Do not create decorative squares, page icon placeholders, checkboxes for row selection, branding or imagery. Use compact role/status examples rather than 16 complete details screens.

## S-01 — Authentication boundary [BR-01; D-02]

Neutral boundary block: Mini Issue Tracker; “Authentication entry — mechanism TBD”. No password, SSO, account registration or real login. Demo start is S-02-A with an already authenticated user.

## S-02 — one Issues List [US-02/05/08; D-01/07]

Header Issues List; Create Issue button; tabs All Issues and Important Issues. Rows: ID, Title, Status, Priority, Assignee if assigned. Show Not Set/Unassigned for absent values; Title opens full details. No search or bulk controls. Create S-02-A All, S-02-B Important, S-02-C zero registered issues with “No issues yet”. These are states of one screen.

Important predicate: priority in {High, Critical} AND status != Closed. Resolved High/Critical remain included. Low/Normal/Not Set and every Closed issue are excluded. All/Important/details use the same record data.

## M-01 — Create Issue modal [US-01; D-01/04/09]

Only Title (required, single line) and Description (required, multiline) are editable issue inputs. Actions Create, Cancel. Default empty inputs; separate missing-Title/missing-Description examples; both missing shows both messages. “Title is required” is source wording; “Description is required” is approved working copy. Invalid submission creates no issue and has no success navigation.

Success: generated ID, status Open, absent priority displayed Not Set, Unassigned, current author, generated creation time. Defaults are not user inputs. Success opens new issue details; Cancel closes modal and preserves the calling list state without creating a record.

## S-03 — Issue Details [US-02–07]

Required data: ID, Title, Description, Status, Priority, Assignee if assigned, Author, Created at. Title and Description read-only after creation. Return to Issues List restores the previous All/Important tab. Keep Assignee/Priority/Status together without a decorative “Control Actions Area” heading.

Assignee single select includes one of Member A/Member B/Lead, not external users. Only Lead may assign/reassign; initially unassigned [US-03; D-04]. Priority selectable values are Low/Normal/High/Critical only; Not Set is absent-value display, not a fifth selectable level or reset [BR-04/05/06; D-03]. Each select has its own adjacent Apply action; changes stay on details [D-06]. Only Lead enables Assignee/Priority; Member sees disabled controls with “Team Lead only” [D-05]. Applying assignment updates status-control availability for the new current assignee.

Only current assignee enables status changes, including for Lead [AC-07.4]. Enabled only when a permitted destination exists. Options are exactly: Open→In Progress; In Progress→Resolved; Resolved→In Progress or Closed. All other transitions prohibited [BR-08.1]. Current status is not a new transition. Closed has no outgoing transition, including for assignee; show “No further status transitions”. Non-assignee sees “Only the current assignee can change status”. Do not infer that Closed disables comments or priority.

Comments: multiline Comment input, Add Comment button, saved text/author/date-time. Show ready, empty validation (“Comment is required”), saved success, failed-save (“Could not save comment”) with no newly saved entry [AC-06.1–5; D-09]. Failures and success are separate fixture states, not a user-facing error simulator.

Canonical details: Lead viewing ISS-003 assigned to Member A; Assignee/Priority enabled; Status disabled. Other contexts belong in REF-01 examples.

## REF-01 — reviewer reference outside product UI

Permission matrix, with authenticated users only:

| Action | Member non-assignee | Member assignee | Lead non-assignee | Lead assignee |
|---|---|---|---|---|
| View/create/comment | Yes | Yes | Yes | Yes |
| Assign/reassign | No | No | Yes | Yes |
| Set/change priority | No | No | Yes | Yes |
| Change status | No | Valid destinations only | No | Valid destinations only |

Show compact component examples for all four contexts and all four current statuses, including In Progress. No assignee means no status change before assignment. Include source labels and prototype transition annotations outside frames. These are not role switcher controls or user-visible technical headings.

## Sample data [D-08]

| ID | Title | Status | Priority | Assignee |
|---|---|---|---|---|
| ISS-001 | Login fails | Open | Critical | Member A |
| ISS-002 | Report opens slowly | In Progress | High | Member B |
| ISS-003 | Export omits a column | Resolved | High | Member A |
| ISS-004 | Broken settings link | Closed | Critical | Member B |
| ISS-005 | Tooltip overlaps label | Open | Normal | Unassigned |
| ISS-006 | Missing help text | Open | Not Set | Unassigned |
| ISS-007 | Save action fails | Resolved | Critical | Lead |
| ISS-008 | Uneven form spacing | In Progress | Low | Member A |

Important shows exactly ISS-001/002/003/007. All eight have Author Lead, Created at 08 Nov 2026, 14:00, Description “Reproduce the problem described in the title and verify the expected behavior.” New record fixture for Member A: ISS-009, “Button does not respond”, “Clicking Save produces no visible result”, Open, Not Set, Unassigned, Author Member A, 08 Nov 2026, 14:10. Sample successful comment: “Reproduced in the test environment”, Member A, 08 Nov 2026, 14:15. These are fictional, fixed demonstration values.

## Navigation intent

Tabs switch list states; Title opens its own record; Create opens overlay; Cancel closes it to the calling state; valid Create opens ISS-009 details; invalid Create stays in validation; Return restores the calling tab. Assignment/priority/status/comment outcomes stay in details. Important after Closed excludes that issue while All retains it. No navigation/hotspots for disabled or invalid actions. At generation stage annotate these intentions only; wire the basic prototype afterwards, without backend or conditional authorization code.

## Canonical frames and compact examples

Six canonical frames: S-01, S-02-A, S-02-B, S-02-C, M-01, S-03. Add two Create validation frames and three comment variants (validation/saved/error); total baseline 11 demonstration frames plus REF-01 and compact role/status component examples. Additional prepared success states may be duplicated only as needed to demonstrate prototype outcomes, not as new product pages.

## Exclusions

No title/description editing after create, delete, attachments, AI, user-visible history, dashboards, analytics, notifications, search, sort, pagination, user administration, multi-assignee, extra metadata or status/priority values, unsupported transitions, invented login mechanism, row-selection/bulk actions, standalone Assignment/Priority/Status/Comments/Important product pages. No real authentication, backend, database or server authorization.

## Acceptance checklist and completion report

Verify all required fields, four priority options plus separate absent state, legal status destinations/permissions, defaults, empty/validation/failure states, exact Important IDs and matching data, readable full details, native editable layers/components, and annotations outside product frames. Do not claim backend authentication, saved data, response time, HTTPS or backup have been tested. Report created frames, actual reusable components, unrepresented requirements, assumptions and limitations in the same response. Preserve a BEFORE_REVIEW file snapshot before corrections. Do not claim full compliance merely because this brief was followed.
