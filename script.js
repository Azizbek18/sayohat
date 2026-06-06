const employeesKey = "sayohat_employees";
const clientsKey = "sayohat_clients";
const packagesKey = "sayohat_packages";
const bookingsKey = "sayohat_bookings";
const supabaseUrl = "https://nwjqvgqydrjkveievogo.supabase.co";
const supabaseKey = "sb_publishable_WaZvU4qjGkSQu2Vd1qZujw_RcPZfqAh";
const supabaseTable = "sayohat";
const supabaseEmployeesTable = "sayohat_employees";
const supabaseHeaders = {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
};

function getDestinationTheme(destination = "sayohat") {
    const themes = {
        Bali: { colors: ["#0ea5e9", "#14b8a6", "#dff7f5"], label: "Beach Escape" },
        Istanbul: { colors: ["#0f3d9d", "#185adb", "#dbeafe"], label: "City & Heritage" },
        Dubay: { colors: ["#f59e0b", "#fb7185", "#fff1d6"], label: "Luxury City" },
        Fransiya: { colors: ["#7c3aed", "#ec4899", "#f5e8ff"], label: "Romantic Europe" },
        "O'zbekiston": { colors: ["#16a34a", "#0f766e", "#dcfce7"], label: "Silk Road" },
        Samarqand: { colors: ["#0369a1", "#0f766e", "#dff6ff"], label: "Historic Jewel" },
        Maldiv: { colors: ["#06b6d4", "#38bdf8", "#e0fbff"], label: "Island Calm" },
        Misr: { colors: ["#b45309", "#f59e0b", "#fff3d6"], label: "Ancient Wonders" },
        Turkiya: { colors: ["#dc2626", "#f59e0b", "#ffe4e6"], label: "Aegean Escape" },
        Italiya: { colors: ["#16a34a", "#ef4444", "#ecfdf5"], label: "Classic Europe" },
        Tailand: { colors: ["#8b5cf6", "#22c55e", "#ede9fe"], label: "Tropical Asia" },
    };

    return themes[destination] || { colors: ["#185adb", "#ff7c5f", "#eef4ff"], label: "Travel Vibes" };
}

function getDestinationImage(destination = "sayohat") {
    const destinationImages = {
        Bali: "https://upload.wikimedia.org/wikipedia/commons/7/72/Bali_beach.jpg",
        Istanbul: "https://upload.wikimedia.org/wikipedia/commons/f/f5/The_Blue_Mosque.JPG",
        Dubay: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Skyline_of_Dubai.png",
        Fransiya: "https://upload.wikimedia.org/wikipedia/commons/9/95/The_Eiffel_Tower_in_Paris.jpg",
        "O'zbekiston": "https://upload.wikimedia.org/wikipedia/commons/3/33/Tashkent_skyline_2019.jpg",
        Samarqand: "https://upload.wikimedia.org/wikipedia/commons/8/8c/RegistanSquare_Samarkand.jpg",
        Maldiv: "https://upload.wikimedia.org/wikipedia/commons/3/31/Sunset_walk_in_Maldives_Beach_-_panoramio.jpg",
        Misr: "https://upload.wikimedia.org/wikipedia/commons/9/94/Giza-pyramids.JPG",
        Turkiya: "https://upload.wikimedia.org/wikipedia/commons/d/de/Kemer_beach%2C_Antalya.jpg",
        Italiya: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Colosseum_%28Rome%29.jpg",
        Tailand: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bangkok_skyline%2C_Bangkok%2C_Thailand.jpg",
    };

    return destinationImages[destination] || destinationImages.Fransiya;
}

// DOM references
const openLoginBtns = [document.getElementById("open-login"), document.getElementById("open-login-2")];
const openRegisterBtns = [document.getElementById("open-register-2")];
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const authForm = document.getElementById("auth-form");
let authHelp = document.getElementById("auth-help");
const authFormTemplate = authForm ? authForm.innerHTML : "";
const dashboardPanel = document.getElementById("dashboard-panel");
const logoutBtn = document.getElementById("logout");

const packageListEl = document.getElementById("package-list");
const destinationListEl = document.getElementById("destination-list");
const clientsListEl = document.getElementById("clients-list");
const packagesDashboardEl = document.getElementById("packages-dashboard");
const bookingsListEl = document.getElementById("bookings-list");

const addClientBtn = document.getElementById("add-client");
const addPackageBtn = document.getElementById("add-package");
const addBookingBtn = document.getElementById("add-booking");
const dashboardNewBookingBtn = document.getElementById("dashboard-new-booking");

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

const editModal = document.getElementById("edit-modal");
const closeEditModal = document.getElementById("close-edit-modal");
const editBody = document.getElementById("edit-body");
const editTitle = document.getElementById("edit-title");

const authState = {
    mode: "login",
    currentEmployee: null,
};

// Storage helpers
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

function createId(prefix) {
    return `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

function buildSupabaseBookingRow({ client, pkg, note }) {
    return {
        name: client.name,
        email: client.email,
        phone: client.phone,
        note,
        package_id: pkg.id,
        package_name: pkg.name,
        package_price: pkg.price,
        package_duration: pkg.duration,
        status: "Kutmoqda",
        source: "sayohat-web",
    };
}

async function saveBookingToSupabase(bookingRow) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseTable}`, {
        method: "POST",
        headers: {
            ...supabaseHeaders,
            Prefer: "return=representation",
        },
        body: JSON.stringify(bookingRow),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Supabasega saqlab bo'lmadi");
    }

    return response.json();
}

async function hashPassword(password) {
    if (!globalThis.crypto?.subtle) return password;

    const encoded = new TextEncoder().encode(password);
    const digest = await crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(digest))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

function passwordMatches(inputPassword, storedPassword) {
    return inputPassword === storedPassword || false;
}

async function employeePasswordMatches(inputPassword, storedPassword) {
    if (passwordMatches(inputPassword, storedPassword)) return true;
    const hashed = await hashPassword(inputPassword);
    return hashed === storedPassword;
}

async function fetchEmployeeByEmailFromSupabase(email) {
    const response = await fetch(
        `${supabaseUrl}/rest/v1/${supabaseEmployeesTable}?email=eq.${encodeURIComponent(email)}&select=*`,
        {
            method: "GET",
            headers: supabaseHeaders,
        }
    );

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Supabase'dan xodimni olishda xatolik");
    }

    const rows = await response.json();
    return rows?.[0] || null;
}

