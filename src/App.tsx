import ThemeProvider from './providers/ThemeProvider';
import useChromeManifest from './hooks/useChromeManifest';

import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const manifest = useChromeManifest();

  return (
    <ThemeProvider defaultTheme="dark">
      <section className="min-h-screen bg-white py-12 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto lg:w-6/12 px-4">
          <h1 className="text-2xl mb-6">
            <img
              src="./images/favicon-32x32.png"
              className="inline-block mr-2"
              alt="ecdiff icon"
            />
            <span className="inline-block align-middle">
              {manifest.name} &middot; v{manifest.version}
            </span>
          </h1>
          <p className="mb-4">{manifest.description}</p>
          <div className="flex items-center mb-20">
            <ThemeToggle />
            <span className="ml-2">Dark mode</span>
          </div>
        </div>
      </section>
      <footer className="fixed py-8 left-0 right-0 bottom-0 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto lg:w-6/12 px-4">
          <p className="text-sm text-gray-600">
            <span>Designed and built by</span>{' '}
            <a
              href={manifest.authorURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium"
            >
              {manifest.author}
            </a>
            .
          </p>
        </div>
      </footer>
    </ThemeProvider>
  );
};

export default App;
