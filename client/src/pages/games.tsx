import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import GameProgress from "@/components/game-progress";
import { Coffee, Sprout, BookOpen, Gamepad2 } from "lucide-react";
import type { Game } from "@shared/schema";

const Games = () => {
  const { data: games, isLoading } = useQuery<Game[]>({
    queryKey: ['/api/games'],
  });

  const getGameIcon = (title: string) => {
    if (title.toLowerCase().includes('sip')) return Coffee;
    if (title.toLowerCase().includes('garden')) return Sprout;
    if (title.toLowerCase().includes('story')) return BookOpen;
    return Gamepad2;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-mahogany-600 text-white';
      case 'coming_soon':
        return 'bg-accent text-mahogany-800';
      case 'concept':
        return 'bg-mahogany-100 text-mahogany-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'In Development';
      case 'coming_soon':
        return 'Coming Soon';
      case 'concept':
        return 'Concept Phase';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 mahogany-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-mahogany-800 mb-6">
            Our Games
          </h1>
          <p className="text-xl text-mahogany-700 max-w-2xl mx-auto">
            Discover our collection of cozy, inclusive gaming experiences designed to warm your heart and inspire your soul.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-12">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-mahogany-100 rounded-3xl h-96 mb-8"></div>
                </div>
              ))}
            </div>
          ) : !games || games.length === 0 ? (
            <div className="text-center py-16">
              <Coffee className="mx-auto text-mahogany-400 mb-4" size={64} />
              <h3 className="font-playfair text-2xl font-semibold text-mahogany-800 mb-2">
                No games available
              </h3>
              <p className="text-mahogany-600">
                We're working hard on our first cozy game. Check back soon!
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {games.map((game, index) => {
                const IconComponent = getGameIcon(game.title);
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={game.id}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Game Info */}
                    <div className={`space-y-8 ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-mahogany-500 to-mahogany-700 rounded-2xl flex items-center justify-center shadow-lg">
                            <IconComponent className="text-white" size={32} />
                          </div>
                          <div>
                            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-mahogany-800">
                              {game.title}
                            </h2>
                            <div className="flex items-center space-x-3 mt-2">
                              <Badge variant="secondary" className="bg-mahogany-100 text-mahogany-700">
                                {game.category}
                              </Badge>
                              <Badge className={getStatusColor(game.status)}>
                                {getStatusText(game.status)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-lg text-mahogany-700 leading-relaxed">
                          {game.description}
                        </p>
                      </div>

                      {/* Game Features */}
                      {game.features && game.features.length > 0 && (
                        <div className="space-y-4">
                          <h3 className="font-playfair text-xl font-semibold text-mahogany-800">Key Features</h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {game.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-mahogany-600 rounded-full"></div>
                                <span className="text-mahogany-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Development Progress */}
                      {game.status === 'active' && (
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-playfair text-xl font-semibold text-mahogany-800">Development Progress</h3>
                            <span className="text-mahogany-600 font-medium">{game.progress}%</span>
                          </div>
                          <GameProgress progress={game.progress} />
                          <p className="text-sm text-mahogany-600">
                            {game.progress < 30 
                              ? "Early development stage • Concept and prototyping"
                              : game.progress < 70
                              ? "Core development • Implementing main features"
                              : "Polishing phase • UI refinement and testing"
                            }
                          </p>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex items-center space-x-4">
                        <span className="text-mahogany-600 font-medium">Built with:</span>
                        <Badge variant="secondary" className="bg-white px-4 py-2 shadow-sm">
                          <Gamepad2 className="mr-2" size={16} />
                          <span className="font-semibold text-mahogany-800">{game.engine}</span>
                        </Badge>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        {game.status === 'active' ? (
                          <>
                            <Button className="bg-mahogany-600 text-white hover:bg-mahogany-700 cozy-shadow">
                              <span className="mr-2">ℹ️</span>
                              Learn More
                            </Button>
                            <Button variant="outline" className="border-mahogany-600 text-mahogany-600 hover:bg-mahogany-600 hover:text-white">
                              <span className="mr-2">⭐</span>
                              Add to Wishlist
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" className="border-mahogany-600 text-mahogany-600 hover:bg-mahogany-600 hover:text-white">
                            <span className="mr-2">🔔</span>
                            Get Notified
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Game Mockup */}
                    <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="relative bg-gradient-to-br from-mahogany-300 to-mahogany-500 rounded-3xl p-8 shadow-2xl">
                        <div className="bg-white rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                          <div className="text-center space-y-4">
                            <IconComponent className="mx-auto text-mahogany-600" size={48} />
                            <h4 className="font-playfair text-xl font-semibold text-mahogany-800">
                              {game.title}
                            </h4>
                            <p className="text-mahogany-600 text-sm">
                              {game.shortDescription}
                            </p>
                            {game.status === 'active' && (
                              <div className="pt-4">
                                <div className="text-xs text-mahogany-500 mb-2">Development Progress</div>
                                <GameProgress progress={game.progress} />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Games;
