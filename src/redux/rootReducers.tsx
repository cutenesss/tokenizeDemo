import {combineReducers} from 'redux';
import userReducers from './reducer/userReducers';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';

const rootReducers = combineReducers({
  userReducers,
});

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof rootReducers>
> = useReduxSelector;
export default rootReducers;
