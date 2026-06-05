const employeesKey = "sayohat_employees";
const clientsKey = "sayohat_clients";
const packagesKey = "sayohat_packages";
const bookingsKey = "sayohat_bookings";

function getDestinationImage(destinationName) {
    return "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg";
}

const openLoginBtns = [
    document.getElementById("open-login"),
    document.getElementById("open-login-2"),
];
const openRegisterBtns = [document.getElementById("open-register-2")];
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const authForm = document.getElementById("auth-form");
const authHelp = document.getElementById("auth-help");
const nameInput = document.getElementById("employee-name");
const emailInput = document.getElementById("employee-email");
const passwordInput = document.getElementById("employee-password");
const dashboardPanel = document.getElementById("dashboard-panel");
const logoutBtn = document.getElementById("logout");
const authState = { mode: "login", currentEmployee: null };

const packageListEl = document.getElementById("package-list");
const destinationListEl = document.getElementById("destination-list");
const clientsListEl = document.getElementById("clients-list");
const packagesDashboardEl = document.getElementById("packages-dashboard");
const bookingsListEl = document.getElementById("bookings-list");

const addClientBtn = document.getElementById("add-client");
const addPackageBtn = document.getElementById("add-package");
const addBookingBtn = document.getElementById("add-booking");

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

const editModal = document.getElementById("edit-modal");
const closeEditModal = document.getElementById("close-edit-modal");
const editBody = document.getElementById("edit-body");
const editTitle = document.getElementById("edit-title");

function readStorage(key, defaultValue) {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    try {
        return JSON.parse(raw);
    } catch {
        return defaultValue;
    }
}

function writeStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getEmployees() {
    return readStorage(employeesKey, []);
}

function getClients() {
    return readStorage(clientsKey, []);
}

