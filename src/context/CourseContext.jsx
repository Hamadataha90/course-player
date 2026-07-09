"use client";

import { createContext, useContext } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  return (
    <CourseContext.Provider value={{ progress: 88 }}>
      {children}
    </CourseContext.Provider>
  );
}

export const useCourse = () => useContext(CourseContext);