async function saveEmployeeToSupabase(employeeRow) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseEmployeesTable}`, {
        method: "POST",
        headers: {
            ...supabaseHeaders,
            Prefer: "return=representation",
        },
        body: JSON.stringify(employeeRow),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Xodimni Supabasega saqlab bo'lmadi");
    }

    return response.json();
}

async function updateEmployeeInSupabase(id, employeeRow) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseEmployeesTable}?id=eq.${encodeURIComponent(id)}`, {
        method: "PATCH",
        headers: {
            ...supabaseHeaders,
            Prefer: "return=representation",
        },
        body: JSON.stringify(employeeRow),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Demo xodimni yangilab bo'lmadi");
    }

    return response.json();
}

async function ensureDefaultEmployeeOnSupabase() {
    const demoEmail = "demo@mail.com";
    const demoPlainPassword = "123456";
    const hashedDemoPassword = await hashPassword(demoPlainPassword);
    const localEmployees = getEmployees();
    const demoLocalIndex = localEmployees.findIndex((employee) => employee.email === demoEmail);

    const demoLocalRecord = {
        id: "e_demo",
        name: "demo",
        email: demoEmail,
        password: hashedDemoPassword,
    };

    if (demoLocalIndex >= 0) {
        localEmployees[demoLocalIndex] = { ...localEmployees[demoLocalIndex], ...demoLocalRecord };
    } else {
        localEmployees.push(demoLocalRecord);
    }

    writeStorage(employeesKey, localEmployees);

    try {
        const remoteDemo = await fetchEmployeeByEmailFromSupabase(demoEmail);
        if (remoteDemo?.id) {
            const remotePassword = remoteDemo.password || "";
            if (!(await employeePasswordMatches(demoPlainPassword, remotePassword))) {
                await updateEmployeeInSupabase(remoteDemo.id, {
                    name: "demo",
                    email: demoEmail,
                    password: hashedDemoPassword,
                    source: "sayohat-web",
                });
            }
            return;
        }

        await saveEmployeeToSupabase({
            id: "e_demo",
            name: "demo",
            email: demoEmail,
            password: hashedDemoPassword,
            source: "sayohat-web",
        });
    } catch (error) {
        console.warn("Demo employee sync failed:", error);
    }
}

function mergeEmployeesByEmail(existingEmployees, nextEmployee) {
    const normalizedEmail = nextEmployee.email.toLowerCase();
    const updated = existingEmployees.filter((employee) => employee.email.toLowerCase() !== normalizedEmail);
    updated.push(nextEmployee);
    return updated;
}

