import GithubLogo from './assets/github.svg';
import styles from './App.module.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

function App() {
  return (
    <>
      <nav className={styles.nav}>
        <img src={GithubLogo} alt="github-logo" className={styles.logo}/>
        <div>
          <h1 className={styles.title}>Github Searcher</h1>
          <p className={styles.subtitle}>Search users or repositories Github</p>
        </div>
      </nav>
      <RouterProvider router={router} />
    </>
  )
}

export default App
