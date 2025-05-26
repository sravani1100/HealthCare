import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  CalendarDays, 
  BarChart3, 
  MessageSquare, 
  HeadphonesIcon,
  Settings 
} from 'lucide-react';

export const generalLinks = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard'
  },
  {
    id: 'history',
    label: 'History',
    icon: History,
    path: '/history'
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: Calendar,
    path: '/calendar'
  },
  {
    id: 'appointments',
    label: 'Appointments',
    icon: CalendarDays,
    path: '/appointments'
  },
  {
    id: 'statistics',
    label: 'Statistics',
    icon: BarChart3,
    path: '/statistics'
  }
];

export const toolsLinks = [
  {
    id: 'chat',
    label: 'Chat',
    icon: MessageSquare,
    path: '/chat'
  },
  {
    id: 'support',
    label: 'Support',
    icon: HeadphonesIcon,
    path: '/support'
  }
];

export const settingsLink = {
  id: 'settings',
  label: 'Settings',
  icon: Settings,
  path: '/settings'
}; 