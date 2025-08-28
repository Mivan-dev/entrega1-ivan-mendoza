// ACTIONS con LOGIN usando NgRx

import { createAction, props } from "@ngrx/store";

// handle auth actions
export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const logout = createAction('[Auth] Logout');