# Novel Game Project

ReactJS + YAML で作るアドベンチャー/ノベルゲーム。

## 技術スタック

- **フレームワーク**: React 18 + TypeScript (Vite)
- **状態管理**: Zustand
- **データ定義**: YAML (js-yaml、Vite `?raw` import)
- **スタイリング**: CSS Modules
- **音声**: VOICEVOX Engine (ローカル) + 事前生成wav
- **デプロイ先**: GitHub Pages (`/dojonovel/` base path)

## プロジェクト構造

- `src/data/` — YAMLゲームデータ（シナリオ・マスター・フラグ定義）
- `src/types/` — TypeScript型定義（ゲームエンジン全体で使用）
- `src/engine/` — 純粋関数コアロジック（副作用なし）
- `src/storage/` — ストレージ抽象化レイヤー
- `src/store/` — Zustandストア
- `src/components/` — Reactコンポーネント
- `src/audio/` — 音声処理
- `src/hooks/` — カスタムフック
- `src/editor/` — ゲーム管理エディタ（ローカル開発専用）
- `public/assets/` — 画像・音声アセット（別途配置）

## 設計原則

### ストレージ抽象化
フラグ・セーブデータの保存先は `src/storage/IStorage` を通じてのみアクセスする。
現在の実装は `LocalStorageAdapter`。切り替えは `StorageFactory.ts` の `VITE_STORAGE_BACKEND` 環境変数で行う。

```
VITE_STORAGE_BACKEND=localStorage  # デフォルト
VITE_STORAGE_BACKEND=indexeddb     # 将来
VITE_STORAGE_BACKEND=server        # 将来
```

### コアエンジン（純粋関数）
`src/engine/` 内のすべての関数は `GameState → GameState` の純粋関数で実装。
副作用（ストレージ・DOM・音声）は持たない。Reactをimportしない。

### YAMLデータ
`src/data/*.yaml` をゲームコンテンツとして管理。
Vite の `?raw` suffix でテキスト読み込み → `js-yaml` でパース。
全定義は `src/loaders/dataLoader.ts` 経由で取得する。

### 画面サイズ
ゲーム画面は `800×600px` 固定。
`src/components/game/GameScreen.tsx` がルートコンテナ。
クリッカブルエリアの座標は `800×600` 基準で定義する。

モバイル対応は `src/App.tsx` の `useGameScale()` フックが `transform: scale()` でスケーリング。
座標系は常に800×600のままで、ブラウザがtransform行列を通じて自動マッピングする。

### child_scenes（入れ子シーン）
シーンは `child_scenes` 配列を持てる。`src/loaders/dataLoader.ts` の `flattenScenes()` がロード時にフラットな辞書に展開する。子シーンは `location_id` と `background` を親から継承する。

### ChoiceListのインデックス
`ChoiceList` は `originalIndex`（元の配列でのインデックス）を `onSelect` に渡す。
`SceneEngine.selectChoice` は `scene.branches.choices[choiceIndex]` で元配列を直接参照する（フィルタ後の配列にインデックスしてはいけない）。

## YAMLスキーマ概要

### scenes.yaml
```yaml
scenes:
  - id: string                    # ユニークID (scene_ プレフィックス)
    location_id: string           # 場所ID
    background: string            # 背景画像パス（省略可）
    bgm: string                   # BGMファイルパス（省略可）
    characters: []                # 表示キャラ（省略可）
    messages: []                  # セリフ配列
    commands: []                  # 使えるコマンドID（省略時はlocation側のdefault）
    clickable_areas: []           # クリッカブルエリア（省略可）
    talkable: []                  # 話せるキャラ一覧（cmd_talk で使用）
      - character_id: string
        scene_id: string          # 会話シーンID
        condition: ...            # 省略可
    branches:                     # 分岐（省略可）
      type: choice | auto | none
      choices: []
    next_scene: string | null     # 直進先 (nullの場合はsceneHistoryからpopして戻る)
    flags_set: []                 # 開始時に設定するフラグ
    item_give: []                 # 付与するアイテム（条件付き可）
    child_scenes: []              # 入れ子シーン（ロード時にフラット展開される）
```

### flags.yaml
```yaml
flags:
  - id: string            # flag_ プレフィックス
    type: boolean | integer | string
    default: any
    description: string
```

### conditions（条件式）
```yaml
condition:
  flag: flag_id           # フラグ条件
  value: true/false/int/string
  negate: bool            # 反転
  has_item: item_id       # アイテム所持条件
  location_id: loc_id     # 場所条件
  and: []                 # AND結合
  or: []                  # OR結合
```

## GamePhase

`src/types/gameState.ts` の `GamePhase` union type がどのUIを表示するかを制御する。

