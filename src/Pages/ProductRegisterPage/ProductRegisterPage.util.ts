export const getRemovedFileList = (fileList: FileList, removeIndex: number) => {
  const dataTransfer = new DataTransfer();
  const filteredFiles = [...fileList].filter((_item, fileIndex) => removeIndex !== fileIndex);
  filteredFiles.forEach((file) => dataTransfer.items.add(file));
  return dataTransfer.files;
};
