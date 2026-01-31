import { AppProvider, useApp } from './context/AppContext';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import LearnMode from './components/LearnMode';
import PracticeMode from './components/PracticeMode';
import Reference from './components/Reference';

function AppContent() {
  const { currentView } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'learn':
        return <LearnMode />;
      case 'practice':
        return <PracticeMode />;
      case 'reference':
        return <Reference />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      <main>
        {renderView()}
      </main>
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>© 2026 Logarithmetic (Log-Zan) - Log算で世界を見よう 📊</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
