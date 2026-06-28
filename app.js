const CONFIG = {
  spreadsheetId: "1AnyYR0a31nOsHgNP5Cy6q2IkR4tl3yLcSo-QaKoKH8k",
  sheetGid: "37981419",
  fallbackYear: 2026,
};

const SNAPSHOT_ROWS = [
  ["2026-05-11", "Пн", 1, "Рабочая", "6x1000 м по 3:38-3:42, отдых 2 мин. Разминка + заминка", 11, 12, 11, "3:44", 168, "3:43 / 3:40 / 3:38 / 3:43 / 3:50 / 3:52", 8, "", "В плане", 0],
  ["2026-05-12", "Вт", 1, "Лёгкий бег", "Парк легко, горки спокойно", 8, 9, 9, "6:14", 120, "", 9, "Сон хороший, энергия на уровне 8", "В плане", 1],
  ["2026-05-13", "Ср", 1, "Лёгкий бег", "10 км легко + 5x100 м ускорения (СБУ)", 10, 11, 10.1, "5:29", 132, "4 ускорения и СБУ: высокий подъём бедра, захлёст голени, семенящий шаг, многоскоки", 9, "Сон хороший, энергия на уровне 8", "В плане", 0.1],
  ["2026-05-14", "Чт", 1, "Пороговая", "3x2 км по 3:55-4:00, отдых 3 мин", 11, 12, 10.2, "3:53", null, "2x3 км: 3:51/км и 3:55/км", 8, "", "Меньше плана", -0.9],
  ["2026-05-15", "Пт", 1, "Восстановление", "7-8 км очень легко + мобилити (ОФП)", 7, 8, 5.5, "6:27", 120, "", 3, "", "Меньше плана", -1.5],
  ["2026-05-16", "Сб", 1, "Длительная", "16 км легко", 16, 16, 16, "5:33", 134, "", 5, "", "В плане", 0],
  ["2026-05-17", "Вс", 1, "Отдых", "Полный отдых", 0, 0, null, "", null, "", null, "", "", null],
  ["2026-05-18", "Пн", 2, "Лёгкий бег", "7-8 км легко + ОФП 20-25 минут", 7, 8, null, "", null, "", null, "", "", null],
  ["2026-05-19", "Вт", 2, "Лёгкий бег", "8 км легко в парке, горки проходить спокойно", 8, 8, 8.7, "5:26", 132, "", 5, "", "Больше плана", 0.7],
  ["2026-05-20", "Ср", 2, "Рабочая", "6x1000 м по 3:40-3:42/км, отдых 2 мин лёгкой трусцой", 11, 12, 11.9, "3:41", null, "6x1000 м: 3:35 / 3:37 / 3:40 / 3:46 / 3:45 / 3:42", 8, "", "В плане", -0.1],
  ["2026-05-21", "Чт", 2, "Восстановление", "7 км очень легко + СБУ, затем 4x100 м свободные ускорения", 7, 7, 6, "5:44", 129, "СБУ и ускорения по плану", 4, "", "Меньше плана", -1],
  ["2026-05-22", "Пт", 2, "База", "Базовый аэробный бег вместо запланированной пороговой работы", 7, 7, 7, "4:49", 145, "База вместо работы", 6, "", "В плане", 0],
  ["2026-05-23", "Сб", 2, "Пороговая", "3x2 км по 3:52-3:55/км, отдых 2:30-3:00 трусцой", 11, 12, 11.3, "3:49", 146, "3x2 км: 3:49 / 3:49 / 3:50", 9, "", "В плане", 0.3],
  ["2026-05-24", "Вс", 2, "Длительная", "17 км легко, ровно, без ускорения в конце", 17, 17, 15.6, "5:39", 129, "Длительный бег", 9, "", "Меньше плана", -1.4],
  ["2026-05-25", "Пн", 3, "Лёгкий бег", "7-8 км легко + ОФП 20 минут. Спокойно войти в неделю.", 7, 8, null, "", null, "", null, "", "", null],
  ["2026-05-26", "Вт", 3, "Лёгкий бег", "8-9 км легко в парке, горки проходить спокойно", 8, 9, 9.1, "5:09", 134, "Лёгкий бег", 8, "", "Больше плана", 1.1],
  ["2026-05-27", "Ср", 3, "Рабочая", "5x1200 м по 3:42-3:45/км, отдых 2:30 трусцой", 12, 13, 11.3, "3:43", 144, "5x1200 м, средний темп 3:43/км", 8, "", "В плане", -0.7],
  ["2026-05-28", "Чт", 3, "Восстановление", "7-8 км очень легко + СБУ легко", 7, 8, null, "", null, "СБУ легко", null, "", "", null],
  ["2026-05-29", "Пт", 3, "Пороговая", "6 км темпово по 3:55-4:00/км", 11, 12, 12, "3:59", 148, "2 км разминка + 6 км темповая + 4 км заминка", 9, "", "В плане", 0],
  ["2026-05-30", "Сб", 3, "Лёгкий бег", "Выходной или 4-5 км очень легко по самочувствию", 0, 5, null, "", null, "", null, "", "", null],
  ["2026-05-31", "Вс", 3, "Длительная", "17-18 км легко, ровно, без ускорения в конце", 17, 18, null, "", null, "", null, "", "", null],
  ["2026-06-01", "Пн", 4, "Длительная", "Перенесённая длительная за воскресенье. 15-16 км легко, пульс до 135-140", 15, 16, 15.4, "5:18", 134, "Длительный бег", 9, "", "В плане", 0.4],
  ["2026-06-02", "Вт", 4, "Лёгкий бег", "8 км легко. Пульс до 135", 8, 8, 8, "5:21", 130, "Лёгкий восстановительный бег", 9, "", "Больше плана", 0],
  ["2026-06-03", "Ср", 4, "Рабочая", "3x1600 м по 3:45-3:48/км, отдых 3 мин трусцой", 11, 13, 11, "3:38", 149, "4x1600 м: 3:35 / 3:35 / 3:40 / 3:43", 9, "Бежал умеренно тяжело", "Больше плана", 0],
  ["2026-06-04", "Чт", 4, "Восстановление", "7 км восстановительно, очень спокойно. Пульс до 130-135", 6, 7, null, "", null, "", null, "", "", null],
  ["2026-06-05", "Пт", 4, "Пороговая", "2 км разминка + 7 км темпово по 3:55-4:00/км + 2 км заминка", 11, 12, 11, "3:53", 152, "Темповая 7 км за 27:13", 10, "Контролировал усилия", "Отлично", 0],
  ["2026-06-06", "Сб", 4, "Отдых / короткий бег", "Выходной или 5 км очень легко по самочувствию", 0, 5, null, "", null, "", null, "", "", null],
  ["2026-06-07", "Вс", 4, "Длительная", "17 км легко, ровно. Темп примерно 5:05-5:25/км", 16, 17, 16, "5:21", 135, "Длительный бег 16,01 км", 9, "Самочувствие хорошее", "По плану", 0],
  ["2026-06-08", "Пн", 5, "Отдых", "Полный отдых после длительной", 0, 0, null, "", null, "", null, "", "", null],
  ["2026-06-09", "Вт", 5, "Восстановительный", "8 км легко, пульс до 135", 8, 8, 9, "5:16", 135, "Восстановительный бег", 9, "Самочувствие хорошее", "Больше плана", 1],
  ["2026-06-10", "Ср", 5, "Интервальная", "5x1000 м по 3:35-3:38/км, отдых 2 мин трусцой. Разминка и заминка", null, null, 8.8, "5:11", 134, "Базовый бег, интервальная работа перенесена", 8, "Не было свежести в ногах", "По плану", 0],
  ["2026-06-11", "Чт", 5, "Отдых / лёгкий бег", "Отдых или 5 км очень легко по самочувствию", 0, 5, 10.9, "4:30", 154, "Интервальная тренировка 5x1000 м: 3:23 / 3:30 / 3:32 / 3:35 / 3:34", 8, "Умеренно тяжело", "Больше плана", 0],
  ["2026-06-12", "Пт", 5, "Пороговая", "2 км разминка + 8 км по 3:50-3:55/км + 2 км заминка", 12, 12, null, "", null, "", null, "", "", null],
  ["2026-06-13", "Сб", 5, "Отдых", "Полный отдых", 0, 0, 6, "5:55", 130, "Лёгкий ровный бег без ускорений", 9, "Свежесть хорошая", "Больше плана", 1],
  ["2026-06-14", "Вс", 5, "Длительная", "14 км легко, темп 5:05-5:25/км", 14, 14, 11.1, "5:19", 135, "Длительный лёгкий бег", 8, "Колено 2/10 после 11 км", "Меньше плана", -2.9],
  ["2026-06-15", "Пн", 6, "Отдых", "Полный отдых. Следим за коленом. Можно прогулка и лёгкая мобилити без нагрузки.", 0, 0, null, "", null, "Мобилити без нагрузки", null, "", "", null],
  ["2026-06-16", "Вт", 6, "Лёгкий бег", "6-7 км легко, пульс до 130-135. Если колено даёт боль - остановиться", 6, 7, 7.9, "5:29", 130, "Лёгкий бег", 9, "Самочувствие хорошее", "Выполнено", 0.88],
  ["2026-06-17", "Ср", 6, "Темп старта", "2 км разминка + 3 км по темпу старта 3:35-3:38/км + 2 км заминка", 7, 8, 0, "Пропуск", null, "Отмена работы", 8, "Решил не делать темповую из-за колена", "Сохранение здоровья важнее", null],
  ["2026-06-18", "Чт", 6, "Отдых / лёгкий бег", "Отдых или 5 км очень легко по самочувствию", 0, 5, 4, "~5:30", 120, "Лёгкий бег", 7, "Остановился из-за дискомфорта в колене", "Частично выполнено", null],
  ["2026-06-19", "Пт", 6, "Встряска", "4-5 км легко + 4 ускорения по 80-100 м", 4, 5, null, "", null, "", null, "", "", null],
  ["2026-06-20", "Сб", 4, "Старт", "Забег 10 км. Цель - выбежать из 36:00", 10, 12, 10, "3:45", null, "10 км за 37:21, 5 км - 18:26", 8, "Колено не болело", "Выполнено", 0],
  ["2026-06-22", "Пн", 1, "Восстановление", "6 км очень легко. Проверить ноги после старта", 6, 6, 7.04, "5:27", 135, "Восстановительный бег", 9, "Колено не беспокоило", "Выполнено", 1.04],
  ["2026-06-23", "Вт", 1, "Лёгкий бег", "8 км легко + ОФП 15 минут", 8, 8, null, "", null, "ОФП 15 минут", null, "", "", null],
  ["2026-06-24", "Ср", 1, "Порог", "2 км разминка + 3x2 км по 3:55-4:00/км, отдых 2 мин + заминка", 12, 13, 8.16, "5:18", 136, "Лёгкий бег вместо скоростной", 9, "Спокойная неделя без скоростных", "Выполнено", 0.16],
  ["2026-06-25", "Чт", 1, "Восстановление", "8 км легко", 8, 8, null, "", null, "", null, "", "", null],
  ["2026-06-26", "Пт", 1, "Средний бег", "12 км легко-умеренно", 12, 12, null, "", null, "", null, "", "", null],
  ["2026-06-27", "Сб", 1, "Отдых", "Полный отдых", 0, 0, null, "", null, "", null, "", "", null],
  ["2026-06-28", "Вс", 1, "Длительная", "16 км легко, последние 3 км чуть быстрее", 16, 16, null, "", null, "", null, "", "", null],
];

