import { AIProvider } from "../context/AIContext";

export default function AppProvider({
  children,
}) {
  return (
    <AIProvider>
      {children}
    </AIProvider>
  );
}