const initialPackages = [
    { id: "p1", name: "Bali Dam olish", price: 259, duration: "7 kun", description: "Quyosh, dengiz va dam olish paketini o'z ichiga oladi.", destination: "Bali", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p2", name: "Istanbul sayohati", price: 179, duration: "5 kun", description: "Madaniyat, tarixiy sayyohlik va maxsus tur paket.", destination: "Istanbul", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p3", name: "Dubay hashamati", price: 299, duration: "6 kun", description: "Lyuks shaharda sayohat, savdo markazlari va qulay yashash.", destination: "Dubay", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p4", name: "Parij Romantikasi", price: 450, duration: "4 kun", description: "Eyxel minorasi, Luvr muzeyi va romantik kechki ovqat.", destination: "Fransiya", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p5", name: "Toshkent - Samarqand", price: 80, duration: "3 kun", description: "O'zbekistonning tarixiy shaharlariga sayohat.", destination: "O'zbekiston", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p6", name: "Maldiv orollari", price: 800, duration: "10 kun", description: "Okean o'rtasida unutilmas dam olish.", destination: "Maldiv", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p7", name: "Misr ehromlari", price: 320, duration: "6 kun", description: "Qadimgi tarix va Qizil dengiz bo'yida hordiq.", destination: "Misr", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p8", name: "Antalya All Inclusive", price: 550, duration: "7 kun", description: "O'rta yer dengizi sohilida besh yulduzli dam olish.", destination: "Turkiya", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p9", name: "Samarqand Marvaridi", price: 120, duration: "4 kun", description: "Registon maydoni, Go'ri Amir va qadimiy obidalar bo'ylab sayohat.", destination: "O'zbekiston", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" },
    { id: "p10", name: "Rim - Abadiy Shahar", price: 380, duration: "5 kun", description: "Kolizey, Rim forumi va Italiyaning mazali oshxonasi.", destination: "Italiya", imageUrl: "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg" }
];

function getPackages() {
    return readStorage(packagesKey, initialPackages);
}

function getBookings() {
    return readStorage(bookingsKey, [
        { id: "b1", clientId: "c1", packageId: "p1", status: "Tasdiqlangan" },
        { id: "b2", clientId: "c2", packageId: "p3", status: "Kutmoqda" },
    ]);
}

function getClientById(id) {
    return getClients().find((item) => item.id === id);
}

function getPackageById(id) {
    return getPackages().find((item) => item.id === id);
}

function showModal(mode) {
    authState.mode = mode;
    modal.classList.remove("hidden");
    if (mode === "register") {
        modalTitle.textContent = "Xodim ro'yxatdan o'tishi";
        authHelp.textContent = "Siz tizimda xodim sifatida ro'yxatdan o'tishingiz mumkin.";
    } else {
        modalTitle.textContent = "Xodim kirishi";
        authHelp.innerHTML = "📌 <strong>Demo test uchun:</strong> Email: <code>demo@mail.com</code> | Parol: <code>123456</code>";
    }
}

function hideModal() {
    modal.classList.add("hidden");
    authForm.reset();
}

function showDashboard() {
    // Support both overlay dashboardPanel and standalone dashboard page (.dashboard-root)
    const panelEl = dashboardPanel || document.querySelector('.dashboard-root') || document.querySelector('.dashboard-page');
    if (!panelEl) return;

    // If it's the overlay panel, remove hidden class
    if (dashboardPanel) dashboardPanel.classList.remove("hidden");
    setActiveTab("clients");

    // Display employee name in dashboard header (works for both layouts)
    const employeeName = authState.currentEmployee?.name || "Xodim";
    const headerTitle = panelEl.querySelector('.dashboard-header h1') || panelEl.querySelector('.dashboard-panel-header h2');
    if (headerTitle) {
        headerTitle.innerHTML = `👤 ${employeeName} - Admin Panel`;
    }

    renderDashboard();
    // set avatar initial if present
    const avatarEl = document.querySelector('.avatar');
    if (avatarEl) {
        const initial = (employeeName || 'A').trim().charAt(0).toUpperCase();
        avatarEl.textContent = initial;
    }

    // sidebar active link handling (standalone dashboard)
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    if (sidebarLinks.length) {
        const currentHash = location.hash || '#';
        sidebarLinks.forEach((link) => {
            const href = link.getAttribute('href') || '#';
            link.classList.toggle('active-link', href === currentHash || (currentHash === '#' && href === '#'));
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const h = link.getAttribute('href') || '#';
                sidebarLinks.forEach((l) => l.classList.remove('active-link'));
                link.classList.add('active-link');
                if (h.startsWith('#')) setActiveTab(h.replace('#', '') || 'clients');
            });
        });
    }
}

function hideDashboard() {
    if (dashboardPanel) dashboardPanel.classList.add("hidden");
}

function setActiveTab(tabId) {
    tabButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    tabContents.forEach((content) => {
        content.classList.toggle("active", content.id === `${tabId}-tab`);
    });
}

function getPopularDestinations() {
    const bookings = getBookings();
    const packages = getPackages();
    
    // Bronlar asosida hisoblash
    const counts = bookings.reduce((acc, booking) => {
        const pkg = getPackageById(booking.packageId);
        if (pkg) {
            acc[pkg.destination] = (acc[pkg.destination] || 0) + 1;
        }
        return acc;
    }, {});
    let popular = Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([destination, count]) => ({ destination, count }));

    // Agar bronlar yo'q bo'lsa, paketlardan bir nechtasini ko'rsatamiz
    if (popular.length === 0) {
        const uniqueDestinations = [...new Set(packages.map(p => p.destination))];
        popular = uniqueDestinations.slice(0, 3).map(dest => ({ destination: dest, count: 0 }));
    }

    return popular;
}

