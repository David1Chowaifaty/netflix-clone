import { FunctionComponent, ReactNode } from "react";

interface HomeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const HomeCard: FunctionComponent<HomeCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="w-full text-white rounded-lg px-6 py-10 space-y-5 bg-gradient-to-tl from-blue-900  to-pink-800">
      <span>{icon}</span>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <h3 className="font-medium">{description}</h3>
    </div>
  );
};

export default HomeCard;