const byId = (id) => document.getElementById(id);
const numberFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 1 });
const dateFormatter = new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "short" });
const fullDateFormatter = new Intl.DateTimeFormat("ru-RU", {
  weekday: "short",
  day: "2-digit",
  month: "long",
});

let state = {
  rows: hydrateSnapshot(),
  selectedDate: null,
  liveLoaded: false,
};

document.addEventListener("DOMContentLoaded", () => {
  const latest = latestDate(state.rows);
  state.selectedDate = dateOnly(latest || new Date());
  byId("datePicker").value = toIsoDate(state.selectedDate);
  byId("datePicker").addEventListener("change", (event) => {
    state.selectedDate = parseIsoDate(event.target.value);
    render();
  });
  byId("refreshButton").addEventListener("click", () => loadLiveData(true));

  render();
  loadLiveData(false);
});

function hydrateSnapshot() {
  return SNAPSHOT_ROWS.map((item) => normalizeRow({
    date: item[0],
    day: item[1],
    planWeek: item[2],
    type: item[3],
    plan: item[4],
    planMin: item[5],
    planMax: item[6],
    fact: item[7],
    pace: item[8],
    pulse: item[9],
    work: item[10],
    score: item[11],
    condition: item[12],
    completion: item[13],
    delta: item[14],
  })).filter((row) => row.date);
}