| フェーズ | 表示するUI |
|---------|-----------|
| `title` | タイトル画面 |
| `message` | DialogueBox（セリフ） |
| `choice` | ChoiceList（選択肢） |
| `command` | CommandPanel（コマンドメニュー） |
| `examine` | ClickableAreaOverlay（調べる） |
| `map` | MapView（移動） |
| `inventory` | InventoryPanel（アイテム） |
| `talk_select` | ChoiceList（話しかけるキャラ選択） |
| `system_menu` | SystemMenu |

## ゲーム管理エディタ

`http://localhost:5173/editor.html` でアクセスできるローカル開発専用ツール。
GitHub Pages にはデプロイしない。

### 機能
- **シーンエディタ**: シーンのメッセージ・キャラ・分岐・フラグをGUI編集
- **エリアエディタ**: 背景画像上でドラッグしてクリッカブルエリアの座標を視覚的に編集

### YAML読み書き
File System Access API（Chrome/Edge のみ）で `src/data/` フォルダを直接読み書きする。
「フォルダを開く」→ `src/data/` を選択 → Vite HMR でゲームに即反映。

### エディタ構成
```
src/editor/
  main.tsx              ← エントリポイント
  EditorApp.tsx         ← タブ切り替えルート
  pages/
    SceneEditorPage.tsx
    AreaEditorPage.tsx
  components/
    SceneList.tsx       ← ツリー表示
    MessageEditor.tsx
    AreaCanvas.tsx      ← ドラッグ矩形描画
    AreaPanel.tsx
  hooks/
    useYamlFs.ts        ← File System Access API ラッパー
```

### Vite マルチページビルド
`vite.config.ts` の `build.rollupOptions.input` に `editor: 'editor.html'` を追加済み。

## アセット配置

```
public/assets/
├── backgrounds/         *.jpg / *.png / *.webp
├── characters/{id}/     normal.png, happy.png, sad.png, ...
├── audio/bgm/           *.mp3 / *.ogg
├── audio/se/            *.mp3 / *.ogg
└── voicevox/            {hash}.wav  ← 事前生成した音声
```

アセットがなくてもテキストのみで動作する。

## VOICEVOX音声

開発時: `http://localhost:50021` でVOICEVOX Engineを起動しておく。
本番(GitHub Pages): `public/assets/voicevox/{hash}.wav` を事前生成・配置する。

ハッシュキー: `sha1(text + "_" + speakerId)` 形式 → `src/utils/hashUtils.ts` の `voiceHashKey()` で計算。

音声生成スクリプト: `npm run gen:voice`
`scripts/generate-voices.mjs` が `child_scenes` を再帰的にたどって全メッセージの音声を生成する。

## 開発フロー（Gitブランチ運用）

タスクは必ずfeatureブランチで進め、動作確認後にmasterへマージする。

```bash
# 1. ブランチを切る
git checkout -b feature/<task-name>

# 2. 実装・コミット（複数可）

# 3. 動作確認（npx tsc --noEmit + npm run build 最低限）

# 4. masterへマージ
git checkout master
git merge --no-ff feature/<task-name>

# 5. ブランチ削除
git branch -d feature/<task-name>
```

## ビルド・デプロイ

```bash
# 開発
npm run dev

# GitHub Pages用ビルド
VITE_BASE_PATH=/dojonovel/ VITE_VOICEVOX_PREBUILT_ONLY=true npm run build

# プレビュー (GitHub Pages想定)
npm run preview:gh
```

GitHub Actionsが `master` ブランチへのpushで自動デプロイ。

## セーブデータ形式

```typescript
interface SaveData {
  version: number;           // スキーマバージョン（マイグレーション用）
  timestamp: number;
  currentSceneId: string;
  currentLocationId: string;
  flags: Record<string, boolean | number | string>;
  inventory: string[];       // item_id の配列
  sceneHistory: string[];    // 戻る機能用スタック
  currentCharacters: CharacterDisplay[]; // 表示中キャラ
  playtime: number;          // 秒
}
```

## ID命名規則

- フラグIDは `flag_` プレフィックス
- シーンIDは `scene_` プレフィックス
- ロケーションIDは `loc_` プレフィックス
- アイテムIDは `item_` プレフィックス
- キャラクターIDは `char_` プレフィックス
- コマンドIDは `cmd_` プレフィックス
- 会話シーンIDは `scene_talk_` プレフィックス（慣例）

## 新しいコマンドタイプの追加手順

1. `src/data/commands.yaml` に新しいコマンドを追加（`action_type` を定義）
2. `src/types/command.ts` の `CommandActionType` に型を追加
3. `src/engine/CommandEngine.ts` の `executeCommand()` にswitch caseを追加
4. 必要であれば `src/types/gameState.ts` に `GamePhase` を追加
5. `src/components/game/GameScreen.tsx` に対応するUI描画を追加
