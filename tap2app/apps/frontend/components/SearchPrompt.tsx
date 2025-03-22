"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type PromptIdea = {
  id: number;
  text: string;
};

const promptIdeas: PromptIdea[] = [
  { id: 1, text: "Create a Chess App" },
  { id: 2, text: "Create a TODO App" },
  { id: 3, text: "Create a Weather App" },
  { id: 4, text: "Create a Tic Tac Toe Game" }
];

export function SearchPrompt() {
  const [prompt, setPrompt] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", prompt);
    // Add your search logic here
  };
  
  const selectPromptIdea = (idea: string) => {
    setPrompt(idea);
  };
  
  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3">Enter your prompt</h1>
        <p className="text-muted-foreground">Describe what you want to build and we'll create it for you</p>
      </div>
      
      <form onSubmit={handleSearch} className="w-full mb-8">
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What would you like to build today?"
            className="w-full p-4 pr-12 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-base"
          />
          <Button 
            type="submit" 
            className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-primary text-black hover:bg-primary/90"
            size="sm"
            onClick={()=>{
              
            }}
          >
            Search
          </Button>
        </div>
      </form>
      
      <div className="w-full">
        <h2 className="text-lg font-medium mb-3 text-center">Try these prompts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {promptIdeas.map((idea) => (
            <button
              key={idea.id}
              onClick={() => selectPromptIdea(idea.text)}
              className="p-3 text-left rounded-md bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors shadow-sm"
            >
              {idea.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 