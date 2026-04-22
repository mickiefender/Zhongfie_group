'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'DR. KYEI BAFFOUR',
    title: 'Founder',
    image: '/EXECUTIVE TEAM/Dr.Kyei.png',
    bio: 'Nana Kyei Baffour has an extensive and distinguished record in international trade, international Public Policy, Medicine and health enterprise development, politics and diplomacy. He is a negotiator, as a senior corporate Consultant in the Private sector. Nana is currently the Board Chairman of Zhongfei Groupe and a Seasonal and Contracted Consultant for Government of Ghana projects. He has many years been contracted by many African States as Consultant to projects ranging from Infrastructure, Funding, Negotiations and so on. He is popularly called &quot;Zhongfei&quot; among many Ghanaian politicians and Business people.',
  },
  {
    id: 2,
    name: 'HON. KOFI POKU-ADUSEI IGNATIUS',
    title: 'CHIEF EXECUTIVE OFFICER',
    image: '/EXECUTIVE TEAM/kofi poku Adusei.jpg',
    bio: 'Hon Kofi Adusei is a distinguished Stateman, Investment and Procurement Expert and a Politician. He was the Member of Parliament representing Bekwai Constituency of the Ashanti Region of Ghana in the 4 th Republic of Ghana. Honorable Kofi Poku Adusei has served as Chief Executive Officer (CEO) of Zhongfei Groupe since 2016 and for these years and through his experience as three times former Deputy Minister of Fisheries, Local Government and decentralization and Gender, Women and Children Affairs respectively, has brought to bear an excellent cooperation among related government to government businesses.',
  },
  {
    id: 3,
    name: 'SENATOR RICHARD B. DEVINE',
    title: 'Member, Governing and Advisory Board',
    image: '/EXECUTIVE TEAM/Senator Richard B. Devine.png',
    bio: 'Senator Richard B. Devine is a Liberian and a Member of the Governing and Advisory Board of Zhongfei Groupe. Senator Devine served as Chairman of the Board of Directors at the National Oil Company of Liberia. He is a Financial Manager, Public Administrator and politician with a combine experience of forty-one (41) years. Senator Devine has a wealth of experience in Public Service as well as in the Private Sector. He served as the Chairman of the Board of Directors at the National Port Authority from January 2018 to October 2019 and was a Senator of Bomi county, Liberia between 2006 and 2011.',
  },
  {
    id: 4,
    name: 'GAO WEI',
    title: 'Executive Partner',
    image: '/EXECUTIVE TEAM/Gao Wei.png',
    bio: 'Gao Wei is an Executive Partner and permanent Board Member of Zhongfei-Groupe. He has over two decades experience in foreign trade and investment management. He is a Seasonal Consultant for Ghana Government Projects and Chinese Investment Associations on Africa and Southern American Trade, investments and Market Visibility. As a team player, Gao has successfully been able to collaborate and integrate the knowledge and feedback from the Groupe\'s specialist functions, i.e. Government to Government projects, Exports, Imports/Local Purchasing, and Marketing & Sales for implementation of the Company\s growth opportunities.',
  },
  
  {
    id: 5,
    name: 'Oluwashola Adejoro',
    title: 'General Manager & Head of Trade and Market Feasibility(Nigeria, Cameroon and Benin)',
    image: '/EXECUTIVE TEAM/Shola.jpeg',
    bio: 'Adejoro Oluwashola is a seasoned entrepreneur and business leader with over 12 years of experience in retail and business management. He serves as a Member of the Governing Advisory Board of Zhongfei Groupe, where he contributes strategic insights and leadership. He is the Chief Executive Officer of De-Miropass Technologies Limited, Nigeria, a company established to support the achievement of the **United Nations Sustainable Development Goals (SDGs)—particularly Goals 1 (No Poverty), 2 (Zero Hunger), and 8 (Decent Work and Economic Growth). Through this platform, he has financially empowered over 800 individuals across Nigeria. Adejoro Oluwashola is also the CEO of Hot Eye Global Company, Abuja, an innovative educational organization that developed the Leaderpreneur Development Studies (LEDS) curriculum. This program is designed to equip students across Africa with entrepreneurial and leadership skills, impacting **over 1,000 students to date. In addition, he serves as the Vice Chairman of the African Centre for Global Entrepreneurial Leadership (ACGEL), Nigeria, and is the Founder of the Sustainable Development Goal Awareness Initiative (SDGsACT)—an NGO with active membership in over 17 African countries. In recognition of his contributions to entrepreneurship and leadership development, he was invited in 2019 to the Alibaba Business School, China, and is a Class 7 Alumnus of the eFounders Fellowship Programme, a joint initiative of Alibaba Business School and UNCTAD. He has received multiple accolades, including the Outstanding Entrepreneur Award in 2018 and 2019 in Nigeria. Adejoro Oluwashola is deeply passionate about **education, mentorship, and youth development, with a strong commitment to nurturing young minds into globally impactful leaders across Africa.',
  },
  
];

