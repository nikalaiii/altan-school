import { useEffect } from "react";
import { About, Header, Follow, Categories, Collection } from "./components";
import { NavBar, MessageClick, ErrorBoundary } from "./shared/components";
import { useDispatch } from "react-redux";
import { fetchTypography } from "./features/typographySlice";
import { fetchMedia } from "./features/mediaSlice";
import { useClickContext } from "./shared/contexts";

function App() {
  const { triggerClick } = useClickContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypography());
    dispatch(fetchMedia());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <NavBar />
      <Header />
      <Categories />
      <Collection />
      <About />
      <Follow />

      <MessageClick />
    </ErrorBoundary>
  );
}

export default App;
