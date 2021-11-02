import useChromeManifest from './hooks/useChromeManifest';

const App = () => {
  const manifest = useChromeManifest();

  return (
    <section className="tw-container tw-mx-auto tw-px-2 tw-py-12 tw-text-center">
      <h1 className="tw-text-2xl">
        {manifest.name} &middot; v{manifest.version}
      </h1>
      <p className="tw-text-lg">
        Built by{' '}
        <a
          href={manifest.authorURL}
          target="_blank"
          rel="noopener noreferrer"
          className="tw-text-purple-700 tw-font-medium"
        >
          {manifest.author}
        </a>
      </p>
    </section>
  );
};

export default App;
