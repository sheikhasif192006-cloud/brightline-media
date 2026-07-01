'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { StaggerContainer, StaggerItem } from '../components/Stagger';
import { PortfolioModal } from '../components/PortfolioModal';

interface ProjectData {
  category: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  strategy: string;
  approach: string[];
  results: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
  service: string;
  videos: string[];
}

export const PortfolioSection = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const categories = ['ALL', 'YOUTUBE', 'REELS', 'PODCAST', 'ADS'];

  const projects = [
    {
      title: 'Long Form YT Video',
      category: 'YOUTUBE',
      scope: 'Retention Editing / Content Strategy',
      desc: 'Full content system for a finance creator. Grew subscribers from 12K to 85K in 4 months with retention-optimized edits.',
      glowColor: 'orange' as const,
      colorGrad: 'from-orange-900/40 via-amber-950/20 to-black',
      cyberNo: 'REF_01',
      videos: ['/videos/portfolio-01.mp4'],
      modal: {
        category: 'YOUTUBE',
        title: 'Long Form YT Video',
        description: 'Full content system for a finance creator. Grew subscribers from 12K to 85K in 4 months with retention-optimized edits.',
        stats: [{ label: 'Subscribers', value: '12K→85K' }, { label: 'Timeline', value: '4 Months' }],
        strategy: 'We developed a comprehensive content strategy focusing on retention-optimized editing, thumbnail design, and algorithmic pacing. Each video was structured to maximize AVD (Average View Duration) and drive subscriber growth through strategic CTAs and series formatting.',
        approach: [
          'Analyzed top-performing finance channels to identify content patterns',
          'Restructured video pacing for 70%+ retention rate',
          'Implemented custom motion graphics package for brand consistency',
          'Optimized upload schedule based on audience analytics',
        ],
        results: [
          { label: 'Subscriber Growth', value: '73K+' },
          { label: 'Avg. Retention', value: '72%' },
          { label: 'Monthly Views', value: '2.5M+' },
          { label: 'Revenue Impact', value: '4x' },
        ],
        testimonial: {
          quote: 'Brightline transformed my channel. The retention editing alone doubled my watch time. Best investment I have made for my brand.',
          author: 'Alex Rivera',
          role: 'Finance Creator — 85K Subscribers',
        },
        service: 'YouTube Growth System',
        videos: ['/videos/portfolio-01.mp4'],
      },
    },
    {
      title: 'Podcast Clips Edits',
      category: 'PODCAST',
      scope: 'Podcast Editing / Clip Repurposing',
      desc: 'Turned a 60-min podcast into 15 viral-ready short clips. 2M+ combined views across Instagram and TikTok within 2 weeks.',
      glowColor: 'orange' as const,
      colorGrad: 'from-orange-900/40 via-amber-950/20 to-black',
      cyberNo: 'REF_02',
      videos: ['/videos/portfolio-02.mp4', '/videos/portfolio-02a.mp4', '/videos/portfolio-02b.mp4'],
      modal: {
        category: 'PODCAST',
        title: 'Podcast Clips Edits',
        description: 'Turned a 60-min podcast into 15 viral-ready short clips. 2M+ combined views across Instagram and TikTok within 2 weeks.',
        stats: [{ label: 'Views', value: '2M+' }, { label: 'Timeline', value: '2 Weeks' }],
        strategy: 'We identified the highest-impact moments from each episode and transformed them into platform-native short-form content optimized for viral distribution. Each clip was crafted with captions, hook optimization, and trend-aware formatting.',
        approach: [
          'Flagged 15+ clipable moments per 60-min episode',
          'Optimized first 3 seconds for scroll-stopping hooks',
          'Added platform-specific captions and text overlays',
          'Posted on optimal timing based on audience analytics',
        ],
        results: [
          { label: 'Total Views', value: '2M+' },
          { label: 'Engagement Rate', value: '8.5%' },
          { label: 'New Followers', value: '15K+' },
          { label: 'Clips Produced', value: '15/Week' },
        ],
        testimonial: {
          quote: 'They turned my long podcast into a content machine. The clip repurposing strategy brought in more followers in 2 weeks than I got in 6 months.',
          author: 'Maya Chen',
          role: 'Podcast Host — 200K+ Downloads',
        },
        service: 'Podcast Repurposing System',
        videos: ['/videos/portfolio-02.mp4', '/videos/portfolio-02a.mp4', '/videos/portfolio-02b.mp4'],
      },
    },
    {
      title: 'Short Form Reels & Shorts Edit',
      category: 'REELS',
      scope: 'Reels & Shorts Editing / Trend Adaptation',
      desc: 'Daily short-form content for a lifestyle creator. 500K+ followers gained in 3 months with trend-aware fast-paced edits.',
      glowColor: 'orange' as const,
      colorGrad: 'from-orange-900/40 via-amber-950/20 to-black',
      cyberNo: 'REF_03',
      videos: ['/videos/portfolio-03.mp4', '/videos/portfolio-03a.mp4', '/videos/portfolio-03b.mp4', '/videos/portfolio-03c.mp4'],
      modal: {
        category: 'REELS',
        title: 'Short Form Reels & Shorts Edit',
        description: 'Daily short-form content for a lifestyle creator. 500K+ followers gained in 3 months with trend-aware fast-paced edits.',
        stats: [{ label: 'Followers', value: '500K+' }, { label: 'Timeline', value: '3 Months' }],
        strategy: 'Daily content production with trend-aware editing. We monitored trending sounds, formats, and challenges daily to keep content fresh and algorithm-friendly.',
        approach: [
          'Daily trend monitoring and rapid content adaptation',
          'Fast-paced editing with 1.5s average cut interval',
          'Trending sound and effect integration',
          'Optimized posting cadence for maximum reach',
        ],
        results: [
          { label: 'New Followers', value: '500K+' },
          { label: 'Total Views', value: '45M+' },
          { label: 'Avg. Plays/Video', value: '85K' },
          { label: 'Engagement Rate', value: '12%' },
        ],
        testimonial: {
          quote: 'Brightline kept up with every trend and made sure my content never fell behind. 500K followers in 3 months is insane.',
          author: 'Priya Sharma',
          role: 'Lifestyle Creator — 850K Followers',
        },
        service: 'TikTok Growth System',
        videos: ['/videos/portfolio-03.mp4', '/videos/portfolio-03a.mp4', '/videos/portfolio-03b.mp4', '/videos/portfolio-03c.mp4'],
      },
    },
    {
      title: 'Ads Edit',
      category: 'ADS',
      scope: 'Facebook & YouTube Ads / Hook Strategy',
      desc: 'High-converting ad suite for a D2C brand. 4.5x ROAS with scroll-stopping hooks and platform-native formatting.',
      glowColor: 'orange' as const,
      colorGrad: 'from-orange-900/40 via-amber-950/20 to-black',
      cyberNo: 'REF_04',
      videos: ['/videos/portfolio-04.mp4'],
      modal: {
        category: 'ADS',
        title: 'Ads Edit',
        description: 'High-converting ad suite for a D2C brand. 4.5x ROAS with scroll-stopping hooks and platform-native formatting.',
        stats: [{ label: 'ROAS', value: '4.5x' }, { label: 'Platforms', value: '3' }],
        strategy: 'We created a multi-platform ad suite combining short-form video ads for Facebook, YouTube, and Instagram. Each ad was tailored to platform-specific best practices while maintaining consistent brand messaging.',
        approach: [
          'Created 10+ ad variations for A/B testing',
          'Optimized hook delivery within first 1.5 seconds',
          'Platform-native formatting for Facebook, YouTube, Instagram',
          'Iterative thumbstop score improvement cycle',
        ],
        results: [
          { label: 'ROAS', value: '4.5x' },
          { label: 'CTR', value: '3.2%' },
          { label: 'Conversion Rate', value: '6.8%' },
          { label: 'Ad Reach', value: '1.2M+' },
        ],
        testimonial: {
          quote: 'The ad creative Brightline produced outperformed everything we had done in-house. 4.5x ROAS speaks for itself.',
          author: 'James Park',
          role: 'D2C Brand Founder',
        },
        service: 'Ad Creative Production',
        videos: ['/videos/portfolio-04.mp4'],
      },
    },
  ];

  const filteredProjects =
    filter === 'ALL' ? projects : projects.filter((p) => p.category === filter);

  const handleFilterKey = (e: React.KeyboardEvent, cat: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFilter(cat);
    }
  };

  const PortfolioVideos = ({ srcs }: { srcs: string[] }) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);
    const isMulti = srcs.length > 1;
    const isFirstRender = useRef(true);
    const hasAutoPlayed = useRef(false);

    const curSrc = srcs[currentIdx] || srcs[0];

    const play = useCallback(() => {
      const v = videoRef.current;
      if (!v) return;
      isFirstRender.current = false;
      hasAutoPlayed.current = true;
      v.muted = true;
      v.currentTime = 0;
      v.play().then(() => setPlaying(true)).catch(() => {});
    }, []);

    const pause = useCallback(() => {
      const v = videoRef.current;
      if (!v) return;
      v.pause();
      setPlaying(false);
    }, []);

    const toggle = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      const v = videoRef.current;
      if (!v) return;
      if (playing) { v.pause(); setPlaying(false); }
      else { hasAutoPlayed.current = true; v.muted = true; v.currentTime = 0; v.play().then(() => setPlaying(true)).catch(() => {}); }
    }, [playing]);

    useEffect(() => {
      if (isFirstRender.current) return;
      hasAutoPlayed.current = true;
      const v = videoRef.current;
      if (!v) return;
      v.muted = true;
      v.currentTime = 0;
      v.play().then(() => setPlaying(true)).catch(() => {});
    }, [currentIdx]);

    const goNext = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      if (currentIdx < srcs.length - 1) setCurrentIdx(prev => prev + 1);
    }, [currentIdx, srcs.length]);

    const goPrev = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      if (currentIdx > 0) setCurrentIdx(prev => prev - 1);
    }, [currentIdx]);

    return (
          <div className="absolute inset-0" onMouseEnter={play} onMouseLeave={pause} onClick={toggle}>
            <video key={currentIdx} ref={videoRef} className="w-full h-full object-contain" loop playsInline onPause={() => setPlaying(false)} onPlay={(e) => { if (isFirstRender.current) { isFirstRender.current = false; e.currentTarget.pause(); setPlaying(false); } else { setPlaying(true); } }}>
              <source src={curSrc} type="video/mp4" />
            </video>
            {!playing && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="w-16 h-16 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center group-hover:border-cyber-orange group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,106,1,0.5)] transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <svg className="w-5 h-5 text-white ml-0.5 group-hover:text-cyber-orange transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
        {isMulti && <>
          {currentIdx > 0 && (
            <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-cyber-orange hover:border-cyber-orange/40 transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] z-20" aria-label="Previous video">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          {currentIdx < srcs.length - 1 && (
            <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-cyber-orange hover:border-cyber-orange/40 transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] z-20" aria-label="Next video">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none">
            {srcs.map((_, i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${i === currentIdx ? 'bg-cyber-orange w-3' : 'bg-white/20'}`} />
            ))}
          </div>
        </>}
      </div>
    );
  };

  return (
    <section id="work" className="relative section-padding z-10">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <div className="section-container">
        <SectionHeader
          number="04"
          category="showcase"
          title="Creative Work That Delivers"
          description="Real results from real creators. Each project is engineered for performance, reach, and brand growth."
        />

        <Reveal direction="up" distance={20} delay={0.2} duration={0.6}>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 border-b border-white/5 pb-4 sm:pb-6" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              aria-controls="projects-grid"
              onClick={() => setFilter(cat)}
              onKeyDown={(e) => handleFilterKey(e, cat)}
              className={`
                px-3 sm:px-5 py-1.5 sm:py-2 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase                  transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] relative border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange
                ${filter === cat
                  ? 'border-cyber-orange text-cyber-orange bg-cyber-orange/5 shadow-[0_0_12px_rgba(255,106,1,0.15)]'
                  : 'border-white/5 text-slate-400 hover:text-white hover:border-white/10'}
              `.trim()}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <StaggerContainer key={filter} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.1}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <StaggerItem key={project.title} direction="up" distance={50}>
              <Card
                title={project.title}
                subtitle={`${project.category} // ${project.cyberNo}`}
                glowColor={project.glowColor}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.modal)}
              >
                <div className="flex flex-col gap-6">
                  <div
                    className={`aspect-video w-full rounded-md bg-gradient-to-br ${project.colorGrad} border border-white/5 relative flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" aria-hidden="true" />
                    <span className="absolute top-2 left-2 font-mono text-[8px] text-white/25" aria-hidden="true">
                      {project.cyberNo} {'//'} TARGET.SYS
                    </span>
                    <span className="absolute bottom-2 right-2 font-mono text-[8px] text-white/25" aria-hidden="true">
                      LOCK_READY
                    </span>
                    <PortfolioVideos srcs={project.videos} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyber-orange tracking-widest block mb-1">
                      {project.scope}
                    </span>
                    <p className="text-slate-400 font-light text-sm leading-relaxed mt-2">{project.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <Button variant="orange" size="sm" ariaLabel={`Inspect case study for ${project.title}`}>
                      Inspect Case Study
                      <span className="inline-block transition-transform duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-1">
                        {' '}
                        &rarr;
                      </span>
                    </Button>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <span className="font-mono text-[10px] uppercase text-slate-500 tracking-[0.25em]">
              NO PROJECTS FOUND FOR &quot;{filter}&quot;
            </span>
          </div>
        )}
        </StaggerContainer>
      </div>

      <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default PortfolioSection;
