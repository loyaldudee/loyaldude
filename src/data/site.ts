export const site = {
  name: "Mayur Rishi",
  firstName: "Mayur",
  role: "Full-Stack & AI Developer",
  /**
   * Profile photo. Put the image in /public (e.g. /public/profile.jpg) and set
   * this to "/profile.jpg" — the hero arch and the About polaroid both pick it up.
   * While it is null, an empty placeholder frame is shown.
   */
  photoSrc: "/profile.jpg" as string | null,
  photoCaption: "PROFILE.JPG",
  /** Served from /public — replace the PDF there to update it everywhere. */
  resumeUrl: "/Mayur_Rishi_Resume.pdf",
  resumeFilename: "Mayur_Rishi_Resume.pdf",
  /** Shown in the Contact section once set. */
  email: "mayurrishi2004@gmail.com",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
