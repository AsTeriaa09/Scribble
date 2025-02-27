import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getDailyPrompt } from "@/actions/public";

const HeroSection = async () => {
  const advice = await getDailyPrompt();
  return (
    <div className="max-w-5xl mx-auto text-center space-y-8">
      <h1 className="text-5xl md:text-7xl lg:text-8xl gradient-title mb-6">
        Your Space to Scribble. <br /> Your Story to store.
      </h1>
      <p className="text-lg md:text-xl text-orange-800 mb-8">
        Capture your thoughts, track your moods, and reflect on your journey in
        a beautiful, secure space.
      </p>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-50 via-transparent to-transparent pointer-events-none z-10" />
        <div className="bg-white rounded-2xl  p-4 max-full mx-auto">
          <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span className="text-orange-900 font-medium">
                Today&rsquo;s Entry
              </span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-orange-200" />
              <div className="h-3 w-3 rounded-full bg-orange-300" />
              <div className="h-3 w-3 rounded-full bg-orange-400" />
            </div>
          </div>
          <div className="space-y-4 p-4">
            <h3 className="text-xl font-semibold text-orange-900">
              {advice ? advice : "My Thoughts Today"}
            </h3>
            <Skeleton className="h-4 bg-orange-100 rounded w-3/4" />
            <Skeleton className="h-4 bg-orange-100 rounded w-full" />
            <Skeleton className="h-4 bg-orange-100 rounded w-2/3" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <Link href="/dashboard">
          <Button
            variant="journal"
            className="px-8 py-6 rounded-full flex items-center gap-2"
          >
            Start Writing <ChevronRight className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="#features">
          <Button
            variant="outline"
            className="px-8 py-6 rounded-full border-orange-600 text-orange-600 hover:bg-orange-100"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
