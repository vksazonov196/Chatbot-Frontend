import { Dispatch } from 'redux';
import axios from 'axios';
import { setMessages } from './redux/MessagesSlice';

type FetchMessagesAction = (dispatch: Dispatch) => Promise<void>;

export const fetchMessages: FetchMessagesAction = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/messages');
    dispatch(setMessages(response.data));
  } catch (error) {
    console.error('Ошибка при загрузке сообщений:', error);
  }
};