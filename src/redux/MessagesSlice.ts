import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Message } from '../types/Message';


interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages = [action.payload, ...state.messages];
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { addMessage, setMessages } = messageSlice.actions;
export default messageSlice.reducer;