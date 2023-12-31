import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const errorHandler: Middleware = (_: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const payload: any = action.payload;
    const errMsg = payload?.data?.message ?? '';
    const errCode = `Status ${payload.status}` ?? '';
    toast.error(`Something went wrong! ${errMsg} ${errCode}`);
  }

  return next(action);
};
