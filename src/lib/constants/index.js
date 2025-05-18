import icons from "../icons";

export const sidebar = [
  {
    id: 1,
    title: "داشبورد  ",
    path: "/",
    active: true,
      icon: icons.dashboard,
  },
  {
    id: 1,
    title: "شاگردان  ",
    path: "/clients",
    active: false,
    icon: icons.clients,
  },
  {
    id: 1,
    title: "برنامه ها  ",
    path: "/programs",
    active: false,
    icon: icons.programs,
  },
  {
    id: 1,
    title: " تمرین ها  ",
    path: "/excrcises",
    active: false,
    icon: icons.exercise,
  },
  {
    id: 1,
    title: "  چت  ",
    path: "/chat",
    active: false,
    icon: icons.chats,
  },
];

export const dashboardCards = [
  {
    id: 1,
    title: "مشتریان فعال هفته اخیر",
    icon: icons.dashboardcards,
    detailButtonText: "مشاهده جزئیات",
    sidebarTitle: "لیست مشتریان فعال",
    users: [
      { id: 1, name: "علی ", avatar: "/avatars/ali.png" },
      { id: 2, name: "مریم ", avatar: "/avatars/maryam.png" },
      { id: 3, name: "حسین ", avatar: "/avatars/hossein.png" },
    ],
  },
  {
    id: 2,
    title: "مشتریان غیرفعال هفته اخیر",
    icon: icons.dashboardcards,
    detailButtonText: "مشاهده جزئیات",
    sidebarTitle: "لیست مشتریان غیرفعال",
    users: [
    ],
  },
  {
    id: 3,
    title: "مجموع مشتریان",
    icon: icons.dashboardcards,
    detailButtonText: "مشاهده جزئیات",
    sidebarTitle: "لیست تمامی مشتریان",
    users: [
      { id: 6, name: "لیلا ", avatar: "/avatars/leila.png" },
      { id: 7, name: "رضا ", avatar: "/avatars/reza.png" },
      { id: 8, name: "سارا ", avatar: "/avatars/sara.png" },
      { id: 9, name: "محمد ", avatar: "/avatars/mohammad.png" },
    ],
  },
];


