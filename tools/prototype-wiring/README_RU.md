# Mini Issue Tracker — автоматическая настройка прототипа

Подготовлено 08.11.2026 для исходного файла sPgIIOhd8e5rJjf5piu6sD.

## Что готово

Плагин записывает 50 native Figma Prototype reactions строго по IDs из connections.json. Типы: On click → Navigate to → Instant. Назначает основной flow start S-02-A (2:4727) и до пяти отдельных стартов для изолированных подготовленных сценариев: assignment/priority, lifecycle статуса, comment failure из All/Important, empty Create validation. Существующие посторонние flow starts сохраняются. Их порядок может измениться, чтобы основной маршрут был первым.

Код не создаёт и не перерисовывает фреймы, не удаляет узлы, не меняет тексты/поля/слои/компоненты. Источник — предоставленные пользователем 50 строк. Плагин не требует пароля, токена или доступа к сети; networkAccess = none.

## Запуск

1. Открой исходный Mini Issue Tracker в настольном приложении Figma. Нужен доступ на редактирование. Копия другого файла может изменить ID и не пройдёт проверку.
2. До запуска сохрани резервную локальную копию .fig либо версию BEFORE_WIRING. Сам файл не дублируй для запуска: IDs из таблицы относятся к исходнику.
3. Распакуй архив в обычную папку. В Figma: Plugins → Development → Import plugin from manifest… → выбери manifest.json из этой папки. Меню также может открываться правой кнопкой на холсте → Plugins / Select plugins.
4. Запусти Mini Issue Tracker — Prototype Wiring из Plugins → Development.
5. Нажми «1. Проверить узлы». При ошибках запись заблокирована; сохрани отчёт и пришли его в чат. Не переименовывай/не пересоздавай узлы, пытаясь обойти проверку.
6. Если проверка успешна, отметь сохранённую резервную копию и нажми «2. Записать 50 переходов».
7. Ожидаемый отчёт: phase = applied, readBackVerified = 50; actualFlowStarts содержит основной 2:4727. Нажми «Скачать отчёт» и пришли MIT_wiring_report.json в чат.
8. Закрой плагин, открой Present и пройди маршруты ниже. API readback подтверждает записанные связи, а не успешное пользовательское прохождение.

### Если импорт требует plugin ID

ID назначается Figma, его нельзя придумывать. Открой Plugins → Development → New plugin, создай локальный Design plugin с Custom UI. В созданной Figma папке замени code.js и ui.html одноимёнными файлами из этого архива; для этого варианта сохраните исходный manifest с настоящим ID. Убедитесь, что в нём main = code.js, ui = ui.html, editorType содержит figma, documentAccess = dynamic-page, networkAccess.allowedDomains = ["none"]. Если имена полей отличаются или меню отсутствует, пришли скрин — код менять наугад не нужно. npm, TypeScript compilation или публикация в Community не нужны: code.js уже готов к запуску.

## Что проверяется до записи

Все 50 source/destination IDs существуют на текущей странице; источники поддерживают setReactionsAsync и находятся внутри ожидаемых экранов; цели — видимые frames с ожидаемыми именами. Источники с disabled/inactive/invisible ancestors и master-компоненты блокируются. Существующий другой ON_CLICK не перезаписывается, остальные trigger types сохраняются. Совпадающий переход повторно не добавляется. Имена controls не используются для поиска замен — только точные ID. Вложенные instance nodes могут иметь дополнительные ограничения Figma: при ошибке записи плагин пытается откатить изменения.

Проверка disabled по именам/visible не заменяет полный аудит прав: вся таблица должна быть корректна, а ролевые сценарии нужно проверить в Present.

## Восстановление

Исходные reactions затрагиваемых узлов и flow starts сохраняются в plugin data текущей страницы до записи. «Восстановить исходные связи» возвращает их. Если связи затрагиваемого узла или starts изменены вручную после установки, восстановление останавливается, чтобы не затереть новую работу. Не удаляйте/не перемещайте затронутые узлы до проверки. При ошибке установки выполняется попытка автоматического отката. Если Figma не разрешит и откат, отчёт явно сообщит об этом; используйте Undo или BEFORE_WIRING, не повторяйте запуск вслепую. Резервная копия .fig нужна независимо от этой функции.

## Маршруты для фактической проверки

- Main: All → Important → All; ISS-003 → details → originating tab.
- Create from All/Important: prepared modal → Cancel; отдельно Create → ISS-009 → post-create list. Новая заявка видна в All и отсутствует в Important, поскольку priority Not Set.
- Comments from both origins: empty → validation; click input → prefilled draft → saved. Отдельные flow starts запускают draft-failure → error → simulated retry → saved; в error нет нового сохранённого comment.
- Assignment/priority flow: Lead назначает Member A и ставит High; Lead status остаётся disabled.
- Status flow: Member A у ISS-001 проходит Open→In Progress→Resolved→Closed; отдельно Resolved→In Progress. Выбор destination в Resolved меняет prepared fixture, а не current status до Apply. Closed не имеет outgoing status hotspot.
- Empty Create: Create → missing Title+Description; Cancel → All без создания.
- Проверить, что disabled controls не кликаются и не имеют унаследованных неожиданных взаимодействий.

## Ограничения покрытия

Это 50 подготовленных переходов, не все возможные действия. Не подготовлены: status для ISS-003, comments для ISS-009, списки после assignment/priority/closure и repeated creation. Для них новых связей нет.

NAVIGATE на modal fixtures соответствует присланной таблице, но отличается от Open overlay/Close overlay в исходном плане. Нужно отметить упрощение в отчёте либо позже отдельно настроить настоящие overlay. Условия condition — пояснения fixture, а не вычисляемая логика. Ввод текстов имитируется подготовленными состояниями. Нет backend/authentication/persistence/server-side permissions.

## Проверка кода

Пройден локальный Node mock test: установка/readback 50, 6 starts, идемпотентность, restore, missing/disabled/conflicting/wrong-file/wrong-name blocks, rollback после simulated failure, защита внешних изменений, сохранение non-click reactions. Команда для разработчика: node test_mock.cjs. Эти проверки не эмулируют все ограничения Figma API, nested instance rules или UI. Реальный запуск в пользовательском Figma-файле: NOT RUN. UI и импорт на Figma Desktop: NOT RUN. Не объявлять тесты прототипа PASS по одним локальным тестам.

Официальные справочники:
- https://developers.figma.com/docs/plugins/api/properties/nodes-reactions/
- https://developers.figma.com/docs/plugins/api/Reaction/
- https://developers.figma.com/docs/plugins/api/Action/
- https://developers.figma.com/docs/plugins/api/properties/PageNode-flowstartingpoints/
- https://developers.figma.com/docs/plugins/manifest/
- https://help.figma.com/hc/en-us/articles/38457121114263-Create-a-Figma-Design-plugin-with-the-Figma-MCP-server-and-agentic-tools
