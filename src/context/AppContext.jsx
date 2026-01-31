import { createContext, useContext, useState, useEffect } from 'react';
import { USER_LEVELS } from '../data/constants';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('logmath-progress');
    return saved ? JSON.parse(saved) : {
      solvedProblems: [],
      totalCorrect: 0,
      currentLevel: 1,
      survivalRecord: null,
    };
  });

  useEffect(() => {
    localStorage.setItem('logmath-progress', JSON.stringify(userProgress));
  }, [userProgress]);

  const markProblemSolved = (problemId) => {
    setUserProgress(prev => ({
      ...prev,
      solvedProblems: [...new Set([...prev.solvedProblems, problemId])],
      totalCorrect: prev.totalCorrect + 1,
    }));
  };

  const updateSurvivalRecord = (record) => {
    setUserProgress(prev => {
      const currentBest = prev.survivalRecord;
      if (!currentBest || record.score > currentBest.score) {
        return {
          ...prev,
          survivalRecord: record,
        };
      }
      return prev;
    });
  };

  const getUserLevel = () => {
    const solvedCount = userProgress.solvedProblems.length;
    let userLevel = USER_LEVELS[0];
    
    for (const level of USER_LEVELS) {
      if (solvedCount >= level.minSolved) {
        userLevel = level;
      } else {
        break;
      }
    }
    
    return {
      ...userLevel,
      solvedCount,
      nextLevel: USER_LEVELS.find(l => l.minSolved > solvedCount),
    };
  };

  const resetProgress = () => {
    setUserProgress({
      solvedProblems: [],
      totalCorrect: 0,
      currentLevel: 1,
      survivalRecord: null,
    });
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        userProgress,
        markProblemSolved,
        updateSurvivalRecord,
        getUserLevel,
        resetProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
