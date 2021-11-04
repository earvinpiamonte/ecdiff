import { SparklesIcon } from '@heroicons/react/solid';

import useChromeManifest from '../hooks/useChromeManifest';

const Footer = () => {
  const manifest = useChromeManifest();

  return (
    <footer id="footer" className="tw-py-8">
      <div className="tw-container tw-mx-auto tw-px-2">
        <div className="tw-text-sm tw-text-gray-600">
          Code patch{' '}
          <SparklesIcon className="tw-w-4 tw-h-4 tw-inline-block tw-text-yellow-500 tw-align-middle" />
          beautified
          <SparklesIcon className="tw-w-4 tw-h-4 tw-inline-block tw-text-yellow-500 tw-align-middle" />{' '}
          with{' '}
          <a
            href={manifest.webstoreURL}
            target="_blank"
            rel="noopener noreferrer"
            className="tw-text-blue-700 tw-font-medium"
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
