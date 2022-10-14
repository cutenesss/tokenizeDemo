import {combineReducers} from 'redux';
import userReducers from './userReducers';
import configReducer from './configReducer';
import purchaseReducer from './purchaseReducer';
import UIReducer from './UIReducer';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';

const rootReducers = combineReducers({
  userReducers,
  configReducer,
  purchaseReducer,
  UIReducer,
});

export const useSelector: TypedUseSelectorHook<
  ReturnType<typeof rootReducers>
> = useReduxSelector;
export default rootReducers;
