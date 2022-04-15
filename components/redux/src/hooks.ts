import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppRootStateType } from './store';

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

