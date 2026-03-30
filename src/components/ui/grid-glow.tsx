"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import React from "react";

type GridItemProps = {
    area: string;
    icon: React.ReactNode;
    link: string;
    title: string;
    description: React.ReactNode;
}

export function Grid({ items }: { items: GridItemProps[] }) {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-5 xl:max-h-[34rem] xl:grid-rows-2">
            {items.map((item) => (
                <GridItem key={item.title} {...item} />
            ))}
        </ul>
    );
}

const GridItem = ({ area, icon, link, title, description }: GridItemProps) => (
    <li className={`min-h-[14rem] list-none ${area}`}>
        <div className="relative h-full border border-pink-400/30 ">
            <GlowingEffect
                glow={true}
                disabled={false}
                spread={60}
                proximity={80}
                inactiveZone={0}
                borderWidth={6}
                className="absolute"
            />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 bg-slate-950">
                <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
                <div className="space-y-2">
                    <h3 className="pt-0.5 text-xs font-retro text-white">
                        {title}
                    </h3>
                    <p className="font-mono text-sm text-neutral-400">{description}</p>
                    <div>
                        <a href={link} target="_blank" className="text-white font-mono align-text-bottom hover:underline hover:text-cyan-400">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </li>
);