function renderPackages() {
    if (!packageListEl) return;
    const packages = getPackages();
    packageListEl.innerHTML = packages
        .map(
            (pkg) => `
      <article class="package-card">
        <div class="package-card-image">
            <img src="${pkg.imageUrl || 'https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/umumiy/cropped-images/shutterstock_1401921575-0-0-0-0-1738745845.jpg'}" alt="${pkg.name}">
        </div>
        <div class="package-card-content">
            <h3>${pkg.name}</h3>
            <p class="small-text">${pkg.destination} · ${pkg.duration}</p>
            <p>${pkg.description}</p>
            <div class="package-card-footer">
                <p class="package-price"><strong>$${pkg.price}</strong></p>
                <button class="btn btn-primary btn-sm book-now-btn" data-id="${pkg.id}">Bron qilish</button>
            </div>
        </div>
      </article>`
        )
        .join("");
}

function renderDestinations() {
    if (!destinationListEl) return;
    const list = getPopularDestinations();
    
    destinationListEl.innerHTML = list
        .map(
            (item) => `
      <article class="destination-card">
        <div class="destination-card-image">
            <img src="${getDestinationImage(item.destination)}" alt="${item.destination}">
        </div>
        <div class="destination-card-content">
            <h3>${item.destination}</h3>
            <p class="small-text">Bronlar soni: ${item.count}</p>
            <p>Bu yo'nalish mijozlar orasida juda mashhur.</p>
        </div>
      </article>`
        )
        .join("");
}

function renderClients() {
    if (!clientsListEl) return;
    const clients = getClients();
    if (!clients.length) {
        clientsListEl.innerHTML = "<p>Hali mijozlar mavjud emas.</p>";
        return;
    }
    clientsListEl.innerHTML = `
    <table class="table">
      <thead>
        <tr><th>Ism</th><th>Email</th><th>Telefon</th><th>Eslatma</th><th>Harakat</th></tr>
      </thead>
      <tbody>
        ${clients
            .map(
                (client) => `
            <tr>
              <td>${client.name}</td>
              <td>${client.email}</td>
              <td>${client.phone}</td>
              <td>${client.note || "-"}</td>
              <td>
                <button class="btn btn-secondary" data-action="edit-client" data-id="${client.id}">Tahrirlash</button>
                <button class="btn btn-link" data-action="delete-client" data-id="${client.id}">O'chirish</button>
              </td>
            </tr>`
            )
            .join("")}
      </tbody>
    </table>`;
}

function renderPackagesDashboard() {
    if (!packagesDashboardEl) return;
    const packages = getPackages();
    if (!packages.length) {
        packagesDashboardEl.innerHTML = "<p>Hali paketlar mavjud emas.</p>";
        return;
    }
    packagesDashboardEl.innerHTML = `
    <table class="table">
      <thead>
        <tr><th>Paket</th><th>Yo'nalish</th><th>Davomiylik</th><th>Narxi</th><th>Harakat</th></tr>
      </thead>
      <tbody>
        ${packages
            .map(
                (pkg) => `
            <tr>
              <td>${pkg.name}</td>
              <td>${pkg.destination}</td>
              <td>${pkg.duration}</td>
              <td>$${pkg.price}</td>
              <td>
                <button class="btn btn-secondary" data-action="edit-package" data-id="${pkg.id}">Tahrirlash</button>
                <button class="btn btn-link" data-action="delete-package" data-id="${pkg.id}">O'chirish</button>
              </td>
            </tr>`
            )
            .join("")}
      </tbody>
    </table>`;
}

function renderBookings() {
    if (!bookingsListEl) return;
    const bookings = getBookings();
    if (!bookings.length) {
        bookingsListEl.innerHTML = "<p>Hali bronlar mavjud emas.</p>";
        return;
    }
    bookingsListEl.innerHTML = `
    <table class="table">
      <thead>
        <tr><th>Mijoz</th><th>Paket</th><th>Status</th><th>Harakat</th></tr>
      </thead>
      <tbody>
        ${bookings
            .map((booking) => {
                const client = getClientById(booking.clientId) || { name: "Noma'lum" };
                const pkg = getPackageById(booking.packageId) || { name: "Noma'lum" };
                return `
            <tr>
              <td>${client.name}</td>
              <td>${pkg.name}</td>
              <td>${booking.status}</td>
              <td>
                <button class="btn btn-secondary" data-action="edit-booking" data-id="${booking.id}">Tahrirlash</button>
                <button class="btn btn-link" data-action="delete-booking" data-id="${booking.id}">O'chirish</button>
              </td>
            </tr>`;
            })
            .join("")}
      </tbody>
    </table>`;
}

