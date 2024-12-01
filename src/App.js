import Header from "./Components/HomePageLayout/Header/Header.jsx";
import Footer from "./Components/HomePageLayout/Footer/Footer.jsx";
import "./App.css";
import router from "./Routes.js";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Provider>
  );
};

export default App;
