import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { stepOneReducer, signedMessagesReducer } from './reducers';

const reducers = combineReducers({
  stepOne: stepOneReducer,
  signedMessages: signedMessagesReducer,
});
const initialState = {
  stepOne: {
    general_1: {
      name: 'general 1',
      id: '',
    },
    general_2: {
      name: 'general 2',
      id: '',
    },
    general_3: {
      name: 'general 3',
      id: '',
    },
  },
  signedMessages: {
    general_1: {
      message_1: '',
      message_2: '',
      message: '',
      action: '',
    },
    general_2: {
      message_1: '',
      message_2: '',
      message: '',
      action: '',
    },
    general_3: {
      message_1: '',
      message_2: '',
      message: '',
      action: '',
    },
  },
};
const middleware = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
