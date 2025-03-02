import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import type { Question } from "@shared/types";

const answerSchema = z.object({
  answer: z.number().min(1).max(5)
});

type FormData = z.infer<typeof answerSchema>;

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [, setLocation] = useLocation();

  const { data: questions, isLoading } = useQuery<Question[]>({
    queryKey: ["/api/questions"]
  });

  const form = useForm<FormData>({
    resolver: zodResolver(answerSchema),
    defaultValues: {
      answer: undefined
    }
  });

  const [answers, setAnswers] = useState<number[]>([]);

  const mutation = useMutation({
    mutationFn: async (scores: number[]) => {
      const response = await apiRequest("POST", "/api/results", {
        scores,
        primaryType: calculatePrimaryType(scores),
        wingType: calculateWingType(scores),
        timestamp: new Date().toISOString()
      });
      return await response.json();
    },
    onSuccess: (data) => {
      setLocation(`/results/${data.id}`);
    }
  });

  if (isLoading || !questions) {
    return <div>Laden...</div>;
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const onSubmit = (data: FormData) => {
    const newAnswers = [...answers, data.answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Reset form with undefined value to clear radio selection
      form.reset({ answer: undefined });
    } else {
      mutation.mutate(calculateScores(newAnswers, questions));
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <Progress value={progress} className="mb-8" />

        <Card>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} key={currentQuestion}>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">
                    {questions[currentQuestion].text}
                  </h2>

                  <FormField
                    control={form.control}
                    name="answer"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) => field.onChange(parseInt(value))}
                            value={field.value?.toString()}
                            className="space-y-2"
                          >
                            <FormItem>
                              <FormControl>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="1" id="r1" />
                                  <FormLabel htmlFor="r1">Helemaal niet</FormLabel>
                                </div>
                              </FormControl>
                            </FormItem>
                            <FormItem>
                              <FormControl>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="2" id="r2" />
                                  <FormLabel htmlFor="r2">Een beetje</FormLabel>
                                </div>
                              </FormControl>
                            </FormItem>
                            <FormItem>
                              <FormControl>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="3" id="r3" />
                                  <FormLabel htmlFor="r3">Gemiddeld</FormLabel>
                                </div>
                              </FormControl>
                            </FormItem>
                            <FormItem>
                              <FormControl>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="4" id="r4" />
                                  <FormLabel htmlFor="r4">Behoorlijk</FormLabel>
                                </div>
                              </FormControl>
                            </FormItem>
                            <FormItem>
                              <FormControl>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="5" id="r5" />
                                  <FormLabel htmlFor="r5">Helemaal wel</FormLabel>
                                </div>
                              </FormControl>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full"
                  disabled={mutation.isPending}
                >
                  {currentQuestion < questions.length - 1 ? "Volgende" : "Resultaten Bekijken"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function calculateScores(answers: number[], questions: Question[]): number[] {
  // Initialize arrays to store scores and counts for each type (1-9)
  const typeScores = new Array(9).fill(0);
  const typeCounts = new Array(9).fill(0);

  // Process each answer
  answers.forEach((answer, index) => {
    if (answer && questions[index]) { // Check both answer and question exist
      const type = questions[index].type;
      typeScores[type - 1] += answer;
      typeCounts[type - 1]++;
    }
  });

  // Calculate average scores, handling division by zero
  return typeScores.map((score, index) => 
    typeCounts[index] > 0 ? score / typeCounts[index] : 0
  );
}

function calculatePrimaryType(scores: number[]): number {
  const maxScore = Math.max(...scores);
  // If all scores are 0, default to type 1
  if (maxScore === 0) return 1;
  return scores.indexOf(maxScore) + 1;
}

function calculateWingType(scores: number[]): number {
  const primaryIndex = scores.indexOf(Math.max(...scores));

  // Handle edge cases
  if (primaryIndex === -1) return 1;

  const leftWing = primaryIndex === 0 ? 8 : primaryIndex - 1;
  const rightWing = primaryIndex === 8 ? 0 : primaryIndex + 1;

  return scores[leftWing] >= scores[rightWing] ? leftWing + 1 : rightWing + 1;
}