// ============================================================
// CONTENT FILE - Edit all text, data, and links from here
// ============================================================

export const siteConfig = {
  name: 'إبداع ديجيتال',
  tagline: 'شريكك في النجاح الرقمي',
  phone: '+966 50 000 0000',
  email: 'hello@ibda3digital.sa',
  address: 'الرياض، المملكة العربية السعودية',
  social: {
    twitter:   'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin:  'https://linkedin.com',
    youtube:   'https://youtube.com',
  },
}

export const navLinks = [
  { label: 'الخدمات',         href: '#services'     },
  { label: 'من نحن',          href: '#about'         },
  { label: 'آراء العملاء',    href: '#testimonials'  },
  { label: 'الأسئلة الشائعة', href: '#faq'           },
  { label: 'تواصل معنا',      href: '#contact'       },
]

export const hero = {
  badge:          'وكالة رقمية متكاملة',
  headline:       'نحوّل أفكارك إلى',
  headlineAccent: 'تجارب رقمية استثنائية',
  subheadline:    'نقدم خدمات تسويق رقمي وتطوير ويب احترافية تساعد عملك على النمو، الوصول لعملائك، وتحقيق أهدافك.',
  ctaPrimary:     'ابدأ مشروعك الآن',
  ctaSecondary:   'تعرّف على خدماتنا',
  stats: [
    { value: 150, suffix: '+', label: 'مشروع منجز' },
    { value: 98,  suffix: '%', label: 'رضا العملاء' },
    { value: 7,   suffix: '+', label: 'سنوات خبرة'  },
  ],
}

export const services = [
  {
    id:          'seo',
    icon:        'TrendingUp',
    title:       'تحسين محركات البحث',
    description: 'نرفع ترتيب موقعك في نتائج البحث لتحصل على زيارات عضوية مستدامة وعملاء حقيقيين.',
    color:       'bg-blue-50 text-blue-600',
  },
  {
    id:          'social',
    icon:        'Share2',
    title:       'إدارة وسائل التواصل',
    description: 'نبني حضورًا قويًا لعلامتك التجارية عبر منصات التواصل الاجتماعي بمحتوى احترافي ومخطط.',
    color:       'bg-pink-50 text-pink-600',
  },
  {
    id:          'webdev',
    icon:        'Code2',
    title:       'تطوير المواقع والتطبيقات',
    description: 'نصمم وندير مواقع وتطبيقات سريعة وجميلة تمنح زوارك أفضل تجربة مستخدم.',
    color:       'bg-purple-50 text-purple-600',
  },
  {
    id:          'ads',
    icon:        'Target',
    title:       'الإعلانات المدفوعة',
    description: 'إدارة حملات إعلانية محترفة على جوجل وميتا لتحقيق أعلى عائد على الإنفاق الإعلاني.',
    color:       'bg-orange-50 text-orange-600',
  },
  {
    id:          'content',
    icon:        'PenTool',
    title:       'إنتاج المحتوى',
    description: 'نصنع محتوى مكتوبًا ومرئيًا يعبّر عن هويتك ويجذب جمهورك المستهدف.',
    color:       'bg-green-50 text-green-600',
  },
  {
    id:          'analytics',
    icon:        'BarChart3',
    title:       'تحليل البيانات والتقارير',
    description: 'نحوّل البيانات إلى قرارات ذكية من خلال تقارير دورية شاملة وواضحة.',
    color:       'bg-cyan-50 text-cyan-600',
  },
]

export const about = {
  badge: 'من نحن',
  title: 'نبني علاقات ناجحة مع عملائنا',
  body: [
    'في إبداع ديجيتال، نؤمن بأن النجاح الرقمي يبدأ بفهم عميق لأهداف عملك وجمهورك. فريقنا من المحترفين يجمع بين الخبرة التقنية والإبداع لتقديم حلول مخصصة تناسب كل عميل.',
    'منذ تأسيسنا، أتممنا أكثر من 150 مشروعًا لعملاء من قطاعات متعددة، ونفخر بأن 98% منهم أعادوا التعامل معنا مرة أخرى.',
  ],
  stats: [
    { value: 150, suffix: '+', label: 'مشروع منجز'       },
    { value: 98,  suffix: '%', label: 'معدل رضا العملاء'  },
    { value: 7,   suffix: '+', label: 'سنوات في السوق'    },
    { value: 40,  suffix: '+', label: 'خبير ومتخصص'       },
  ],
}

