const createUrl = (url: string) => {
  const normalizedUrl = '/' + url.split(' ').join('-').toLowerCase();

  return normalizedUrl;
};

export { createUrl };
