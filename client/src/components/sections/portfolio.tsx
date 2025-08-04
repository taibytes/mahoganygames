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
        return 'bg-forest-600 text-white border-forest-600 shadow-md';
      case 'coming_soon':
        return 'bg-brown-600 text-white border-brown-600 shadow-md';
      case 'concept':
        return 'bg-gray-700 text-white border-gray-700 shadow-md';
      default:
        return 'bg-gray-600 text-white border-gray-600 shadow-md';
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl h-48 mb-4"></div>
                <div className="bg-gray-200 rounded h-4 mb-2"></div>
                <div className="bg-gray-200 rounded h-3 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!games || games.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">🌱 No games growing in our forest at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brown-accessible">
            🌳 Game Forest
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore our growing collection of nature-inspired, cozy gaming experiences where technology meets the natural world
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
                className={`nature-card rounded-2xl cozy-shadow overflow-hidden hover:warm-glow transition-all duration-300 transform hover:scale-105 ${
                  isActive ? 'border-2 border-forest-300' : 'border border-forest-200'
                }`}
              >
                <div className={`relative h-48 flex items-center justify-center ${
                  game.status === 'active' 
                    ? 'bg-gradient-to-br from-forest-500 to-forest-600'
                    : game.status === 'coming_soon'
                    ? 'bg-gradient-to-br from-brown-500 to-brown-600'
                    : 'bg-gradient-to-br from-gray-500 to-gray-600'
                }`}>
                  <div className="text-white text-center">
                    <IconComponent size={48} className="mx-auto mb-2" />
                    <p className="font-semibold">{getStatusText(game.status)}</p>
                  </div>
                  <Badge className={`absolute top-3 right-3 ${getStatusColor(game.status)}`}>
                    {getStatusText(game.status)}
                  </Badge>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-brown-accessible">
                    {game.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {game.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                      {game.category}
                    </Badge>
                    {isActive ? (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-forest-600 hover:text-forest-700 font-medium"
                      >
                        View Details →
                      </Button>
                    ) : (
                      <span className="text-gray-500 text-sm">
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
