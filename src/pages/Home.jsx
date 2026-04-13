import FluidCursor from '@/components/FluidCursor';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';

const sectionConfig = [
  {
    key: 'Me',
    color: '#329696',
    glow: 'rgba(50,150,150,0.4)',
    icon: Laugh,
    sectionId: 'about',
    desc: 'Who I am',
  },
  {
    key: 'Projects',
    color: '#3E9858',
    glow: 'rgba(62,152,88,0.4)',
    icon: BriefcaseBusiness,
    sectionId: 'projects',
    desc: 'My work',
  },
    {
    key: 'Experience',
    color: '#B95F9D',
    glow: 'rgba(185,95,157,0.4)',
    icon: PartyPopper,
    sectionId: 'experience',
    desc: 'My journey',
  },
  {
    key: 'Skills',
    color: '#856ED9',
    glow: 'rgba(133,110,217,0.4)',
    icon: Layers,
    sectionId: 'skills',
    desc: 'Tech stack',
  },
  

  {
    key: 'Contact',
    color: '#C19433',
    glow: 'rgba(193,148,51,0.4)',
    icon: UserRoundSearch,
    sectionId: 'contact',
    desc: "Let's talk",
  },
  
];

export default function Home({ onNavigate }) {
  const handleCardClick = (sectionId) => {
    if (onNavigate) onNavigate(sectionId);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-24 md:pb-28 overflow-hidden">

      {/* blurred background name watermark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-white/5 to-transparent bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Ritesh
        </div>
      </div>

      {/* top badge + name */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="z-10 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
      >
        <div className="rounded-2xl bg-white/10 border border-white/10 p-3 shadow-lg backdrop-blur-lg mb-2">
          <img
            src="/logo-toukoum.svg"
            width={100}
            height={100}
            alt="Logo"
            className="w-6 md:w-8"
          />
        </div>
        <h2 className="text-slate-400 text-xl font-semibold md:text-2xl">
          Hey, I&apos;m Ritesh 👋
        </h2>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
          Full Stack AI Engineer
        </h1>
      </motion.div>



      {/* navigation cards */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
        className="z-10 mt-6 flex w-full flex-col items-center"
      >
        <p className="mb-4 text-xs font-medium tracking-widest text-slate-500 uppercase select-none">
          Explore my portfolio
        </p>

        <div className="grid w-full max-w-2xl grid-cols-5 gap-3">
          {sectionConfig.map(({ key, color, glow, icon: Icon, sectionId, desc }, i) => (
            <motion.button
              key={key}
              id={`nav-card-${key.toLowerCase()}`}
              onClick={() => handleCardClick(sectionId)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.45, ease: 'easeOut' }}
              whileHover={{
                scale: 1.07,
                y: -5,
                boxShadow: `0 8px 32px 0 ${glow}`,
              }}
              whileTap={{ scale: 0.96 }}
              className="group aspect-square w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer focus:outline-none hover:border-white/20 transition-colors duration-200"
              style={{ WebkitTapHighlightColor: 'transparent' }}
              aria-label={`Go to ${key} section`}
            >
              <div className="flex h-full flex-col items-center justify-center gap-1.5 px-1 py-4">
                <motion.span
                  whileHover={{ rotate: [0, -14, 14, 0] }}
                  transition={{ duration: 0.4 }}
                  style={{ display: 'inline-flex' }}
                >
                  <Icon size={22} strokeWidth={2} color={color} />
                </motion.span>
                <span className="text-xs font-semibold sm:text-sm" style={{ color }}>
                  {key}
                </span>
                <span className="hidden text-[10px] text-slate-500 sm:block leading-tight text-center">
                  {desc}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <FluidCursor />
    </div>
  );
}
