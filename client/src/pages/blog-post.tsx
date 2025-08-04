import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import type { BlogPost } from "@shared/schema";

const BlogPostPage = () => {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', slug],
  });

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
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-4 bg-mahogany-200 rounded w-32"></div>
            <div className="h-12 bg-mahogany-200 rounded"></div>
            <div className="h-4 bg-mahogany-200 rounded w-48"></div>
            <div className="space-y-4">
              <div className="h-4 bg-mahogany-200 rounded"></div>
              <div className="h-4 bg-mahogany-200 rounded"></div>
              <div className="h-4 bg-mahogany-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-6">
            <h1 className="font-playfair text-4xl font-bold text-mahogany-800">
              Post Not Found
            </h1>
            <p className="text-mahogany-600">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/blog">
              <Button className="bg-mahogany-600 text-white hover:bg-mahogany-700">
                <ArrowLeft className="mr-2" size={16} />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-mahogany-600 hover:text-mahogany-800">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Post Meta */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-4">
            <Badge className={getCategoryColor(post.category)}>
              {post.category}
            </Badge>
            <div className="flex items-center text-mahogany-600 space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <time>{formatDate(post.publishedAt)}</time>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-mahogany-800 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-mahogany-700 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-mahogany-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-mahogany-600 rounded-full flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <div>
                <p className="font-medium text-mahogany-800">{post.author}</p>
                <p className="text-sm text-mahogany-600">Founder, Mahogany Games</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleShare}
              className="border-mahogany-300 text-mahogany-600 hover:bg-mahogany-50"
            >
              <Share2 className="mr-2" size={16} />
              Share
            </Button>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-mahogany-800 leading-relaxed space-y-6"
            style={{
              lineHeight: '1.8',
            }}
          >
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h2 key={index} className="font-playfair text-3xl font-bold text-mahogany-800 mt-12 mb-6">
                    {paragraph.replace('# ', '')}
                  </h2>
                );
              }
              
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={index} className="font-playfair text-2xl font-semibold text-mahogany-800 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h4 key={index} className="font-playfair text-xl font-semibold text-mahogany-800 mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h4>
                );
              }
              
              if (paragraph.startsWith('- ')) {
                const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
                return (
                  <ul key={index} className="space-y-2 my-6">
                    {listItems.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-mahogany-600 rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-mahogany-700">{item.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              
              if (paragraph.trim() === '') {
                return null;
              }
              
              return (
                <p key={index} className="text-mahogany-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Post Footer */}
        <div className="mt-16 pt-8 border-t border-mahogany-200">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="text-center sm:text-left">
              <p className="text-mahogany-600 mb-2">Enjoyed this post?</p>
              <p className="text-sm text-mahogany-500">
                Follow our development journey and get notified of new posts.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/blog">
                <Button variant="outline" className="border-mahogany-300 text-mahogany-600 hover:bg-mahogany-50">
                  More Posts
                </Button>
              </Link>
              <Button 
                onClick={handleShare}
                className="bg-mahogany-600 text-white hover:bg-mahogany-700"
              >
                <Share2 className="mr-2" size={16} />
                Share Post
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
