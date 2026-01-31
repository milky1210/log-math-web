import { BookOpen, Trophy, Library, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Navigation = () => {
  const { currentView, setCurrentView } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'ホーム', icon: Home },
    { id: 'learn', label: '学習', icon: BookOpen },
    { id: 'practice', label: '実戦', icon: Trophy },
    { id: 'reference', label: '定数表', icon: Library },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">📊</div>
            <h1 className="text-xl font-bold text-gray-800">Logarithmetic</h1>
            <span className="text-sm text-gray-500">(Log-Zan)</span>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentView(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  currentView === id
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
