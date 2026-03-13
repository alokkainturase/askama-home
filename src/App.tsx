import React, { useState } from 'react';
import { Bot, Sparkles, MessageSquare, Zap, Shield, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden relative font-sans selection:bg-indigo-500/30">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-gray-950/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
              <Bot className="w-6 h-6 text-white absolute" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Askama
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Building in progress
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>The Next Generation AI Chat is Coming</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-center mb-8 max-w-4xl leading-tight">
          Intelligent Conversations, <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-glow">
            Reimagined.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-2xl mb-12 leading-relaxed">
          We are currently building Askama — a powerful, intuitive, and seamlessly integrated AI chat platform designed to elevate your productivity and creativity.
        </p>

        {/* Waitlist Form */}
        <div className="w-full max-w-md relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <form onSubmit={handleSubmit} className="relative flex items-center glass-card rounded-2xl p-2 transition-all duration-300 hover:shadow-indigo-500/10 focus-within:ring-2 focus-within:ring-indigo-500/50">
            <input
              type="email"
              required
              placeholder="Enter your email for early access"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder-gray-500 focus:ring-0"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-white text-gray-950 font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2"
            >
              {submitted ? 'Joined!' : 'Notify Me'}
              {!submitted && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
          {submitted && (
            <p className="absolute -bottom-8 left-0 text-sm text-emerald-400 flex items-center gap-1 w-full justify-center">
              <span className="w-4 h-4 rounded-full bg-emerald-400/20 flex items-center justify-center">✓</span>
              You're on the list. We'll be in touch!
            </p>
          )}
        </div>

        {/* Floating Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full">
          {[
            { icon: <MessageSquare className="w-6 h-6 text-indigo-400" />, title: "Context Aware", desc: "Maintains deep context across your entire conversation history." },
            { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "Lightning Fast", desc: "Instantaneous responses powered by state-of-the-art models." },
            { icon: <Shield className="w-6 h-6 text-emerald-400" />, title: "Privacy First", desc: "Your data is encrypted and never used for training without consent." }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 ease-out z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-10 group-hover:bg-white/10 transition-colors"></div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform shadow-inner shadow-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="relative border-t border-white/5 bg-gray-950/50 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Askama AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
