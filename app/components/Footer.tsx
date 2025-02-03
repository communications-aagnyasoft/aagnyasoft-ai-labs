import Link from "next/link"
import Image from "next/image"

interface FooterProps {
  companyName: string
  quickLinks: Array<{ name: string; href: string }>
}

export default function Footer({ companyName, quickLinks }: FooterProps) {
  return (
    <footer className="py-8" style={{ backgroundColor: "#8a2be2", color: "white" }}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image src="logo.png" alt="AagnyaSoft AI Labs Logo" width={60} height={50} className="mr-2" />
            <h3 className="text-xl font-bold text-white">{companyName}</h3>
          </div>
          <p className="text-base md:text-lg mt-4 max-w-sm mx-auto text-center">
            Experience the future of technology with Aagnya's AR and AI solutions.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-center mt-4 md:mt-0">
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline text-white text-sm md:text-base">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center mt-6 md:mt-0">
          <h3 className="text-xl font-bold text-white mb-4">AAGNYASOFT AI LABS PRIVATE LIMITED</h3>
          <address className="not-italic text-sm leading-relaxed">
            #198, CMH Road, 2nd Floor, Desk No.181
            <br />
            Indiranagar, Bangalore,
            <br />
            Karnataka, India 560 038
          </address>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-white/20 pt-8 px-4">
        <p className="text-white text-sm">
          &copy; 2024 {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

