# 龚仔的摄影日记

一个基于 Cloudinary 图床的动态相册网站，实时从 Cloudinary 加载相册和照片。

![Photography Diary](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop)

## 功能特性

- 📷 **动态加载** - 从 Cloudinary 实时获取相册和照片
- 🖼️ **图片查看器** - 支持全屏浏览、键盘控制
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎨 **精美UI** - 丝滑的动画效果和现代深色主题
- 🔄 **实时同步** - Cloudinary 增删照片，网站自动更新
- 🔒 **安全可靠** - API 密钥由 Netlify Functions 保护

## 技术栈

- **静态网站生成器**: Eleventy
- **图床服务**: Cloudinary
- **部署平台**: Netlify
- **前端**: HTML5 + CSS3 + Vanilla JavaScript

## 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/gongting1023/photography-diary.git
cd photography-diary

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填入你的 Cloudinary 配置

# 启动开发服务器
npm run dev
```

访问 http://localhost:1023

### 构建生产版本

```bash
npm run build
```

## 环境变量配置

在 `.env` 文件中配置：

```env
CLOUDINARY_CLOUD_NAME=你的云名称
CLOUDINARY_API_KEY=你的API Key
CLOUDINARY_API_SECRET=你的API Secret
```

## 部署到 Netlify

1. Fork 或导入此仓库到 GitHub
2. 登录 [Netlify](https://app.netlify.com)
3. 创建新站点，选择 `photography-diary` 仓库
4. 配置环境变量：
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
5. 部署！

### 构建配置

- **Build command**: `npm run build`
- **Publish directory**: `_site`

## Cloudinary 配置

1. 注册 [Cloudinary](https://cloudinary.com)
2. 上传照片到对应日期文件夹（如 `2024-01-01`）
3. 网站会自动按文件夹生成相册

## 项目结构

```
photography-diary/
├── _site/              # 构建输出目录
├── netlify/
│   └── functions/      # Netlify Functions
│       └── albums.js   # 相册 API
├── scripts/
│   ├── local-api.js    # 本地开发 API 服务器
│   └── upload-to-cloudinary.js  # 上传脚本
├── index.njk           # 首页模板
├── album.njk           # 相册详情页模板
├── .env                # 环境变量（不上传）
├── .gitignore          # Git 忽略文件
├── netlify.toml        # Netlify 配置
└── package.json
```

## 自定义域名

部署到 Netlify 后，可绑定自定义域名（如 `gongting.fun`）：

1. Netlify 后台 → **Domain management** → **Add custom domain**
2. 在域名服务商（如阿里云）配置 DNS：
   - 添加 CNAME 记录指向 Netlify 域名

## 许可证

MIT License

## 联系方式

- 抖音：[@龚仔仔仔仔](https://v.douyin.com/Hc74k9FgjPY/)
- 小红书：[@龚仔仔仔仔](https://xhslink.com/m/9WzBstwHLKF)

---

*用镜头捕捉每一个值得珍藏的瞬间*
