import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { PDFDownloadLink } from '@react-pdf/renderer';
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

  const { data: result, isLoading: resultLoading } = useQuery<Result>({
    queryKey: [`/api/results/${id}`],
  });

  const { data: types, isLoading: typesLoading } = useQuery<EnneagramType[]>({
    queryKey: ["/api/types"],
  });

  if (resultLoading || typesLoading || !result || !types) {
    return <div>Laden...</div>;
  }

  const primaryType = types.find((t) => t.id === result.primaryType);
  const wingType = types.find((t) => t.id === result.wingType);

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
              {primaryType.name}
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
                  <h3 className="font-bold mb-2">{wingType.name}</h3>
                  <p>{wingType.description}</p>
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