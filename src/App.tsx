import React from 'react';
import './App.css';
import {Button, VechaiProvider} from "@vechaiui/react";
import RulerTile from "./components/RulerTile/RulerTile";

function App() {
  return (
      <VechaiProvider>
          <RulerTile></RulerTile>
      </VechaiProvider>
  );
}

export default App;