function renderDashboard() {
    if (clientsListEl) renderClients();
    if (packagesDashboardEl) renderPackagesDashboard();
    if (bookingsListEl) renderBookings();
    if (destinationListEl) renderDestinations();
    // update counts/widgets for standalone dashboard
    const clientsCountEl = document.getElementById('clients-count');
    if (clientsCountEl) clientsCountEl.textContent = String(getClients().length);
    const packagesCountEl = document.getElementById('packages-count');
    if (packagesCountEl) packagesCountEl.textContent = String(getPackages().length);
    const bookingsCountEl = document.getElementById('bookings-count');
    if (bookingsCountEl) bookingsCountEl.textContent = String(getBookings().length);
    const lastUserEl = document.getElementById('last-user');
    const current = authState.currentEmployee || readStorage('sayohat_current_employee', null);
    if (lastUserEl) lastUserEl.textContent = current ? current.name : '-';
}

function createId(prefix) {
    return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

function showEditForm(type, item = {}) {
    editBody.innerHTML = "";
    editModal.classList.remove("hidden");
    const form = document.createElement("form");
    form.className = "auth-form";
    let fields = [];
    let title = "";

    if (type === "client") {
        title = item.id ? "Mijozni tahrirlash" : "Yangi mijoz qo'shish";
        fields = [
            { label: "Ism", name: "name", type: "text", value: item.name || "", required: true },
            { label: "Email", name: "email", type: "email", value: item.email || "", required: true },
            { label: "Telefon", name: "phone", type: "text", value: item.phone || "", required: true },
            { label: "Eslatma", name: "note", type: "text", value: item.note || "" },
        ];
    }

    if (type === "package") {
        title = item.id ? "Paketni tahrirlash" : "Yangi paket qo'shish";
        fields = [
            { label: "Paket nomi", name: "name", type: "text", value: item.name || "", required: true },
            { label: "Yo'nalish", name: "destination", type: "text", value: item.destination || "", required: true },
            { label: "Davomiylik", name: "duration", type: "text", value: item.duration || "", required: true },
            { label: "Narxi", name: "price", type: "number", value: item.price || "", required: true },
            { label: "Tavsif", name: "description", type: "text", value: item.description || "" },
        ];
    }

    if (type === "booking") {
        title = item.id ? "Bronni tahrirlash" : "Yangi bron qo'shish";
        const clients = getClients();
        const packages = getPackages();
        fields = [
            { label: "Mijoz", name: "clientId", type: "select", value: item.clientId || "", options: clients },
            { label: "Paket", name: "packageId", type: "select", value: item.packageId || "", options: packages },
            { label: "Status", name: "status", type: "select", value: item.status || "Kutmoqda", options: ["Kutmoqda", "Tasdiqlangan", "Rad etilgan"] },
        ];
    }

    editTitle.textContent = title;

    fields.forEach((field) => {
        const wrapper = document.createElement("div");
        wrapper.className = "form-group";
        const label = document.createElement("label");
        label.textContent = field.label;
        wrapper.appendChild(label);

        if (field.type === "select") {
            const select = document.createElement("select");
            select.name = field.name;
            select.required = true;
            const options = Array.isArray(field.options) ? field.options : [];
            if (field.name === "status") {
                options.forEach((value) => {
                    const option = document.createElement("option");
                    option.value = value;
                    option.textContent = value;
                    if (value === field.value) option.selected = true;
                    select.appendChild(option);
                });
            } else {
                options.forEach((optionData) => {
                    const option = document.createElement("option");
                    option.value = optionData.id;
                    option.textContent = optionData.name;
                    if (optionData.id === field.value) option.selected = true;
                    select.appendChild(option);
                });
            }
            wrapper.appendChild(select);
        } else {
            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.value = field.value;
            input.required = field.required || false;
            wrapper.appendChild(input);
        }

        form.appendChild(wrapper);
    });

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "btn btn-primary";
    submit.textContent = item.id ? "Saqlash" : "Qo'shish";
    form.appendChild(submit);

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        if (type === "client") {
            const clients = getClients();
            const payload = {
                id: item.id || createId("c"),
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                note: formData.get("note"),
            };
            const updated = item.id
                ? clients.map((c) => (c.id === item.id ? payload : c))
                : [...clients, payload];
            writeStorage(clientsKey, updated);
        }
        if (type === "package") {
            const packages = getPackages();
            const payload = {
                id: item.id || createId("p"),
                name: formData.get("name"),
                destination: formData.get("destination"),
                duration: formData.get("duration"),
                price: Number(formData.get("price")),
                description: formData.get("description"),
            };
            const updated = item.id
                ? packages.map((pkg) => (pkg.id === item.id ? payload : pkg))
                : [...packages, payload];
            writeStorage(packagesKey, updated);
        }
        if (type === "booking") {
            const bookings = getBookings();
            const payload = {
                id: item.id || createId("b"),
                clientId: formData.get("clientId"),
                packageId: formData.get("packageId"),
                status: formData.get("status"),
            };
            const updated = item.id
                ? bookings.map((booking) => (booking.id === item.id ? payload : booking))
                : [...bookings, payload];
            writeStorage(bookingsKey, updated);
        }
        renderDashboard();
        hideEditModal();
    });

    editBody.appendChild(form);
}

