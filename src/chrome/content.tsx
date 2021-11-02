import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';

import useCodePatchData from '../hooks/useCodePatchData';
import { autoScroll } from '../utils/DOM';

import Header from '../components/Header';
import CodePatch from '../components/CodePatch';
import Footer from '../components/Footer';

const $body = document.body;

const Body = () => {
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

    $body.dataset.formatted = 'true';

    return () => {
      clearTimeout(scrollTimeoutID);
    };
  }, []);

  return (
    <>
      <Header files={files} />
      <CodePatch formattedLines={formattedLines} />
      <Footer />
    </>
  );
};

ReactDOM.render(<Body />, $body);
