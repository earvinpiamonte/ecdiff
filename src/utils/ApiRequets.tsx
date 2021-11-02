const getManifest = async () => {
  const manifestData = await fetch(`${process.env.PUBLIC_URL}/manifest.json`)
    .then((response) => response.json())
    .catch(() => {
      console.log('Error getting manifest data.');
    });
  console.log('Loaded manifest from file.');
  return manifestData;
};

export { getManifest };
