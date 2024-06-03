import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Projects />

    </div>
  )
}
