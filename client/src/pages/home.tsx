import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enneagram Persoonlijkheidstest</CardTitle>
            <CardDescription>
              Ontdek je enneagramtype en krijg inzicht in je persoonlijkheid
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Deze test helpt je om je dominante enneagramtype te identificeren. 
              Het enneagram is een krachtig hulpmiddel voor persoonlijke groei en 
              zelfinzicht.
            </p>
            <Link href="/test">
              <Button size="lg" className="w-full">
                Start de Test
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Over het Enneagram</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Het enneagram is een systeem dat negen verschillende persoonlijkheidstypen 
              beschrijft en hun onderlinge relaties verkent. Elk type heeft zijn eigen 
              wereldbeeld, motivaties en groeipad.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
