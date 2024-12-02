// Referrence: https://github.com/pmndrs/zustand
export type Store<T> = {
  getState: () => T;
  setState: (partial: Partial<T> | ((state: T) => Partial<T>)) => void;
  subscribe: (listener: () => void) => () => void;
};

export function hasStateChanged<T>(prevState: T, updates: Partial<T>): boolean {
  return Object.entries(updates).some(([key, value]) => {
    return prevState[key as keyof T] !== value;
  });
}

/**
 * A custom store creation utility
 */
export function createStore<T extends object>(initialState: T): Store<T> {
  let state = { ...initialState };
  const listeners = new Set<() => void>();
  let isUpdating = false;

  const setState = (partial: Partial<T> | ((state: T) => Partial<T>)) => {
    // Prevent nested updates
    if (isUpdating) return;

    try {
      isUpdating = true;
      const nextState = typeof partial === 'function' ? partial(state) : partial;
      const hasChanged = hasStateChanged(state, nextState);

      if (hasChanged) {
        state = { ...state, ...nextState };
        listeners.forEach((listener) => listener());
      }
    } finally {
      isUpdating = false;
    }
  };

  return {
    getState: () => state,
    setState,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}