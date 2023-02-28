import { Message } from "./Message";
import { User } from "./User";

export type TalkRoom = {
  id: string;
  unreadCount: number;
  lastMessage?: Message;
  talkUser: User;
};
