import { useEffect } from "react";
import "./App.css";
import { About } from "./components/about/About";
import Categories from "./components/categories";
import Collection from "./components/collection";
import { Follow } from "./components/follow/Follow";
import Header from "./components/header";
import NavBar from "./shared/components/NavBar";
import { useDispatch } from "react-redux";
import { fetchTypography } from "./features/typographySlice";
import { fetchMedia } from "./features/mediaSlice";
import { useClickContext } from "./shared/api/ClickContext/ClickContext";
import MessageClick from "./shared/components/MessageClick";

function App() {
  const { triggerClick } = useClickContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypography());
    dispatch(fetchMedia());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Header />
      <Categories />
      <Collection />
      <About />
      <Follow />

      <MessageClick />
    </>
  );
}

export default App;
