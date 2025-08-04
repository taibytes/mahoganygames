import { Progress } from "@/components/ui/progress";

interface GameProgressProps {
  progress: number;
  className?: string;
}

const GameProgress = ({ progress, className = "" }: GameProgressProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Progress 
        value={progress} 
        className="h-3 bg-mahogany-200 [&>div]:bg-gradient-to-r [&>div]:from-mahogany-500 [&>div]:to-mahogany-600"
      />
    </div>
  );
};

export default GameProgress;
