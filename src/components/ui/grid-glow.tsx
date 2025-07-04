"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}
export function Grid() {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            {items.map((item) => (
                <GridItem key={item.title} {...item} />
            ))}
        </ul>
    );
}

const items = [
    {
        area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
        icon: <Box className="h-4 w-4 text-white dark:text-neutral-400" />,
        title: "Do things the right way",
        description: "Running out of copy so I'll write anything.",
    },
    {
        area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
        icon: <Settings className="h-4 w-4 text-white dark:text-neutral-400" />,
        title: "The best AI code editor ever.",
        description:
            "Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.",
    },
    {
        area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
        icon: <Lock className="h-4 w-4 text-white dark:text-neutral-400" />,
        title: "You should buy Aceternity UI Pro",
        description: "It's the best money you'll ever spend",
    },
    {
        area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
        icon: <Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />,
        title: "This card is also built by Cursor",
        description: "I'm not even kidding. Ask my mom if you don't believe me.",
    },
    {
        area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
        icon: <Search className="h-4 w-4 text-white dark:text-neutral-400" />,
        title: "Coming soon on Aceternity UI",
        description: "I'm writing the code as I record this, no shit.",
    },
];


const GridItem = ({ area, icon, title, description }: GridItemProps) => (
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
                </div>
            </div>
        </div>
    </li>
);
