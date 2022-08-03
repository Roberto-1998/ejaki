import React from "react";
import { Provider } from "./Context";
import Overview from "./pages/overview/Overview.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Overview />;
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
