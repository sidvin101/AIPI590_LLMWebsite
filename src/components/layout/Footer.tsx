import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Information For",
    links: [
      { label: "Students", href: "https://studentaffairs.duke.edu/" },
      { label: "Faculty", href: "https://my.duke.edu/faculty" },
      { label: "Staff", href: "https://hr.duke.edu/" },
      { label: "Alumni", href: "https://alumni.duke.edu" },
    ],
  },
  {
    title: "Duke Resources",
    links: [
      { label: "Duke Health", href: "https://www.dukehealth.org/" },
      { label: "Libraries", href: "https://library.duke.edu/" },
      { label: "Giving to Duke", href: "https://giving.duke.edu/" },
      { label: "Athletics", href: "https://goduke.com/" },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Visitors", href: "https://admissions.duke.edu/visit/" },
      { label: "News Media", href: "https://news.duke.edu" },
      { label: "Maps", href: "https://maps.duke.edu/" },
      { label: "Employment", href: "https://hr.duke.edu/careers" },
      { label: "My Duke", href: "https://my.duke.edu/students/" },
      { label: "Brand Guide", href: "https://brand.duke.edu/" },
      { label: "Emergency", href: "https://emergency.duke.edu/" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { Icon: Facebook, href: "https://www.facebook.com/DukeUniv", label: "Facebook" },
  { Icon: Twitter, href: "https://twitter.com/DukeU", label: "Twitter" },
  { Icon: Instagram, href: "https://www.instagram.com/dukeuniversity/", label: "Instagram" },
  { Icon: Youtube, href: "https://www.youtube.com/user/Duke", label: "Youtube" },
];

export const Footer = () => {
  return (
    <footer className="bg-duke-blue text-white pt-8 pb-4">
      {/* Main footer content */}
      <div className="container-fluid">
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          {/* Logo and Social Links */}
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/duke-logo-white.svg"
                alt="Duke University"
                width={180}
                height={60}
              />
            </Link>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-300 hover:text-white hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom footer - Copyright */}
        <div className="border-t border-blue-800 pt-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-2 md:mb-0">
              Duke University | Durham, NC 27708 | (919) 684-8111
            </div>
            <div className="text-sm text-gray-300">
              <Link href="/privacy" className="hover:underline">
                Privacy Statement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
