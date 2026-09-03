/**
 * 和風ツール工房 — 拡張機能データ
 * 出典: 「拡張機能のスプレッドシート」(コンテンツシート) を要約整形。
 * 公開前に本文の校閲を推奨(自動要約のため表現の粗さが残る箇所がある)。
 * アイコンは E:\...\extensions\{no.フォルダ}\icons\icon128.png から
 * assets/icons/extNN.png としてコピー済み(スプレッドシート行順=フォルダ連番順)。
 */
const CATEGORY_LABELS = {
  writing: "ビジネス文章・敬語",
  reading: "読書・情報収集",
  focus: "集中・生産性",
  shopping: "ショッピング・節約",
  tabs: "タブ・ブックマーク管理",
  design: "和風デザイン",
  dev: "開発者ツール",
  privacy: "プライバシー保護",
};

const EXTENSIONS = [
  { no: 1, id: "ext01", name: "敬語ビジネス作成アシスタント", category: "writing", tagline: "箇条書きから美しいビジネス敬語へ", description: "カジュアルな文章を4段階の敬語レベルでビジネスメール向けに一瞬で変換する。" },
  { no: 2, id: "ext02", name: "丁寧メール査定AI", category: "writing", tagline: "文章の「丁寧度」をスコア化", description: "作成中のメールを100点満点で査定し、冷たい印象を与える表現を具体的に添削する。" },
  { no: 3, id: "ext03", name: "日本のSNSスマート返信", category: "writing", tagline: "SNSの返信に迷ったら空気を読んで即提案", description: "SlackやLINE WORKS、Xでの返信を、相手との関係性に合わせて自動生成する。" },
  { no: 4, id: "ext04", name: "英語サイト自然要約", category: "reading", tagline: "見出しと注目文をその場で一覧表示", description: "海外ニュースや技術文書から見出しと注目文を実際に抽出して一覧表示。専門用語は日本語訳と検索リンク付きで確認できる。" },
  { no: 5, id: "ext05", name: "AI文字数調整カウンター", category: "writing", tagline: "文の区切りを尊重して文字数をぴったり調整", description: "読みやすさ黄金比診断つき。指定文字数に収まるよう、文の区切りを尊重して自然にトリミングする。" },
  { no: 6, id: "ext06", name: "よみがなルビ振り", category: "reading", tagline: "難しい漢字にふりがなを自動表示", description: "学年・難易度別に調整できる、子供から日本語学習者まで使えるルビ振りツール。" },
  { no: 7, id: "ext07", name: "カタカナIT用語英訳辞書", category: "dev", tagline: "カタカナ語にマウスを重ねるだけで意味表示", description: "「アグリー」「アサイン」など、聞きづらいカタカナ用語の本来の英語と意味を即表示。" },
  { no: 8, id: "ext08", name: "心のこもった謝罪文メーカー", category: "writing", tagline: "誠意が伝わる謝罪文をすぐ作成", description: "状況や相手に応じた、失礼のないビジネス謝罪文を素早く組み立てる。" },
  { no: 9, id: "ext09", name: "日本語AI議事録アシスト", category: "focus", tagline: "曖昧な会話から決定事項だけを抽出", description: "リアルタイム音声認識で文字起こしし、日本語特有の「建前」を読み解いて要約する。" },
  { no: 10, id: "ext10", name: "リアル海外スラング翻訳", category: "reading", tagline: "海外ネットスラングを日本語の感覚に意訳", description: "Reddit・YouTube・Xで見かける最新スラングを、辞書に載らない意味まで意訳する。" },
  { no: 11, id: "ext11", name: "タブグループ整理「蔵」", category: "tabs", tagline: "開きすぎたタブを「蔵」に一括収納", description: "ドメインごとに自動グループ化し、使っていないタブは自動スリープでメモリを解放する。" },
  { no: 12, id: "ext12", name: "原稿用紙風文字数カウンター", category: "writing", tagline: "400字詰め原稿用紙換算でリアルタイム表示", description: "美しい縦書きプレビューと執筆作法チェックを備えた、書き手のための文字数カウンター。" },
  { no: 13, id: "ext13", name: "集中盆栽タイマー", category: "focus", tagline: "作業中の「浮気」を盆栽育成で防ぐ", description: "ポモドーロタイマーと育成ゲームを融合させ、集中の継続を視覚的に促す。" },
  { no: 14, id: "ext14", name: "スケジュールの横窓", category: "focus", tagline: "ページ遷移せず予定をサイドバーに常駐", description: "Googleカレンダー等の予定を、和風の障子UIでブラウザの端に表示し続ける。" },
  { no: 15, id: "ext15", name: "付箋壁紙", category: "focus", tagline: "新規タブを和紙ふせんのアイデア帳に", description: "畳や杉板の壁紙に、ドラッグで自由に貼れる和紙ふせんを配置できる。" },
  { no: 16, id: "ext16", name: "楽々コピペ助手", category: "focus", tagline: "選択するだけでコピー・翻訳・検索", description: "テキスト選択から先の操作を1ステップに短縮する、地味だが手放せない補助ツール。" },
  { no: 17, id: "ext17", name: "日本のブックマーク整理術", category: "tabs", tagline: "重複・休眠リンクを自動で仕分け", description: "5S(整理・整頓・清掃)の考え方で、長すぎるタイトルの簡素化まで自動で行う。" },
  { no: 18, id: "ext18", name: "定時退社リマインダー", category: "focus", tagline: "定時が近づくと画面を夕暮れ色に", description: "残業が常態化する前に、画面の色合いで自然に退社のタイミングを知らせる。" },
  { no: 19, id: "ext19", name: "読書集中ルーラー", category: "reading", tagline: "視線をガイドして長文を読み切る", description: "広告やサイドバーによる視覚的ノイズを抑え、紙の本のように集中して読める。" },
  { no: 20, id: "ext20", name: "一発企業データ検索", category: "focus", tagline: "右クリックで企業情報を即座に表示", description: "BtoB営業や企業研究で、複数タブを開かずその場で企業データを確認できる。" },
  { no: 21, id: "ext21", name: "最安値ハンター", category: "shopping", tagline: "楽天市場・Yahoo!ショッピングの最安値を自動取得、他4サイトは検索結果を一括表示", description: "商品名のコピペ往復をせず、楽天市場・Yahoo!ショッピングは公式APIで実際の最安値を、Amazon・価格.com・ヨドバシ.com・メルカリは検索結果を一括で開いて比較できる。" },
  { no: 22, id: "ext22", name: "メルカリかんたん出品補助", category: "shopping", tagline: "商品ページから出品文を自動生成", description: "ECサイトのスペック情報を抜き出し、メルカリの出品文を1タップで完成させる。" },
  { no: 23, id: "ext23", name: "ふるさと納税ポータル一括シミュレーター", category: "shopping", tagline: "控除上限額をポータル横断で試算", description: "年収や家族構成から控除上限を算出し、ポータルごとの返礼品を比較できる。" },
  { no: 24, id: "ext24", name: "サクラチェッカー連携", category: "shopping", tagline: "Amazonレビューの信頼度を1秒判定", description: "商品ページ上にやらせレビューの危険度をインライン表示し、失敗買いを防ぐ。" },
  { no: 25, id: "ext25", name: "送料コミコミ計算機", category: "shopping", tagline: "送料とポイント込みの実質価格を算出", description: "地域別送料と獲得ポイントを加味した「実質最安値」を自動計算する。" },
  { no: 26, id: "ext26", name: "ポイント失効防止アラート", category: "shopping", tagline: "各社ポイントの有効期限を横断管理", description: "楽天ポイントやdポイントなどの失効が近づくと、事前に通知して消化を促す。" },
  { no: 27, id: "ext27", name: "領収書スクリーンショット自動保存", category: "focus", tagline: "領収書のスクショをワンクリック保存", description: "購入完了画面を高画質で自動保存・整理し、確定申告や経費精算の手間を減らす。" },
  { no: 28, id: "ext28", name: "出前最安比較", category: "shopping", tagline: "デリバリー3社の実質価格を1秒比較", description: "Uber Eats・出前館・Woltの送料や手数料、クーポンを加味して最安を判定する。" },
  { no: 29, id: "ext29", name: "電子書籍・レンタルコミック最安サーチ", category: "shopping", tagline: "電子書籍6ストアへの検索を1クリックで一括化", description: "Kindle・ピッコマ・コミックシーモアなど6ストアの検索結果ページをまとめて開ける。実際の価格・セールは各ストアでご確認を。" },
  { no: 30, id: "ext30", name: "日本の年中行事・ギフトカレンダー", category: "shopping", tagline: "7つの年中行事のカウントダウン＆贈り物メモ", description: "母の日・お中元・お歳暮など7つの年中行事までの日数を通知し、贈る相手や予算を自分でメモしておける。" },
  { no: 31, id: "ext31", name: "和風フォント着せ替え", category: "design", tagline: "サイトの文字を和のフォントに着せ替え", description: "明朝体・教科書体・毛筆風フォントへワンタップで切り替えられる。" },
  { no: 32, id: "ext32", name: "和風Webライティング＆文章構造チェッカー", category: "writing", tagline: "文章構造を可視化して読みやすさを底上げ", description: "見出し階層の乱れや冗長な言い回しを検出し、Web向けの構成に整える。" },
  { no: 33, id: "ext33", name: "縦書きウェブリーダー", category: "reading", tagline: "Web記事を縦書きの読書体験に変換", description: "ニュースやWeb小説を、伝統的な縦書き表示で情緒豊かに読める。" },
  { no: 34, id: "ext34", name: "和の色ブルーライトカット", category: "reading", tagline: "伝統色で画面の眩しさをやさしく軽減", description: "柿色・鶯色・薄藤など、日本の伝統色を使ったブルーライトカットフィルター。" },
  { no: 35, id: "ext35", name: "通勤満員電車プライバシー保護", category: "privacy", tagline: "和柄フィルターで画面の覗き見を防止", description: "市松模様や麻の葉といった和柄のブラインドフィルターで、隣席からの視線を遮る。" },
  { no: 36, id: "ext36", name: "和風手書き注釈スクリーンショット", category: "design", tagline: "墨と朱肉の質感で手書き注釈を追加", description: "撮影したスクリーンショットに、にじみを再現した毛筆ペンと朱肉印鑑で書き込める。" },
  { no: 37, id: "ext37", name: "なめらか倍速コントロール", category: "focus", tagline: "動画の再生速度を0.1倍刻みで微調整", description: "YouTubeやTVerなどの再生速度をピッチを保ったまま細かく調整できる。" },
  { no: 38, id: "ext38", name: "ワンタップ消音", category: "focus", tagline: "音の出るタブを1タップでミュート", description: "突然の広告音やBGMを即座に消音。全タブ一括ミュートやホワイトリストにも対応。" },
  { no: 39, id: "ext39", name: "和風デザインQRコード", category: "design", tagline: "URLを和柄デザインのQRコードに変換", description: "家紋ロゴや伝統色をあしらった高解像度のQRコードとして保存できる。" },
  { no: 40, id: "ext40", name: "日本の伝統色ピッカー", category: "design", tagline: "抽出した色を伝統色の名前とコードに変換", description: "スポイトで取得した色に最も近い日本の伝統色名と、由来やカラーコードを表示する。" },
  { no: 41, id: "ext41", name: "日本語注釈付きJSONビューア", category: "dev", tagline: "JSONのキーに日本語注釈を自動付与", description: "生のJSONデータをツリー整形し、英語キーの意味をAIが日本語で解説する。" },
  { no: 42, id: "ext42", name: "Qiita/Zenn 快適読書アシスト", category: "dev", tagline: "Qiita/Zennの長文記事を快適に読む", description: "目次の自動生成とコードブロックのワンクリックコピーで技術記事の読解を高速化。" },
  { no: 43, id: "ext43", name: "日本語コミットメッセージ作成", category: "dev", tagline: "diffからコミットメッセージを自動生成", description: "Gitの変更差分とコミット種別から、絵文字付きの分かりやすい日本語メッセージを作る。" },
  { no: 44, id: "ext44", name: "やさしいAPIテスター", category: "dev", tagline: "ブラウザ上でAPIをGET/POSTテスト", description: "レスポンスのJSONやエラーを、日本語の注釈付きでそのまま確認できる。" },
  { no: 45, id: "ext45", name: "日本語テストデータジェネレーター", category: "dev", tagline: "テスト用のダミー日本語データを自動生成", description: "氏名・住所・電話番号など実在感のある架空データを、件数指定で一瞬生成する。" },
  { no: 46, id: "ext46", name: "日本語正規表現テスター", category: "dev", tagline: "日本語フォーム向け正規表現を内蔵", description: "郵便番号や電話番号などのスニペットと、日本語のステップ解説付きで検証できる。" },
  { no: 47, id: "ext47", name: "日本語バリアフリー検証", category: "dev", tagline: "コントラスト不足やalt欠損を自動検出", description: "JIS X 8341-3の観点でチェックし、日本語での具体的な修正案を提示する。" },
  { no: 48, id: "ext48", name: "視覚的CSSグリッド確認君", category: "dev", tagline: "GridとFlexboxの余白を可視化", description: "境界線・マージン・パディングを色分け表示し、レイアウト崩れの原因を特定する。" },
  { no: 49, id: "ext49", name: "日本語ストレージ一括整理", category: "dev", tagline: "ストレージとCookieを一括整理", description: "LocalStorage・SessionStorage・Cookieを可視化し、指定キーだけ安全に削除する。" },
  { no: 50, id: "ext50", name: "文字化けレスキュー", category: "dev", tagline: "文字化けページをワンクリックで修復", description: "Shift_JISやEUC-JPなど、レガシーな文字コードの文字化けを瞬時に直す。" },
  { no: 51, id: "ext51", name: "和製ポップアップブロック", category: "privacy", tagline: "邪魔なポップアップを自動遮断", description: "メルマガ登録や追従型広告など、迷惑なポップアップを一括ブロックする。" },
];

EXTENSIONS.forEach((ext) => {
  ext.icon = `assets/icons/${ext.id}.png`;
});
