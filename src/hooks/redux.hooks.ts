import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// store types
import type { RootState, AppDispatch } from '../interfaces/redux.interface';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;