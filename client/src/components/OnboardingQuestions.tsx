
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

interface OnboardingQuestionsProps {
  open: boolean;
  onClose: () => void;
}

export default function OnboardingQuestions({ open, onClose }: OnboardingQuestionsProps) {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    age: "",
    tryingDuration: "",
    previousTreatments: "",
    diagnosedConditions: "",
    partnerAge: "",
    partnerAgeNA: false,
    previousPregnancy: "",
    priority: "",
  });

  const questions = [
    {
      id: 1,
      question: "What is your age?",
      type: "number",
      field: "age",
    },
    {
      id: 2,
      question: "How long have you been actively trying to conceive?",
      type: "radio",
      field: "tryingDuration",
      options: [
        "Less than 6 months",
        "6 - 12 months",
        "1 - 2 years",
        "More than 2 years",
      ],
    },
    {
      id: 3,
      question: "Have you had any previous fertility treatments?",
      type: "radio",
      field: "previousTreatments",
      options: [
        "No, this is my first time exploring options.",
        "Yes, medications for ovulation only.",
        "Yes, IUI (Intrauterine Insemination).",
        "Yes, IVF (In Vitro Fertilization).",
      ],
    },
    {
      id: 4,
      question: "Have you or your partner been diagnosed with any specific conditions?",
      type: "radio",
      field: "diagnosedConditions",
      options: [
        "Yes, a condition related to me (e.g., PCOS, Blocked Tubes).",
        "Yes, a condition related to my partner (e.g., Low Sperm Count).",
        "Yes, we both have contributing factors.",
        "No, our infertility is unexplained.",
        "We haven't been diagnosed with anything yet.",
      ],
    },
    {
      id: 5,
      question: "If applicable, what is your partner's age?",
      type: "number",
      field: "partnerAge",
      hasNA: true,
    },
    {
      id: 6,
      question: "Have you ever been pregnant before?",
      type: "radio",
      field: "previousPregnancy",
      options: [
        "No, I have never been pregnant.",
        "Yes, I have had a child.",
        "Yes, but the pregnancy ended in a loss (e.g., miscarriage).",
      ],
    },
    {
      id: 7,
      question: "What is your biggest priority or concern right now?",
      type: "radio",
      field: "priority",
      options: [
        "Understanding the medical process and steps.",
        "Managing emotional stress and anxiety.",
        "Information on costs and financial planning.",
        "Lifestyle, diet, and wellness advice.",
      ],
    },
  ];

  const currentQuestion = questions[currentStep - 1];

  const handleNext = () => {
    const currentField = currentQuestion.field as keyof typeof answers;
    
    if (currentQuestion.type === "number" && !answers.partnerAgeNA && currentField === "partnerAge") {
      if (!answers[currentField]) {
        toast({
          title: "Required",
          description: "Please enter your partner's age or mark as Not Applicable",
          variant: "destructive",
        });
        return;
      }
    } else if (!answers.partnerAgeNA && currentQuestion.type !== "number" && !answers[currentField]) {
      toast({
        title: "Required",
        description: "Please select an option to continue",
        variant: "destructive",
      });
      return;
    }

    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      toast({
        title: "Onboarding complete!",
        description: "Redirecting to Sakhi...",
      });
      
      onClose();
      setLocation("/sakhi/try");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Help us personalize your experience
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Question {currentStep} of {questions.length}
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>

            {currentQuestion.type === "number" && (
              <div className="space-y-3">
                <Input
                  type="number"
                  placeholder="Enter age"
                  value={answers[currentQuestion.field as keyof typeof answers]}
                  onChange={(e) =>
                    setAnswers({
                      ...answers,
                      [currentQuestion.field]: e.target.value,
                    })
                  }
                  disabled={currentQuestion.hasNA && answers.partnerAgeNA}
                />
                {currentQuestion.hasNA && (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="na-checkbox"
                      checked={answers.partnerAgeNA}
                      onCheckedChange={(checked) =>
                        setAnswers({
                          ...answers,
                          partnerAgeNA: checked as boolean,
                          partnerAge: checked ? "" : answers.partnerAge,
                        })
                      }
                    />
                    <Label htmlFor="na-checkbox" className="text-sm cursor-pointer">
                      Not Applicable
                    </Label>
                  </div>
                )}
              </div>
            )}

            {currentQuestion.type === "radio" && (
              <RadioGroup
                value={answers[currentQuestion.field as keyof typeof answers]}
                onValueChange={(value) =>
                  setAnswers({
                    ...answers,
                    [currentQuestion.field]: value,
                  })
                }
              >
                {currentQuestion.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-3">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>

          <div className="flex justify-between gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 gradient-button text-white"
            >
              {currentStep === questions.length ? "Enter Sakhi Now" : "Next"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