function normalizeRow(raw) {
  const date = raw.date instanceof Date ? dateOnly(raw.date) : parseDate(raw.date);
  const planFromText = inferPlan(raw.plan);
  const planMin = coerceNumber(raw.planMin);
  const planMax = coerceNumber(raw.planMax);

  return {
    date,
    iso: date ? toIsoDate(date) : "",
    day: clean(raw.day),
    planWeek: clean(raw.planWeek),
    type: clean(raw.type),
    plan: clean(raw.plan),
    planMin: Number.isFinite(planMin) ? planMin : planFromText.min,
    planMax: Number.isFinite(planMax) ? planMax : planFromText.max,
    fact: coerceNumber(raw.fact),
    pace: clean(raw.pace),
    pulse: coerceNumber(raw.pulse),
    work: clean(raw.work),
    score: coerceNumber(raw.score),
    condition: clean(raw.condition),
    completion: clean(raw.completion),
    delta: coerceNumber(raw.delta),
  };
}

function loadLiveData(isManual) {
  setStatus("Пробую обновить данные из Google Sheets...");
  const callback = `runningDashboard${Date.now()}`;
  const script = document.createElement("script");
  let finished = false;

  window[callback] = (response) => {
    finished = true;
    cleanup();
    if (!response || response.status !== "ok" || !response.table) {
      setStatus("Живое чтение недоступно. Использую сохранённый снимок таблицы.");
      return;
    }

    const rows = rowsFromGoogleTable(response.table);
    if (!rows.length) {
      setStatus("Google Sheets ответил, но строки не найдены. Оставил сохранённый снимок.");
      return;
    }

    state.rows = rows;
    state.liveLoaded = true;
    const chosen = state.rows.find((row) => row.iso === toIsoDate(state.selectedDate));
    if (!chosen) {
      state.selectedDate = latestDate(state.rows);
      byId("datePicker").value = toIsoDate(state.selectedDate);
    }
    setStatus(`Данные обновлены из Google Sheets: ${rows.length} строк.`);
    render();
  };

  script.onerror = () => {
    finished = true;
    cleanup();
    setStatus("Google Sheets не отдал публичные данные. Показан сохранённый снимок.");
  };

  const tqx = encodeURIComponent(`out:json;responseHandler:${callback}`);
  const tq = encodeURIComponent("select *");
  script.src = `https://docs.google.com/spreadsheets/d/${CONFIG.spreadsheetId}/gviz/tq?gid=${CONFIG.sheetGid}&headers=1&tqx=${tqx}&tq=${tq}`;
  document.head.appendChild(script);

  window.setTimeout(() => {
    if (finished) return;
    cleanup();
    if (isManual) {
      setStatus("Не получилось быстро обновить Google Sheets. Дашборд работает на сохранённом снимке.");
    } else {
      setStatus("Показан сохранённый снимок. Для живого обновления таблица должна быть доступна по ссылке или опубликована.");
    }
  }, 5000);

  function cleanup() {
    if (script.parentNode) script.parentNode.removeChild(script);
    delete window[callback];
  }
}

