import Logo from './Logo.tsx'
import UnrealEngine from './UnrealEngine.tsx'
import Blender from "./Blender.tsx";

interface Props {
  icon: keyof typeof iconos;
  width: number;
  height: number;
  className?: string;
}

const iconos: {
  [key: string]: {
    component: any;
    alt: string;
  };
} = {
  logo: {
    component: Logo,
    alt: 'Logo de YokolateArt'
  },
  unrealEngine: {
    component: UnrealEngine,
    alt: 'Logo de Unreal Engine'
  },
  blender: {
    component: Blender,
    alt: 'Logo de Blender'
  }
}

export default function Icon({ icon, width, height, className }: Props) {
  if(iconos[icon] === undefined) {
    throw new Error(`El icono ${icon} no existe, las opciones posibles son: ${Object.keys(iconos).join(', ')}`);
  }

  return iconos[icon].component({
        width,
        height,
        className
      });
}
