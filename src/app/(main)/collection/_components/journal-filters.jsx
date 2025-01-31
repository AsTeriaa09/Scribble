"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, isSameDay } from "date-fns";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { MOODS } from "@/app/lib/moods";
import { cn } from "@/lib/utils";
const JournalFilters = ({entries}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [date, setDate] = useState(null);
  const [filteredEntries, setFilteredEntries] = useState(entries);

  const clearFilters = () => {
     setSearchQuery("");
     setSelectedMood("");
     setDate(null);
   };

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <Input
            placeholder="Search entries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            prefix={<Search className="h-4 w-4 text-gray-400" />}
          />
        </div>

        <Select value={selectedMood} onValueChange={setSelectedMood}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Filter by mood" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(MOODS).map((mood) => (
              <SelectItem key={mood.id} value={mood.id}>
                <span className="flex items-center gap-2">
                  {mood.emoji} {mood.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        {(searchQuery || selectedMood || date) && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="text-orange-600"
          >
            Clear Filters
          </Button>
        )}
      </div>


    </>
  );
};

export default JournalFilters;
