import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { SCHOOL_INFO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="Gurukul Shikshaniketan Logo"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-110 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  {SCHOOL_INFO.shortName}
                </span>
                <span className="text-xs text-slate-400 leading-tight">
                  English Medium School
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400">{SCHOOL_INFO.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{SCHOOL_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="hover:text-primary transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="hover:text-primary transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={SCHOOL_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SCHOOL_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SCHOOL_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="WhatsApp">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
