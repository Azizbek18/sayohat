const employeesKey = "sayohat_employees";
const clientsKey = "sayohat_clients";
const packagesKey = "sayohat_packages";
const bookingsKey = "sayohat_bookings";
const supabaseUrl = "https://nwjqvgqydrjkveievogo.supabase.co";
const supabaseKey = "sb_publishable_WaZvU4qjGkSQu2Vd1qZujw_RcPZfqAh";
const supabaseTable = "sayohat";
const supabaseEmployeesTable = "sayohat_employees";
const supabaseClientsTable = "sayohat_clients";
const supabasePackagesTable = "paketlar";
const translations = {
    uz: {
        logo_text: "Sayohat",
        logo_admin: "Sayohat Admin",
        nav_home: "Bosh sahifa",
        nav_packages: "Paketlar",
        nav_destinations: "Yo'nalishlar",
        nav_my_bookings: "Mening bronlarim",
        btn_login: "Kirish",
        hero_eyebrow: "Sayohat Agentligi",
        hero_h1: "Dunyo bo'ylab unutilmas sayohatlarni biz bilan boshlang",
        hero_p: "Eng sara tur paketlar, hamyonbop narxlar va ishonchli xizmat. O'zingizga mos turni tanlang va onlayn bron qiling.",
        hero_btn_book: "Hozir bron qilish",
        hero_btn_check: "Bronni tekshirish",
        pkgs_eyebrow: "Tur paketlari",
        pkgs_h2: "Eng yaxshi paketlar",
        dests_eyebrow: "Yo'nalishlar",
        dests_h2: "Eng ommabop yo'nalishlar",
        check_eyebrow: "Mijozlar uchun",
        check_h2: "Bronlaringizni tekshiring",
        check_search_h3: "Bronlaringizni toping",
        check_search_p: "Bron holatini ko'rish yoki uni bekor qilish uchun tizimga kiritilgan email manzilingizni kiriting.",
        check_btn: "Bronlarni qidirish",
        admin_p: "Siz agentlik xodimimisiz?",
        admin_btn: "Admin panelga kirish",
        mini_mgmt_h3: "To'liq boshqaruv",
        mini_mgmt_p: "Mijozlar, paketlar va bronlarni bitta joydan boshqaring.",
        mini_dest_h3: "Ommabop yo'nalishlar",
        mini_dest_p: "Ommabop sayohat yo'nalishlari avtomatik tarzda chiqariladi.",
        mini_reg_h3: "Ro'yxatdan o'tish",
        mini_reg_p: "Xodimlar ro'yxatdan o'tishi va o'z boshqaruv paneliga kirishi mumkin.",
        footer_copy: "© 2026 Sayohat Agentligi. Barcha huquqlar himoyalangan.",
        footer_dev: "Web dastur HTML, CSS va JavaScript yordamida ishlab chiqildi.",
        admin_panel: "Admin Panel",
        modal_login: "Kirish",
        modal_register: "Xodim ro'yxatdan o'tishi",
        modal_booking: "Bron qilish",
        modal_edit: "Tahrirlash",
        label_name: "Ismingiz",
        label_email: "Email",
        label_password: "Parol",
        th_name: "Ism",
        th_email: "Email",
        th_phone: "Telefon",
        th_note: "Eslatma",
        th_action: "Harakat",
        th_package: "Paket",
        th_destination: "Yo'nalish",
        th_duration: "Davomiylik",
        th_price: "Narxi",
        th_status: "Status",
        status_pending: "Kutmoqda",
        status_confirmed: "Tasdiqlangan",
        status_rejected: "Rad etilgan",
        msg_loading: "Yuklanmoqda...",
        msg_sync_data: "Ma'lumotlar sinxronizatsiya qilinmoqda",
        msg_confirm_delete_title: "Ishonchingiz komilmi?",
        msg_confirm_delete_text: "O'chirilgan ma'lumotni qaytarib bo'lmaydi!",
        msg_btn_yes: "Ha, o'chirilsin!",
        msg_btn_no: "Bekor qilish",
        msg_deleted_title: "O'chirildi!",
        msg_deleted_text: "Ma'lumot muvaffaqiyatli o'chirildi.",
        msg_save_success: "Muvaffaqiyatli saqlandi",
        msg_error_title: "Xatolik!",
        msg_booking_success_title: "Tabriklaymiz!",
        msg_booking_success_text: "Sizning buyurtmangiz qabul qilindi. Tez orada operatorlarimiz bog'lanishadi.",
        msg_search_empty: "Iltimos, qidirish uchun email manzilingizni kiriting.",
        msg_confirm_cancel_title: "Bekor qilinsinmi?",
        msg_confirm_cancel_text: "Siz ushbu bronni bekor qilmoqchimisiz?",
        msg_btn_cancel_yes: "Ha, bekor qilinsin",
        msg_btn_cancel_no: "Yo'q, qolsin",
        msg_cancel_success_title: "Bekor qilindi",
        msg_cancel_success_text: "Sizning broningiz bekor qilindi.",
        auth_help_login: "Demo uchun: Email: <code>demo@mail.com</code> | Parol: <code>123456</code>. Bu kirish har doim ishlaydi.",
        auth_help_register: "Siz tizimda xodim sifatida ro'yxatdan o'tishingiz mumkin.",
        auth_help_booking: "Ma'lumotlaringizni kiriting, biz siz bilan bog'lanamiz.",
        err_required: "Iltimos, barcha majburiy maydonlarni to'ldiring.",
        btn_submitting: "Yuborilmoqda...",
        swal_icon_color: "#185adb",
        swal_success_img: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
        dest_type: "Yo'nalish",
        dest_bookings_label: "bron",
        dest_desc_text: "Eng ko'p qiziqish uyg'otgan yo'nalishlardan biri.",
        dest_count_msg: "Bu yo'nalishda {count} ta bron bor.",
        dest_no_count_msg: "Hozircha bron yo'q, ammo talab yuqori.",
        dest_status_active: "Faol",
        dest_status_new: "Yangi",
        dest_top_label: "Top 10",
        dest_name_Bali: "Bali",
        dest_name_Istanbul: "Istanbul",
        dest_name_Dubay: "Dubay",
        dest_name_Fransiya: "Fransiya",
        dest_name_Samarqand: "Samarqand",
        dest_name_Maldiv: "Maldiv",
        dest_name_Misr: "Misr",
        dest_name_Antalya: "Antalya",
        dest_name_Rim: "Rim",
        dest_name_Tailand: "Tailand",
        "dest_name_O'zbekiston": "O'zbekiston",
        pkg_duration_suffix: "davomiylik",
        pkg_online_booking: "Onlayn bron",
        pkg_support: "24/7 yordam",
        pkg_btn_book: "Bron qilish",
        pkg_no_data: "Hali paketlar mavjud emas.",
        pkg_p1_name: "Bali Dam olish",
        pkg_p1_desc: "Quyosh, dengiz va dam olish paketini o'z ichiga oladi.",
        pkg_p1_dur: "7 kun",
        pkg_p2_name: "Istanbul sayohati",
        pkg_p2_desc: "Madaniyat, tarixiy sayyohlik va maxsus tur paket.",
        pkg_p2_dur: "5 kun",
        pkg_p3_name: "Dubay hashamati",
        pkg_p3_desc: "Lyuks shaharda sayohat, savdo markazlari va qulay yashash.",
        pkg_p3_dur: "6 kun",
        pkg_p4_name: "Parij Romantikasi",
        pkg_p4_desc: "Eyxel minorasi, Luvr muzeyi va romantik kechki ovqat.",
        pkg_p4_dur: "4 kun",
        pkg_p5_name: "Toshkent - Samarqand",
        pkg_p5_desc: "O'zbekistonning tarixiy shaharlariga sayohat.",
        pkg_p5_dur: "3 kun",
        pkg_p6_name: "Maldiv orollari",
        pkg_p6_desc: "Okean o'rtasida unutilmas dam olish.",
        pkg_p6_dur: "10 kun",
        pkg_p7_name: "Misr ehromlari",
        pkg_p7_desc: "Qadimgi tarix va Qizil dengiz bo'yida hordiq.",
        pkg_p7_dur: "6 kun",
        pkg_p8_name: "Antalya All Inclusive",
        pkg_p8_desc: "O'rta yer dengizi sohilida besh yulduzli dam olish.",
        pkg_p8_dur: "7 kun",
        pkg_p9_name: "Samarqand Marvaridi",
        pkg_p9_desc: "Registon maydoni, Go'ri Amir va qadimiy obidalar bo'ylab sayohat.",
        pkg_p9_dur: "4 kun",
        pkg_p10_name: "Rim - Abadiy Shahar",
        pkg_p10_desc: "Kolizey, Rim forumi va Italiyaning mazali oshxonasi.",
        pkg_p10_dur: "5 kun"
    },
    ru: {
        logo_text: "Путешествие",
        logo_admin: "Админ Панель",
        nav_home: "Главная",
        nav_packages: "Пакеты",
        nav_destinations: "Направления",
        nav_my_bookings: "Мои бронирования",
        btn_login: "Вход",
        hero_eyebrow: "Туристическое Агентство",
        hero_h1: "Начните незабываемые путешествия по миру с нами",
        hero_p: "Лучшие турпакеты, доступные цены и надежный сервис. Выберите подходящий тур и забронируйте онлайн.",
        hero_btn_book: "Забронировать сейчас",
        hero_btn_check: "Проверить бронь",
        pkgs_eyebrow: "Турпакеты",
        pkgs_h2: "Лучшие предложения",
        dests_eyebrow: "Направления",
        dests_h2: "Популярные направления",
        check_eyebrow: "Для клиентов",
        check_h2: "Проверьте свои бронирования",
        check_search_h3: "Найдите свою бронь",
        check_search_p: "Введите почту, указанную при бронировании, чтобы увидеть статус или отменить его.",
        check_btn: "Поиск бронирований",
        admin_p: "Вы сотрудник агентства?",
        admin_btn: "Вход в админ-панель",
        mini_mgmt_h3: "Полное управление",
        mini_mgmt_p: "Управляйте клиентами, пакетами и бронированиями в одном месте.",
        mini_dest_h3: "Популярные направления",
        mini_dest_p: "Популярные туристические направления отображаются автоматически.",
        mini_reg_h3: "Регистрация",
        mini_reg_p: "Сотрудники могут регистрироваться и входить в свою панель управления.",
        footer_copy: "© 2026 Туристическое агентство. Все права защищены.",
        footer_dev: "Веб-приложение разработано с использованием HTML, CSS и JavaScript.",
        admin_panel: "Админ панель",
        modal_login: "Вход",
        modal_register: "Регистрация сотрудника",
        modal_booking: "Бронирование",
        modal_edit: "Редактирование",
        label_name: "Ваше имя",
        label_email: "Email",
        label_password: "Пароль",
        th_name: "Имя",
        th_email: "Email",
        th_phone: "Телефон",
        th_note: "Заметка",
        th_action: "Действие",
        th_package: "Пакет",
        th_destination: "Направление",
        th_duration: "Длительность",
        th_price: "Цена",
        th_status: "Статус",
        status_pending: "В ожидании",
        status_confirmed: "Подтверждено",
        status_rejected: "Отклонено",
        msg_loading: "Загрузка...",
        msg_sync_data: "Данные синхронизируются с Supabase",
        msg_confirm_delete_title: "Вы уверены?",
        msg_confirm_delete_text: "Удаленные данные нельзя будет восстановить!",
        msg_btn_yes: "Да, удалить!",
        msg_btn_no: "Отмена",
        msg_deleted_title: "Удалено!",
        msg_deleted_text: "Данные успешно удалены.",
        msg_save_success: "Успешно сохранено",
        msg_error_title: "Ошибка!",
        msg_booking_success_title: "Поздравляем!",
        msg_booking_success_text: "Ваш заказ принят. Наши операторы скоро свяжутся с вами.",
        msg_search_empty: "Пожалуйста, введите свой адрес электронной почты для поиска.",
        msg_confirm_cancel_title: "Отменить бронирование?",
        msg_confirm_cancel_text: "Вы уверены, что хотите отменить это бронирование?",
        msg_btn_cancel_yes: "Да, отменить",
        msg_btn_cancel_no: "Нет, оставить",
        msg_cancel_success_title: "Отменено",
        msg_cancel_success_text: "Ваше бронирование было отменено.",
        auth_help_login: "Для демо: Email: <code>demo@mail.com</code> | Пароль: <code>123456</code>. Этот вход всегда работает.",
        auth_help_register: "Вы можете зарегистрироваться в системе как сотрудник.",
        auth_help_booking: "Введите свои данные, и мы свяжемся с вами.",
        err_required: "Пожалуйста, заполните все обязательные поля.",
        btn_submitting: "Отправка...",
        swal_icon_color: "#ff7c5f",
        swal_success_img: "https://cdn-icons-png.flaticon.com/512/826/826070.png",
        dest_type: "Направление",
        dest_bookings_label: "броней",
        dest_desc_text: "Одно из самых интересных направлений.",
        dest_count_msg: "Для этого направления есть {count} броней.",
        dest_no_count_msg: "Бронирований пока нет, но спрос высокий.",
        dest_status_active: "Активно",
        dest_status_new: "Новое",
        dest_top_label: "Топ 10",
        dest_name_Bali: "Бали",
        dest_name_Istanbul: "Стамбул",
        dest_name_Dubay: "Дубай",
        dest_name_Fransiya: "Франция",
        dest_name_Samarqand: "Самарканд",
        dest_name_Maldiv: "Мальдивы",
        dest_name_Misr: "Египет",
        dest_name_Antalya: "Анталья",
        dest_name_Rim: "Рим",
        dest_name_Tailand: "Таиланд",
        "dest_name_O'zbekiston": "Узбекистан",
        pkg_duration_suffix: "длительность",
        pkg_online_booking: "Онлайн бронь",
        pkg_support: "Поддержка 24/7",
        pkg_btn_book: "Забронировать",
        pkg_no_data: "Пакеты пока не доступны.",
        pkg_p1_name: "Отдых на Бали",
        pkg_p1_desc: "Включает в себя пакет солнца, моря и отдыха.",
        pkg_p1_dur: "7 дней",
        pkg_p2_name: "Путешествие в Стамбул",
        pkg_p2_desc: "Культура, исторический туризм и специальный турпакет.",
        pkg_p2_dur: "5 дней",
        pkg_p3_name: "Роскошь Дубая",
        pkg_p3_desc: "Путешествие в люксовый город, торговые центры и комфортное проживание.",
        pkg_p3_dur: "6 дней",
        pkg_p4_name: "Романтика Парижа",
        pkg_p4_desc: "Эйфелева башня, Лувр и романтический ужин.",
        pkg_p4_dur: "4 дня",
        pkg_p5_name: "Ташкент - Самарканд",
        pkg_p5_desc: "Путешествие по историческим городам Узбекистана.",
        pkg_p5_dur: "3 дня",
        pkg_p6_name: "Мальдивские острова",
        pkg_p6_desc: "Незабываемый отдых посреди океана.",
        pkg_p6_dur: "10 дней",
        pkg_p7_name: "Пирамиды Египта",
        pkg_p7_desc: "Древняя история и отдых на Красном море.",
        pkg_p7_dur: "6 дней",
        pkg_p8_name: "Анталья All Inclusive",
        pkg_p8_desc: "Пятизвездочный отдых на побережье Средиземного моря.",
        pkg_p8_dur: "7 дней",
        pkg_p9_name: "Жемчужина Самарканда",
        pkg_p9_desc: "Площадь Регистан, Гур-Эмир и путешествие по древним памятникам.",
        pkg_p9_dur: "4 дня",
        pkg_p10_name: "Рим - Вечный город",
        pkg_p10_desc: "Колизей, Римский форум и вкусная итальянская кухня.",
        pkg_p10_dur: "5 дней"
    },
    en: {
        logo_text: "Travel",
        logo_admin: "Admin Panel",
        nav_home: "Home",
        nav_packages: "Packages",
        nav_destinations: "Destinations",
        nav_my_bookings: "My Bookings",
        btn_login: "Login",
        hero_eyebrow: "Travel Agency",
        hero_h1: "Start Unforgettable Travels Around the World with Us",
        hero_p: "Top-tier tour packages, affordable prices, and reliable service. Choose your tour and book online.",
        hero_btn_book: "Book Now",
        hero_btn_check: "Check Booking",
        pkgs_eyebrow: "Tour Packages",
        pkgs_h2: "Best Packages",
        dests_eyebrow: "Destinations",
        dests_h2: "Most Popular Destinations",
        check_eyebrow: "For Clients",
        check_h2: "Check Your Bookings",
        check_search_h3: "Find Your Bookings",
        check_search_p: "Enter your email address used during booking to view status or cancel it.",
        check_btn: "Search Bookings",
        admin_p: "Are you an agency employee?",
        admin_btn: "Access Admin Panel",
        mini_mgmt_h3: "Full Control",
        mini_mgmt_p: "Manage clients, packages, and bookings in one place.",
        mini_dest_h3: "Popular Destinations",
        mini_dest_p: "Popular travel destinations are displayed automatically.",
        mini_reg_h3: "Registration",
        mini_reg_p: "Employees can register and access their control panel.",
        footer_copy: "© 2026 Travel Agency. All rights reserved.",
        footer_dev: "Web application developed using HTML, CSS, and JavaScript.",
        admin_panel: "Admin Panel",
        modal_login: "Login",
        modal_register: "Employee Registration",
        modal_booking: "Booking",
        modal_edit: "Edit Element",
        label_name: "Your Name",
        label_email: "Email",
        label_password: "Password",
        th_name: "Name",
        th_email: "Email",
        th_phone: "Phone",
        th_note: "Note",
        th_action: "Action",
        th_package: "Package",
        th_destination: "Destination",
        th_duration: "Duration",
        th_price: "Price",
        th_status: "Status",
        status_pending: "Pending",
        status_confirmed: "Confirmed",
        status_rejected: "Rejected",
        msg_loading: "Loading...",
        msg_sync_data: "Data is being synchronized with Supabase",
        msg_confirm_delete_title: "Are you sure?",
        msg_confirm_delete_text: "Deleted data cannot be recovered!",
        msg_btn_yes: "Yes, delete it!",
        msg_btn_no: "Cancel",
        msg_deleted_title: "Deleted!",
        msg_deleted_text: "Data deleted successfully.",
        msg_save_success: "Saved successfully",
        msg_error_title: "Error!",
        msg_booking_success_title: "Congratulations!",
        msg_booking_success_text: "Your order has been received. Our operators will contact you soon.",
        msg_search_empty: "Please enter your email address to search.",
        msg_confirm_cancel_title: "Cancel booking?",
        msg_confirm_cancel_text: "Are you sure you want to cancel this booking?",
        msg_btn_cancel_yes: "Yes, cancel it",
        msg_btn_cancel_no: "No, keep it",
        msg_cancel_success_title: "Cancelled",
        msg_cancel_success_text: "Your booking has been cancelled.",
        auth_help_login: "For demo: Email: <code>demo@mail.com</code> | Password: <code>123456</code>. This login always works.",
        auth_help_register: "You can register in the system as an employee.",
        auth_help_booking: "Enter your details, and we will contact you.",
        err_required: "Please fill in all required fields.",
        btn_submitting: "Submitting...",
        swal_icon_color: "#10b981",
        swal_success_img: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
        dest_type: "Destination",
        dest_bookings_label: "bookings",
        dest_desc_text: "One of the most interesting destinations.",
        dest_count_msg: "There are {count} bookings for this destination.",
        dest_no_count_msg: "No bookings yet, but demand is high.",
        dest_status_active: "Active",
        dest_status_new: "New",
        dest_top_label: "Top 10",
        dest_name_Bali: "Bali",
        dest_name_Istanbul: "Istanbul",
        dest_name_Dubay: "Dubai",
        dest_name_Fransiya: "France",
        dest_name_Samarqand: "Samarkand",
        dest_name_Maldiv: "Maldives",
        dest_name_Misr: "Egypt",
        dest_name_Antalya: "Antalya",
        dest_name_Rim: "Rome",
        dest_name_Tailand: "Thailand",
        "dest_name_O'zbekiston": "Uzbekistan",
        pkg_duration_suffix: "duration",
        pkg_online_booking: "Online booking",
        pkg_support: "24/7 support",
        pkg_btn_book: "Book Now",
        pkg_no_data: "No packages available yet.",
        pkg_p1_name: "Bali Relaxation",
        pkg_p1_desc: "Includes sun, sea, and relaxation package.",
        pkg_p1_dur: "7 days",
        pkg_p2_name: "Istanbul Trip",
        pkg_p2_desc: "Culture, historical tourism, and special tour package.",
        pkg_p2_dur: "5 days",
        pkg_p3_name: "Dubai Luxury",
        pkg_p3_desc: "Travel in a luxury city, shopping malls, and comfortable stay.",
        pkg_p3_dur: "6 days",
        pkg_p4_name: "Paris Romance",
        pkg_p4_desc: "Eiffel Tower, Louvre Museum, and romantic dinner.",
        pkg_p4_dur: "4 days",
        pkg_p5_name: "Tashkent - Samarkand",
        pkg_p5_desc: "Travel through the historical cities of Uzbekistan.",
        pkg_p5_dur: "3 days",
        pkg_p6_name: "Maldives Islands",
        pkg_p6_desc: "Unforgettable vacation in the middle of the ocean.",
        pkg_p6_dur: "10 days",
        pkg_p7_name: "Egypt Pyramids",
        pkg_p7_desc: "Ancient history and relaxation on the Red Sea coast.",
        pkg_p7_dur: "6 days",
        pkg_p8_name: "Antalya All Inclusive",
        pkg_p8_desc: "Five-star vacation on the Mediterranean coast.",
        pkg_p8_dur: "7 days",
        pkg_p9_name: "Pearl of Samarkand",
        pkg_p9_desc: "Registan Square, Gur-e-Amir, and travel through ancient monuments.",
        pkg_p9_dur: "4 days",
        pkg_p10_name: "Rome - Eternal City",
        pkg_p10_desc: "Colosseum, Roman Forum, and delicious Italian cuisine.",
        pkg_p10_dur: "5 days"
    }
};

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

