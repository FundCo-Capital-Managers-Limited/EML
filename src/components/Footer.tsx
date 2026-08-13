import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/electrify-logo.svg"
            alt="Electrify MicroGrid"
            width={183}
            height={42}
            className="bg-white rounded-lg px-3 py-2 h-10 w-auto"
          />
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            At EML, we&rsquo;re not just building mini-grids; we&rsquo;re
            lighting up lives, empowering communities, and fostering a
            sustainable future for Nigeria.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Legal
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/cookies-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/grm" className="hover:text-white transition-colors">
                Grievance Redress
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Contact Details
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>Plot 1610, Adeola Hopewell Street,</li>
            <li>Victoria Island, Lagos</li>
            <li className="pt-1">
              <a href="tel:+23401-4545361" className="hover:text-white transition-colors">
                +234 01-4545361
              </a>
            </li>
            <li>
              <a href="mailto:Info@electrifymicrogrid.com" className="hover:text-white transition-colors">
                Info@electrifymicrogrid.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Electrify MicroGrid. All Rights Reserved.
      </div>
    </footer>
  );
}
