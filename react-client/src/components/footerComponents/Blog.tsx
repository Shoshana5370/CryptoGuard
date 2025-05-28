
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/styles/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Zero-Knowledge Security",
      excerpt: "Exploring how zero-knowledge architecture is revolutionizing data protection and what it means for enterprise security.",
      date: "2024-03-15",
      category: "Security",
      readTime: "5 min read"
    },
    {
      title: "Best Practices for File Sharing in Remote Teams",
      excerpt: "Essential security guidelines for organizations managing sensitive files across distributed teams.",
      date: "2024-03-10",
      category: "Best Practices",
      readTime: "7 min read"
    },
    {
      title: "Understanding GDPR Compliance in 2024",
      excerpt: "A comprehensive guide to maintaining GDPR compliance while ensuring secure file management.",
      date: "2024-03-05",
      category: "Compliance",
      readTime: "10 min read"
    },
    {
      title: "The Rise of Quantum-Resistant Encryption",
      excerpt: "How organizations can prepare for the quantum computing era and protect their encrypted data.",
      date: "2024-02-28",
      category: "Technology",
      readTime: "8 min read"
    },
    {
      title: "Implementing Zero-Trust Architecture",
      excerpt: "Step-by-step guide to implementing zero-trust security principles in your organization.",
      date: "2024-02-20",
      category: "Security",
      readTime: "12 min read"
    },
    {
      title: "Data Breach Prevention Strategies",
      excerpt: "Proven strategies and tools to prevent data breaches and protect sensitive information.",
      date: "2024-02-15",
      category: "Security",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Security", "Best Practices", "Compliance", "Technology"];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Security
              <span className="bg-gradient-to-r from-emerald-600 to-orange-500 bg-clip-text text-transparent"> Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Stay updated with the latest trends, best practices, and insights in cybersecurity and data protection.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <ArrowRight className="h-5 w-5 text-emerald-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest security insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold rounded-xl shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
