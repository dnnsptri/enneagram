import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ErrorDisplay from "@/components/ErrorDisplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download } from "lucide-react";
import { ResultsPDF } from "@/components/ResultsPDF";
import type { Result } from "@shared/schema";
import type { EnneagramType } from "@shared/types";

export default function Results() {
  const params = useParams();
  const id = params?.id;

  const { data: result, isLoading: resultLoading, error: resultError } = useQuery<Result>({
    queryKey: [`/api/results/${id}`],
    retry: 3,
  });

  const { data: types, isLoading: typesLoading, error: typesError } = useQuery<EnneagramType[]>({
    queryKey: ["/api/types"],
    retry: 3,
  });

  if (resultLoading || typesLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-lg mb-2">Laden...</div>
        <div className="text-sm text-muted-foreground">Een moment geduld alstublieft</div>
      </div>
    </div>;
  }
  
  if (resultError || typesError) {
    return <ErrorDisplay 
      title="Er is een fout opgetreden"
      message={resultError?.message || typesError?.message || "Probeer het later opnieuw"}
    />;
  }
  
  if (!result || !types) {
    return <ErrorDisplay 
      title="Geen gegevens gevonden"
      message="De resultaten zijn niet beschikbaar"
      code='404: {"message":"Result not found"}'
    />;
  }

  const primaryType = types.find((t) => t.id === result.primaryType);

  if (!primaryType) {
    return <div>Error: Type not found</div>;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Je Enneagram Resultaat</CardTitle>
                <CardDescription>
                  Type {primaryType.id} - {primaryType.name}
                </CardDescription>
              </div>
              <PDFDownloadLink
                document={
                  <ResultsPDF
                    result={result}
                    primaryType={primaryType}
                  />
                }
                fileName={`enneagram-resultaat-type-${primaryType.id}.pdf`}
              >
                {({ loading }) => (
                  <Button disabled={loading} size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    {loading ? "Laden..." : "Download PDF"}
                  </Button>
                )}
              </PDFDownloadLink>
            </div>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">
              Type {primaryType.id} - {primaryType.name}
            </h2>
            <p className="mb-6">{primaryType.description}</p>

            <Accordion type="multiple" className="w-full">
              <AccordionItem value="strengths">
                <AccordionTrigger>Sterke punten</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    {primaryType.strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="weaknesses">
                <AccordionTrigger>Uitdagingen</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6">
                    {primaryType.weaknesses.map((weakness, i) => (
                      <li key={i}>{weakness}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Link href="/">
            <Button variant="outline">Terug naar Home</Button>
          </Link>
          <Link href="/test">
            <Button>Test Opnieuw Maken</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}