import useChromeManifest from '../hooks/useChromeManifest';

const Footer = () => {
  const manifest = useChromeManifest();

  return (
    <footer id="footer" className="tw-py-8">
      <div className="tw-container tw-mx-auto tw-px-2">
        <div className="tw-text-sm tw-text-gray-600">
          {manifest.name} v{manifest.version}. Built by{' '}
          <a
            href={manifest.authorURL}
            target="_blank"
            rel="noopener noreferrer"
            className="tw-text-blue-700 tw-font-medium"
          >
            {manifest.author}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
