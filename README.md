# dassenchu-site

Podcast『英会話、脱線中。』の公式サイト。Astro で静的 HTML を生成します。

## 手元で確認

Node.js 24.22.1 以上と pnpm 11.25.0 を使用します。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

開発時は表示されたローカル URL を開いてください。本番用ファイルは `dist/` に生成されます。

## 編集箇所

- `src/data/episodes.json` に、公開を確認した回のタイトル・短い紹介・公開視聴 URL を追加します。新しい回を先頭に置くとトップの新着にも反映されます。
- `src/data/transcripts/epNNN.json` に、公開用の台本を発言順で追加できます。各行には `speaker`（MARK / MIKA）、`spoken`（en / ja）、`en`（英語）、`ja`（日本語）を入れます。対応する回のPodcast一覧と無料教材にリンクが付きます。制作メモやファイルの保存先は含めません。
- `src/pages/learn.astro` は無料教材、`src/pages/apps.astro` はアプリ紹介です。広告・アフィリエイト掲載時は、対象の紹介文とリンクのそばに「広告」または「PR」を表示し、広告リンクに `rel="sponsored"` を付けます。
- 画像は既存の番組ジャケットを Web 用 JPEG に変換したものです。制作資料、音声、環境変数、個人情報は公開リポジトリに追加しないでください。

## 公開前に確認すること

- 公開用の運営者表記と問い合わせ先を確定してください。初期版では問い合わせの受付は準備中です。
- ホスティングや解析などで追加のデータ処理を行う場合、実際の運用に合わせてプライバシー説明を更新してください。
- Cloudflare Pages への接続はレビュー後に行います。ビルドコマンドは `pnpm build`、出力先は `dist` です。静的サイトのビルドに秘密情報は不要です。
