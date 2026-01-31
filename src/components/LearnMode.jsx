import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const LearnMode = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Log算へようこそ！',
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            <strong>Log算</strong>とは、対数（Logarithm）を使って複雑な計算を簡単にする手法です。
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-2xl font-bold text-blue-900 mb-2">目的</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>巨大な数を扱いやすくする</li>
              <li>掛け算・割り算を足し算・引き算に変換</li>
              <li>フェルミ推定を素早く行う</li>
              <li>物理・IT・日常の計算を直感的に</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: '基本原理：掛け算は足し算に',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <p className="text-xl font-bold mb-4">対数の基本性質</p>
            <div className="space-y-3 text-lg">
              <p>log(A × B) = log(A) + log(B)</p>
              <p>log(A ÷ B) = log(A) - log(B)</p>
              <p>log(A<sup>n</sup>) = n × log(A)</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold mb-2">例：</p>
            <p>1000 × 1000 = ?</p>
            <p className="mt-2">→ log(1000) + log(1000) = 3 + 3 = 6</p>
            <p className="mt-2">→ 答え: 10<sup>6</sup> = 1,000,000</p>
          </div>
        </div>
      ),
    },
    {
      title: '覚えるべき基本定数',
      content: (
        <div className="space-y-4">
          <p className="text-lg">これだけ覚えればOK！</p>
          <div className="grid grid-cols-2 gap-4">
            <ConstantCard number="2" logValue="0.3" description="最重要！" />
            <ConstantCard number="3" logValue="0.48" description="約0.5" />
            <ConstantCard number="5" logValue="0.7" description="= 10/2" />
            <ConstantCard number="10" logValue="1.0" description="基準" />
          </div>
          <div className="bg-green-50 p-6 rounded-lg mt-4">
            <p className="font-bold mb-2">応用例：</p>
            <p>8 = 2³ → log(8) = 3 × 0.3 = 0.9</p>
            <p className="mt-2">16 = 2⁴ → log(16) = 4 × 0.3 = 1.2</p>
            <p className="mt-2">1024 ≈ 10³ → log(1024) ≈ 3.0</p>
          </div>
        </div>
      ),
    },
    {
      title: '実践例：時間の計算',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="font-bold text-xl mb-4">覚えるべき時間の定数</p>
            <div className="space-y-2">
              <p>1時間 = 3600秒 → log = 3.55</p>
              <p>1日 = 86400秒 → log = 4.9</p>
              <p>1年 = 31,536,000秒 → log = 7.5</p>
            </div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <p className="font-bold mb-2">例題：1週間は何秒？</p>
            <p className="mt-2">1週間 = 7日</p>
            <p>log(7) + log(1日) = 0.85 + 4.9 = 5.75</p>
            <p className="mt-2">答え: 10<sup>5.75</sup> ≈ 562,000秒</p>
            <p className="text-sm text-gray-600 mt-2">(実際は604,800秒)</p>
          </div>
        </div>
      ),
    },
    {
      title: 'IT・データサイズ',
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-6 rounded-lg">
            <p className="font-bold text-xl mb-4">データサイズの基準</p>
            <div className="space-y-2">
              <p>1 KB (1024 bytes) → log ≈ 3.0</p>
              <p>1 MB (1024 KB) → log ≈ 6.0</p>
              <p>1 GB (1024 MB) → log ≈ 9.0</p>
              <p>1 TB (1024 GB) → log ≈ 12.0</p>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold mb-2">ポイント：</p>
            <p>各単位は3ずつ増える (1024 ≈ 10³)</p>
            <p className="mt-2">Byte ⇔ bit 変換: ×8 → +0.9</p>
          </div>
        </div>
      ),
    },
    {
      title: 'さあ、実践しよう！',
      content: (
        <div className="space-y-4">
          <p className="text-lg">
            基本を学びました。次は実戦モードで問題を解いてみましょう！
          </p>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg text-white text-center">
            <p className="text-3xl font-bold mb-4">🎯</p>
            <p className="text-2xl font-bold">準備完了！</p>
            <p className="mt-2">Log感覚を身につけよう</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-2xl font-bold text-blue-500">2</p>
              <p className="text-sm text-gray-600">= 0.3</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-2xl font-bold text-green-500">1日</p>
              <p className="text-sm text-gray-600">= 4.9</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="text-2xl font-bold text-purple-500">1GB</p>
              <p className="text-sm text-gray-600">= 9.0</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {slides[currentSlide].title}
          </h2>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          {slides[currentSlide].content}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
            <span>前へ</span>
          </button>

          <div className="text-gray-600">
            {currentSlide + 1} / {slides.length}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>次へ</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ConstantCard = ({ number, logValue, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-200">
      <p className="text-3xl font-bold text-blue-600">{number}</p>
      <p className="text-xl text-gray-700 mt-1">= {logValue}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export default LearnMode;
