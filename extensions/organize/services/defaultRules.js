// Default classification rules with hierarchical English categories.
// Priority is positional: first match wins (top → bottom).
// Category names use "/" to create nested folder structures.
(function () {
  const rules = [
    // ── AI & Machine Learning ──
    { category: 'AI & Machine Learning', keywords: [
      'ai', 'ml', 'deep learning', 'openai', 'huggingface', 'stable diffusion',
      'llm', 'pytorch', 'tensorflow', 'midjourney', 'invokeai', 'colab',
      'transformer', 'gpt', 'claude', 'gemini', 'copilot', 'chatbot',
      'neural network', 'diffusion model', 'langchain', 'llama', 'fine-tuning',
      'embedding', 'dalle', 'runway', 'kaggle', 'jupyter', 'databricks',
      'data science', 'pandas', 'numpy',
      '深度学习', '机器学习', '人工智能', '大模型', '数据科学', '神经网络'
    ] },

    // ── Development ──
    { category: 'Development/Code Hosting', keywords: [
      'github', 'gitlab', 'gitee', 'bitbucket', 'repository', 'repo',
      'source code', 'open source', 'version control', 'git',
      '源码', '开源', '代码托管', '仓库'
    ] },
    { category: 'Development/Docs & API', keywords: [
      'docs', 'documentation', 'api', 'sdk', 'developer', 'developers',
      'reference', 'spec', 'protocol', 'mdn', 'postman', 'insomnia',
      'swagger', 'openapi', 'graphql', 'rest api',
      '文档', '接口', '开发文档', '技术规范'
    ] },
    { category: 'Development/Frontend', keywords: [
      'react', 'vue', 'angular', 'svelte', 'nextjs', 'nuxt', 'vite',
      'webpack', 'babel', 'typescript', 'javascript', 'ecmascript', 'css',
      'html', 'frontend', 'tailwind', 'webgl', 'shader', 'three.js',
      'node.js', 'npm', 'bun', 'electron', 'webassembly', 'wasm',
      'jquery', 'echarts', 'bootstrap', 'sass', 'scss', 'pwa',
      'web component', 'preact', 'solidjs', 'ember',
      '前端', '小程序', 'miniprogram', '网页', 'h5'
    ] },
    { category: 'Development/Backend', keywords: [
      'spring', 'springboot', 'django', 'flask', 'fastapi', 'express',
      'nestjs', 'golang', 'rust', 'python', 'java', 'backend', 'gin',
      'laravel', 'rails', 'asp.net', 'dotnet', 'csharp', 'php', 'kotlin',
      'scala', 'microservice', 'micronaut', 'quarkus', 'fastify', 'hapi',
      '后端', '服务端', '微服务'
    ] },
    { category: 'Development/Cloud & DevOps', keywords: [
      'aws', 'azure', 'gcp', 'cloud', 'kubernetes', 'k8s', 'docker',
      'ci/cd', 'devops', 'terraform', 'cloudflare', 'vercel', 'netlify',
      'grafana', 'nginx', 'linux', 'server', 'heroku', 'digitalocean',
      'linode', 'ansible', 'jenkins', 'github actions', 'prometheus',
      'deployment', 'monitoring', 'render', 'railway',
      '云服务', '运维', '部署', '服务器', '监控', '容器'
    ] },
    { category: 'Development/Databases', keywords: [
      'mysql', 'postgres', 'mongodb', 'redis', 'sqlite', 'elasticsearch',
      'clickhouse', 'database', 'sql', 'nosql', 'mariadb', 'oracle',
      'mssql', 'dynamodb', 'bigquery', 'firestore', 'cassandra',
      'neo4j', 'influxdb', 'prisma', 'typeorm', 'snowflake',
      '数据库', '数据存储', '缓存'
    ] },

    // ── Games ──
    { category: 'Games/Diablo', keywords: [
      'diablo', 'd2r', 'd3', 'd4', 'maxroll', 'd2core', 'helltides',
      'diablo2', 'arreat summit', 'runeword', 'rune word', 'horadric',
      'sanctuary',
      '暗黑破坏神', '暗黑', '凯恩之角', '赫拉迪姆'
    ] },
    { category: 'Games/Dyson Sphere', keywords: [
      'dyson sphere', 'dsp', 'factoriolab', 'dspcalculator',
      '戴森球', '戴森球计划'
    ] },
    { category: 'Games/Elden Ring', keywords: [
      'elden ring',
      '艾尔登法环', '老头环', '法环'
    ] },
    { category: 'Games/Brawl Stars', keywords: [
      'brawl stars',
      '荒野乱斗'
    ] },
    { category: 'Games/General', keywords: [
      'game', 'gaming', 'steam', 'epic games', 'tap titans', 'wukong',
      'build', 'guide', 'boss', 'skill tree', 'rune', 'ps5', 'playstation',
      'xbox', 'nintendo', 'switch', 'battle.net', 'blizzard', 'esports',
      'rog', 'razer', 'controller', 'gameplay', 'walkthrough', 'achievement',
      'trophy', 'mod', 'dlc', 'mmo', 'mmorpg', 'rpg', 'fps',
      '游戏', '攻略', '配装', '职业', '天赋', '技能', '符文', '战网',
      '电竞', '手柄', '控制器', '网游', '单机', '手游', 'nga', 'gamersky',
      'biligame', '3ds'
    ] },

    // ── Photography ──
    { category: 'Photography/Gear & Reviews', keywords: [
      'camera', 'lens', 'sony', 'canon', 'nikon', 'fujifilm', 'leica',
      'sigma', 'tamron', 'dslr', 'mirrorless', 'dxomark', 'dpreview',
      'cameralabs', 'petapixel', 'fstoppers', 'zeiss', 'hasselblad',
      'olympus', 'panasonic', 'aperture', 'focal', 'iso', 'shutter',
      'tripod', 'filter', 'sonyalpha',
      '镜头', '相机', '微单', '单反', '评测', '测评', '器材',
      '索尼', '佳能', '尼康', '富士', '徕卡', '适马'
    ] },
    { category: 'Photography/Editing', keywords: [
      'lightroom', 'photoshop', 'capture one', 'raw', 'editing', 'retouch',
      'color grading', 'lrtimelapse', 'luminar', 'affinity photo', 'gimp',
      'portraiture', 'preset', 'lut', 'exposure', 'white balance', 'hdr',
      'panorama', 'focus stacking',
      '修图', '后期', '调色', '预设', '色彩', '磨皮', '液化'
    ] },
    { category: 'Photography/General', keywords: [
      'photography', 'photo', 'inspiration', 'composition', 'lighting',
      'flickr', '500px', 'unsplash', 'pixabay', 'pexels', 'gettyimages',
      'shutterstock', 'adobe stock', 'istock', 'stock photo', 'portfolio',
      'photowalk', 'kelbyone', 'phlearn', 'imgur', 'pixiv',
      '摄影', '照片', '拍照', '拍摄', '灵感', '构图', '布光', '图库',
      '图床', '素材', '作品集', '打光', '版权'
    ] },

    // ── Design ──
    { category: 'Design', keywords: [
      'figma', 'sketch', 'dribbble', 'behance', 'icon', 'font', 'svg',
      'psd', 'ux', 'ui', 'prototype', 'icons8', 'fontawesome', 'coolors',
      'colorhunt', 'canva', 'mastergo', 'mockup', 'wireframe',
      'design system', 'material design', 'zeplin', 'framer', 'webflow',
      'spline',
      '设计', '配色', '交互', '体验', '产品设计', '蓝湖', '摹客',
      '即时设计', '原型'
    ] },

    // ── Tools ──
    { category: 'Tools/Online', keywords: [
      'tool', 'utility', 'converter', 'online', 'remove.bg', 'smallpdf',
      'ilovepdf', 'tinypng', 'tinify', 'regex', 'json formatter',
      'beautifier', 'diff checker', 'generator', 'encoder', 'decoder',
      'qr code', 'screenshot', 'software', 'app', 'tinyurl',
      '工具', '转换', '在线工具', '生成器', '格式化', '应用'
    ] },
    { category: 'Tools/Downloads', keywords: [
      'download', 'release', 'mirror', 'npmjs', 'pypi', 'maven',
      'crates.io', 'rubygems', 'cracked', 'keygen', 'portable', 'repack',
      '下载', '资源', '镜像', '百度网盘', '百度云', '阿里云盘', '破解',
      '绿色版', '汉化'
    ] },
    { category: 'Tools/Extensions', keywords: [
      'extension', 'plugin', 'addon', 'chrome web store',
      'addons.mozilla.org', 'edge add-ons', 'userscript', 'tampermonkey',
      'greasemonkey', 'violentmonkey',
      '插件', '扩展', '浏览器', '油猴', '脚本'
    ] },

    // ── Knowledge ──
    { category: 'Knowledge/Blogs & Forums', keywords: [
      'blog', 'medium', 'dev.to', 'hashnode', 'forum', 'community',
      'stackoverflow', 'stackexchange', 'wordpress', 'ghost', 'blogger',
      'cms', 'csdn', 'cnblogs', 'jianshu', 'zhihu', 'segmentfault',
      'freebuf', 'v2ex',
      '博客', '论坛', '社区', '博客园', '简书', '知乎', '掘金',
      '内容管理', '专栏', '讨论'
    ] },
    { category: 'Knowledge/News', keywords: [
      'news', 'headline', 'press', 'newsletter', 'techcrunch', 'wired',
      'theverge', 'arstechnica', 'engadget', 'hacker news',
      '新闻', '资讯', '媒体', '头条', '36氪', '少数派', 'sspai',
      'ithome', '快科技'
    ] },
    { category: 'Knowledge/Tutorials', keywords: [
      'course', 'tutorial', 'learn', 'udemy', 'coursera', 'edx',
      'pluralsight', 'freecodecamp', 'codecademy', 'frontend masters',
      'egghead', 'khan academy', 'skillshare', 'bootcamp', 'certification',
      '教程', '学习', '课程', '教育', '培训', '入门', '指南', '教学',
      '视频教程'
    ] },
    { category: 'Knowledge/Research', keywords: [
      'arxiv', 'paper', 'research', 'citation', 'nature', 'science',
      'springer', 'ieee', 'acm', 'doi', 'researchgate', 'pubmed',
      'google scholar', 'conference', 'journal', 'preprint',
      '论文', '科研', '学术', '期刊', '文献'
    ] },

    // ── Media ──
    { category: 'Media/Video & Music', keywords: [
      'youtube', 'bilibili', 'netflix', 'video', 'music', 'vimeo',
      'spotify', 'soundcloud', 'apple music', 'live stream', 'podcast',
      'audiobook', 'disney plus', 'hbo max', 'hulu', 'audio',
      '视频', '音乐', '哔哩哔哩', '直播', '播客', '音频'
    ] },
    { category: 'Media/Movies & TV', keywords: [
      'movie', 'film', 'rarbg', 'm-team', 'bluray', 'imdb',
      'rotten tomatoes', 'letterboxd', 'trakt', 'tmdb',
      '电影', '字幕', '影视', '磁力', '磁链', '蓝光', '剧集', '美剧',
      '日剧', '韩剧', 'pt站', '压制组'
    ] },
    { category: 'Media/Adult', keywords: [
      'sex', 'porn', 'adult', 'xxx', 'nsfw', 'onlyfans', 'hentai',
      'jav', 'erotic',
      '成人', '色情', '福利', '大尺度', '里番'
    ] },
    { category: 'Media/Social', keywords: [
      'twitter', 'facebook', 'instagram', 'tiktok', 'linkedin', 'discord',
      'telegram', 'wechat', 'weibo', 'reddit', 'whatsapp', 'snapchat',
      'pinterest', 'threads', 'signal', 'line', 'x.com',
      '社交', '微信', '微博', '分享', '朋友圈'
    ] },

    // ── Productivity ──
    { category: 'Productivity/Office', keywords: [
      'notion', 'confluence', 'slack', 'teams', 'jira', 'google drive',
      'google docs', 'dropbox', 'onedrive', 'monday', 'miro', 'lark',
      'feishu', 'airtable', 'coda', 'google sheets', 'google slides',
      'drive', 'office', 'docs',
      '协作', '飞书', '腾讯文档', '钉钉', '语雀', '办公', '在线文档'
    ] },
    { category: 'Productivity/Notes', keywords: [
      'obsidian', 'evernote', 'roam research', 'logseq', 'bear', 'onenote',
      'apple notes', 'simplenote', 'markdown', 'second brain',
      'zettelkasten', 'notepad', 'note',
      '笔记', '知识库', '印象笔记', '备忘录', '知识管理'
    ] },
    { category: 'Productivity/Tasks', keywords: [
      'asana', 'trello', 'todoist', 'clickup', 'kanban', 'tower', 'linear',
      'basecamp', 'gantt', 'project management', 'task management',
      'backlog', 'sprint', 'scrum', 'agile',
      '项目管理', '任务', '甘特图', '看板', '敏捷'
    ] },
    { category: 'Productivity/Email', keywords: [
      'gmail', 'outlook', 'mail', 'email', 'imap', 'smtp', 'protonmail',
      'fastmail', 'zoho mail', 'mailchimp', 'sendgrid', 'thunderbird',
      'exchange', 'message', 'chat',
      '邮箱', '邮件', '通讯', '收件箱'
    ] },

    // ── Hardware ──
    { category: 'Hardware/NAS', keywords: [
      'nas', 'synology', 'plex', 'jellyfin', 'emby', 'unraid', 'truenas',
      'freenas', 'qnap', 'home server', 'media server', 'raid',
      'ds920', 'ds220',
      '群晖', '家庭服务器', '私有云', '媒体服务器'
    ] },
    { category: 'Hardware/Network', keywords: [
      'router', 'openwrt', 'asus router', 'mikrotik', 'ubiquiti', 'unifi',
      'tp-link', 'xiaomi router', 'mesh wifi', 'switch', 'access point',
      'firewall', 'pfsense', 'opnsense', 'vlan', 'dd-wrt', 'merlin',
      '路由器', '网络设备', '交换机', '无线', '组网', '软路由', '旁路由'
    ] },
    { category: 'Hardware/PC', keywords: [
      'cpu', 'gpu', 'motherboard', 'ram', 'ssd', 'nvme', 'pc build',
      'noctua', 'gigabyte', 'msi', 'corsair', 'asus', 'cooling', 'psu',
      'power supply', 'case', 'gaming pc', 'workstation', 'overclock',
      'benchmark', 'monitor', 'keyboard', 'mouse', 'mechanical keyboard',
      'display', 'graphics card',
      '硬件', '装机', '散热', '主板', '内存', '显卡', '硬盘', '电源',
      '机箱', '显示器', '机械键盘', '鼠标'
    ] },

    // ── Network ──
    { category: 'Network/VPS & Proxy', keywords: [
      'vps', 'vpn', 'proxy', 'v2ray', 'clash', 'shadowsocks',
      'justmysocks', 'bandwagon', 'vultr', 'wireguard', 'trojan', 'xtls',
      'hysteria', 'sing-box', 'surge', 'quantumult', 'shadowsocksr',
      'vmess', 'vless', 'naiveproxy', 'cloudflare warp',
      '代理', '翻墙', '梯子', '机场', '科学上网', '节点', '订阅'
    ] },

    // ── Shopping ──
    { category: 'Shopping', keywords: [
      'shop', 'store', 'buy', 'mall', 'amazon', 'aliexpress', 'ebay',
      'etsy', 'shopify', 'taobao', 'jd', 'smzdm', 'tmall', 'pinduoduo',
      'walmart', 'bestbuy', 'newegg', 'costco',
      '购物', '购买', '淘宝', '京东', '什么值得买', '拼多多', '天猫',
      '商店', '商城'
    ] },

    // ── Finance ──
    { category: 'Finance', keywords: [
      'bank', 'finance', 'invest', 'stock', 'trading', 'crypto',
      'blockchain', 'paypal', 'stripe', 'alipay', 'wechat pay', 'wise',
      'usdt', 'btc', 'bitcoin', 'ethereum', 'defi', 'nft', 'binance',
      'coinbase', 'fund', 'forex', 'tax',
      '金融', '投资', '股票', '加密货币', '支付宝', '微信支付', '理财',
      '银行', '基金', '区块链'
    ] },

    // ── Jobs & Career ──
    { category: 'Jobs & Career', keywords: [
      'jobs', 'career', 'hr', 'resume', 'cv', 'indeed', 'glassdoor',
      'lever', 'greenhouse', 'recruiter', 'interview', 'salary', 'offer',
      '招聘', '求职', '简历', '拉勾', 'boss直聘', '前程无忧', '面试',
      '猎头'
    ] },

    // ── Life ──
    { category: 'Life/Travel', keywords: [
      'maps', 'google maps', 'navigation', 'gaode', 'baidu map',
      'openstreetmap', 'travel', 'uber', 'didi', 'airbnb', 'booking',
      'expedia', 'hotel', 'flight', 'ticket', 'tour', 'trip', 'agoda',
      'osm',
      '地图', '导航', '高德', '百度地图', '旅游', '滴滴', '酒店', '机票',
      '出行', '行程'
    ] },
    { category: 'Life/Reading', keywords: [
      'read', 'reading', 'ebook', 'epub', 'kindle', 'goodreads',
      'gutenberg', 'scribd', 'novel', 'comic', 'manga', 'book', 'library',
      'zlibrary', 'annas-archive',
      '阅读', '电子书', '小说', '漫画', '书籍', '图书馆'
    ] },
    { category: 'Life/Services', keywords: [
      'food delivery', 'uber eats', 'healthcare', 'insurance',
      'real estate', 'property', 'government', 'banking service',
      'mobile plan', 'broadband', 'rides',
      '生活', '服务', '外卖', '美团', '饿了么', '家政', '健康', '保险',
      '房产', '宽带', '手机套餐', '住宿'
    ] }
  ];

  // All language variants share the same English hierarchical categories
  // and comprehensive keyword lists covering both Chinese and English.
  const rules_zhCN = rules;
  const rules_zhTW = rules;
  const rules_en = rules;
  const rules_ru = rules;

  function byLang(lang) {
    if (!lang) return rules_en;
    const l = lang.toLowerCase();
    if (l.startsWith('zh-tw')) return rules_zhTW;
    if (l.startsWith('zh')) return rules_zhCN;
    if (l.startsWith('ru')) return rules_ru;
    return rules_en;
  }

  window.DefaultRules = {
    get(lang) {
      return byLang(lang).map(r => ({ category: r.category, keywords: r.keywords.slice() }));
    }
  };
})();
