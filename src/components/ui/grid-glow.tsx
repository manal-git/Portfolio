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
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            {items.map((item) => (
                <GridItem key={item.title} {...item} />
            ))}
        </ul>
    );
}

const GridItem = ({ area, icon, link, title, description }: GridItemProps) => (
    <li className={`min-h-[14rem] list-none ${area}`}>
        <div className="relative h-full rounded-2xl border p-7 md:rounded-3xl md:p-3">
            <GlowingEffect
                glow={true}
                disabled={false}
                spread={60}
                proximity={80}
                inactiveZone={0}
                borderWidth={6}
                className="absolute"
            />

            <div className="relative z-10 flex h-full flex-col justify-between gap-6 rounded-xl bg-neutral-900 p-6">
                <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
                <div className="space-y-3">
                    <h3 className="pt-0.5 font-sans text-xl font-semibold text-white">
                        {title}
                    </h3>
                    <p className="font-sans text-sm text-neutral-400">{description}</p>
                    <div>
                        <a href={link} target="_blank" className="text-white align-text-bottom hover:underline hover:text-blue-400">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </li>
);
