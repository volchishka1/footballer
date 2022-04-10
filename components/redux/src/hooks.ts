import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {rootReducer, AppDispatch } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
// @ts-ignore
export const useAppSelector: TypedUseSelectorHook<rootReducer> = useSelector

