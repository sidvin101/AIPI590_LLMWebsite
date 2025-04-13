import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const topNavLinks = [
  { title: "Students", href: "https://studentaffairs.duke.edu/" },
  { title: "Faculty", href: "https://my.duke.edu/faculty" },
  { title: "Staff", href: "https://hr.duke.edu/" },
  { title: "Alumni", href: "https://alumni.duke.edu" },
];

const mainNavLinks = [
  {
    title: "Admissions",
    href: "/admissions",
    dropdown: [
      { title: "Undergraduate Admissions", href: "https://admissions.duke.edu/" },
      { title: "Graduate School", href: "https://gradschool.duke.edu/" },
      { title: "Financial Aid", href: "https://financialaid.duke.edu/" },
    ]
  },
  {
    title: "Academics",
    href: "/academics",
    dropdown: [
      { title: "Trinity College of Arts & Sciences", href: "https://trinity.duke.edu/" },
      { title: "Pratt School of Engineering", href: "https://pratt.duke.edu/" },
      { title: "Office of Undergraduate Education", href: "https://undergrad.duke.edu/" },
      { title: "Libraries", href: "https://library.duke.edu/" },
    ]
  },
  {
    title: "Research",
    href: "/research",
    dropdown: [
      { title: "Duke Research", href: "https://research.duke.edu/" },
      { title: "Research News", href: "https://today.duke.edu/research" },
      { title: "Undergraduate Research", href: "https://undergraduateresearch.duke.edu" },
    ]
  },
  {
    title: "Global",
    href: "/global",
    dropdown: [
      { title: "Duke Global", href: "https://global.duke.edu" },
      { title: "Duke Kunshan University", href: "https://dukekunshan.edu.cn" },
      { title: "Duke-NUS Medical School", href: "https://www.duke-nus.edu.sg/" },
    ]
  },
  {
    title: "Arts",
    href: "/arts",
    dropdown: [
      { title: "Duke Arts", href: "https://arts.duke.edu" },
      { title: "Music", href: "https://music.duke.edu/" },
      { title: "Nasher Museum", href: "https://nasher.duke.edu" },
    ]
  },
  {
    title: "Schools & Institutes",
    href: "/schools",
    dropdown: [
      { title: "Trinity College of Arts & Sciences", href: "https://trinity.duke.edu/" },
      { title: "Pratt School of Engineering", href: "https://pratt.duke.edu/" },
      { title: "Nicholas School of the Environment", href: "https://nicholas.duke.edu/" },
      { title: "Fuqua School of Business", href: "https://www.fuqua.duke.edu/" },
    ]
  },
];

export const Header = () => {
  return (
    <header className="w-full">
      {/* Top navigation bar */}
      <div className="bg-duke-blue text-white text-sm">
        <div className="container-fluid flex justify-end items-center h-10">
          {topNavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="px-3 py-2 hover:underline"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-duke-blue text-white border-t border-blue-800">
        <div className="container-fluid flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/duke-logo-white.svg"
              alt="Duke University"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Main nav links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-white hover:bg-duke-blue-light flex items-center px-3 py-2">
                        {link.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white mt-1 z-50">
                      {link.dropdown.map((item, i) => (
                        <DropdownMenuItem key={i} asChild>
                          <Link
                            href={item.href}
                            className="w-full text-duke-blue hover:bg-duke-cream"
                          >
                            {item.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white hover:bg-duke-blue-light px-3 py-2 inline-block"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Search button */}
          <Button variant="ghost" className="text-white hover:bg-duke-blue-light p-2">
            <Image
              src="/images/search-icon.svg"
              alt="Search"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
