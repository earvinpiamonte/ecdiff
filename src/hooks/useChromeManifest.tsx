import React from 'react';

const useChromeManifest = () => {
  const [manifest, setManifest] = React.useState<any>();

  const loadManifest = async () => {
    const manifestData =
      typeof chrome.runtime?.getManifest === 'function'
        ? chrome.runtime.getManifest()
        : // Fallback to get manifest via `fetch` if `chrome.runtime.getManifest` is undefined
          await import('../utils/ApiRequets').then(({ getManifest }) =>
            getManifest()
          );
    setManifest(manifestData);
  };

  React.useEffect(() => {
    loadManifest();
  }, []);

  return {
    ...manifest,
    authorURL: 'https://www.earvinpiamonte.com',
    webstoreURL:
      'https://chrome.google.com/webstore/detail/jockmidhjggcfnfdinaihmndknopjjij',
  };
};

export default useChromeManifest;
