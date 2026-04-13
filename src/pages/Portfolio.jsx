import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  TrendingUp,
  Target,
  Braces,
  Zap,
} from 'lucide-react';
/* ── data ──────────────────────────────────────────────────── */
const projects = [
  {
    title: 'HireHub – Job Portal',
    desc: 'Built a full-stack job portal for job applications and recruiter management. Developed secure REST APIs with JWT authentication, integrated MongoDB, and deployed on Vercel with Cloudinary media uploads.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Clerk'],
    color: 'from-cyan-500 to-blue-600',
    accent: '#06b6d4',
    github: 'https://github.com/ritesh-saini-16/job-portal-project',
    live: 'https://hirehub-rish.vercel.app/',
  },
  {
    title: 'SMS Spam Detector',
    desc: 'An SMS spam detection system utilizing Naive Bayes and Support Vector Machine (SVM). Performed data preprocessing, model training, and rigorous performance evaluation for text classification.',
    tags: ['Machine Learning', 'Python', 'Naive Bayes', 'SVM', 'Data Processing'],
    color: 'from-pink-500 to-purple-600',
    accent: '#ec4899',
    github: 'https://github.com/ritesh-saini-16/SMS-spam-Classifier',
    live: null,
  },
  {
    title: 'Sorting Visualizer',
    desc: 'An interactive sorting visualizer demonstrating the working, efficiency, and behavior of common sorting algorithms through real-time browser animations.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Algorithms'],
    color: 'from-purple-500 to-pink-600',
    accent: '#a855f7',
    github: 'https://github.com/ritesh-saini-16/sorting-visualizer',
    live: 'https://ritesh-saini-16.github.io/sorting-visualizer/',
  },
];

const experience = [
  {
    role: 'Web Developer',
    company: 'DeftLynx Pvt Ltd',
    period: 'Dec 2025 – Present',
    desc: 'Built and deployed the DeftLynx production web platform end-to-end. Developed scalable, responsive interfaces and managed hosting, domain, SEO setup, and live deployment.',
    tags: ['Web Development', 'SEO', 'Deployment', 'Responsive Design'],
    icon: <Brain size={20} />,
    side: 'left',
    color: '#a78bfa',
  },
  {
    role: 'Web Development Intern',
    company: 'AD Infocom Systems',
    period: 'June 2025 – July 2025',
    desc: 'Developed a responsive restaurant website using modern web technologies. Followed industry best practices to ensure clean, maintainable, and scalable code architecture.',
    tags: ['Frontend', 'Responsive UI', 'Best Practices'],
    icon: <TrendingUp size={20} />,
    side: 'right',
    color: '#34d399',
  },
  {
    role: 'B.Tech in Electrical Engineering',
    company: 'NIT Jalandhar',
    period: '2023 – 2027',
    desc: 'I am currently pursuing a Bachelor of Technology in Electrical Engineering from NIT Jalandhar, maintaining a CGPA of 8.11.',
    icon: <GraduationCap size={20} />,
    side: 'left',
    color: '#fb923c',
  },
];

const skills = [
  {
    category: 'FULL-STACK DEVELOPMENT',
    icon: <Braces size={20} className="text-slate-300" />,
    desc: 'Building scalable full-stack web applications with modern JavaScript frameworks. Focused on clean architecture, performance, and real-world usability.',
    items: ['React.js', 'Node.js / Express', 'MongoDB', 'Tailwind CSS', 'MySQL']
  },
  {
    category: 'AI',
    icon: <Target size={20} className="text-slate-300" />,
    desc: 'Exploring intelligent systems, deep learning, AI orchestration. Passionate about combining software engineering with AI to build impactful solutions.',
    items: ['Python', 'Machine Learning', 'Deep Learning', 'NLP']
  },
  {
    category: 'ENGINEERING & PROBLEM SOLVING',
    icon: <Zap size={20} className="text-orange-500 fill-orange-500" />,
    desc: 'Engineering student with strong problem-solving skills and system-level thinking. Interested in scalable software, optimization, and tech innovation.',
    items: ['DSA & Problem Solving', 'System Design Basics', 'Embedded Systems', 'Git & GitHub']
  }
];

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

/* ── helpers ────────────────────────────────────────────────── */
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl ${className}`}>
      {children}
    </div>
  );
}


const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' },
  }),
};

/* ── Floating Nav ───────────────────────────────────────────── */
function FloatingNav({ activeSection }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-white/15 bg-[#080d1a]/80 px-3 py-2 shadow-2xl backdrop-blur-xl"
    >
      {navLinks.map(({ label, id }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${activeSection === id
              ? 'bg-white/15 text-white'
              : 'text-slate-400 hover:text-white hover:bg-white/8'
            }`}
        >
          {label}
        </button>
      ))}
    </motion.nav>
  );
}