function rowsFromGoogleTable(table) {
  const headers = table.cols.map((col) => clean(col.label || col.id));
  const index = (name) => headers.findIndex((header) => header.toLowerCase() === name.toLowerCase());
  const get = (cells, name) => cellValue(cells[index(name)]);

  return table.rows
    .map((row) => {
      const cells = row.c || [];
      return normalizeRow({
        date: get(cells, "Дата"),
        day: get(cells, "День"),
        planWeek: get(cells, "Неделя"),
        type: get(cells, "Тип тренировки"),
        plan: get(cells, "План"),
        planMin: get(cells, "План мин, км"),
        planMax: get(cells, "План макс, км"),
        fact: get(cells, "Факт, км"),
        pace: get(cells, "Средний темп(рабочий)"),
        pulse: get(cells, "Средний пульс(рабочий)"),
        work: get(cells, "Рабочие отрезки"),
        score: get(cells, "Оценка 1–10"),
        condition: get(cells, "Сон/усталость"),
        completion: get(cells, "Выполнение"),
        delta: get(cells, "Отклонение, км"),
      });
    })
    .filter((row) => row.date && row.type);
}

function cellValue(cell) {
  if (!cell) return "";
  if (cell.f !== undefined && cell.f !== null && cell.f !== "") return cell.f;
  return cell.v ?? "";
}

