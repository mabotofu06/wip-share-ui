import { link } from "fs";

export const APP_NAME = 'Mochieve';
export const APP_VERSION = '0.0.1';

export const MAX_POST_NUM = 10;
export const MAX_WORKING_POST_NUM = 3;

export const APP_SERVICE = {
  TOP: {
    title: "ホーム",
    description: "アプリのトップページ",
    icon: "home",
    link: "/Top"
  },
  USER_INFO: {
    title: "ユーザー",
    description: "ユーザー情報",
    icon: "user",
    link: "/User"
  },
  MY_WORKS: {
    title: "マイプロジェクト",
    description: "自分が関わっているプロジェクト",
    icon: "project",
    link: "/Project/List"
  },
  BOOKMARKS: {
    title: "ブックマーク",
    description: "お気に入りの投稿",
    icon: "bookmark",
    link: "/Bookmarks"
  },
  POSTS: {
    title: "投稿",
    description: "新しい投稿を作成",
    icon: "post",
    link: "/Post/Create"
  }
}