function hideEditModal() {
    editModal.classList.add("hidden");
}

function deleteItem(type, id) {
    if (!confirm("Haqiqatan ham o'chirmoqchimisiz?")) return;
    if (type === "client") {
        const clients = getClients().filter((item) => item.id !== id);
        writeStorage(clientsKey, clients);
        const bookings = getBookings().filter((booking) => booking.clientId !== id);
        writeStorage(bookingsKey, bookings);
    }
    if (type === "package") {
        const packages = getPackages().filter((item) => item.id !== id);
        writeStorage(packagesKey, packages);
        const bookings = getBookings().filter((booking) => booking.packageId !== id);
        writeStorage(bookingsKey, bookings);
    }
    if (type === "booking") {
        const bookings = getBookings().filter((item) => item.id !== id);
        writeStorage(bookingsKey, bookings);
    }
    renderDashboard();
}

function setupInitialData() {
    // Ensure demo employee exists and update password if needed
    const demoEmail = "demo@mail.com";
    const demoPassword = "123456";
    const existingEmployees = getEmployees();
    const demoIndex = existingEmployees.findIndex((e) => e.email === demoEmail);
    if (demoIndex >= 0) {
        if (existingEmployees[demoIndex].password !== demoPassword) {
            existingEmployees[demoIndex].password = demoPassword;
        }
    } else {
        existingEmployees.push({ id: "e_demo", name: "demo", email: demoEmail, password: demoPassword });
    }
    writeStorage(employeesKey, existingEmployees);
    // Agar paketlar soni 10 tadan kam bo'lsa (eski ma'lumot), yangilaymiz
    if (!localStorage.getItem(packagesKey) || getPackages().length < 10) {
        writeStorage(packagesKey, initialPackages);
    }
    if (!localStorage.getItem(clientsKey)) {
        writeStorage(clientsKey, [
            { id: "c1", name: "Olimjon", email: "olim@example.com", phone: "+998901234567", note: "Oilaviy sayohat" },
            { id: "c2", name: "Gulbahor", email: "gulbahor@example.com", phone: "+998998765432", note: "Tug'ilgan kun uchun bron" },
        ]);
    }
    if (!localStorage.getItem(bookingsKey)) {
        writeStorage(bookingsKey, getBookings());
    }
}

