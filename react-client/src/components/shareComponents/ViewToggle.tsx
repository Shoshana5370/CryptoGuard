import { Grid3X3, List, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/styles/ui/button";

interface ViewToggleProps {
  view: 'table' | 'grid' | 'compact';
  onViewChange: (view: 'table' | 'grid' | 'compact') => void;
}

const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  const views = [
    { key: 'table' as const, icon: List, label: 'Table View' },
    { key: 'grid' as const, icon: LayoutGrid, label: 'Grid View' },
    { key: 'compact' as const, icon: Grid3X3, label: 'Compact View' },
  ];

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      {views.map((viewOption) => {
        const Icon = viewOption.icon;
        const isActive = view === viewOption.key;
        
        return (
          <motion.div
            key={viewOption.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={isActive ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewChange(viewOption.key)}
              className={`h-9 px-3 rounded-md transition-all duration-200 ${
                isActive 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'hover:bg-gray-200 text-gray-600'
              }`}
              title={viewOption.label}
            >
              <Icon className="w-4 h-4" />
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ViewToggle;
