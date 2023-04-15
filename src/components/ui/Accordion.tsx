"use client";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
interface AccordionProps {
  title: string;
  description: string;
  open: boolean;
  onClick: () => void;
}

const Accordion: React.FunctionComponent<AccordionProps> = ({
  title,
  description,
  open,
  onClick,
}) => {
  const [descRef, { height }] = useMeasure();

  return (
    <motion.div
      layout
      onClick={onClick}
      animate={{
        height,
      }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer select-none"
    >
      <div
        className="py-1 space-y-1 text-white font-medium text-lg lg:text-2xl"
        ref={descRef}
      >
        <span className="flex items-center bg-[#132144] hover:bg-[#223362] px-4 py-4 lg:h-24">
          <p className="flex-1">{title}</p>
          {!open ? (
            <PlusIcon className="h-5 w-5 lg:h-8 lg:w-8" />
          ) : (
            <XMarkIcon className="h-5 w-5 lg:h-8 lg:w-8" />
          )}
        </span>
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="mt-2  px-4 py-4 bg-[#132144]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Accordion;
