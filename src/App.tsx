import React from "react";
import { Provider } from "./Context";
import Overview from "./pages/overview/Overview.component";

const App = () => {
  return (
    <Provider>
      <Overview />;
    </Provider>
  );
};

export default App;
