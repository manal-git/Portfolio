import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Popup = ({
    title,
    description,
    icon,
    doc,
    gitlink,
    onClose,
    testimonials,
}: {
    title?: string;
    description?: string;
    icon?: string;
    doc?: string;
    gitlink?: string;
    onClose?: () => void;
    testimonials?: React.ReactNode;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-neutral-800/80 customScrollbar pb-10 rounded-lg shadow text-black w-[65%] max-h-[90vh] h-fit flex flex-col gap-5 overflow-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-slate-800 w-full h-8 px-2 flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="w-6 h-6">
                        <img src={icon} alt="" />
                    </div>
                    <h2 className="text-amber-50 font-mono">
                        {title}
                    </h2>
                </div>
                <div className="rounded-full cursor-pointer hover:bg-slate-700" onClick={onClose}>
                    <IconX className="p-1 text-white" />
                </div>
            </div>
            <div className="flex flex-col px-10">
                <div className="text-indigo-200 w-full font-mono py-5">
                    {description}
                </div>
                <div className="flex gap-2 mt-2">
                    <div>
                        <img src="/book.png" alt="" className="w-6 h-6" />
                    </div>
                    <div>
                        {doc && (
                            <Link href={doc} target="_blank" className="text-blue-500 font-mono hover:cursor-pointer hover:underline">
                                Cahier de charges
                            </Link>
                        )}
                    </div>
                </div>
                <div className="flex gap-2 mt-2">
                    <div className="">
                        <img src="/github.png" alt="" className="w-6 h-6" />
                    </div>
                    <div className="">
                        {gitlink && (
                            <Link href={gitlink} target="_blank" className="text-blue-500 font-mono hover:cursor-pointer hover:underline">
                                Github
                            </Link>
                        )}
                    </div>
                </div>
                <div>
                    {testimonials && <div className="mt-6">{testimonials}</div>}
                </div>
            </div>
        </motion.div>
    )
}