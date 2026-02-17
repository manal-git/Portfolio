"use client";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Card from "@/components/ui/card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { IconAerialLift, IconAntenna, IconBrandDebian, IconBrandLinkedinFilled, IconBrandUbuntu, IconBrandWindows, IconCheck, IconDeviceIpadHorizontalCode, IconDevicesPc, IconFileCv, IconLanguage, IconMenu2, IconTablePlus, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinux } from '@fortawesome/free-brands-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { Children, useEffect, useRef, useState } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Vortex } from "@/components/ui/vortex";
import { Popup } from "@/components/ui/popup";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Grid } from "@/components/ui/grid-glow";
import { Press_Start_2P } from "next/font/google";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { Form, Formik, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { GridScan } from "@/components/ui/GridScan";
import RippleGrid from "@/components/ui/RippleGrid";
import DarkVeil from "@/components/ui/DarkVeil";
import { sendEmail } from "@/utils/emailUtils";


const articles = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="h-4 w-4 text-white dark:text-neutral-400" />,
    link: "https://www.researchgate.net/publication/385737356_BENCHMARKING_FRONT-END_FRAMEWORKS_A_DEEP_DIVE_INTO_THE_PERFORMANCE_AND_SCALABILITY_OF_REACT_ANGULAR_AND_VUEJS",
    title: "Benchmarking Front-end Frameworks",
    description: "Un approfondissement sur la performance et la scalabilité des langages tel que React, Angular, VueJS...",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-white dark:text-neutral-400" />,
    link: "https://smile.eu/en/publications-and-events/what-frontend-framework-fastest",
    title: "What frontend framework is the fastest?",
    description:
      "Comparatif de performance pour divers frameworks front-end (CSR / SSR) : React, Vue, Solid, Angular, Astro, Qwik, Remix...",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Lock className="h-4 w-4 text-white dark:text-neutral-400" />,
    link: "https://dev.to/tuananhpham/popular-backend-frameworks-performance-benchmark-1bkh",
    title: "Best popular backend frameworks by performance of …",
    description: "les meilleurs frameworks backend de 2025",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />,
    link: "https://www.analy.fr/blog/nextjs-en-2025-pourquoi-ce-framework-simpose-pour-les-sites-performants",
    title: "Next Js framework le plus performant ",
    description: "NextJs reste leader grâce à sa vitesse, son rendu côté serveur (SSR) et son bon référencement (SEO)...",
  }
];

const articles2 = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: <Box className="h-4 w-4 text-white dark:text-neutral-400" />,
    link: "https://laconsole.dev/blog/top-frameworks-developpement",
    title: "Les 30 frameworks à apprendre en 2025",
    description: "Les choix d'un framework est moins déterminant que le choix de langage, car une fois un langage maitrisé, de nombreux frameworks sont accessibles...",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: <Settings className="h-4 w-4 text-white dark:text-neutral-400" />,
    link: "https://dev.to/this-is-learning/javascript-frameworks-heading-into-2025-hkb",
    title: "Javascript Frameworks Heading into 2025",
    description: "Panorama des nouveaux meta-frameworks “server-first” (Svelte Kit, Astro, Remix, Qwik, SolidStart, etc.) et des évolutions majeures dans l’écosystème...",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: <Lock className="h-4 w-4 text-white dark:text-neutral-400" />,
    link: "https://itnext.io/benchmarking-frontends-in-2025-f6bbf43b7721",
    title: "Benchmarking Frontends in 2025 — Stop Measuring Page Loads. Start Measuring Resilience",
    description: " Propose de repenser les métriques de performance pour aller au-delà du simple chargement vers la résilience (rendre l’app robuste aux interruptions, aux conditions réseau instables...",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: <Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />,
    link: "https://strapi.io/blog/frameworks-for-javascript-app-developlemt",
    title: "Top Frameworks for JavaScript App Development in 2025",
    description: "Tendances des frameworks JS en 2025 : domination de React, montée en puissance de frameworks orientés performance (Svelte, Solid), importance de la SSR & de l’edge computing...",
  }
];

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

type Testimonial = { name: string; src: string };
type ProjectKey = "webtoona" | "jeu" | "mode";
type ProjectData = {
  title: string;
  description: string;
  icon: string;
  doc?: string;
  gitlink?: string;
  testimonials?: Testimonial[];
};

const press = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  fallback: ['sans-serif']
});

