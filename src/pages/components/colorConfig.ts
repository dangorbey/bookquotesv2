export type Color = 'amber' | 'lime' | 'orange' | 'pink' | 'cyan';

type ColorConfigType = {
  [color: string]: {
    gradient: string;
    base: string;
    hover: string;
    active: string;
  };
};

export const colorConfig: ColorConfigType = {
  amber: {
    gradient: "bg-gradient-to-r from-amber-200 from-10% via-amber-100 via-30% to-amber-300 to-90%",
    base: "bg-amber-200",
    hover: "hover:bg-amber-300",
    active: "border-2 border-amber-400",
  },
  orange: {
    gradient: "bg-gradient-to-r from-orange-200 from-10% via-orange-100 via-30% to-orange-300 to-90%",
    base: "bg-orange-200",
    hover: "hover:bg-orange-300",
    active: "border-2 border-orange-400",
  },
  lime: {
    gradient: "bg-gradient-to-r from-lime-200 from-10% via-lime-100 via-30% to-lime-300 to-90%",
    base: "bg-lime-200",
    hover: "hover:bg-lime-300",
    active: "border-2 border-lime-400",
  },
  cyan: {
    gradient: "bg-gradient-to-r from-cyan-200 from-10% via-cyan-100 via-30% to-cyan-300 to-90%",
    base: "bg-cyan-200",
    hover: "hover:bg-cyan-300",
    active: "border-2 border-cyan-400",
  },
  purple: {
    gradient: "bg-gradient-to-r from-purple-200 from-10% via-purple-100 via-30% to-purple-300 to-90%",
    base: "bg-purple-200",
    hover: "hover:bg-purple-300",
    active: "border-2 border-purple-400",
  },
  pink: {
    gradient: "bg-gradient-to-r from-pink-200 from-10% via-pink-100 via-30% to-pink-300 to-90%",
    base: "bg-pink-200",
    hover: "hover:bg-pink-300",
    active: "border-2 border-pink-400",
  },
};

export type GradientConfigType = {
  [color in Color]: string;
};

export const gradients: GradientConfigType = Object.fromEntries(
  Object.entries(colorConfig).map(([color, values]) => [color, values.gradient])
) as GradientConfigType;