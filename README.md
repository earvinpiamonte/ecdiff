# ecdiff

Beautifies Git and CVS code patches on the browser.

![alt text](./webstore/social-preview.jpg 'ecdiff screenshot')

## Features

- Code syntax highlighting
- Light/ dark mode

## Usage

1. Open a code patch file on a Chrome/ Chromium-based browser
1. Click on the ecdiff extension icon

> Toggle dark mode on options page: Right click on the ecdiff extension icon then click on "Options".

> Heads up! To format local code patch files at `file:///`, enable "Allow access to file URLs" on [chrome://extensions/?id=jockmidhjggcfnfdinaihmndknopjjij](chrome://extensions/?id=jockmidhjggcfnfdinaihmndknopjjij).

## Supported code patches

- git diff
- unified diff code patches created with Eclipse IDE
- unified diff code patches created with CVS diff

## Syntax highlighting support

- 275 languages ([View list](https://prismjs.com/#supported-languages))

## Built with

- [Create React App](https://create-react-app.dev/) - config override with [CRACO](https://github.com/gsoft-inc/craco)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prism](https://prismjs.com/)
- [TypeScript](https://typescriptlang.org/)

## Add to Google Chrome

Get the latest version of the extension at [Chrome Web Store](https://chrome.google.com/webstore/detail/jockmidhjggcfnfdinaihmndknopjjij/).

## Add to Google Chrome w/ developer mode

1. Clone

```
git clone https://github.com/earvinpiamonte/ecdiff.git
```

2. `cd` to project

```
cd ecdiff/

```

3. Install dependencies

```
npm i
```

4. Build

```
npm run build
```

5. Open a Google Chrome browser and navigate to `chrome://extensions/`.
6. Enable `Developer mode`.
7. Click on `Load unpacked`.
8. Find the project `ecdiff/` and open it. Select `build/` as the extension directory.
9. ecdiff extension now added to Chrome.

## Credits

Icons made by [Ilham Fitrotul Hayat](https://www.flaticon.com/authors/ilham-fitrotul-hayat) from [Flaticon](www.flaticon.com) and generated with [RealFaviconGenerator.net](https://realfavicongenerator.net/).

Code patch attachment used as screenshot - [https://bugzillaattachments.eclipsecontent.org/bugs/attachment.cgi?id=78905](https://bugzillaattachments.eclipsecontent.org/bugs/attachment.cgi?id=78905)

## Maintainer

This project is developed and maintained by [Noel Earvin Piamonte](https://www.earvinpiamonte.com/).
