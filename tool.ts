export const isIncludeChinese = (text: string) => /[\u4e00-\u9fa5]+/.test(text);

export const isVueFile = (fileName: string) => /\.vue/.test(fileName);