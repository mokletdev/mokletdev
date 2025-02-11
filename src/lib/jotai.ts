import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { getListProjects } from "./actions/project";

const asyncListProjectAtom = atom(async () => await getListProjects());

export const listProjectAtom = loadable(asyncListProjectAtom);