// Helper to generate skeleton cards
function generateSkeletonCards(count, type) {
    let skeletonHtml = '';
    const skeletonPackageCard = `
        <article class="package-card skeleton-card">
            <div class="package-card-image skeleton-image"></div>
            <div class="package-card-content card-body">
                <div class="card-top">
                    <span class="card-chip skeleton-text skeleton-chip"></span>
                    <span class="card-price skeleton-text skeleton-price"></span>
                </div>
                <h3 class="skeleton-text skeleton-title"></h3>
                <p class="small-text skeleton-text skeleton-line"></p>
                <p class="skeleton-text skeleton-line"></p>
                <div class="card-stats">
                    <span class="card-stat skeleton-text skeleton-stat"></span>
                    <span class="card-stat skeleton-text skeleton-stat"></span>
                </div>
                <div class="package-card-footer">
                    <button class="btn btn-primary btn-sm skeleton-button"></button>
                </div>
            </div>
        </article>
    `;

    const skeletonDestinationCard = `
        <article class="destination-card skeleton-card">
            <div class="destination-card-image skeleton-image"></div>
            <div class="destination-card-content card-body">
                <div class="card-top">
                    <span class="card-chip skeleton-text skeleton-chip"></span>
                    <span class="card-score skeleton-text skeleton-score"></span>
                </div>
                <h3 class="skeleton-text skeleton-title"></h3>
                <p class="small-text skeleton-text skeleton-line"></p>
                <p class="skeleton-text skeleton-line"></p>
                <div class="card-stats">
                    <span class="card-stat skeleton-text skeleton-stat"></span>
                    <span class="card-stat skeleton-text skeleton-stat"></span>
                </div>
            </div>
        </article>
    `;

    for (let i = 0; i < count; i++) {
        if (type === 'package') {
            skeletonHtml += skeletonPackageCard;
        } else if (type === 'destination') {
            skeletonHtml += skeletonDestinationCard;
        }
    }
    return skeletonHtml;
}

