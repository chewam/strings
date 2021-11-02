import dynamic from "next/dynamic";

export { default as Landing } from "./landing";
export { default as Candidates } from "./candidates";

export const Team = dynamic(() => import("./team"));
export const Remote = dynamic(() => import("./remote"));
export const Process = dynamic(() => import("./process"));
export const Privacy = dynamic(() => import("./privacy"));
export const Contact = dynamic(() => import("./contact"));
export const Employers = dynamic(() => import("./employers"));
export const ITExpertise = dynamic(() => import("./it-expertise"));
