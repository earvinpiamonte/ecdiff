import React from 'react';

import ThemeProvider from '../providers/ThemeProvider';
import useCodePatchData from '../hooks/useCodePatchData';
import { autoScroll } from '../utils/DOM';

import Header from './Header';
import CodePatch from './CodePatch';
import Footer from './Footer';

const AppContent = () => {
  const { files, formattedLines } = useCodePatchData();

  React.useEffect(() => {
    const id = window.location.hash;
    let scrollTimeoutID = setTimeout(() => {}, 0);

    if (id) {
      const $scrollToFile = document.querySelector(id);

      scrollTimeoutID = setTimeout(() => {
        $scrollToFile && autoScroll(id);
      });
    }

    document.body.dataset.formatted = 'true';

    return () => {
      clearTimeout(scrollTimeoutID);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <Header files={files} />
      <CodePatch formattedLines={formattedLines} />
      <Footer />
    </ThemeProvider>
  );
};

export default AppContent;
