import GithubLogo from './assets/github.svg';
import styles from './App.module.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import{
  HomePage
}from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "*",
    element: <Navigate to="/" replace/>
  }
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
