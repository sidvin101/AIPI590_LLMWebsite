import Link from "next/link";

const quickLinks = [
  { title: "Duke Health", href: "https://www.dukehealth.org/" },
  { title: "Libraries", href: "https://library.duke.edu/" },
  { title: "Giving to Duke", href: "https://giving.duke.edu/" },
  { title: "Athletics", href: "https://goduke.com/" },
  { title: "About", href: "/about" },
];

export const QuickLinksSection = () => {
  return (
    <section className="bg-duke-blue text-white py-4">
      <div className="container-fluid">
        <ul className="flex flex-wrap items-center justify-center md:justify-between">
          {quickLinks.map((link) => (
            <li key={link.title} className="px-4 py-2">
              <Link
                href={link.href}
                className="hover:underline font-medium"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default QuickLinksSection;