export default function TeamShowcase() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [fade, setFade] = useState(true);

  // Auto-advance every 2 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrevious = () => {
    setIsAutoPlay(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
      setFade(true);
    }, 300);
  };

  const handleThumbnailClick = (index: number) => {
    setIsAutoPlay(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100 flex flex-col">
     

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-8 md:py-16 gap-8 md:gap-16">
        {/* Left Section - Member Details */}
        <div className="flex-1 w-full lg:w-auto flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
           
          </div>

          {/* Name and Title */}
          <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-2 tracking-tight">
              {currentMember.name}
            </h1>
            <h2 className="text-lg md:text-xl text-gray-600 font-light mb-8">
              {currentMember.title}
            </h2>

            {/* Bio */}
            <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mb-8 font-light">
              {currentMember.bio}
            </p>

            {/* Right Arrow for Navigation */}
            <button
              onClick={handleNext}
              className="p-2 hover:bg-white/50 rounded-full transition-colors self-end md:hidden"
              aria-label="Next member"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Right Section - Featured Image */}
        <div className="flex-1 w-full lg:w-auto flex items-center justify-center">
          <div className={`relative transition-all duration-500 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img
              src={currentMember.image}
              alt={currentMember.name}
              className="w-full max-w-xs md:max-w-md h-auto rounded-3xl shadow-2xl object-cover"
              crossOrigin="anonymous"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-cyan-400/10 pointer-events-none" />
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="hidden md:flex p-3 hover:bg-white/50 rounded-full transition-colors ml-4"
            aria-label="Next member"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Bottom Thumbnail Navigation */}
      <div className="px-8 md:px-16 pb-12 flex items-center justify-center gap-6">
        <button
          onClick={handlePrevious}
          className="hidden sm:flex p-2 hover:bg-white/50 rounded-full transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Thumbnail Grid */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2">
          {teamMembers.map((member, index) => (
            <button
              key={member.id}
              onClick={() => handleThumbnailClick(index)}
              className={`flex-shrink-0 transition-all duration-300 transform hover:scale-110 ${
                index === currentIndex ? 'ring-2 ring-gray-900 scale-110' : 'opacity-70 hover:opacity-100'
              }`}
              aria-label={`Select ${member.name}`}
            >
              <div className="w-20 h-24 md:w-24 md:h-32 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <p className="text-center text-xs md:text-sm text-gray-700 font-medium mt-2">
                {member.name.split(' ')[0]}
              </p>
              <p className="text-center text-xs text-gray-600 leading-tight">
                {member.title.split(' ').slice(-2).join(' ')}
              </p>
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="hidden sm:flex p-2 hover:bg-white/50 rounded-full transition-colors"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Resume Auto Play Button */}
      {!isAutoPlay && (
        <div className="text-center pb-8">
          <button
            onClick={() => setIsAutoPlay(true)}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors underline"
          >
            Resume auto-rotation
          </button>
        </div>
      )}
    </section>
  );
}
