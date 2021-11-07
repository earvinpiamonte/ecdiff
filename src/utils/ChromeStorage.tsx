const getChromeData = async (key: string, defaultValue?: any) => {
  const promise = new Promise((resolve) => {
    // chrome.storage.sync.remove(key);

    chrome.storage.sync.get(key, async (result) => {
      const data = result[key]
        ? JSON.parse(result[key])
        : await setChromeData(key, defaultValue);

      resolve(data);
    });
  });

  return await promise;
};

const setChromeData = async (key: string, data: any) => {
  let obj: any = {};
  obj[key] = JSON.stringify(data);
  const parsedData = JSON.parse(obj[key]);

  const promise = new Promise((resolve) => {
    chrome.storage.sync.set(obj, () => resolve(parsedData));
  });

  return await promise;
};

export { getChromeData, setChromeData };
