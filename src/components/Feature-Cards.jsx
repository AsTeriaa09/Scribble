import React from "react";
import {
    Book,
    Sparkles,
    Lock,
    BarChart2,
    FileText,
  } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features.",
  },
];

const FeatureCards = () => {
  return (
    <>
      <section
        id="features"
        className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-xl text-orange-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-orange-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="space-y-24 mt-24">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="space-y-6">
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-900">
              Rich Text Editor
            </h3>
            <p className="text-lg text-orange-700">
              Express yourself fully with our powerful editor featuring:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Format text with ease</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Embed links</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
            {/* Editor Preview */}
            <div className="flex gap-2 mb-6">
              <div className="h-8 w-8 rounded bg-orange-100"></div>
              <div className="h-8 w-8 rounded bg-orange-100"></div>
              <div className="h-8 w-8 rounded bg-orange-100"></div>
            </div>
            <div className="h-4 bg-orange-50 rounded w-3/4"></div>
            <div className="h-4 bg-orange-50 rounded w-full"></div>
            <div className="h-4 bg-orange-50 rounded w-2/3"></div>
            <div className="h-4 bg-orange-50 rounded w-1/3"></div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 md:flex-row-reverse">
          <div className="space-y-6 md:order-2">
            <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-900">
              Mood Analytics
            </h3>
            <p className="text-lg text-orange-700">
              Track your emotional journey with powerful analytics:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Visual mood trends</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-400" />
                <span>Pattern recognition</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100 md:order-1">
            {/* Analytics Preview */}
            <div className="h-40 bg-gradient-to-t from-orange-100 to-orange-50 rounded-lg"></div>
            <div className="flex justify-between">
              <div className="h-4 w-16 bg-orange-100 rounded"></div>
              <div className="h-4 w-16 bg-orange-100 rounded"></div>
              <div className="h-4 w-16 bg-orange-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