async function fetchBookingsFromSupabase() {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseTable}?select=*`, {
        method: "GET",
        headers: supabaseHeaders,
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Supabase'dan bronlarni olishda xatolik");
    }

    return response.json();
}

// Data access
function getEmployees() {
    return readStorage(employeesKey, []);
}

function getClients() {
    return readStorage(clientsKey, []);
}

const initialPackages = [
    { id: "p1", name: "Bali Dam olish", price: 259, duration: "7 kun", description: "Quyosh, dengiz va dam olish paketini o'z ichiga oladi.", destination: "Bali", imageUrl: getDestinationImage("Bali") },
    { id: "p2", name: "Istanbul sayohati", price: 179, duration: "5 kun", description: "Madaniyat, tarixiy sayyohlik va maxsus tur paket.", destination: "Istanbul", imageUrl: getDestinationImage("Istanbul") },
    { id: "p3", name: "Dubay hashamati", price: 299, duration: "6 kun", description: "Lyuks shaharda sayohat, savdo markazlari va qulay yashash.", destination: "Dubay", imageUrl: getDestinationImage("Dubay") },
    { id: "p4", name: "Parij Romantikasi", price: 450, duration: "4 kun", description: "Eyxel minorasi, Luvr muzeyi va romantik kechki ovqat.", destination: "Fransiya", imageUrl: getDestinationImage("Fransiya") },
    { id: "p5", name: "Toshkent - Samarqand", price: 80, duration: "3 kun", description: "O'zbekistonning tarixiy shaharlariga sayohat.", destination: "O'zbekiston", imageUrl: getDestinationImage("O'zbekiston") },
    { id: "p6", name: "Maldiv orollari", price: 800, duration: "10 kun", description: "Okean o'rtasida unutilmas dam olish.", destination: "Maldiv", imageUrl: getDestinationImage("Maldiv") },
    { id: "p7", name: "Misr ehromlari", price: 320, duration: "6 kun", description: "Qadimgi tarix va Qizil dengiz bo'yida hordiq.", destination: "Misr", imageUrl: getDestinationImage("Misr") },
    { id: "p8", name: "Antalya All Inclusive", price: 550, duration: "7 kun", description: "O'rta yer dengizi sohilida besh yulduzli dam olish.", destination: "Turkiya", imageUrl: getDestinationImage("Turkiya") },
    { id: "p9", name: "Samarqand Marvaridi", price: 120, duration: "4 kun", description: "Registon maydoni, Go'ri Amir va qadimiy obidalar bo'ylab sayohat.", destination: "O'zbekiston", imageUrl: getDestinationImage("Samarqand") },
    { id: "p10", name: "Rim - Abadiy Shahar", price: 380, duration: "5 kun", description: "Kolizey, Rim forumi va Italiyaning mazali oshxonasi.", destination: "Italiya", imageUrl: getDestinationImage("Italiya") },
];

const popularDestinationSeeds = [
    "Bali",
    "Istanbul",
    "Dubay",
    "Fransiya",
    "Samarqand",
    "Maldiv",
    "Misr",
    "Antalya",
    "Rim",
    "Tailand",
];

function getPackages() {
    const packages = readStorage(packagesKey, initialPackages);
    const normalized = packages.map((pkg) => ({
        ...pkg,
        imageUrl: getDestinationImage(pkg.destination || pkg.name),
    }));

    const needsUpdate = normalized.some((pkg, index) => packages[index]?.imageUrl !== pkg.imageUrl);
    if (needsUpdate) {
        writeStorage(packagesKey, normalized);
    }

    return normalized;
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

function ensureClientForBookingRow(row) {
    const clients = getClients();
    const normalizedEmail = (row.email || "").trim().toLowerCase();
    const existingClient = clients.find((client) => client.email.toLowerCase() === normalizedEmail);

    if (existingClient) {
        const nextClient = {
            ...existingClient,
            name: row.name || existingClient.name,
            phone: row.phone || existingClient.phone,
            note: row.note || existingClient.note,
        };
        const updated = clients.map((client) => (client.id === existingClient.id ? nextClient : client));
        writeStorage(clientsKey, updated);
        return nextClient;
    }

    const newClient = {
        id: createId("c"),
        name: row.name || "Noma'lum mijoz",
        email: normalizedEmail || `guest-${Date.now()}@sayohat.local`,
        phone: row.phone || "",
        note: row.note || "",
    };
    writeStorage(clientsKey, [...clients, newClient]);
    return newClient;
}

function normalizeSupabaseBookingRow(row) {
    const client = ensureClientForBookingRow(row);
    const packageMatch =
        getPackages().find((pkg) => String(pkg.id) === String(row.package_id)) ||
        getPackages().find((pkg) => pkg.name === row.package_name) ||
        null;

    return {
        id: row.id ? `b_supabase_${row.id}` : createId("b"),
        clientId: client.id,
        packageId: packageMatch?.id || row.package_id || "",
        status: row.status || "Kutmoqda",
        supabaseId: row.id || null,
        source: row.source || "sayohat-web",
        note: row.note || "",
        importedFromSupabase: true,
    };
}

function mergeBookings(existingBookings, incomingBookings) {
    const merged = [...existingBookings];

    incomingBookings.forEach((incoming) => {
        const existingIndex = merged.findIndex(
            (booking) =>
                (booking.supabaseId && incoming.supabaseId && String(booking.supabaseId) === String(incoming.supabaseId)) ||
                (booking.clientId === incoming.clientId && booking.packageId === incoming.packageId && booking.status === incoming.status && !booking.supabaseId)
        );

        if (existingIndex >= 0) {
            merged[existingIndex] = {
                ...merged[existingIndex],
                ...incoming,
                id: merged[existingIndex].id || incoming.id,
            };
            return;
        }

        merged.push(incoming);
    });

    return merged;
}

async function syncBookingsFromSupabase() {
    try {
        const remoteRows = await fetchBookingsFromSupabase();
        const importedBookings = remoteRows.map(normalizeSupabaseBookingRow);
        const localBookings = getBookings();
        const mergedBookings = mergeBookings(localBookings, importedBookings);
        writeStorage(bookingsKey, mergedBookings);
        return mergedBookings;
    } catch (error) {
        console.warn("Supabase booking sync failed:", error);
        return getBookings();
    }
}

function getBookingStatusSummary() {
    return getBookings().reduce(
        (summary, booking) => {
            if (booking.status === "Tasdiqlangan") summary.confirmed += 1;
            else if (booking.status === "Rad etilgan") summary.rejected += 1;
            else summary.pending += 1;
            return summary;
        },
        { pending: 0, confirmed: 0, rejected: 0 }
    );
}

function getTopDestination() {
    const destinations = getPopularDestinations();
    return destinations.find((item) => item.count > 0) || destinations[0] || null;
}

function parseDurationDays(duration = "") {
    const match = String(duration).match(/(\d+)/);
    return match ? Number(match[1]) : 0;
}

function renderMetricHighlights(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el) return;

    el.innerHTML = items
        .map(
            (item) => `
                <article class="activity-item activity-${item.tone || "neutral"}">
                    <span class="activity-dot"></span>
                    <div>
                        <h3>${item.title}</h3>
                        <p class="small-text">${item.meta}</p>
                    </div>
                </article>`
        )
        .join("");
}

function renderClientsPageDetails() {
    const clients = getClients();
    const bookings = getBookings();
    const clientBookingCounts = bookings.reduce((accumulator, booking) => {
        accumulator[booking.clientId] = (accumulator[booking.clientId] || 0) + 1;
        return accumulator;
    }, {});

    const latestClient = clients[clients.length - 1] || null;
    const topClientEntry = Object.entries(clientBookingCounts).sort((a, b) => b[1] - a[1])[0] || null;
    const topClient = topClientEntry ? clients.find((client) => client.id === topClientEntry[0]) : null;

    const clientsWithBookings = clients.filter((client) => (clientBookingCounts[client.id] || 0) > 0).length;
    const clientsWithNotes = clients.filter((client) => (client.note || "").trim()).length;
    const activeContacts = clients.filter((client) => client.email && client.phone).length;
    const averageBookings = clients.length ? (bookings.length / clients.length).toFixed(1) : "0.0";

    const latestClientEl = document.getElementById("latest-client");
    if (latestClientEl) latestClientEl.textContent = latestClient ? latestClient.name : "-";

    const bookedClientsEl = document.getElementById("clients-booked");
    if (bookedClientsEl) bookedClientsEl.textContent = String(clientsWithBookings);

    const notedClientsEl = document.getElementById("clients-noted");
    if (notedClientsEl) notedClientsEl.textContent = String(clientsWithNotes);

    const avgBookingsEl = document.getElementById("clients-average-bookings");
    if (avgBookingsEl) avgBookingsEl.textContent = averageBookings;

    const activeContactsEl = document.getElementById("clients-active-contacts");
    if (activeContactsEl) activeContactsEl.textContent = String(activeContacts);

    const clientsWithBookingsEl = document.getElementById("clients-with-bookings");
    if (clientsWithBookingsEl) clientsWithBookingsEl.textContent = String(clientsWithBookings);

    const topClientEl = document.getElementById("top-client");
    if (topClientEl) topClientEl.textContent = topClient ? topClient.name : "-";

    renderMetricHighlights("clients-highlights", [
        {
            title: "Eng faol mijoz",
            meta: topClient ? `${topClient.name} - ${clientBookingCounts[topClient.id]} ta bron` : "Hozircha faol mijoz yo'q",
            tone: "accent",
        },
        {
            title: "Oxirgi qo'shilgan mijoz",
            meta: latestClient ? `${latestClient.name} · ${latestClient.email}` : "Mijoz yo'q",
            tone: "info",
        },
        {
            title: "Izohli kontaktlar",
            meta: `${clientsWithNotes} ta mijozda qo'shimcha izoh mavjud`,
            tone: "success",
        },
        {
            title: "Aloqa sifati",
            meta: `${activeContacts} ta mijozda email va telefon to'liq`,
            tone: "neutral",
        },
    ]);
}

