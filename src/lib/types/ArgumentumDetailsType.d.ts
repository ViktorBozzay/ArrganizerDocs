export type ArgumentumDetailsType = {
  arg: string;
  desc: string;
  type: CodeWordType;
  children?: ArgumentumDetailsType[];
};
