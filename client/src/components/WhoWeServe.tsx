
import { useState, useEffect } from "react";
import { UserIcon, Building2Icon, Baby, Heart, Users, Stethoscope } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

interface WhoWeServeData {
  [key: string]: {
    title: string;
    description: string;
    cards: {
      parents: {
        title: string;
        description: string;
        details: {
          title: string;
          description: string;
          features: string[];
          cta: string;
        };
      };
      clinics: {
        title: string;
        description: string;
        details: {
          title: string;
          description: string;
          features: string[];
          cta: string;
        };
      };
    };
  };
}

type Language = "en" | "hi" | "te";
type CardType = "parents" | "clinics";

const WhoWeServe = () => {
  const [data, setData] = useState<WhoWeServeData | null>(null);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use the global language context
  const { lang, t } = useLanguage();

  // Load data
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/locales/whoWeServe.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Failed to load Who We Serve data:", error);
      }
    };

    loadData();
  }, []);

  // Handle card click
  const handleCardClick = (cardType: CardType) => {
    setSelectedCard(cardType);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  if (!data) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    );
  }

  const currentData = data[lang];
  if (!currentData) {
    return null;
  }

  const getCardIcon = (cardType: CardType) => {
    switch (cardType) {
      case "parents":
        return <Baby className="w-8 h-8 text-purple-600" />;
      case "clinics":
        return <Stethoscope className="w-8 h-8 text-blue-600" />;
      default:
        return <Heart className="w-8 h-8 text-pink-600" />;
    }
  };

  const getCardBgColor = (cardType: CardType) => {
    switch (cardType) {
      case "parents":
        return "bg-gradient-to-br from-purple-50 to-purple-100/50";
      case "clinics":
        return "bg-gradient-to-br from-blue-50 to-blue-100/50";
      default:
        return "bg-gradient-to-br from-pink-50 to-pink-100/50";
    }
  };

  const getIconBgColor = (cardType: CardType) => {
    switch (cardType) {
      case "parents":
        return "bg-purple-100";
      case "clinics":
        return "bg-blue-100";
      default:
        return "bg-pink-100";
    }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentData.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentData.description}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(currentData.cards).map(([key, card]) => {
              const cardType = key as CardType;
              return (
                <div
                  key={cardType}
                  onClick={() => handleCardClick(cardType)}
                  className={`${getCardBgColor(cardType)} rounded-2xl p-8 cursor-pointer 
                    transition-all duration-300 hover:scale-105 hover:shadow-xl 
                    border border-white/50 backdrop-blur-sm group`}
                >
                  {/* Icon */}
                  <div className={`${getIconBgColor(cardType)} w-16 h-16 rounded-2xl 
                    flex items-center justify-center mb-6 group-hover:scale-110 
                    transition-transform duration-300`}>
                    {getCardIcon(cardType)}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 text-gray-400 group-hover:text-gray-600 
                    transition-colors duration-300">
                    <span className="text-sm font-medium">
                      {lang === 'hi' ? 'और जानें' : lang === 'te' ? 'మరింత తెలుసుకోండి' : 'Learn more'} →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className={`${getIconBgColor(selectedCard)} w-12 h-12 rounded-xl 
                    flex items-center justify-center`}>
                    {getCardIcon(selectedCard)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentData.cards[selectedCard].details.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {currentData.cards[selectedCard].details.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {currentData.cards[selectedCard].details.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 
                      rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 
                  hover:from-purple-700 hover:to-pink-700 text-white font-semibold 
                  py-4 px-6 rounded-xl transition-all duration-300 
                  transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {currentData.cards[selectedCard].details.cta}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhoWeServe;