function renderPackagesPageDetails() {
    const packages = getPackages();
    const bookings = getBookings();
    const topDestination = getTopDestination();

    const averagePrice = packages.length
        ? Math.round(packages.reduce((total, pkg) => total + Number(pkg.price || 0), 0) / packages.length)
        : 0;
    const maxPackage = packages.reduce((current, pkg) => (!current || Number(pkg.price) > Number(current.price) ? pkg : current), null);
    const minPackage = packages.reduce((current, pkg) => (!current || Number(pkg.price) < Number(current.price) ? pkg : current), null);
    const averageDuration = packages.length
        ? Math.round(packages.reduce((total, pkg) => total + parseDurationDays(pkg.duration), 0) / packages.length)
        : 0;
    const activeDestinations = new Set(packages.map((pkg) => pkg.destination).filter(Boolean)).size;
    const featuredPackage = packages
        .slice()
        .sort((a, b) => Number(b.price) - Number(a.price))[0];

    const averagePriceEl = document.getElementById("packages-average-price");
    if (averagePriceEl) averagePriceEl.textContent = `$${averagePrice}`;

    const premiumEl = document.getElementById("packages-premium");
    if (premiumEl) premiumEl.textContent = maxPackage ? `$${maxPackage.price}` : "$0";

    const topDestinationEl = document.getElementById("packages-top-destination");
    if (topDestinationEl) topDestinationEl.textContent = topDestination ? topDestination.destination : "-";

    const budgetEl = document.getElementById("packages-budget");
    if (budgetEl) budgetEl.textContent = minPackage ? `$${minPackage.price}` : "$0";

    const avgDurationEl = document.getElementById("packages-average-duration");
    if (avgDurationEl) avgDurationEl.textContent = `${averageDuration} kun`;

    const activeDestinationsEl = document.getElementById("packages-active-destinations");
    if (activeDestinationsEl) activeDestinationsEl.textContent = String(activeDestinations);

    const featuredEl = document.getElementById("packages-featured");
    if (featuredEl) featuredEl.textContent = featuredPackage ? featuredPackage.name : "-";

    renderMetricHighlights("packages-highlights", [
        {
            title: "Premium paket",
            meta: maxPackage ? `${maxPackage.name} · $${maxPackage.price}` : "Ma'lumot yo'q",
            tone: "accent",
        },
        {
            title: "Eng tejamkor variant",
            meta: minPackage ? `${minPackage.name} · $${minPackage.price}` : "Ma'lumot yo'q",
            tone: "success",
        },
        {
            title: "O'rtacha narx",
            meta: `${packages.length} ta paket uchun o'rtacha $${averagePrice}`,
            tone: "info",
        },
        {
            title: "Mavjud yo'nalishlar",
            meta: `${activeDestinations} ta alohida yo'nalish qamrab olingan`,
            tone: "neutral",
        },
    ]);
}

function renderBookingsPageDetails() {
    const bookings = getBookings();
    const clients = getClients();
    const statusSummary = getBookingStatusSummary();
    const topDestination = getTopDestination();
    const latestBooking = bookings[bookings.length - 1] || null;
    const activeClients = new Set(bookings.map((booking) => booking.clientId)).size;
    const revenue = bookings.reduce((total, booking) => {
        if (booking.status === "Rad etilgan") return total;
        const pkg = getPackageById(booking.packageId);
        return total + Number(pkg?.price || 0);
    }, 0);

    const latestBookingText = latestBooking
        ? `${getClientById(latestBooking.clientId)?.name || "Mijoz"} · ${getPackageById(latestBooking.packageId)?.name || "Paket"}`
        : "-";

    const latestBookingEl = document.getElementById("bookings-latest");
    if (latestBookingEl) latestBookingEl.textContent = latestBookingText;

    const pendingEl = document.getElementById("bookings-pending");
    if (pendingEl) pendingEl.textContent = String(statusSummary.pending);

    const confirmedEl = document.getElementById("bookings-confirmed");
    if (confirmedEl) confirmedEl.textContent = String(statusSummary.confirmed);

    const rejectedEl = document.getElementById("bookings-rejected");
    if (rejectedEl) rejectedEl.textContent = String(statusSummary.rejected);

    const revenueEl = document.getElementById("bookings-revenue");
    if (revenueEl) revenueEl.textContent = `$${revenue}`;

    const activeClientsEl = document.getElementById("bookings-active-clients");
    if (activeClientsEl) activeClientsEl.textContent = String(activeClients);

    const topDestinationEl = document.getElementById("bookings-top-destination");
    if (topDestinationEl) topDestinationEl.textContent = topDestination ? topDestination.destination : "-";

    renderMetricHighlights("bookings-highlights", [
        {
            title: "Kutayotganlar",
            meta: `${statusSummary.pending} ta bron tasdiqlanishni kutmoqda`,
            tone: "accent",
        },
        {
            title: "Tasdiqlanganlar",
            meta: `${statusSummary.confirmed} ta bron faol holatda`,
            tone: "success",
        },
        {
            title: "So'nggi bron",
            meta: latestBookingText,
            tone: "info",
        },
        {
            title: "Faol mijozlar",
            meta: `${activeClients} ta noyob mijoz bron qilgan`,
            tone: "neutral",
        },
    ]);
}

function renderRecentActivity() {
    const activityEl = document.getElementById("recent-activity");
    if (!activityEl) return;

    const bookings = getBookings();
    const clients = getClients();
    const packages = getPackages();
    const currentEmployee = authState.currentEmployee || readStorage("sayohat_current_employee", null);
    const topDestination = getTopDestination();

    const items = [];

    if (currentEmployee) {
        items.push({
            title: "Faol sessiya",
            meta: `${currentEmployee.name} tizimga kirgan`,
            tone: "success",
        });
    }

    if (topDestination) {
        items.push({
            title: "Eng ommabop yo'nalish",
            meta: `${topDestination.destination} bo'yicha ${topDestination.count} ta bron`,
            tone: "accent",
        });
    }

    const latestBooking = bookings[bookings.length - 1];
    if (latestBooking) {
        const client = getClientById(latestBooking.clientId);
        const pkg = getPackageById(latestBooking.packageId);
        items.push({
            title: "So'nggi bron",
            meta: `${client?.name || "Mijoz"} · ${pkg?.name || "Paket"} · ${latestBooking.status}`,
            tone: "info",
        });
    }

    items.push({
        title: "Tizim holati",
        meta: `${clients.length} mijoz va ${packages.length} paket faol`,
        tone: "neutral",
    });

    activityEl.innerHTML = items
        .map(
            (item) => `
                <article class="activity-item activity-${item.tone}">
                    <span class="activity-dot"></span>
                    <div>
                        <h3>${item.title}</h3>
                        <p class="small-text">${item.meta}</p>
                    </div>
                </article>`
        )
        .join("");
}

