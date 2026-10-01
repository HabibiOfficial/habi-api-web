# Audit Endpoint — Habibih Cloud ID

Hasil `npm run audit` terhadap 35 endpoint produksi.
Jalankan ulang: `node scripts/audit-endpoints.mjs`


  audit: https://api.habibicloudserver.dpdns.org
  key   : HABI-A091C…

  ✓ /api/brat              image/png 232ms
  ✓ /api/bratvid           video/mp4 510ms
  ✓ /api/iqc               image/png 343ms
  ✓ /api/meme              image/png 493ms
  ✓ /api/watermark         image/png 1014ms
  ✓ /api/humanizer         json 386ms
  ✓ /api/ytsearch          json 2102ms
  ✓ /api/ytinfo            json 2412ms
  ✓ /api/ytthumb           json 186ms
  ✓ /api/spotify           json 2345ms
  ✓ /api/ytmp3             audio/mpeg 8042ms
  ✓ /api/ytmp4             video/mp4 52652ms
  ✓ /api/info              json 2304ms
  ✓ /api/direct            json 6279ms
  ✓ /api/tiktok            video/mp4 16499ms
  ✓ /api/tiktok-audio      audio/mpeg 5141ms
  ✓ /api/facebook          video/mp4 6103ms
  ✗ /api/instagram         HTTP 400 {"status":false,"error":"Instagram memblokir request
  ✓ /api/file              text/plain 242ms
  ✓ /api/ocr               json 615ms
  ✓ /api/translate         json 223ms
  ✓ /api/tts               audio/mpeg 777ms
  ✓ /api/ssweb             image/png 6747ms
  ✓ /api/webfetch          json 254ms
  ✓ /api/lirik             json 612ms
  ✓ /api/phonespecs        json 508ms
  ✓ /api/phonecompare      json 365ms
  ✓ /api/removebg          image/png 4721ms
  ✓ /api/pdfcompress       application/pdf 1018ms
  ✓ /api/resolve           json 2321ms
  ✓ /api/detect            json 192ms
  ✓ /api/sticker           image/webp 1004ms
  ✓ /api/welcome           image/png 745ms
  ✓ /api/reply             image/png 18026ms
  ✓ /api/reply/variants    json 244ms

  ✓ 34/35 hidup
  ✗ 1 bermasalah:
      /api/instagram         HTTP 400 {"status":false,"error":"Instagram memblokir request

