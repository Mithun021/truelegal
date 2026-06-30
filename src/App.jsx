import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "10px",
            background: "#fff",
            color: "#333",
            fontSize: "14px",
          },
          success: {
            style: {
              border: "1px solid #16a34a",
            },
          },
          error: {
            style: {
              border: "1px solid #dc2626",
            },
          },
        }}
      />

      <AppRoutes />
    </>
  );
}

export default App;