// Dashboard state helpers
function setActiveTab(tabId) {
    tabButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
    tabContents.forEach((content) => {
        content.classList.toggle("active", content.id === `${tabId}-tab`);
    });
}

function showDashboard() {
    const panelEl = dashboardPanel || document.querySelector(".dashboard-root") || document.querySelector(".dashboard-page");
    if (!panelEl) return;

    if (dashboardPanel) dashboardPanel.classList.remove("hidden");
    setActiveTab("clients");

    const employeeName = authState.currentEmployee?.name || "Xodim";
    const headerTitle =
        panelEl.querySelector(".dashboard-hero h1") ||
        panelEl.querySelector(".dashboard-header h1") ||
        panelEl.querySelector(".dashboard-panel-header h2");
    if (headerTitle) {
        headerTitle.textContent = `${employeeName} - Admin Panel`;
    }

    renderDashboard();

    document.querySelectorAll(".avatar").forEach((avatarEl) => {
        avatarEl.textContent = (employeeName || "A").trim().charAt(0).toUpperCase();
    });
}

function hideDashboard() {
    if (dashboardPanel) dashboardPanel.classList.add("hidden");
}

// Render helpers
function getPopularDestinations() {
    const bookings = getBookings();

    const counts = bookings.reduce((accumulator, booking) => {
        const pkg = getPackageById(booking.packageId);
        if (pkg) {
            accumulator[pkg.destination] = (accumulator[pkg.destination] || 0) + 1;
        }
        return accumulator;
    }, {});

    const popular = popularDestinationSeeds.map((destination) => ({
        destination,
        count: counts[destination] || 0,
        imageUrl: getDestinationImage(destination),
    }));

    return popular
        .sort((a, b) => b.count - a.count || popularDestinationSeeds.indexOf(a.destination) - popularDestinationSeeds.indexOf(b.destination))
        .slice(0, 10);
}

