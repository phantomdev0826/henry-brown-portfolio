import { useState } from 'react';
import navLinks from '@/lib/navConfig';
import { HambergerMenu } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger Button: Visible on small screens, Hidden on md+ */}
      <SheetTrigger asChild>
        <Button
          className="block md:hidden px-2 flex items-center justify-center"
          variant="default"
          aria-label="Toggle Navigation Menu"
        >
          <HambergerMenu />
          <span className="sr-only">Toggle Navigation Menu</span>
        </Button>
      </SheetTrigger>

      {/* Slide-over navigation panel for mobile */}
      <SheetContent className="w-full h-full border-0 shadow-lg rounded-lg bg-white dark:bg-gray-900">
        <div className="absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col gap-6 items-center px-6 py-8">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavigation(link.href)}
              className="text-lg font-medium text-gray-800 dark:text-white hover:text-accentColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accentColor rounded px-4 py-2 transition-colors duration-150"
            >
              {link.title}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
