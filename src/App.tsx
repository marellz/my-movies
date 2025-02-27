import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        <header className="py-4 flex">
          <div className="flex-auto">
            <h1 className="text-4xl">Welcome</h1>
            <p className="text-gray-500">To your movie app.</p>
          </div>
          <div>
            <button type="button" onClick={() => setAuthenticated(true)}>
              Login
            </button>
          </div>
        </header>

        <main className="py-10 flex-auto">
          {authenticated ? (
            <h1>Authenticated!</h1>
          ) : (
            <h1>Not authenticated!</h1>
          )}
        </main>
        <footer className="py-5">
          <p>
            Build by <a href="#dave">me</a>. Courtesy of TMDB.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
