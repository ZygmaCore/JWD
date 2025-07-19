import Link from 'next/link';
import { School } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'School Profile', href: '/profile' },
  { name: 'Extracurricular', href: '/extracurricular' },
  { name: 'Gallery', href: '/gallery' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <School className="h-7 w-7 text-primary" />
            <span className="font-headline text-xl font-bold text-primary">JWD Ahh School</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} ZygmaCore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
