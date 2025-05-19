import { useEffect, useState } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CreateAppStore from "./redux/store";

const AppContainer = () => {
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeStore = async () => {
      try {
        const appStore = await CreateAppStore();
        setStore(appStore);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    initializeStore();
    return () => {};
  }, []);

  if (loading) {
    return <div>loading..</div>;
  }
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default AppContainer;
