"use client"

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Card from "@/components/ui/card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { IconAerialLift, IconAntenna, IconBrandDebian, IconBrandUbuntu, IconBrandWindows, IconDeviceIpadHorizontalCode, IconDevicesPc, IconLanguage } from '@tabler/icons-react';
import { motion } from "framer-motion";
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

  const intro = ["Je", "me", "présente!", "Je", "suis", "étudiante", "en", "BTS", "Services", "Informatiques", "aux", "Organisations", "(SIO),", "spécialisée", "dans", "le", "développement", "d'applications.", "Ce", "portfolio", "témoigne", "de", "mon", "engagement", "à", "transformer", "les", "compétences", "acquises", "au", "cours", "de", "ma", "formation", "en", "réalisations", "concrètes", "et", "structurées,", "illustrant", "ma", "passion", "pour", "l'informatique", "et", "mon", "envie", "constante", "d'apprendre", "et", "d'évoluer.", "Bienvenue", "et", "bonne", "découverte", "de", "mon", "portfolio."];
  const veille = [
    "Pour", "rester", "informé", "des", "nouveautés", "dans", "le", "domaine", "du", "développement,",
    "j’ai", "utilisé", "l’extension", "daily.dev", "sur", "mon", "navigateur,",
    "qui", "regroupe", "des", "articles", "récents", "sur", "les", "technologies", "web.",
    "J’ai", "également", "complété", "ma", "veille", "via", "YouTube", "(tutoriels,", "conférences)",
    "et", "les", "réseaux", "sociaux", "comme", "LinkedIn", "et", "X,",
    "où", "les", "professionnels", "partagent", "actualités,", "astuces", "et", "tendances.",
    "Ci-dessous,", "vous", "trouverez", "une", "sélection", "des", "contenus", "les", "plus", "intéressants",
    "que", "j’ai", "sauvegardés."
  ];

  const skills = ['C', 'HTML', 'CSS', 'python', 'php', 'SQL', 'GIT/GITHub', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'TypeScript', 'Tailwind'];
  const aboutRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [showPopup, setShowPopup] = useState<ProjectKey | null>(null);
  // const [showPopup, setShowPopup] = useState<"jeu" | "webtoona" | "mode" | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const content = [
    {
      title: "Professionnelle",
      subtitle: "Stage de 2 mois chez Turnadon - Paris (2025)",
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
        "Gestion de l'inventaire des pièces de garde-robe et accéssoires en fonction des demandes des clients.",
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
        "gérer les emplois du temps quotidiens des enfants et de garantir leur ponctualité et leur organisation.",
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
        "2024 : Conception d'un jeux de devinette d'un nombre aléatoire.",
        "2025 : Création d'un portfolio web en ulitisant les conpétances aquis pendant le stage.",
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
        { name: "Acceuil", src: "/webtoon.png" },
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
        { name: "L'acceuil", src: "/jeu1.png" },
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
        { name: "Acceuil", src: "/mode1.jpg" },
        { name: "Système de vote", src: "/mode2.jpg" },
        { name: "Resultat du vote", src: "/mode3.jpg" },

      ],
    },
  };

  return (
    <>
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50"
          onClick={() => setShowPopup(null)}
        >
          {(() => {
            const data = popupContent[showPopup];          // ProjectData garanti

            return (
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
            );
          })()}
        </div>
      )}

      <div>
        <div className="relative justify-center items-center w-full h-screen bg-[url(/bg.png)] bg-center bg-cover bg-no-repeat bg-fixed">
          <div className="flex gap-10 flex-col w-full h-full justify-center items-center">
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
              className="w-1/2 m-5 drop-shadow-xl drop-shadow-pink-500/60">
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
                className={`text-yellow-300 py-2 px-4 rounded-2xl cursor-pointer hover:animate-none animate-pulse transition duration-300 ${press.className}`}>
                PRESS TO START
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div ref={aboutRef} className="flex justify-between w-[80%] mx-auto rounded-md overflow-hidden my-14">
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
        <div className="w-full flex p-3">
          <div className="flex w-full self-center items-center justify-center border text-center border-dashed hover:bg-yellow-400/30 transition-all rounded-md border-amber-500">
            <h2 className="text-yellow-200 font-retro p-2 items-center animate-pulse">
              Compétences
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-full gap-28">
          <div className="flex justify-start w-full bg-neutral-900 py-5 rounded-md">
            <div className="w-1/2 h-full flex gap-2 flex-col justify-center items-center">
              <Card title="Développement" icon={<IconDeviceIpadHorizontalCode size={30} className="text-white overflow-y-auto" />}>
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
            <div className="flex justify-center p-4">
              <ul className="text-yellow-50 font-mono grid grid-cols-2 md:gap-x-40 gap-x-5">
                {skills.map((word: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span>{'> ' + word}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex w-full justify-between py-5 bg-neutral-900">
            <div className="flex p-10 h-full w-1/2 justify-center items-center">
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
            <div className="w-1/2 h-full flex gap-2 flex-col justify-center items-center">
              <Card title="Système" icon={<IconDevicesPc size={30} className="text-white overflow-y-auto" />}>
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

          <div className="flex justify-start w-full py-5 bg-neutral-900">
            <div className="w-1/2 h-full flex gap-2 flex-col justify-center items-center">
              <Card title="Réseau" icon={<IconAntenna size={30} className="text-white overflow-y-auto" />}>
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
            <div className="flex p-4">
              <ol className="flex flex-col list-decimal w-full gap-6 justify-center font-mono text-yellow-50">
                <li className="">Installation d'un serveur Web</li>
                <li className="">Securiser un serveur web</li>
                <li className="">Adressage IP (avec Cisco Packet tracer)</li>
                <li className="">Realiser des machines virtuelles</li>
                <li className="">Realisation d'une connection SSH entre machine virtuelle dans un réseau local</li>
              </ol>
            </div>
          </div>

          <div className="flex justify-between w-full py-5 bg-neutral-900">
            <div className='flex p-15 h-full w-1/2 justify-center items-center'>
              <ol className="flex flex-col text-yellow-50 items-start gap-8 font-mono">
                <li className="flex items-center">{'>' + ' Anglais' + ' C1'}</li>
                <li className="flex items-center">{'>' + ' Francais' + ' B1'}</li>
                <li className="flex items-center">{'>' + ' Arab' + ' C1'}</li>
              </ol>
            </div>
            <div className="w-1/2 h-full flex gap-2 flex-col justify-center items-center">
              <Card title="Langues" icon={<IconLanguage size={30} className="text-white overflow-y-auto" />}>
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
          <div className="flex w-full self-center items-center justify-center border text-center border-dashed hover:bg-pink-400/30 transition-all rounded-md border-pink-500">
            <h2 className="text-pink-300 font-retro p-2 items-center animate-pulse">
              Education
            </h2>
          </div>
          <div className="flex flex-col w-[80%] mx-auto rounded-md overflow-hidden my-14">
            <div className="p-4 bg-neutral-900 w-full h-6 flex items-center">
              <div className="w-full flex gap-1 justify-end items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            <div className="p-8 bg-neutral-800 flex flex-col justify-center items-start">
              <div className='flex flex-col text-start font-mono text-amber-50 gap-4'>
                <h2 className="text-rose-400 font-retro "> 2024 - 2025  BTS Informatique Lycée Turgot (75003)</h2>
                <p className="animate-pulse">{'>' + ' Option développement'}</p>
                <h2 className="text-pink-400 font-retro "> 2020 - 2021 Bac general Lycée Jean Jaures (95100)</h2>
                <p className="animate-pulse">{'>' + ' Option: Science de l’ingénieure - Math (Mention Bien)'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex w-full self-center items-center justify-center border text-center border-dashed hover:bg-cyan-500/30 transition-all rounded-md border-cyan-500">
            <h2 className="text-blue-300 font-retro p-2 items-center animate-pulse">
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
          <div className="flex w-full self-center items-center justify-center border text-center border-dashed hover:bg-indigo-400/30 transition-all rounded-md border-purple-500">
            <h2 className="text-purple-400 font-retro p-2 items-center animate-pulse">
              Projets
            </h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center m-10">
            <div className="relative min-h-full md:min-h-screen flex flex-col justify-start items-center md:w-3/4 w-full px-5 bg-center bg-cover bg-no-repeat">
              <div className="relative w-full h-full">
                <img src="/pc.png" alt="" className="md:flex hidden w-full z-50" />
                <img src="/mobile.png" alt="" className="flex md:hidden w-full z-50" />
                <div className="absolute top-10 w-3/4  left-1/8 h-full md:h-1/2 max-h-none -z-10 overflow-hidden py-4 px-6">
                  <Vortex>
                  </Vortex>
                </div>
                <div className="absolute md:top-12 top-22 md:left-30 left-22 flex md:flex-row flex-col flex-wrap gap-4">
                  <div className="flex flex-col items-center justify-center w-14 md:w-16 cursor-pointer hover:bg-slate-500/40 text-blue-500">
                    <img src="/webtoona.png" alt="" className=""
                      onClick={() => setShowPopup("webtoona")}
                    />
                    <p className="font-mono text-amber-50 text-[10px] text-center">Webtoona</p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-14 md:w-16 cursor-pointer hover:bg-slate-500/40 text-blue-500">
                    <img src="/jeu.png" alt="" className=""
                      onClick={() => setShowPopup("jeu")}
                    />
                    <p className="font-mono text-amber-50 text-[10px] text-center">jeu devinette</p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-14 md:w-16 cursor-pointer hover:bg-slate-500/40 text-blue-500">
                    <img src="/mode.png" alt="" className="p-1"
                      onClick={() => setShowPopup("mode")}
                    />
                    <p className="font-mono text-amber-50 text-[10px] text-center">Walk your worth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-4">
          <div className="flex w-full self-center items-center justify-center border text-center border-dashed hover:bg-green-400/30 transition-all rounded-md border-green-500">
            <h2 className="text-emerald-400 font-retro p-2 items-center animate-pulse">
              Certificats
            </h2>
          </div>
          <div className="w-full flex lg:flex-row p-8 flex-col gap-4">
            <div className="flex lg:w-1/2 w-full gap-5 p-4 flex-wrap border-2 border-yellow-500">
              <div className="aspect-square w-30">
                <img src="/cisco.png" alt="cisco" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="p-5 font-retro text-white text-left">
                  <p>Certificats Packet Tracer</p>
                </div>
                <div className="p-5 font-retro text-white text-left">
                  <p>Certificats Networking Basics</p>
                </div>
                <div className="p-5 font-retro text-white text-left">
                  <p>Certificats CSS Essentials</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 w-full p-4 gap-5 flex-wrap border-cyan-400 border-2">
              <div className="aspect-square w-30">
                <img src="/google.png" alt="cisco" />
              </div>
              <div className="p-5 font-retro text-white text-left">
                <p className="">Certificats Google Analytics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-full self-center items-center justify-center border text-center border-dashed hover:bg-orange-400/30 transition-all rounded-md border-orange-500">
            <h2 className="text-orange-500 font-retro p-2 items-center animate-pulse">
              Veille Technologique
            </h2>
          </div>
          <div>
            <div className="flex justify-between w-[80%] mx-auto rounded-md overflow-hidden my-14">
              <div className="w-full rounded-lg overflow-hidden">
                <div className="p-4 bg-neutral-900 w-full h-6 flex items-center">
                  <div className="w-full flex gap-1 justify-end items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 bg-neutral-800 flex flex-col justify-center items-center border-b-radius-lg overflow-hidden">
                  <TypewriterEffect words={veille.map((word: string) => {
                    return { text: word }
                  })} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-black p-5">
              <Grid />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}