function init() {
    setupInitialData();
    renderPackages();
    renderDestinations();
    // If a current employee was persisted, restore and show dashboard when present
    const persisted = readStorage('sayohat_current_employee', null);
    if (persisted) {
        authState.currentEmployee = persisted;
        // If we're on the standalone dashboard page, show it; otherwise show overlay panel when present
        if (location.pathname.includes('dashboard.html')) {
            showDashboard();
        } else if (dashboardPanel) {
            showDashboard();
        }
    }
}

if (authForm) {
    authForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = emailInput.value.trim().toLowerCase();
        const name = nameInput.value.trim();
        const password = passwordInput.value.trim();
        const employees = getEmployees();

        if (authState.mode === "register") {
            if (employees.some((emp) => emp.email === email)) {
                authHelp.textContent = "Bu email bilan xodim allaqachon ro'yxatdan o'tgan.";
                return;
            }
            const newEmployee = { id: createId("e"), name, email, password };
            writeStorage(employeesKey, [...employees, newEmployee]);
            authHelp.textContent = "Ro'yxatdan o'tish muvaffaqiyatli. Endi tizimga kirishingiz mumkin.";
            authState.mode = "login";
            modalTitle.textContent = "Xodim kirishi";
            authForm.reset();
            return;
        }

        const employee = employees.find((item) => item.email === email && item.password === password);
        if (!employee) {
            authHelp.textContent = "Email yoki parol noto'g'ri. Iltimos qayta urinib ko'ring.";
            return;
        }
        authState.currentEmployee = employee;
        // Persist current employee and open dashboard page
        writeStorage('sayohat_current_employee', employee);
        // If we're on the main page, redirect to dashboard.html, otherwise just show
        if (!location.pathname.includes('dashboard.html')) {
            window.location.href = 'dashboard.html';
            return;
        }
        hideModal();
        showDashboard();
    });
}

// Demo autofill helper
const fillDemoBtn = document.getElementById('fill-demo');
if (fillDemoBtn) {
    fillDemoBtn.addEventListener('click', () => {
        if (emailInput) emailInput.value = 'demo@mail.com';
        if (passwordInput) passwordInput.value = '123456';
        if (nameInput) nameInput.value = 'demo';
    });
}

[...openLoginBtns, ...openRegisterBtns].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", () => {
        const mode = btn.id.includes("register") || btn.id === "open-register" || btn.id === "open-register-2" ? "register" : "login";
        showModal(mode);
    });
});

if (closeModal) closeModal.addEventListener("click", hideModal);
if (modal) modal.addEventListener("click", (event) => {
    if (event.target === modal) hideModal();
});

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        authState.currentEmployee = null;
        localStorage.removeItem('sayohat_current_employee');
        // If we're on dashboard page, go back to main index
        if (location.pathname.includes('dashboard.html')) {
            window.location.href = 'index.html';
            return;
        }
        hideDashboard();
    });
}

if (addClientBtn) addClientBtn.addEventListener("click", () => showEditForm("client"));
if (addPackageBtn) addPackageBtn.addEventListener("click", () => showEditForm("package"));
if (addBookingBtn) addBookingBtn.addEventListener("click", () => showEditForm("booking"));

if (closeEditModal) closeEditModal.addEventListener("click", hideEditModal);
if (editModal) editModal.addEventListener("click", (event) => {
    if (event.target === editModal) hideEditModal();
});

if (clientsListEl) clientsListEl.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    const id = event.target.dataset.id;
    if (!action) return;
    if (action === "edit-client") {
        const item = getClients().find((client) => client.id === id);
        showEditForm("client", item);
    }
    if (action === "delete-client") deleteItem("client", id);
});

