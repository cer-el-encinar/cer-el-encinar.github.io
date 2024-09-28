export const getFullPath = (relativePath: string) =>
  relativePath.substring(0, relativePath.length - 4).split('/');
