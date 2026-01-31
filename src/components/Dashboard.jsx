import { useApp } from '../context/AppContext';
import { Award, Star, TrendingUp, BookOpen } from 'lucide-react';
import { PROBLEMS } from '../data/problems';

const Dashboard = () => {
  const { setCurrentView, userProgress, getUserLevel } = useApp();
  const userLevel = getUserLevel();

  const stats = [
    { label: '正解数', value: userProgress.totalCorrect, icon: Star, color: 'text-yellow-500' },
    { label: 'クリア問題', value: userProgress.solvedProblems.length, icon: TrendingUp, color: 'text-green-500' },
    { label: '総問題数', value: PROBLEMS.length, icon: BookOpen, color: 'text-blue-500' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* ユーザーレベル表示 */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white mb-8 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Award size={32} />
              <h2 className="text-3xl font-bold">{userLevel.title}</h2>
            </div>
            <p className="text-blue-100">Level {userLevel.level}</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{userProgress.totalCorrect}</div>
            <div className="text-sm text-blue-100">問題クリア</div>
          </div>
        </div>
      </div>

      {/* 統計情報 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <stat.icon className={`${stat.color}`} size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* アクションカード */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActionCard
          title="学習モード"
          description="Log算の基礎を学びましょう"
          icon={BookOpen}
          color="bg-green-500"
          onClick={() => setCurrentView('learn')}
        />
        <ActionCard
          title="実戦モード"
          description="クイズに挑戦してLog感覚を磨こう"
          icon={TrendingUp}
          color="bg-purple-500"
          onClick={() => setCurrentView('practice')}
        />
      </div>

      {/* イントロダクション */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Log算とは？</h3>
        <p className="text-gray-600 mb-4">
          対数（Logarithm）を使って、巨大な数や複雑な計算を簡単に扱う手法です。
          掛け算を足し算に、割り算を引き算に変換することで、フェルミ推定や物理計算を
          直感的に行えるようになります。
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-blue-900 font-medium">例: 2 ≈ 0.3, 10 = 1.0</p>
          <p className="text-blue-700 text-sm mt-1">
            1000 × 1000 = 10⁶ → log₁₀(10⁶) = 6.0
          </p>
        </div>
      </div>
    </div>
  );
};

const ActionCard = ({ title, description, icon: Icon, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-left group"
    >
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </button>
  );
};

export default Dashboard;
