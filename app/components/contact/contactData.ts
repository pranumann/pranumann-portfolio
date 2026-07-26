import {
  Mail,
  Phone,
  MapPin,
  GitBranch,
  Linkedin,
  Instagram,
} from "lucide-react";

export const contactData = {
  title: "Let's Build Something Amazing",

  subtitle:
    "Have an idea, project or opportunity? Let's connect and create something extraordinary.",

  email: "monarchpraveen@email.com",

  phone: "+91 6299121574",

  location: "India",

  socials: [
    {
      name: "GitHub",
      icon: GitBranch,
      url: "https://github.com/pranumann",
    },

    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/pranumann",
    },

    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/pranumann",
    },
  ],

  cards: [
    {
      title: "Email",
      value: "monarchpraveen@email.com",
      icon: Mail,
    },

    {
      title: "Phone",
      value: "+91 6299121574",
      icon: Phone,
    },

    {
      title: "Location",
      value: "India",
      icon: MapPin,
    },
  ],
};