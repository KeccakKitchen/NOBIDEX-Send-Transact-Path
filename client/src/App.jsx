import { Navbar, Welcome, Footer, Services, Transactions, Introduction } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <Introduction />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App
