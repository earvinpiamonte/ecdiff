import ReactDOM from 'react-dom';

import '../index.css';

import useCodePatchData from '../hooks/useCodePatchData';

import Header from '../components/Header';
import CodePatch from '../components/CodePatch';
import Footer from '../components/Footer';

const $body = document.body;

const Body = () => {
  const { files, formattedLines } = useCodePatchData();

  return (
    <>
      <Header files={files} />
      <CodePatch formattedLines={formattedLines} />
      <Footer />
    </>
  );
};

$body.dataset.formatted = 'true';

ReactDOM.render(<Body />, document.body);
