import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "../pages/Homepage";
//import AppLayout from "../pages/AppLayout";
//import PageNotFound from "../pages/PageNotFound"; 
import Analize from "../pages/Analize";
import Contact from "../pages/Contact";
import Despre from "../pages/Despre"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

function App(){
  return (
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false}/>
       <BrowserRouter>
            <Routes>
<Route path="/" element={<Homepage />} />
<Route path="Contact" element={<Contact />} />
<Route path="Analize" element={<Analize />} />
<Route path="Despre" element={<Despre />} />
            </Routes>
       </BrowserRouter>
</QueryClientProvider>
  );
}

export default App;