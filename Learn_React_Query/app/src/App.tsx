import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToDo from "./component/ToDo";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ToDo></ToDo>
    </QueryClientProvider>
  );
};

export default App;