function renderPackages() {
    if (!packageListEl) return;

    const packages = getPackages();
    packageListEl.innerHTML = packages
        .map(
            (pkg) => `
                <article class="package-card">
                    <div class="package-card-image card-media">
                        <img loading="lazy" src="${pkg.imageUrl || getDestinationImage(pkg.destination)}" alt="${pkg.name}">
                        <div class="card-overlay"></div>
                        <span class="card-badge">${pkg.duration}</span>
                    </div>
                    <div class="package-card-content card-body">
                        <div class="card-top">
                            <span class="card-chip">${pkg.destination}</span>
                            <span class="card-price">$${pkg.price}</span>
                        </div>
                        <h3>${pkg.name}</h3>
                        <p class="small-text">${pkg.duration} davomiylik</p>
                        <p>${pkg.description}</p>
                        <div class="card-stats">
                            <span class="card-stat">Onlayn bron</span>
                            <span class="card-stat">24/7 yordam</span>
                        </div>
                        <div class="package-card-footer">
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
            (item, index) => `
                <article class="destination-card">
                    <div class="destination-card-image card-media">
                        <img loading="lazy" src="${item.imageUrl || getDestinationImage(item.destination)}" alt="${item.destination}">
                        <div class="card-overlay"></div>
                        <span class="card-badge">#${String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div class="destination-card-content card-body">
                        <div class="card-top">
                            <span class="card-chip">Yo'nalish</span>
                            <span class="card-score">${item.count} bron</span>
                        </div>
                        <h3>${item.destination}</h3>
                        <p class="small-text">Eng ko'p qiziqish uyg'otgan yo'nalishlardan biri.</p>
                        <p>${item.count > 0 ? `Bu yo'nalishda ${item.count} ta bron bor.` : "Hozircha bron yo'q, ammo talab yuqori."}</p>
                        <div class="card-stats">
                            <span class="card-stat">${item.count > 0 ? "Faol" : "Yangi"}</span>
                            <span class="card-stat">Top 10</span>
                        </div>
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
    renderClients();
    renderPackagesDashboard();
    renderBookings();
    renderDestinations();
    renderRecentActivity();
    renderClientsPageDetails();
    renderPackagesPageDetails();
    renderBookingsPageDetails();

    const bookings = getBookings();
    const packages = getPackages();
    const clients = getClients();
    const statusSummary = getBookingStatusSummary();
    const topDestination = getTopDestination();

    const clientsCountEl = document.getElementById("clients-count");
    if (clientsCountEl) clientsCountEl.textContent = String(clients.length);

    const packagesCountEl = document.getElementById("packages-count");
    if (packagesCountEl) packagesCountEl.textContent = String(packages.length);

    const bookingsCountEl = document.getElementById("bookings-count");
    if (bookingsCountEl) bookingsCountEl.textContent = String(bookings.length);

    const pendingBookingsEl = document.getElementById("pending-bookings");
    if (pendingBookingsEl) pendingBookingsEl.textContent = String(statusSummary.pending);

    const confirmedBookingsEl = document.getElementById("confirmed-bookings");
    if (confirmedBookingsEl) confirmedBookingsEl.textContent = String(statusSummary.confirmed);

    const estimatedRevenueEl = document.getElementById("estimated-revenue");
    if (estimatedRevenueEl) {
        const revenue = bookings.reduce((total, booking) => {
            if (booking.status === "Rad etilgan") return total;
            const pkg = getPackageById(booking.packageId);
            return total + Number(pkg?.price || 0);
        }, 0);
        estimatedRevenueEl.textContent = `$${revenue}`;
    }

    const activeDestinationsEl = document.getElementById("active-destinations");
    if (activeDestinationsEl) {
        const uniqueDestinations = new Set(
            bookings
                .filter((booking) => booking.status !== "Rad etilgan")
                .map((booking) => getPackageById(booking.packageId)?.destination)
                .filter(Boolean)
        );
        activeDestinationsEl.textContent = String(uniqueDestinations.size);
    }

    const topDestinationEl = document.getElementById("top-destination");
    if (topDestinationEl) topDestinationEl.textContent = topDestination ? topDestination.destination : "-";

    const lastUserEl = document.getElementById("last-user");
    const currentEmployee = authState.currentEmployee || readStorage("sayohat_current_employee", null);
    if (lastUserEl) lastUserEl.textContent = currentEmployee ? currentEmployee.name : "-";
}

// Modal helpers
function getModalFields() {
    return {
        nameInput: document.getElementById("employee-name"),
        emailInput: document.getElementById("employee-email"),
        passwordInput: document.getElementById("employee-password"),
        bookingNameInput: document.getElementById("booking-name"),
        bookingEmailInput: document.getElementById("booking-email"),
        bookingPhoneInput: document.getElementById("booking-phone"),
        bookingNoteInput: document.getElementById("booking-note"),
        bookingPackageInput: document.getElementById("booking-package"),
    };
}

function renderAuthModal(mode) {
    if (!authForm) return;

    authState.mode = mode;
    delete authForm.dataset.packageId;
    authForm.innerHTML = authFormTemplate;
    authHelp = document.getElementById("auth-help");

    if (mode === "register") {
        modalTitle.textContent = "Xodim ro'yxatdan o'tishi";
        authHelp.textContent = "Siz tizimda xodim sifatida ro'yxatdan o'tishingiz mumkin.";
        return;
    }

    modalTitle.textContent = "Xodim kirishi";
    authHelp.innerHTML = "Demo uchun: Email: <code>demo@mail.com</code> | Parol: <code>123456</code>. Bu kirish har doim ishlaydi.";
}

function renderBookingModal(pkg) {
    if (!authForm) return;

    authState.mode = "booking";
    authForm.dataset.packageId = pkg.id;
    authForm.innerHTML = `
        <div class="form-group">
            <label>Tanlangan paket</label>
            <div class="card" style="padding: 12px; margin-top: 8px;">
                <strong>${pkg.name}</strong>
                <p style="margin: 6px 0 0;">${pkg.duration} · $${pkg.price}</p>
            </div>
            <input type="hidden" id="booking-package" value="${pkg.id}" />
        </div>
        <div class="form-group">
            <label for="booking-name">Ismingiz</label>
            <input type="text" id="booking-name" required placeholder="Ismingizni yozing" />
        </div>
        <div class="form-group">
            <label for="booking-email">Email</label>
            <input type="email" id="booking-email" required placeholder="Email manzilingiz" />
        </div>
        <div class="form-group">
            <label for="booking-phone">Telefon</label>
            <input type="tel" id="booking-phone" required placeholder="+998..." />
        </div>
        <div class="form-group">
            <label for="booking-note">Qo'shimcha izoh</label>
            <textarea id="booking-note" rows="3" placeholder="Masalan: sanalar, yo'lovchilar soni, maxsus talablar"></textarea>
        </div>
        <div class="form-actions">
            <button type="button" id="fill-demo" class="btn btn-secondary">Demo to'ldirish</button>
            <button type="submit" class="btn btn-primary">Bron qilish</button>
        </div>
        <p id="auth-help" class="auth-help"></p>
    `;
    authHelp = document.getElementById("auth-help");
    modalTitle.textContent = "Bron qilish";
    authHelp.textContent = "Ma'lumotlaringizni kiriting, biz siz bilan bog'lanamiz.";
}

function setAuthSubmitting(isSubmitting, message) {
    const submitButton = authForm?.querySelector('button[type="submit"]');
    const demoButton = authForm?.querySelector('#fill-demo');

    if (submitButton) {
        submitButton.disabled = isSubmitting;
        submitButton.textContent = isSubmitting ? "Yuborilmoqda..." : authState.mode === "booking" ? "Bron qilish" : "Yuborish";
    }

    if (demoButton) {
        demoButton.disabled = isSubmitting;
    }

    if (authHelp && message) {
        authHelp.textContent = message;
    }
}

function showModal(mode) {
    renderAuthModal(mode);
    modal.classList.remove("hidden");
}

function showBookingModal(pkg) {
    if (!pkg) return;
    renderBookingModal(pkg);
    modal.classList.remove("hidden");
}

function hideModal() {
    modal.classList.add("hidden");
    if (authForm) {
        authForm.reset();
        delete authForm.dataset.packageId;
    }
}

// Edit modal helpers
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
            const updated = item.id ? clients.map((client) => (client.id === item.id ? payload : client)) : [...clients, payload];
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
            const updated = item.id ? packages.map((pkg) => (pkg.id === item.id ? payload : pkg)) : [...packages, payload];
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
            const updated = item.id ? bookings.map((booking) => (booking.id === item.id ? payload : booking)) : [...bookings, payload];
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
        writeStorage(clientsKey, getClients().filter((item) => item.id !== id));
        writeStorage(bookingsKey, getBookings().filter((booking) => booking.clientId !== id));
    }

    if (type === "package") {
        writeStorage(packagesKey, getPackages().filter((item) => item.id !== id));
        writeStorage(bookingsKey, getBookings().filter((booking) => booking.packageId !== id));
    }

    if (type === "booking") {
        writeStorage(bookingsKey, getBookings().filter((item) => item.id !== id));
    }

    renderDashboard();
}

// Booking search
const searchBookingsBtn = document.getElementById("search-bookings-btn");
const checkEmailInput = document.getElementById("check-email");
const resultsEl = document.getElementById("my-bookings-results");

