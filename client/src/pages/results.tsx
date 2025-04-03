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

  console.log("Result loading:", resultLoading, "Result data:", result, "Result error:", resultError);
  console.log("Types loading:", typesLoading, "Types data:", types, "Types error:", typesError);

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
  const wingType = types.find((t) => t.id === result.wingType);
  
  // Get tri-type information
  const triTypes = result.triType.map(typeId => 
    types.find(t => t.id === typeId)
  ).filter((t): t is EnneagramType => t !== undefined);

  if (!primaryType || !wingType) {
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
                  Type {primaryType.id} met een vleugel van Type {wingType.id}
                </CardDescription>
              </div>
              <PDFDownloadLink
                document={
                  <ResultsPDF
                    result={result}
                    primaryType={primaryType}
                    wingType={wingType}
                    triTypes={triTypes}
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
              <AccordionItem value="wing">
                <AccordionTrigger>Je Vleugel: Type {wingType.id}</AccordionTrigger>
                <AccordionContent>
                  <h3 className="font-bold mb-2">Type {wingType.id} - {wingType.name}</h3>
                  <p>{wingType.description}</p>
                </AccordionContent>
              </AccordionItem>
              {triTypes.length > 0 && (
                <AccordionItem value="tritype">
                  <AccordionTrigger>Je Tri-type</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">Je tri-type is {triTypes.map(t => t.id).join('-')}. Dit vertegenwoordigt je primaire reactiepatronen uit de drie centra: Buik/Instinct (8,9,1), Hart/Emotie (2,3,4), en Hoofd/Denken (5,6,7).</p>
                    <div className="space-y-4">
                      {triTypes.map((type) => (
                        <div key={type.id}>
                          <h4 className="font-semibold">Type {type.id} - {type.name}</h4>
                          <p className="text-sm">{type.description.split('.')[0]}.</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
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