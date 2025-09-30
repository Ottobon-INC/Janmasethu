import { Link } from "wouter";
import { useEffect } from "react";
import {
  Heart,
  ArrowRight,
  Shield,
  Clock,
  Users,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ChatInterface from "@/components/ChatInterface";
import { useState, useRef, useEffect as useEffectReact } from "react";
import { detectScript } from "@/utils/language";
import { Globe, Send, RotateCcw, User, Bot } from "lucide-react";
import { Input } from "@/components/ui/input";

// Enhanced Chat Interface Component
const EnhancedChatInterface = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Array<{
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    language: string;
    previewContent?: any;
  }>>([]);
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [previewContent, setPreviewContent] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffectReact(() => {
    scrollToBottom();
  }, [messages]);

  const generatePreviewContent = (userMessage: string, language: string) => {
    const contentTemplates = {
      anxiety: {
        en: {
          title: "Managing Pre-Scan Anxiety",
          description: "Feeling anxious before medical appointments is completely normal during fertility journeys. Here are evidence-based techniques to help you cope.",
          tips: [
            "Practice 4-4-6 breathing: Inhale for 4 counts, hold for 4, exhale for 6",
            "Use progressive muscle relaxation starting from your toes",
            "Prepare questions in advance to feel more in control",
            "Bring a support person if possible"
          ],
          keyPoints: [
            "Anxiety is a normal response to uncertainty",
            "Breathing exercises activate your parasympathetic nervous system",
            "Preparation can reduce feelings of helplessness",
            "Your feelings are valid and acknowledged"
          ],
          resources: [
            { title: "Mindfulness Meditation Guide", description: "5-minute guided meditation for anxiety relief" },
            { title: "Questions to Ask Your Doctor", description: "Comprehensive list for fertility appointments" }
          ]
        },
        hi: {
          title: "स्कैन से पहले की चिंता का प्रबंधन",
          description: "चिकित्सा जांच से पहले चिंता महसूस करना प्रजनन यात्रा में बिल्कुल सामान्य है। यहाँ कुछ वैज्ञानिक तकनीकें हैं।",
          tips: [
            "4-4-6 सांस: 4 गिनती में सांस लें, 4 तक रोकें, 6 में छोड़ें",
            "पैर की अंगुलियों से शुरू करके प्रगतिशील मांसपेशी शिथिलता करें",
            "पहले से प्रश्न तैयार करें ताकि नियंत्रण महसूस हो",
            "यदि संभव हो तो सहारे वाले व्यक्ति को साथ लाएं"
          ],
          keyPoints: [
            "अनिश्चितता के लिए चिंता सामान्य प्रतिक्रिया है",
            "सांस की तकनीकें पैरासिम्पैथेटिक तंत्रिका तंत्र को सक्रिय करती हैं",
            "तैयारी से असहायता की भावना कम हो सकती है",
            "आपकी भावनाएं वैध हैं और स्वीकार की जाती हैं"
          ],
          resources: [
            { title: "माइंडफुलनेस मेडिटेशन गाइड", description: "चिंता राहत के लिए 5 मिनट का गाइडेड मेडिटेशन" },
            { title: "डॉक्टर से पूछने वाले प्रश्न", description: "प्रजनन अपॉइंटमेंट के लिए व्यापक सूची" }
          ]
        },
        te: {
          title: "స్కాన్ ముందు ఆత్రుత నిర్వహణ",
          description: "వైద్య పరీక్షల ముందు ఆందోళన అనుభవించడం ప్రసవ ప్రయాణంలో పూర్ణంగా సాధారణం. ఇక్కడ కొన్ని శాస్త్రీయ పద్ధతులు ఉన్నాయి.",
          tips: [
            "4-4-6 శ్వాస: 4 లెక్కలలో లోపల, 4 ఆపి, 6లో బయటకు",
            "కాలివేళ్ళ నుండి ప్రారంభించి క్రమంగా కండరాల సడలింపు చేయండి",
            "ముందుగానే ప్రశ్నలు సిద్ధం చేసుకోండి నియంత్రణ అనుభవించడానికి",
            "వీలైతే మద్దతిచ్చే వ్యక్తిని తీసుకురండి"
          ],
          keyPoints: [
            "అనిశ్చితికి ఆందోళన సాధారణ స్పందన",
            "శ్వాస వ్యాయామాలు పారాసింపథెటిక్ నరాల వ్యవస్థను సక్రియం చేస్తాయి",
            "సిద్ధత అసహాయత భావనలను తగ్గించగలదు",
            "మీ భావనలు చెల్లుబాటు అయ్యేవి మరియు గుర్తించబడుతున్నాయి"
          ],
          resources: [
            { title: "మైండ్‌ఫుల్‌నెస్ మెడిటేషన్ గైడ్", description: "ఆందోళన ఉపశమనం కోసం 5 నిమిషాల గైడెడ్ మెడిటేషన్" },
            { title: "వైద్యుడిని అడగవలసిన ప్రశ్నలు", description: "ప్రసవ అపాయింట్‌మెంట్‌ల కోసం సమగ్ర జాబితా" }
          ]
        }
      },
      wait: {
        en: {
          title: "Navigating the Two-Week Wait",
          description: "The two-week wait can be emotionally challenging. Here's how to manage this difficult period with self-compassion.",
          tips: [
            "Create daily routines to maintain structure",
            "Practice gentle activities like walking or reading",
            "Connect with trusted friends or support groups",
            "Limit excessive symptom-checking online"
          ],
          keyPoints: [
            "This waiting period tests patience in unique ways",
            "Routine helps manage uncertainty",
            "Community support provides emotional validation",
            "Self-care isn't selfish during this time"
          ],
          resources: [
            { title: "Two-Week Wait Self-Care Guide", description: "Daily activities and coping strategies" },
            { title: "Support Group Directory", description: "Find local and online fertility support groups" }
          ]
        },
        hi: {
          title: "दो सप्ताह की प्रतीक्षा का सामना",
          description: "दो सप्ताह की प्रतीक्षा भावनात्मक रूप से चुनौतीपूर्ण हो सकती है। इस कठिन अवधि को आत्म-करुणा के साथ कैसे संभालें।",
          tips: [
            "संरचना बनाए रखने के लिए दैनिक दिनचर्या बनाएं",
            "चलना या पढ़ना जैसी सौम्य गतिविधियां करें",
            "विश्वसनीय मित्रों या सहायता समूहों से जुड़ें",
            "ऑनलाइन अत्यधिक लक्षण-जांच को सीमित करें"
          ],
          keyPoints: [
            "यह प्रतीक्षा अवधि धैर्य को अनूठे तरीकों से परखती है",
            "दिनचर्या अनिश्चितता प्रबंधन में मदद करती है",
            "समुदायिक सहारा भावनात्मक मान्यता प्रदान करता है",
            "इस समय आत्म-देखभाल स्वार्थी नहीं है"
          ],
          resources: [
            { title: "दो सप्ताह प्रतीक्षा स्व-देखभाल गाइड", description: "दैनिक गतिविधियां और मुकाबला रणनीतियां" },
            { title: "सहायता समूह निर्देशिका", description: "स्थानीय और ऑनलाइन प्रजनन सहायता समूह खोजें" }
          ]
        },
        te: {
          title: "రెండు వారాల వేచిచూపును ఎదుర్కోవడం",
          description: "రెండు వారాల వేచిచూపు భావోద్వేగంగా సవాలుగా ఉంటుంది. ఈ కష్టమైన కాలాన్ని స్వీయ-కరుణతో ఎలా నిర్వహించాలి.",
          tips: [
            "నిర్మాణాన్ని కొనసాగించడానికి రోజువారీ దినచర్యలను సృష్టించండి",
            "నడక లేదా చదవడం వంటి సౌమ్య కార్యకలాపాలు చేయండి",
            "నమ్మకమైన స్నేహితులు లేదా మద్దతు గ్రూపులతో కనెక్ట్ అవండి",
            "ఆన్‌లైన్‌లో అధిక లక్షణ-తనిఖీని పరిమితం చేయండి"
          ],
          keyPoints: [
            "ఈ వేచిచూపు కాలం సహనాన్ని ప్రత్యేక మార్గాల్లో పరీక్షిస్తుంది",
            "దినచర్య అనిశ్చితత నిర్వహణలో సహాయపడుతుంది",
            "కమ్యూనిటీ మద్దతు భావోద్వేగ ధృవీకరణను అందిస్తుంది",
            "ఈ సమయంలో స్వీయ-సంరక్షణ స్వార్థం కాదు"
          ],
          resources: [
            { title: "రెండు వారాల వేచిచూపు స్వీయ-సంరక్షణ గైడ్", description: "రోజువారీ కార్యకలాపాలు మరియు సరిదిద్దడం వ్యూహాలు" },
            { title: "మద్దతు గ్రూప్ డైరెక్టరీ", description: "స్థానిక మరియు ఆన్‌లైన్ ప్రసవ మద్దతు గ్రూపులను కనుగొనండి" }
          ]
        }
      },
      partner: {
        en: {
          title: "Supporting Your Partner Through Diagnosis",
          description: "Partners often feel helpless when facing fertility challenges. Here's how to provide meaningful support while caring for yourself.",
          tips: [
            "Listen without trying to immediately solve problems",
            "Ask 'How can I support you today?' regularly",
            "Take care of your own emotional needs too",
            "Learn about the medical process together"
          ],
          keyPoints: [
            "Both partners are affected by fertility challenges",
            "Active listening is often more valuable than advice",
            "Supporting others requires self-care",
            "Shared understanding strengthens relationships"
          ],
          resources: [
            { title: "Partner Support Guide", description: "Communication strategies and emotional support techniques" },
            { title: "Couples Counseling Resources", description: "Finding specialized fertility counselors" }
          ]
        },
        hi: {
          title: "निदान के दौरान अपने साथी का समर्थन",
          description: "प्रजनन चुनौतियों का सामना करते समय साथी अक्सर असहाय महसूस करते हैं। अपनी देखभाल करते हुए अर्थपूर्ण सहारा कैसे दें।",
          tips: [
            "तुरंत समस्या सुलझाने की कोशिश किए बिना सुनें",
            "नियमित रूप से पूछें 'आज मैं आपका कैसे साथ दे सकता हूं?'",
            "अपनी भावनात्मक जरूरतों का भी ख्याल रखें",
            "चिकित्सा प्रक्रिया के बारे में साथ में सीखें"
          ],
          keyPoints: [
            "प्रजनन चुनौतियों से दोनों साथी प्रभावित होते हैं",
            "सक्रिय श्रवण अक्सर सलाह से अधिक मूल्यवान होता है",
            "दूसरों का समर्थन करने के लिए आत्म-देखभाल आवश्यक है",
            "साझा समझ रिश्तों को मजबूत बनाती है"
          ],
          resources: [
            { title: "साथी सहायता गाइड", description: "संचार रणनीतियां और भावनात्मक सहायता तकनीकें" },
            { title: "कपल काउंसलिंग संसाधन", description: "विशेषज्ञ प्रजनन सलाहकार खोजना" }
          ]
        },
        te: {
          title: "రోగ నిర్ధారణ సమయంలో మీ భాగస్వామికి మద్దతు",
          description: "ప్రసవ సవాళ్లను ఎదుర్కొంటున్నప్పుడు భాగస్వాములు తరచుగా నిస్సహాయంగా అనిపిస్తుంది. మిమ్మల్ని మీరు చూసుకుంటూ అర్థవంతమైన మద్దతు ఎలా అందించాలి.",
          tips: [
            "వెంటనే సమస్యలను పరిష్కరించడానికి ప్రయత్నించకుండా వినండి",
            "నియమితంగా 'ఈరోజు నేను మీకు ఎలా మద్దతు ఇవ్వగలను?' అని అడగండి",
            "మీ స్వంత భావోద్వేగ అవసరాలను కూడా చూసుకోండి",
            "వైద్య ప్రక్రియ గురించి కలిసి తెలుసుకోండి"
          ],
          keyPoints: [
            "ప్రసవ సవాళ్లు రెండు భాగస్వాములను ప్రభావితం చేస్తాయి",
            "చురుకైన వినికిడి తరచుగా సలహా కంటే విలువైనది",
            "ఇతరులకు మద్దతు ఇవ్వడానికి స్వీయ-సంరక్షణ అవసరం",
            "భాగస్వామ్య అవగాహన సంబంధాలను బలపరుస్తుంది"
          ],
          resources: [
            { title: "భాగస్వామి మద్దతు గైడ్", description: "కమ్యూనికేషన్ వ్యూహాలు మరియు భావోద్వేగ మద్దతు సాంకేతికతలు" },
            { title: "జంటల కౌన్సెలింగ్ వనరులు", description: "ప్రత్యేక ప్రసవ కౌన్సెలర్లను కనుగొనడం" }
          ]
        }
      }
    };

    const message = userMessage.toLowerCase();
    let category = 'anxiety';

    if (message.includes('wait') || message.includes('waiting') || message.includes('two week') || 
        message.includes('प्रतीक्षा') || message.includes('इंतज़ार') || 
        message.includes('వేచిచూపు') || message.includes('వేచి')) {
      category = 'wait';
    } else if (message.includes('partner') || message.includes('husband') || message.includes('wife') ||
               message.includes('साथी') || message.includes('पति') || message.includes('पत्नी') ||
               message.includes('భాగస్వామి') || message.includes('భర్త') || message.includes('భార్య')) {
      category = 'partner';
    }

    return contentTemplates[category as keyof typeof contentTemplates][language as keyof typeof contentTemplates.anxiety] || contentTemplates.anxiety.en;
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const detectedLanguage = detectScript(inputText);
    const userMessage = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date(),
      language: detectedLanguage
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate preview content based on the message
    const preview = generatePreviewContent(inputText, detectedLanguage);
    setPreviewContent(preview);

    // Simulate Sakhi's response
    setTimeout(() => {
      const responses = {
        en: "I understand your feelings, and they're completely valid. Let me share some strategies that might help you through this.",
        hi: "मैं आपकी भावनाओं को समझती हूं, और वे पूर्णतः वैध हैं। मैं कुछ रणनीतियां साझा करती हूं जो इस दौरान आपकी मदद कर सकती हैं।",
        te: "నేను మీ భావనలను అర్థం చేసుకుంటున్నాను, మరియు అవి పూర్ణంగా చెల్లుబాటు అయ్యేవి. ఈ సమయంలో మీకు సహాయపడే కొన్ని వ్యూహాలను పంచుకుంటాను."
      };

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: responses[detectedLanguage as keyof typeof responses] || responses.en,
        isUser: false,
        timestamp: new Date(),
        language: detectedLanguage,
        previewContent: preview
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const clearChat = () => {
    setMessages([]);
    setPreviewContent(null);
  };

  const quickPrompts = [
    { en: "I'm feeling anxious about tomorrow's scan", hi: "कल के स्कैन को लेकर चिंतित हूं", te: "రేపటి స్కాన్ గురించి ఆందోళన అనిపిస్తోంది" },
    { en: "The two-week wait is driving me crazy", hi: "दो सप्ताह का इंतज़ार मुझे परेशान कर रहा है", te: "రెండు వారాల వేచిచూపు నన్ను వేధిస్తోంది" },
    { en: "How can I support my partner through this?", hi: "इसमें अपने साथी का समर्थन कैसे करूं?", te: "దీనిలో నా భాగస్వామికి ఎలా మద్దతు ఇవ్వాలి?" }
  ];

  const currentPrompts = quickPrompts.map(p => p[selectedLanguage as keyof typeof p]);

  return (
    <div className="space-y-6">
      {/* Chat Interface */}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-bold text-foreground flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-500" />
                {t('chat_title')}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {t('chat_hint')}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Language Selector */}
              <div className="flex items-center space-x-1 bg-muted rounded-lg px-3 py-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <select 
                  value={selectedLanguage} 
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="border-none bg-transparent text-sm focus:ring-0 focus:outline-none cursor-pointer"
                >
                  <option value="en">EN</option>
                  <option value="hi">हि</option>
                  <option value="te">తె</option>
                </select>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <Heart className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                <p className="mb-4">Start a conversation with Sakhi...</p>
                <p className="text-xs">Try asking in any language - English, Hindi, or Telugu</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs ${message.isUser ? 'order-2' : 'order-1'}`}>
                    <div className={`flex items-start space-x-2 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isUser ? 'bg-purple-500 text-white' : 'bg-pink-100 text-pink-600'
                      }`}>
                        {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      <div className={`px-4 py-2 rounded-2xl ${
                        message.isUser
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-foreground opacity-70' : 'text-muted-foreground'}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="border-t border-border p-4">
            <p className="text-sm font-medium text-foreground mb-3">
              {t('chat_quick')}:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputText(prompt)}
                  className="text-xs rounded-full"
                >
                  {prompt}
                </Button>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button
                onClick={sendMessage}
                className="gradient-button text-white rounded-full hover:shadow-lg transition-all duration-300"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-2">
              {t('chat_privacy')}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Dynamic Content Cards */}
      {previewContent && (
        <div className="space-y-4">
          {/* Title and Description */}
          <Card className="rounded-3xl p-6 card-shadow bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
            <CardContent className="p-0">
              <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-pink-500" />
                {previewContent.title}
              </h4>
              <p className="text-sm text-purple-700 leading-relaxed">{previewContent.description}</p>
            </CardContent>
          </Card>

          {/* Practical Tips */}
          <Card className="rounded-3xl p-6 card-shadow bg-green-50 border border-green-200">
            <CardContent className="p-0">
              <h5 className="font-semibold text-green-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Practical Tips
              </h5>
              <div className="space-y-2">
                {previewContent.tips.map((tip: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-green-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Points */}
          <Card className="rounded-3xl p-6 card-shadow bg-blue-50 border border-blue-200">
            <CardContent className="p-0">
              <h5 className="font-semibold text-blue-800 mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                Key Points to Remember
              </h5>
              <div className="space-y-2">
                {previewContent.keyPoints.map((point: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-blue-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="rounded-3xl p-6 card-shadow bg-orange-50 border border-orange-200">
            <CardContent className="p-0">
              <h5 className="font-semibold text-orange-800 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-orange-600" />
                Helpful Resources
              </h5>
              <div className="space-y-2">
                {previewContent.resources.map((resource: any, idx: number) => (
                  <div key={idx} className="p-3 bg-white border border-orange-200 rounded-lg">
                    <p className="font-medium text-orange-800 text-sm">{resource.title}</p>
                    <p className="text-xs text-orange-700 mt-1">{resource.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

const Sakhi = () => {
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sakhiFeatures = [
    {
      icon: Heart,
      title: "sakhi_feature_emotional_title",
      description:
        "sakhi_feature_emotional_desc",
      color: "text-pink-600",
    },
    {
      icon: Clock,
      title: "sakhi_feature_247_title",
      description: "sakhi_feature_247_desc",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "sakhi_feature_private_title",
      description: "sakhi_feature_private_desc",
      color: "text-green-600",
    },
    {
      icon: Users,
      title: "sakhi_feature_partner_title",
      description: "sakhi_feature_partner_desc",
      color: "text-purple-600",
    },
    {
      icon: MessageCircle,
      title: "sakhi_feature_multilang_title",
      description: "sakhi_feature_multilang_desc",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <section className="text-center py-12 relative">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-serif mb-6 leading-tight"
            data-testid="text-sakhi-hero-title"
            dangerouslySetInnerHTML={{ __html: t("sakhi_hero") }}
          ></h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            data-testid="text-sakhi-hero-subtitle"
          >
            {t("sakhi_sub")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/sakhi/try">
              <Button
                className="gradient-button text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center"
                data-testid="button-try-sakhi-hero"
              >
                {t("sakhi_try")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/knowledge">
              <Button
                variant="outline"
                className="bg-white text-foreground px-8 py-4 rounded-full font-semibold text-lg border-border hover:shadow-lg transition-all duration-300"
                data-testid="button-browse-knowledge"
              >
                {t("sakhi_browse_knowledge")}
              </Button>
            </Link>
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt={t('alt_peaceful_meditation')}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* How Sakhi Helps */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-foreground font-serif mb-4"
            data-testid="text-sakhi-how-title"
          >
            {t("sakhi_how_title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("sakhi_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sakhiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="rounded-3xl p-6 card-shadow hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col"
                data-testid={`card-sakhi-feature-${index}`}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <Icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
                  <h3
                    className="text-lg font-bold text-foreground font-serif mb-2"
                    data-testid={`text-feature-title-${index}`}
                  >
                    {t(feature.title)}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground flex-grow"
                    data-testid={`text-feature-description-${index}`}
                  >
                    {t(feature.description)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Help List */}
        <Card className="rounded-3xl p-8 card-shadow">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold text-foreground font-serif mb-6 text-center">
              {t("sakhi_specific_ways")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t("sakhi_how_list")
                .split("|")
                .map((item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                    data-testid={`item-sakhi-help-${index}`}
                  >
                    <Heart className="text-pink-500 w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.trim()}</span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-6"
            data-testid="text-sakhi-try-title"
          >
            {t("sakhi_try_demo_title")}
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-sakhi-try-subtitle"
          >
            {t("sakhi_try_demo_subtitle")}
          </p>
        </div>

        {/* Privacy Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card
            className="rounded-3xl p-4 card-shadow text-center h-full flex flex-col"
            data-testid="card-privacy-feature-0"
          >
            <CardContent className="p-0 flex flex-col h-full justify-center">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3
                className="font-bold text-foreground mb-1"
                data-testid="text-privacy-title-0"
              >
                {t("sakhi_private_local")}
              </h3>
              <p
                className="text-sm text-muted-foreground"
                data-testid="text-privacy-description-0"
              >
                {t("sakhi_private_local_desc")}
              </p>
            </CardContent>
          </Card>
          <Card
            className="rounded-3xl p-4 card-shadow text-center h-full flex flex-col"
            data-testid="card-privacy-feature-1"
          >
            <CardContent className="p-0 flex flex-col h-full justify-center">
              <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3
                className="font-bold text-foreground mb-1"
                data-testid="text-privacy-title-1"
              >
                {t("sakhi_multilang_short")}
              </h3>
              <p
                className="text-sm text-muted-foreground"
                data-testid="text-privacy-description-1"
              >
                {t("sakhi_multilang_short_desc")}
              </p>
            </CardContent>
          </Card>
          <Card
            className="rounded-3xl p-4 card-shadow text-center h-full flex flex-col"
            data-testid="card-privacy-feature-2"
          >
            <CardContent className="p-0 flex flex-col h-full justify-center">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3
                className="font-bold text-foreground mb-1"
                data-testid="text-privacy-title-2"
              >
                {t("sakhi_247_available")}
              </h3>
              <p
                className="text-sm text-muted-foreground"
                data-testid="text-privacy-description-2"
              >
                {t("sakhi_247_available_desc")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Chat Interface */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <EnhancedChatInterface />
          </div>

          {/* Sidebar with Quick Scenarios */}
          <div className="space-y-4">
            <Card className="rounded-3xl p-6 card-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground font-serif flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-pink-500" />
                  {t("sakhi_scenarios_title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div
                    className="p-3 rounded-xl border border-border hover:bg-muted transition-colors"
                    data-testid="scenario-0"
                  >
                    <h4
                      className="font-semibold text-foreground text-sm mb-1"
                      data-testid="text-scenario-title-0"
                    >
                      {t("sakhi_scenario_anxiety_title")}
                    </h4>
                    <p
                      className="text-xs text-muted-foreground mb-2"
                      data-testid="text-scenario-description-0"
                    >
                      {t("sakhi_scenario_anxiety_desc")}
                    </p>
                    <p
                      className="text-xs text-primary font-medium italic"
                      data-testid="text-scenario-prompt-0"
                    >
                      "{t("chat_p1")}"
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-xl border border-border hover:bg-muted transition-colors"
                    data-testid="scenario-1"
                  >
                    <h4
                      className="font-semibold text-foreground text-sm mb-1"
                      data-testid="text-scenario-title-1"
                    >
                      {t("sakhi_scenario_wait_title")}
                    </h4>
                    <p
                      className="text-xs text-muted-foreground mb-2"
                      data-testid="text-scenario-description-1"
                    >
                      {t("sakhi_scenario_wait_desc")}
                    </p>
                    <p
                      className="text-xs text-primary font-medium italic"
                      data-testid="text-scenario-prompt-1"
                    >
                      "{t("chat_p2")}"
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-xl border border-border hover:bg-muted transition-colors"
                    data-testid="scenario-2"
                  >
                    <h4
                      className="font-semibold text-foreground text-sm mb-1"
                      data-testid="text-scenario-title-2"
                    >
                      {t("sakhi_scenario_partner_title")}
                    </h4>
                    <p
                      className="text-xs text-muted-foreground mb-2"
                      data-testid="text-scenario-description-2"
                    >
                      {t("sakhi_scenario_partner_desc")}
                    </p>
                    <p
                      className="text-xs text-primary font-medium italic"
                      data-testid="text-scenario-prompt-2"
                    >
                      "{t("chat_p3")}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl p-6 card-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground font-serif">
                  {t("sakhi_how_it_works")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("sakhi_step1")}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("sakhi_step2")}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("sakhi_step3")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>

        {/* Important Disclaimer */}
        <Card className="rounded-3xl p-6 card-shadow bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
          <CardContent className="p-0 text-center">
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground font-serif mb-4">
              {t("sakhi_help_notice_title")}
            </h3>
            <div className="max-w-3xl mx-auto text-muted-foreground space-y-3">
              <p>
                {t("sakhi_help_notice_desc")}
              </p>
              <p className="font-medium text-foreground">
                {t("sakhi_help_contact")}
              </p>
              <ul className="text-left max-w-xl mx-auto space-y-1">
                <li>• Thoughts of self-harm or suicide</li>
                <li>
                  • Severe depression or anxiety that interferes with daily life
                </li>
                <li>• Panic attacks or overwhelming distress</li>
                <li>• Any medical symptoms or concerns</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Continue Exploring */}
        <div className="bg-white rounded-3xl p-6 card-shadow text-center mt-8">
          <h2 className="text-2xl font-bold text-foreground font-serif mb-4">
            {t("sakhi_continue_journey")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("sakhi_continue_desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/knowledge">
              <Button
                className="gradient-button text-white px-8 py-4 rounded-full font-semibold"
                data-testid="button-explore-knowledge"
              >
                {t("sakhi_explore_knowledge")}
              </Button>
            </Link>
            <Link href="/treatments">
              <Button
                variant="outline"
                className="px-8 py-4 rounded-full font-semibold"
                data-testid="button-learn-treatments"
              >
                {t("sakhi_learn_treatments")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Sakhi;
