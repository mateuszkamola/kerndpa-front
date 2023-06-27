import './App.css';
import './reset.css';
import './components/main.css';
import React from "react";
import { ModuleManager } from "./components/ModuleManager";
import { Container } from "@mui/material"
import { TasksModule } from "./components/modules/TasksModule";
import { NotesModule} from "./components/modules/NotesModule";

function App() {
  const activeModules = [
    <NotesModule></NotesModule>,
    <TasksModule></TasksModule>
  ];

  const moduleLabels = [
    "Notes",
    "Tasks"
  ];

  return (
    <Container maxWidth="xl">
      <ModuleManager modules={activeModules} labels={moduleLabels}></ModuleManager>
    </Container>
  );
}

export default App;
