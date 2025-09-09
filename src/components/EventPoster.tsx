import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users, Trophy, Star, Award, Target, Gift } from "lucide-react";
import React from "react";

// Add CSS directly within the component for a single-file solution
const MarioStyles = `
  @keyframes run-across-screen {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(100vw);
    }
  }

  .mario-container {
    position: relative;
    width: 100%;
    height: 250px; /* Increased height of the container */
    overflow: hidden;
  }

  .mario-runner {
    /* Use a fixed height and let the width adjust to maintain aspect ratio */
    height: 250px; /* Increased character size */
    position: absolute;
    bottom: 0;
    left: 0;
    
    animation: run-across-screen 10s linear infinite;
  }
`;

const EventPoster = () => {
  return (
    <div className="min-h-screen bg-[#FFC567] relative overflow-hidden flex items-center justify-center p-6 font-sans">
      {/* Inject the styles into the document head */}
      <style>{MarioStyles}</style>

      {/* Background with retro style shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Decorative Shapes */}
      <div className="absolute top-12 left-8 w-36 h-36 bg-[#FB7DA8] rotate-12 border-4 border-black"></div>
      <div className="absolute bottom-20 right-12 w-32 h-32 bg-[#FD5A46] rounded-full border-4 border-black"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#552CB7] rotate-6 border-4 border-black"></div>
      <div className="absolute bottom-28 left-1/4 w-20 h-20 bg-[#00995E] rounded-full border-4 border-black"></div>
      <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-[#058CD7] rotate-45 border-4 border-black"></div>

      <Card className="w-full max-w-5xl bg-white border-4 border-black shadow-[10px_10px_0_#000] relative z-10 rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#FD5A46] text-center p-10 border-b-4 border-black">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight uppercase drop-shadow-[4px_4px_0_#fff]">
            Career Guidance
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 drop-shadow-[3px_3px_0_#552CB7]">
            Session
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3 text-lg md:text-xl text-black font-bold">
            <Target className="w-6 h-6" /> Exclusively for 2nd Year Students <Target className="w-6 h-6" />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 p-10 bg-[#FFFDF5]">
          {/* Left Column - Event Info */}
          <div className="space-y-8">
            <div className="bg-[#FB7DA8] border-4 border-black rounded-xl p-8">
              <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-2 text-black uppercase">
                <Award className="w-6 h-6" /> Event Details
              </h3>
              <div className="space-y-4 text-black font-semibold">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span>Wednesday • 10/09/2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  <span>4:00 - 5:00 PM • 60 Minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  <span>2nd Year Students • Limited Seats</span>
                </div>
              </div>
            </div>

            <div className="bg-[#552CB7] border-4 border-black rounded-xl p-8 text-white">
              <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-2 uppercase">
                <Trophy className="w-6 h-6" /> Session Agenda
              </h3>
              <ul className="space-y-3 font-semibold">
                <li>🎯 Available Career Options</li>
                <li>📄 Resume Building & Review</li>
                <li>🏆 ATS Points Based Awards</li>
                <li>💬 Interactive Q&A Session</li>
              </ul>
            </div>

            {/* New Box - What You'll Gain */}
            <div className="bg-[#26CC00] border-4 border-black rounded-xl p-8 text-white">
              <h3 className="text-2xl font-extrabold mb-4 flex items-center gap-2 uppercase">
                <Gift className="w-6 h-6" /> What You'll Gain
              </h3>
              <ul className="space-y-3 font-semibold">
                <li>✅ Clarity on career pathways</li>
                <li>✅ Resume tips to stand out</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Speakers */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-extrabold text-black mb-3 uppercase drop-shadow-[3px_3px_0_#FFC567]">
                Our Expert Speakers
              </h3>
              <div className="flex items-center justify-center gap-2 text-[#FD5A46] font-extrabold">
                <Star className="w-5 h-5 fill-current" /> Industry Professionals <Star className="w-5 h-5 fill-current" />
              </div>
            </div>

            {[{
              name: "Ram Pothamsetti",
              role: "Software Engineer",
              desc: "Industry Veteran • Mentor",
              img: "/lovable-uploads/5.png",
              color: "bg-[#058CD7]"
            }, {
              name: "Swapanth Vakapalli",
              role: "Software Engineer",
              desc: "Tech Professional • Coach",
              img: "/lovable-uploads/3.png",
              color: "bg-[#00995E]"
            }].map((speaker, i) => (
              <div key={i} className={`border-4 border-black rounded-xl p-8 text-center ${speaker.color}`}>
                <div className="w-28 h-28 mx-auto mb-4 overflow-hidden rounded-full border-4 border-black">
                  <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-extrabold text-white drop-shadow-[2px_2px_0_#000]">{speaker.name}</h4>
                <p className="text-white text-lg font-bold">{speaker.role}</p>
                <p className="text-white/90 text-sm">{speaker.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mario Runner - Placed at the bottom */}
        <div className="mario-container">
          <img
            className="mario-runner"
            src="/lovable-uploads/mario-running.gif"
            alt="Mario running animation"
          />
        </div>

        {/* Call to Action */}
        <div className="bg-[#FD5A46] border-t-4 border-black text-center p-12">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-3 uppercase drop-shadow-[4px_4px_0_#fff]">
            Don't Miss This Golden Opportunity!
          </h3>
          <p className="text-white text-lg font-bold">
            Transform your career trajectory with expert guidance
          </p>
          <p className="text-black text-sm font-extrabold mt-2">
            Limited seats • Exclusive for JAL House 2nd Year students
          </p>
        </div>

        {/* Footer */}
        <div className="bg-[#552CB7] border-t-4 border-black text-center p-6">
          <p className="text-white font-extrabold text-lg">
            JAL House Career Development Program
          </p>
          <p className="text-[#FFC567] text-sm font-semibold">
            Building Tomorrow's Leaders Today
          </p>
        </div>
      </Card>
    </div>
  );
};

export default EventPoster;
