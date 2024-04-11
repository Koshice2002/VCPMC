import { Path } from "react-router-dom";

export interface ExtendedPath extends Partial<Path> {
    state?: { [key: string]: any }; // Allow any type for state properties
}
