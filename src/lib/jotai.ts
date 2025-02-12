import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { getListHighlightedProjects, getListProjects } from "./actions/project";

const asyncListProjectAtom = atom(async () => await getListProjects());

export const listProjectAtom = loadable(asyncListProjectAtom);

const asyncListHighlightedProjectAtom = atom(
  async () => await getListHighlightedProjects()
);

export const listHighlightedProjectAtom = loadable(
  asyncListHighlightedProjectAtom
);
