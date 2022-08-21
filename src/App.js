import React, { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Screen from "./Screen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-6 py-4 bg-[#f3e7dd]">
      <Screen/>
      </div>
    </QueryClientProvider>
  );
}
export default App;
