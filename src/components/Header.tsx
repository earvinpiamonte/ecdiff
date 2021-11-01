import { Menu } from '@headlessui/react';
import { DocumentTextIcon } from '@heroicons/react/outline';

const Header = ({ files }: { files?: string[] }) => {
  return (
    <header id="header">
      <div id="filesNavigation">
        <Menu as="div" className="tw-relative">
          <Menu.Button className="tw-py-2 tw-px-4 tw-bg-white tw-text-purple-500 tw-text-sm tw-font-medium tw-rounded-lg tw-shadow-lg tw-border tw-border-purple-500 hover:tw-bg-gray-50 focus:tw-bg-gray-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-purple-400 focus:tw-ring-opacity-75">
            Files
            <span className="tw-px-2 tw-py-0.5 tw-inline-block tw-ml-1 tw-bg-purple-500 tw-rounded-lg tw-text-white tw-text-xs">
              {files?.length}
            </span>
          </Menu.Button>
          <Menu.Items className="tw-max-h-80 tw-overflow-y-auto tw-w-max tw-absolute tw-right-0 tw-mt-2 tw-top-auto tw-right-0 tw-bottom-0 tw-left-auto tw-transform tw--translate-y-12 tw-bg-white tw-rounded-md tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none tw-p-1">
            {files?.map((file, i) => (
              <Menu.Item key={i * Math.random()}>
                {({ active }) => (
                  <a
                    className={`tw-w-full tw-px-2 tw-py-2 tw-block tw-text-left ${
                      active && 'tw-bg-purple-500 tw-text-white'
                    } tw-rounded-md`}
                    href={`#file-${i + 1}`}
                  >
                    <DocumentTextIcon className="tw-w-5 tw-h-5 tw-align-middle tw-mr-1 tw-inline-block" />
                    <span>
                      {file.length > 50 ? '...' : ''}
                      {file.slice(-50)}
                    </span>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
