import type { ReactElement } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { motion } from "framer-motion";

interface CardProps {
  titleIcon: ReactElement;
  title: string;
  content?: string;
  addedOn?: string;
}

export function Card(props: CardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col gap-2 max-w-[230px] rounded-xl p-4 min-h-[280px] border border-neutral-200 bg-white cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {props.titleIcon}
          <h2 className="font-semibold">{props.title}</h2>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <IoShareSocialOutline />
          <MdDeleteOutline />
        </div>
      </div>

      <div className="line-clamp-5 text-sm text-gray-600">
        {props.content}
      </div>

      <div className="mt-auto text-xs text-neutral-600">
        Added On {props.addedOn}
      </div>
    </motion.div>
  );
}