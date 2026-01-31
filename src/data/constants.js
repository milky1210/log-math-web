// Log値の定数一覧
// 10^0.5 ≈ 3.16 刻みで覚えやすい値を身近な例と共に整理

export const LOG_CONSTANTS = [
  // ==========================================
  // 基本的な数学定数
  // ==========================================
  { id: 'c1', name: '2', value: 0.3, category: 'Math', description: '🔑 最重要！log₁₀(2) ≈ 0.3', memo: '2倍 = +0.3 を体に染み込ませよう' },
  { id: 'c2', name: '3', value: 0.48, category: 'Math', description: 'log₁₀(3) ≈ 0.48 ≈ 0.5', memo: '約0.5として計算してOK' },
  { id: 'c3', name: '5', value: 0.7, category: 'Math', description: 'log₁₀(5) = log₁₀(10/2) = 1 - 0.3 = 0.7', memo: '10÷2で覚える' },
  { id: 'c4', name: '7', value: 0.85, category: 'Math', description: 'log₁₀(7) ≈ 0.85', memo: '約0.9でも可' },
  { id: 'c5', name: 'π (円周率)', value: 0.5, category: 'Math', description: 'log₁₀(3.14) ≈ 0.5', memo: '3とほぼ同じ' },
  { id: 'c6', name: 'e (自然対数の底)', value: 0.43, category: 'Math', description: 'log₁₀(2.718) ≈ 0.43', memo: '約0.4でOK' },
  { id: 'c7', name: '√10', value: 0.5, category: 'Math', description: 'log₁₀(√10) = 0.5', memo: '√10 ≈ 3.16、これが0.5刻みの基準' },
  
  // ==========================================
  // 時間関連 (基準: 秒)
  // ==========================================
  { id: 't1', name: '1分 (60秒)', value: 1.78, category: 'Time', description: 'log₁₀(60) ≈ 1.78 ≈ 1.8', memo: '約2として概算可' },
  { id: 't2', name: '1時間 (3600秒)', value: 3.56, category: 'Time', description: 'log₁₀(3600) ≈ 3.56 ≈ 3.5', memo: '🔑 よく使う！' },
  { id: 't3', name: '1日 (86400秒)', value: 4.94, category: 'Time', description: 'log₁₀(86400) ≈ 4.94 ≈ 4.9', memo: '🔑 超重要！約5と覚える' },
  { id: 't4', name: '1週間', value: 5.78, category: 'Time', description: 'log₁₀(604800) ≈ 5.78 ≈ 5.8', memo: '1日+log(7) = 4.9+0.85' },
  { id: 't5', name: '1ヶ月 (30日)', value: 6.41, category: 'Time', description: 'log₁₀(2592000) ≈ 6.41 ≈ 6.4', memo: '1日+log(30) = 4.9+1.5' },
  { id: 't6', name: '1年 (365日)', value: 7.50, category: 'Time', description: 'log₁₀(31536000) ≈ 7.50', memo: '🔑 超重要！π×10⁷秒' },
  { id: 't7', name: '10年', value: 8.50, category: 'Time', description: 'log₁₀(10年) ≈ 8.5', memo: '1年+1' },
  { id: 't8', name: '100年 (1世紀)', value: 9.50, category: 'Time', description: 'log₁₀(100年) ≈ 9.5', memo: '約30億秒' },
  { id: 't9', name: '人の寿命 (80年)', value: 9.40, category: 'Time', description: 'log₁₀(80年) ≈ 9.4', memo: '約25億秒' },
  
  // ==========================================
  // 面積 (基準: m²)
  // ==========================================
  { id: 'a1', name: 'A4用紙 (0.06m²)', value: -1.2, category: 'Area', description: 'log₁₀(0.06) ≈ -1.2', memo: '21×29.7cm ≈ 600cm²' },
  { id: 'a2', name: '畳1枚 (1.6m²)', value: 0.2, category: 'Area', description: 'log₁₀(1.6) ≈ 0.2', memo: '約90×180cm' },
  { id: 'a3', name: '6畳部屋 (10m²)', value: 1.0, category: 'Area', description: 'log₁₀(10) = 1.0', memo: '🔑 6畳≈10m²と覚える' },
  { id: 'a4', name: 'テニスコート (260m²)', value: 2.4, category: 'Area', description: 'log₁₀(260) ≈ 2.4', memo: 'シングルス: 23.8×8.2m' },
  { id: 'a5', name: 'サッカー場 (7000m²)', value: 3.85, category: 'Area', description: 'log₁₀(7000) ≈ 3.85', memo: '約100×70m ≈ 0.7ha' },
  { id: 'a6', name: '東京ドーム (4.7ha)', value: 4.67, category: 'Area', description: 'log₁₀(47000) ≈ 4.67', memo: '🔑 面積の基準として有名' },
  { id: 'a7', name: '1km² (100ha)', value: 6.0, category: 'Area', description: 'log₁₀(10⁶) = 6.0', memo: '1000m×1000m' },
  { id: 'a8', name: '皇居 (1.15km²)', value: 6.06, category: 'Area', description: 'log₁₀(1.15×10⁶) ≈ 6.06', memo: '東京ドーム約25個分' },
  { id: 'a9', name: '山手線内側 (63km²)', value: 7.8, category: 'Area', description: 'log₁₀(6.3×10⁷) ≈ 7.8', memo: '東京ドーム約1350個分' },
  { id: 'a10', name: '東京都 (2194km²)', value: 9.34, category: 'Area', description: 'log₁₀(2.194×10⁹) ≈ 9.34', memo: '約2200km²' },
  { id: 'a11', name: '日本 (37.8万km²)', value: 11.58, category: 'Area', description: 'log₁₀(3.78×10¹¹) ≈ 11.58', memo: '🔑 約38万km²' },
  { id: 'a12', name: 'アメリカ (983万km²)', value: 13.0, category: 'Area', description: 'log₁₀(9.83×10¹²) ≈ 13.0', memo: '日本の約26倍' },
  { id: 'a13', name: '地球表面 (5.1億km²)', value: 14.71, category: 'Area', description: 'log₁₀(5.1×10¹⁴) ≈ 14.71', memo: '陸地は約30%' },
  
  // ==========================================
  // エネルギー・仕事 (基準: J = Ws)
  // ==========================================
  { id: 'e1', name: '1cal (カロリー)', value: 0.62, category: 'Energy', description: 'log₁₀(4.18) ≈ 0.62', memo: '1cal = 4.18J' },
  { id: 'e2', name: '1kcal (食品のカロリー)', value: 3.62, category: 'Energy', description: 'log₁₀(4180) ≈ 3.62', memo: '🔑 1kcal = 4180J ≈ 4kJ' },
  { id: 'e3', name: 'おにぎり1個 (180kcal)', value: 5.88, category: 'Energy', description: 'log₁₀(7.5×10⁵) ≈ 5.88', memo: '約750kJ' },
  { id: 'e4', name: '1日の摂取カロリー (2000kcal)', value: 6.92, category: 'Energy', description: 'log₁₀(8.4×10⁶) ≈ 6.92', memo: '約8.4MJ/日' },
  { id: 'e5', name: 'スマホバッテリー (15Wh)', value: 4.73, category: 'Energy', description: 'log₁₀(54000) ≈ 4.73', memo: '15Wh = 54kJ' },
  { id: 'e6', name: 'ノートPCバッテリー (60Wh)', value: 5.33, category: 'Energy', description: 'log₁₀(2.16×10⁵) ≈ 5.33', memo: '60Wh = 216kJ' },
  { id: 'e7', name: '1kWh (電力量の単位)', value: 6.56, category: 'Energy', description: 'log₁₀(3.6×10⁶) ≈ 6.56', memo: '🔑 1kWh = 3.6MJ' },
  { id: 'e8', name: '家庭1日の電力量 (10kWh)', value: 7.56, category: 'Energy', description: 'log₁₀(3.6×10⁷) ≈ 7.56', memo: '約36MJ/日' },
  { id: 'e9', name: 'ガソリン1L (34MJ)', value: 7.53, category: 'Energy', description: 'log₁₀(3.4×10⁷) ≈ 7.53', memo: '🔑 ガソリンはエネルギー密度高い' },
  { id: 'e10', name: 'TNT 1kg (4.2MJ)', value: 6.62, category: 'Energy', description: 'log₁₀(4.2×10⁶) ≈ 6.62', memo: '爆発物の基準' },
  { id: 'e11', name: '広島原爆 (63TJ)', value: 13.8, category: 'Energy', description: 'log₁₀(6.3×10¹³) ≈ 13.8', memo: '約15キロトンTNT' },
  
  // ==========================================
  // 電力・仕事率 (基準: W = J/s)
  // ==========================================
  { id: 'w1', name: 'LED電球 (10W)', value: 1.0, category: 'Power', description: 'log₁₀(10) = 1.0', memo: '白熱電球60W相当の明るさ' },
  { id: 'w2', name: 'スマホ充電 (5W)', value: 0.7, category: 'Power', description: 'log₁₀(5) = 0.7', memo: '低速充電器（5V×1A）' },
  { id: 'w3', name: '急速充電 (20W)', value: 1.3, category: 'Power', description: 'log₁₀(20) ≈ 1.3', memo: 'iPhone急速充電' },
  { id: 'w4', name: '超急速充電 (100W)', value: 2.0, category: 'Power', description: 'log₁₀(100) = 2.0', memo: 'ノートPC/高速スマホ充電' },
  { id: 'w5', name: 'ノートPC (50W)', value: 1.7, category: 'Power', description: 'log₁₀(50) ≈ 1.7', memo: '一般的な使用時' },
  { id: 'w6', name: 'デスクトップPC (300W)', value: 2.5, category: 'Power', description: 'log₁₀(300) ≈ 2.5', memo: 'ゲーミングPCなど' },
  { id: 'w7', name: '人間の基礎代謝 (80W)', value: 1.9, category: 'Power', description: 'log₁₀(80) ≈ 1.9', memo: '🔑 人は80Wの発熱体' },
  { id: 'w8', name: 'エアコン (1kW)', value: 3.0, category: 'Power', description: 'log₁₀(1000) = 3.0', memo: '6〜8畳用' },
  { id: 'w9', name: 'ドライヤー (1.2kW)', value: 3.08, category: 'Power', description: 'log₁₀(1200) ≈ 3.08', memo: '強モード' },
  { id: 'w10', name: '電子レンジ (1.5kW)', value: 3.18, category: 'Power', description: 'log₁₀(1500) ≈ 3.18', memo: '出力は500-1000W' },
  { id: 'w11', name: '一般家庭ピーク (3kW)', value: 3.5, category: 'Power', description: 'log₁₀(3000) ≈ 3.5', memo: '30Aブレーカー' },
  { id: 'w12', name: '一般家庭平均 (500W)', value: 2.7, category: 'Power', description: 'log₁₀(500) ≈ 2.7', memo: '年間約4400kWh÷8760時間' },
  { id: 'w13', name: 'EV充電 (7kW)', value: 3.85, category: 'Power', description: 'log₁₀(7000) ≈ 3.85', memo: '普通充電' },
  { id: 'w14', name: 'EV急速充電 (50kW)', value: 4.7, category: 'Power', description: 'log₁₀(50000) ≈ 4.7', memo: 'CHAdeMO等' },
  { id: 'w15', name: '風力発電1基 (2MW)', value: 6.3, category: 'Power', description: 'log₁₀(2×10⁶) ≈ 6.3', memo: '大型風車' },
  { id: 'w16', name: 'メガソーラー (10MW)', value: 7.0, category: 'Power', description: 'log₁₀(10⁷) = 7.0', memo: '約3万枚のパネル' },
  { id: 'w17', name: '火力発電所1基 (500MW)', value: 8.7, category: 'Power', description: 'log₁₀(5×10⁸) ≈ 8.7', memo: '大規模な発電所' },
  { id: 'w18', name: '原子力発電所1基 (1GW)', value: 9.0, category: 'Power', description: 'log₁₀(10⁹) = 9.0', memo: '🔑 100万kW' },
  { id: 'w19', name: '日本の総発電能力 (200GW)', value: 11.3, category: 'Power', description: 'log₁₀(2×10¹¹) ≈ 11.3', memo: '約2億kW' },
  { id: 'w20', name: 'サーバーラック (10kW)', value: 4.0, category: 'Power', description: 'log₁₀(10⁴) = 4.0', memo: '高密度ラック' },
  { id: 'w21', name: 'データセンター (100MW)', value: 8.0, category: 'Power', description: 'log₁₀(10⁸) = 8.0', memo: '大規模DC、原発の1/10' },
  { id: 'w22', name: 'ハイパースケールDC (500MW)', value: 8.7, category: 'Power', description: 'log₁₀(5×10⁸) ≈ 8.7', memo: 'Google/AWS級' },
  
  // ==========================================
  // IT・データサイズ (基準: byte / bit)
  // ==========================================
  { id: 'i1', name: '1 KB', value: 3.0, category: 'IT', description: 'log₁₀(10³) = 3.0', memo: '厳密には1024だが≈1000' },
  { id: 'i2', name: '1 MB', value: 6.0, category: 'IT', description: 'log₁₀(10⁶) = 6.0', memo: '高画質写真1枚' },
  { id: 'i3', name: '1 GB', value: 9.0, category: 'IT', description: 'log₁₀(10⁹) = 9.0', memo: 'HD動画10分' },
  { id: 'i4', name: '1 TB', value: 12.0, category: 'IT', description: 'log₁₀(10¹²) = 12.0', memo: 'HDD/SSDの容量' },
  { id: 'i5', name: '1 PB', value: 15.0, category: 'IT', description: 'log₁₀(10¹⁵) = 15.0', memo: '大規模DB/DC' },
  { id: 'i6', name: 'Byte→bit変換 (×8)', value: 0.9, category: 'IT', description: 'log₁₀(8) ≈ 0.9', memo: '🔑 重要！B→bは+0.9' },
  { id: 'i7', name: '1 Mbps', value: 6.0, category: 'IT', description: 'log₁₀(10⁶) = 6.0', memo: 'HD動画ストリーミング' },
  { id: 'i8', name: '1 Gbps', value: 9.0, category: 'IT', description: 'log₁₀(10⁹) = 9.0', memo: '光回線' },
  { id: 'i9', name: '10 Gbps', value: 10.0, category: 'IT', description: 'log₁₀(10¹⁰) = 10.0', memo: 'DC内ネットワーク' },
  { id: 'i10', name: 'WiFi 6 (1.2Gbps)', value: 9.08, category: 'IT', description: 'log₁₀(1.2×10⁹) ≈ 9.08', memo: '実効速度' },
  { id: 'i11', name: '5G (10Gbps)', value: 10.0, category: 'IT', description: 'log₁₀(10¹⁰) = 10.0', memo: '理論最大値' },
  
  // ==========================================
  // 距離 (基準: m)
  // ==========================================
  { id: 'd1', name: '人の身長 (1.7m)', value: 0.23, category: 'Distance', description: 'log₁₀(1.7) ≈ 0.23', memo: '約0.2〜0.3' },
  { id: 'd2', name: 'ウサイン・ボルト100m', value: 2.0, category: 'Distance', description: 'log₁₀(100) = 2.0', memo: '100m = 10²' },
  { id: 'd3', name: '東京タワー (333m)', value: 2.52, category: 'Distance', description: 'log₁₀(333) ≈ 2.52', memo: '約2.5' },
  { id: 'd4', name: 'スカイツリー (634m)', value: 2.8, category: 'Distance', description: 'log₁₀(634) ≈ 2.8', memo: '世界一高い電波塔' },
  { id: 'd5', name: 'マラソン (42km)', value: 4.62, category: 'Distance', description: 'log₁₀(42000) ≈ 4.62', memo: '42.195km' },
  { id: 'd6', name: '東京-大阪 (500km)', value: 5.7, category: 'Distance', description: 'log₁₀(5×10⁵) ≈ 5.7', memo: '新幹線で2時間半' },
  { id: 'd7', name: '日本列島 (3000km)', value: 6.48, category: 'Distance', description: 'log₁₀(3×10⁶) ≈ 6.48', memo: '北海道から沖縄' },
  { id: 'd8', name: '地球の半径 (6400km)', value: 6.81, category: 'Distance', description: 'log₁₀(6.4×10⁶) ≈ 6.81', memo: '🔑 約6.8' },
  { id: 'd9', name: '地球の円周 (4万km)', value: 7.6, category: 'Distance', description: 'log₁₀(4×10⁷) ≈ 7.6', memo: '赤道一周' },
  { id: 'd10', name: '地球-月 (38万km)', value: 8.58, category: 'Distance', description: 'log₁₀(3.8×10⁸) ≈ 8.58', memo: '光で1.3秒' },
  { id: 'd11', name: '1AU 地球-太陽 (1.5億km)', value: 11.18, category: 'Distance', description: 'log₁₀(1.5×10¹¹) ≈ 11.18', memo: '光で8分' },
  { id: 'd12', name: '1光年 (9.5兆km)', value: 15.98, category: 'Distance', description: 'log₁₀(9.5×10¹⁵) ≈ 15.98', memo: '約16' },
  
  // ==========================================
  // 人口・数量
  // ==========================================
  { id: 'n1', name: '日本の人口 (1.2億人)', value: 8.08, category: 'Population', description: 'log₁₀(1.2×10⁸) ≈ 8.08', memo: '約8' },
  { id: 'n2', name: '東京都の人口 (1400万人)', value: 7.15, category: 'Population', description: 'log₁₀(1.4×10⁷) ≈ 7.15', memo: '日本の約10%' },
  { id: 'n3', name: 'アメリカの人口 (3.3億人)', value: 8.52, category: 'Population', description: 'log₁₀(3.3×10⁸) ≈ 8.52', memo: '日本の約2.7倍' },
  { id: 'n4', name: '世界人口 (80億人)', value: 9.9, category: 'Population', description: 'log₁₀(8×10⁹) ≈ 9.9', memo: '🔑 約10で概算' },
  { id: 'n5', name: '人体の細胞数 (37兆個)', value: 13.57, category: 'Population', description: 'log₁₀(3.7×10¹³) ≈ 13.57', memo: '約37兆' },
  { id: 'n6', name: 'アボガドロ数', value: 23.78, category: 'Population', description: 'log₁₀(6×10²³) ≈ 23.78', memo: '1molあたりの粒子数' },
  
  // ==========================================
  // 物理定数
  // ==========================================
  { id: 'p1', name: '重力加速度 g (10 m/s²)', value: 1.0, category: 'Physics', description: 'log₁₀(10) = 1.0', memo: '🔑 正確には9.8' },
  { id: 'p2', name: '音速 (340 m/s)', value: 2.53, category: 'Physics', description: 'log₁₀(340) ≈ 2.53', memo: '気温20℃での値' },
  { id: 'p3', name: '光速 (3×10⁸ m/s)', value: 8.48, category: 'Physics', description: 'log₁₀(3×10⁸) ≈ 8.48', memo: '🔑 約8.5' },
  { id: 'p4', name: '水の密度 (1000 kg/m³)', value: 3.0, category: 'Physics', description: 'log₁₀(1000) = 3.0', memo: '1g/cm³ = 1000kg/m³' },
  { id: 'p5', name: '大気圧 (10⁵ Pa)', value: 5.0, category: 'Physics', description: 'log₁₀(10⁵) = 5.0', memo: '1気圧 ≈ 100kPa' },
  { id: 'p6', name: '地球の質量 (6×10²⁴ kg)', value: 24.78, category: 'Physics', description: 'log₁₀(6×10²⁴) ≈ 24.78', memo: '約25' },
  { id: 'p7', name: '太陽の質量 (2×10³⁰ kg)', value: 30.3, category: 'Physics', description: 'log₁₀(2×10³⁰) ≈ 30.3', memo: '地球の33万倍' },
  
  // ==========================================
  // 単位変換（重要！）
  // ==========================================
  { id: 'u1', name: 'km → m', value: 3.0, category: 'Unit', description: '1km = 10³m → +3.0', memo: '🔑 距離の変換' },
  { id: 'u2', name: 'hour → sec', value: 3.56, category: 'Unit', description: '1時間 = 3600秒 → +3.56', memo: '約+3.5' },
  { id: 'u3', name: 'day → sec', value: 4.94, category: 'Unit', description: '1日 = 86400秒 → +4.94', memo: '🔑 約+5' },
  { id: 'u4', name: 'year → sec', value: 7.5, category: 'Unit', description: '1年 ≈ 3.15×10⁷秒 → +7.5', memo: '🔑 超重要' },
  { id: 'u5', name: 'kWh → J', value: 6.56, category: 'Unit', description: '1kWh = 3.6MJ → +6.56', memo: '電力量の変換' },
  { id: 'u6', name: 'kcal → J', value: 3.62, category: 'Unit', description: '1kcal ≈ 4200J → +3.62', memo: '約+3.6' },
  { id: 'u7', name: 'Byte → bit', value: 0.9, category: 'Unit', description: '×8 → +0.9', memo: '🔑 データ転送計算で必須' },
  { id: 'u8', name: 'ha → m²', value: 4.0, category: 'Unit', description: '1ha = 10⁴m² → +4.0', memo: '100m×100m' },
  { id: 'u9', name: 'km² → m²', value: 6.0, category: 'Unit', description: '1km² = 10⁶m² → +6.0', memo: '面積の変換' },
];