function renderPackageSkeletons() {
    if (packageListEl) {
        packageListEl.innerHTML = generateSkeletonCards(4, 'package'); // 4 ta skeleton paket ko'rsatish
    }
}

function renderDestinationSkeletons() {
    if (destinationListEl) {
        destinationListEl.innerHTML = generateSkeletonCards(4, 'destination'); // 4 ta skeleton yo'nalish ko'rsatish
    }
}

function applyLanguage(lang) {
    localStorage.setItem("sayohat_lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    const select = document.getElementById("lang-select");
    if (select) select.value = lang;

    // Til o'zgarganda dinamik qismlarni qayta render qilish
    // Agar Supabase sync hali tugamagan bo'lsa, skeletonlar ustiga yoziladi
    // Agar tugagan bo'lsa, haqiqiy ma'lumotlar ko'rsatiladi
    renderPackages();
    renderDestinations();
}

function getTranslatedStatus(status) {
    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const statusMap = {
        "Kutmoqda": "status_pending",
        "Tasdiqlangan": "status_confirmed",
        "Rad etilgan": "status_rejected"
    };
    const key = statusMap[status];
    return key && translations[lang][key] ? translations[lang][key] : status;
}

// DOM references
const openLoginBtns = [document.getElementById("open-login"), document.getElementById("open-login-2")];
const openRegisterBtns = [document.getElementById("open-register-2")];
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const authForm = document.getElementById("auth-form");
const langSelect = document.getElementById("lang-select");
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
const addEmployeeDashBtn = document.getElementById("add-employee-dash");
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
        let errorMessage = "Supabasega saqlab bo'lmadi";
        try {
            const errorData = JSON.parse(errorText);
            errorMessage = errorData.message || errorData.details || errorMessage;
        } catch (e) { errorMessage = errorText || errorMessage; }
        throw new Error(errorMessage);
    }

    return response.json();
}

