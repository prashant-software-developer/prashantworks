import type { CaseContent } from "./types";
import { content as b1 } from "./b1";
import { content as b2 } from "./b2";
import { content as b3 } from "./b3";
import { content as b4 } from "./b4";
import { content as b5 } from "./b5";
import { content as inhouse } from "./inhouse";

export const caseContent: Record<string, CaseContent> = { ...inhouse, ...b1, ...b2, ...b3, ...b4, ...b5 };