// カテゴリのリスト
export const CATEGORIES = [
  { id: 'all', name: 'すべて', color: 'gray', icon: '📋' },
  { id: 'Math', name: '数学', color: 'blue', icon: '🔢' },
  { id: 'Time', name: '時間', color: 'green', icon: '⏰' },
  { id: 'Area', name: '面積', color: 'yellow', icon: '📐' },
  { id: 'Energy', name: 'エネルギー', color: 'orange', icon: '⚡' },
  { id: 'Power', name: '電力・仕事率', color: 'red', icon: '🔌' },
  { id: 'IT', name: 'IT・データ', color: 'cyan', icon: '💻' },
  { id: 'Distance', name: '距離', color: 'purple', icon: '📏' },
  { id: 'Population', name: '人口・数量', color: 'pink', icon: '👥' },
  { id: 'Physics', name: '物理', color: 'indigo', icon: '🔬' },
  { id: 'Unit', name: '単位変換', color: 'teal', icon: '🔄' },
];

// レベル表示用
export const USER_LEVELS = [
  { minSolved: 0, title: 'Log初心者', emoji: '🌱' },
  { minSolved: 5, title: 'Log見習い', emoji: '📖' },
  { minSolved: 10, title: 'Log使い', emoji: '✨' },
  { minSolved: 20, title: 'Log職人', emoji: '🔧' },
  { minSolved: 35, title: 'Logマスター', emoji: '🎓' },
  { minSolved: 50, title: 'Log博士', emoji: '🔬' },
  { minSolved: 75, title: 'Log仙人', emoji: '🧙' },
  { minSolved: 100, title: 'Log神', emoji: '👑' },
];

