import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";


const FilterSection = ({ title, options, selectedOptions, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          className="w-full justify-between h-auto text-left font-semibold text-foreground hover:text-primary"
        >
          <span className="text-base">{title}</span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4 text-primary" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="space-y-3 px-4 py-4">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-3">
            <Checkbox
              id={`${title}-${option}`}
              checked={selectedOptions.includes(option)}
              onCheckedChange={(checked) => onFilterChange(option, !!checked)}
              className="border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <label
              htmlFor={`${title}-${option}`}
              className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors select-none"
            >
              {option}
            </label>
          </div>
        ))}
        
        {selectedOptions.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="text-xs text-primary hover:text-primary-dark h-6 p-0"
            onClick={() => {
              selectedOptions.forEach(option => onFilterChange(option, false));
            }}
          >
            Clear {title}
          </Button>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterSection;