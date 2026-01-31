
import React from "react";
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';


//FIXME:CHANGE THE LINKS TO CLINET LINKS

const socialLinkData = [
  {
  
    name: "LinkedIn",
    icon: () => <Linkedin />, // Store as a function
    href: "https://www.linkedin.com/in/sakthi-m-79a98a227/",
    style: "rounded-tr-md",
  },
  {
  
    name: "GitHub",
    icon: () => <Github />,
    href: "https://github.com/sakthi471",
  },
  {
  
    name: "Instagram",
    icon: () => <Instagram />,
    href: "https://www.instagram.com/sakthi__13_/",
  },
  {
  
    name: "Twitter",
    icon: () => <Twitter />,
    href: "https://twitter.com/sakthi_13_",
    style: "rounded-br-md",
  },
];
export default  socialLinkData;