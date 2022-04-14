import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// @ts-ignore
import type { AppRootStateType, AppDispatch } from './index';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

