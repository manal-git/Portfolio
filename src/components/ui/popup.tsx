import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Popup = ({
    title,
    description,
    icon,
    doc,
    doc2,
    gitlink,
    onClose,
    testimonials,
}: {
    title?: string;
    description?: string;
    icon?: string;
    doc?: string;
    doc2?: string;
    gitlink?: string;
    onClose?: () => void;
    testimonials?: React.ReactNode;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.9 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="bg-black customScrollbar pb-10 shadow text-black w-[65%] md:max-h-[70vh] max-h-[90vh] h-fit  flex flex-col gap-5 overflow-auto"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-neutral-700 w-full h-8 px-2 flex justify-between items-center">
                <div className="flex gap-2">
                    <div className="w-6 h-6">
                        <img src={icon} alt="" />
                    </div>
                    <h2 className="text-amber-50 font-mono md:text-sm text-xs">
                        {title}
                    </h2>
                </div>
                <div className="cursor-pointer hover:bg-red-800" onClick={onClose}>
                    <IconX className="p-1 text-white" />
                </div>
            </div>

            <div className="flex flex-col px-4 sm:px-6 md:px-10">

                {/* Description */}
                <div className="text-slate-200 w-full font-mono text-xs sm:text-sm py-4 sm:py-5">
                    {description}
                </div>

                {/* Documents */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-2">

                    {doc && (
                        <div className="flex items-center gap-2">
                            <img src="/book.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                            <Link
                                href={doc}
                                target="_blank"
                                className="text-blue-500 font-mono text-xs sm:text-sm hover:underline break-words"
                            >
                                Cahier de charges / Spécification technique
                            </Link>
                        </div>
                    )}

                    {doc2 && (
                        <div className="flex items-center gap-2">
                            <img src="/book.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                            <Link
                                href={doc2}
                                target="_blank"
                                className="text-blue-500 font-mono text-xs sm:text-sm hover:underline break-words"
                            >
                                Cahier de test unitaire
                            </Link>
                        </div>
                    )}
                </div>

                {/* Github */}
                <div className="flex items-center gap-2 mt-3">
                    <img src="/github.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    {gitlink && (
                        <Link
                            href={gitlink}
                            target="_blank"
                            className="text-blue-500 font-mono text-xs sm:text-sm hover:underline break-words"
                        >
                            Github
                        </Link>
                    )}
                </div>

                {/* Testimonials */}
                {testimonials && (
                    <div className="mt-4 sm:mt-5 text-xs sm:text-sm">
                        {testimonials}
                    </div>
                )}
            </div>
        </motion.div>
    )
}