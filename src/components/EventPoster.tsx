import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Trophy, FileText, MessageCircle } from "lucide-react";

const EventPoster = () => {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-gradient-card backdrop-blur-lg border-white/20 shadow-elegant overflow-hidden">
        {/* Header */}
        <div className="bg-white/10 p-6 text-center border-b border-white/20">
          <div className="inline-block">
            <Badge variant="secondary" className="bg-poster-accent text-black font-bold text-sm px-4 py-2 mb-4">
              JAL HOUSE EXCLUSIVE
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Career Guidance Session
          </h1>
          <p className="text-xl text-white/90 font-medium">
            For 2nd Year Students Only
          </p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Event Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <Calendar className="w-6 h-6 text-poster-accent" />
                <span className="text-lg font-medium">Wednesday</span>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <Clock className="w-6 h-6 text-poster-accent" />
                <span className="text-lg font-medium">4:00 - 5:00 PM</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <Users className="w-6 h-6 text-poster-accent" />
                <span className="text-lg font-medium">2nd Year Students</span>
              </div>

              {/* Agenda */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-poster-accent" />
                  Session Agenda
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-poster-accent rounded-full"></div>
                    <span>Available Career Options</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-poster-accent rounded-full"></div>
                    <span>Resume Building & Review</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-poster-accent rounded-full"></div>
                    <span>ATS Points Based Awards</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/90">
                    <div className="w-2 h-2 bg-poster-accent rounded-full"></div>
                    <span>Q&A Session</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Speakers */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                Our Expert Speakers
              </h3>
              
              {/* Speaker 1 */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-poster-accent shadow-glow">
                  <img 
                    src="/lovable-uploads/55d8cd3c-2104-4922-a4fe-a620a5761e71.png"
                    alt="Ram Pothamsetti"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Ram Pothamsetti</h4>
                <p className="text-poster-accent font-medium">Career Guidance Expert</p>
              </div>

              {/* Speaker 2 */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-poster-secondary shadow-glow">
                  <img 
                    src="/src/assets/speaker-swapanth.jpg"
                    alt="Swapanth Vakapalli"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Swapanth Vakapalli</h4>
                <p className="text-poster-secondary font-medium">Resume & ATS Specialist</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-poster-primary to-poster-secondary rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Don't Miss This Opportunity!
            </h3>
            <p className="text-white/90 text-lg">
              Get expert guidance on career planning and resume optimization
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white/5 p-4 text-center border-t border-white/20">
          <p className="text-white/80 font-medium">
            JAL House Career Development Program
          </p>
        </div>
      </Card>
    </div>
  );
};

export default EventPoster;