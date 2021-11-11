import React from 'react';

import { Menu } from '@headlessui/react';

import { autoScroll } from '../utils/DOM';

const Header = ({ files }: { files?: string[] }) => {
  const handleMenuItemClick = (e: React.MouseEvent<any>) => {
    const id = e.currentTarget.getAttribute('href');
    e.preventDefault();

    autoScroll(id);
  };

  return (
    <header id="header">
      <div id="filesNavigation">
        <Menu as="div" className="relative">
          <Menu.Button className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-lg text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700">
            Files
            <span className="px-2 py-0.5 inline-block ml-1 bg-blue-500 rounded-lg text-white text-xs">
              {files?.length}
            </span>
          </Menu.Button>
          <Menu.Items className="max-h-80 overflow-y-auto w-max absolute right-0 mt-2 top-auto right-0 bottom-0 left-auto transform -translate-y-12 p-1 bg-white rounded-md shadow-lg border dark:bg-gray-900 dark:border-white dark:bg-opacity-60 focus-visible:outline-none focus-visible:ring backdrop-filter backdrop-blur dark:border-opacity-10">
            {files?.map((file, i) => (
              <Menu.Item key={file}>
                {({ active }) => (
                  <a
                    className={`w-full px-2 py-2 block text-left text-sm dark:text-white rounded-md ${
                      active
                        ? 'bg-gray-100 text-gray-900 dark:bg-white dark:bg-opacity-20'
                        : 'text-gray-700'
                    }`}
                    href={`#file-${i + 1}`}
                    onClick={handleMenuItemClick}
                  >
                    <span
                      className={`w-10 h-6.5 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded inline-block mr-2 truncate align-middle ${
                        files.length < 9 ? 'text-center' : 'text-right'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-mono">
                      {file.length > 50 ? '...' : ''}
                      {file.slice(-50)}
                    </span>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
