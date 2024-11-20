import "./App.css";
import { Button } from "./components/ui/button";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  return (
    <>
      <h1 className="text-teal-500 text-3xl font-bold underline">
        Hello Team 23!
      </h1>
      <Button>ShadCN</Button>

      <AdminLogin />
    </>
  );
}
