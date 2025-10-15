
export type Story = {
  slug: string;
  title: {
    en: string;
    hi: string;
    te: string;
  };
  city: {
    en: string;
    hi: string;
    te: string;
  };
  language: string;
  stage: string;
  treatment?: string;
  summary: {
    en: string;
    hi: string;
    te: string;
  };
  body: {
    en: string;
    hi: string;
    te: string;
  }[];
};

export const stories: Story[] = [
  {
    slug: 'priya-ivf-mumbai',
    title: {
      en: 'Priya — first IVF, finding calm',
      hi: 'प्रिया — पहला आईवीएफ, शांति पाना',
      te: 'ప్రియా — మొదటి IVF, ప్రశాంతత పొందడం'
    },
    city: {
      en: 'Mumbai',
      hi: 'मुंबई',
      te: 'ముంబై'
    },
    language: 'Hindi',
    stage: 'stimulation',
    treatment: 'IVF',
    summary: {
      en: 'Anxious about injections; small routines helped.',
      hi: 'इंजेक्शन को लेकर चिंतित; छोटी दिनचर्या ने मदद की।',
      te: 'ఇంజెక్షన్ల గురించి ఆందోళన; చిన్న దినచర్యలు సహాయపడ్డాయి.'
    },
    body: [
      {
        en: 'When my doctor first explained the IVF process, my mind went blank at the word "injections." I had always been terrified of needles. The thought of giving myself daily shots for two weeks felt impossible. That first night, I sat in my bathroom with the injection kit, hands trembling, unable to even open the box.',
        hi: 'जब मेरे डॉक्टर ने पहली बार आईवीएफ प्रक्रिया समझाई, तो "इंजेक्शन" शब्द सुनते ही मेरा दिमाग खाली हो गया। मुझे हमेशा से सुइयों से डर लगता था। दो हफ्ते तक खुद को रोज इंजेक्शन देने का विचार असंभव लग रहा था। पहली रात, मैं अपने बाथरूम में इंजेक्शन किट के साथ बैठी थी, हाथ कांप रहे थे, बॉक्स खोलने की हिम्मत भी नहीं हो रही थी।',
        te: 'నా డాక్టర్ మొదటిసారి IVF ప్రక్రియను వివరించినప్పుడు, "ఇంజెక్షన్లు" అనే పదం విన్న వెంటనే నా మనసు ఖాళీ అయింది. నాకు ఎప్పుడూ సూదులంటే భయం. రెండు వారాల పాటు రోజూ నాకు నేను ఇంజెక్షన్లు వేసుకోవాలనే ఆలోచన అసాధ్యంగా అనిపించింది. మొదటి రాత్రి, నేను బాత్రూమ్‌లో ఇంజెక్షన్ కిట్‌తో కూర్చున్నాను, చేతులు వణకుతున్నాయి, బాక్స్ కూడా తెరవలేకపోయాను.'
      },
      {
        en: 'My husband suggested we call the clinic\'s nurse hotline. She was incredibly patient, walking me through the breathing technique - inhale for four counts, hold for four, exhale for six. We did it together over the phone until my hands stopped shaking. She reminded me that thousands of women do this successfully, and that fear is normal.',
        hi: 'मेरे पति ने सुझाव दिया कि हम क्लिनिक की नर्स हॉटलाइन पर कॉल करें। वह बहुत धैर्यवान थी, उसने मुझे सांस लेने की तकनीक सिखाई - चार तक गिनते हुए सांस लें, चार तक रोकें, छह तक गिनते हुए छोड़ें। हमने फोन पर साथ में यह किया जब तक मेरे हाथ कांपना बंद नहीं हो गए। उसने मुझे याद दिलाया कि हजारों महिलाएं यह सफलतापूर्वक करती हैं, और डर लगना सामान्य है।',
        te: 'నా భర్త క్లినిక్ నర్స్ హాట్‌లైన్‌కు కాల్ చేయమని సూచించాడు. ఆమె చాలా ఓపికగా ఉంది, శ్వాస తీసుకునే పద్ధతిని నాకు చెప్పింది - నాలుగు వరకు లెక్కించి శ్వాస తీసుకోండి, నాలుగు వరకు పట్టుకోండి, ఆరు వరకు లెక్కించి వదలండి. నా చేతులు వణకడం ఆగే వరకు మేము ఫోన్‌లో కలిసి చేసాము. వేల మంది మహిళలు దీన్ని విజయవంతంగా చేస్తారని, భయం సహజమని ఆమె నాకు గుర్తు చేసింది.'
      },
      {
        en: 'My partner became my injection buddy. Every evening at 8 PM, we\'d set up the kit together. He\'d prep the medication while I did my breathing. Then he\'d hold my hand and count with me. Having that routine, that partnership, made all the difference. By day five, I was doing it independently, though he still sat with me.',
        hi: 'मेरे साथी मेरे इंजेक्शन बडी बन गए। हर शाम 8 बजे, हम साथ में किट तैयार करते। वह दवाई तैयार करते जबकि मैं सांस की एक्सरसाइज करती। फिर वह मेरा हाथ पकड़ते और मेरे साथ गिनते। उस दिनचर्या, उस साझेदारी ने सब कुछ बदल दिया। पांचवें दिन तक, मैं स्वतंत्र रूप से कर रही थी, हालांकि वह अब भी मेरे साथ बैठते थे।',
        te: 'నా భాగస్వామి నా ఇంజెక్షన్ బడ్డీ అయ్యారు. ప్రతి సాయంత్రం 8 గంటలకు, మేము కలిసి కిట్ సిద్ధం చేసేవాళ్ళం. నేను శ్వాస వ్యాయామం చేసేటప్పుడు అతను మందును సిద్ధం చేసేవాడు. తర్వాత అతను నా చేయి పట్టుకుని నాతో కలిసి లెక్కించేవాడు. ఆ దినచర్య, ఆ భాగస్వామ్యం అన్నీ మార్చివేసింది. ఐదవ రోజు నాటికి, నేను స్వతంత్రంగా చేస్తున్నాను, అయినా అతను ఇంకా నాతో కూర్చునేవాడు.'
      },
      {
        en: 'I discovered "worry windows" - I allowed myself to feel anxious only during specific times (morning coffee, evening walk). Outside those times, whenever fear crept in, I\'d acknowledge it but save it for my worry window. This helped me regain control over my emotions rather than letting anxiety consume my entire day.',
        hi: 'मैंने "चिंता की खिड़कियां" खोजीं - मैंने खुद को केवल विशिष्ट समय (सुबह की कॉफी, शाम की सैर) के दौरान चिंतित महसूस करने की अनुमति दी। उन समयों के बाहर, जब भी डर आता, मैं इसे स्वीकार करती लेकिन इसे अपनी चिंता की खिड़की के लिए बचाती। इससे मुझे अपनी भावनाओं पर नियंत्रण वापस पाने में मदद मिली, बजाय इसके कि चिंता मेरे पूरे दिन को खा जाए।',
        te: 'నేను "ఆందోళన విండోస్" కనుగొన్నాను - నేను నిర్దిష్ట సమయాల్లో మాత్రమే (ఉదయం కాఫీ, సాయంత్రం నడక) ఆందోళన చెందడానికి అనుమతించుకున్నాను. ఆ సమయాల వెలుపల, భయం వచ్చినప్పుడల్లా, నేను దానిని అంగీకరించేవాడిని కానీ నా ఆందోళన విండో కోసం దాన్ని భద్రపరచుకునేవాడిని. ఇది ఆందోళన నా మొత్తం రోజును తినేయడం కంటే నా భావోద్వేగాలపై నియంత్రణను తిరిగి పొందడంలో సహాయపడింది.'
      },
      {
        en: 'The night before egg retrieval, I actually slept well for the first time in weeks. All the injections were done. I had faced my biggest fear daily and survived. The procedure went smoothly, and when I woke up, my doctor told me they retrieved 12 healthy eggs. I cried - not from pain, but from relief and pride in myself.',
        hi: 'अंडे की पुनर्प्राप्ति से पहले की रात, मैं वास्तव में हफ्तों में पहली बार अच्छी तरह सोई। सभी इंजेक्शन पूरे हो गए थे। मैंने अपने सबसे बड़े डर का रोज सामना किया था और बची रही। प्रक्रिया सुचारू रूप से चली, और जब मैं जागी, तो मेरे डॉक्टर ने मुझे बताया कि उन्होंने 12 स्वस्थ अंडे प्राप्त किए। मैं रोई - दर्द से नहीं, बल्कि राहत और खुद पर गर्व से।',
        te: 'గుడ్డు పునరుద్ధరణకు ముందు రాత్రి, వారాల్లో మొదటిసారిగా నేను నిజంగా బాగా నిద్రపోయాను. అన్ని ఇంజెక్షన్లు అయిపోయాయి. నేను రోజూ నా అతి పెద్ద భయాన్ని ఎదుర్కొన్నాను మరియు బ్రతికాను. ప్రక్రియ సజావుగా జరిగింది, మరియు నేను మేల్కొన్నప్పుడు, నా డాక్టర్ వారు 12 ఆరోగ్యకరమైన గుడ్లు పొందారని నాకు చెప్పారు. నేను ఏడ్చాను - నొప్పితో కాదు, ఉపశమనం మరియు నాపై గర్వంతో.'
      }
    ]
  },
  {
    slug: 'kavitha-tww-chennai',
    title: {
      en: 'Kavitha — two‑week wait',
      hi: 'कविता — दो सप्ताह का इंतजार',
      te: 'కవిత — రెండు వారాల నిరీక్షణ'
    },
    city: {
      en: 'Chennai',
      hi: 'चेन्नई',
      te: 'చెన్నై'
    },
    language: 'Tamil',
    stage: 'tww',
    treatment: 'IVF',
    summary: {
      en: 'Hope, fear, and coping.',
      hi: 'आशा, भय और सामना करना।',
      te: 'ఆశ, భయం మరియు ఎదుర్కోవడం.'
    },
    body: [
      {
        en: 'The day after embryo transfer, time seemed to slow down to an unbearable crawl. Every twinge, every sensation in my body became a subject of intense analysis. Was that cramping a good sign? A bad sign? Just normal post-transfer symptoms? The uncertainty was maddening.',
        hi: 'भ्रूण स्थानांतरण के अगले दिन, समय असहनीय रूप से धीमा हो गया। मेरे शरीर में हर टीस, हर अनुभूति गहन विश्लेषण का विषय बन गई। क्या वह ऐंठन एक अच्छा संकेत था? एक बुरा संकेत? सिर्फ स्थानांतरण के बाद के सामान्य लक्षण? अनिश्चितता पागल कर रही थी।',
        te: 'పిండ బదిలీ తర్వాత రోజు, సమయం భరించలేని నెమ్మదిగా కదిలింది. నా శరీరంలో ప్రతి నొప్పి, ప్రతి అనుభూతి తీవ్ర విశ్లేషణ విషయంగా మారింది. ఆ నొప్పి మంచి సంకేతమా? చెడ్డ సంకేతమా? కేవలం బదిలీ తర్వాత సాధారణ లక్షణాలా? అనిశ్చితి పిచ్చి పట్టిస్తోంది.'
      },
      {
        en: 'I made the mistake of googling symptoms on day three. Big mistake. For every positive story I read, there were ten that went the other way. I found myself spiraling, reading pregnancy test forums at 2 AM, looking for patterns that might predict my outcome. My husband finally hid my phone and made me promise to stop searching.',
        hi: 'तीसरे दिन मैंने लक्षणों को गूगल करने की गलती की। बड़ी गलती। मैंने जितनी सकारात्मक कहानियां पढ़ीं, उतनी ही दस नकारात्मक थीं। मैं खुद को घुमा रही थी, सुबह 2 बजे गर्भावस्था परीक्षण फोरम पढ़ रही थी, ऐसे पैटर्न ढूंढ रही थी जो मेरे परिणाम की भविष्यवाणी कर सकें। आखिरकार मेरे पति ने मेरा फोन छिपा दिया और मुझसे खोज बंद करने का वादा करवाया।',
        te: 'మూడవ రోజు నేను లక్షణాలను గూగుల్ చేసే తప్పు చేశాను. పెద్ద తప్పు. నేను చదివిన ప్రతి సానుకూల కథకు, వ్యతిరేక దిశలో వెళ్ళిన పది కథలున్నాయి. నేను మునిగిపోతున్నాను, తెల్లవారుజామున 2 గంటలకు గర్భధారణ పరీక్ష ఫోరమ్‌లు చదువుతున్నాను, నా ఫలితాన్ని అంచనా వేయగల నమూనాల కోసం వెతుకుతున్నాను. చివరకు నా భర్త నా ఫోన్ దాచేశాడు మరియు వెతకడం ఆపమని నాకు వాగ్దానం చేయించాడు.'
      },
      {
        en: 'My clinic counselor suggested a daily structure. Mornings were for gentle walks and meditation. Afternoons for work or hobbies. Evenings for connection with loved ones. She also recommended journaling - not about symptoms, but about hopes and fears. Writing them down somehow made them less overwhelming.',
        hi: 'मेरी क्लिनिक काउंसलर ने दैनिक संरचना का सुझाव दिया। सुबह हल्की सैर और ध्यान के लिए। दोपहर काम या शौक के लिए। शाम प्रियजनों के साथ जुड़ाव के लिए। उसने जर्नलिंग की भी सिफारिश की - लक्षणों के बारे में नहीं, बल्कि आशाओं और डर के बारे में। उन्हें लिखने से किसी तरह वे कम भारी लगने लगीं।',
        te: 'నా క్లినిక్ కౌన్సెలర్ రోజువారీ నిర్మాణాన్ని సూచించారు. ఉదయాలు సున్నితమైన నడక మరియు ధ్యానం కోసం. మధ్యాహ్నాలు పని లేదా అభిరుచుల కోసం. సాయంత్రాలు ప్రియమైన వారితో అనుసంధానం కోసం. ఆమె జర్నలింగ్ కూడా సిఫార్సు చేసింది - లక్షణాల గురించి కాదు, ఆశలు మరియు భయాల గురించి. వాటిని రాయడం వల్ల అవి ఏదో విధంగా తక్కువ భారమయ్యాయి.'
      },
      {
        en: 'Around day nine, I had a moment of clarity. Whether the embryo implanted or not was already determined - nothing I did now would change it. That realization was both terrifying and liberating. I could either spend these days in agony or try to find moments of peace. I chose peace, as much as I could.',
        hi: 'नौवें दिन के आसपास, मुझे स्पष्टता का एक क्षण मिला। भ्रूण का आरोपण हुआ या नहीं यह पहले से तय था - अब मैं जो भी करती वह इसे नहीं बदल सकती थी। वह अनुभूति डरावनी और मुक्तिदायक दोनों थी। मैं या तो इन दिनों को पीड़ा में बिता सकती थी या शांति के क्षण खोजने की कोशिश कर सकती थी। मैंने शांति चुनी, जितना मैं कर सकती थी।',
        te: 'తొమ్మిదవ రోజు చుట్టూ, నాకు స్పష్టత యొక్క క్షణం వచ్చింది. పిండం అమర్చబడిందా లేదా అనేది ఇప్పటికే నిర్ణయించబడింది - నేను ఇప్పుడు చేసేది దానిని మార్చదు. ఆ గ్రహింపు భయంకరమైనది మరియు విముక్తి కలిగించేది రెండూ. నేను ఈ రోజులను వేదనలో గడపవచ్చు లేదా శాంతి క్షణాలను కనుగొనడానికి ప్రయత్నించవచ్చు. నేను వీలైనంత శాంతిని ఎంచుకున్నాను.'
      },
      {
        en: 'Test day arrived. My hands shook as I took the pregnancy test. Those three minutes waiting for the result felt like hours. When I saw the positive line, I didn\'t scream or jump. I just sat there, tears streaming down my face, whispering "thank you" over and over. The wait had been worth it.',
        hi: 'परीक्षण का दिन आया। गर्भावस्था परीक्षण करते समय मेरे हाथ कांप रहे थे। परिणाम की प्रतीक्षा के वे तीन मिनट घंटों जैसे लगे। जब मैंने सकारात्मक रेखा देखी, तो मैं चिल्लाई या कूदी नहीं। मैं बस वहीं बैठी रही, चेहरे पर आंसू बह रहे थे, बार-बार "धन्यवाद" फुसफुसा रही थी। इंतजार इसके लायक था।',
        te: 'పరీక్ష రోజు వచ్చింది. నేను గర్భధారణ పరీక్ష తీసుకున్నప్పుడు నా చేతులు వణికాయి. ఫలితం కోసం వేచి ఉన్న ఆ మూడు నిమిషాలు గంటలలా అనిపించాయి. నేను సానుకూల రేఖను చూసినప్పుడు, నేను అరవలేదు లేదా దూకలేదు. నేను అక్కడే కూర్చున్నాను, ముఖంపై కన్నీళ్లు ప్రవహిస్తున్నాయి, పదే పదే "ధన్యవాదాలు" అని గుసగుసలాడుతూ. నిరీక్షణ దానికి విలువైనది.'
      }
    ]
  },
  {
    slug: 'ravi-diagnosis-hyd',
    title: {
      en: 'Ravi — making sense of diagnosis',
      hi: 'रवि — निदान को समझना',
      te: 'రవి — నిర్ధారణను అర్థం చేసుకోవడం'
    },
    city: {
      en: 'Hyderabad',
      hi: 'हैदराबाद',
      te: 'హైదరాబాద్'
    },
    language: 'Telugu',
    stage: 'consultation',
    summary: {
      en: 'Guilt → understanding → action.',
      hi: 'अपराधबोध → समझ → कार्य।',
      te: 'అపరాధభావన → అవగాహన → చర్య.'
    },
    body: [
      {
        en: 'When the fertility specialist said "male factor infertility," I felt like the world stopped. My wife and I had been trying for two years, and I had convinced myself it was her age, her stress, anything but me. The semen analysis results proved me wrong, and the guilt was crushing.',
        hi: 'जब प्रजनन विशेषज्ञ ने "पुरुष कारक बांझपन" कहा, तो मुझे लगा कि दुनिया रुक गई। मेरी पत्नी और मैं दो साल से कोशिश कर रहे थे, और मैंने खुद को यह विश्वास दिलाया था कि यह उसकी उम्र, उसका तनाव, मेरे अलावा कुछ भी था। वीर्य विश्लेषण के परिणाम ने मुझे गलत साबित किया, और अपराधबोध कुचल रहा था।',
        te: 'ఫెర్టిలిటీ స్పెషలిస్ట్ "మగ కారక వంధ్యత్వం" అన్నప్పుడు, ప్రపంచం ఆగిపోయినట్లు అనిపించింది. నా భార్య మరియు నేను రెండు సంవత్సరాలుగా ప్రయత్నిస్తున్నాము, మరియు అది ఆమె వయస్సు, ఆమె ఒత్తిడి, నేను కాకుండా ఏదైనా అని నేను నన్ను నేను ఒప్పించుకున్నాను. వీర్య విశ్లేషణ ఫలితాలు నన్ను తప్పు అని నిరూపించాయి, మరియు అపరాధభావన అణిచివేసింది.'
      },
      {
        en: 'I couldn\'t face my wife for days. How could I tell her that I was the reason we couldn\'t have a baby? The irony was bitter - in our society, everyone assumes it\'s always the woman\'s "fault." Here I was, the actual problem, and I had been silently blaming her all along.',
        hi: 'मैं दिनों तक अपनी पत्नी का सामना नहीं कर सका। मैं उसे कैसे बताता कि मैं ही कारण था कि हम बच्चा नहीं कर सकते? विडंबना कड़वी थी - हमारे समाज में, हर कोई मानता है कि यह हमेशा महिला की "गलती" होती है। यहां मैं था, असली समस्या, और मैं चुपचाप उसे दोष दे रहा था।',
        te: 'నేను రోజుల తరబడి నా భార్యను ఎదుర్కోలేకపోయాను. మనం బిడ్డను కలిగి ఉండలేకపోవడానికి నేను కారణం అని ఆమెకు ఎలా చెప్పగలను? వ్యంగ్యం చేదుగా ఉంది - మన సమాజంలో, అందరూ అది ఎల్లప్పుడూ స్త్రీ "తప్పు" అని అనుకుంటారు. ఇక్కడ నేను ఉన్నాను, అసలు సమస్య, మరియు నేను అన్ని వరకు నిశ్శబ్దంగా ఆమెను నిందిస్తున్నాను.'
      },
      {
        en: 'My wife found me one evening, staring at the test results. Instead of anger or disappointment, she held my hand and said, "This is our challenge, not yours alone." That moment changed everything. She scheduled us for a counseling session, and the counselor helped me understand that infertility isn\'t about fault or blame - it\'s a medical condition.',
        hi: 'एक शाम मेरी पत्नी ने मुझे परीक्षण के परिणामों को घूरते हुए पाया। गुस्से या निराशा के बजाय, उसने मेरा हाथ पकड़ा और कहा, "यह हमारी चुनौती है, केवल तुम्हारी नहीं।" उस क्षण ने सब कुछ बदल दिया। उसने हमारे लिए एक परामर्श सत्र निर्धारित किया, और परामर्शदाता ने मुझे समझने में मदद की कि बांझपन गलती या दोष के बारे में नहीं है - यह एक चिकित्सा स्थिति है।',
        te: 'ఒక సాయంత్రం నా భార్య పరీక్ష ఫలితాలను చూస్తూ నన్ను కనుగొంది. కోపం లేదా నిరాశకు బదులుగా, ఆమె నా చేయి పట్టుకుని, "ఇది మన సవాలు, నీది మాత్రమే కాదు" అంది. ఆ క్షణం అన్నీ మార్చివేసింది. ఆమె మాకు కౌన్సెలింగ్ సెషన్ షెడ్యూల్ చేసింది, మరియు కౌన్సెలర్ వంధ్యత్వం తప్పు లేదా నిందా గురించి కాదు - ఇది వైద్య పరిస్థితి అని అర్థం చేసుకోవడంలో నాకు సహాయపడింది.'
      },
      {
        en: 'We learned about varicocele repair, lifestyle changes, and ICSI as treatment options. The doctor explained that with my condition, we had excellent chances with IVF-ICSI. What felt like an ending was actually a clear path forward. I started taking supplements, quit smoking, changed my diet, and wore looser underwear - small actions that made me feel like I was doing something.',
        hi: 'हमने वैरिकोसेले मरम्मत, जीवनशैली में बदलाव, और आईसीएसआई के बारे में उपचार विकल्पों के रूप में सीखा। डॉक्टर ने समझाया कि मेरी स्थिति के साथ, आईवीएफ-आईसीएसआई से हमारी उत्कृष्ट संभावनाएं थीं। जो अंत जैसा लग रहा था वह वास्तव में आगे का एक स्पष्ट रास्ता था। मैंने सप्लीमेंट लेना शुरू किया, धूम्रपान छोड़ दिया, अपना आहार बदला, और ढीली अंडरवियर पहनना शुरू किया - छोटी क्रियाएं जिनसे मुझे लगा कि मैं कुछ कर रहा हूं।',
        te: 'మేము వారికోసెల్ మరమ్మత్తు, జీవనశైలి మార్పులు మరియు ICSI చికిత్స ఎంపికల గురించి నేర్చుకున్నాము. డాక్టర్ నా పరిస్థితితో, IVF-ICSI తో మాకు అద్భుతమైన అవకాశాలు ఉన్నాయని వివరించారు. ముగింపులా అనిపించింది నిజానికి ముందుకు స్పష్టమైన మార్గం. నేను సప్లిమెంట్లు తీసుకోవడం ప్రారంభించాను, ధూమపానం మానేశాను, నా ఆహారాన్ని మార్చుకున్నాను, మరియు వదులుగా ఉండే అండర్‌వేర్ ధరించడం ప్రారంభించాను - నేను ఏదో చేస్తున్నట్లు అనిపించే చిన్న చర్యలు.'
      },
      {
        en: 'Six months later, we started our IVF cycle. When the embryologist showed us our embryos on the screen - created through ICSI with my sperm - I cried. My wife squeezed my hand. We were in this together, and that diagnosis that once felt like a death sentence was now just part of our story - not the whole story.',
        hi: 'छह महीने बाद, हमने अपना आईवीएफ चक्र शुरू किया। जब भ्रूणविज्ञानी ने हमें स्क्रीन पर हमारे भ्रूण दिखाए - मेरे शुक्राणु के साथ आईसीएसआई के माध्यम से बनाए गए - मैं रो पड़ा। मेरी पत्नी ने मेरा हाथ दबाया। हम इसमें साथ थे, और वह निदान जो कभी मौत की सजा जैसा लगता था अब हमारी कहानी का सिर्फ एक हिस्सा था - पूरी कहानी नहीं।',
        te: 'ఆరు నెలల తర్వాత, మేము మా IVF చక్రాన్ని ప్రారంభించాము. ఎంబ్రియాలజిస్ట్ స్క్రీన్‌పై మా పిండాలను చూపించినప్పుడు - నా స్పెర్మ్‌తో ICSI ద్వారా సృష్టించబడినవి - నేను ఏడ్చాను. నా భార్య నా చేయి పిసికింది. మేము దీనిలో కలిసి ఉన్నాము, మరియు ఒకప్పుడు మరణశిక్ష వంటి అనిపించిన ఆ నిర్ధారణ ఇప్పుడు మా కథలో భాగం మాత్రమే - మొత్తం కథ కాదు.'
      }
    ]
  },
  {
    slug: 'ananya-prep-delhi',
    title: {
      en: 'Ananya — starting with hope',
      hi: 'अनन्या — आशा के साथ शुरुआत',
      te: 'అనన్య — ఆశతో ప్రారంభం'
    },
    city: {
      en: 'Delhi',
      hi: 'दिल्ली',
      te: 'ఢిల్లీ'
    },
    language: 'Hindi',
    stage: 'preparation',
    summary: {
      en: 'Mixed emotions, simple plans.',
      hi: 'मिली-जुली भावनाएँ, सरल योजनाएँ।',
      te: 'మిశ్రమ భావోద్వేగాలు, సాధారణ ప్రణాళికలు.'
    },
    body: [
      {
        en: 'After three years of trying naturally, my husband and I finally sat in a fertility clinic. The doctor was kind but direct - at 37, with diminished ovarian reserve, our best option was IVF. I left feeling overwhelmed, scared, but also oddly relieved. Finally, we had a plan.',
        hi: 'तीन साल तक स्वाभाविक रूप से प्रयास करने के बाद, मेरे पति और मैं आखिरकार एक प्रजनन क्लिनिक में बैठे। डॉक्टर दयालु लेकिन सीधी थी - 37 साल की उम्र में, कम डिम्बग्रंथि रिजर्व के साथ, हमारा सबसे अच्छा विकल्प आईवीएफ था। मैं अभिभूत, डरी हुई, लेकिन अजीब तरह से राहत महसूस करते हुए निकली। आखिरकार, हमारे पास एक योजना थी।',
        te: 'మూడు సంవత్సరాలు సహజంగా ప్రయత్నించిన తర్వాత, నా భర్త మరియు నేను చివరకు ఫెర్టిలిటీ క్లినిక్‌లో కూర్చున్నాము. డాక్టర్ దయగలవారు కానీ నేరుగా చెప్పారు - 37 సంవత్సరాల వయస్సులో, తగ్గిన అండాశయ నిల్వతో, మా ఉత్తమ ఎంపిక IVF. నేను భారంగా, భయంగా, కానీ విచిత్రంగా ఉపశమనం పొందిన అనుభూతితో బయటకు వచ్చాను. చివరకు, మాకు ప్రణాళిక ఉంది.'
      },
      {
        en: 'The preparation phase was surprisingly empowering. I started taking prenatal vitamins, CoQ10, and DHEA as prescribed. I cut out alcohol completely and reduced my coffee intake. My husband joined me in making healthier choices - we started walking every evening, meal prepping on Sundays, and going to bed earlier.',
        hi: 'तैयारी का चरण आश्चर्यजनक रूप से सशक्त था। मैंने निर्धारित के अनुसार प्रसव पूर्व विटामिन, CoQ10, और DHEA लेना शुरू किया। मैंने शराब पूरी तरह से छोड़ दी और अपनी कॉफी का सेवन कम किया। मेरे पति स्वस्थ विकल्प बनाने में मेरे साथ शामिल हुए - हमने हर शाम टहलना, रविवार को भोजन तैयार करना, और जल्दी सोना शुरू किया।',
        te: 'సిద్ధపరచడం దశ ఆశ్చర్యకరంగా శక్తివంతం చేసింది. నేను సూచించినట్లుగా ప్రినేటల్ విటమిన్లు, CoQ10, మరియు DHEA తీసుకోవడం ప్రారంభించాను. నేను మద్యం పూర్తిగా నిలిపివేసాను మరియు నా కాఫీ తీసుకోవడం తగ్గించాను. నా భర్త ఆరోగ్యకరమైన ఎంపికలు చేయడంలో నాతో చేరాడు - మేము ప్రతి సాయంత్రం నడవడం, ఆదివారం భోజన తయారీ, మరియు ముందుగానే నిద్రపోవడం ప్రారంభించాము.'
      },
      {
        en: 'I created a "fertility fund" spreadsheet to understand costs. The numbers were intimidating at first, but breaking it down made it manageable. We decided to use some savings, take a small loan, and postpone our planned vacation. My parents offered to help, which I initially refused but eventually accepted with gratitude.',
        hi: 'लागत को समझने के लिए मैंने एक "प्रजनन कोष" स्प्रेडशीट बनाई। संख्याएं पहले डराने वाली थीं, लेकिन इसे तोड़ने से यह प्रबंधनीय हो गई। हमने कुछ बचत का उपयोग करने, एक छोटा ऋण लेने, और हमारी नियोजित छुट्टी को स्थगित करने का फैसला किया। मेरे माता-पिता ने मदद की पेशकश की, जिसे मैंने पहले मना कर दिया लेकिन अंततः कृतज्ञता के साथ स्वीकार किया।',
        te: 'ఖర్చులను అర్థం చేసుకోవడానికి నేను "ఫెర్టిలిటీ ఫండ్" స్ప్రెడ్‌షీట్ సృష్టించాను. సంఖ్యలు మొదట భయపెట్టేవి, కానీ దానిని విభజించడం వల్ల అది నిర్వహించదగినది అయింది. మేము కొంత పొదుపును ఉపయోగించడం, చిన్న రుణం తీసుకోవడం మరియు మా ప్రణాళికాబద్ధమైన సెలవును వాయిదా వేయడం నిర్ణయించుకున్నాము. నా తల్లిదండ్రులు సహాయం చేయడానికి ముందుకు వచ్చారు, నేను మొదట తిరస్కరించాను కానీ చివరికి కృతజ్ఞతతో అంగీకరించాను.'
      },
      {
        en: 'I told only my best friend and sister about the IVF. Keeping it private felt right - less pressure, fewer questions, no unsolicited advice. But having those two people to talk to was crucial. My sister had gone through IVF herself, and her insights were invaluable.',
        hi: 'मैंने केवल अपनी सबसे अच्छी दोस्त और बहन को आईवीएफ के बारे में बताया। इसे निजी रखना सही लगा - कम दबाव, कम सवाल, कोई अनचाही सलाह नहीं। लेकिन बात करने के लिए उन दो लोगों का होना महत्वपूर्ण था। मेरी बहन ने खुद आईवीएफ किया था, और उसकी अंतर्दृष्टि अमूल्य थी।',
        te: 'నేను IVF గురించి నా ఉత్తమ స్నేహితుడు మరియు సోదరికి మాత్రమే చెప్పాను. దానిని ప్రైవేట్‌గా ఉంచడం సరైనదిగా అనిపించింది - తక్కువ ఒత్తిడి, తక్కువ ప్రశ్నలు, అడగని సలహా లేదు. కానీ మాట్లాడటానికి ఆ ఇద్దరు వ్యక్తులు ఉండటం కీలకం. నా సోదరి స్వయంగా IVF ద్వారా వెళ్ళింది, మరియు ఆమె అంతర్దృష్టులు అమూల్యమైనవి.'
      },
      {
        en: 'The month before starting injections, I practiced self-compassion. I reminded myself daily: this is hard, and I\'m allowed to feel scared. I don\'t have to be positive all the time. Some days I cried, some days I felt hopeful. Both were valid. When our start date was confirmed, I felt ready - not fearless, but ready.',
        hi: 'इंजेक्शन शुरू करने से एक महीने पहले, मैंने आत्म-करुणा का अभ्यास किया। मैंने खुद को रोज याद दिलाया: यह कठिन है, और मुझे डरने की अनुमति है। मुझे हर समय सकारात्मक रहने की जरूरत नहीं है। कुछ दिन मैं रोई, कुछ दिन मैंने आशा महसूस की। दोनों वैध थे। जब हमारी शुरुआत की तारीख की पुष्टि हुई, तो मैं तैयार महसूस की - निडर नहीं, लेकिन तैयार।',
        te: 'ఇంజెక్షన్లు ప్రారంభించడానికి ఒక నెల ముందు, నేను స్వీయ-కరుణను అభ్యసించాను. నేను రోజూ నాకు గుర్తు చేసుకున్నాను: ఇది కష్టం, మరియు నేను భయపడటానికి అనుమతించబడ్డాను. నేను అన్ని సమయాలలో సానుకూలంగా ఉండవలసిన అవసరం లేదు. కొన్ని రోజులు నేను ఏడ్చాను, కొన్ని రోజులు నేను ఆశాభావం అనుభవించాను. రెండూ చెల్లుబాటు అయ్యేవి. మా ప్రారంభ తేదీ నిర్ధారించబడినప్పుడు, నేను సిద్ధంగా అనిపించాను - నిర్భయంగా కాదు, కానీ సిద్ధంగా.'
      }
    ]
  },
  {
    slug: 'meera-vbac-pune',
    title: {
      en: 'Meera — VBAC journey',
      hi: 'मीरा — वीबीएसी यात्रा',
      te: 'మీరా — VBAC ప్రయాణం'
    },
    city: {
      en: 'Pune',
      hi: 'पुणे',
      te: 'పూణే'
    },
    language: 'Marathi',
    stage: 'pregnancy',
    summary: {
      en: 'Balanced risks and hopes.',
      hi: 'संतुलित जोखिम और उम्मीदें।',
      te: 'సమతుల్య నష్టాలు మరియు ఆశలు.'
    },
    body: [
      {
        en: 'My first birth ended in an emergency C-section after 18 hours of labor. The recovery was hard, and I felt like I had failed somehow. When I got pregnant again three years later, I knew I wanted to try for a vaginal birth after cesarean (VBAC). But was it safe? Would my doctor even support it?',
        hi: 'मेरा पहला प्रसव 18 घंटे के प्रसव के बाद आपातकालीन सी-सेक्शन में समाप्त हुआ। रिकवरी कठिन थी, और मुझे लगा कि मैं किसी तरह असफल हो गई हूं। जब मैं तीन साल बाद फिर से गर्भवती हुई, तो मुझे पता था कि मैं सिजेरियन के बाद योनि प्रसव (वीबीएसी) की कोशिश करना चाहती हूं। लेकिन क्या यह सुरक्षित था? क्या मेरे डॉक्टर इसका समर्थन भी करेंगे?',
        te: 'నా మొదటి ప్రసవం 18 గంటల ప్రసవ నొప్పుల తర్వాత అత్యవసర C-సెక్షన్‌తో ముగిసింది. కోలుకోవడం కష్టంగా ఉంది, మరియు నేను ఏదో విధంగా విఫలమయ్యానని అనిపించింది. మూడు సంవత్సరాల తర్వాత నేను మళ్లీ గర్భవతి అయినప్పుడు, సిజేరియన్ తర్వాత యోని ప్రసవం (VBAC) కోసం ప్రయత్నించాలనుకుంటున్నానని నాకు తెలుసు. కానీ అది సురక్షితమా? నా డాక్టర్ దానికి మద్దతు ఇస్తారా?'
      },
      {
        en: 'I did my research obsessively. I read studies, joined VBAC support groups online, and interviewed three different doctors before finding one who was experienced and supportive. She explained the risks honestly - uterine rupture, though rare, was serious. But she also explained that I was a good candidate: my incision had healed well, my pregnancy was healthy, and my baby was in good position.',
        hi: 'मैंने जुनूनी तरीके से अपना शोध किया। मैंने अध्ययन पढ़े, ऑनलाइन वीबीएसी सहायता समूहों में शामिल हुई, और तीन अलग-अलग डॉक्टरों का साक्षात्कार किया, जब तक कि मुझे एक अनुभवी और सहायक नहीं मिला। उसने जोखिमों को ईमानदारी से समझाया - गर्भाशय टूटना, हालांकि दुर्लभ, गंभीर था। लेकिन उसने यह भी समझाया कि मैं एक अच्छी उम्मीदवार थी: मेरा चीरा अच्छी तरह से ठीक हो गया था, मेरी गर्भावस्था स्वस्थ थी, और मेरा बच्चा अच्छी स्थिति में था।',
        te: 'నేను నా పరిశోధనను మతిస్థిమితం లేకుండా చేశాను. నేను అధ్యయనాలు చదివాను, ఆన్‌లైన్‌లో VBAC మద్దతు సమూహాలలో చేరాను, మరియు అనుభవజ్ఞుడు మరియు మద్దతుగా ఉన్న వ్యక్తిని కనుగొనే వరకు మూడు వేర్వేరు వైద్యులను ఇంటర్వ్యూ చేశాను. ఆమె నష్టాలను నిజాయితీగా వివరించింది - గర్భాశయ చీలిక, అరుదుగా ఉన్నప్పటికీ, తీవ్రమైనది. కానీ ఆమె నేను మంచి అభ్యర్థిని అని కూడా వివరించింది: నా కోత బాగా నయమైంది, నా గర్భధారణ ఆరోగ్యంగా ఉంది, మరియు నా బిడ్డ మంచి స్థితిలో ఉంది.'
      },
      {
        en: 'We created a detailed birth plan together - my preferences for a natural birth, but also the scenarios where we\'d need to switch to a C-section. Having Plan A and Plan B written down gave me peace. I wasn\'t being rigid; I was being prepared. I hired a doula who had VBAC experience, and she became my rock.',
        hi: 'हमने एक साथ एक विस्तृत जन्म योजना बनाई - प्राकृतिक जन्म के लिए मेरी प्राथमिकताएं, लेकिन वे परिदृश्य भी जहां हमें सी-सेक्शन पर स्विच करने की आवश्यकता होगी। प्लान ए और प्लान बी लिखने से मुझे शांति मिली। मैं कठोर नहीं थी; मैं तैयार थी। मैंने एक डौला को काम पर रखा जिसे वीबीएसी का अनुभव था, और वह मेरी चट्टान बन गई।',
        te: 'మేము కలిసి వివరణాత్మక జన్మ ప్రణాళికను సృష్టించాము - సహజ జననం కోసం నా ప్రాధాన్యతలు, కానీ మేము C-సెక్షన్‌కు మారాల్సిన దృశ్యాలు కూడా. ప్లాన్ A మరియు ప్లాన్ B వ్రాసి ఉంచడం వల్ల నాకు శాంతి లభించింది. నేను దృఢంగా ఉండటం లేదు; నేను సిద్ధంగా ఉన్నాను. నేను VBAC అనుభవం ఉన్న డౌలాను నియమించుకున్నాను, మరియు ఆమె నా రాయిగా మారింది.'
      },
      {
        en: 'Labor started naturally at 39 weeks. The contractions were familiar yet different from last time. I labored at home as long as possible, using all the techniques I had practiced - breathing, movement, water. When we got to the hospital, I was already 6 cm dilated. My doctor smiled and said, "You\'re doing great."',
        hi: 'प्रसव 39 सप्ताह में स्वाभाविक रूप से शुरू हुआ। संकुचन परिचित थे फिर भी पिछली बार से अलग थे। मैंने घर पर जितना संभव हो सके प्रसव किया, सभी तकनीकों का उपयोग करते हुए जिनका मैंने अभ्यास किया था - सांस लेना, गति, पानी। जब हम अस्पताल पहुंचे, तो मैं पहले से ही 6 सेमी फैली हुई थी। मेरे डॉक्टर ने मुस्कुराते हुए कहा, "तुम बहुत अच्छा कर रही हो।"',
        te: '39 వారాల్లో సహజంగా ప్రసవం ప్రారంభమైంది. సంకోచాలు తెలిసినవి అయినప్పటికీ గత సారికి భిన్నంగా ఉన్నాయి. నేను అభ్యసించిన అన్ని పద్ధతులను ఉపయోగించి - శ్వాస తీసుకోవడం, కదలిక, నీరు - వీలైనంత కాలం ఇంట్లో ప్రసవించాను. మేము ఆసుపత్రికి చేరుకున్నప్పుడు, నేను ఇప్పటికే 6 సెం.మీ విస్తరించాను. నా డాక్టర్ నవ్వుతూ, "మీరు చాలా బాగా చేస్తున్నారు" అన్నారు.'
      },
      {
        en: 'Eight hours later, I pushed my daughter into the world. The moment they placed her on my chest, I sobbed - not just from relief, but from a deep sense of healing. I had done it. My body had done it. The VBAC wasn\'t just about the birth method; it was about reclaiming trust in myself and my body\'s wisdom.',
        hi: 'आठ घंटे बाद, मैंने अपनी बेटी को दुनिया में धकेला। जिस क्षण उन्होंने उसे मेरी छाती पर रखा, मैं रो पड़ी - सिर्फ राहत से नहीं, बल्कि उपचार की गहरी भावना से। मैंने यह किया था। मेरे शरीर ने यह किया था। वीबीएसी सिर्फ जन्म विधि के बारे में नहीं था; यह खुद और मेरे शरीर की बुद्धि में विश्वास पुनः प्राप्त करने के बारे में था।',
        te: 'ఎనిమిది గంటల తర్వాత, నేను నా కూతురిని ప్రపంచంలోకి నెట్టాను. వారు ఆమెను నా ఛాతీపై ఉంచిన క్షణం, నేను ఏడ్చాను - కేవలం ఉపశమనం నుండి కాదు, కానీ వైద్యం యొక్క లోతైన భావన నుండి. నేను దీన్ని చేశాను. నా శరీరం దీన్ని చేసింది. VBAC కేవలం జననం పద్ధతి గురించి మాత్రమే కాదు; ఇది నాపై మరియు నా శరీర జ్ఞానంపై విశ్వాసాన్ని తిరిగి పొందడం గురించి.'
      }
    ]
  },
  {
    slug: 'rahul-iui-kochi',
    title: {
      en: 'Rahul & Asha — IUI path',
      hi: 'राहुल और आशा — आईयूआई पथ',
      te: 'రాహుల్ & ఆశా — IUI మార్గం'
    },
    city: {
      en: 'Kochi',
      hi: 'कोच्चि',
      te: 'కొచ్చి'
    },
    language: 'Malayalam',
    stage: 'ttc',
    treatment: 'IUI',
    summary: {
      en: 'Choosing step‑by‑step care.',
      hi: 'कदम-दर-कदम देखभाल चुनना।',
      te: 'దశలవారీ సంరక్షణను ఎంచుకోవడం.'
    },
    body: [
      {
        en: 'After a year of trying, our doctor suggested starting with IUI rather than jumping straight to IVF. My wife Asha and I appreciated the step-by-step approach. IUI felt less invasive, more affordable, and honestly, less scary than IVF. We decided to give it three tries.',
        hi: 'एक साल की कोशिश के बाद, हमारे डॉक्टर ने सीधे आईवीएफ पर जाने के बजाय आईयूआई से शुरू करने का सुझाव दिया। मेरी पत्नी आशा और मैंने कदम-दर-कदम दृष्टिकोण की सराहना की। आईयूआई कम आक्रामक, अधिक किफायती और ईमानदारी से, आईवीएफ से कम डरावना लगा। हमने इसे तीन बार आजमाने का फैसला किया।',
        te: 'ఒక సంవత్సరం ప్రయత్నించిన తర్వాత, మా డాక్టర్ నేరుగా IVFకి వెళ్లడం కంటే IUIతో ప్రారంభించమని సూచించారు. నా భార్య ఆశా మరియు నేను దశలవారీ విధానాన్ని అభినందించాము. IUI తక్కువ ఆక్రమణాత్మకంగా, మరింత సరసమైనదిగా మరియు నిజాయితీగా, IVF కంటే తక్కువ భయంకరంగా అనిపించింది. మేము దీన్ని మూడు సార్లు ప్రయత్నించాలని నిర్ణయించుకున్నాము.'
      },
      {
        en: 'The first cycle was a learning experience. Monitoring appointments every few days felt like our lives revolved around the clinic. The trigger shot timing was crucial - we set multiple alarms to not miss it. The IUI procedure itself was quick and painless, but the two-week wait afterward tested our patience.',
        hi: 'पहला चक्र एक सीखने का अनुभव था। हर कुछ दिनों में निगरानी अपॉइंटमेंट ऐसा लगा जैसे हमारी जिंदगी क्लिनिक के इर्द-गिर्द घूमती है। ट्रिगर शॉट टाइमिंग महत्वपूर्ण थी - हमने इसे मिस नहीं करने के लिए कई अलार्म सेट किए। आईयूआई प्रक्रिया तेज़ और दर्द रहित थी, लेकिन उसके बाद के दो सप्ताह के इंतजार ने हमारे धैर्य की परीक्षा ली।',
        te: 'మొదటి చక్రం నేర్చుకునే అనుభవం. ప్రతి కొన్ని రోజులకు పర్యవేక్షణ అపాయింట్‌మెంట్లు మా జీవితాలు క్లినిక్ చుట్టూ తిరుగుతున్నట్లు అనిపించింది. ట్రిగ్గర్ షాట్ టైమింగ్ కీలకం - మేము దానిని కోల్పోకుండా ఉండటానికి అనేక అలారాలు సెట్ చేసాము. IUI ప్రక్రియ స్వయంగా త్వరగా మరియు నొప్పిలేకుండా ఉంది, కానీ తర్వాత రెండు వారాల నిరీక్షణ మా ఓపికను పరీక్షించింది.'
      },
      {
        en: 'First cycle: negative. We were disappointed but not devastated. Our doctor reviewed everything and made small adjustments to Asha\'s medication. Second cycle: negative again. This one hit harder. We took a month break to regroup emotionally and financially. During that break, we talked about our limits and made peace with whatever would come.',
        hi: 'पहला चक्र: नकारात्मक। हम निराश थे लेकिन तबाह नहीं हुए। हमारे डॉक्टर ने सब कुछ देखा और आशा की दवा में छोटे समायोजन किए। दूसरा चक्र: फिर से नकारात्मक। यह अधिक कठिन लगा। हमने भावनात्मक और आर्थिक रूप से फिर से इकट्ठा होने के लिए एक महीने का ब्रेक लिया। उस ब्रेक के दौरान, हमने अपनी सीमाओं के बारे में बात की और जो भी आएगा उसके साथ शांति बनाई।',
        te: 'మొదటి చక్రం: ప్రతికూలం. మేము నిరాశకు గురయ్యాము కానీ విధ్వంసం కాలేదు. మా డాక్టర్ అన్నీ సమీక్షించారు మరియు ఆశా మందులో చిన్న సర్దుబాట్లు చేశారు. రెండవ చక్రం: మళ్ళీ ప్రతికూలం. ఇది మరింత బాధించింది. మేము భావోద్వేగాత్మకంగా మరియు ఆర్థికంగా తిరిగి సమూహపరచడానికి ఒక నెల విరామం తీసుకున్నాము. ఆ విరామంలో, మేము మా పరిమితుల గురించి మాట్లాడాము మరియు ఏది వచ్చినా దానితో శాంతిని కలిగి ఉన్నాము.'
      },
      {
        en: 'Third cycle felt different from the start. Maybe it was our more relaxed attitude, or maybe just luck. Asha\'s follicle development looked perfect. The timing aligned beautifully. Two weeks later, the pregnancy test showed two lines. We stared at it in disbelief, then hugged and cried. IUI had worked for us.',
        hi: 'तीसरा चक्र शुरू से ही अलग लगा। शायद यह हमारा अधिक आराम का रवैया था, या शायद सिर्फ किस्मत। आशा के फॉलिकल विकास एकदम सही लग रहा था। समय खूबसूरती से संरेखित था। दो सप्ताह बाद, गर्भावस्था परीक्षण ने दो रेखाएं दिखाईं। हमने अविश्वास में इसे देखा, फिर गले लगाए और रोए। आईयूआई हमारे लिए काम कर गई।',
        te: 'మూడవ చక్రం ప్రారంభం నుండి భిన్నంగా అనిపించింది. బహుశా అది మా మరింత రిలాక్స్డ్ వైఖరి, లేదా బహుశా కేవలం అదృష్టం. ఆశా ఫోలికల్ అభివృద్ధి ఖచ్చితంగా కనిపించింది. టైమింగ్ అందంగా సమలేఖనం చేయబడింది. రెండు వారాల తర్వాత, గర్భధారణ పరీక్ష రెండు రేఖలను చూపించింది. మేము అవిశ్వాసంతో దానిని చూశాము, తర్వాత కౌగిలించుకుని ఏడ్చాము. IUI మాకు పని చేసింది.'
      },
      {
        en: 'Looking back, I\'m grateful we started with IUI. It taught us about the fertility treatment process without the intensity of IVF. We learned to navigate clinic schedules, manage medications, and handle disappointment together. These skills would have been valuable even if we had needed to move to IVF. Sometimes the gentler path is the right path.',
        hi: 'पीछे मुड़कर देखता हूं, तो मैं आभारी हूं कि हमने आईयूआई से शुरुआत की। इसने हमें आईवीएफ की तीव्रता के बिना प्रजनन उपचार प्रक्रिया के बारे में सिखाया। हमने क्लिनिक शेड्यूल को नेविगेट करना, दवाओं का प्रबंधन करना, और एक साथ निराशा को संभालना सीखा। ये कौशल मूल्यवान होते, भले ही हमें आईवीएफ की ओर बढ़ना पड़ता। कभी-कभी कोमल रास्ता सही रास्ता होता है।',
        te: 'వెనక్కి తిరిగి చూస్తే, మేము IUIతో ప్రారంభించినందుకు నేను కృతజ్ఞుడను. ఇది IVF యొక్క తీవ్రత లేకుండా ఫెర్టిలిటీ చికిత్స ప్రక్రియ గురించి మాకు నేర్పించింది. మేము క్లినిక్ షెడ్యూల్స్‌ను నావిగేట్ చేయడం, మందులను నిర్వహించడం మరియు నిరాశను కలిసి నిర్వహించడం నేర్చుకున్నాము. మేము IVFకు వెళ్లవలసి వచ్చినా ఈ నైపుణ్యాలు విలువైనవి. కొన్నిసార్లు సున్నితమైన మార్గం సరైన మార్గం.'
      }
    ]
  },
  {
    slug: 'sana-postpartum-bengaluru',
    title: {
      en: 'Sana — postpartum blues to support',
      hi: 'सना — प्रसवोत्तर उदासी से समर्थन तक',
      te: 'సనా — ప్రసవానంతర నీరసం నుండి మద్దతు వరకు'
    },
    city: {
      en: 'Bengaluru',
      hi: 'बेंगलुरु',
      te: 'బెంగళూరు'
    },
    language: 'Urdu',
    stage: 'postpartum',
    summary: {
      en: 'Finding help early.',
      hi: 'जल्दी मदद ढूँढना।',
      te: 'ముందుగానే సహాయం కనుగొనడం.'
    },
    body: [
      {
        en: 'Everyone said becoming a mother would be the happiest time of my life. But two weeks after giving birth, I felt empty, anxious, and overwhelmed. I loved my baby, but I couldn\'t stop crying. I couldn\'t sleep even when she slept. Something was very wrong, but I was too ashamed to admit it.',
        hi: 'सबने कहा कि मां बनना मेरे जीवन का सबसे खुशी का समय होगा। लेकिन जन्म देने के दो हफ्ते बाद, मैं खाली, चिंतित और अभिभूत महसूस कर रही थी। मैं अपने बच्चे से प्यार करती थी, लेकिन मैं रोना बंद नहीं कर सकती थी। जब वह सोती थी तब भी मैं सो नहीं पाती थी। कुछ बहुत गलत था, लेकिन मैं इसे स्वीकार करने में बहुत शर्मिंदा थी।',
        te: 'తల్లి కావడం నా జీవితంలో అత్యంత సంతోషకరమైన సమయం అవుతుందని అందరూ చెప్పారు. కానీ ప్రసవించిన రెండు వారాల తర్వాత, నేను ఖాళీగా, ఆందోళనగా మరియు అధికంగా అనిపించాను. నేను నా బిడ్డను ప్రేమిస్తున్నాను, కానీ నేను ఏడవడం ఆపలేకపోయాను. ఆమె నిద్రపోయినప్పుడు కూడా నేను నిద్రపోలేకపోయాను. ఏదో చాలా తప్పు, కానీ దానిని అంగీకరించడానికి నాకు చాలా సిగ్గు వచ్చింది.'
      },
      {
        en: 'My mother-in-law noticed first. She sat with me one afternoon and gently asked if I was okay. I broke down completely. She didn\'t judge or tell me to "be grateful" or "snap out of it." She just listened and then suggested we call my doctor. That phone call saved me.',
        hi: 'मेरी सास ने पहले देखा। वह एक दोपहर मेरे साथ बैठी और धीरे से पूछा कि क्या मैं ठीक हूं। मैं पूरी तरह टूट गई। उसने मुझे आंका नहीं या "आभारी रहो" या "इससे बाहर निकलो" नहीं कहा। उसने बस सुना और फिर सुझाव दिया कि हम मेरे डॉक्टर को फोन करें। उस फोन कॉल ने मुझे बचाया।',
        te: 'నా అత్తగారు మొదట గమనించారు. ఆమె ఒక మధ్యాహ్నం నాతో కూర్చుని సున్నితంగా నేను బాగున్నానా అని అడిగింది. నేను పూర్తిగా విరిగిపోయాను. ఆమె తీర్పు చెప్పలేదు లేదా "కృతజ్ఞతతో ఉండు" లేదా "దాని నుండి బయటపడు" అని చెప్పలేదు. ఆమె వినింది మరియు తర్వాత నా డాక్టర్‌కు కాల్ చేయమని సూచించింది. ఆ ఫోన్ కాల్ నన్ను రక్షించింది.'
      },
      {
        en: 'My doctor screened me for postpartum depression and the results confirmed it. She explained it wasn\'t my fault - hormonal changes, sleep deprivation, and life adjustments all contributed. She prescribed medication and referred me to a therapist. I was scared of the stigma, but I was more scared of continuing to suffer.',
        hi: 'मेरे डॉक्टर ने मुझे प्रसवोत्तर अवसाद के लिए जांचा और परिणामों ने इसकी पुष्टि की। उसने समझाया कि यह मेरी गलती नहीं थी - हार्मोनल परिवर्तन, नींद की कमी, और जीवन समायोजन सभी ने योगदान दिया। उसने दवा निर्धारित की और मुझे एक चिकित्सक के पास भेजा। मैं कलंक से डरी हुई थी, लेकिन मैं पीड़ित रहने से अधिक डरी हुई थी।',
        te: 'నా డాక్టర్ ప్రసవానంతర నిరాశ కోసం నన్ను పరీక్షించారు మరియు ఫలితాలు దానిని నిర్ధారించాయి. ఇది నా తప్పు కాదని ఆమె వివరించింది - హార్మోన్ల మార్పులు, నిద్ర లోపం మరియు జీవిత సర్దుబాట్లు అన్నీ దోహదపడ్డాయి. ఆమె మందు సూచించింది మరియు నన్ను థెరపిస్ట్‌కు రిఫర్ చేసింది. నేను కళంకానికి భయపడుతున్నాను, కానీ నేను బాధపడటం కొనసాగించడానికి మరింత భయపడుతున్నాను.'
      },
      {
        en: 'Therapy helped me understand my thoughts and develop coping strategies. The medication took a few weeks to work, but gradually the fog lifted. I joined a support group for new mothers, and hearing other women\'s experiences made me feel less alone. They understood in ways my family couldn\'t.',
        hi: 'थेरेपी ने मुझे अपने विचारों को समझने और सामना करने की रणनीतियां विकसित करने में मदद की। दवा को काम करने में कुछ हफ्ते लगे, लेकिन धीरे-धीरे कोहरा हट गया। मैं नई माताओं के लिए एक सहायता समूह में शामिल हुई, और अन्य महिलाओं के अनुभवों को सुनकर मुझे कम अकेला महसूस हुआ। वे उन तरीकों से समझ गईं जिनसे मेरा परिवार नहीं समझ सकता था।',
        te: 'థెరపీ నా ఆలోచనలను అర్థం చేసుకోవడానికి మరియు ఎదుర్కొనే వ్యూహాలను అభివృద్ధి చేయడంలో సహాయపడింది. మందు పని చేయడానికి కొన్ని వారాలు పట్టింది, కానీ క్రమంగా పొగమంచు తొలగిపోయింది. నేను కొత్త తల్లుల కోసం మద్దతు సమూహంలో చేరాను, మరియు ఇతర మహిళల అనుభవాలను వినడం నాకు తక్కువ ఒంటరిగా అనిపించింది. నా కుటుంబం అర్థం చేసుకోలేని విధంగా వారు అర్థం చేసుకున్నారు.'
      },
      {
        en: 'Recovery wasn\'t linear. Some days were better than others. But slowly, I started enjoying moments with my daughter again - her first smile, her tiny fingers wrapped around mine. Six months later, I felt like myself again, though changed. I now openly talk about my PPD experience because silence helps no one. Getting help early was the best decision I made.',
        hi: 'रिकवरी रैखिक नहीं थी। कुछ दिन दूसरों से बेहतर थे। लेकिन धीरे-धीरे, मैंने अपनी बेटी के साथ फिर से पलों का आनंद लेना शुरू किया - उसकी पहली मुस्कान, उसकी छोटी उंगलियां मेरे चारों ओर लिपटी हुई। छह महीने बाद, मैं फिर से खुद जैसा महसूस करने लगी, हालांकि बदली हुई। मैं अब अपने पीपीडी अनुभव के बारे में खुलकर बात करती हूं क्योंकि चुप्पी किसी की मदद नहीं करती। जल्दी मदद लेना मेरा सबसे अच्छा निर्णय था।',
        te: 'రికవరీ లీనియర్ కాదు. కొన్ని రోజులు ఇతరుల కంటే మెరుగ్గా ఉన్నాయి. కానీ నెమ్మదిగా, నేను నా కూతురితో మళ్ళీ క్షణాలను ఆస్వాదించడం ప్రారంభించాను - ఆమె మొదటి చిరునవ్వు, నా చుట్టూ చుట్టబడిన ఆమె చిన్న వేళ్లు. ఆరు నెలల తర్వాత, నేను మళ్ళీ నాలా అనిపించింది, అయితే మార్చబడింది. నేను ఇప్పుడు నా PPD అనుభవం గురించి బహిరంగంగా మాట్లాడుతాను ఎందుకంటే నిశ్శబ్దం ఎవరికీ సహాయం చేయదు. త్వరగా సహాయం పొందడం నేను తీసుకున్న ఉత్తమ నిర్ణయం.'
      }
    ]
  },
  {
    slug: 'naveen-preserve-jaipur',
    title: {
      en: 'Naveen — preservation before therapy',
      hi: 'नवीन — थेरेपी से पहले संरक्षण',
      te: 'నవీన్ — చికిత్సకు ముందు సంరక్షణ'
    },
    city: {
      en: 'Jaipur',
      hi: 'जयपुर',
      te: 'జైపూర్'
    },
    language: 'Hindi',
    stage: 'pre‑treatment',
    summary: {
      en: 'Freezing with clarity.',
      hi: 'स्पष्टता के साथ फ्रीजिंग।',
      te: 'స్పష్టతతో స్తంభింపజేయడం.'
    },
    body: [
      {
        en: 'At 28, hearing "testicular cancer" felt surreal. The oncologist was optimistic about treatment outcomes, but then mentioned something I hadn\'t considered: chemotherapy could affect my fertility. As a newly engaged man dreaming of fatherhood someday, this hit hard. He immediately referred me to a fertility specialist.',
        hi: '28 साल की उम्र में, "टेस्टिकुलर कैंसर" सुनना असली लगा। ऑन्कोलॉजिस्ट उपचार के परिणामों के बारे में आशावादी था, लेकिन फिर कुछ ऐसा उल्लेख किया जिस पर मैंने विचार नहीं किया था: कीमोथेरेपी मेरी प्रजनन क्षमता को प्रभावित कर सकती है। एक नवविवाहित आदमी के रूप में जो किसी दिन पितृत्व का सपना देख रहा था, यह कठिन लगा। उसने तुरंत मुझे एक प्रजनन विशेषज्ञ के पास भेजा।',
        te: '28 సంవత్సరాల వయస్సులో, "టెస్టిక్యులర్ క్యాన్సర్" వినడం అవాస్తవికంగా అనిపించింది. ఆంకాలజిస్ట్ చికిత్స ఫలితాల గురించి ఆశావాదంగా ఉన్నారు, కానీ తర్వాత నేను పరిగణించని విషయాన్ని ప్రస్తావించారు: కీమోథెరపీ నా ఫెర్టిలిటీని ప్రభావితం చేయవచ్చు. ఏదో రోజు తండ్రిగా ఉండాలని కలలు కనే కొత్త నిశ్చితార్థం చేసుకున్న వ్యక్తిగా, ఇది కష్టంగా తాకింది. అతను వెంటనే నన్ను ఫెర్టిలిటీ స్పెషలిస్ట్‌కి రిఫర్ చేశాడు.'
      },
      {
        en: 'Time was critical - I needed to start treatment soon. The fertility doctor explained sperm banking: a simple process where my sperm would be frozen before chemotherapy. It felt strange planning for a future family while dealing with cancer, but it also gave me something positive to focus on amid the fear.',
        hi: 'समय महत्वपूर्ण था - मुझे जल्द ही उपचार शुरू करने की आवश्यकता थी। प्रजनन डॉक्टर ने शुक्राणु बैंकिंग समझाया: एक सरल प्रक्रिया जहां कीमोथेरेपी से पहले मेरे शुक्राणु को फ्रीज किया जाएगा। कैंसर से निपटने के दौरान भविष्य के परिवार की योजना बनाना अजीब लगा, लेकिन इसने मुझे डर के बीच ध्यान केंद्रित करने के लिए कुछ सकारात्मक भी दिया।',
        te: 'సమయం కీలకం - నేను త్వరగా చికిత్స ప్రారంభించాలి. ఫెర్టిలిటీ డాక్టర్ స్పెర్మ్ బ్యాంకింగ్ వివరించారు: కీమోథెరపీకి ముందు నా స్పెర్మ్ స్తంభింపజేయబడే సాధారణ ప్రక్రియ. క్యాన్సర్‌తో వ్యవహరించేటప్పుడు భవిష్యత్ కుటుంబం కోసం ప్రణాళిక చేయడం విచిత్రంగా అనిపించింది, కానీ అది భయం మధ్య దృష్టి పెట్టడానికి నాకు సానుకూలమైన విషయాన్ని కూడా ఇచ్చింది.'
      },
      {
        en: 'I had to tell my fiancée. That conversation was one of the hardest of my life. I worried she\'d leave, that cancer and potential infertility were too much. But she held my hand and said, "We\'ll figure it out together, whatever happens." Her support meant everything. We went to the fertility clinic together.',
        hi: 'मुझे अपनी मंगेतर को बताना था। वह बातचीत मेरे जीवन की सबसे कठिन में से एक थी। मुझे चिंता थी कि वह चली जाएगी, कि कैंसर और संभावित बांझपन बहुत अधिक थे। लेकिन उसने मेरा हाथ पकड़ा और कहा, "हम इसे एक साथ समझेंगे, जो भी हो।" उसका समर्थन सब कुछ था। हम एक साथ प्रजनन क्लिनिक गए।',
        te: 'నేను నా కాబోయే భార్యకు చెప్పాలి. ఆ సంభాషణ నా జీవితంలో కష్టతరమైన వాటిలో ఒకటి. ఆమె వదిలి వెళ్తుందని, క్యాన్సర్ మరియు సంభావ్య వంధ్యత చాలా ఎక్కువ అని నేను ఆందోళన చెందాను. కానీ ఆమె నా చేయి పట్టుకుని, "ఏమి జరిగినా, మేము కలిసి దానిని గుర్తిస్తాము" అంది. ఆమె మద్దతు అంతా అర్థం చేసుకుంది. మేము కలిసి ఫెర్టిలిటీ క్లినిక్‌కి వెళ్ళాము.'
      },
      {
        en: 'The sperm banking process was straightforward. They collected multiple samples over a few days, tested quality, and froze them in liquid nitrogen. The lab technician explained they could remain viable for decades. Knowing my future family was safely stored helped me face chemotherapy with one less fear.',
        hi: 'शुक्राणु बैंकिंग प्रक्रिया सरल थी। उन्होंने कुछ दिनों में कई नमूने एकत्र किए, गुणवत्ता का परीक्षण किया, और उन्हें तरल नाइट्रोजन में फ्रीज किया। लैब तकनीशियन ने समझाया कि वे दशकों तक व्यवहार्य रह सकते हैं। मेरे भविष्य के परिवार को सुरक्षित रूप से संग्रहीत जानकर मुझे एक कम डर के साथ कीमोथेरेपी का सामना करने में मदद मिली।',
        te: 'స్పెర్మ్ బ్యాంకింగ్ ప్రక్రియ సరళంగా ఉంది. వారు కొన్ని రోజుల్లో అనేక నమూనాలను సేకరించారు, నాణ్యతను పరీక్షించారు మరియు వాటిని ద్రవ నైట్రోజన్‌లో స్తంభింపజేసారు. ల్యాబ్ టెక్నీషియన్ వారు దశాబ్దాలపాటు ఆచరణీయంగా ఉండవచ్చని వివరించారు. నా భవిష్యత్ కుటుంబం సురక్షితంగా నిల్వ చేయబడిందని తెలుసుకోవడం వల్ల ఒక తక్కువ భయంతో కీమోథెరపీని ఎదుర్కోవడంలో నాకు సహాయపడింది.'
      },
      {
        en: 'Two years later, I\'m cancer-free and married. We\'re not ready for children yet, but knowing we have options brings peace. The fertility preservation gave us control over one aspect of our future when cancer had taken control of so much. I share my story now to encourage other young cancer patients: preserve your fertility if you can. It\'s hope in a vial.',
        hi: 'दो साल बाद, मैं कैंसर मुक्त और शादीशुदा हूं। हम अभी बच्चों के लिए तैयार नहीं हैं, लेकिन यह जानकर कि हमारे पास विकल्प हैं, शांति मिलती है। प्रजनन संरक्षण ने हमें हमारे भविष्य के एक पहलू पर नियंत्रण दिया जब कैंसर ने बहुत कुछ पर नियंत्रण कर लिया था। मैं अब अपनी कहानी साझा करता हूं ताकि अन्य युवा कैंसर रोगियों को प्रोत्साहित किया जा सके: यदि आप कर सकते हैं तो अपनी प्रजनन क्षमता को संरक्षित करें। यह एक शीशी में आशा है।',
        te: 'రెండు సంవత్సరాల తర్వాత, నేను క్యాన్సర్ రహితంగా మరియు వివాహితుడిని. మేము ఇంకా పిల్లల కోసం సిద్ధంగా లేము, కానీ మాకు ఎంపికలు ఉన్నాయని తెలుసుకోవడం శాంతిని తెస్తుంది. క్యాన్సర్ చాలా నియంత్రణలో ఉన్నప్పుడు ఫెర్టిలిటీ ప్రిజర్వేషన్ మా భవిష్యత్ యొక్క ఒక అంశంపై నియంత్రణను ఇచ్చింది. ఇతర యువ క్యాన్సర్ రోగులను ప్రోత్సహించడానికి నేను ఇప్పుడు నా కథను పంచుకుంటాను: మీరు చేయగలిగితే మీ ఫెర్టిలిటీని సంరక్షించండి. ఇది ఒక సీసాలో ఆశ.'
      }
    ]
  }
];