export default function HomePage() {

  const intro = ["Je", "me", "présente!", "Je", "suis", "étudiante", "en", "BTS", "Services", "Informatiques",
    "aux", "Organisations", "(SIO),", "spécialisée", "dans", "le", "développement", "d'applications.",
    "Ce", "portfolio", "témoigne", "de", "mon", "engagement", "à", "transformer", "les", "compétences",
    "acquises", "au", "cours", "de", "ma", "formation", "en", "réalisations", "concrètes", "et", "structurées,",
    "illustrant", "ma", "passion", "pour", "l'informatique", "et", "mon", "envie", "constante", "d'apprendre", "et", "d'évoluer.", "Bienvenue", "et", "bonne", "découverte", "de", "mon", "portfolio."];
  const veille = [
    "Cette", "veille", "porte", "sur", "l’impact", "du", "choix", "d’un", "framework",
    "sur", "la", "performance", "d’une", "application", "web.",
    "Dans", "un", "contexte", "où", "la", "vitesse", "de", "chargement",
    "détermine", "le", "succès", "d’un", "site,", "la", "performance",
    "est", "devenue", "un", "enjeu", "majeur.",
    "L’objectif", "est", "de", "comprendre", "comment", "les", "frameworks",
    "influencent", "la", "rapidité,", "la", "fluidité", "et", "la", "scalabilité,",
    "et", "d’identifier", "quels", "outils", "sont", "les", "plus", "adaptés",
    "selon", "les", "besoins", "réels", "d’un", "projet", "en", "2025."
  ];

  const skills = ['C', 'HTML', 'CSS', 'python', 'php', 'SQL', 'GIT/GITHub', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'TypeScript', 'Tailwind'];
  const section = [
    {
      title: 'Accueil',
      color: 'hover:bg-red-600',
      href: '#accueil'
    },
    {
      title: 'A propos',
      color: 'hover:bg-green-600',
      href: '#a-propos'
    },
    {
      title: 'Compétences',
      color: 'hover:bg-blue-600',
      href: '#competences'
    },
    {
      title: 'Parcours',
      color: 'hover:bg-amber-600',
      href: '#parcours'
    },
    {
      title: 'Expérience',
      color: 'hover:bg-orange-600',
      href: '#experience'
    },
    {
      title: 'Projets',
      color: 'hover:bg-pink-600',
      href: '#projets'
    },
    {
      title: 'Certificats',
      color: 'hover:bg-cyan-600',
      href: '#certificats'
    },
    {
      title: 'Veille',
      color: 'hover:bg-rose-600',
      href: '#veille'
    },
    {
      title: 'Contact',
      color: 'hover:bg-indigo-600',
      href: '#contact'
    }
  ];
  const aboutRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState<ProjectKey | null>(null);
  const [sendEmailStatus, setSendEmailStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const content = [
    {
      title: "Professionnelle",
      subtitle: "Stage chez Turnadon du 18 mai au 4 juillet et du 01 decembre au 23 janvier - Paris (2025)",
      description: [
        "Développement front-end avec React, Tailwind CSS et Redux Toolkit (pages, thèmes, responsive design).",
        "Développement back-end avec Node.js et Express (API REST, base de données, routes).",
        "Intégration d’un système d’upload de médias via AWS S3.",
        "Utilisation de Git, GitHub et Postman pour la gestion de projet et les tests.",
        "Renforcement des compétences en développement full-stack, gestion d’état, design réactif et intégration cloud.",
      ],
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <img src="/stage.png" alt="" className="p-4" />
        </motion.div>
      ),


    },
    {
      subtitle: "Stylist - ile de france (2020 - 2022)",
      description: [
        "Assistance à une styliste pour l'organisation et la préparation des tenues pour des séances photo.",
        "Gestion de l'inventaire des pièces de garde-robe et accessoires en fonction des demandes des clients.",
      ],
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <img src="/stylist.png" alt="" />
        </motion.div>
      ),
    },
    {
      subtitle: "Nounou - Argenteuil (2018 - 2021)",
      description: [
        "Gérer les emplois du temps quotidiens des enfants et garantir leur ponctualité et leur organisation.",
      ],
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <img src="/nanny.png" alt="" className="p-6" />
        </motion.div>
      ),
    },
    {
      title: "Personnelles et académique",
      subtitle: "Projets",
      description: [
        "2023 : Création de maquettes pour plusieurs sites web à l'aide de Figma.",
        "2024 : Conception d’un projet de défilé de mode avec site web d’un systeme de vote.",
        "2024 : Conception d'un jeu de devinette d'un nombre aléatoire.",
        "2025 : Création d'un portfolio web en utilisant les compétences acquises pendant le stage.",
      ],
      content: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          <img src="/academique.png" alt="" className="p-3" />
        </motion.div>
      ),
    },
  ];

  const popupContent: Record<ProjectKey, ProjectData> = {
    webtoona: {
      title: "Webtoona",
      description: " > Le projet consiste en la création d'une application web permettant aux utilisateurs de suivre leur progression dans la lecture de BD et de publier leur propre BD. L'application offre une gestion personnalisée des bibliothèques de BD, ainsi que des fonctionnalités interactives telles que des notes et des commentaires. Le public visé est constitué de lecteurs grand public qui souhaitent gérer et suivre la lecture de BD.",
      icon: "webtoona.png",
      doc: "https://drive.google.com/file/d/1GsdEKg3wlS-4F0wkT0LZHaoowFRGlrub/view?usp=sharing",
      gitlink: "https://github.com/manal-git/WEBtoon.git",
      testimonials: [
        { name: "Accueil", src: "/webtoon.png" },
        { name: "Page de connexion", src: "/login.png" },
        { name: "Page d'inscription", src: "/signup.png" },
        { name: "Page de publication de BD", src: "/publish.png" },
        { name: "Page de lecture", src: "/lecture.jpg" },
        { name: "Page de la bibliothèque", src: "/library.png" },
        { name: "Page des genres", src: "/genre.png" },
      ],
    },

    jeu: {
      title: "Jeu de devinette",
      description: "> Ce projet consiste à développer un jeu interactif simple où un joueur doit deviner un chiffre aléatoire généré par le programme, avec des fonctionnalités permettant d'indiquer si le joueur a deviné correctement ou s'il doit ajuster sa tentative ou tout simplement qu’il a gagné.",
      icon: "jeu.png",
      doc: "https://drive.google.com/file/d/1QacY8gVtLnpdff6qxwembGM_9QbCLNW9/view?usp=sharing",
      gitlink: "https://github.com/manal-git/jeux_nombre.git",
      testimonials: [
        { name: "L'accueil", src: "/jeu1.png" },
        { name: "Phase du jeu", src: "/jeu2.png" },
        { name: "La documontation du jeu", src: "/jeu3.png" },
      ],
    },

    mode: {
      title: "Défilé de mode",
      description: "> Site web L’application mobile dédiée offrira une expérience personnalisée, permettant aux utilisateurs de suivre le défilé, d’accéder à un vote en temps réel des tenus défiler et une moyen final et partager a la fin.",
      icon: "mode.png",
      doc: "https://drive.google.com/file/d/1aLg76xXbdXadlSmPAgKdVQMMxNj0eS2n/view?usp=sharing",
      gitlink: "https://github.com/manal-git/mode.git",
      testimonials: [
        { name: "Accueil", src: "/mode1.jpg" },
        { name: "Système de vote", src: "/mode2.jpg" },
        { name: "Resultat du vote", src: "/mode3.jpg" },

      ],
    },
  };

  const formikValidationSchema = Yup.object({
    email: Yup.string().email("Email invalide").required("Email requis"),
    name: Yup.string().required("Nom requis"),
    message: Yup.string().required("Message requis"),
  })

  const formikInitialValues = {
    email: "",
    name: "",
    message: "",
  }

  const formik = useFormik({
    validationSchema: formikValidationSchema,
    initialValues: formikInitialValues,
    onSubmit: async (values) => {
      const res = await sendEmail({
        nom: values.name,
        email: values.email,
        time: new Date().toLocaleString(),
        message: values.message,
      });
      if (res === 'success') {
        formik.resetForm();
        setSendEmailStatus('success');
      } else if (res === 'error') {
        setSendEmailStatus('error');
      }
      setTimeout(() => {
        setSendEmailStatus(null);
      }, 6000);
    },
  });

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 "
          onClick={() => setShowPopup(null)}
        >
          {(() => {
            const data = popupContent[showPopup];

            return (

              <AnimatePresence>
                <Popup
                  title={data.title}
                  description={data.description}
                  icon={data.icon}
                  doc={data.doc}
                  gitlink={data.gitlink}
                  onClose={() => setShowPopup(null)}
                  testimonials={
                    data.testimonials ? (
                      <AnimatedTestimonials
                        testimonials={data.testimonials}
                        autoplay
                      />
                    ) : null
                  }
                />
              </AnimatePresence>
            );
          })()}
        </div>
      )}
      <nav className="flex flex-row fixed top-1 left-1 backdrop-blur-sm right-1 z-50 gap-2 p-2 bg-neutral-900/10  border border-slate-800 shadow-2xl rounded-lg">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row items-center justify-center">
            <img src="/avatar.png" alt="" className="w-10 h-10 p-1" />
            <p className="text-amber-300/80 font-retro px-2 text-xs">MK</p>
          </div>
          <div
            className="cursor-pointer active:scale-120 transition-all duration-100 md:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          > {showMenu && isMobile ?
            <IconX className="w-6 h-6 text-amber-300/80 transition-all duration-200" />
            :
            <IconMenu2 className="w-6 h-6 text-amber-300/80 transition-all duration-200" />
            }
          </div>
          <div className={`w-full gap-2 md:justify-end justify-center ${showMenu && isMobile ? "fixed top-15 left-0 right-0 flex flex-col items-end" : "hidden md:flex flex-row"}`}>
            <AnimatePresence>
              {section.map((word: { title: string, color: string, href: string }, index: number) => (
                <motion.div
                  initial={{ x: -5 * index, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                  key={index} className="flex items-center"
                  onClick={() => {
                    handleScroll(word.href)
                    setShowMenu(false)
                  }}
                >
                  <div className={`inline-flex h-full w-full md:w[50%] cursor-pointer items-center justify-center border border-slate-800 rounded-md bg-purple-500/10 ${word.color} px-3 py-3 text-[9px] font-retro text-white backdrop-blur-3xl shadow-rose-300/30 shadow-md hover:transform hover:scale-110 duration-200`}>
                    <a>{word.title}</a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FFAEDE"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={1}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex gap-2 flex-col w-fit h-full justify-center items-center" id="accueil">
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [1, 1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
              }}
              className="md:w-3/4 w-[80%] m-5 drop-shadow-xl drop-shadow-pink-500/60">
              <img src="/title.png" alt="" />
            </motion.div>
            <div className="relative w-full flex flex-col justify-center items-center">
              {
                started && (
                  <motion.div
                    animate={{
                      y: [40, -20, 0],
                      opacity: [0, 1, 1],
                    }}
                    transition={{
                      duration: .5,
                    }}
                    className="w-10 h-10 absolute -translate-y-12">
                    <img src="/coin.png" alt="" />
                  </motion.div>
                )
              }
              <audio ref={audioRef} src="/coin.mp3" preload="auto" />
              <button
                onClick={() => {
                  setStarted(true);
                  audioRef.current?.play();
                  setTimeout(() => {
                    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
                    setStarted(false);
                  }, 600);
                }}
                className={`text-yellow-300 py-6 px-4 md:text-lg text-xs rounded-2xl cursor-pointer hover:animate-none animate-pulse transition duration-300 ${press.className}`}>
                PRESS TO START
              </button>
            </div>
          </div>
          <div className="absolute -bottom-1 md:bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black to-transparent" id="a-propos">
          </div>
        </div>
        <div ref={aboutRef} className="flex md:flex-row flex-col justify-between w-[80%] mx-auto rounded-md overflow-hidden my-1 md:my-14">
          <div className="h-full">
            <div className="flex flex-col w-40 h-40 p-10 justify-center">
              <img src="/avatar.png" alt="" className="animate-[bounce_3s_ease-in-out_infinite]" />
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden">
            <div className="p-4 bg-neutral-900 w-full h-6 flex items-center">
              <div className="w-full flex gap-1 justify-end items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-4 bg-neutral-800 flex flex-col justify-center items-center border-b-radius-lg overflow-hidden">
              <TypewriterEffect words={intro.map((word: string) => {
                return { text: word }
              })} />
            </div>
          </div>
        </div>
        <div className="w-full flex p-3" id="competences">
          <div className="flex w-full self-center items-center justify-center border text-center transition-all rounded-md border-amber-500">
            <h2 className="text-yellow-200 font-retro p-2 items-center" >
              Compétences
            </h2>
          </div>
        </div>
        <div className="flex p-2">
          <div className="flex w-full justify-start items-center">
            <a href="/tableausynthèse.pdf" target="_blank" className="flex text-amber-400 hover:cursor-pointer hover:underline font-retro text-xs p-2 items-center">
              <div className="flex pr-2 items-center justify-center">
                <IconTablePlus size={20} className="text-amber-400 items-center" />
              </div>
              <p className="flex">
                Tableau de compétences
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full gap-28 p-3">
          <div className="flex md:flex-row flex-col justify-start w-full bg-neutral-900 py-5 rounded-md">
            <div className="md:w-1/2 w-full h-full flex gap-2 flex-col justify-center items-center ">
              <Card title="Développement" icon={<IconDeviceIpadHorizontalCode size={50} className="text-white overflow-y-auto" />}>
                <CanvasRevealEffect
                  animationSpeed={5.1}
                  containerClassName="bg-emerald-900 shadow-2xl shadow-emerald-200/70"
                />
              </Card>
              <div className="w-28 h-8 bg-neutral-700 flex flex-start">
                <div className="w-full flex gap-1 justify-end items-center px-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-52 h-2 bg-neutral-700 rounded-full"></div>
            </div>
            <div className="flex w-fit justify-center p-4">
              <ul className="text-yellow-50 font-mono grid grid-cols-2 md:gap-x-40 gap-x-5">
                {skills.map((word: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span>{'> ' + word}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex md:flex-row flex-col-reverse w-full justify-between py-5 bg-neutral-900">
            <div className="flex p-10 h-full md:w-1/2 w-full justify-center items-center">
              <ul className="flex flex-col text-yellow-50 items-start gap-8 font-mono">
                <li className="flex flex-col gap-4">
                  <span className="flex gap-2 font-bold items-center">
                    <FontAwesomeIcon icon={faLinux} className="w-6 h-6" />
                    Linux:
                  </span>
                  <ul className="flex flex-col text-yellow-50 items-start font-mono gap-2 pl-3">
                    <li className="flex gap-2 items-center">
                      <IconBrandDebian className="text-pink-600" />
                      Debian
                    </li>
                    <li className="flex gap-2 items-center">
                      <IconBrandUbuntu className="text-orange-700" />
                      Ubuntu
                    </li>
                    <li className="flex gap-2 items-center">
                      <FontAwesomeIcon icon={faDragon} className="w-6 h-6 text-blue-900" />
                      Kali Linux
                    </li>
                  </ul>
                </li>
                <li className="flex gap-2 items-center font-bold">
                  <IconBrandWindows className="text-blue-400" />
                  Windows</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full h-full flex gap-2 flex-col justify-center items-center">
              <Card title="Système" icon={<IconDevicesPc size={50} className="text-white overflow-y-auto" />}>
                <CanvasRevealEffect
                  animationSpeed={5.1}
                  containerClassName="bg-sky-900 shadow-2xl shadow-sky-300/70"
                  colors={[[50, 180, 255]]}
                />
              </Card>
              <div className="w-28 h-8 bg-neutral-700 flex flex-start">
                <div className="w-full flex gap-1 justify-end items-center px-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-52 h-2 bg-neutral-700 rounded-full"></div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-start w-full py-5 bg-neutral-900">
            <div className="md:w-1/2 w-full h-full flex gap-2 flex-col justify-center items-center">
              <Card title="Réseau" icon={<IconAntenna size={50} className="text-white overflow-y-auto" />}>
                <CanvasRevealEffect
                  animationSpeed={5.1}
                  containerClassName="bg-purple-900 shadow-2xl shadow-indigo-300/70"
                  colors={[[255, 180, 255]]}

                />
              </Card>
              <div className="w-28 h-8 bg-neutral-700 flex flex-start">
                <div className="w-full flex gap-1 justify-end items-center px-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-52 h-2 bg-neutral-700 rounded-full"></div>
            </div>
            <div className="flex w-fit max-w-[500px] p-4">
              <ul className="flex flex-col justify-center w-full gap-6 font-mono text-yellow-50">
                <li>1. Installation d'un serveur Web</li>
                <li>2. Sécuriser un serveur web</li>
                <li>3. Adressage IP (avec Cisco Packet tracer)</li>
                <li>4. Réaliser des machines virtuelles</li>
                <li>5. Réalisation d'une connexion SSH entre machine virtuelle dans un réseau local</li>
              </ul>
            </div>
          </div>

          <div className="flex md:flex-row flex-col-reverse justify-between w-full py-5 bg-neutral-900">
            <div className='flex p-15 h-full md:w-1/2 w-full justify-center items-center'>
              <ol className="flex flex-col text-yellow-50 items-start gap-8 font-mono">
                <li className="flex items-center">{'>' + ' Anglais' + ' C1'}</li>
                <li className="flex items-center">{'>' + ' Français' + ' C1'}</li>
                <li className="flex items-center">{'>' + ' Arabe' + ' Langue maternelle'}</li>
              </ol>
            </div>
            <div className="md:w-1/2 w-full h-full flex gap-2 flex-col justify-center items-center">
              <Card title="Langues" icon={<IconLanguage size={50} className="text-white overflow-y-auto" />}>
                <CanvasRevealEffect
                  animationSpeed={5.1}
                  containerClassName="bg-yellow-600 shadow-2xl shadow-yellow-200/70"
                  colors={[[255, 255, 155]]}

                />
              </Card>
              <div className="w-28 h-8 bg-neutral-700 flex flex-start">
                <div className="w-full flex gap-1 justify-end items-center px-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
              <div className="w-52 h-2 bg-neutral-700 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-4">
          <div className="flex w-full self-center items-center justify-center border text-center transition-all rounded-md border-pink-500">
            <h2 className="text-pink-300 font-retro p-2 items-center" id="parcours">
              Parcours
            </h2>
          </div>
          <div className="flex flex-col md:w-[80%] w-full mx-auto rounded-md overflow-hidden my-14">
            <div className="p-4 bg-neutral-900 w-full h-6 flex items-center">
              <div className="w-full flex gap-1 justify-end items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-5 bg-neutral-800 flex flex-col justify-center items-start">
              <div className='flex flex-col text-start font-mono text-amber-50 gap-4'>
                <h2 className="text-rose-500 text-xs font-retro "> 2025 - 2026 2eme année BTS Informatique Lycée Turgot (75003)</h2>
                <p className="animate-pulse">{'>' + ' Option développement'}</p>
                <h2 className="text-rose-400 text-xs font-retro "> 2024 - 2025 1er année BTS Informatique Lycée Turgot (75003)</h2>
                <p className="animate-pulse">{'>' + ' Option développement'}</p>
                <h2 className="text-pink-400 text-xs font-retro "> 2020 - 2021 Bac general Lycée Jean Jaures (95100)</h2>
                <p className="animate-pulse">{'>' + ' Option: Science de l’ingénieure - Math (Mention Bien)'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex w-full self-center items-center justify-center border text-center transition-all rounded-md border-cyan-500">
            <h2 className="text-blue-300 font-retro p-2 items-center" id="experience">
              Experiences
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="lg:w-3/4 w-full py-4">
              <StickyScroll content={content} />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-4">
          <div className="flex w-full self-center items-center justify-center border text-center transition-all rounded-md border-purple-500">
            <h2 className="text-purple-400 font-retro p-2 items-center" id="projets">
              Projets
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex border-[15px] min-h-[400px] h-[300px] md:w-[52%] w-[80%] max-w-[700px] border-neutral-900 rounded-md mt-10">
              <div className="flex flex-col justify-start min-h-[300px] w-full bg-radial from-indigo-300/30 to-neutral-900">
                <div className="flex md:flex-row flex-col flex-wrap gap-4 p-4">
                  <div className="flex flex-col items-center justify-center min-w-10 w-[10%] md:w-16 cursor-pointer hover:bg-slate-500/40 text-blue-500">
                    <img src="/webtoona.png" alt="" className="w-full"
                      onClick={() => setShowPopup("webtoona")}
                    />
                    <p className="font-mono text-amber-50 text-[10px] text-center">Webtoona</p>
                  </div>
                  <div className="flex flex-col items-center justify-center min-w-10 w-[10%] md:w-16 cursor-pointer hover:bg-slate-500/40 text-blue-500">
                    <img src="/jeu.png" alt="" className="w-full"
                      onClick={() => setShowPopup("jeu")}
                    />
                    <p className="font-mono text-amber-50 text-[10px] text-center">jeu devinette</p>
                  </div>
                  <div className="flex flex-col items-center justify-center min-w-10 w-[10%] md:w-16 cursor-pointer hover:bg-slate-500/40 text-blue-500">
                    <img src="/mode.png" alt="" className="p-1 w-full"
                      onClick={() => setShowPopup("mode")}
                    />
                    <p className="font-mono text-amber-50 text-[10px] text-center">Walk your worth</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[85%] h-40 max-w-[1155px] bg-neutral-900 border-4 border-neutral-800 trapezoid md:flex hidden">
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-30 max-w-[1155px] justify-center items-center bg-neutral-950 trapezoid md:flex hidden'>
                <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center text-white font-bold">
                  <div className='flex gap-1'>
                    {['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((item) => (
                      <div
                        key={item}
                        className="w-10 h-6 flex items-center justify-center bg-black trapezoid cursor-pointer hover:scale-80 transition-all"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className='flex gap-3'>
                    {['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'].map((item) => (
                      <div key={item} className="w-10 h-6 flex items-center justify-center bg-black trapezoid cursor-pointer hover:scale-80 transition-all">{item}</div>
                    ))}
                  </div>
                  <div className='flex gap-5'>
                    {['W', 'X', 'C', 'V', 'B', 'N', '?', ';', '/', '!'].map((item) => (
                      <div key={item} className="w-10 h-6 flex items-center justify-center bg-black trapezoid cursor-pointer hover:scale-80 transition-all">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[85%] max-w-[1155px] h-10 bg-neutral-900 rounded-b-md md:flex hidden">
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-4">
          <div className="flex w-full self-center items-center justify-center border text-center transition-all rounded-md border-green-500">
            <h2 className="text-emerald-400 font-retro p-2 items-center" id="certificats">
              Certificats
            </h2>
          </div>
          <div className="w-full flex lg:flex-row p-6 flex-col gap-4">
            <div className="flex lg:w-1/2 w-full h-auto p-4 flex-wrap border-1 hover:bg-lime-500/20 rounded-3xl hover:text-black border-lime-500">
              <div className="aspect-square w-30">
                <img src="/cisco.png" alt="cisco" />
              </div>
              <div className="flex flex-col gap-6 p-2 animate-pulse">
                <div className="p-2 font-retro md:text-md text-xs text-white text-left">
                  <a href="https://www.credly.com/badges/954629da-abc1-4555-a7a0-00de21cc6e82/public_url" className="hover:cursor-pointer hover:underline" >{'>' + ' Certificats Packet Tracer'}</a>
                </div>
                <div className="p-2 font-retro md:text-md text-xs text-white text-left">
                  <a href="https://www.credly.com/badges/794a361b-e669-4e7a-b1f9-46397b490117/public_url" className="hover:cursor-pointer hover:underline" >{'>' + ' Certificats Networking Basics'}</a>
                </div>
                <div className="p-2 font-retro md:text-md text-xs text-white text-left">
                  <a href="https://www.credly.com/badges/33998236-9232-463a-9233-31a382222222/public_url" className="hover:cursor-pointer hover:underline" >{'>' + ' Certificats CSS Essentials'}</a>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 w-full p-4 gap-5 flex-wrap border-blue-400 hover:bg-blue-400/20 rounded-3xl hover:text-black border-1">
              <div className="aspect-square w-30">
                <img src="/google.png" alt="google" />
              </div>
              <div className="p-5 font-retro md:text-md text-xs text-white text-left animate-pulse">
                <a href="https://skillshop.credential.net/0ba5138b-cd46-46a4-8281-fb65858efc83#acc.3xiEL4qI" className="hover:cursor-pointer hover:underline" >{'>' + ' Certificats Google Analytics'}</a>
              </div>
            </div>
            <div className="flex lg:w-1/2 w-full p-3 gap-5 flex-wrap border-red-500 hover:bg-red-400/20 rounded-3xl hover:text-black border-1">
              <div className="aspect-square w-30">
                <img className="w-full h-30" src="/pix.png" alt="pix" />
              </div>
              <div className="p-5 font-retro md:text-md text-xs text-white text-left animate-pulse">
                <a href="/pix.pdf" target="_blank" rel="noopener noreferrer">
                  <p className="hover:cursor-pointer">{'>' + ' Certificats Pix'}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-4">
          <div className="flex w-full self-center items-center justify-center border text-center transition-all rounded-md border-rose-500">
            <h2 className="text-rose-400 font-retro p-2 items-center " id="veille">
              Veille Technologique
            </h2>
          </div>
          <div>
            <div className="flex justify-between w-[80%] mx-auto rounded-md overflow-hidden my-8">
              <div className="w-full rounded-lg overflow-hidden">
                <div className="p-4 bg-neutral-900 w-full h-6 flex items-center">
                  <div className="w-full flex gap-1 justify-end items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-800 flex flex-col justify-center items-center border-b-radius-lg overflow-hidden">
                  <div className="w-full flex justify-center items-center">
                    <h3 className="text-indigo-500 font-retro p-2 items-center">Les frameworks et la performance sur le web</h3>
                  </div>
                  <TypewriterEffect words={veille.map((word: string) => {
                    return { text: word }
                  })} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col w-full transition-all rounded-md">
              <h2 className="text-rose-400 text-xs font-retro pl-6 p-4 text-center">
                Performance web et méthodologie d’évaluation
              </h2>
            </div>
            <div className="bg-black p-5">
              <Grid items={articles} />
            </div>
          </div>
          <div>
            <div className="flex w-full flex-col transition-all rounded-md">
              <h2 className="text-blue-400 text-xs font-retro pl-6 p-4 text-center">
                Choix et tendances des frameworks (2025)
              </h2>
            </div>
            <div className="bg-black p-5">
              <Grid items={articles2} />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col">
            <div className="pl-4 pr-4 w-full flex justify-center items-center">
              <div className="flex w-full self-center items-center justify-center border text-center  transition-all rounded-md border-indigo-500">
                <h2 className="text-indigo-400 font-retro p-2 items-center" id="contact">
                  Contact
                </h2>
              </div>
            </div>
            <div className="w-full h-full flex">
              <div className="relative flex flex-col w-full h-full">
                <div style={{ width: '100%', height: '600px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <DarkVeil />
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center py-0 absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <AnimatePresence mode='popLayout'>
                    {sendEmailStatus === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: [0, 1, 0, 1, 0, 1, 0, 1],
                          y: [0, 0, 0, 0, 0, 0, 0, 0],
                        }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 2 }}
                        className="flex items-center gap-2 py-4">
                        <IconCheck className="w-4 h-4 text-green-500" />
                        <span className="text-green-500 font-retro text-[10px]">
                          Message envoyé
                        </span>
                      </motion.div>
                    ) : sendEmailStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 py-4">
                        <IconX className="w-4 h-4 text-red-500" />
                        <span className="text-red-500 font-retro text-[10px]">
                          Erreur lors de l'envoi du message
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="bg-black/50 border border-white/20 rounded-2xl w-2/3">
                    <FormikProvider value={formik}>
                      <Form className="flex flex-col w-full gap-4 p-4">
                        <div className="flex flex-col gap-2 md:p-2 p-0">
                          <label htmlFor="name" className="text-white font-retro text-xs">Nom</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="text-white border border-white/20 rounded-md shadow-md shadow-neutral-950 hover:bg-neutral-700/20 backdrop-blur-3xl p-2 bg-transparent"
                            value={formik.values.name}
                            onChange={(e: any) => formik.setFieldValue("name", e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2 md:p-2 p-0">
                          <label htmlFor="email" className="text-white font-retro text-xs">Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="text-white border border-white/20 rounded-md shadow-md shadow-neutral-950 hover:bg-neutral-700/20 backdrop-blur-3xl p-2 bg-transparent"
                            value={formik.values.email}
                            onChange={(e: any) => formik.setFieldValue("email", e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2 md:p-2 p-0">
                          <label htmlFor="message" className="text-white font-retro text-xs">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="text-white border border-white/20 rounded-md shadow-md shadow-neutral-950 hover:bg-neutral-700/20 backdrop-blur-3xl p-2 bg-transparent resize-none"
                            value={formik.values.message}
                            onChange={(e: any) => formik.setFieldValue("message", e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2 md:p-2 p-0">
                          <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 cursor-pointer hover:scale-110 text-white text-xs font-retro p-2 rounded-md self-center transition-all">Envoyer</button>
                        </div>
                      </Form>
                    </FormikProvider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-20 flex flex-row gap-3 bg-blue-950/50 justify-start items-center p-4">
          <a
            className="bg-blue-900 rounded-full p-1 hover:bg-blue-700 transition-all"
            href="https://www.linkedin.com/in/manal-khalqallah-33a35133b/"
            target="_blank"
          >
            <IconBrandLinkedinFilled className="w-8 h-8 p-1 text-white" />
          </a>
          <a
            className="bg-blue-900 rounded-full p-1 hover:bg-blue-700 transition-all"
            href="https://www.canva.com/design/DAGTpe1Bpas/8g7d57zcpligpH_Tzytm3w/edit?utm_content=DAGTpe1Bpas&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
          >
            <IconFileCv className="w-8 h-8 p-1 text-white" />
          </a>
        </div>
      </div >
    </>
  )
}


