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
  const $pre = document.querySelector('body > pre');
  const $body = document.body;

  const rcsFileText = 'RCS file:';

  const { formatted } = $body.dataset;
  const noPreTag = !$pre;
  const noRcsFileText = !$body.innerHTML.includes(rcsFileText);

  if (formatted || noPreTag || noRcsFileText) {
    return false;
  }

  return true;
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