export const testimonials = [
  {
    id:     1,
    name:   'أحمد الشمري',
    title:  'مدير تنفيذي، شركة الفجر',
    quote:  'تعاملنا مع إبداع ديجيتال لتطوير موقعنا وإدارة حملاتنا الإعلانية، والنتائج تجاوزت توقعاتنا. فريق محترف وملتزم بالمواعيد.',
    rating: 5,
    avatar: 'أ',
    color:  'bg-blue-100 text-blue-700',
  },
  {
    id:     2,
    name:   'سارة العتيبي',
    title:  'صاحبة متجر إلكتروني',
    quote:  'ارتفع مبيعاتي 3 أضعاف بعد أن تولّى الفريق إدارة حسابات التواصل الاجتماعي والإعلانات. أنصح بهم بشدة.',
    rating: 5,
    avatar: 'س',
    color:  'bg-pink-100 text-pink-700',
  },
  {
    id:     3,
    name:   'محمد الدوسري',
    title:  'مؤسس شركة ناشئة',
    quote:  'الفريق يتفهم احتياجاتك ويقدم حلولًا عملية بأسعار منافسة. سعيد جدًا بمستوى الخدمة والمتابعة.',
    rating: 5,
    avatar: 'م',
    color:  'bg-purple-100 text-purple-700',
  },
  {
    id:     4,
    name:   'نورة السبيعي',
    title:  'مديرة تسويق، مجموعة النخيل',
    quote:  'تحسّن ترتيب موقعنا في جوجل بشكل ملحوظ خلال 3 أشهر فقط. الفريق شفاف ويشرح كل خطوة بوضوح.',
    rating: 5,
    avatar: 'ن',
    color:  'bg-green-100 text-green-700',
  },
]

export const faqItems = [
  {
    id:       'q1',
    question: 'كم تستغرق مدة تطوير موقع ويب؟',
    answer:   'يعتمد الوقت على حجم المشروع وتعقيده. في العادة، يستغرق الموقع البسيط من 2 إلى 4 أسابيع، بينما يحتاج المشروع المتوسط إلى 4 إلى 8 أسابيع. نلتزم دائمًا بالموعد المتفق عليه.',
  },
  {
    id:       'q2',
    question: 'هل تقدمون دعمًا وصيانة بعد الإطلاق؟',
    answer:   'نعم، نوفر خطط دعم وصيانة شهرية تشمل التحديثات الأمنية، المتابعة التقنية، والتعديلات البسيطة. سنرسل لك تقريرًا شهريًا بكل ما تم إنجازه.',
  },
  {
    id:       'q3',
    question: 'ما هي الحد الأدنى لميزانية الإعلانات المدفوعة؟',
    answer:   'نستطيع العمل مع ميزانيات تبدأ من 2000 ريال شهريًا. نحن نصمم الحملة بحيث تحقق أفضل النتائج ضمن ميزانيتك المحددة.',
  },
  {
    id:       'q4',
    question: 'كيف أبدأ مشروعي معكم؟',
    answer:   'ببساطة! تواصل معنا عبر نموذج التواصل أو اتصل بنا مباشرة. سنحدد جلسة استشارية مجانية لنفهم احتياجاتك ونضع خطة عمل مناسبة.',
  },
  {
    id:       'q5',
    question: 'هل تعملون مع عملاء خارج المملكة العربية السعودية؟',
    answer:   'بالتأكيد! نعمل مع عملاء من جميع أنحاء منطقة الخليج العربي والعالم العربي. التواصل يتم عبر الإنترنت بسلاسة تامة.',
  },
]

export const contact = {
  badge:    'تواصل معنا',
  title:    'هل أنت مستعد للبدء؟',
  subtitle: 'أرسل لنا رسالة وسيتواصل معك أحد متخصصينا خلال 24 ساعة.',
  fields: {
    name:    { label: 'الاسم الكامل',     placeholder: 'مثال: أحمد محمد'        },
    email:   { label: 'البريد الإلكتروني', placeholder: 'example@email.com'     },
    phone:   { label: 'رقم الهاتف',        placeholder: '+966 5X XXX XXXX'       },
    message: { label: 'رسالتك',            placeholder: 'أخبرنا عن مشروعك...'  },
  },
  submitLabel:    'إرسال الرسالة',
  successMessage: 'شكرًا! تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.',
  errors: {
    nameRequired:    'الرجاء إدخال اسمك الكامل',
    emailRequired:   'الرجاء إدخال بريدك الإلكتروني',
    emailInvalid:    'البريد الإلكتروني غير صحيح',
    phoneInvalid:    'رقم الهاتف غير صحيح',
    messageRequired: 'الرجاء كتابة رسالتك',
    messageTooShort: 'الرسالة قصيرة جدًا (10 أحرف على الأقل)',
  },
}

export const footerLinks = [
  {
    heading: 'خدماتنا',
    links: [
      { label: 'تحسين محركات البحث',       href: '#services' },
      { label: 'إدارة التواصل الاجتماعي',   href: '#services' },
      { label: 'تطوير المواقع',             href: '#services' },
      { label: 'الإعلانات المدفوعة',        href: '#services' },
    ],
  },
  {
    heading: 'الشركة',
    links: [
      { label: 'من نحن',      href: '#about'    },
      { label: 'مشاريعنا',   href: '#services'  },
      { label: 'تواصل معنا', href: '#contact'   },
    ],
  },
]
