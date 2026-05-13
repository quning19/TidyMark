// Default classification rules with hierarchical English categories.
// Priority is positional: first match wins (top → bottom).
// Category names use "/" to create nested folder structures.
(function () {
  const rules = [
    // ── Companies (high priority) ──
    { category: 'Playcrab', keywords: ['playcrab', 'tower'] },
    { category: 'Topjoy', keywords: ['topjoy', 'gouki', 'pandora', 'vega', 'fairy', '语雀'] },

    // ── AI & Machine Learning ──
    { category: 'AI & Machine Learning', keywords: [
      'ai', 'ml', 'deep learning', 'openai', 'huggingface', 'stable diffusion',
      'llm', 'pytorch', 'tensorflow', 'midjourney', 'colab',
      'transformer', 'gpt', 'claude', 'gemini', 'copilot', 'chatbot',
      'neural network', 'langchain', 'llama', 'fine-tuning',
      'embedding', 'kaggle', 'jupyter',
      'data science', 'pandas', 'numpy',
      '深度学习', '机器学习', '人工智能', '大模型', '数据科学', '神经网络'
    ] },

    // ── Development ──
    { category: 'Development/Unity', keywords: ['unity', 'unity3d'] },
    { category: 'Development/Cocos', keywords: ['cocos', 'cocos2d', 'cocos creator'] },

    { category: 'Development/Code Hosting', keywords: [
      'github', 'gitlab', 'gitee', 'bitbucket', 'repository', 'repo',
      'source code', 'open source', 'version control', 'git',
      '源码', '开源', '代码托管', '仓库'
    ] },
    { category: 'Development/Docs & API', keywords: [
      'docs', 'documentation', 'api', 'sdk', 'developer', 'developers',
      'reference', 'spec', 'protocol', 'mdn', 'postman',
      'swagger', 'openapi', 'graphql', 'rest api',
      '文档', '接口', '开发文档', '技术规范'
    ] },
    { category: 'Development/Frontend', keywords: [
      'react', 'vue', 'angular', 'svelte', 'nextjs', 'nuxt', 'vite',
      'webpack', 'babel', 'typescript', 'javascript', 'css',
      'html', 'frontend', 'tailwind', 'webgl', 'shader', 'three.js',
      'node.js', 'npm', 'bun', 'electron', 'webassembly', 'wasm',
      'bootstrap', 'sass', 'scss', 'pwa',
      '前端', '小程序', 'miniprogram', '网页'
    ] },
    { category: 'Development/Backend', keywords: [
      'spring', 'springboot', 'django', 'flask', 'fastapi', 'express',
      'nestjs', 'golang', 'rust', 'python', 'java', 'backend', 'gin',
      'laravel', 'rails', 'dotnet', 'csharp', 'kotlin',
      'microservice',
      '后端', '服务端', '微服务'
    ] },
    { category: 'Development/Cloud & DevOps', keywords: [
      'aws', 'azure', 'gcp', 'cloud', 'kubernetes', 'k8s', 'docker',
      'ci/cd', 'devops', 'terraform', 'cloudflare', 'vercel', 'netlify',
      'grafana', 'nginx', 'linux', 'server', 'digitalocean',
      'jenkins', 'github actions', 'prometheus', 'deployment', 'monitoring',
      '云服务', '运维', '部署', '服务器', '监控', '容器'
    ] },
    { category: 'Development/Databases', keywords: [
      'mysql', 'postgres', 'mongodb', 'redis', 'sqlite', 'elasticsearch',
      'database', 'sql', 'nosql', 'prisma',
      '数据库', '数据存储', '缓存'
    ] },

    // ── Games ──
    { category: 'Games/Game Development', keywords: [
      'godot', 'unreal engine', 'unreal', 'gamemaker', 'rpg maker',
      'game development', 'game design', '游戏开发', '游戏引擎'
    ] },
    { category: 'Games/Diablo II', keywords: [
      'd2r', 'd2core', 'diablo2', 'diablo ii', 'diablo 2',
      'arreat summit', 'runeword', 'rune word',
      '暗黑破坏神2', '暗黑2', '暗黑破坏神 2', '暗黑 2'
    ] },
    { category: 'Games/Diablo III', keywords: [
      'd3', 'diablo iii', 'diablo 3', 'diablo3',
      '暗黑破坏神3', '暗黑3', '暗黑破坏神 3', '暗黑 3'
    ] },
    { category: 'Games/Diablo IV', keywords: [
      'd4', 'diablo iv', 'diablo 4', 'diablo4', 'helltides',
      'maxroll', 'diablo',
      '暗黑破坏神4', '暗黑4', '暗黑破坏神 4', '暗黑 4',
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
      'game', 'gaming', 'steam', 'epic games',
      'ps5', 'playstation', 'xbox', 'nintendo', 'switch',
      'battle.net', 'blizzard', 'esports',
      'controller', 'gameplay', 'mod', 'dlc', 'mmo', 'rpg', 'fps',
      '游戏', '攻略', '配装', '职业', '天赋', '技能', '战网',
      '电竞', '手柄', '网游', '单机', '手游', 'nga', 'gamersky'
    ] },

    // ── Photography ──
    { category: 'Photography/Gear & Reviews', keywords: [
      'camera', 'lens', 'sony', 'canon', 'nikon', 'fujifilm', 'leica',
      'sigma', 'tamron', 'dslr', 'mirrorless', 'dxomark', 'dpreview', 'cameralabs',
      'aperture', 'focal', 'iso', 'shutter', 'tripod', 'filter',
      '镜头', '相机', '微单', '单反',
      '索尼', '佳能', '尼康', '富士'
    ] },
    { category: 'Photography/Editing', keywords: [
      'lightroom', 'photoshop', 'capture one', 'raw', 'editing', 'retouch',
      'color grading', 'lrtimelapse', 'preset', 'lut', 'exposure', 'hdr',
      '修图', '后期', '调色', '预设'
    ] },
    { category: 'Photography/General', keywords: [
      'photography', 'photo', 'inspiration', 'composition', 'lighting',
      'flickr', '500px', 'unsplash', 'pexels', 'portfolio',
      '摄影', '照片', '拍照', '灵感', '构图', '图库', '图床', '素材'
    ] },

    // ── Design ──
    { category: 'Design', keywords: [
      'figma', 'sketch', 'dribbble', 'behance', 'icon', 'font', 'svg',
      'psd', 'ux', 'ui', 'prototype', 'fontawesome', 'coolors',
      'canva', 'mockup', 'wireframe', 'design system',
      '设计', '配色', '交互', '体验', '原型'
    ] },

    // ── Tools ──
    { category: 'Tools/Online', keywords: [
      'tool', 'utility', 'converter', 'online', 'remove.bg', 'smallpdf',
      'tinypng', 'regex', 'json formatter',
      'diff checker', 'generator', 'qr code', 'screenshot',
      '工具', '转换', '在线工具', '格式化'
    ] },
    { category: 'Tools/Downloads', keywords: [
      'download', 'release', 'mirror', 'npmjs', 'pypi', 'maven',
      'crates.io', 'rubygems', 'cracked', 'keygen', 'portable',
      '下载', '资源', '镜像', '百度网盘', '阿里云盘', '破解', '绿色版', '汉化'
    ] },
    { category: 'Tools/Extensions', keywords: [
      'extension', 'plugin', 'addon', 'chrome web store',
      'userscript', 'tampermonkey', 'greasemonkey',
      '插件', '扩展', '油猴', '脚本'
    ] },

    // ── Knowledge ──
    { category: 'Knowledge/Blogs & Forums', keywords: [
      'blog', 'medium', 'forum', 'community',
      'stackoverflow', 'wordpress', 'csdn', 'zhihu', 'v2ex',
      '博客', '论坛', '社区', '知乎', '掘金'
    ] },
    { category: 'Knowledge/News', keywords: [
      'news', 'headline', 'newsletter', 'techcrunch', 'hacker news',
      '新闻', '资讯', '媒体', '头条', '36氪', '少数派', 'ithome'
    ] },
    { category: 'Knowledge/Tutorials', keywords: [
      'course', 'tutorial', 'learn', 'udemy', 'coursera',
      'freecodecamp', 'codecademy', 'khan academy', 'bootcamp',
      '教程', '学习', '课程', '教育', '培训', '视频教程'
    ] },
    { category: 'Knowledge/Research', keywords: [
      'arxiv', 'paper', 'research', 'nature', 'science',
      'ieee', 'google scholar', 'conference', 'journal',
      '论文', '科研', '学术'
    ] },

    // ── Media ──
    { category: 'Media/Video & Music', keywords: [
      'youtube', 'bilibili', 'netflix', 'video', 'music',
      'spotify', 'podcast',
      '视频', '音乐', '哔哩哔哩', '直播', '播客'
    ] },
    { category: 'Media/Movies & TV', keywords: [
      'movie', 'film', 'rarbg', 'm-team', 'bluray', 'imdb',
      '电影', '字幕', '影视', '磁力', '蓝光', '剧集', '美剧', '日剧', 'pt站'
    ] },
    { category: 'Media/Adult', keywords: [
      'sex', 'porn', 'adult', 'xxx', 'nsfw', 'onlyfans', 'jav',
      '成人', '色情'
    ] },
    { category: 'Media/Social', keywords: [
      'twitter', 'facebook', 'instagram', 'tiktok', 'linkedin', 'discord',
      'telegram', 'wechat', 'weibo', 'reddit',
      '社交', '微信', '微博', '朋友圈'
    ] },

    // ── Productivity ──
    { category: 'Productivity/Office', keywords: [
      'notion', 'confluence', 'slack', 'teams', 'jira', 'google drive',
      'google docs', 'dropbox', 'onedrive', 'feishu', 'airtable', 'office',
      '协作', '飞书', '腾讯文档', '钉钉', '语雀', '办公'
    ] },
    { category: 'Productivity/Notes', keywords: [
      'obsidian', 'evernote', 'onenote', 'markdown', 'note',
      '笔记', '知识库', '印象笔记', '备忘录'
    ] },
    { category: 'Productivity/Tasks', keywords: [
      'asana', 'trello', 'todoist', 'clickup', 'kanban', 'linear',
      'project management', 'task management', 'scrum',
      '项目管理', '任务', '看板'
    ] },
    { category: 'Productivity/Email', keywords: [
      'gmail', 'outlook', 'mail', 'email', 'protonmail', 'mailchimp',
      '邮箱', '邮件'
    ] },

    // ── Hardware ──
    { category: 'Hardware/NAS', keywords: [
      'nas', 'synology', 'plex', 'jellyfin', 'emby', 'unraid', 'truenas',
      'qnap', 'home server', 'media server',
      '群晖', '飞牛', '家庭服务器', '私有云'
    ] },
    { category: 'Hardware/Network', keywords: [
      'router', 'openwrt', 'asus router', 'mikrotik', 'ubiquiti', 'unifi',
      'tp-link', 'switch', 'access point', 'firewall', 'pfsense', 'merlin',
      '路由', '路由器', '交换机', '软路由', '组网'
    ] },
    { category: 'Hardware/PC', keywords: [
      'cpu', 'gpu', 'motherboard', 'ram', 'ssd', 'nvme', 'pc build',
      'noctua', 'gigabyte', 'msi', 'corsair', 'asus', 'cooling', 'psu',
      'benchmark', 'monitor', 'keyboard', 'mouse', 'mechanical keyboard',
      '硬件', '装机', '散热', '主板', '内存', '显卡', '硬盘', '电源', '机箱', '显示器', '机械键盘', '鼠标'
    ] },

    // ── Network ──
    { category: 'Network/VPS & Proxy', keywords: [
      'vps', 'vpn', 'proxy', 'v2ray', 'clash', 'shadowsocks',
      'justmysocks', 'bandwagon', 'vultr', 'wireguard', 'trojan', 'surge', 'quantumult',
      '代理', '翻墙', '梯子', '机场', '科学上网', '节点', '订阅'
    ] },

    // ── Shopping ──
    { category: 'Shopping', keywords: [
      'shop', 'store', 'buy', 'amazon', 'aliexpress', 'ebay',
      'shopify', 'taobao', 'jd', 'smzdm', 'tmall', 'pinduoduo',
      '购物', '购买', '淘宝', '京东', '什么值得买', '拼多多', '天猫'
    ] },

    // ── Finance ──
    { category: 'Finance', keywords: [
      'bank', 'finance', 'invest', 'stock', 'trading', 'crypto',
      'blockchain', 'paypal', 'bitcoin', 'ethereum', 'binance',
      '金融', '投资', '股票', '加密货币', '支付宝', '区块链'
    ] },

    // ── Jobs & Career ──
    { category: 'Jobs & Career', keywords: [
      'jobs', 'career', 'resume', 'cv', 'indeed', 'glassdoor', 'interview',
      '招聘', '求职', '简历', '面试', '猎头'
    ] },

    // ── Life ──
    { category: 'Life/Travel', keywords: [
      'maps', 'google maps', 'navigation', 'gaode', 'travel', 'uber',
      'didi', 'airbnb', 'hotel', 'flight', 'trip', 'agoda',
      '地图', '导航', '高德', '旅游', '滴滴', '酒店', '机票'
    ] },
    { category: 'Life/Reading', keywords: [
      'read', 'reading', 'ebook', 'epub', 'kindle', 'goodreads',
      'novel', 'comic', 'manga', 'book', 'library', 'zlibrary',
      '阅读', '电子书', '小说', '漫画'
    ] },
    { category: 'Life/Services', keywords: [
      'food delivery', 'healthcare', 'insurance',
      'real estate', 'government', 'mobile plan',
      '生活', '服务', '外卖', '美团', '饿了么', '健康', '保险', '房产'
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
