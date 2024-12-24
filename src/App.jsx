import "./App.css";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LikeProvider } from "../src/context/LikeContext"; 

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LikeProvider> 
        <Router />
      </LikeProvider>
    </QueryClientProvider>
  );
}

export default App;
