declare module 'lucide-react' {
  import { FC } from 'react';
  
  export interface IconProps {
    size?: string | number;
    color?: string;
    stroke?: string | number;
    strokeWidth?: string | number;
    fill?: string;
    className?: string;
    style?: React.CSSProperties;
  }
  
  export type Icon = FC<IconProps>;
  
  export const Heart: Icon;
  export const AlertCircle: Icon;
  export const Activity: Icon;
  export const TrendingUp: Icon;
  export const Users: Icon;
  export const Clock: Icon;
  export const CheckCircle: Icon;
  export const ArrowRight: Icon;
  export const Briefcase: Icon;
  export const ChevronRight: Icon;
  export const Lightbulb: Icon;
  export const Target: Icon;
  export const MessageSquare: Icon;
  export const RefreshCw: Icon;
  export const BarChart: Icon;
  export const Brain: Icon;
  export const Stethoscope: Icon;
  export const Building: Icon;
  export const FileText: Icon;
  export const ClipboardCheck: Icon;
  export const Calendar: Icon;
  export const Settings: Icon;
  export const Home: Icon;
  export const Thermometer: Icon;
  export const Wind: Icon;
  export const Droplets: Icon;
  export const Zap: Icon;
  export const Smile: Icon;
  export const Frown: Icon;
  export const Award: Icon;
  export const BookOpen: Icon;
  export const Shield: Icon;
  export const XCircle: Icon;
  export const Send: Icon;
  export const Edit3: Icon;
  export const Download: Icon;
  export const Upload: Icon;
  export const Star: Icon;
  export const UserCheck: Icon;
}