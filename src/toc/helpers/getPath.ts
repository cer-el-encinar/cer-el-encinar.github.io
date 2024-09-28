export const getPath = (relativePath: string) => {
  const chunks = relativePath.split('/');
  return chunks.length > 1 ? chunks.slice(0, -1) : [];
};