function render() {
  const rows = state.rows.slice().sort((a, b) => a.date - b.date);
  const selected = dateOnly(state.selectedDate || latestDate(rows));
  const dayRow = rows.find((row) => row.iso === toIsoDate(selected));
  const weekStart = startOfWeek(selected);
  const weekEnd = addDays(weekStart, 6);
  const monthStart = new Date(selected.getFullYear(), selected.getMonth(), 1);
  const monthEnd = new Date(selected.getFullYear(), selected.getMonth() + 1, 0);
  const weekRows = rows.filter((row) => inRange(row.date, weekStart, weekEnd));
  const monthRows = rows.filter((row) => inRange(row.date, monthStart, monthEnd));

  byId("selectedRange").textContent = `${formatDate(weekStart)} - ${formatDate(weekEnd)} · ${monthName(selected)}`;
  renderKpis(dayRow, weekRows, monthRows, selected);
  renderToday(dayRow, selected);
  renderWeekBars(weekRows, weekStart);
  renderTrainingList(weekRows);
  renderMonthBars(monthRows);
  renderOfp(monthRows, rows, selected);
}

function renderKpis(dayRow, weekRows, monthRows, selected) {
  const dayTotal = totals(dayRow ? [dayRow] : []);
  const weekTotal = totals(weekRows);
  const monthTotal = totals(monthRows);
  const ofpRows = monthRows.filter(isOfp);
  const ofpDone = ofpRows.filter((row) => isDone(row, selected)).length;

  fillKpi("day", dayTotal);
  fillKpi("week", weekTotal);
  fillKpi("month", monthTotal);

  byId("ofpCount").textContent = `${ofpDone}/${ofpRows.length}`;
  byId("ofpSummary").textContent = "В выбранном месяце";
  byId("ofpMeter").style.width = percent(ofpDone, ofpRows.length);
}

function fillKpi(prefix, total) {
  byId(`${prefix}Fact`).textContent = formatKm(total.fact);
  byId(`${prefix}Plan`).textContent = `План: ${formatPlan(total.planMin, total.planMax)}`;
  byId(`${prefix}Delta`).textContent = total.planMin === null
    ? "Отклонение: нет числового плана"
    : `Отклонение: ${formatSigned(total.fact - total.planMin)} км от минимума`;
  byId(`${prefix}Meter`).style.width = percent(total.fact, total.planMin ?? total.planMax);
}

