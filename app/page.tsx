import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const courses = [
    {
      title: "Next.js for Beginners",
      desc: "Build fast, SEO-friendly web apps with Next.js",
    },
    {
      title: "React + TypeScript",
      desc: "Type-safe React patterns and best practices",
    },
    {
      title: "UI Design Fundamentals",
      desc: "Design accessible and beautiful interfaces",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Elearning</h1>
          <Badge>Beta</Badge>
        </div>
        <div>
          <Button variant="outline" className="mr-2">
            Sign in
          </Button>
          <Button>Sign up</Button>
        </div>
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">
              Learn new skills, faster
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Bite-sized courses and hands-on tutorials to help you grow your
              career.
            </p>
            <div className="flex gap-3">
              <Button>Get Started</Button>
              <Button variant="outline">Browse Courses</Button>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-medium">Featured course</h3>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Start with a practical Next.js project and deploy it
                  end-to-end.
                </p>
                <CardAction>
                  <Button size="sm">Start course</Button>
                </CardAction>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">Popular courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card
                key={course.title}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{course.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {course.desc}
                      </div>
                    </div>
                    <Badge variant="secondary">New</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A short description for the course with expected outcomes
                    and duration.
                  </p>
                </CardContent>
                <CardAction>
                  <Button size="sm">Open</Button>
                </CardAction>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Elearning. All rights reserved.
      </footer>
    </div>
  );
}
