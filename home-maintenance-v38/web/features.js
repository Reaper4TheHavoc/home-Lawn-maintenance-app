(() => {
  "use strict";

  const INVENTORY_KEY = "home-inventory-v1";
  const PROJECTS_KEY = "home-projects-v1";
  const BACKUP_FORMAT = "home-maintenance-backup";
  const APP_VERSION = String(window.HOME_APP_VERSION?.webVersion || 38);

  let inventoryItems = normalizeInventory(loadStoredJSON(INVENTORY_KEY, []));
  let projects = normalizeProjects(loadStoredJSON(PROJECTS_KEY, []));

  function normalizeInventory(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(item => item && typeof item === "object").map(item => ({
      id: Number(item.id) || uniqueId(),
      name: String(item.name || ""),
      type: String(item.type || "Other"),
      room: String(item.room || ""),
      brand: String(item.brand || ""),
      model: String(item.model || ""),
      serial: String(item.serial || ""),
      purchaseDate: String(item.purchaseDate || ""),
      warrantyEnd: String(item.warrantyEnd || ""),
      part: String(item.part || ""),
      manualUrl: String(item.manualUrl || ""),
      receiptUrl: String(item.receiptUrl || ""),
      photo: String(item.photo || ""),
      notes: String(item.notes || ""),
      updatedAt: item.updatedAt || new Date().toISOString()
    }));
  }

  function normalizeProjects(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(item => item && typeof item === "object").map(item => ({
      id: Number(item.id) || uniqueId(),
      name: String(item.name || ""),
      category: String(item.category || "Other"),
      status: String(item.status || "Planning"),
      targetDate: String(item.targetDate || ""),
      budget: Number(item.budget || 0),
      notes: String(item.notes || ""),
      tasks: Array.isArray(item.tasks)
        ? item.tasks.filter(task => task && typeof task === "object").map(task => ({
            text: String(task.text || ""),
            done: !!task.done
          })).filter(task => task.text)
        : [],
      costs: Array.isArray(item.costs)
        ? item.costs.filter(cost => cost && typeof cost === "object").map(cost => ({
            id: Number(cost.id) || uniqueId(),
            amount: Number(cost.amount || 0),
            description: String(cost.description || ""),
            date: cost.date || new Date().toISOString()
          })).filter(cost => Number.isFinite(cost.amount) && cost.amount > 0)
        : [],
      createdAt: item.createdAt || new Date().toISOString(),
      updatedAt: item.updatedAt || new Date().toISOString()
    }));
  }

  function uniqueId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  function persistFeatureData(key, value, statusId = "") {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      if (statusId) setFeatureStatus(statusId, "This browser does not have enough local storage for that change.");
      return false;
    }
  }

  function setFeatureStatus(id, message, clearAfter = 3000) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = message;
    if (message && clearAfter) {
      window.setTimeout(() => {
        if (el.textContent === message) el.textContent = "";
      }, clearAfter);
    }
  }

  function localToday() {
    const now = new Date();
    return now.getFullYear() + "-" +
      String(now.getMonth() + 1).padStart(2, "0") + "-" +
      String(now.getDate()).padStart(2, "0");
  }

  function daysUntilDate(dateValue) {
    if (!dateValue) return null;
    const target = new Date(dateValue + "T12:00:00");
    if (Number.isNaN(target.getTime())) return null;
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    return Math.round((target - today) / 86400000);
  }

  function formatDate(dateValue) {
    if (!dateValue) return "";
    const d = new Date(dateValue + "T12:00:00");
    if (Number.isNaN(d.getTime())) return dateValue;
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  function safeHttpUrl(value) {
    const text = String(value || "").trim();
    if (!text) return "";
    try {
      const url = new URL(text);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch (error) {
      return "";
    }
  }

  function warrantyLabel(dateValue) {
    const days = daysUntilDate(dateValue);
    if (days === null) return "";
    if (days < 0) return `Warranty ended ${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} ago`;
    if (days === 0) return "Warranty ends today";
    if (days <= 60) return `Warranty ends in ${days} day${days === 1 ? "" : "s"}`;
    return `Warranty through ${formatDate(dateValue)}`;
  }

  function clearInventoryForm() {
    const ids = [
      "inventoryEditId","inventoryName","inventoryRoom","inventoryBrand","inventoryModel",
      "inventorySerial","inventoryPurchaseDate","inventoryWarrantyEnd","inventoryPart",
      "inventoryManualUrl","inventoryReceiptUrl","inventoryNotes"
    ];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
    const type = document.getElementById("inventoryType");
    if (type) type.value = "Appliance";
    const photo = document.getElementById("inventoryPhoto");
    if (photo) photo.value = "";
    const saveButton = document.getElementById("inventorySaveButton");
    const cancelButton = document.getElementById("inventoryCancelButton");
    if (saveButton) saveButton.textContent = "Save item";
    if (cancelButton) cancelButton.style.display = "none";
  }

  async function saveInventoryItem() {
    const name = document.getElementById("inventoryName")?.value.trim() || "";
    if (!name) {
      alert("Enter a name for the inventory item.");
      return;
    }

    const editId = Number(document.getElementById("inventoryEditId")?.value || 0);
    const existing = editId ? inventoryItems.find(item => item.id === editId) : null;
    const file = document.getElementById("inventoryPhoto")?.files?.[0];
    let photo = existing?.photo || "";

    if (file) {
      setFeatureStatus("inventoryStatus", "Preparing photo...", 0);
      try {
        photo = await compressImage(file, 700, 0.68);
      } catch (error) {
        setFeatureStatus("inventoryStatus", "That photo could not be processed.");
        return;
      }
    }

    const item = {
      id: existing?.id || uniqueId(),
      name,
      type: document.getElementById("inventoryType")?.value || "Other",
      room: document.getElementById("inventoryRoom")?.value.trim() || "",
      brand: document.getElementById("inventoryBrand")?.value.trim() || "",
      model: document.getElementById("inventoryModel")?.value.trim() || "",
      serial: document.getElementById("inventorySerial")?.value.trim() || "",
      purchaseDate: document.getElementById("inventoryPurchaseDate")?.value || "",
      warrantyEnd: document.getElementById("inventoryWarrantyEnd")?.value || "",
      part: document.getElementById("inventoryPart")?.value.trim() || "",
      manualUrl: safeHttpUrl(document.getElementById("inventoryManualUrl")?.value),
      receiptUrl: safeHttpUrl(document.getElementById("inventoryReceiptUrl")?.value),
      photo,
      notes: document.getElementById("inventoryNotes")?.value.trim() || "",
      updatedAt: new Date().toISOString()
    };

    const previous = inventoryItems;
    inventoryItems = existing
      ? inventoryItems.map(row => row.id === item.id ? item : row)
      : [item, ...inventoryItems];

    if (!persistFeatureData(INVENTORY_KEY, inventoryItems, "inventoryStatus")) {
      inventoryItems = previous;
      return;
    }

    clearInventoryForm();
    renderInventory();
    renderHomeDashboard();
    setFeatureStatus("inventoryStatus", existing ? "Inventory item updated." : "Inventory item saved.");
  }

  function editInventory(id) {
    const item = inventoryItems.find(row => row.id === id);
    if (!item) return;

    const values = {
      inventoryEditId: item.id,
      inventoryName: item.name,
      inventoryType: item.type,
      inventoryRoom: item.room,
      inventoryBrand: item.brand,
      inventoryModel: item.model,
      inventorySerial: item.serial,
      inventoryPurchaseDate: item.purchaseDate,
      inventoryWarrantyEnd: item.warrantyEnd,
      inventoryPart: item.part,
      inventoryManualUrl: item.manualUrl,
      inventoryReceiptUrl: item.receiptUrl,
      inventoryNotes: item.notes
    };

    Object.entries(values).forEach(([idName, value]) => {
      const el = document.getElementById(idName);
      if (el) el.value = value || "";
    });

    const saveButton = document.getElementById("inventorySaveButton");
    const cancelButton = document.getElementById("inventoryCancelButton");
    if (saveButton) saveButton.textContent = "Update item";
    if (cancelButton) cancelButton.style.display = "";
    document.getElementById("inventoryCard")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function cancelInventoryEdit() {
    clearInventoryForm();
    setFeatureStatus("inventoryStatus", "Edit canceled.");
  }

  function deleteInventory(id) {
    const item = inventoryItems.find(row => row.id === id);
    if (!item) return;
    if (!confirm(`Delete "${item.name}" from the home inventory?`)) return;

    inventoryItems = inventoryItems.filter(row => row.id !== id);
    persistFeatureData(INVENTORY_KEY, inventoryItems, "inventoryStatus");
    renderInventory();
    renderHomeDashboard();
  }

  function inventoryField(label, value) {
    if (!value) return "";
    return `
      <div class="record-field">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
    `;
  }

  function renderInventory() {
    const list = document.getElementById("inventoryList");
    if (!list) return;

    const search = (document.getElementById("inventorySearch")?.value || "").trim().toLowerCase();
    const filtered = inventoryItems.filter(item => {
      const haystack = [
        item.name, item.type, item.room, item.brand, item.model, item.serial,
        item.part, item.notes
      ].join(" ").toLowerCase();
      return !search || haystack.includes(search);
    });

    const countChip = document.getElementById("inventoryCountChip");
    if (countChip) {
      countChip.textContent = `${inventoryItems.length} item${inventoryItems.length === 1 ? "" : "s"}`;
    }

    if (!inventoryItems.length) {
      list.innerHTML = '<p class="small">No inventory items yet. Add your major appliances and home systems first.</p>';
      return;
    }

    if (!filtered.length) {
      list.innerHTML = '<p class="small">No inventory items match that search.</p>';
      return;
    }

    list.innerHTML = filtered.map(item => {
      const warrantyDays = daysUntilDate(item.warrantyEnd);
      const warranty = warrantyLabel(item.warrantyEnd);
      const warrantyClass = warrantyDays !== null && warrantyDays <= 60 && warrantyDays >= 0 ? "due" : "";
      const manualUrl = safeHttpUrl(item.manualUrl);
      const receiptUrl = safeHttpUrl(item.receiptUrl);

      return `
        <div class="record-card" data-search-title="${escapeHtml([
          item.name, item.type, item.room, item.brand, item.model, item.serial, item.part
        ].filter(Boolean).join(" "))}">
          <div class="record-card-header">
            <div>
              <strong>${escapeHtml(item.name)}</strong>
              <div class="reminder-meta">
                ${escapeHtml(item.type)}${item.room ? " • " + escapeHtml(item.room) : ""}
              </div>
              <div class="chip-row">
                ${item.brand ? `<span class="chip">${escapeHtml(item.brand)}</span>` : ""}
                ${warranty ? `<span class="reminder-pill ${warrantyClass}">${escapeHtml(warranty)}</span>` : ""}
              </div>
            </div>
            ${item.photo ? `<img class="inventory-photo" src="${item.photo}" alt="${escapeHtml(item.name)} reference photo" />` : ""}
          </div>

          <div class="record-card-body">
            <div class="record-grid">
              ${inventoryField("Model", item.model)}
              ${inventoryField("Serial", item.serial)}
              ${inventoryField("Purchase / install", formatDate(item.purchaseDate))}
              ${inventoryField("Warranty ends", formatDate(item.warrantyEnd))}
              ${inventoryField("Filter / part", item.part)}
            </div>

            ${manualUrl ? `<a class="record-link" href="${escapeHtml(manualUrl)}" target="_blank" rel="noopener noreferrer">Open manual ↗</a>` : ""}
            ${receiptUrl ? `<a class="record-link" href="${escapeHtml(receiptUrl)}" target="_blank" rel="noopener noreferrer">Open receipt / warranty ↗</a>` : ""}
            ${item.notes ? `<p class="small" style="margin-bottom:0;">${escapeHtml(item.notes)}</p>` : ""}

            <div class="button-row">
              <button class="secondary" onclick="editInventory(${item.id})">Edit</button>
              <button class="danger-btn" onclick="deleteInventory(${item.id})">Delete</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  function clearProjectForm() {
    const ids = ["projectEditId","projectName","projectTargetDate","projectBudget","projectTasks","projectNotes"];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
    const category = document.getElementById("projectCategory");
    const status = document.getElementById("projectStatus");
    if (category) category.value = "Repair";
    if (status) status.value = "Planning";

    const saveButton = document.getElementById("projectSaveButton");
    const cancelButton = document.getElementById("projectCancelButton");
    if (saveButton) saveButton.textContent = "Save project";
    if (cancelButton) cancelButton.style.display = "none";
  }

  function saveProject() {
    const name = document.getElementById("projectName")?.value.trim() || "";
    if (!name) {
      alert("Enter a project name.");
      return;
    }

    const editId = Number(document.getElementById("projectEditId")?.value || 0);
    const existing = editId ? projects.find(project => project.id === editId) : null;
    const taskLines = (document.getElementById("projectTasks")?.value || "")
      .split(/\r?\n/)
      .map(text => text.trim())
      .filter(Boolean);

    const existingTaskState = new Map((existing?.tasks || []).map(task => [task.text, task.done]));
    const tasks = taskLines.map(text => ({
      text,
      done: existingTaskState.get(text) || false
    }));

    const project = {
      id: existing?.id || uniqueId(),
      name,
      category: document.getElementById("projectCategory")?.value || "Other",
      status: document.getElementById("projectStatus")?.value || "Planning",
      targetDate: document.getElementById("projectTargetDate")?.value || "",
      budget: Math.max(0, Number(document.getElementById("projectBudget")?.value || 0)),
      notes: document.getElementById("projectNotes")?.value.trim() || "",
      tasks,
      costs: existing?.costs || [],
      createdAt: existing?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const previous = projects;
    projects = existing
      ? projects.map(row => row.id === project.id ? project : row)
      : [project, ...projects];

    if (!persistFeatureData(PROJECTS_KEY, projects, "projectStatusMessage")) {
      projects = previous;
      return;
    }

    clearProjectForm();
    renderProjects();
    renderHomeDashboard();
    setFeatureStatus("projectStatusMessage", existing ? "Project updated." : "Project saved.");
  }

  function editProject(id) {
    const project = projects.find(row => row.id === id);
    if (!project) return;

    const values = {
      projectEditId: project.id,
      projectName: project.name,
      projectCategory: project.category,
      projectStatus: project.status,
      projectTargetDate: project.targetDate,
      projectBudget: project.budget || "",
      projectTasks: project.tasks.map(task => task.text).join("\n"),
      projectNotes: project.notes
    };

    Object.entries(values).forEach(([idName, value]) => {
      const el = document.getElementById(idName);
      if (el) el.value = value;
    });

    const saveButton = document.getElementById("projectSaveButton");
    const cancelButton = document.getElementById("projectCancelButton");
    if (saveButton) saveButton.textContent = "Update project";
    if (cancelButton) cancelButton.style.display = "";

    document.getElementById("projectsCard")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function cancelProjectEdit() {
    clearProjectForm();
    setFeatureStatus("projectStatusMessage", "Edit canceled.");
  }

  function deleteProject(id) {
    const project = projects.find(row => row.id === id);
    if (!project) return;
    if (!confirm(`Delete the project "${project.name}"?`)) return;

    projects = projects.filter(row => row.id !== id);
    persistFeatureData(PROJECTS_KEY, projects, "projectStatusMessage");
    renderProjects();
    renderHomeDashboard();
  }

  function toggleProjectTask(projectId, taskIndex) {
    projects = projects.map(project => {
      if (project.id !== projectId) return project;
      const tasks = project.tasks.map((task, index) =>
        index === taskIndex ? { ...task, done: !task.done } : task
      );
      return { ...project, tasks, updatedAt: new Date().toISOString() };
    });
    persistFeatureData(PROJECTS_KEY, projects);
    renderProjects();
    renderHomeDashboard();
  }

  function setProjectStatus(projectId, status) {
    projects = projects.map(project =>
      project.id === projectId
        ? { ...project, status, updatedAt: new Date().toISOString() }
        : project
    );
    persistFeatureData(PROJECTS_KEY, projects);
    renderProjects();
    renderHomeDashboard();
  }

  function addProjectCost(projectId) {
    const project = projects.find(row => row.id === projectId);
    if (!project) return;

    const rawAmount = prompt(`Add a cost for "${project.name}"\n\nAmount:`);
    if (rawAmount === null) return;
    const amount = Number(String(rawAmount).replace(/[$,\s]/g, ""));
    if (!Number.isFinite(amount) || amount <= 0) {
      alert("Enter a valid amount greater than zero.");
      return;
    }

    const description = (prompt("What was the cost for? (optional)") || "").trim();
    const cost = {
      id: uniqueId(),
      amount,
      description,
      date: new Date().toISOString()
    };

    projects = projects.map(row =>
      row.id === projectId
        ? { ...row, costs: [...row.costs, cost], updatedAt: new Date().toISOString() }
        : row
    );
    persistFeatureData(PROJECTS_KEY, projects, "projectStatusMessage");
    renderProjects();
    renderHomeDashboard();

    if (confirm("Also add this project cost to Home Upkeep Spending for this month?")) {
      const descriptionInput = document.getElementById("expenseDescription");
      const categoryInput = document.getElementById("expenseCategory");
      const amountInput = document.getElementById("expenseAmount");

      if (descriptionInput && categoryInput && amountInput && typeof addExpense === "function") {
        descriptionInput.value = `Project: ${project.name}${description ? " — " + description : ""}`;
        categoryInput.value = project.category === "Repair" ? "Repair" : "Maintenance";
        amountInput.value = String(amount);
        addExpense();
        renderHomeDashboard();
      }
    }
  }

  function deleteProjectCost(projectId, costId) {
    projects = projects.map(project =>
      project.id === projectId
        ? { ...project, costs: project.costs.filter(cost => cost.id !== costId), updatedAt: new Date().toISOString() }
        : project
    );
    persistFeatureData(PROJECTS_KEY, projects);
    renderProjects();
    renderHomeDashboard();
  }

  function projectTargetLabel(project) {
    if (!project.targetDate) return "";
    if (project.status === "Complete") return `Completed project • target was ${formatDate(project.targetDate)}`;

    const days = daysUntilDate(project.targetDate);
    if (days === null) return "";
    if (days < 0) return `${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} past target`;
    if (days === 0) return "Target is today";
    return `Target in ${days} day${days === 1 ? "" : "s"}`;
  }

  function renderProjects() {
    const list = document.getElementById("projectList");
    if (!list) return;

    const activeCount = projects.filter(project => project.status !== "Complete").length;
    const countChip = document.getElementById("projectCountChip");
    if (countChip) countChip.textContent = `${activeCount} active`;

    if (!projects.length) {
      list.innerHTML = '<p class="small">No projects yet. Add a repair, upgrade, or renovation you want to plan.</p>';
      return;
    }

    const statusOrder = {"In progress": 0, "Planning": 1, "Waiting": 2, "Complete": 3};
    list.innerHTML = [...projects]
      .sort((a, b) => (statusOrder[a.status] ?? 9) - (statusOrder[b.status] ?? 9))
      .map(project => {
        const spent = project.costs.reduce((sum, cost) => sum + Number(cost.amount || 0), 0);
        const remaining = project.budget - spent;
        const doneTasks = project.tasks.filter(task => task.done).length;
        const taskPct = project.tasks.length ? Math.round(doneTasks / project.tasks.length * 100) : 0;
        const targetLabel = projectTargetLabel(project);
        const targetDays = project.targetDate ? daysUntilDate(project.targetDate) : null;
        const targetClass = project.status !== "Complete" && targetDays !== null && targetDays < 0 ? "due" : "";

        return `
          <div class="record-card" data-search-title="${escapeHtml([
            project.name, project.category, project.status, project.notes,
            ...project.tasks.map(task => task.text)
          ].join(" "))}">
            <div class="record-card-header">
              <div>
                <strong>${escapeHtml(project.name)}</strong>
                <div class="reminder-meta">${escapeHtml(project.category)}</div>
                <div class="project-summary-line">
                  <span class="chip">${escapeHtml(project.status)}</span>
                  ${targetLabel ? `<span class="reminder-pill ${targetClass}">${escapeHtml(targetLabel)}</span>` : ""}
                </div>
              </div>
            </div>

            <div class="record-card-body">
              <div class="record-grid">
                ${inventoryField("Budget", project.budget ? formatMoney(project.budget) : "Not set")}
                ${inventoryField("Spent", formatMoney(spent))}
                ${inventoryField("Remaining", project.budget ? formatMoney(remaining) : "—")}
                ${inventoryField("Target date", formatDate(project.targetDate) || "Not set")}
              </div>

              ${project.tasks.length ? `
                <div class="project-progress" aria-label="${taskPct}% of project tasks complete">
                  <div style="width:${taskPct}%"></div>
                </div>
                <div class="reminder-meta" style="margin-top:5px;">${doneTasks} of ${project.tasks.length} tasks complete</div>
                <div class="project-task-list">
                  ${project.tasks.map((task, index) => `
                    <label class="project-task ${task.done ? "done" : ""}">
                      <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleProjectTask(${project.id}, ${index})" />
                      <span>${escapeHtml(task.text)}</span>
                    </label>
                  `).join("")}
                </div>
              ` : ""}

              ${project.notes ? `<p class="small">${escapeHtml(project.notes)}</p>` : ""}

              ${project.costs.length ? `
                <div style="margin-top:12px;">
                  <strong>Project costs</strong>
                  ${[...project.costs].reverse().map(cost => `
                    <div class="project-cost-row">
                      <span>${escapeHtml(cost.description || new Date(cost.date).toLocaleDateString())}</span>
                      <span>
                        <strong style="display:inline;">${formatMoney(cost.amount)}</strong>
                        <button class="danger-btn" style="min-height:auto;padding:4px 7px;margin-left:5px;" onclick="deleteProjectCost(${project.id}, ${cost.id})" aria-label="Delete project cost">×</button>
                      </span>
                    </div>
                  `).join("")}
                </div>
              ` : ""}

              <div class="button-row">
                <button class="secondary" onclick="addProjectCost(${project.id})">Add cost</button>
                ${project.status !== "Complete"
                  ? `<button class="secondary" onclick="setProjectStatus(${project.id}, 'Complete')">Mark complete</button>`
                  : `<button class="secondary" onclick="setProjectStatus(${project.id}, 'In progress')">Reopen</button>`}
                <button class="secondary" onclick="editProject(${project.id})">Edit</button>
                <button class="danger-btn" onclick="deleteProject(${project.id})">Delete</button>
              </div>
            </div>
          </div>
        `;
      }).join("");
  }

  function scheduleDueStats() {
    const rows = loadStoredJSON("maintenance-schedule", []);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let dueSoon = 0;
    let overdue = 0;

    rows.forEach(item => {
      if (!item?.lastDone || !Number(item.interval)) return;
      const due = new Date(item.lastDone + "T12:00:00");
      due.setDate(due.getDate() + Number(item.interval));
      due.setHours(0, 0, 0, 0);
      const diff = Math.round((due - today) / 86400000);
      if (diff < 0) overdue += 1;
      else if (diff <= 7) dueSoon += 1;
    });

    return { dueSoon, overdue };
  }

  function spendingStats() {
    const now = new Date();
    const monthKey = "maintenance-expenses-" + now.getFullYear() + "-" +
      String(now.getMonth() + 1).padStart(2, "0");
    const currentRows = loadStoredJSON(monthKey, []);
    const monthTotal = currentRows.reduce((sum, row) => sum + Number(row.amount || 0), 0);

    const prefix = "maintenance-expenses-" + now.getFullYear() + "-";
    let yearTotal = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(prefix)) continue;
      const rows = loadStoredJSON(key, []);
      yearTotal += rows.reduce((sum, row) => sum + Number(row.amount || 0), 0);
    }
    return { monthTotal, yearTotal };
  }

  function taskProgress(selector) {
    const tasks = [...document.querySelectorAll(selector)];
    if (!tasks.length) return 0;
    const done = tasks.filter(task => task.checked).length;
    return Math.round(done / tasks.length * 100);
  }

  function renderHomeDashboard() {
    const progress = taskProgress(".home-task");
    const dueStats = scheduleDueStats();
    const spend = spendingStats();
    const activeProjects = projects.filter(project => project.status !== "Complete");
    const projectOverdue = activeProjects.filter(project => {
      const days = daysUntilDate(project.targetDate);
      return days !== null && days < 0;
    }).length;

    const warrantySoon = inventoryItems.filter(item => {
      const days = daysUntilDate(item.warrantyEnd);
      return days !== null && days >= 0 && days <= 60;
    });

    const values = {
      dashboardHomeProgress: `${progress}%`,
      dashboardDueCount: `${dueStats.dueSoon} / ${dueStats.overdue}`,
      dashboardInventoryCount: String(inventoryItems.length),
      dashboardProjectCount: String(activeProjects.length),
      dashboardMonthSpend: formatMoney(spend.monthTotal),
      dashboardYearSpend: formatMoney(spend.yearTotal)
    };

    Object.entries(values).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    });

    const chip = document.getElementById("dashboardHealthChip");
    const alertBox = document.getElementById("dashboardAlerts");
    if (!chip || !alertBox) return;

    const alerts = [];
    if (dueStats.overdue) {
      alerts.push({
        attention: true,
        text: `${dueStats.overdue} maintenance item${dueStats.overdue === 1 ? " is" : "s are"} overdue.`
      });
    }
    if (dueStats.dueSoon) {
      alerts.push({
        attention: false,
        text: `${dueStats.dueSoon} maintenance item${dueStats.dueSoon === 1 ? " is" : "s are"} due within 7 days.`
      });
    }
    if (warrantySoon.length) {
      alerts.push({
        attention: true,
        text: `${warrantySoon.length} warranty${warrantySoon.length === 1 ? "" : "ies"} end within 60 days.`
      });
    }
    if (projectOverdue) {
      alerts.push({
        attention: true,
        text: `${projectOverdue} active project${projectOverdue === 1 ? " is" : "s are"} past the target date.`
      });
    }

    const needsAttention = dueStats.overdue > 0 || warrantySoon.length > 0 || projectOverdue > 0;
    if (needsAttention) chip.textContent = "Needs attention";
    else if (dueStats.dueSoon > 0 || activeProjects.length > 0) chip.textContent = "Things in motion";
    else chip.textContent = "Looking good";

    alertBox.innerHTML = alerts.length
      ? alerts.slice(0, 4).map(alert => `
          <div class="dashboard-alert ${alert.attention ? "attention" : ""}">${escapeHtml(alert.text)}</div>
        `).join("")
      : "";
  }

  function scrollToDashboardTarget(id) {
    const target = document.getElementById(id);
    if (!target) return;

    const parentTab = target.closest(".tab");
    if (parentTab && !parentTab.classList.contains("active")) {
      navigateToTab(parentTab.id);
      window.setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openHomeManagementSection(id) {
    navigateToTab("moreTab");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  function snapshotLocalStorage() {
    const storage = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) storage[key] = localStorage.getItem(key);
    }
    return storage;
  }

  function exportHomeBackup() {
    const payload = {
      format: BACKUP_FORMAT,
      backupVersion: 1,
      appVersion: APP_VERSION,
      exportedAt: new Date().toISOString(),
      storage: snapshotLocalStorage()
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `home-maintenance-backup-${localToday()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setFeatureStatus("backupStatus", "Backup file created. Save it somewhere you can find later.");
  }

  async function importHomeBackup() {
    const input = document.getElementById("backupImportFile");
    const file = input?.files?.[0];
    if (!file) {
      alert("Choose a backup JSON file first.");
      return;
    }

    setFeatureStatus("backupStatus", "Checking backup...", 0);

    try {
      const text = await file.text();
      const payload = JSON.parse(text);
      if (!payload || payload.format !== BACKUP_FORMAT || typeof payload.storage !== "object" || Array.isArray(payload.storage)) {
        throw new Error("Invalid backup format");
      }

      const entries = Object.entries(payload.storage);
      if (!entries.every(([key, value]) => typeof key === "string" && (typeof value === "string" || value === null))) {
        throw new Error("Invalid backup contents");
      }

      const confirmed = confirm(
        `Restore this backup from ${payload.exportedAt ? new Date(payload.exportedAt).toLocaleString() : "an earlier export"}?\n\n` +
        "This replaces the data currently saved by this app in this browser."
      );
      if (!confirmed) {
        setFeatureStatus("backupStatus", "Restore canceled.");
        return;
      }

      const previous = snapshotLocalStorage();

      try {
        localStorage.clear();
        entries.forEach(([key, value]) => {
          if (value !== null) localStorage.setItem(key, value);
        });
      } catch (restoreError) {
        localStorage.clear();
        Object.entries(previous).forEach(([key, value]) => localStorage.setItem(key, value));
        throw new Error("The backup could not fit in this browser's local storage.");
      }

      setFeatureStatus("backupStatus", "Backup restored. Reloading the app...", 0);
      window.setTimeout(() => location.reload(), 500);
    } catch (error) {
      setFeatureStatus(
        "backupStatus",
        error?.message?.includes("local storage")
          ? error.message
          : "That file is not a valid Home Maintenance backup."
      );
    }
  }

  function initializeValueFeatures() {
    renderInventory();
    renderProjects();
    renderHomeDashboard();

    document.querySelectorAll('.nav-btn[data-target="maintenance"]').forEach(button => {
      button.addEventListener("click", () => window.setTimeout(renderHomeDashboard, 50));
    });

    document.addEventListener("change", event => {
      if (event.target?.matches?.(".home-task, .seasonal-task")) {
        window.setTimeout(renderHomeDashboard, 0);
      }
    });

    window.addEventListener("storage", () => {
      inventoryItems = normalizeInventory(loadStoredJSON(INVENTORY_KEY, []));
      projects = normalizeProjects(loadStoredJSON(PROJECTS_KEY, []));
      renderInventory();
      renderProjects();
      renderHomeDashboard();
    });
  }

  Object.assign(window, {
    saveInventoryItem,
    editInventory,
    cancelInventoryEdit,
    deleteInventory,
    renderInventory,
    saveProject,
    editProject,
    cancelProjectEdit,
    deleteProject,
    toggleProjectTask,
    setProjectStatus,
    addProjectCost,
    deleteProjectCost,
    renderProjects,
    renderHomeDashboard,
    scrollToDashboardTarget,
    openHomeManagementSection,
    exportHomeBackup,
    importHomeBackup
  });

  initializeValueFeatures();
})();