async function saveClientToSupabase(clientRow) {
    const { id, ...dataToSave } = clientRow; // Mahalliy 'c123' IDni yubormaymiz
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseClientsTable}`, {
        method: "POST",
        headers: { ...supabaseHeaders, Prefer: "return=representation" },
        body: JSON.stringify(dataToSave),
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Mijozni saqlashda xatolik");
    }
    return response.json();
}

async function fetchClientsFromSupabase() {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseClientsTable}?select=*`, {
        method: "GET",
        headers: supabaseHeaders,
    });
    if (!response.ok) throw new Error("Supabase'dan mijozlarni olishda xatolik");
    return response.json();
}

async function deleteClientFromSupabase(id) {
    const dbId = String(id).replace('c', '');
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseClientsTable}?id=eq.${dbId}`, {
        method: "DELETE",
        headers: supabaseHeaders,
    });
    if (!response.ok) throw new Error("Mijozni bazadan o'chirishda xatolik");
}

async function deleteBookingFromSupabase(supabaseId) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseTable}?id=eq.${supabaseId}`, {
        method: "DELETE",
        headers: supabaseHeaders,
    });
    if (!response.ok) throw new Error("Bronni bazadan o'chirishda xatolik");
}

async function fetchPackagesFromSupabase() {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabasePackagesTable}?select=*`, {
        method: "GET",
        headers: supabaseHeaders,
    });
    if (!response.ok) throw new Error("Supabase'dan paketlarni olishda xatolik");
    return response.json();
}

async function savePackageToSupabase(pkgRow) {
    const { id, ...dataToSave } = pkgRow; // Mahalliy 'p123' IDni yubormaymiz
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabasePackagesTable}`, {
        method: "POST",
        headers: { ...supabaseHeaders, Prefer: "return=representation" },
        body: JSON.stringify(dataToSave),
    });
    if (!response.ok) throw new Error("Paketni saqlashda xatolik");
    return response.json();
}

