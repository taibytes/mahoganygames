import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Sprout, BookOpen } from "lucide-react";
import type { Game } from "@shared/schema";

const Portfolio = () => {
  const { data: games, isLoading } = useQuery<Game[]>({
    queryKey: ['/api/games'],
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-mahogany-600 text-white border-mahogany-600';
      case 'coming_soon':
        return 'bg-accent text-mahogany-800 border-accent';
      case 'concept':
        return 'bg-mahogany-100 text-mahogany-700 border-mahogany-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'coming_soon':
        return 'Coming Soon';
      case 'concept':
        return 'Concept Phase';
      default:
        return status;
    }
  };

  const getGameIcon = (title: string) => {
    if (title.toLowerCase().includes('sip')) return Coffee;
    if (title.toLowerCase().includes('garden')) return Sprout;
    if (title.toLowerCase().includes('story')) return BookOpen;
    return Coffee;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-mahogany-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-mahogany-200 rounded-2xl h-48 mb-4"></div>
                <div className="bg-mahogany-200 rounded h-4 mb-2"></div>
                <div className="bg-mahogany-200 rounded h-3 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!games || games.length === 0) {
    return (
      <section className="py-20 bg-mahogany-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-mahogany-600">No games available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-mahogany-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-mahogany-800">
            Game Portfolio
          </h2>
          <p className="text-xl text-mahogany-600 max-w-2xl mx-auto">
            Explore our collection of cozy, inclusive gaming experiences
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => {
            const IconComponent = getGameIcon(game.title);
            const isActive = game.status === 'active';
            
            return (
              <div 
                key={game.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  isActive ? 'border-2 border-mahogany-200' : 'border border-mahogany-100'
                }`}
              >
                <div className={`relative h-48 flex items-center justify-center ${
                  game.status === 'active' 
                    ? 'bg-gradient-to-br from-mahogany-300 to-mahogany-400'
                    : game.status === 'coming_soon'
                    ? 'bg-gradient-to-br from-accent to-mahogany-300'
                    : 'bg-gradient-to-br from-mahogany-400 to-mahogany-600'
                }`}>
                  <div className="text-white text-center">
                    <IconComponent size={48} className="mx-auto mb-2" />
                    <p className="font-semibold">{getStatusText(game.status)}</p>
                  </div>
                  {isActive && (
                    <Badge className={`absolute top-3 right-3 ${getStatusColor(game.status)}`}>
                      {getStatusText(game.status)}
                    </Badge>
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-mahogany-800">
                    {game.title}
                  </h3>
                  <p className="text-mahogany-600 text-sm">
                    {game.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-mahogany-100 text-mahogany-700">
                      {game.category}
                    </Badge>
                    {isActive ? (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-mahogany-600 hover:text-mahogany-800 font-medium"
                      >
                        View Details →
                      </Button>
                    ) : (
                      <span className="text-mahogany-400 text-sm">
                        {getStatusText(game.status)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
