export type Lang = 'en'|'hi'|'te';

export const dict = {
  en: {
    // Header & Nav
    brand_tag: "Your fertility journey starts here",
    nav_home: "Home", nav_knowledge: "Knowledge Hub", nav_treatments: "Treatments", nav_life: "Life Stages", nav_success: "Success Stories", nav_blog: "Blog", nav_experts: "Experts", nav_tools: "Tools", nav_sakhi: "Sakhi", lang_label: "Language",

    // Hero
    hero_title: "Nurture Every <span>Journey to Parenthood</span>",
    hero_sub: "Simple, source‑backed guides across fertility, pregnancy, birth and early parenting — made for India.",
    trust_pill: "Trusted by families across India",
    cta_primary: "Meet Sakhi",
    cta_secondary: "For Clinics",

    // What & Why - Updated to match blueprint
    who_title: "Who We Serve",
    who_body: "An India‑first knowledge bridge for the path to parenthood. Clear, jargon‑free explainers through four lenses — Medical, Social & Emotional, Financial and Nutrition. Sakhi offers 24/7 emotional support for difficult moments.",
    why_title: "Why Janma Sethu?",
    why_points: "India‑aware (schemes, rights, local foods),Plain language, 5‑minute reads,Browse by Life Stage and by Lens,Actionable checklists & 'ask your doctor' prompts,Source‑backed (WHO/NHS/ICMR) with last‑updated,Caring by design (Sakhi for emotions),Privacy & respect",

    // New About Cards (3 clean cards as per blueprint)
    about_patients_title: "Patients",
    about_patients_desc: "Simplified fertility guidance, India-aware and judgment-free.",
    about_clinics_title: "Clinics", 
    about_clinics_desc: "Evidence-based resources to support your patient conversations.",
    about_investors_title: "Investors",
    about_investors_desc: "Scalable healthcare infrastructure for underserved communities.",

    // New Parenthood Journey Strip
    journey_title: "Your Complete Parenthood Journey",
    journey_subtitle: "Sakhi guides you through every stage with compassionate, evidence-based support",
    journey_cta: "See how Sakhi supports you",

    // Journey stages
    journey_thinking_icon: "🌱",
    journey_thinking_title: "Thinking of Parenthood",
    journey_thinking_desc: "Nutrition, emotional readiness, financial planning.",
    journey_thinking_tooltip: "Sakhi helps you prepare for the journey ahead",

    journey_trying_icon: "💖", 
    journey_trying_title: "Trying Naturally",
    journey_trying_desc: "Cycle tracking, lifestyle tips.",
    journey_trying_tooltip: "Sakhi guides you through natural conception",

    journey_exploring_icon: "🔬",
    journey_exploring_title: "Exploring Options",
    journey_exploring_desc: "IUI/IVF preparedness, questions for your doctor.",
    journey_exploring_tooltip: "Sakhi supports you through treatment decisions",

    journey_pregnancy_icon: "🤰",
    journey_pregnancy_title: "Pregnancy", 
    journey_pregnancy_desc: "Trimester guidance, myths vs facts.",
    journey_pregnancy_tooltip: "Sakhi accompanies you through pregnancy",

    journey_postdelivery_icon: "👶",
    journey_postdelivery_title: "Post-Delivery",
    journey_postdelivery_desc: "Recovery, newborn care, mental health.",
    journey_postdelivery_tooltip: "Sakhi helps with new parent challenges",

    // Orientation & Lens
    orient_title: "Start here",
    orient_ttc: "Trying to conceive (TTC)", orient_preg: "Pregnancy", orient_parent: "New parent",
    orient_desc_ttc: "Basics, tests, timelines, costs", orient_desc_preg: "Trimester hubs, week‑by‑week", orient_desc_parent: "Feeding, sleep, paperwork",
    lens_title: "Explore by Lens", lens_medical: "Medical", lens_social: "Social & Emotional", lens_financial: "Financial", lens_nutrition: "Nutrition",

    // Section titles
    featured_title: "Editor's Picks",
    treatments_overview_title: "Treatments at a glance",
    success_preview_title: "Success Stories",
    blog_preview_title: "From the Blog",
    rights_title: "Rights & Schemes (India)",
    nutrition_title: "Nutrition Essentials",

    // Nutrition table labels
    nutrition_eat: "Eat", nutrition_limit: "Limit", nutrition_avoid: "Avoid",

    // Footer
    footer_sources: "Sources & review policy", footer_disclaimer: "Information only — not medical advice.", footer_privacy: "Privacy", footer_contact: "Contact",

    // Knowledge hub sample cards
    k1_title: "IVF in 10 Minutes: Steps, Choices, and Costs",
    k1_desc: "Overview from testing to transfer, with typical ranges.",
    k2_title: "First‑Trimester Scan: What It Checks",
    k2_desc: "What the 12‑week scan looks for and what to expect.",
    k3_title: "PMMVY & JSY: How to Apply",
    k3_desc: "Eligibility, documents, and step‑by‑step process.",
    k4_title: "Safe Foods in Pregnancy: Eat / Limit / Avoid",
    k4_desc: "Simple India‑aware table for home and outside.",

    // Sakhi
    sakhi_hero: "Your compassionate companion for the fertility journey",
    sakhi_sub: "24/7 emotional support, coping strategies, and culture‑aware guidance — private and judgment‑free.",
    sakhi_how_title: "How Sakhi Helps",
    sakhi_how_list: "Reduces anxiety before scans or injections,Calms two‑week‑wait spirals with small routines,Supports partners (guilt, helplessness, communication),Sleep nudges, reframes, planning prompts,Knows when to suggest professional help",
    sakhi_try: "Try Sakhi", sakhi_demo_title: "Try a scenario",

    // Chat UI & replies
    chat_title: "Sakhi — Conversation (Demo)", chat_hint: "Type in English/हिंदी/తెలుగు — reply mirrors your language.", chat_quick: "Quick prompts", chat_p1: "I'm anxious about tomorrow's scan", chat_p2: "We can't stop thinking about results", chat_p3: "Partner feels guilty after diagnosis", chat_end: "End chat", chat_clear: "Clear", chat_privacy: "Private & local — nothing leaves your browser.",
    chat_reply_en: "I'm glad you shared this. It's normal to feel anxious. Try 4‑4‑6 breathing (in 4, hold 4, out 6) three times. Then pick one small step you control. If you notice chest pain, dizziness, or thoughts of self‑harm, please contact professional or emergency care.",
    chat_reply_hi: "आपने साझा किया, धन्यवाद। घबराहट सामान्य है। 4‑4‑6 साँस (4 अंदर, 4 रोकें, 6 बाहर) तीन बार करें। फिर अपने नियंत्रण में एक छोटा कदम चुनें। यदि सीने में दर्द/चक्कर/आत्म‑हानि के विचार हों तो तुरंत मदद लें।",
    chat_reply_te: "మీరు పంచుకున్నందుకు ధన్యవాదాలు. ఆందోళన సహజం. 4‑4‑6 శ్వాస (4 లోపల, 4 ఆపి, 6 బయట) మూడు సార్లు చేయండి. తర్వాత మీరు నియంత్రించగల చిన్న మెట్టు ఎంచుకోండి. ఛాతి నొప్పి/తల తిరుగుడు/స్వీయహానీ ఆలోచనలు ఉంటే సహాయం పొందండి.",
  },
  hi: {
    brand_tag: "आपकी प्रजनन यात्रा यहीं से शुरू होती है",
    nav_home: "होम", nav_knowledge: "ज्ञान भंडार", nav_treatments: "उपचार", nav_life: "जीवन चरण", nav_success: "सफलता की कहानियाँ", nav_blog: "ब्लॉग", nav_experts: "विशेषज्ञ", nav_tools: "उपकरण", nav_sakhi: "सखी (साथी)", lang_label: "भाषा",
    hero_title: "<span>मातृत्व</span> का सेतु।<br />यात्रा के हर कदम के लिए।",
    hero_sub: "भारत के लिए सरल, स्रोत‑आधारित मार्गदर्शिकाएँ।",
    trust_pill: "भारत भर के परिवारों का भरोसा",
    cta_primary: "सखी से मिलें", cta_secondary: "क्लिनिक्स के लिए",
    who_title: "हमारी सेवा किसके लिए", who_body: "भारत‑केंद्रित ज्ञान सेतु — चिकित्सा, सामाजिक‑भावनात्मक, वित्तीय और पोषण चार दृष्टिकोणों से। सखी 24/7 भावनात्मक सहारा देती है।",
    why_title: "क्यों चुनें जनमा सेतु?",
    why_points: "भारत‑समझ,सरल भाषा,जीवन‑चरण व दृष्टिकोण दोनों से खोज,कार्यान्वयन योग्य,विश्वसनीय स्रोत,देखभाल‑केंद्रित,गोपनीयता",

    // New About Cards
    about_patients_title: "मरीज़",
    about_patients_desc: "सरल प्रजनन मार्गदर्शन, भारत‑जागरूक और निर्णय‑मुक्त।",
    about_clinics_title: "क्लिनिक",
    about_clinics_desc: "साक्ष्य‑आधारित संसाधन रोगी बातचीत के लिए।",
    about_investors_title: "निवेशक",
    about_investors_desc: "अधिक सेवा वाले समुदायों के लिए स्वास्थ्य अवसंरचना।",

    // Journey Strip
    journey_title: "आपकी संपूर्ण मातृत्व यात्रा",
    journey_subtitle: "हर चरण में सखी करुणामय, साक्ष्य‑आधारित सहयोग देती है",
    journey_cta: "देखें कि सखी कैसे सहायता करती है",

    // Journey stages
    journey_thinking_icon: "🌱",
    journey_thinking_title: "मातृत्व की सोच",
    journey_thinking_desc: "पोषण, भावनात्मक तैयारी, वित्तीय योजना।",
    journey_thinking_tooltip: "सखी आपको आगे की यात्रा के लिए तैयार करने में मदद करती है",

    journey_trying_icon: "💖",
    journey_trying_title: "प्राकृतिक कोशिश",
    journey_trying_desc: "साइकल ट्रैकिंग, जीवनशैली सुझाव।",
    journey_trying_tooltip: "सखी प्राकृतिक गर्भधारण में मार्गदर्शन करती है",

    journey_exploring_icon: "🔬",
    journey_exploring_title: "विकल्पों की खोज",
    journey_exploring_desc: "IUI/IVF तैयारी, डॉक्टर से पूछने योग्य प्रश्न।",
    journey_exploring_tooltip: "सखी इलाज के निर्णयों में सहयोग करती है",

    journey_pregnancy_icon: "🤰",
    journey_pregnancy_title: "गर्भावस्था",
    journey_pregnancy_desc: "तिमाही मार्गदर्शन, मिथक बनाम तथ्य।",
    journey_pregnancy_tooltip: "सखी गर्भावस्था में आपके साथ चलती है",

    journey_postdelivery_icon: "👶",
    journey_postdelivery_title: "प्रसवोत्तर",
    journey_postdelivery_desc: "रिकवरी, नवजात देखभाल, मानसिक स्वास्थ्य।",
    journey_postdelivery_tooltip: "सखी नए माता‑पिता की चुनौतियों में मदद करती है",
    orient_title: "यहाँ से शुरू करें", orient_ttc: "गर्भधारण की योजना (TTC)", orient_preg: "गर्भावस्था", orient_parent: "नए माता‑पिता", orient_desc_ttc: "बेसिक्स, जाँच, समय, लागत", orient_desc_preg: "ट्राइमेस्टर हब", orient_desc_parent: "खुराक, नींद, कागज़ात",
    lens_title: "दृष्टिकोण से देखें", lens_medical: "चिकित्सकीय", lens_social: "सामाजिक‑भावनात्मक", lens_financial: "वित्तीय", lens_nutrition: "पोषण",
    featured_title: "संपादक की पसंद", treatments_overview_title: "उपचार एक नज़र में", success_preview_title: "सफलता की कहानियाँ", blog_preview_title: "ब्लॉग से", rights_title: "अधिकार व योजनाएँ (भारत)", nutrition_title: "पोषण आवश्यकताएँ",
    nutrition_eat: "खाएँ", nutrition_limit: "कम करें", nutrition_avoid: "परहेज़",
    footer_sources: "स्रोत व समीक्षा नीति", footer_disclaimer: "चिकित्सकीय सलाह नहीं", footer_privacy: "गोपनीयता", footer_contact: "संपर्क",
    k1_title: "10 मिनट में IVF: चरण, विकल्प और लागत", k1_desc: "टेस्ट से ट्रांसफर तक का सरल सार।", k2_title: "पहली तिमाही का स्कैन: क्या जाँचा जाता है", k2_desc: "12‑सप्ताह स्कैन के लक्ष्य।", k3_title: "PMMVY व JSY: आवेदन कैसे करें", k3_desc: "पात्रता, दस्तावेज़, चरण।", k4_title: "गर्भावस्था में सुरक्षित भोजन: खाएँ/कम करें/परहेज़", k4_desc: "सरल तालिका",
    sakhi_hero: "प्रजनन यात्रा के लिए सहृदय साथी", sakhi_sub: "24/7 भावनात्मक सहयोग — निजी", sakhi_how_title: "सखी कैसे मदद करती है", sakhi_how_list: "स्कैन/इंजेक्शन से पहले शांति,टू‑वीक‑वेट में छोटे रूटीन,साथी का सहयोग,नींद व योजना,कब पेशेवर मदद लें", sakhi_try: "सखी आज़माएँ", sakhi_demo_title: "एक परिदृश्य आज़माएँ",
    chat_title: "सखी — बातचीत (डेमो)", chat_hint: "English/हिंदी/తెలుగు — जिस लिपि में लिखेंगे, उसी में उत्तर।", chat_quick: "त्वरित संकेत", chat_p1: "कल के स्कैन को लेकर घबराहट है", chat_p2: "रिज़ल्ट के बारे में सोच रुक नहीं रहा", chat_p3: "डायग्नोसिस के बाद साथी को ग्लानि है", chat_end: "समाप्त", chat_clear: "साफ़ करें", chat_privacy: "निजी व स्थानीय।",
    chat_reply_en: "I'm glad you shared this. It's normal to feel anxious. Try 4‑4‑6 breathing (in 4, hold 4, out 6) three times. Then pick one small step you control. If you notice chest pain, dizziness, or thoughts of self‑harm, please contact professional or emergency care.", chat_reply_hi: "आपने साझा किया, धन्यवाद। घबराहट सामान्य है। 4‑4‑6 साँस (4 अंदर, 4 रोकें, 6 बाहर) तीन बार करें। फिर अपने नियंत्रण में एक छोटा कदम चुनें। यदि सीने में दर्द/चक्कर/आत्म‑हानि के विचार हों तो तुरंत मदद लें।", chat_reply_te: "మీరు పంచుకున్నందుకు ధన్యవాదాలు. ఆందోళన సహజం. 4‑4‑6 శ్వాస (4 లోపల, 4 ఆపి, 6 బయట) మూడు సార్లు చేయండి. తర్వాత మీరు నియంత్రించగల చిన్న మెట్టు ఎంచుకోండి. ఛాతి నొప్పి/తల తిరుగుడు/స్వీయహానీ ఆలోచనలు ఉంటే సహాయం పొందండి.",
  },
  te: {
    brand_tag: "మీ ప్రజనన ప్రయాణం ఇక్కడ ప్రారంభమవుతుంది",
    nav_home: "హోమ్", nav_knowledge: "నాలెడ్జ్ హబ్", nav_treatments: "ట్రీట్‌మెంట్‌లు", nav_life: "లైఫ్ స్టేజెస్", nav_success: "సక్సెస్ స్టోరీస్", nav_blog: "బ్లాగ్", nav_experts: "నిపుణులు", nav_tools: "టూల్స్", nav_sakhi: "సఖి (సహచరి)", lang_label: "భాష",
    hero_title: "<span>తల్లిదండ్రత్వానికి</span> వంతెన।<br />ప్రయాణంలోని ప్రతి అడుగుకు।", hero_sub: "భారతీయ సందర్భానికి సరళమైన, ఆధారాలతో కూడిన గైడ్లు.", trust_pill: "భారత్ అంతటా కుటుంబాల విశ్వాసం", cta_primary: "సఖిని కలవండి", cta_secondary: "క్లినిక్‌ల కోసం",
    who_title: "మేము ఎవరికి సేవలు అందిస్తాము", who_body: "భారతీయుల కోసం రూపొందించిన జ్ఞాన వంతెన — మెడికల్, సామాజిక‑భావోద్వేగ, ఆర్థిక, పోషణ అనే నాలుగు కోణాలు. కఠిన సమయాల్లో 24/7 **సఖి** భావోద్వేగ సహాయం అందిస్తుంది.",
    why_title: "ఎందుకు జన్మ సేతు?", why_points: "ఇండియా‑ఫస్ట్,సులభ భాష,స్టేజ్ & లెన్స్ ద్వారా బ్రౌజ్,చర్యకు దారి,నమ్మదగిన మూలాలు,భావాలకు తోడు,గోప్యత",

    // New About Cards
    about_patients_title: "రోగులు",
    about_patients_desc: "సరళమైన ప్రజనన మార్గదర్శకత్వం, భారతీయ‑అవగాహనతో మరియు తీర్పు లేకుండా।",
    about_clinics_title: "క్లినిక్‌లు",
    about_clinics_desc: "రోగుల సంభాషణలకు తోడ్పాటు కోసం సాక్ష్యాధార వనరులు।",
    about_investors_title: "పెట్టుబడిదారులు",
    about_investors_desc: "తక్కువ సేవలున్న కమ్యూనిటీలకు స్కేలబుల్ ఆరోగ్య మౌలిక సదుపాయాలు।",

    // Journey Strip
    journey_title: "మీ సంపూర్ణ తల్లిదండ్రత్వ ప్రయాణం",
    journey_subtitle: "ప్రతి దశలో సఖి కరుణతో, సాక్ష్యాధార మద్దతుని అందిస్తుంది",
    journey_cta: "సఖి ఎలా మద్దతు చేస్తుందో చూడండి",

    // Journey stages
    journey_thinking_icon: "🌱",
    journey_thinking_title: "తల్లిదండ్రత్వ ఆలోచన",
    journey_thinking_desc: "పోషణ, భావోద్వేగ సిద్ధత, ఆర్థిక ప్రణాళిక।",
    journey_thinking_tooltip: "సఖి మిమ్మల్ని ముందుకు వచ్చే ప్రయాణానికి సిద్ధం చేస్తుంది",

    journey_trying_icon: "💖",
    journey_trying_title: "సహజంగా ప్రయత్నం",
    journey_trying_desc: "సైకిల్ ట్రాకింగ్, జీవనశైలి చిట్కాలు।",
    journey_trying_tooltip: "సఖి సహజ గర్భధారణలో మార్గదర్శనం చేస్తుంది",

    journey_exploring_icon: "🔬", 
    journey_exploring_title: "ఎంపికలను అన్వేషణ",
    journey_exploring_desc: "IUI/IVF సిద్ధత, మీ వైద్యుడిని అడిగే ప్రశ్నలు।",
    journey_exploring_tooltip: "సఖి చికిత్స నిర్ణయాలలో మద్దతు చేస్తుంది",

    journey_pregnancy_icon: "🤰",
    journey_pregnancy_title: "గర్భధారణ",
    journey_pregnancy_desc: "ట్రైమెస్టర్ మార్గదర్శనం, అపోహలు వర్సెస్ వాస్తవాలు।",
    journey_pregnancy_tooltip: "సఖి గర్భధారణలో మీతో పాటు ఉంటుంది",

    journey_postdelivery_icon: "👶",
    journey_postdelivery_title: "ప్రసవానంతరం",
    journey_postdelivery_desc: "రికవరీ, నవజాత సంరక్షణ, మానసిక ఆరోగ్యం।",
    journey_postdelivery_tooltip: "సఖి కొత్త తల్లిదండ్రుల సవాళ్లలో సహాయపడుతుంది",
    orient_title: "ఇక్కడ మొదలు", orient_ttc: "ప్రారంభం (TTC)", orient_preg: "గర్భధారణ", orient_parent: "కొత్త తల్లిదండ్రులు", orient_desc_ttc: "బేసిక్స్, టెస్టులు, టైమ్‌లైన్లు, ఖర్చులు", orient_desc_preg: "ట్రైమెస్టర్ హబ్", orient_desc_parent: "ఫీడింగ్, నిద్ర, పేపర్‌వర్క్",
    lens_title: "లెన్స్ ద్వారా", lens_medical: "మెడికల్", lens_social: "సామాజిక & భావోద్వేగ", lens_financial: "ఆర్థిక", lens_nutrition: "పోషణ",
    featured_title: "ఎడిటర్ ఎంపికలు", treatments_overview_title: "ట్రీట్‌మెంట్‌లు — ఒక చూపులో", success_preview_title: "సక్సెస్ స్టోరీస్", blog_preview_title: "బ్లాగ్ నుండి", rights_title: "హక్కులు & పథకాలు (ఇండియా)", nutrition_title: "పోషణ అవసరాలు",
    nutrition_eat: "తినాలి", nutrition_limit: "తగ్గించాలి", nutrition_avoid: "తప్పుకోవాలి",
    footer_sources: "సోర్స్‌లు & సమీక్ష విధానం", footer_disclaimer: "వైద్య సలహా కాదు", footer_privacy: "గోప్యత", footer_contact: "సంప్రదించండి",
    k1_title: "10 నిమిషాల్లో IVF", k1_desc: "టెస్టింగ్ నుంచి ట్రాన్స్‌ఫర్ వరకు", k2_title: "ఫస్ట్ ట్రైమెస్టర్ స్కాన్", k2_desc: "ఏమి చెక్ చేస్తారు", k3_title: "PMMVY & JSY: అప్లై", k3_desc: "అర్హతలు, పత్రాలు, దశలు", k4_title: "గర్భధారణలో సురక్షిత ఆహారం", k4_desc: "Eat/Limit/Avoid పట్టిక",
    sakhi_hero: "మీ ప్రయాణానికి కరుణతో కూడిన సహచరి", sakhi_sub: "24/7 భావోద్వేగ సహాయం — ప్రైవేట్", sakhi_how_title: "సఖి ఎలా సహాయపడుతుంది", sakhi_how_list: "స్కాన్/ఇంజెక్షన్ ముందు ప్రశాంతత,టూ‑వీక్‑వైట్ రొటీన్లు,భాగస్వామి సహాయం,నిద్ర & ప్రణాళిక,ఎప్పుడు నిపుణుడిని సంప్రదించాలి", sakhi_try: "సఖిని ప్రయత్నించండి", sakhi_demo_title: "ఒక సందర్భం ప్రయత్నించండి",
    chat_title: "సఖి — సంభాషణ (డెమో)", chat_hint: "English/हिंदी/తెలుగు — మీరు టైప్ చేసే లిపిలోనే సమాధానం.", chat_quick: "త్వరిత సూచనలు", chat_p1: "రేపటి స్కాన్ గురించి ఆందోళన", chat_p2: "రిజల్ట్స్ గురించే ఆలోచన", chat_p3: "డయగ్నోసిస్ తరువాత గిల్ట్", chat_end: "ముగించండి", chat_clear: "క్లియర్", chat_privacy: "ప్రైవేట్ & లోకల్",
    chat_reply_en: "I'm glad you shared this. It's normal to feel anxious. Try 4‑4‑6 breathing (in 4, hold 4, out 6) three times. Then pick one small step you control. If you notice chest pain, dizziness, or thoughts of self‑harm, please contact professional or emergency care.", chat_reply_hi: "आपने साझा किया, धन्यवाद। घबराहट सामान्य है। 4‑4‑6 साँस (4 अंदर, 4 रोकें, 6 बाहर) तीन बार करें। फिर अपने नियंत्रण में एक छोटा कदम चुनें। यदि सीने में दर्द/चक्कर/आत्म‑हानि के विचार हों तो तुरंत मदद लें।", chat_reply_te: "మీరు పంచుకున్నందుకు ధన్యవాదాలు. ఆందోళన సహజం. 4‑4‑6 శ్వాస (4 లోపల, 4 ఆపి, 6 బయట) మూడు సార్లు చేయండి. తర్వాత మీరు నియంత్రించగల చిన్న మెట్టు ఎంచుకోండి. ఛాతి నొప్పి/తల తిరుగుడు/స్వీయహానీ ఆలోచనలు ఉంటే సహాయం పొందండి.",
  }
} as const;