/* ── Divider ────────────────────────────────────────────────── */
function SectionDivider({ gradient = 'from-purple-600/0 via-purple-600/40 to-purple-600/0' }) {
  return (
    <div className={`mx-auto my-2 h-px w-3/4 max-w-xl bg-gradient-to-r ${gradient}`} />
  );
}

/* ── Main ──────────────────────────────────────────────────── */
export default function Portfolio() {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [formStatus, setFormStatus] = useState('idle');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    formData.append("subject", "New Contact from Portfolio!");

    const name = formData.get('name');
    const message = formData.get('message');
    if (!name || !message) return;

    setFormStatus('loading');

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();

      if (data.success) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (err) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  /* show floating nav once user scrolls past hero */
  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setShowNav(window.scrollY > heroHeight * 0.5);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* track active section via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="relative text-white overflow-x-hidden">
      {/* floating nav */}
      {showNav && <FloatingNav activeSection={activeSection} />}

      {/* ── ABOUT ──────────────────────────────────────────────── */}
      <section id="about" className="relative z-10 w-full lg:w-[80%] max-w-none mx-auto px-6 pt-28 pb-20 scroll-mt-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-cyan-500/50" />
          <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">01 — About</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-cyan-500/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-14"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative w-44 h-44">
              {/* glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 blur-md opacity-40 scale-110" />
              <div className="relative w-full h-full rounded-full border-2 border-purple-500/60 overflow-hidden shadow-2xl shadow-purple-900/50 bg-gradient-to-br from-cyan-800 to-purple-900">
                <img src="/rish.jpeg" alt="Ritesh Saini" className="w-full h-full object-cover object-center scale-150 translate-y-3" draggable="false" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <GlassCard className="p-8">
              <p className="text-slate-300 leading-relaxed text-base mb-4">
                I&apos;m a <span className="text-pink-400 font-semibold">Full Stack Developer</span> and Electrical Engineering student at NIT Jalandhar, passionate about building scalable digital products that blend beautiful UI with powerful backend systems.
              </p>
              <p className="text-slate-400 leading-relaxed text-base mb-4">
                I specialize in <span className="text-cyan-400 font-semibold">React.js, Node.js, and modern web technologies</span>, crafting production-ready applications from scratch — from idea to deployment. I&apos;ve built full-stack platforms, optimized performance, and handled real-world systems that deliver seamless user experiences.
              </p>
              <p className="text-slate-400 leading-relaxed text-base mb-4">
                With <span className="text-pink-400 font-semibold">450+ DSA problems solved</span>, I bring strong problem-solving skills and write clean, efficient, and maintainable code. Alongside this, I&apos;m actively diving into <span className="text-cyan-400 font-semibold">Machine Learning, Deep Learning, and NLP</span>, aiming to build intelligent, future-ready systems.
              </p>
              <p className="text-slate-400 leading-relaxed text-base">
                Currently pursuing my B.Tech in Electrical Engineering (CGPA: 8.11), I combine analytical thinking from my core branch with modern software engineering practices to solve complex challenges.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['C++', 'React.js', 'Node.js', 'Python', 'Machine Learning', 'System Design'].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <SectionDivider gradient="from-cyan-600/0 via-cyan-600/30 to-cyan-600/0" />

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section id="projects" className="relative z-10 w-full lg:w-[80%] max-w-none mx-auto px-6 pt-20 pb-20 scroll-mt-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-pink-500/50" />
          <span className="text-xs font-semibold tracking-widest text-pink-400 uppercase">02 — Projects</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-pink-500/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-14"
        >
          Selected Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <GlassCard className="p-6 h-full flex flex-col group hover:border-white/20 transition-all duration-300">
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${p.color} mb-5`} />
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm flex-1 leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-xs border border-purple-500/40 bg-purple-500/10 text-purple-300">
                      {t}
                    </span>
                  ))}
                </div>
                {/* action buttons */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/12 text-slate-300 hover:text-white text-xs font-medium transition-all"
                  >
                    <Github size={13} /> GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all bg-gradient-to-r ${p.color} text-white hover:opacity-85`}
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider gradient="from-purple-600/0 via-purple-600/30 to-purple-600/0" />

      {/* ── EXPERIENCE ───────────────────────────────────────── */}
      <section id="experience" className="relative z-10 w-full lg:w-[80%] max-w-none mx-auto px-6 pt-20 pb-20 scroll-mt-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-green-500/50" />
          <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">03 — Experience</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-green-500/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-3"
        >
          Experience Timeline
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="text-center text-slate-500 mb-16"
        >
          My journey in full stack and AI engineering
        </motion.p>

        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-cyan-600/60 to-transparent -translate-x-1/2" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className={`relative flex mb-12 ${exp.side === 'left' ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'
                }`}
            >
              {/* pulse dot */}
              <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="w-3 h-3 rounded-full bg-purple-500 border-2 border-purple-300" />
                <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-30" />
              </div>

              <GlassCard className="p-5 max-w-sm w-full hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ color: exp.color }}>{exp.icon}</span>
                  <div>
                    <p className="font-bold text-white text-sm">{exp.role}</p>
                    <p className="text-purple-400 text-xs">{exp.company}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs mb-2 font-medium">{exp.period}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full text-xs border border-purple-600/40 bg-purple-600/10 text-purple-300">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider gradient="from-blue-600/0 via-blue-600/30 to-blue-600/0" />

      {/* ── SKILLS ───────────────────────────────────────────── */}
      <section id="skills" className="relative z-10 w-full lg:w-[80%] max-w-none mx-auto px-6 pt-20 pb-20 scroll-mt-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-purple-500/50" />
          <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase">04 — Skills</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-purple-500/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-14"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/5 bg-white/[0.02] border-y-2 border-white/5 mt-10">
          {skills.map(({ category, icon, desc, items }, i) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="p-8 lg:p-12 flex flex-col group hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="mb-6">
                {icon}
              </div>
              <h3 className="text-white font-extrabold text-lg lg:text-xl tracking-tight mb-4">{category}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                {desc}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center text-slate-300 font-mono text-[13px]">
                    <span className="mr-4 text-slate-500 text-[10px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider gradient="from-pink-600/0 via-pink-600/30 to-pink-600/0" />

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="relative z-10 w-full lg:w-[80%] max-w-none mx-auto px-6 pt-20 pb-32 scroll-mt-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center mb-3"
        >
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-yellow-500/50" />
          <span className="text-xs font-semibold tracking-widest text-yellow-400 uppercase">05 — Contact</span>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-yellow-500/50" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-14"
        >
          Connect With Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <GlassCard className="p-8">
              <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>
              <form className="flex flex-col gap-4" onSubmit={handleContactSubmit}>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
                />
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition resize-none"
                />
                <motion.button
                  type="submit"
                  disabled={formStatus === 'loading' || formStatus === 'success'}
                  whileHover={{ scale: formStatus === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: formStatus === 'idle' ? 0.98 : 1 }}
                  className={`w-full py-3 rounded-xl text-white font-semibold flex justify-center items-center gap-2 transition shadow-lg ${formStatus === 'success' ? 'bg-green-500 shadow-green-900/40 cursor-default' :
                      formStatus === 'error' ? 'bg-red-500 shadow-red-900/40' :
                        'bg-gradient-to-r from-pink-500 to-purple-600 shadow-purple-900/40 hover:opacity-90'
                    }`}
                >
                  {formStatus === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : formStatus === 'success' ? (
                    'Message Sent!'
                  ) : formStatus === 'error' ? (
                    'Error. Try again!'
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* social */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 blur-md opacity-40 scale-110" />
              <div className="relative w-full h-full rounded-full border-2 border-cyan-500/40 overflow-hidden shadow-2xl shadow-cyan-900/30 bg-gradient-to-br from-cyan-800 to-purple-900">
                <img src="/rish.jpeg" alt="Ritesh Saini" className="w-full h-full object-cover object-center scale-150 translate-y-2" draggable="false" />
              </div>
            </div>
            <p className="text-slate-400 text-center text-sm max-w-xs leading-relaxed">
              Let&apos;s build something amazing together. Reach out via any of the channels below!
            </p>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {[
                { icon: <Mail size={18} />, label: 'riteshsaini6375@gmail.com', href: 'mailto:riteshsaini6375@gmail.com' },
                { icon: <Github size={18} />, label: 'github.com/ritesh-saini-16', href: 'https://github.com/ritesh-saini-16' },
                { icon: <Linkedin size={18} />, label: 'linkedin.com/in/riteshsaini16', href: 'https://linkedin.com/in/riteshsaini16' },
              ].map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition"
                >
                  <span className="text-cyan-400">{icon}</span>
                  <span className="text-sm">{label}</span>
                  <ExternalLink size={12} className="ml-auto text-slate-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* footer */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-slate-600 text-sm mt-20"
        >
          Built by Ritesh · {new Date().getFullYear()}
        </motion.p>
      </section>
    </div>
  );
}