if (packagesDashboardEl) packagesDashboardEl.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    const id = event.target.dataset.id;
    if (!action) return;
    if (action === "edit-package") {
        const item = getPackages().find((pkg) => pkg.id === id);
        showEditForm("package", item);
    }
    if (action === "delete-package") deleteItem("package", id);
});

if (bookingsListEl) bookingsListEl.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    const id = event.target.dataset.id;
    if (!action) return;
    if (action === "edit-booking") {
        const item = getBookings().find((booking) => booking.id === id);
        showEditForm("booking", item);
    }
    if (action === "delete-booking") deleteItem("booking", id);
});

tabButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

// Mobile Menu Toggle Logic
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
        const isActive = menuToggle.classList.toggle("active");
        navLinksContainer.classList.toggle("active");
        // Menyuda scroll bo'lmasligi uchun body'ni muzlatamiz
        document.body.style.overflow = isActive ? "hidden" : "";
    });

    // Havolani bosganda menyu yopilishi uchun
    navLinksContainer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinksContainer.classList.remove("active");
            document.body.style.overflow = "";
        });
    });
}

// Mijoz bron qilish logikasi
if (packageListEl) {
    packageListEl.addEventListener("click", (e) => {
        if (e.target.classList.contains("book-now-btn")) {
            const pkgId = e.target.dataset.id;
            const pkg = getPackageById(pkgId);
            showBookingModal(pkg);
        }
    });
}

function showBookingModal(pkg) {
    authState.mode = "booking";
    modal.classList.remove("hidden");
    modalTitle.textContent = `${pkg.name} - Bron qilish`;
    authHelp.textContent = "Iltimos, ma'lumotlaringizni kiriting va biz siz bilan bog'lanamiz.";
    authForm.dataset.packageId = pkg.id;
}

const searchBookingsBtn = document.getElementById("search-bookings-btn");
const checkEmailInput = document.getElementById("check-email");
const resultsEl = document.getElementById("my-bookings-results");

if (searchBookingsBtn) {
    searchBookingsBtn.addEventListener("click", () => {
        const email = checkEmailInput.value.trim().toLowerCase();
        if (!email) return alert("Emailni kiriting");

        const clients = getClients();
        const client = clients.find(c => c.email === email);

        if (!client) {
            resultsEl.innerHTML = "<p>Bu email bilan bron topilmadi.</p>";
            return;
        }

        const bookings = getBookings().filter(b => b.clientId === client.id);
        if (bookings.length === 0) {
            resultsEl.innerHTML = "<p>Sizda hali bronlar yo'q.</p>";
            return;
        }

        resultsEl.innerHTML = bookings.map(b => {
            const pkg = getPackageById(b.packageId) || { name: "Noma'lum", price: 0, duration: 'Noma\'lum' };
            const statusClass = b.status === 'Tasdiqlangan' ? 'status-confirmed' : 
                               b.status === 'Rad etilgan' ? 'status-rejected' : 'status-pending';
            return `
                <article class="card booking-result-card ${statusClass}">
                    <div class="booking-result-content">
                        <div class="booking-info">
                            <span class="status-badge">${b.status}</span>
                            <h3>${pkg.name}</h3>
                            <div class="booking-meta">
                                <span>📅 ${pkg.duration}</span>
                                <span>💰 $${pkg.price}</span>
                            </div>
                        </div>
                        <button class="btn btn-link delete-booking-btn" data-id="${b.id}">❌ Bekor qilish</button>
                    </div>
                </article>
            `;
        }).join("");
    });
}

if (resultsEl) {
    resultsEl.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-booking-btn")) {
            const id = e.target.dataset.id;
            if (confirm("Bronni bekor qilishni xohlaysizmi?")) {
                const bookings = getBookings().filter(b => b.id !== id);
                writeStorage(bookingsKey, bookings);
                searchBookingsBtn.click(); // Listni yangilash
            }
        }
    });
}

init();
