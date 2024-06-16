import { Header } from "./components/header";
import "./globals.css";

export function App() {
  return (
    <div>
      <Header />
      {/* <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>  */}
    </div>
  );
}
