export interface LinkItem {
  name: string;
  link: string;
}

export interface UserDataBase {
  id: string;
  name: string;
  iconImg: string;
  info: string;
}

export interface UserData extends UserDataBase {
  headerImg: string,
  links: Array<LinkItem>,
}