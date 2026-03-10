import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, Calendar, Home, PersonStanding } from "lucide-react";

export const NAV_LIST = [
  { label: "Home", path: "/", icon: Home },
  { label: "Events", path: "/blog", icon: Calendar },
  { label: "HackDKU", path: "https://www.hackdku25.org/", icon: ArrowUpRight },
  { label: "Team", path: "/about", icon: PersonStanding },
];

export const SOCIALS = [
  { 
    label: "HackDKU", 
    path: siteConfig.social.cs_club, 
    icon: ArrowUpRight,
    className: "text-primary hover:text-primary/80 transition-colors" 
  },
  { 
    label: "Instagram", 
    path: siteConfig.social.instagram, 
    icon: Icons.instagram,
    className: "text-pink-600 hover:text-pink-500 transition-colors" 
  },
  { 
    label: "LinkedIn", 
    path: siteConfig.social.linkedin, 
    icon: Icons.linkedin,
    className: "text-blue-600 hover:text-blue-500 transition-colors" 
  },
];
