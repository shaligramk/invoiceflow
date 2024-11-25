import React from 'react';
import { Menu } from '@headlessui/react';
import { Globe, Sun, Moon } from 'lucide-react';
import { translations } from '../i18n/translations';

interface Props {
  language: keyof typeof translations;
  isDarkMode: boolean;
  onLanguageChange: (lang: keyof typeof translations) => void;
  onThemeToggle: () => void;
}

const languages = {
  en: 'English',
  es: 'Español',
  hi: 'हिंदी',
  zh: '中文',
  fr: 'Français',
};

export default function Header({ language, isDarkMode, onLanguageChange, onThemeToggle }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Language Selector */}
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Globe className="h-5 w-5 mr-2" />
                {languages[language]}
              </Menu.Button>
              <Menu.Items className="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {Object.entries(languages).map(([code, name]) => (
                    <Menu.Item key={code}>
                      {({ active }) => (
                        <button
                          onClick={() => onLanguageChange(code as keyof typeof translations)}
                          className={`${
                            active ? 'bg-gray-100 dark:bg-gray-600' : ''
                          } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full text-left`}
                        >
                          {name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Menu>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <button
              onClick={onThemeToggle}
              className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isDarkMode ? (
                <>
                  <Sun className="h-5 w-5 mr-2" />
                  {translations[language].header.lightMode}
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 mr-2" />
                  {translations[language].header.darkMode}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
