import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GameProgress from "@/components/game-progress";
import { Coffee, Heart, Palette, Music } from "lucide-react";
import type { Game } from "@shared/schema";

const FeaturedGame = () => {
  const { data: game, isLoading } = useQuery<Game>({
    queryKey: ['/api/games/featured'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-mahogany-200 rounded w-64 mx-auto mb-16"></div>
            <div className="bg-mahogany-100 rounded-3xl h-96"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!game) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-mahogany-600">No featured game available at the moment.</p>
        </div>
      </section>
    );
  }

  const featureIcons = {
    "Craft Specialty Drinks": Coffee,
    "Heartwarming Stories": Heart,
    "Customize Your Café": Palette,
    "Lo-fi Soundtrack": Music,
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-mahogany-800">
            ✨ Featured Game ✨
          </h2>
          <p className="text-xl text-mahogany-600 max-w-2xl mx-auto">
            Dive into our upcoming cozy café management experience
          </p>
        </div>

        {/* Game Showcase */}
        <div className="mahogany-gradient rounded-3xl cozy-shadow overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Game Info */}
            <div className="p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-mahogany-600 to-mahogany-800 rounded-xl flex items-center justify-center shadow-lg">
                    <Coffee className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-3xl font-bold text-mahogany-800">
                      {game.title}
                    </h3>
                    <span className="text-mahogany-600 font-medium">{game.category}</span>
                  </div>
                </div>
                
                <p className="text-lg text-mahogany-700 leading-relaxed">
                  {game.description}
                </p>
              </div>

              {/* Game Features */}
              {game.features && game.features.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-playfair text-xl font-semibold text-mahogany-800">Game Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {game.features.map((feature, index) => {
                      const IconComponent = featureIcons[feature as keyof typeof featureIcons] || Coffee;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <IconComponent className="text-mahogany-600" size={16} />
                          <span className="text-mahogany-700">{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Development Progress */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-playfair text-xl font-semibold text-mahogany-800">Development Progress</h4>
                  <span className="text-mahogany-600 font-medium">{game.progress}%</span>
                </div>
                <GameProgress progress={game.progress} />
                <p className="text-sm text-mahogany-600">
                  Core gameplay mechanics complete • Working on UI polish and character animations
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 pt-4">
                <span className="text-mahogany-600 font-medium">Built with:</span>
                <Badge variant="secondary" className="bg-white px-4 py-2 shadow-sm">
                  <span className="mr-2">🎮</span>
                  <span className="font-semibold text-mahogany-800">{game.engine}</span>
                </Badge>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-mahogany-600 text-white hover:bg-mahogany-700 cozy-shadow">
                  <span className="mr-2">ℹ️</span>
                  Learn More
                </Button>
                <Button variant="outline" className="border-mahogany-600 text-mahogany-600 hover:bg-mahogany-600 hover:text-white">
                  <span className="mr-2">⭐</span>
                  Add to Wishlist
                </Button>
              </div>
            </div>

            {/* Game Screenshot/Mockup */}
            <div className="relative bg-gradient-to-br from-mahogany-300 to-mahogany-400 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-white rounded-2xl cozy-shadow p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-4 right-4 w-6 h-6 bg-mahogany-600 rounded-full animate-pulse"></div>
                
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-mahogany-600 rounded-lg flex items-center justify-center">
                        <Coffee className="text-white" size={16} />
                      </div>
                      <span className="font-semibold text-mahogany-800">Cozy Corner Café</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-mahogany-50 p-2 rounded-lg">
                        <span className="text-sm text-mahogany-700">☕ Vanilla Latte</span>
                        <span className="text-sm font-semibold text-mahogany-800">$4.50</span>
                      </div>
                      <div className="flex justify-between items-center bg-mahogany-50 p-2 rounded-lg">
                        <span className="text-sm text-mahogany-700">🧁 Cinnamon Muffin</span>
                        <span className="text-sm font-semibold text-mahogany-800">$3.25</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-mahogany-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <Heart className="text-white" size={20} />
                    </div>
                    <p className="text-xs text-mahogany-600">Customer Satisfaction: 98%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