function renderToday(row, selected) {
  byId("todayTitle").textContent = row ? `${formatFullDate(row.date)}` : `${formatFullDate(selected)}`;
  byId("todayPlanText").textContent = row ? row.plan || "План не заполнен" : "На эту дату в дневнике нет строки.";
  byId("todayType").textContent = row?.type || "-";
  byId("todayFact").textContent = hasFact(row) ? formatKm(row.fact) : "не заполнено";
  byId("todayPace").textContent = row?.pace || "-";
  byId("todayPulse").textContent = Number.isFinite(row?.pulse) ? `${row.pulse}` : "-";
  byId("todayScore").textContent = Number.isFinite(row?.score) ? `${row.score}/10` : "-";
  byId("todayWeek").textContent = row?.planWeek ? `${row.planWeek}` : "-";

  const status = row ? statusFor(row, selected) : "Нет данных";
  const pill = byId("todayStatus");
  pill.textContent = status;
  pill.className = `pill ${statusClass(status)}`;
}

function renderWeekBars(weekRows, weekStart) {
  byId("weekWindow").textContent = `${formatDate(weekStart)} - ${formatDate(addDays(weekStart, 6))}`;
  const byIso = new Map(weekRows.map((row) => [row.iso, row]));
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(weekStart, index);
    return byIso.get(toIsoDate(date)) || {
      date,
      iso: toIsoDate(date),
      day: weekdayShort(date),
      type: "Нет записи",
      planMin: null,
      planMax: null,
      fact: null,
    };
  });
  const scale = Math.max(...days.map((row) => Math.max(row.planMax ?? row.planMin ?? 0, row.fact || 0)), 1);

  byId("weekBars").innerHTML = days.map((row) => {
    const plan = row.planMax ?? row.planMin ?? 0;
    const fact = hasFact(row) ? row.fact : 0;
    return `
      <div class="bar-row">
        <strong>${row.day || weekdayShort(row.date)}</strong>
        <div class="bar-track" title="${escapeHtml(row.type)}">
          <span class="bar-plan" style="width:${percent(plan, scale)}"></span>
          <span class="bar-fact" style="width:${percent(fact, scale)}"></span>
        </div>
        <span>${formatKmShort(fact)}</span>
      </div>
    `;
  }).join("");
}

function renderTrainingList(rows) {
  const total = totals(rows);
  const quality = rows.filter((row) => /рабоч|порог|интервал|темп|старт/i.test(row.type)).length;
  const completed = rows.filter(hasFact).length;
  byId("weekTotals").textContent = `${formatKm(total.fact)} факт · ${completed}/${rows.length} дней заполнено · ${quality} качеств.`;

  byId("trainingList").innerHTML = rows.length
    ? rows.map((row) => trainingRow(row)).join("")
    : `<p class="empty">На выбранной неделе нет строк в дневнике.</p>`;
}

function renderMonthBars(rows) {
  const groups = new Map();
  rows.forEach((row) => {
    const start = startOfWeek(row.date);
    const key = toIsoDate(start);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(row);
  });

  const entries = Array.from(groups.entries()).map(([key, group]) => ({
    key,
    start: parseIsoDate(key),
    end: addDays(parseIsoDate(key), 6),
    total: totals(group),
  }));
  const scale = Math.max(...entries.map((entry) => Math.max(entry.total.planMax || 0, entry.total.fact || 0)), 1);

  byId("monthBars").innerHTML = entries.length
    ? entries.map((entry) => `
      <div class="month-row">
        <strong>${formatDate(entry.start)}</strong>
        <div class="bar-track">
          <span class="bar-plan" style="width:${percent(entry.total.planMax ?? entry.total.planMin ?? 0, scale)}"></span>
          <span class="bar-fact" style="width:${percent(entry.total.fact, scale)}"></span>
        </div>
        <span>${formatKmShort(entry.total.fact)}</span>
      </div>
    `).join("")
    : `<p class="empty">В выбранном месяце нет тренировок.</p>`;
}

