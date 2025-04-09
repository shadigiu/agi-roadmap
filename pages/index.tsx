
import { Card, CardContent } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { ScrollArea } from "../components/ui/scroll-area";
import { useState } from "react";

const sections = [ ... ]; // Content omitted for brevity. We'll replace it shortly.

export default function TodoPage() {
  const [checked, setChecked] = useState({});

  const toggle = (label) => {
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <ScrollArea className="p-4 h-screen w-full">
      <h1 className="text-3xl font-bold mb-6">AGI Researcher Roadmap</h1>
      {sections.map((section) => (
        <Card key={section.title} className="mb-6">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.label} className="flex items-center space-x-3">
                  <Checkbox
                    checked={checked[item.label] || false}
                    onCheckedChange={() => toggle(item.label)}
                  />
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </ScrollArea>
  );
}
