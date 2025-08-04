import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import FeaturedGame from "@/components/sections/featured-game";
import Portfolio from "@/components/sections/portfolio";
import Newsletter from "@/components/sections/newsletter";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { BlogPost } from "@shared/schema";

const Home = () => {
  const { data: blogPosts, isLoading: blogLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  const recentPosts = blogPosts?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedGame />
      <Portfolio />
      
      {/* Development Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-mahogany-800">
              Development Blog
            </h2>
            <p className="text-xl text-mahogany-600 max-w-2xl mx-auto">
              Follow our journey, insights, and progress updates from the studio
            </p>
          </div>

          {blogLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-mahogany-50 rounded-2xl p-6 h-64"></div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-mahogany-600 text-white hover:bg-mahogany-700 cozy-shadow">
                <span className="mr-2">📝</span>
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