export const clients = [
    {
      id: 1,
      name: "محمدرضا",
      email: "mohammadreza.osfuri@gmail.com",
      active: true,
      avatar: icons.logo,
      program: "برنامه ۱",
      status: "نمونه"
    },
    {
      id: 2,
      name: "محمدرضا",
      email: "mohammadreza.osfuri@gmail.com",
      active: true,
      avatar: icons.logo,
      program: "برنامه ۱",
      status: "نمونه"
    }
  ];


  const exerciseNames = [
    "شنا","اسکوات","بارپی","ددلیفت","پلانک","کوهنورد","لانج","جلو بازو دمبل",
    "پشت بازو دمبل","جلو بازو هالتر","بارفیکس","چین‌آپ","ددلیفت رومانیایی","پل باسن",
    "پل گلوت","کشش ساق پا","پارویی نشسته","پارویی خمیده","نشر جانب دمبل","نشر جلو دمبل",
    "کشیدن طناب به صورت","شنا الماسی","شنا شیبدار نزولی","شنا شیبدار صعودی","فلای معکوس",
    "ددلیفت تک پا","تاب کتل‌بل","پارویی تی‌آرایکس","ضربه طناب نبرد","پرش روی جعبه",
    "اسکوات پرشی","کلین و پرس کتل‌بل","اسنچ کتل‌بل","قدم زدن با وزنه","زانوی بلند",
    "جامپینگ جک","طناب زدن","موج طناب نبرد","دیوار نشینی","هالوهولد","لمس انگشتان پا",
    "خزیدن خرسی","فلترکیک","کرانچ دوچرخه","بالا بردن پا","فشار پا دستگاه","پشت بازو هالتر",
    "باز کردن پا","جمع کردن پا","زیربغل دمبل تک‌دست","زیربغل قایقی","زیربغل با کابل",
    "جلوبازو هالتر سیم‌کش","جلو بازو چکشی","لیفت همسترینگ دستگاه","لیفت همسترینگ دمبل",
    "الاکلنگ کتل‌بل","اسکوات بلغاری","لانگز معکوس","لانگز راه رفتنی","لانگز جانب",
    "پلانک جانب","پلانک با لیفت پا","برپی با پرش","برپی با شانه‌پرس","لیفت پهلوی کتل‌بل",
    "چرخش روسی","سیکلیک رانر","تمرین کششی همسترینگ","تمرین کششی چهارسر ران"
  ];
  
  // ۲. آرایه‌های نمونه برای ویژگی‌های چرخشی
  const types       = ["strength","cardio","mobility-strength","plyometric","flexibility","balance"];
  const muscles     = ["سینه","پا","پشت","شانه","بازو","هسته","همسترینگ","گلوت","کول","مولتی"];
  const equipments  = ["bodyweight","dumbbells","barbell","kettlebell","resistance band","bench","cable","machine"];
  const difficulties = ["beginner","intermediate","advanced"];
  
  // ۳. تولید آرایهٔ exercises با طول ۷۰
  export const exercises = exerciseNames.map((name, i) => ({
    name,
    type: types[i % types.length],
    muscle: muscles[i % muscles.length],
    equipment: equipments[i % equipments.length],
    difficulty: difficulties[i % difficulties.length],
    instructions:[
      "یک چرخ شکم بردارید و روی زانوهای خود قرار بگیرید.",
      "به جلو خم شوید و چرخ شکم را روی زمین قرار دهید، در حالی که با هر دو دست آن را محکم نگه داشته‌اید.",
      "عضلات شکم خود را منقبض کنید و نفس بکشید.",
      "چرخ شکم را به سمت جلو حرکت دهید و بدن خود را کشیده کنید.",
      "تا جایی که عضلات شکم‌تان اجازه می‌دهند به جلو بروید، سپس چرخ را به حالت اولیه برگردانید."
    ],
    image: "https://source.unsplash.com/featured/?push-up",     // Unsplash :contentReference[oaicite:9]{index=9}
    gif: "https://i.gifer.com/4Edt.gif"   ,
    youtube: "https://www.youtube.com/shorts/PPmvh7gBTi0"   
  }));


  export const exerciseTypes = [
    { value: "", label: "همه", class: "" },
    {
      value: "cardio",
      label: "کاردیو",
      class: "text-blue-90 bg-blue-10 p-2 rounded-md",
    },
    {
      value: "strength",
      label: "تمرین قدرتی",
      class: "text-red-90 bg-red-10 p-2 rounded-md",
    },
    {
      value: "flexibility",
      label: "انعطاف‌پذیری",
      class: "text-green-90 bg-green-10 p-2 rounded-md",
    },
    {
      value: "balance",
      label: "تعادل",
      class: "text-purple-90 bg-purple-10 p-2 rounded-md",
    },
    {
      value: "endurance",
      label: "استقامت",
      class: "text-yellow-90 bg-yellow-10 p-2 rounded-md",
    },
    {
      value: "mobility",
      label: "تحرک",
      class: "text-teal-90 bg-teal-10 p-2 rounded-md",
    },
  ];

  export const equipmentOptions = [
    { value: "", label: "همه", class: "" },
    { value: "dumbbell", label: "دمبل", class: "" },
    { value: "barbell", label: "هالتر", class: "" },
    { value: "machine", label: "دستگاه", class: "" },
    { value: "bodyweight", label: "وزن بدن", class: "" },
    { value: "kettlebell", label: "کتل‌بل", class: "" },
    { value: "resistance_band", label: "کش تمرینی", class: "" },
    { value: "cable", label: "کابل", class: "" },
    { value: "medicine_ball", label: "مدیسن‌بال", class: "" },
  ];

  export const primaryMuscleOptions = [
    { value: "", label: "همه", class: "" },
    { value: "chest", label: "سینه", class: "" },
    { value: "back", label: "پشت", class: "" },
    { value: "shoulders", label: "سرشانه", class: "" },
    { value: "biceps", label: "بازو (جلو بازو)", class: "" },
    { value: "triceps", label: "پشت بازو", class: "" },
    { value: "legs", label: "پاها", class: "" },
    { value: "abs", label: "شکم", class: "" },
    { value: "glutes", label: "سرینی", class: "" },
    { value: "calves", label: "ساق پا", class: "" },
  ];


  export const otherMuscleOptions = [
    { value: "", label: "هیچ‌کدام", class: "" },
    { value: "forearms", label: "ساعد", class: "" },
    { value: "traps", label: "کول", class: "" },
    { value: "obliques", label: "پهلو", class: "" },
    { value: "hip_flexors", label: "فلکسور ران", class: "" },
    { value: "adductors", label: "کشاله ران", class: "" },
    { value: "hamstrings", label: "پشت ران", class: "" },
  ];


  export const chats = [
    {
      id: 1,
      name: "ایلان ماسک",
      username: "elonmusk",
      online: true,
      lastUpdated: "2025-04-25T14:30:00Z",
      messages: [
        { from: "elonmusk", text: "بیایید زندگی را چند سیاره‌ای کنیم!", time: "2025-04-25T14:00:00Z" },
        { from: "me", text: "این عالیه! من چطور میتونم کمک کنم؟", time: "2025-04-25T14:05:00Z" },
        { from: "elonmusk", text: "فقط باید شجاع باشی و سخت کار کنی.", time: "2025-04-25T14:10:00Z" },
        { from: "me", text: "حاضرم! 🚀", time: "2025-04-25T14:20:00Z" },
      ],
    },
    {
      id: 2,
      name: "تیلور سویفت",
      username: "taylorswift",
      online: false,
      lastUpdated: "2025-04-25T10:15:00Z",
      messages: [
        { from: "me", text: "آلبوم جدیدت فوق‌العاده بود!", time: "2025-04-25T09:50:00Z" },
        { from: "me", text: "خیلی ممنونم! خوشحالم که دوست داشتی 💖", time: "2025-04-25T10:00:00Z" },
        { from: "me", text: "منتظر کنسرت بعدیت هستم!", time: "2025-04-25T10:05:00Z" },
        { from: "me", text: "به زودی اعلام می‌کنم!", time: "2025-04-25T10:10:00Z" },
      ],
    },
    {
      id: 3,
      name: "کریستیانو رونالدو",
      username: "cr7",
      online: true,
      lastUpdated: "2025-04-25T16:00:00Z",
      messages: [
        { from: "cr7", text: "تمرین سخت برای بازی بعدی! ⚽", time: "2025-04-25T15:00:00Z" },
        { from: "me", text: "تو بهترین بازیکن تاریخ هستی!", time: "2025-04-25T15:15:00Z" },
        { from: "cr7", text: "ممنون! حمایت شما همیشه بهم انگیزه میده 🙏", time: "2025-04-25T15:30:00Z" },
        { from: "me", text: "بی‌صبرانه منتظر بازیتم! 💪", time: "2025-04-25T15:45:00Z" },
      ],
    },
    {
      id: 4,
      name: "اما واتسون",
      username: "emmawatson",
      online: false,
      lastUpdated: "2025-04-25T12:45:00Z",
      messages: [
        { from: "emmawatson", text: "همیشه برای برابری جنسیتی مبارزه می‌کنم.", time: "2025-04-25T12:00:00Z" },
        { from: "me", text: "تو یک الگو برای دنیایی!", time: "2025-04-25T12:10:00Z" },
        { from: "emmawatson", text: "این لطف توئه! 🌸", time: "2025-04-25T12:20:00Z" },
        { from: "me", text: "امیدوارم پروژه‌های بیشتری ازت ببینم.", time: "2025-04-25T12:35:00Z" },
      ],
    },
  ];
  


  export const loginSidebarMenu = [
    {
      id: 1,
      title: "اهداف  ",
      path: "/goals",
      icon: icons.goals,
     
    },
    {
      id: 2,
      title: "رژیم",
      path: "/diet",
      active: false,
      icon: icons.diet,
    },
    {
      id: 3,
      title: "تنظیمات ",
      path: "/setting",
      active: false,
      icon: icons.setting,
    },
  
 
  ];

  export const lastWeekData = [
    { day: 'دوشنبه', date: '۱۴۰۴/۰۲/۰۱', activities: 12 },
    { day: 'سه‌شنبه', date: '۱۴۰۴/۰۲/۰۲', activities: 15 },
    { day: 'چهارشنبه', date: '۱۴۰۴/۰۲/۰۳', activities: 9 },
    { day: 'پنجشنبه', date: '۱۴۰۴/۰۲/۰۴', activities: 20 },
    { day: 'جمعه', date: '۱۴۰۴/۰۲/۰۵', activities: 17 },
    { day: 'شنبه', date: '۱۴۰۴/۰۲/۰۶', activities: 14 },
    { day: 'یکشنبه', date: '۱۴۰۴/۰۲/۰۷', activities: 22 },
  ];
  

  export const clientStatusOptions = [
  {
    value: "pending",
    label: "در صف انتظار",
    class: "text-secondary-90 bg-secondary-10 rounded-md px-[10px] py-1",
  },
  {
    value: "settlment",
    label: "تسویه",
    class:
      "text-secondary-90 bg-secondary-10 rounded-md px-[10px] py-1 min-w-[100px]",
  },
];

  