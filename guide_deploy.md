# Deploy Tutorly bằng Cloudflare Workers

Tutorly hiện là landing page Next.js xuất bản tĩnh. Cloudflare sẽ **build source từ Git** bằng `npm run build`, sau đó Wrangler đưa thư mục `out/` lên **Workers Static Assets**. Website chạy trên Cloudflare, không phụ thuộc máy local. `cloudflared` là công cụ Tunnel cho server đang chạy; luồng này không dùng Tunnel. [Nguồn: Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/), [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/).

## Trước khi bấm Deploy

Trong repository `nguyentoan02/tutorly`, kiểm tra ở **gốc repository** đã có các file mới nhất:

- `wrangler.jsonc` — tên Worker là `tutorly-landing`, thư mục assets là `./out`.
- `next.config.ts` — bật `output: "export"`.
- `package.json`, `package-lock.json`, `app/`, `components/` và `public/`.

Nếu bạn vừa sửa code ở local, **commit và push những thay đổi này trước khi tạo Worker**. `node_modules/`, `.next/`, `out/`, `.wrangler/` và `tutorly-pages.zip` đã nằm trong `.gitignore`; không đưa các bản build đó lên Git. Cloudflare tự tạo `out/` trong quá trình build. [Nguồn: Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/).

Repository local hiện theo dõi `origin/master`. Để đưa cấu hình Worker mới lên GitHub, chạy từng lệnh:

```powershell
git add package-lock.json guide_deploy.md
git commit -m "Fix Cloudflare dependency install"
git push origin master
```

## Điền màn hình “Set up your application”

Màn hình có **Build command**, **Deploy command** và **Preview command** là đúng luồng **Worker**. Với repository này, điền:

| Ô / tùy chọn | Giá trị |
| --- | --- |
| Repository | `nguyentoan02/tutorly` |
| Worker / project name | `tutorly-landing` |
| Production branch | `master` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` (giữ mặc định) |
| Enable Preview builds | Có thể tắt cho lần deploy đầu; bật sau nếu muốn preview branch khác `master` |
| Protect with Cloudflare Access | **Tắt** để landing page công khai |
| Advanced settings → Path / Root directory | `/` hoặc để mặc định vì code ở gốc repository |
| Build variables / Variable value | **Để trống**; project không cần biến môi trường |

**API token:** Nếu phần Advanced settings đang chọn token cũ `my-blog build token` và báo thiếu quyền `artifacts_read` / `artifacts_write`, hãy bỏ chọn token đó. Trường API token là tùy chọn; để Cloudflare tự tạo token mặc định, hoặc chọn **Create new token** nếu giao diện yêu cầu. Đoạn JSON chứa `build_token_uuid` và `cloudflare_token_id` là thông tin về token, **không phải giá trị để dán vào `Variable value`**. [Nguồn: Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/).

Bấm **Save and Deploy**. Sau khi build thành công, mở địa chỉ `tutorly-landing.<account>.workers.dev` mà Cloudflare cấp. Nếu log báo thiếu `wrangler.jsonc` hoặc không tìm thấy `out/`, kiểm tra lại repository đã có `wrangler.jsonc` ở gốc và Build command đúng là `npm run build`. Tên Worker trên dashboard phải trùng với `name` trong `wrangler.jsonc`. [Nguồn: Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), [Static Assets](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/).

## Gắn `www.tutorly.io.vn` với Worker

1. Vào **Workers & Pages** → chọn Worker `tutorly-landing`.
2. Bấm **Settings** → **Domains & Routes** → **Add** → **Custom Domain**.
3. Nhập `www.tutorly.io.vn` → **Add Custom Domain**.
4. Chờ Cloudflare tạo DNS/chứng chỉ, rồi mở `https://www.tutorly.io.vn`.

Nếu `www` đã có bản ghi CNAME từ website cũ, cần xem và xử lý bản ghi đó trước khi thêm Custom Domain; Cloudflare không thể gắn Custom Domain lên hostname đã có CNAME. **Giữ nguyên MX, SPF, DKIM và DMARC của Email Routing**. Cloudflare sẽ tự tạo bản ghi web cho Custom Domain của Worker. [Nguồn: Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/), [Cloudflare Email Routing](https://developers.cloudflare.com/email-service/configuration/domains/).

## Cho tên miền gốc chuyển sang `www`

Email Routing đang dùng `tutorly.io.vn` ở tên miền gốc. Dùng `www.tutorly.io.vn` cho website và Redirect Rule cho tên miền gốc để giữ DNS email ổn định.

1. Trong zone **tutorly.io.vn**, vào **DNS** → **Records**. Nếu chưa có bản ghi web ở `@`, thêm:

   | Trường | Giá trị |
   | --- | --- |
   | Type | `A` |
   | Name | `@` |
   | IPv4 address | `192.0.2.1` |
   | Proxy status | `Proxied` (mây cam) |

   Nếu đã có A record `@` được proxy, có thể giữ để dùng cho rule. Nếu `@` đang có CNAME hoặc web khác, kiểm tra trước khi thay. **Không sửa MX/TXT của email.** Địa chỉ `192.0.2.1` là địa chỉ giữ chỗ Cloudflare hướng dẫn cho redirect. [Nguồn: Cloudflare redirect domain](https://developers.cloudflare.com/fundamentals/manage-domains/redirect-domain/).

2. Vào **Rules** → **Overview** → **Create rule** → **Redirect Rule**.
3. Đặt điều kiện **Hostname equals `tutorly.io.vn`**.
4. Chọn đích **Dynamic** và nhập:

   ```text
   concat("https://www.tutorly.io.vn", http.request.uri.path)
   ```

5. Chọn **301**, bật **Preserve query string**, rồi bấm **Deploy**. Mở `https://tutorly.io.vn` để kiểm tra chuyển sang `https://www.tutorly.io.vn`. [Nguồn: Cloudflare Redirect Rules](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/).

## Sau này cập nhật website

Nếu Workers Builds dừng ở `npm clean-install` với lỗi `Invalid Version:`, hãy kiểm tra commit trên GitHub đã chứa `package-lock.json` mới nhất. Lockfile cũ có các gói native tùy chọn thiếu trường `version`; bản trong repository này đã bổ sung phiên bản khớp với dependency cha. Sau khi push, chạy lại deploy trên Cloudflare. Nếu Cloudflare còn dùng cache build cũ, chọn **Retry deployment** với tùy chọn xóa cache (nếu giao diện cung cấp).

Push commit lên branch `master`; Workers Builds sẽ chạy lại `npm run build` và `npx wrangler deploy`. Kiểm tra website, `/robots.txt`, `/sitemap.xml`, ảnh và Email Routing sau lần deploy đầu. [Nguồn: Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/).

Landing page hiện tại chỉ cần Static Assets. Nếu Tutorly triển khai LMS, đăng nhập, thanh toán hoặc API, cần bổ sung phần xử lý server trên Workers hoặc backend khác. [Nguồn: Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports/).