async function updatePackageInSupabase(id, pkgRow) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabasePackagesTable}?id=eq.${id}`, {
        method: "PATCH",
        headers: { ...supabaseHeaders, Prefer: "return=representation" },
        body: JSON.stringify(pkgRow),
    });
    if (!response.ok) throw new Error("Paketni yangilashda xatolik");
    return response.json();
}

async function deletePackageFromSupabase(id) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabasePackagesTable}?id=eq.${id}`, {
        method: "DELETE",
        headers: supabaseHeaders,
    });
    if (!response.ok) throw new Error("Paketni o'chirishda xatolik");
}

async function updateClientInSupabase(email, clientRow) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseClientsTable}?email=eq.${encodeURIComponent(email)}`, {
        method: "PATCH",
        headers: { ...supabaseHeaders, Prefer: "return=representation" },
        body: JSON.stringify(clientRow),
    });
    if (!response.ok) throw new Error("Mijozni yangilashda xatolik");
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
    const { id, ...dataToSave } = employeeRow; // Mahalliy 'e123' IDni yubormaymiz
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseEmployeesTable}`, {
        method: "POST",
        headers: {
            ...supabaseHeaders,
            Prefer: "return=representation",
        },
        body: JSON.stringify(dataToSave),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || errorData.details || "Xodimni saqlashda RLS yoki xavfsizlik xatosi");
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
    const isAdminPage = location.pathname.includes("dashboard.html") ||
        location.pathname.includes("clients.html") ||
        location.pathname.includes("packages.html") ||
        location.pathname.includes("bookings.html");

    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang];

    if (typeof Swal !== 'undefined' && isAdminPage) {
        Swal.fire({
            title: t.msg_loading,
            text: t.msg_sync_data,
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    }

    try {
        const remoteRows = await fetchBookingsFromSupabase();
        const importedBookings = remoteRows.map(normalizeSupabaseBookingRow);
        const localBookings = getBookings();
        const mergedBookings = mergeBookings(localBookings, importedBookings);
        writeStorage(bookingsKey, mergedBookings);
        if (typeof Swal !== 'undefined' && isAdminPage) Swal.close();
        return mergedBookings;
    } catch (error) {
        console.warn("Supabase booking sync failed:", error);
        if (typeof Swal !== 'undefined' && isAdminPage) Swal.close();
        return getBookings();
    }
}

async function syncClientsFromSupabase() {
    try {
        const remoteClients = await fetchClientsFromSupabase();
        const localClients = getClients();
        const merged = [...localClients];

        remoteClients.forEach((remote) => {
            const existingIndex = merged.findIndex((c) => c.email.toLowerCase() === remote.email.toLowerCase());
            if (existingIndex >= 0) {
                // Agar mijoz topilsa, faqat asosiy ma'lumotlarni yangilaymiz
                merged[existingIndex] = {
                    ...merged[existingIndex],
                    name: remote.name,
                    phone: remote.phone,
                    note: remote.note
                };
            } else {
                merged.push({ ...remote, id: `c${remote.id}` }); // ID formatini to'g'irlash
            }
        });
        writeStorage(clientsKey, merged);
    } catch (error) {
        console.warn("Mijozlarni sinxronizatsiya qilishda xatolik:", error);
    }
}

async function syncPackagesFromSupabase() {
    try {
        const remotePackages = await fetchPackagesFromSupabase();
        // Agar bazada paketlar bo'lmasa, local ma'lumotlarni o'chirib yubormaslik uchun
        if (!remotePackages || remotePackages.length === 0) return;

        const mapped = remotePackages.map(p => ({
            id: String(p.id),
            name: p.name,
            destination: p.destination,
            duration: p.duration,
            price: Number(p.price),
            description: p.description,
            imageUrl: p.image_url || getDestinationImage(p.destination)
        }));
        writeStorage(packagesKey, mapped);
    } catch (error) {
        console.warn("Paketlarni sinxronizatsiya qilishda xatolik:", error);
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

    const packagesCountEl = document.getElementById("packages-count");
    if (packagesCountEl) packagesCountEl.textContent = String(packages.length);

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
            meta: `${client?.name || "Mijoz"} · ${pkg?.name || "Paket"} · ${getTranslatedStatus(latestBooking.status)}`,
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
    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const adminTitle = translations[lang].admin_panel || "Admin Panel";
    const headerTitle =
        panelEl.querySelector(".dashboard-hero h1") ||
        panelEl.querySelector(".dashboard-header h1") ||
        panelEl.querySelector(".dashboard-panel-header h2");
    if (headerTitle) {
        headerTitle.textContent = `${employeeName} - ${adminTitle}`;
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
    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang] || translations.uz;

    if (!packages.length) {
        packageListEl.innerHTML = `<p class="container">${t.pkg_no_data}</p>`;
        return;
    }

    packageListEl.innerHTML = packages
        .map(
            (pkg) => {
                const destName = (t && t[`dest_name_${pkg.destination}`]) ? t[`dest_name_${pkg.destination}`] : pkg.destination;
                // Paket ma'lumotlarini tarjima qilish
                const pkgName = t[`pkg_${pkg.id}_name`] || pkg.name;
                const pkgDesc = t[`pkg_${pkg.id}_desc`] || pkg.description;
                const pkgDur = t[`pkg_${pkg.id}_dur`] || pkg.duration;

                return `
                <article class="package-card">
                    <div class="package-card-image card-media">
                        <img loading="lazy" src="${pkg.imageUrl || getDestinationImage(pkg.destination)}" alt="${pkgName}">
                        <div class="card-overlay"></div>
                        <span class="card-badge">${pkgDur}</span>
                    </div>
                    <div class="package-card-content card-body">
                        <div class="card-top">
                            <span class="card-chip">${destName}</span>
                            <span class="card-price">$${pkg.price}</span>
                        </div>
                        <h3>${pkgName}</h3>
                        <p class="small-text">${pkgDur} ${t.pkg_duration_suffix}</p>
                        <p>${pkgDesc}</p>
                        <div class="card-stats">
                            <span class="card-stat">${t.pkg_online_booking}</span>
                            <span class="card-stat">${t.pkg_support}</span>
                        </div>
                        <div class="package-card-footer">
                            <button class="btn btn-primary btn-sm book-now-btn" data-id="${pkg.id}">${t.pkg_btn_book || 'Book'}</button>
                        </div>
                    </div>
                </article>`;
            }
        )
        .join("");
}

function renderDestinations() {
    if (!destinationListEl) return;

    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang] || translations.uz;

    const list = getPopularDestinations();
    if (!list || list.length === 0) return;

    destinationListEl.innerHTML = list
        .map(
            (item, index) => {
                const destName = (t && t[`dest_name_${item.destination}`]) ? t[`dest_name_${item.destination}`] : item.destination;
                const statusText = item.count > 0 ? (t.dest_status_active || 'Active') : (t.dest_status_new || 'New');
                const bookingMsg = item.count > 0
                    ? (t.dest_count_msg ? t.dest_count_msg.replace('{count}', item.count) : `${item.count} bookings`)
                    : (t.dest_no_count_msg || 'No bookings');

                return `
                <article class="destination-card">
                    <div class="destination-card-image card-media">
                        <img loading="lazy" src="${item.imageUrl || getDestinationImage(item.destination)}" alt="${destName}">
                        <div class="card-overlay"></div>
                        <span class="card-badge">#${String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div class="destination-card-content card-body">
                        <div class="card-top">
                            <span class="card-chip">${t.dest_type || 'Type'}</span>
                            <span class="card-score">${item.count} ${t.dest_bookings_label || 'bookings'}</span>
                        </div>
                        <h3>${destName}</h3>
                        <p class="small-text">${t.dest_desc_text || ''}</p>
                        <p>${bookingMsg}</p>
                        <div class="card-stats">
                            <span class="card-stat">${statusText}</span>
                            <span class="card-stat">${t.dest_top_label || 'Top'}</span>
                        </div>
                    </div>
                </article>`;
            }
        )
        .join("");
}

function renderClients() {
    if (!clientsListEl) return;

    const clients = getClients();
    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang];
    if (!clients.length) {
        clientsListEl.innerHTML = "<p>Hali mijozlar mavjud emas.</p>";
        return;
    }

    clientsListEl.innerHTML = `
        <table class="table">
            <thead>
                <tr><th>${t.th_name}</th><th>${t.th_email}</th><th>${t.th_phone}</th><th>${t.th_note}</th><th>${t.th_action}</th></tr>
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
    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang];
    if (!packages.length) {
        packagesDashboardEl.innerHTML = "<p>Hali paketlar mavjud emas.</p>";
        return;
    }

    packagesDashboardEl.innerHTML = `
        <table class="table">
            <thead>
                <tr><th>${t.th_package}</th><th>${t.th_destination}</th><th>${t.th_duration}</th><th>${t.th_price}</th><th>${t.th_action}</th></tr>
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
    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang];
    if (!bookings.length) {
        bookingsListEl.innerHTML = "<p>Hali bronlar mavjud emas.</p>";
        return;
    }

    bookingsListEl.innerHTML = `
        <table class="table">
            <thead>
                <tr><th>${t.th_name}</th><th>${t.th_package}</th><th>${t.th_status}</th><th>${t.th_action}</th></tr>
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
                                <td>${getTranslatedStatus(booking.status)}</td>
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
    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang];

    if (mode === "register") {
        modalTitle.textContent = t.modal_register;
        authHelp.textContent = t.auth_help_register;
        return;
    }

    modalTitle.textContent = t.modal_login;
    authHelp.innerHTML = t.auth_help_login;
    applyLanguage(lang); // Formadagi label'larni yangilash uchun
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

    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang];
    modalTitle.textContent = t.modal_booking;
    authHelp.textContent = t.auth_help_booking;
}

function setAuthSubmitting(isSubmitting, message) {
    const submitButton = authForm?.querySelector('button[type="submit"]');
    const demoButton = authForm?.querySelector('#fill-demo');

    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang];

    if (submitButton) {
        submitButton.disabled = isSubmitting;
        submitButton.textContent = isSubmitting ? t.btn_submitting : authState.mode === "booking" ? t.modal_booking : t.modal_login;
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

    if (type === "employee") {
        title = item.id ? "Xodimni tahrirlash" : "Yangi xodim qo'shish";
        fields = [
            { label: "Ism", name: "name", type: "text", value: item.name || "", required: true },
            { label: "Email", name: "email", type: "email", value: item.email || "", required: true },
            { label: "Parol", name: "password", type: "password", value: "", required: !item.id },
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
        const lang = localStorage.getItem("sayohat_lang") || "uz";
        const t = translations[lang];
        fields = [
            { label: "Mijoz", name: "clientId", type: "select", value: item.clientId || "", options: clients },
            { label: "Paket", name: "packageId", type: "select", value: item.packageId || "", options: packages },
            {
                label: "Status", name: "status", type: "select", value: item.status || "Kutmoqda", options: [
                    { id: "Kutmoqda", name: t.status_pending },
                    { id: "Tasdiqlangan", name: t.status_confirmed },
                    { id: "Rad etilgan", name: t.status_rejected }
                ]
            },
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

            options.forEach((optionData) => {
                const option = document.createElement("option");
                option.value = optionData.id;
                option.textContent = optionData.name;
                if (optionData.id === field.value) option.selected = true;
                select.appendChild(option);
            });

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

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        if (type === "client") {
            const clients = getClients();
            const isNew = !item.id;

            const payload = {
                id: item.id || createId("c"),
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                note: formData.get("note"),
            };

            try {
                if (isNew) {
                    const saved = await saveClientToSupabase({
                        name: payload.name,
                        email: payload.email,
                        phone: payload.phone,
                        note: payload.note
                    });
                    if (saved?.[0]) payload.id = `c${saved[0].id}`;
                } else {
                    await updateClientInSupabase(item.email, {
                        name: payload.name,
                        phone: payload.phone,
                        note: payload.note
                    });
                }

                const updated = item.id ? clients.map((c) => (c.id === item.id ? payload : c)) : [...clients, payload];
                writeStorage(clientsKey, updated);
                renderDashboard(); // UI ni yangilash

                const lang = localStorage.getItem("sayohat_lang") || "uz";
                const t = translations[lang];
                Swal.fire({
                    title: isNew ? t.th_name : t.modal_edit,
                    text: t.msg_save_success,
                    imageUrl: t.swal_success_img,
                    imageWidth: 80,
                    imageHeight: 80,
                    timer: 1500,
                    showConfirmButton: false
                });
            } catch (err) {
                console.error("Supabase error:", err);
                Swal.fire({
                    icon: 'error',
                    title: translations[localStorage.getItem("sayohat_lang") || "uz"].msg_error_title,
                    text: err.message
                });
            }
        }

        if (type === "employee") {
            const employees = getEmployees();
            const isNew = !item.id;
            const name = formData.get("name");
            const email = formData.get("email");
            const password = formData.get("password");

            const hashedPassword = password ? await hashPassword(password) : (item.password || "");

            const payload = {
                id: item.id || createId("e"),
                name,
                email,
                password: hashedPassword,
            };

            const updated = item.id
                ? employees.map((emp) => (emp.id === item.id ? payload : emp))
                : mergeEmployeesByEmail(employees, payload);

            writeStorage(employeesKey, updated);

            if (isNew) {
                try {
                    await saveEmployeeToSupabase({
                        ...payload,
                        source: "admin-panel"
                    });
                    Swal.fire({
                        icon: 'success',
                        title: 'Muvaffaqiyatli',
                        text: "Yangi xodim qo'shildi va Supabase bazasiga saqlandi.",
                        timer: 2000
                    });
                } catch (error) {
                    console.error("Xodimni saqlashda xatolik:", error);
                    Swal.fire({ icon: 'error', title: 'Xatolik', text: error.message });
                }
            }
        }

        if (type === "package") {
            const isNew = !item.id;
            const payload = {
                name: formData.get("name"),
                destination: formData.get("destination"),
                duration: formData.get("duration"),
                price: Number(formData.get("price")),
                description: formData.get("description"),
            };

            try {
                if (isNew) {
                    await savePackageToSupabase(payload);
                } else {
                    await updatePackageInSupabase(item.id, payload);
                }

                await syncPackagesFromSupabase();
                renderDashboard();
                hideEditModal();

                Swal.fire({
                    icon: 'success',
                    title: isNew ? 'Paket qo\'shildi' : 'Paket yangilandi',
                    showConfirmButton: false,
                    timer: 1500
                });
            } catch (err) {
                Swal.fire({ icon: 'error', title: 'Xatolik', text: err.message });
            }
        }

        if (type === "booking") {
            const bookings = getBookings();
            const isNew = !item.id;
            const clientId = formData.get("clientId");
            const packageId = formData.get("packageId");
            const status = formData.get("status");

            const payload = {
                id: item.id || createId("b"),
                clientId,
                packageId,
                status,
            };
            const updated = item.id ? bookings.map((booking) => (booking.id === item.id ? payload : booking)) : [...bookings, payload];
            writeStorage(bookingsKey, updated);

            if (isNew) {
                try {
                    const client = getClientById(clientId);
                    const pkg = getPackageById(packageId);
                    if (client && pkg) {
                        await saveBookingToSupabase({
                            name: client.name,
                            email: client.email,
                            phone: client.phone,
                            note: "Admin panel orqali qo'shildi",
                            package_id: pkg.id,
                            package_name: pkg.name,
                            package_price: pkg.price,
                            package_duration: pkg.duration,
                            status: status,
                            source: "admin-panel",
                        });
                    }
                } catch (error) {
                    console.error("Supabasega bronni saqlashda xatolik:", error);
                }
            }

            Swal.fire({
                icon: 'success',
                title: item.id ? 'Bron tahrirlandi' : 'Yangi bron qo\'shildi',
                showConfirmButton: false,
                timer: 1500
            });
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
    const lang = localStorage.getItem("sayohat_lang") || "uz";
    const t = translations[lang];

    Swal.fire({
        title: t.msg_confirm_delete_title,
        text: t.msg_confirm_delete_text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#185adb",
        cancelButtonColor: "#ff7c5f",
        iconColor: t.swal_icon_color,
        confirmButtonText: t.msg_btn_yes,
        cancelButtonText: t.msg_btn_no
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                if (type === "package") {
                    await deletePackageFromSupabase(id);
                    writeStorage(packagesKey, getPackages().filter((item) => item.id !== id));
                    writeStorage(bookingsKey, getBookings().filter((booking) => booking.packageId !== id));
                }
                if (type === "client") {
                    await deleteClientFromSupabase(id);
                    writeStorage(clientsKey, getClients().filter((item) => item.id !== id));
                    writeStorage(bookingsKey, getBookings().filter((booking) => booking.clientId !== id));
                }
                if (type === "booking") {
                    const booking = getBookings().find(b => b.id === id);
                    if (booking && booking.supabaseId) {
                        await deleteBookingFromSupabase(booking.supabaseId);
                    }
                    writeStorage(bookingsKey, getBookings().filter((item) => item.id !== id));
                }
                renderDashboard();
                Swal.fire({
                    title: t.msg_deleted_title,
                    text: t.msg_deleted_text,
                    imageUrl: t.swal_success_img,
                    imageWidth: 80,
                    imageHeight: 80,
                    timer: 1500
                });
            } catch (error) {
                Swal.fire(t.msg_error_title, error.message, "error");
            }
        }
    });
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
                            <span class="status-badge">${getTranslatedStatus(booking.status)}</span>
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
    try { await ensureDefaultEmployeeOnSupabase(); } catch (e) { console.error("Employee init failed"); }

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
    // 1. Local ma'lumotlarni tayyorlash
    await setupInitialData();

    // 2. Tilni yuklash va darhol render qilish (Local ma'lumotlar bilan)
    const savedLang = localStorage.getItem("sayohat_lang") || "uz";
    applyLanguage(savedLang);

    if (langSelect) {
        langSelect.addEventListener("change", (e) => applyLanguage(e.target.value));
    }

    // Supabase'dan ma'lumotlar yuklanayotgan paytda skeletonlarni ko'rsatish
    renderPackageSkeletons();
    renderDestinationSkeletons();

    // 3. Supabase bilan fonda sinxronizatsiya qilish (Bloklamaydi)
    syncBookingsFromSupabase().then(() => {
        renderDestinations(); // Supabase ma'lumotlari kelgach, yo'nalishlarni yangilash
        renderRecentActivity();
    });
    syncClientsFromSupabase();
    syncPackagesFromSupabase().then(() => {
        renderPackages(); // Supabase ma'lumotlari kelgach, paketlarni yangilash
    });

    const isAdminPage = location.pathname.includes("dashboard.html") ||
        location.pathname.includes("clients.html") ||
        location.pathname.includes("packages.html") ||
        location.pathname.includes("bookings.html");

    const persistedEmployee = readStorage("sayohat_current_employee", null);
    if (persistedEmployee) {
        authState.currentEmployee = persistedEmployee;
        if (isAdminPage) {
            showDashboard();
        }
    }

    if (isAdminPage) {
        renderDashboard();
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
                const lang = localStorage.getItem("sayohat_lang") || "uz";
                const t = translations[lang];
                Swal.fire({
                    title: t.msg_booking_success_title,
                    text: t.msg_booking_success_text,
                    imageUrl: t.swal_success_img,
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: 'Success Icon'
                });
            } catch (error) {
                console.error("Supabase booking insert error:", error);
                setAuthSubmitting(false, `Xatolik yuz berdi: ${error.message}`);
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
if (addEmployeeDashBtn) addEmployeeDashBtn.addEventListener("click", () => showEditForm("employee"));
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
        const lang = localStorage.getItem("sayohat_lang") || "uz";
        const t = translations[lang];
        if (!email) {
            Swal.fire({
                icon: 'info',
                title: t.msg_error_title,
                text: t.msg_search_empty,
                iconColor: t.swal_icon_color
            });
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
        const lang = localStorage.getItem("sayohat_lang") || "uz";
        const t = translations[lang];
        Swal.fire({
            title: t.msg_confirm_cancel_title,
            text: t.msg_confirm_cancel_text,
            icon: "question",
            iconColor: t.swal_icon_color,
            showCancelButton: true,
            confirmButtonText: t.msg_btn_cancel_yes,
            cancelButtonText: t.msg_btn_cancel_no
        }).then((result) => {
            if (result.isConfirmed) {
                writeStorage(bookingsKey, getBookings().filter((booking) => booking.id !== id));
                if (checkEmailInput?.value) {
                    renderCustomerBookings(checkEmailInput.value.trim().toLowerCase());
                }
                renderDashboard();
                Swal.fire({
                    title: t.msg_cancel_success_title,
                    text: t.msg_cancel_success_text,
                    imageUrl: t.swal_success_img,
                    imageWidth: 80,
                    imageHeight: 80,
                    timer: 1500
                });
            }
        });
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
