const autoScroll = (id: string) => {
  const $target = document.querySelector(id) ?? undefined;

  scrollIntoView($target);

  setTimeout(() => {
    window.location.hash = id;
  }, 1000);
};

const scrollIntoView = ($element?: Element) => {
  $element &&
    $element.scrollIntoView({
      behavior: 'smooth',
    });
};

export { autoScroll };
