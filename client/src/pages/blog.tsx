import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/blog-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, PenTool } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "@shared/schema";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  // Get unique categories
  const categories = Array.from(new Set(blogPosts?.map(post => post.category) || []));

  // Filter posts
  const filteredPosts = blogPosts?.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  }) || [];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 mahogany-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-mahogany-800 mb-6">
            Development Blog
          </h1>
          <p className="text-xl text-mahogany-700 max-w-2xl mx-auto">
            Follow our journey creating cozy, inclusive games. Behind-the-scenes insights, development updates, and design philosophy.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-mahogany-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mahogany-400" size={20} />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-mahogany-200 focus:ring-mahogany-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-mahogany-600 font-medium text-sm">Filter by:</span>
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "bg-mahogany-600 hover:bg-mahogany-700" : "border-mahogany-300 text-mahogany-600 hover:bg-mahogany-50"}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-mahogany-600 hover:bg-mahogany-700" : "border-mahogany-300 text-mahogany-600 hover:bg-mahogany-50"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-mahogany-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-2xl p-6 h-64"></div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <PenTool className="mx-auto text-mahogany-400 mb-4" size={64} />
              <h3 className="font-playfair text-2xl font-semibold text-mahogany-800 mb-2">
                {searchTerm || selectedCategory ? "No posts found" : "No blog posts yet"}
              </h3>
              <p className="text-mahogany-600">
                {searchTerm || selectedCategory 
                  ? "Try adjusting your search or filter criteria."
                  : "We're working on our first blog posts. Check back soon!"
                }
              </p>
              {(searchTerm || selectedCategory) && (
                <div className="flex gap-2 justify-center mt-4">
                  {searchTerm && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSearchTerm("")}
                      className="border-mahogany-300 text-mahogany-600 hover:bg-mahogany-50"
                    >
                      Clear search
                    </Button>
                  )}
                  {selectedCategory && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                      className="border-mahogany-300 text-mahogany-600 hover:bg-mahogany-50"
                    >
                      Clear filter
                    </Button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Results count */}
              <div className="mb-8">
                <p className="text-mahogany-600">
                  {filteredPosts.length === 1 
                    ? "1 post found" 
                    : `${filteredPosts.length} posts found`
                  }
                  {selectedCategory && ` in "${selectedCategory}"`}
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
