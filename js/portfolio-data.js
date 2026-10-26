/**
 * ==========================================================================
 * كريم محمود - قاعدة البيانات العامة للموقع (Portfolio Published Data)
 * يحتوي هذا الملف على جميع الأعمال والمشاريع المثبتة التي تظهر تلقائياً
 * لأي شخص في العالم عند فتح الموقع على الاستضافة (Hosting) أو إرسال الرابط.
 * 
 * جميع المسارات نسبية وتبدأ بـ assets/ لضمان عملها 100% على كافة الاستضافات
 * (GitHub Pages, Netlify, cPanel, Hostinger, Vercel) بدون أي أخطاء.
 * ==========================================================================
 */

window.PORTFOLIO_PUBLISHED_DATA = {
  version: '2.0',
  lastUpdated: '2026-10-26T23:15:00Z',
  owner: 'كريم محمود',
  settings: {
    avatar: 'assets/images/tech-explorer-robot.png',
    brandLogo: 'assets/images/tech-explorer-robot.png'
  },
  projects: [
    /* ----------------------------------------------------------------------
       1. قسم فيديوهات الذكاء الاصطناعي والمونتاج
       ---------------------------------------------------------------------- */
    {
      id: 'pub-video-1',
      type: 'video',
      title: 'فيديو الذكاء الاصطناعي - العصر الرقمي والابتكار',
      category: 'فيديوهات الذكاء الاصطناعي والمونتاج',
      desc: 'صناعة محتوى فيديو سينمائي متكامل بالذكاء الاصطناعي، يجمع بين توليد المشاهد البصرية الواقعية والمؤثرات الصوتية الدقيقة.',
      media: 'assets/images/video-thumb-1.svg',
      thumbUrl: 'assets/images/video-thumb-1.svg',
      videoUrl: 'https://youtu.be/Y524ZoCZ-tE',
      youtubeId: 'Y524ZoCZ-tE',
      aspectRatio: '16:9',
      isCartoon: false,
      createdAt: 1710000004000
    },
    {
      id: 'pub-video-2',
      type: 'video',
      title: 'موشن جرافيك وريلز سينمائي بالذكاء الاصطناعي',
      category: 'فيديوهات الذكاء الاصطناعي والمونتاج',
      desc: 'فيديوهات قصيرة جذابة لمنصات التواصل الاجتماعي تجمع بين الإيقاع السريع والتوليد البصري الذكي ومونتاج احترافي.',
      media: 'assets/images/video-thumb-2.svg',
      thumbUrl: 'assets/images/video-thumb-2.svg',
      videoUrl: 'https://youtu.be/wzSMyi0rZnc',
      youtubeId: 'wzSMyi0rZnc',
      aspectRatio: '16:9',
      isCartoon: false,
      createdAt: 1710000003000
    },
    {
      id: 'pub-video-3',
      type: 'video',
      title: 'سرد بصري وثائقي بالذكاء الاصطناعي',
      category: 'فيديوهات الذكاء الاصطناعي والمونتاج',
      desc: 'إنتاج وثائقيات قصيرة متقنة المشاهد بمؤثرات صوتية محيطية وتوليد بصري فائق الدقة.',
      media: 'assets/images/video-thumb-3.svg',
      thumbUrl: 'assets/images/video-thumb-3.svg',
      videoUrl: 'https://youtu.be/Y524ZoCZ-tE',
      youtubeId: 'Y524ZoCZ-tE',
      aspectRatio: '16:9',
      isCartoon: false,
      createdAt: 1710000002000
    },
    {
      id: 'pub-video-4',
      type: 'video',
      title: 'إعلانات تجارية بصرية مبتكرة بالذكاء الاصطناعي',
      category: 'فيديوهات الذكاء الاصطناعي والمونتاج',
      desc: 'تصميم حملات إعلانية بصرية متحركة تناسب المنصات الرقمية وتستهدف تحقيق أعلى معدلات المشاهدة والتحويل.',
      media: 'assets/images/video-thumb-4.svg',
      thumbUrl: 'assets/images/video-thumb-4.svg',
      videoUrl: 'https://youtu.be/wzSMyi0rZnc',
      youtubeId: 'wzSMyi0rZnc',
      aspectRatio: '16:9',
      isCartoon: false,
      createdAt: 1710000001000
    },

    /* ----------------------------------------------------------------------
       2. قايمة نصائح فيديوهات كرتون هادفة
       ---------------------------------------------------------------------- */
    {
      id: 'pub-cartoon-1',
      type: 'video',
      isCartoon: true,
      title: 'نصيحة كرتونية: علي والكنز الحقيقي',
      category: 'نصائح فيديوهات كرتون هادفة',
      desc: 'قصة كرتونية تربوية ممتعة للأطفال عن قيمة العلم والمعرفة وأهمية القراءة والتعلم الذاتي.',
      media: 'assets/images/cartoon-thumb-ali.svg',
      thumbUrl: 'assets/images/cartoon-thumb-ali.svg',
      videoUrl: 'https://youtu.be/Y524ZoCZ-tE',
      youtubeId: 'Y524ZoCZ-tE',
      aspectRatio: '16:9',
      createdAt: 1709900004000
    },
    {
      id: 'pub-cartoon-2',
      type: 'video',
      isCartoon: true,
      title: 'نصيحة كرتونية: آسر وقيمة الأمانة والصدق',
      category: 'نصائح فيديوهات كرتون هادفة',
      desc: 'فيديو كرتوني إرشادي شيق يغرس مبادئ الصدق والنزاهة وحفظ الأمانة بأسلوب قصصي جذاب.',
      media: 'assets/images/cartoon-thumb-aser.svg',
      thumbUrl: 'assets/images/cartoon-thumb-aser.svg',
      videoUrl: 'https://youtu.be/wzSMyi0rZnc',
      youtubeId: 'wzSMyi0rZnc',
      aspectRatio: '16:9',
      createdAt: 1709900003000
    },
    {
      id: 'pub-cartoon-3',
      type: 'video',
      isCartoon: true,
      title: 'نصيحة كرتونية: تامر وفضل بر الوالدين',
      category: 'نصائح فيديوهات كرتون هادفة',
      desc: 'مشهد كرتوني تعليمي مؤثر يوضح أهمية طاعة الوالدين والإحسان إليهما في مواقف الحياة اليومية.',
      media: 'assets/images/cartoon-thumb-tamar.svg',
      thumbUrl: 'assets/images/cartoon-thumb-tamar.svg',
      videoUrl: 'https://youtu.be/Y524ZoCZ-tE',
      youtubeId: 'Y524ZoCZ-tE',
      aspectRatio: '16:9',
      createdAt: 1709900002000
    },
    {
      id: 'pub-cartoon-4',
      type: 'video',
      isCartoon: true,
      title: 'نصيحة كرتونية: الأصدقاء الثلاثة وقوة التعاون',
      category: 'نصائح فيديوهات كرتون هادفة',
      desc: 'مغامرة كرتونية مبهجة تسلط الضوء على العمل الجماعي، تقبل الآخرين، ومساعدة المحتاجين بروح الفريق.',
      media: 'assets/images/cartoon-thumb-trio.svg',
      thumbUrl: 'assets/images/cartoon-thumb-trio.svg',
      videoUrl: 'https://youtu.be/wzSMyi0rZnc',
      youtubeId: 'wzSMyi0rZnc',
      aspectRatio: '16:9',
      createdAt: 1709900001000
    },

    /* ----------------------------------------------------------------------
       3. قايمة التعليق والصوت بالملفات التفاعلية
       ---------------------------------------------------------------------- */
    {
      id: 'pub-audio-1',
      type: 'audio',
      title: 'تعليق صوتي إعلاني طبي ووثائقي (Voice Over)',
      category: 'التعليق الصوتي والهندسة الصوتية',
      desc: 'عينة صوتية احترافية بنبرة وقورة وجذابة تناسب الإعلانات الطبية، الأفلام الوثائقية، والمواد الترويجية.',
      media: 'assets/images/audio-thumb-voice.svg',
      thumbUrl: 'assets/images/audio-thumb-voice.svg',
      audioUrl: '',
      audioDuration: '01:15',
      createdAt: 1709800001000
    },

    /* ----------------------------------------------------------------------
       4. قايمة التصاميم والجرافيك والصور
       ---------------------------------------------------------------------- */
    {
      id: 'pub-design-0',
      type: 'design',
      title: 'مستكشف التقنية والذكاء الاصطناعي (Tech Explorer & AI Companion)',
      category: 'تصميم جرافيك ورؤية مستقبلية',
      desc: 'عمل فني وتصميم متقدم بدقة فائقة يجسد استكشاف تقنيات الذكاء الاصطناعي والتفاعل الإبداعي الحديث.',
      media: 'assets/images/tech-explorer-robot.png',
      thumbUrl: 'assets/images/tech-explorer-robot.png',
      createdAt: 1709700006000
    },
    {
      id: 'pub-design-1',
      type: 'design',
      title: 'حملة عيادة طب الأسنان التجميلي وزراعة الأسنان',
      category: 'تصميم سوشيال ميديا طبي',
      desc: 'تصميم سوشيال ميديا موجه لحملات التسويق الطبي لعيادات الأسنان، يبرز التقنيات المتطورة والنتائج الطبيعية المضمونة.',
      media: 'assets/images/medical-design-1.svg',
      thumbUrl: 'assets/images/medical-design-1.svg',
      createdAt: 1709700005000
    },
    {
      id: 'pub-design-2',
      type: 'design',
      title: 'بوست العناية بالبشرة وعلاجات الليزر الطبية',
      category: 'تصميم سوشيال ميديا طبي',
      desc: 'تصميم ترويجي لعيادات الجلدية والتجميل بألوان مريحة للعين وتنسيق بصري احترافي يبرز العروض والخدمات.',
      media: 'assets/images/medical-design-2.svg',
      thumbUrl: 'assets/images/medical-design-2.svg',
      createdAt: 1709700004000
    },
    {
      id: 'pub-design-3',
      type: 'design',
      title: 'حملة جراحة المناظير المتقدمة والتدخل الدقيق',
      category: 'تصميم سوشيال ميديا طبي',
      desc: 'محتوى توعوي طبي يبرز مميزات الجراحة بالمناظير والتعافي السريع مع الحفاظ على الدقة والاحترافية الطبية.',
      media: 'assets/images/medical-design-3.svg',
      thumbUrl: 'assets/images/medical-design-3.svg',
      createdAt: 1709700003000
    },
    {
      id: 'pub-design-4',
      type: 'design',
      title: 'دليل التغذية العلاجية والصحة الأيضية المتوازنة',
      category: 'تصميم سوشيال ميديا طبي',
      desc: 'انفوجرافيك بصري توعوي لعيادات التغذية يركز على مؤشر كتلة الجسم ونمط الحياة الصحي بأسلوب مبسط وجذاب.',
      media: 'assets/images/medical-design-4.svg',
      thumbUrl: 'assets/images/medical-design-4.svg',
      createdAt: 1709700002000
    },
    {
      id: 'pub-design-5',
      type: 'design',
      title: 'الرعاية الصحية الرقمية والذكاء الاصطناعي في الطب',
      category: 'تصميم سوشيال ميديا طبي',
      desc: 'تصميم عصري متطور يسلط الضوء على دمج الذكاء الاصطناعي والحلول الرقمية الحديثة في المستشفيات والمراكز التخصصية.',
      media: 'assets/images/medical-design-5.svg',
      thumbUrl: 'assets/images/medical-design-5.svg',
      createdAt: 1709700001000
    }
  ]
};
