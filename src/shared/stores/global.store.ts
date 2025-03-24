import { createStore } from 'zustand';
import { GetGlobalStateInitial, type GlobalStore } from '../models/store.model';
import { createJSONStorage, persist } from 'zustand/middleware';

export const globalStore = createStore<GlobalStore>()(
    persist(
        (set) => GetGlobalStateInitial(set),
        {
            storage: createJSONStorage(() => localStorage),
            name: 'ZustandGlobalStorage',
        }
    ));