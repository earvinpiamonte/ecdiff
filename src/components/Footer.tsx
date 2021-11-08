import { HeartIcon } from '@heroicons/react/solid';

import useChromeManifest from '../hooks/useChromeManifest';

const Footer = () => {
  const manifest = useChromeManifest();

  return (
    <footer
      id="footer"
      className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-2">
        <div className="text-sm text-gray-600">
          Code patch{' '}
          <HeartIcon className="w-5 h-5 inline-block text-red-500 align-top" />{' '}
          beautified with{' '}
          <a
            href={manifest.webstoreURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-medium"
          >
            {manifest.name}
          </a>{' '}
          v{manifest.version}.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
