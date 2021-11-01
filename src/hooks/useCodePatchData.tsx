const $pre = document.querySelector('body > pre');

// Not code line prefixes
const notCodePrefixes = [
  'Index:',
  '@@ ',
  'RCS file:',
  '### Eclipse Workspace Patch',
  '#P ',
  '===================================================================',
  'retrieving revision ',
  'diff ',
  '--- ',
  '+++ ',
];

const [indexFileString, hunkHeader] = notCodePrefixes;

// File name tracker
let currentFileName = '';
let fileNameExtension = '';
let fileCounter = 1;
let files: string[] = [];

//  Line code tracker
let lineCodeFound = 0;
let previousLineCodeFound = lineCodeFound;

// Get each lines
const lines = $pre?.innerHTML.split('\n');

// Get formatted lines
const formattedLines = lines?.map((line: string) => {
  const lineIsNotCode = notCodePrefixes.some(
    (notCodePrefix) => notCodePrefix == line.substring(0, notCodePrefix.length)
  );

  const lineIsCode = !lineIsNotCode;

  // Convert empty new line to an HTML entity to have equal line heights
  // with the rest of the codes
  let formattedLine = line == '' ? '&nbsp;' : line;

  // Default class name of a not code line
  let notCodeLineClassName = '';

  // Default pre tags to empty
  let preTagOpen = '';
  let preTagClose = '';

  const lineIsIndexFileString =
    line.substring(0, indexFileString.length) == indexFileString;

  const lineIsHunkHeader = line.substring(0, hunkHeader.length) == hunkHeader;

  previousLineCodeFound = lineCodeFound;

  if (lineIsIndexFileString) {
    currentFileName = line.replaceAll(indexFileString, '');
    files.push(currentFileName);

    const fileNameSegments = currentFileName.split('.');

    fileNameExtension = fileNameSegments[fileNameSegments.length - 1];

    fileNameExtension = fileNameExtension == 'jsp' ? 'java' : fileNameExtension;

    notCodeLineClassName = 'diff-header-filename';

    fileCounter++;

    formattedLine = formattedLine.replaceAll('Index:', fileCounter - 1 + '.');
  }

  if (lineIsHunkHeader) {
    notCodeLineClassName = 'diff-header-hunk';
  }

  lineCodeFound = lineIsCode ? lineCodeFound + 1 : 0;

  if (previousLineCodeFound > 0 && lineCodeFound == 0) {
    preTagClose = '</code></pre>';
  }

  if (previousLineCodeFound == 0 && lineCodeFound == 1) {
    preTagOpen = `<pre><code class="language-diff-${fileNameExtension} diff-highlight">`;
  }

  if (lineIsCode) {
    return `
${preTagOpen}${formattedLine}`;
  }

  return `${preTagClose}<p class="diff-header-item ${notCodeLineClassName}">${formattedLine}</p>${
    lineIsIndexFileString
      ? `<div id="file-${fileCounter - 1}" class="tw-h-2.5"></div>`
      : ''
  }`;
});

const useCodePatchData = () => {
  return {
    files,
    formattedLines,
  };
};

export default useCodePatchData;
