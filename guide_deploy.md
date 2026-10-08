# Đưa Tutorly lên Cloudflare Pages

Tutorly là landing page Next.js đã được cấu hình để xuất bản tĩnh. **Khi kết nối repository GitHub/GitLab với Cloudflare Pages, Cloudflare sẽ tự cài dependency, build source và host website.** Bạn không cần build hoặc tải file ZIP từ máy local, không cần giữ máy chạy và không cần `cloudflared`.

`cloudflared` là phần mềm Cloudflare Tunnel để đưa một ứng dụng đang chạy trên máy/server của bạn ra Internet. Luồng triển khai trong tài liệu này dùng **Cloudflare Pages Git integration**. [Nguồn: Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/), [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/).

## Dùng chung tên miền với Email Routing

**Có thể dùng cùng `tutorly.io.vn` cho web và email.** Cấu hình trong hướng dẫn này là:

| Việc | Địa chỉ / bản ghi |
| --- | --- |
| Website chính | `https://www.tutorly.io.vn` |
| Tên miền gốc | `https://tutorly.io.vn` chuyển 301 sang `www` |
| Email Routing | Giữ nguyên các bản ghi MX/TXT đang dùng cho email |

Cloudflare Email Routing dùng MX và các TXT liên quan ở tên miền gốc. Pages sẽ tạo bản ghi web cho `www`. [Nguồn: Cloudflare Email Routing](https://developers.cloudflare.com/email-service/configuration/domains/), [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Bước 0 — Đưa source lên GitHub hoặc GitLab

Project hiện có thư mục `.git` tạm do lần chuẩn bị trước tạo ra nhưng **chưa có commit hay remote**. Hãy xóa thư mục `D:\tutorly\.git` trên máy của bạn trước khi khởi tạo Git mới. Trong File Explorer, mở `D:\tutorly`, bật **View → Show → Hidden items** nếu cần, chọn thư mục `.git` rồi bấm **Delete**. Việc này chỉ bỏ lịch sử Git local đang trống; các file code vẫn còn.

1. Trên GitHub, vào [New repository](https://github.com/new) và tạo repository mới, ví dụ `tutorly`. Để repository **trống**: không chọn tạo thêm README, `.gitignore` hoặc license. Sao chép URL HTTPS của repository. Nếu dùng GitLab, tạo repository trống tương tự.
2. Mở terminal tại `D:\tutorly` và chạy từng lệnh sau. Thay URL ở lệnh `git remote add` bằng URL repository của bạn:

   ```powershell
   git init -b main
   git add .
   git commit -m "Initial Tutorly landing page"
   git remote add origin https://github.com/TEN_CUA_BAN/tutorly.git
   git push -u origin main
   ```

3. Mở repository trên GitHub/GitLab và kiểm tra branch `main` có `package.json`, `package-lock.json`, `next.config.ts`, `app/` và `public/`. `node_modules/`, `.next/`, `out/` và `tutorly-pages.zip` đã nằm trong `.gitignore`, nên sẽ không được đẩy lên. Cloudflare sẽ tự cài dependency và build từ source.

## Bước 1 — Kết nối GitHub/GitLab với Cloudflare Pages

Các bước này bắt đầu sau khi source Tutorly đã được đẩy lên branch `main` của repository.

1. Mở [Cloudflare Dashboard](https://dash.cloudflare.com/) và chọn **account đang quản lý `tutorly.io.vn`**.
2. Vào **Workers & Pages** → **Create application** → **Pages** → **Connect to Git** hoặc **Import an existing Git repository**. Nếu được hỏi, đăng nhập và cấp quyền cho Cloudflare truy cập repository Tutorly.
3. Chọn repository Tutorly → **Begin setup**.
4. Đặt project name là `tutorly-landing`. Trong **Build settings**, chọn **Framework preset: Next.js (Static HTML Export)**. Kiểm tra các ô sau:

   | Ô trong Cloudflare | Giá trị |
   | --- | --- |
   | Production branch | `main` |
   | Build command | `npm run build` (hoặc giá trị preset `npx next build`) |
   | Build output directory | `out` |
   | Root directory | Để trống nếu source nằm ở gốc repository |
   | Environment variables | Không cần thêm |

5. Bấm **Save and Deploy**. Cloudflare sẽ cài dependency từ repository, chạy build và đăng website lên địa chỉ `*.pages.dev`. Mở địa chỉ đó để xem trang trước khi gắn domain.

Nếu màn hình cấu hình tự điền `npx next build` thay vì `npm run build`, cứ giữ nguyên; cả hai đều chạy build Next.js của project này. Cloudflare hướng dẫn preset Next.js Static HTML Export với thư mục đầu ra `out`. [Nguồn: Cloudflare Pages Next.js static site](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/), [cấu hình build](https://developers.cloudflare.com/pages/configuration/build-configuration/).

## Bước 2 — Gắn `www.tutorly.io.vn` với Pages

1. Trong **Workers & Pages**, mở project `tutorly-landing` vừa tạo.
2. Bấm **Custom domains** → **Set up a domain**.
3. Nhập `www.tutorly.io.vn` → **Continue**.
4. Xác nhận bản ghi DNS mà Cloudflare đề xuất. Khi domain nằm trong cùng Cloudflare account, Pages sẽ tạo CNAME cho `www` sau khi xác nhận.
5. Chờ custom domain hiện **Active**, rồi mở `https://www.tutorly.io.vn`.

Nếu `www` đã có bản ghi A/AAAA/CNAME cũ, kiểm tra bản ghi đó trước khi thay. **Chỉ xử lý bản ghi `www`; giữ nguyên MX, SPF, DKIM, DMARC của email.** Việc thêm hostname phải bắt đầu từ tab **Custom domains** của Pages, không chỉ tự tạo CNAME trong DNS. [Nguồn: Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## Bước 3 — Chuyển `tutorly.io.vn` sang `www`

Làm bước này khi `https://www.tutorly.io.vn` đã mở được.

### 3.1. Bản ghi DNS cho tên miền gốc

1. Trong Cloudflare Dashboard, chọn zone **tutorly.io.vn** → **DNS** → **Records**.
2. Nếu đã có **A record `@` ở trạng thái Proxied (mây cam)**, giữ bản ghi đó. Nếu chưa có bản ghi web tại `@`, bấm **Add record** và điền:

   | Trường | Giá trị |
   | --- | --- |
   | Type | `A` |
   | Name | `@` |
   | IPv4 address | `192.0.2.1` |
   | Proxy status | `Proxied` (mây cam) |
   | TTL | `Auto` |

3. Bấm **Save**. `192.0.2.1` là địa chỉ giữ chỗ Cloudflare hướng dẫn cho domain chỉ dùng để chuyển hướng. **Không sửa các bản ghi MX/TXT.** Nếu `@` đang có CNAME hoặc web khác, kiểm tra cấu hình đó trước khi thay. [Nguồn: Cloudflare redirect domain](https://developers.cloudflare.com/fundamentals/manage-domains/redirect-domain/).

### 3.2. Tạo Redirect Rule

1. Vào **Rules** → **Overview** → **Create rule** → **Redirect Rule**.
2. Đặt tên `Root to www`.
3. Trong **When incoming requests match**, chọn **Custom filter expression**; đặt **Hostname** **equals** `tutorly.io.vn`.
4. Trong phần đích chuyển hướng, chọn **Dynamic** và nhập:

   ```text
   concat("https://www.tutorly.io.vn", http.request.uri.path)
   ```

5. Chọn **Status code: 301**, bật **Preserve query string**, rồi bấm **Deploy**.
6. Mở cả `http://tutorly.io.vn` và `https://tutorly.io.vn`; hai địa chỉ cần chuyển sang `https://www.tutorly.io.vn`.

Redirect Rule cần bản ghi DNS của hostname nguồn ở trạng thái **Proxied**. Cấu hình trên giữ đường dẫn và query string khi chuyển hướng. [Nguồn: Cloudflare Redirect Rules](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/), [ví dụ redirect của Cloudflare](https://developers.cloudflare.com/fundamentals/manage-domains/redirect-domain/).

## Bước 4 — Kiểm tra sau deploy

- `https://www.tutorly.io.vn` hiển thị landing page và hai ảnh WebP.
- `https://tutorly.io.vn` chuyển sang `www`.
- `https://www.tutorly.io.vn/robots.txt` và `/sitemap.xml` mở được.
- Gửi thử email tới địa chỉ `@tutorly.io.vn` đang dùng; Email Routing vẫn chuyển tiếp.
- Trong **DNS → Records**, các bản ghi MX/TXT của email vẫn còn.

## Khi muốn cập nhật nội dung website

Sau mỗi lần source được push lên branch `main`, Cloudflare Pages sẽ tự build và cập nhật website. Không cần tạo `out/` hoặc ZIP ở local. Cloudflare cũng tạo preview cho các branch và pull request khác. [Nguồn: Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/).

Landing page hiện tại phù hợp với Pages static. Khi Tutorly triển khai LMS, đăng nhập hoặc thanh toán, các tính năng đó sẽ cần backend/Workers riêng. [Nguồn: Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports/), [Cloudflare Next.js guidance](https://developers.cloudflare.com/pages/framework-guides/nextjs/).
