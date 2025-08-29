import { LoggedUser } from "../../../shared/entities";

export interface AuthState {
  user: LoggedUser | null;
  isLoggedIn: boolean;
}

export const LOGGED_OUT_AUTH_STATE: AuthState = {
  user: null,
  isLoggedIn: false
};

// Lee la sesión del navegador y devuelve un estado válido si existe
function loadAuthFromStorage(): AuthState {
  try {
    const raw = localStorage.getItem('auth');
    if (!raw) return LOGGED_OUT_AUTH_STATE;
    const parsed = JSON.parse(raw) as Partial<AuthState>; //puede no tener todas las propiedades
    if (parsed?.user && parsed?.isLoggedIn) {
      return { user: parsed.user as LoggedUser, isLoggedIn: true };
    }
  } catch { /* ignore */ }
  return LOGGED_OUT_AUTH_STATE; // Si falla o no hay datos, devuelve el estado de deslogueo
}

export const initialAuthState: AuthState = loadAuthFromStorage();
