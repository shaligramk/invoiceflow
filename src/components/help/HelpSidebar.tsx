import React from 'react';

interface HelpLink {
  id: string;
  title: string;
}

interface HelpSidebarProps {
  links: HelpLink[];
  activeSection: string;
}

export function HelpSidebar({ links, activeSection }: HelpSidebarProps) {
  return (
    <nav className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}