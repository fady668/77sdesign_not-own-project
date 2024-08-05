import "@/styles/constants.css";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slider.css";
import { Router } from "react-router-dom";
import { AuthProvider } from "@/contexts/auth.contexts";
import { Provider } from "react-redux";
import store from "@/app/Redux/Store";
import "bootstrap/dist/css/bootstrap.css";
export default function App({ Component, pageProps }) {
  return (
    // <AuthProvider>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    //</AuthProvider>
  );
}
