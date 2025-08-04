import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'dev update':
        return 'bg-mahogany-600 text-white';
      case 'design':
        return 'bg-accent text-mahogany-800';
      case 'accessibility':
        return 'bg-mahogany-500 text-white';
      default:
        return 'bg-mahogany-100 text-mahogany-700';
    }
  };

  const formatDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-mahogany-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <Badge className={getCategoryColor(post.category)}>
            {post.category}
          </Badge>
          <div className="flex items-center text-mahogany-600 space-x-1">
            <Calendar size={14} />
            <time>{formatDate(post.publishedAt)}</time>
          </div>
        </div>
        
        <h3 className="font-playfair text-xl font-semibold text-mahogany-800">
          {post.title}
        </h3>
        
        <p className="text-mahogany-700 text-sm leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-mahogany-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">T</span>
            </div>
            <div className="space-y-0">
              <span className="text-mahogany-700 font-medium text-sm">{post.author}</span>
              <div className="flex items-center text-mahogany-600 text-xs space-x-1">
                <Clock size={12} />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
          
          <Link href={`/blog/${post.slug}`}>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-mahogany-600 hover:text-mahogany-800 font-medium"
            >
              Read More →
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
