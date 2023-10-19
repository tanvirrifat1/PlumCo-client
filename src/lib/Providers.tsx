"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <HelmetProvider>{children}</HelmetProvider>
    </Provider>
  );
};

export default Providers;
