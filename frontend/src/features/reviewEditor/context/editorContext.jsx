import { createContext, useState } from "react";

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
    const value = "";

    return (
        <EditorContext.Provider value={{ value }}>
            {children}
        </EditorContext.Provider>
    );
};
