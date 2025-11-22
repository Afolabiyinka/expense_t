import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  icon?: keyof typeof LucideIcons;
  size?: number;
  className?: string;
}

const IconComponent = ({ icon, size = 20, className }: IconProps) => {
  if (!icon) return null;
  const Icon = LucideIcons[icon] as React.FC<React.SVGProps<SVGSVGElement>>;
  if (!Icon) return null;
  return <Icon className={className} />;
};

export default IconComponent;
