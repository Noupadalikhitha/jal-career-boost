import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Trophy, Star, Sparkles, Award, Target } from "lucide-react";

const EventPoster = () => {
  return (
    <div className="min-h-screen bg-gradient-primary relative overflow-hidden flex items-center justify-center p-4">
      {/* Ocean Wave Animations */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <div className="absolute bottom-0 left-0 w-[200%] h-8 bg-gradient-to-r from-poster-primary via-poster-secondary to-poster-accent rounded-full animate-wave" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-4 left-0 w-[200%] h-6 bg-gradient-to-r from-poster-secondary via-poster-accent to-poster-primary rounded-full animate-wave-reverse" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute bottom-8 left-0 w-[200%] h-4 bg-gradient-to-r from-poster-accent via-poster-primary to-poster-secondary rounded-full animate-wave" style={{ animationDelay: '-10s' }}></div>
      </div>
      
      {/* Floating Sea Elements */}
      <div className="absolute top-20 right-20 text-4xl animate-float-fish" style={{ animationDelay: '0s' }}>🐠</div>
      <div className="absolute top-40 left-16 text-3xl animate-float-fish" style={{ animationDelay: '2s' }}>🐟</div>
      <div className="absolute bottom-40 right-32 text-5xl animate-float-fish" style={{ animationDelay: '4s' }}>🐋</div>
      <div className="absolute top-60 right-16 text-2xl animate-float-fish" style={{ animationDelay: '1s' }}>🦈</div>
      
      {/* Rising Bubbles */}
      <div className="absolute left-10 bottom-0 w-3 h-3 bg-white/30 rounded-full animate-bubble-rise" style={{ animationDelay: '0s' }}></div>
      <div className="absolute left-20 bottom-0 w-2 h-2 bg-poster-accent/40 rounded-full animate-bubble-rise" style={{ animationDelay: '2s' }}></div>
      <div className="absolute right-32 bottom-0 w-4 h-4 bg-poster-primary/30 rounded-full animate-bubble-rise" style={{ animationDelay: '4s' }}></div>
      <div className="absolute right-16 bottom-0 w-2 h-2 bg-white/40 rounded-full animate-bubble-rise" style={{ animationDelay: '6s' }}></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-poster-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-poster-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-poster-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <Card className="w-full max-w-5xl bg-gradient-card backdrop-blur-2xl border-white/30 shadow-elegant overflow-hidden relative z-10 animate-scale-in">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-poster-primary/20 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-poster-secondary/20 to-transparent rounded-tr-full"></div>
        
        {/* Header */}
        <div className="relative bg-white/10 p-8 text-center border-b border-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          <div className="relative z-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-poster-accent animate-pulse-glow" />
              <Badge variant="secondary" className="bg-poster-accent/90 text-poster-dark font-bold text-sm px-6 py-2 shadow-glow font-mono tracking-wider">
                JAL HOUSE EXCLUSIVE
              </Badge>
              <Sparkles className="w-5 h-5 text-poster-accent animate-pulse-glow" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-gradient-text bg-clip-text mb-4 tracking-tight leading-tight">
              Career Guidance
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 tracking-wide">
              Session
            </h2>
            <div className="flex items-center justify-center gap-3 text-xl text-white/90 font-medium">
              <Target className="w-6 h-6 text-poster-primary" />
              <span className="font-sans">Exclusively for 2nd Year Students</span>
              <Target className="w-6 h-6 text-poster-primary" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10 relative">
          {/* Event Details Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-10">
            {/* Left Column - Event Info */}
            <div className="space-y-8 animate-slide-up">
              {/* Date & Time */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/20 shadow-inner backdrop-blur-sm">
                <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-poster-accent" />
                  Event Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white group hover:text-poster-primary transition-colors duration-300">
                    <Calendar className="w-7 h-7 text-poster-accent group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-lg font-semibold">Wednesday</p>
                      <p className="text-sm text-white/70 font-mono">This Week</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white group hover:text-poster-primary transition-colors duration-300">
                    <Clock className="w-7 h-7 text-poster-accent group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-lg font-semibold">4:00 - 5:00 PM</p>
                      <p className="text-sm text-white/70 font-mono">60 Minutes</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-white group hover:text-poster-primary transition-colors duration-300">
                    <Users className="w-7 h-7 text-poster-accent group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-lg font-semibold">2nd Year Students</p>
                      <p className="text-sm text-white/70 font-mono">Limited Seats</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agenda */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 shadow-inner backdrop-blur-sm">
                <h3 className="text-2xl font-serif font-bold text-white mb-6 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-poster-accent" />
                  Session Agenda
                </h3>
                <div className="space-y-4">
                  {[
                    { text: "Available Career Options", icon: "🎯" },
                    { text: "Resume Building & Review", icon: "📄" },
                    { text: "ATS Points Based Awards", icon: "🏆" },
                    { text: "Interactive Q&A Session", icon: "💬" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 text-white/90 group hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/5"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-poster-accent/20 rounded-full text-lg group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <span className="font-medium text-lg">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Speakers */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">
                  Our Expert Speakers
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-poster-accent fill-poster-accent" />
                  <p className="text-poster-primary font-medium">Industry Professionals</p>
                  <Star className="w-5 h-5 text-poster-accent fill-poster-accent" />
                </div>
              </div>
              
              {/* Speaker 1 */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 text-center shadow-inner backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 border-poster-accent shadow-glow group-hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300">
                    <img 
                      src="/lovable-uploads/d2ac6665-1df9-4b56-89aa-6246ae4fb89c.png"
                      alt="Ram Pothamsetti"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-poster-accent rounded-full flex items-center justify-center shadow-lg">
                    <Trophy className="w-4 h-4 text-poster-dark" />
                  </div>
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-2">Ram Pothamsetti</h4>
                <p className="text-poster-accent font-semibold text-lg mb-2">Software Engineer</p>
                <p className="text-white/70 font-mono text-sm">Tech Professional • Mentor</p>
              </div>

              {/* Speaker 2 */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 text-center shadow-inner backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 border-poster-secondary shadow-glow group-hover:shadow-[0_0_40px_rgba(99,179,237,0.6)] transition-all duration-300">
                    <img 
                      src="/lovable-uploads/b1426715-73aa-4b2d-967b-a3f1dce34cd5.png"
                      alt="Swapanth Vakapalli"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-poster-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-2">Swapanth Vakapalli</h4>
                <p className="text-poster-secondary font-semibold text-lg mb-2">Software Engineer</p>
                <p className="text-white/70 font-mono text-sm">Tech Professional • Coach</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative bg-gradient-to-r from-poster-primary via-poster-secondary to-poster-accent rounded-3xl p-8 text-center shadow-elegant overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold text-white mb-3 flex items-center justify-center gap-3">
                <Sparkles className="w-8 h-8 animate-pulse-glow" />
                Don't Miss This Golden Opportunity!
                <Sparkles className="w-8 h-8 animate-pulse-glow" />
              </h3>
              <p className="text-white/95 text-xl font-medium mb-4">
                Transform your career trajectory with expert guidance
              </p>
              <p className="text-white/80 font-mono text-sm">
                Limited seats • Exclusive for JAL House 2nd Year students
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white/5 p-6 text-center border-t border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <p className="text-white/90 font-semibold text-lg relative z-10 font-serif">
            JAL House Career Development Program
          </p>
          <p className="text-white/60 font-mono text-sm mt-1">
            Building Tomorrow's Leaders Today
          </p>
        </div>
      </Card>
    </div>
  );
};

export default EventPoster;