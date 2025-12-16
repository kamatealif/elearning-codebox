import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="p-8">
      <Card className="w-[300px]">
        <CardHeader>
          <h3 className="text-lg font-medium">Welcome to the App!</h3>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This is a sample card component using custom fonts.
          </p>
          <CardAction>
            <Button>Get Started</Button>
          </CardAction>
        </CardContent>
      </Card>
    </div>
  );
}