function renderOfp(monthRows, allRows, selected) {
  const ofpRows = monthRows.filter(isOfp);
  const next = allRows
    .filter((row) => isOfp(row) && row.date >= selected && !isDone(row, selected))
    .sort((a, b) => a.date - b.date)[0];

  byId("ofpWindow").textContent = monthName(selected);
  byId("ofpNext").textContent = next
    ? `Ближайшая: ${formatDate(next.date)}, ${next.type}`
    : "Ближайшая: нет в плане";

  byId("ofpList").innerHTML = ofpRows.length
    ? ofpRows.map((row) => trainingRow(row, true)).join("")
    : `<p class="empty">В выбранном месяце ОФП, мобилити или СБУ не найдены.</p>`;
}

function trainingRow(row, compact = false) {
  const status = statusFor(row, state.selectedDate);
  const statusHtml = `<span class="pill ${statusClass(status)}">${escapeHtml(status)}</span>`;
  if (compact) {
    return `
      <div class="training-row">
        <strong>${formatDate(row.date)}</strong>
        <strong>${escapeHtml(row.type)}</strong>
        <p>${escapeHtml(row.plan || row.work || "Без описания")}</p>
        ${statusHtml}
      </div>
    `;
  }
  return `
    <div class="training-row">
      <strong>${formatDate(row.date)}</strong>
      <strong>${escapeHtml(row.type)}</strong>
      <p>${escapeHtml(row.plan || "Без описания")}</p>
      <span class="km">${hasFact(row) ? formatKm(row.fact) : formatPlan(row.planMin, row.planMax)}</span>
      ${statusHtml}
    </div>
  `;
}

function totals(rows) {
  const result = rows.reduce((sum, row) => {
    if (Number.isFinite(row.planMin)) sum.planMin += row.planMin;
    if (Number.isFinite(row.planMax)) sum.planMax += row.planMax;
    if (Number.isFinite(row.fact)) sum.fact += row.fact;
    if (Number.isFinite(row.planMin)) sum.planRows += 1;
    return sum;
  }, { planMin: 0, planMax: 0, fact: 0, planRows: 0 });

  return {
    planMin: result.planRows ? round1(result.planMin) : null,
    planMax: result.planRows ? round1(result.planMax) : null,
    fact: round1(result.fact),
  };
}

function statusFor(row, selected) {
  if (!row) return "Нет данных";
  if (row.completion && !/сохранение здоровья/i.test(row.completion)) return row.completion;
  if (!hasFact(row)) {
    return row.date > selected ? "В плане" : "Не заполнено";
  }
  if (row.planMin === 0 && row.planMax === 0 && row.fact > 0) return "Больше плана";
  if (!Number.isFinite(row.planMin)) return "Факт есть";
  if (row.fact < row.planMin) return "Меньше плана";
  if (Number.isFinite(row.planMax) && row.fact > row.planMax) return "Больше плана";
  return "В плане";
}

function statusClass(status) {
  if (/больше|отлично|выполн|по плану|в плане/i.test(status)) return "good";
  if (/меньше|частично|не заполнено/i.test(status)) return "warn";
  if (/пропуск|отмена/i.test(status)) return "bad";
  return "";
}

function isOfp(row) {
  const text = `${row.plan} ${row.work} ${row.condition} ${row.completion}`.toLowerCase();
  return /офп|мобилити|сбу|силов/.test(text);
}

function isDone(row, selected) {
  if (!row) return false;
  if (/выполн|отлично|по плану|в плане/i.test(row.completion) && hasFact(row)) return true;
  if (hasFact(row) && row.fact > 0) return true;
  return false;
}

function hasFact(row) {
  return row && Number.isFinite(row.fact);
}

