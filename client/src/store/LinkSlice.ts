import { StateCreator } from 'zustand';

// Define the links schema
export interface Link {
  platform: string;
  link: string;
}

export interface LinksState {
  links: Link[];
  setLinks: (links: Link[]) => void;
  addLink: (link: Link) => void;
  islinkDraft: boolean;
  setlinkDraft: (draft: boolean) => void;
  clearLinks: () => void;
}

// Create the links slice
export const createLinksSlice: StateCreator<LinksState> = (set) => ({
  links: [],
  islinkDraft: false,
  setlinkDraft: (draft: boolean) =>
    set((state) => ({ ...state, islinkDraft: draft })),
  setLinks: (links: Link[]) => set((state) => ({ ...state, links })),
  addLink: (link: Link) =>
    set((state) => ({ ...state, links: [...state.links, link] })),
  clearLinks: () => set({ links: [] }),
});
