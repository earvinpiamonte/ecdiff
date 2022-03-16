const init = (tabId: number) => {
  chrome.scripting.executeScript(
    {
      target: { tabId, allFrames: true },
      func: documentIsValidToFormat,
    },
    (results) => {
      const { result } = results[0];
      const validToFormat = result;

      validToFormat && formatPatch(tabId);
    }
  );
};

const documentIsValidToFormat = () => {
  const patchIdentifiers = ['diff --git', 'RCS file:'];

  const $pre = document.querySelector('body > pre');
  const $body = document.body;

  const { formatted } = $body.dataset;
  const hasPreTag = !!$pre;
  const isFormatted = formatted == 'true';
  const isNotFormatted = !isFormatted;
  const isValidPatch = patchIdentifiers.some((patchIdentifier) =>
    $body.innerHTML.includes(patchIdentifier)
  );

  return isNotFormatted && hasPreTag && isValidPatch;
};

const formatPatch = (tabId: number) => {
  chrome.scripting.executeScript(
    {
      target: { tabId, allFrames: true },
      files: ['content.js', 'prismjs/prism.js'],
    },
    () => {
      console.log('Scripts executed!');
    }
  );
  chrome.scripting.insertCSS(
    {
      target: { tabId },
      files: ['prismjs/prism.css'],
    },
    () => {
      console.log('CSS inserted!');
    }
  );
};

chrome.action.onClicked.addListener((tab) => {
  const { id } = tab;

  init(id ?? chrome.tabs.TAB_ID_NONE);
});

export {};
