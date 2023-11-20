export type TChat = {
  text: string;
  currentUser: boolean;
  id: number;
};

export type TConversation = {
  id: number;
  otherUser: string;
  chat: TChat[];
};