function renderCustomerBookings(email) {
    if (!resultsEl) return;

    const client = getClients().find((item) => item.email === email);
    if (!client) {
        resultsEl.innerHTML = "<p>Bu email bilan bron topilmadi.</p>";
        return;
    }

    const bookings = getBookings().filter((booking) => booking.clientId === client.id);
    if (!bookings.length) {
        resultsEl.innerHTML = "<p>Sizda hali bronlar yo'q.</p>";
        return;
    }

    resultsEl.innerHTML = bookings
        .map((booking) => {
            const pkg = getPackageById(booking.packageId) || { name: "Noma'lum", price: 0, duration: "Noma'lum" };
            const statusClass = booking.status === "Tasdiqlangan" ? "status-confirmed" : booking.status === "Rad etilgan" ? "status-rejected" : "status-pending";

            return `
                <article class="card booking-result-card ${statusClass}">
                    <div class="booking-result-content">
                        <div class="booking-info">
                            <span class="status-badge">${booking.status}</span>
                            <h3>${pkg.name}</h3>
                            <div class="booking-meta">
                                <span>${pkg.duration}</span>
                                <span>$${pkg.price}</span>
                            </div>
                        </div>
                        <button class="btn btn-link delete-booking-btn" data-id="${booking.id}">Bekor qilish</button>
                    </div>
                </article>`;
        })
        .join("");
}

// Initial data
async function setupInitialData() {
    await ensureDefaultEmployeeOnSupabase();

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

async function init() {
    setupInitialData();
    await syncBookingsFromSupabase();
    renderPackages();
    renderDestinations();

    const persistedEmployee = readStorage("sayohat_current_employee", null);
    if (persistedEmployee) {
        authState.currentEmployee = persistedEmployee;
        if (location.pathname.includes("dashboard.html")) {
            showDashboard();
        } else if (dashboardPanel) {
            showDashboard();
        }
    }
}

// Auth form behavior
if (authForm) {
    authForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const fields = getModalFields();

        if (authState.mode === "booking") {
            const name = fields.bookingNameInput?.value.trim();
            const email = fields.bookingEmailInput?.value.trim().toLowerCase();
            const phone = fields.bookingPhoneInput?.value.trim();
            const note = fields.bookingNoteInput?.value.trim() || "";
            const packageId = authForm.dataset.packageId || fields.bookingPackageInput?.value;

            if (!name || !email || !phone || !packageId) {
                if (authHelp) authHelp.textContent = "Iltimos, barcha majburiy maydonlarni to'ldiring.";
                return;
            }

            const clients = getClients();
            const existingClient = clients.find((client) => client.email === email);
            const client = existingClient
                ? { ...existingClient, name, phone, note }
                : { id: createId("c"), name, email, phone, note };
            const updatedClients = existingClient ? clients.map((item) => (item.id === existingClient.id ? client : item)) : [...clients, client];
            const pkg = getPackageById(packageId);

            if (!pkg) {
                if (authHelp) authHelp.textContent = "Tanlangan paket topilmadi.";
                return;
            }

            setAuthSubmitting(true, "Bron Supabase'ga yuborilmoqda...");

            try {
                const supabaseRow = buildSupabaseBookingRow({ client, pkg, note });
                const insertedRows = await saveBookingToSupabase(supabaseRow);
                const savedBooking = insertedRows?.[0] || supabaseRow;
                const localBooking = {
                    id: createId("b"),
                    clientId: client.id,
                    packageId: pkg.id,
                    status: savedBooking.status || "Kutmoqda",
                    supabaseId: savedBooking.id || null,
                };

                writeStorage(clientsKey, updatedClients);
                writeStorage(bookingsKey, [...getBookings(), localBooking]);
                renderDashboard();
                hideModal();
                alert("Bron muvaffaqiyatli saqlandi.");
            } catch (error) {
                console.error("Supabase booking insert error:", error);
                setAuthSubmitting(false, "Bronni saqlab bo'lmadi. Qayta urinib ko'ring.");
                return;
            }
            setAuthSubmitting(false);
            return;
        }

        const email = fields.emailInput?.value.trim().toLowerCase() || "";
        const name = fields.nameInput?.value.trim() || "";
        const password = fields.passwordInput?.value.trim() || "";
        const isDemoLogin = email === "demo@mail.com" && password === "123456";
        if (authState.mode === "register") {
            setAuthSubmitting(true, "Ro'yxatdan o'tkazilmoqda...");

            try {
                const existingRemoteEmployee = await fetchEmployeeByEmailFromSupabase(email);
                if (existingRemoteEmployee) {
                    if (authHelp) authHelp.textContent = "Bu email bilan xodim allaqachon ro'yxatdan o'tgan.";
                    setAuthSubmitting(false);
                    return;
                }

                const hashedPassword = await hashPassword(password);
                const newEmployeeRow = {
                    name,
                    email,
                    password: hashedPassword,
                    source: "sayohat-web",
                };
                const insertedRows = await saveEmployeeToSupabase(newEmployeeRow);
                const savedEmployee = insertedRows?.[0] || { ...newEmployeeRow, id: createId("e") };
                const cachedEmployee = {
                    id: savedEmployee.id || createId("e"),
                    name: savedEmployee.name || name,
                    email: savedEmployee.email || email,
                    password: savedEmployee.password || hashedPassword,
                    source: savedEmployee.source || "sayohat-web",
                };

                writeStorage(employeesKey, mergeEmployeesByEmail(getEmployees(), cachedEmployee));
                authState.mode = "login";
                renderAuthModal("login");
                if (authHelp) authHelp.textContent = "Ro'yxatdan o'tish muvaffaqiyatli. Endi tizimga kirishingiz mumkin.";
            } catch (error) {
                console.error("Supabase employee register error:", error);
                if (authHelp) authHelp.textContent = "Ro'yxatdan o'tkazishda xatolik yuz berdi. Qayta urinib ko'ring.";
            } finally {
                setAuthSubmitting(false);
            }
            return;
        }

        setAuthSubmitting(true, "Kirish tekshirilmoqda...");

        try {
            if (isDemoLogin) {
                await ensureDefaultEmployeeOnSupabase();

                const demoEmployee = getEmployees().find((employee) => employee.email.toLowerCase() === email) || {
                    id: "e_demo",
                    name: "demo",
                    email,
                    password: await hashPassword(password),
                    source: "sayohat-web",
                };

                const cachedDemoEmployee = {
                    id: demoEmployee.id || "e_demo",
                    name: demoEmployee.name || "demo",
                    email: demoEmployee.email || email,
                    password: demoEmployee.password || (await hashPassword(password)),
                    source: demoEmployee.source || "sayohat-web",
                };

                writeStorage(employeesKey, mergeEmployeesByEmail(getEmployees(), cachedDemoEmployee));
                authState.currentEmployee = {
                    id: cachedDemoEmployee.id,
                    name: cachedDemoEmployee.name,
                    email: cachedDemoEmployee.email,
                };
                writeStorage("sayohat_current_employee", authState.currentEmployee);

                if (!location.pathname.includes("dashboard.html")) {
                    window.location.href = "dashboard.html";
                    return;
                }

                hideModal();
                showDashboard();
                return;
            }

            const remoteEmployee = await fetchEmployeeByEmailFromSupabase(email);
            if (!remoteEmployee) {
                if (authHelp) authHelp.textContent = "Bu email bilan xodim topilmadi. Avval ro'yxatdan o'ting.";
                return;
            }

            const passwordOk = await employeePasswordMatches(password, remoteEmployee.password || "");
            if (!passwordOk) {
                if (authHelp) authHelp.textContent = "Email yoki parol noto'g'ri. Iltimos qayta urinib ko'ring.";
                return;
            }

            const cachedEmployee = {
                id: remoteEmployee.id || createId("e"),
                name: remoteEmployee.name || name || remoteEmployee.email,
                email: remoteEmployee.email || email,
                password: remoteEmployee.password || "",
                source: remoteEmployee.source || "sayohat-web",
            };

            writeStorage(employeesKey, mergeEmployeesByEmail(getEmployees(), cachedEmployee));
            authState.currentEmployee = {
                id: cachedEmployee.id,
                name: cachedEmployee.name,
                email: cachedEmployee.email,
            };
            writeStorage("sayohat_current_employee", authState.currentEmployee);

            if (!location.pathname.includes("dashboard.html")) {
                window.location.href = "dashboard.html";
                return;
            }

            hideModal();
            showDashboard();
        } catch (error) {
            console.error("Supabase employee login error:", error);
            if (authHelp) authHelp.textContent = "Kirish vaqtida xatolik yuz berdi. Tarmoq va Supabase sozlamasini tekshiring.";
        } finally {
            setAuthSubmitting(false);
        }
    });

    authForm.addEventListener("click", (event) => {
        if (event.target?.id !== "fill-demo") return;
        const fields = getModalFields();

        if (authState.mode === "booking") {
            if (fields.bookingNameInput) fields.bookingNameInput.value = "Demo Mijoz";
            if (fields.bookingEmailInput) fields.bookingEmailInput.value = "demo@mail.com";
            if (fields.bookingPhoneInput) fields.bookingPhoneInput.value = "+998901234567";
            if (fields.bookingNoteInput) fields.bookingNoteInput.value = "Tezroq bog'laning";
            return;
        }

        if (fields.emailInput) fields.emailInput.value = "demo@mail.com";
        if (fields.passwordInput) fields.passwordInput.value = "123456";
        if (fields.nameInput) fields.nameInput.value = "demo";
    });
}

