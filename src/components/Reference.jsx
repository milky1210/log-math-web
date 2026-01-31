import { useState } from 'react';
import { LOG_CONSTANTS, CATEGORIES } from '../data/constants';
import { Search } from 'lucide-react';

const Reference = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConstants = LOG_CONSTANTS.filter(constant => {
    const matchesCategory = selectedCategory === 'all' || constant.category === selectedCategory;
    const matchesSearch = constant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          constant.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">定数表（Cheat Sheet）</h2>
        <p className="text-gray-600">Log算でよく使う定数の一覧です。覚えて活用しましょう！</p>
      </div>

      {/* 検索バー */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="定数を検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((category) => {
          const count = LOG_CONSTANTS.filter(c => 
            category.id === 'all' || c.category === category.id
          ).length;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? `bg-${category.color}-500 text-white`
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name} ({count})
            </button>
          );
        })}
      </div>

      {/* 定数カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredConstants.map((constant) => {
          const categoryInfo = CATEGORIES.find(c => c.id === constant.category);
          return (
            <div
              key={constant.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4"
              style={{ borderLeftColor: getCategoryColor(constant.category) }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">{constant.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full bg-${categoryInfo?.color}-100 text-${categoryInfo?.color}-700`}>
                  {categoryInfo?.name}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-3xl font-bold text-primary">{constant.value}</span>
              </div>
              <p className="text-sm text-gray-600">{constant.description}</p>
            </div>
          );
        })}
      </div>

      {filteredConstants.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">該当する定数が見つかりません</p>
        </div>
      )}

      {/* 使い方ガイド */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">定数の使い方</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-800 mb-2">掛け算 → 足し算</h4>
            <p className="text-gray-600 text-sm mb-2">例: 2 × 1000 = ?</p>
            <p className="text-primary">0.3 + 3.0 = 3.3 → 10³·³ ≈ 2000</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-800 mb-2">割り算 → 引き算</h4>
            <p className="text-gray-600 text-sm mb-2">例: 1000 ÷ 2 = ?</p>
            <p className="text-primary">3.0 - 0.3 = 2.7 → 10²·⁷ ≈ 500</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-800 mb-2">累乗 → 掛け算</h4>
            <p className="text-gray-600 text-sm mb-2">例: 2⁵ = ?</p>
            <p className="text-primary">0.3 × 5 = 1.5 → 10¹·⁵ ≈ 32</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-800 mb-2">組み合わせ</h4>
            <p className="text-gray-600 text-sm mb-2">例: 1GB × 8 = ?ビット</p>
            <p className="text-primary">9.0 + 0.9 = 9.9 → 10⁹·⁹ビット</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getCategoryColor = (category) => {
  const colors = {
    Math: '#3b82f6',
    Time: '#10b981',
    Physics: '#8b5cf6',
    IT: '#f59e0b',
    Distance: '#ef4444',
    Population: '#ec4899',
  };
  return colors[category] || '#6b7280';
};

export default Reference;
