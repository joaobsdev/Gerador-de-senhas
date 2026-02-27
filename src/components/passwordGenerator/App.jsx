import PasswordGenerator from "./components/passwordGenerator";

function App() {
  return (
      <main>
          <div className="container">
              <h1 className="app-title">Gerador de Senhas</h1>

              <PasswordGenerator />
          </div>
      </main>
  );
}

export default App;