// Shared modal buttons
[...openLoginBtns, ...openRegisterBtns].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener("click", () => {
        const mode = btn.id.includes("register") || btn.id === "open-register" || btn.id === "open-register-2" ? "register" : "login";
        showModal(mode);
    });
});

if (closeModal) closeModal.addEventListener("click", hideModal);
if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) hideModal();
    });
}

// Booking actions from package cards
if (packageListEl) {
    packageListEl.addEventListener("click", (event) => {
        const button = event.target.closest(".book-now-btn");
        if (!button) return;
        showBookingModal(getPackageById(button.dataset.id));
    });
}

// Dashboard actions
if (addClientBtn) addClientBtn.addEventListener("click", () => showEditForm("client"));
if (addPackageBtn) addPackageBtn.addEventListener("click", () => showEditForm("package"));
if (addBookingBtn) addBookingBtn.addEventListener("click", () => showEditForm("booking"));
if (dashboardNewBookingBtn) {
    dashboardNewBookingBtn.addEventListener("click", () => {
        const bookingsTabBtn = document.querySelector('[data-tab="bookings"]');
        if (bookingsTabBtn) bookingsTabBtn.click();
        showEditForm("booking");
    });
}

if (closeEditModal) closeEditModal.addEventListener("click", hideEditModal);
if (editModal) {
    editModal.addEventListener("click", (event) => {
        if (event.target === editModal) hideEditModal();
    });
}

if (clientsListEl) {
    clientsListEl.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        const id = event.target.dataset.id;
        if (!action) return;
        if (action === "edit-client") {
            showEditForm("client", getClients().find((client) => client.id === id));
        }
        if (action === "delete-client") deleteItem("client", id);
    });
}

if (packagesDashboardEl) {
    packagesDashboardEl.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        const id = event.target.dataset.id;
        if (!action) return;
        if (action === "edit-package") {
            showEditForm("package", getPackages().find((pkg) => pkg.id === id));
        }
        if (action === "delete-package") deleteItem("package", id);
    });
}

if (bookingsListEl) {
    bookingsListEl.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        const id = event.target.dataset.id;
        if (!action) return;
        if (action === "edit-booking") {
            showEditForm("booking", getBookings().find((booking) => booking.id === id));
        }
        if (action === "delete-booking") deleteItem("booking", id);
    });
}

tabButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
        const isActive = menuToggle.classList.toggle("active");
        navLinksContainer.classList.toggle("active");
        document.body.style.overflow = isActive ? "hidden" : "";
    });

    navLinksContainer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinksContainer.classList.remove("active");
            document.body.style.overflow = "";
        });
    });
}

// Search bookings
if (searchBookingsBtn) {
    searchBookingsBtn.addEventListener("click", () => {
        const email = checkEmailInput.value.trim().toLowerCase();
        if (!email) {
            alert("Emailni kiriting");
            return;
        }
        renderCustomerBookings(email);
    });
}

if (resultsEl) {
    resultsEl.addEventListener("click", (event) => {
        const button = event.target.closest(".delete-booking-btn");
        if (!button) return;

        const id = button.dataset.id;
        if (!confirm("Bronni bekor qilishni xohlaysizmi?")) return;

        writeStorage(bookingsKey, getBookings().filter((booking) => booking.id !== id));
        if (checkEmailInput?.value) {
            renderCustomerBookings(checkEmailInput.value.trim().toLowerCase());
        }
        renderDashboard();
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        authState.currentEmployee = null;
        localStorage.removeItem("sayohat_current_employee");

        if (location.pathname.includes("dashboard.html")) {
            window.location.href = "index.html";
            return;
        }

        hideDashboard();
    });
}

init();