function inferPlan(text) {
  const value = clean(text).toLowerCase();
  if (!value) return { min: null, max: null };
  if (/полный отдых/.test(value)) return { min: 0, max: 0 };

  const optionalRun = value.match(/(?:отдых|выходной)\s+или\s+(\d+(?:[,.]\d+)?)\s*км/);
  if (optionalRun) return { min: 0, max: coerceNumber(optionalRun[1]) };

  const range = value.match(/(\d+(?:[,.]\d+)?)\s*[–-]\s*(\d+(?:[,.]\d+)?)\s*км/);
  if (range) return { min: coerceNumber(range[1]), max: coerceNumber(range[2]) };

  const kmParts = [...value.matchAll(/(\d+(?:[,.]\d+)?)\s*км(?!\/)/g)].map((match) => coerceNumber(match[1]));
  const valid = kmParts.filter(Number.isFinite);
  if (!valid.length) return { min: null, max: null };
  const total = round1(valid.reduce((sum, item) => sum + item, 0));
  return { min: total, max: total };
}

function coerceNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  const cleaned = String(value)
    .replace(/\s/g, "")
    .replace(",", ".")
    .replace(/[^\d.+-]/g, "");
  if (!cleaned || cleaned === "-" || cleaned === "+") return null;
  const number = Number.parseFloat(cleaned);
  return Number.isFinite(number) ? number : null;
}

function parseDate(value) {
  if (value instanceof Date) return dateOnly(value);
  const text = clean(value);
  if (!text) return null;

  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));

  const googleDate = text.match(/Date\((\d{4}),(\d{1,2}),(\d{1,2})\)/);
  if (googleDate) return new Date(Number(googleDate[1]), Number(googleDate[2]), Number(googleDate[3]));

  const ru = text.match(/(\d{1,2})[./-](\d{1,2})(?:[./-](\d{2,4}))?/);
  if (ru) {
    const year = ru[3]
      ? Number(ru[3].length === 2 ? `20${ru[3]}` : ru[3])
      : CONFIG.fallbackYear;
    return new Date(year, Number(ru[2]) - 1, Number(ru[1]));
  }
  return null;
}

function parseIsoDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dateOnly(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function toIsoDate(date) {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfWeek(date) {
  const result = dateOnly(date);
  const offset = (result.getDay() + 6) % 7;
  result.setDate(result.getDate() - offset);
  return result;
}

function addDays(date, amount) {
  const result = dateOnly(date);
  result.setDate(result.getDate() + amount);
  return result;
}

function inRange(date, start, end) {
  return date >= dateOnly(start) && date <= dateOnly(end);
}

function latestDate(rows) {
  return rows.reduce((latest, row) => (!latest || row.date > latest ? row.date : latest), null);
}

function clean(value) {
  return value === null || value === undefined ? "" : String(value).trim();
}

function round1(value) {
  return Math.round((value + Number.EPSILON) * 10) / 10;
}

function percent(value, total) {
  if (!Number.isFinite(value) || !Number.isFinite(total) || total <= 0) return "0%";
  return `${Math.min(100, Math.max(0, (value / total) * 100))}%`;
}

function formatKm(value) {
  if (!Number.isFinite(value)) return "0 км";
  return `${numberFormatter.format(round1(value))} км`;
}

function formatKmShort(value) {
  if (!Number.isFinite(value) || value === 0) return "0";
  return numberFormatter.format(round1(value));
}

function formatPlan(min, max) {
  if (!Number.isFinite(min) && !Number.isFinite(max)) return "нет числа";
  if (Number.isFinite(min) && Number.isFinite(max) && min !== max) {
    return `${numberFormatter.format(min)}-${numberFormatter.format(max)} км`;
  }
  return `${numberFormatter.format(Number.isFinite(max) ? max : min)} км`;
}

function formatSigned(value) {
  if (!Number.isFinite(value)) return "0";
  const rounded = round1(value);
  return `${rounded > 0 ? "+" : ""}${numberFormatter.format(rounded)}`;
}

function formatDate(date) {
  return dateFormatter.format(date).replace(".", "");
}

function formatFullDate(date) {
  return fullDateFormatter.format(date).replace(".", "");
}

function monthName(date) {
  return new Intl.DateTimeFormat("ru-RU", { month: "long", year: "numeric" }).format(date);
}

function weekdayShort(date) {
  return new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(date).replace(".", "");
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setStatus(message) {
  const status = byId("syncStatus");
  if (status) status.textContent = message;
}
