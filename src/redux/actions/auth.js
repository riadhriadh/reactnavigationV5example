

export const AUTH_PERSIST = "AUTH_PERSIST";
export const GET_OPEN_MODE = "GET_OPEN_MODE";


export function getPersistedUserAuth(token) {
  return {
    type: AUTH_PERSIST,
    payload: { token }
  };
}

export function getOpenMode(mode) {
  return {
    type: GET_OPEN_MODE,
    payload: {
      mode
    }
  };
}

export function logoutAction() {
  return {
    type: "PURGE",
    key: "root",
    result: () => null
  };
}
