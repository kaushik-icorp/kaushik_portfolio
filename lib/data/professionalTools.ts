export type ProfessionalTool = {
  id: string;
  name: string;
  logo: string;
};

export const professionalTools: ProfessionalTool[] = [
  { id: "figma", name: "Figma", logo: "/tools/figma.svg" },
  { id: "nextjs", name: "Next.js", logo: "/tools/nextjs.png" },
  { id: "tailwind", name: "Tailwind CSS", logo: "/tools/tailwind.svg" },
  { id: "xd", name: "Adobe XD", logo: "/tools/xd.svg" },
  { id: "illustrator", name: "Adobe Illustrator", logo: "/tools/illustrator.svg" },
  { id: "photoshop", name: "Adobe Photoshop", logo: "/tools/photoshop.svg" },
  { id: "indesign", name: "Adobe InDesign", logo: "/tools/indesign.svg" },
  { id: "animate", name: "Adobe Animate CC", logo: "/tools/animate.svg" },
];
