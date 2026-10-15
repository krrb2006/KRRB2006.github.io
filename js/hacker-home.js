(() => {
  const STORAGE_KEY = 'krrb-hacker-home-v1'
  const defaults = {
    siteName: '一如既往', brandLine: 'SAME AS ALWAYS.', siteSince: '2026-04-02',
    navHome: '首页', navWriting: '文章', navProjects: '项目', navFriends: '友链', navAbout: '关于', statusTag: 'ONLINE',
    eyebrow: 'A GIRL · A KEYBOARD · A MORE INTERESTING UNIVERSE', artStamp: 'NO. 01\nGIRL IN THE SYSTEM',
    slide1Title: '数字花园 · 原始封面', slide2Title: '霓虹天台 · 夜行者', slide3Title: '知识冢 · 深处的档案', slide4Title: '赤色竞技场 · 群像与热爱', heroIndex: 'A GIRL · A KEYBOARD\nA MORE INTERESTING UNIVERSE · VOL. 1',
    radioTag: 'ON AIR', radioFrequency: '102.4 FM', radioQuote: '“在代码的电波里，总有另一个我在回应。”', radioGenres: '/ LITERATURE\n/ CODE\n/ CINEMA\n/ DAILY LIFE\n/ ANOTHER UNIVERSE',
    secretCardTitle: '一封来自另一个宇宙的信', secretCardIntro: '去另一个平行宇宙，看看我的另一种可能。',
    recentIndex: 'LATEST NOTES', recentLabel: '最近文章', recentMore: '查看全部文章',
    tickerOne: 'THINK DEEPER', tickerTwo: 'BUILD COOLER THINGS', tickerThree: 'LIVE A SOFTER LIFE',
    title: '你好，\n欢迎来到我的数字花园',
    intro: '在代码与日常之间，记录思考、收集喜欢，也种下一些柔软而坚定的东西。',
    signature: 'Still here. Still planting.',
    aboutIndex: '01 / ABOUT', aboutLabel: '个人档案', aboutTitle: '关于这颗星球', terminalUser: 'krrb@universe', terminalText: 'whoami — just a girl, planting ideas in a chaotic world.',
    aboutText: '一个喜欢代码、音乐与可爱事物的普通人。用文字保存瞬间，用代码搭建想象中的小宇宙。',
    projectIndex: '02 / SELECTED WORKS', projectLabel: '精选项目', projectHeading: '正在生长的项目',
    projectLead: '把脑海里的世界，一点点变成可以抵达的地方。',
    tombTitle: '知识冢 · The Tomb of Knowledge', tombUrl: 'https://krrb2006.github.io/the-tomb-of-knowledge/', tombRepoUrl: 'https://github.com/krrb2006/the-tomb-of-knowledge',
    projectKind: 'INTERACTIVE STORY · 2026', tombText: '一座关于记忆、遗忘与知识的互动叙事。进入知识冢，开始一场安静的探索。',
    tombCta: '进入试玩', tombRepoCta: '查看项目源码',
    examTitle: '期末复习助手 · Exam Revision Assistant',
    examText: '为大学生提供复习计划、AI答疑、练习生成与进度追踪，把考前焦虑整理成一张可执行的计划。',
    examKind: 'AI STUDY TOOL', examCta: '查看项目', examUrl: 'https://github.com/krrb2006/exam-revision-skill',
    labTitle: 'LLM 辅助 Web 漏洞挖掘',
    labText: '网络安全课程协作实验，围绕 SQL 注入与 XSS 的提示词迭代和误漏报分析；目前仍在项目初始化阶段。',
    labKind: 'SECURITY RESEARCH · IN PROGRESS', labCta: '查看实验仓库', labUrl: 'https://github.com/krrb2006/llm-web-vuln-lab',
    writingIndex: '03 / FIELD NOTES', writingLabel: '精选文章', writingDateTag: 'FIELD NOTE',
    articleTitle: '在世界的系统里，继续种花',
    articleText: '记录那些还没来得及说出口的念头，以及认真生活的微小证据。',
    articleDate: '随笔 · 慢慢更新', articleCta: '浏览文章档案', archiveCta: '进入完整档案 / ARCHIVE',
    friendsIndex: '04 / FRIENDS', friendsLabel: '友链交换站', friendHeading: '友链 · 同频的人',
    friendLead: '在不同的角落写字、造梦，然后隔着屏幕互相照亮。',
    friend1Name: 'Xinyi 的小站', friend1Text: '收集灵感，也认真生活。', friend1Url: 'https://xinyi234.github.io/link/',
    friend2Name: '求知欲，好奇心', friend2Text: '保持好奇，勇毅前行。', friend2Url: 'https://xyy9233.github.io/',
    friend3Name: '新实 · LilRan', friend3Text: '今日启程，无畏向前。', friend3Url: 'https://blog.xinshi.fun/',
    footerNote: '愿我们都能在混沌里，种下自己的花。', footerCredit: 'MADE WITH LOVE & CAFFEINE',
    secretLabel: 'A TINY SECRET · 彩蛋', letterStamp: 'TRANSMISSION RECEIVED', starOrderHint: '按顺序点亮哦', starReadyText: '信号已接收 ✦',
    secretHint: '如果你也喜欢这个小宇宙，点亮三颗星，收下一封来自平行宇宙的信。',
    secretTitle: '给另一个宇宙的你',
    secretText: '这里藏着另一间小小的房间。愿你每次推开门，都能遇见一个新的自己。',
    secretCta: '打开那封信 ↗', secretUrl: 'https://krrb2006.github.io/cruel.github.io/'
  }
  const editFields = [
    ['siteName', '网站名称'], ['brandLine', '品牌小字'], ['siteSince', '建站日期（YYYY-MM-DD）'], ['navHome', '导航：主页'], ['navWriting', '导航：文章'], ['navProjects', '导航：项目'], ['navFriends', '导航：友链'], ['navAbout', '导航：关于'], ['statusTag', '状态文字'],
    ['eyebrow', '标题上方英文小字'], ['heroIndex', '右侧英文签名（换行用回车）'], ['artStamp', '头图角标（换行用回车）'], ['slide1Title', '轮播图标题 1'], ['slide2Title', '轮播图标题 2'], ['slide3Title', '轮播图标题 3'], ['slide4Title', '轮播图标题 4'], ['title', '主页大标题（换行用回车）'], ['intro', '主页介绍'], ['signature', '个性签名'],
    ['radioTag', '电台状态文字'], ['radioFrequency', '电台频率文字'], ['radioQuote', '电台引用'], ['radioGenres', '兴趣清单（换行分隔）'], ['secretCardTitle', '来信卡片标题'], ['secretCardIntro', '来信卡片说明'], ['recentIndex', '最近更新英文小字'], ['recentLabel', '最近更新标题'], ['recentMore', '项目入口文字'],
    ['tickerOne', '滚动标语 1'], ['tickerTwo', '滚动标语 2'], ['tickerThree', '滚动标语 3'],
    ['aboutIndex', '关于区编号'], ['aboutLabel', '关于区中文标签'], ['aboutTitle', '关于标题'], ['aboutText', '关于介绍'], ['terminalUser', '终端用户名'], ['terminalText', '终端简介'],
    ['projectIndex', '项目区编号'], ['projectLabel', '项目区中文标签'], ['projectHeading', '项目区标题'], ['projectLead', '项目区介绍'], ['projectKind', '项目类型标签'],
    ['tombTitle', '知识冢项目名称'], ['tombText', '知识冢项目介绍'], ['tombCta', '试玩按钮文字'], ['tombUrl', '知识冢试玩地址'], ['tombRepoCta', '源码按钮文字'], ['tombRepoUrl', '知识冢源码地址'],
    ['examTitle', '复习助手项目名称'], ['examText', '复习助手项目介绍'], ['examKind', '复习助手项目标签'], ['examCta', '复习助手链接文字'], ['examUrl', '复习助手链接地址'],
    ['labTitle', '安全实验项目名称'], ['labText', '安全实验项目介绍'], ['labKind', '安全实验项目标签'], ['labCta', '安全实验链接文字'], ['labUrl', '安全实验链接地址'],
    ['writingIndex', '文章区编号'], ['writingLabel', '文章区中文标签'], ['writingDateTag', '文章卡片小标签'], ['articleTitle', '文章标题'], ['articleText', '文章摘要'], ['articleDate', '文章日期/分类'], ['articleCta', '文章按钮文字'], ['archiveCta', '档案按钮文字'],
    ['friendsIndex', '友链区编号'], ['friendsLabel', '友链区中文标签'], ['friendHeading', '友链标题'], ['friendLead', '友链介绍'],
    ['footerNote', '页脚文字'], ['footerCredit', '页脚英文署名'], ['secretLabel', '彩蛋标签'], ['letterStamp', '来信标签'], ['starOrderHint', '点星顺序提示'], ['starReadyText', '彩蛋解锁提示'], ['secretHint', '彩蛋提示'], ['secretTitle', '隐藏来信标题'], ['secretText', '隐藏来信内容'], ['secretCta', '隐藏来信链接文字'], ['secretUrl', '隐藏来信目标地址']
  ]
  let config = { ...defaults }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    config = { ...config, ...saved }
  } catch (_) { localStorage.removeItem(STORAGE_KEY) }
  if (/^https:\/\/github\.com\/krrb2006\/cruel\.github\.io\/?$/i.test(config.secretUrl)) config.secretUrl = defaults.secretUrl

  document.title = `${config.siteName} — 数字花园`
  document.documentElement.dataset.homeTheme = localStorage.getItem(`${STORAGE_KEY}-theme`) || 'dark'
  document.documentElement.dataset.theme = document.documentElement.dataset.homeTheme
  document.body.innerHTML = `
      <header class="cyber-nav"><div class="brand-lockup"><a class="brand" href="#top" data-copy="siteName"></a><small data-copy="brandLine"></small></div>
      <nav aria-label="主导航"><a href="#top" data-copy="navHome"></a><a href="/archives/" data-copy="navWriting"></a><a href="#projects" data-copy="navProjects"></a><a href="#friends" data-copy="navFriends"></a><a href="#about" data-copy="navAbout"></a></nav>
      <div class="nav-actions"><span class="live-indicator"><i></i> <span data-copy="statusTag"></span></span><button class="icon-button" id="theme-toggle" aria-label="切换主题" title="切换主题"><i class="fa-solid fa-moon"></i></button><button class="icon-button" id="edit-open" aria-label="自定义主页" title="自定义主页"><i class="fa-solid fa-sliders"></i></button></div>
    </header>
    <main id="top">
      <section class="hero home-hero">
        <div class="hero-art" aria-label="灵感主题图片轮播">
          <img class="hero-slide is-active" src="/img/hacker-garden.jpg" alt="红色霓虹数字花园中的少女黑客" data-credit-name="主页原始插画">
          <img class="hero-slide" src="/img/hacker-rooftop.png" alt="樱花与霓虹城市中的少女黑客" data-credit-name="原创 AI 氛围插画">
          <img class="hero-slide" src="/img/hacker-archive.png" alt="深山数字档案馆中的少女探索者" data-credit-name="原创 AI 氛围插画">
          <img class="hero-slide" src="/img/hacker-arena.png" alt="红色灯光下的原创电竞群像" data-credit-name="原创 AI 氛围插画">
          <div class="art-shade" aria-hidden="true"></div><div class="art-stamp" data-copy="artStamp"></div>
          <div class="hero-slide-caption"><span class="slide-count">01 / 04</span><strong data-copy="slide1Title"></strong><span class="slide-credit">主页原始插画</span></div>
          <div class="hero-controls"><button class="slide-arrow" id="slide-prev" aria-label="上一张"><i class="fa-solid fa-arrow-left"></i></button><div class="slide-dots" role="tablist" aria-label="选择主题图片"><button class="slide-dot is-active" aria-label="第 1 张图片" aria-selected="true"></button><button class="slide-dot" aria-label="第 2 张图片" aria-selected="false"></button><button class="slide-dot" aria-label="第 3 张图片" aria-selected="false"></button><button class="slide-dot" aria-label="第 4 张图片" aria-selected="false"></button></div><button class="slide-arrow" id="slide-next" aria-label="下一张"><i class="fa-solid fa-arrow-right"></i></button></div>
        </div>
        <div class="hero-copy"><p class="eyebrow" data-copy="eyebrow"></p><h1 data-copy="title"></h1><div class="red-rule"></div><p class="hero-intro" data-copy="intro"></p><div class="hero-bottom"><a class="button button-red" href="/archives/"><span data-copy="articleCta"></span><i class="fa-solid fa-arrow-right"></i></a><a class="hero-about-link" href="#about"><span data-copy="navAbout"></span><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div></div>
        <aside class="hero-rail" aria-label="电台与花园信号"><div class="radio-card"><div class="radio-heading"><span class="radio-onair"><i></i><span data-copy="radioTag"></span></span><strong data-copy="radioFrequency"></strong></div><div class="radio-spectrum-stage"><img src="/img/radio-spectrum.jpg" alt="荧绿色的抽象电台声波" class="radio-spectrum"><span class="radio-spectrum-cursor" aria-hidden="true"></span><div class="radio-counters"><div class="radio-counter"><small>VISITORS <i>· UV</i></small><strong id="busuanzi_value_site_uv">—</strong></div><span class="radio-counter-divider" aria-hidden="true"></span><div class="radio-counter"><small>PAGE VIEWS <i>· PV</i></small><strong id="busuanzi_value_site_pv">—</strong></div></div></div><div class="radio-since"><span>GARDEN EST.</span><b data-copy="siteSince">2026.04.02</b><span class="radio-signal-note">SIGNAL / 01</span></div><div class="radio-lower"><p data-copy="radioQuote"></p><span data-copy="radioGenres"></span></div></div><a class="secret-preview" href="#secret"><img src="/img/moonflower-letter.jpg" alt="月亮和白色花朵的拼贴插画"><span class="secret-preview-copy"><strong data-copy="secretCardTitle"></strong><small data-copy="secretCardIntro"></small></span><i class="fa-solid fa-arrow-up-right-from-square"></i></a></aside>
        <div class="hero-index" data-copy="heroIndex"></div>
      </section>
      <section class="front-feed wrap" id="writing"><section class="featured-column"><div class="feed-heading"><div class="section-label"><span data-copy="writingIndex"></span><span data-copy="writingLabel"></span></div><span class="feed-heading-en">FEATURED ESSAY</span></div><article class="featured-essay"><a class="featured-image" id="featured-article-link" href="/archives/"><img id="featured-article-cover" src="/img/essay-workstation.jpg" alt="精选文章封面"></a><div class="featured-copy"><div class="featured-meta"><span data-copy="writingDateTag"></span><small id="featured-article-date" data-copy="articleDate"></small></div><h2 id="featured-article-title" data-copy="articleTitle"></h2><p id="featured-article-summary" data-copy="articleText"></p><a class="text-link" id="featured-article-read" href="/archives/"><span data-copy="articleCta"></span><i class="fa-solid fa-arrow-right"></i></a></div></article></section><aside class="recent-column"><div class="feed-heading"><div class="section-label"><span data-copy="recentIndex"></span><span data-copy="recentLabel"></span></div><a class="recent-view-all" href="/archives/"><span data-copy="recentMore"></span><i class="fa-solid fa-arrow-right"></i></a></div><div class="recent-list" id="recent-articles"><a class="recent-item" data-url="tombUrl" target="_blank" rel="noopener"><img src="/img/knowledge-tomb.jpg" alt="知识冢项目封面"><span class="recent-copy"><small data-copy="projectKind"></small><strong data-copy="tombTitle"></strong><span data-copy="tombText"></span></span><i class="fa-solid fa-chevron-right"></i></a></div></aside></section>
      <div class="ticker" aria-label="滚动标语"><div><span data-copy="tickerOne"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerTwo"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerThree"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerOne"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerTwo"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerThree"></span></div></div>
      <section class="section wrap about-section" id="about"><div class="section-label"><span data-copy="aboutIndex"></span><span data-copy="aboutLabel"></span></div><div class="about-grid"><h2 data-copy="aboutTitle"></h2><div><p class="about-text" data-copy="aboutText"></p><div class="terminal-line"><span data-copy="terminalUser"></span>:~$ <span class="terminal-output" data-copy="terminalText"></span><i class="fa-solid fa-square terminal-cursor" aria-hidden="true"></i></div></div></div></section>
      <section class="section wrap" id="projects"><div class="section-label"><span data-copy="projectIndex"></span><span data-copy="projectLabel"></span></div><div class="section-heading"><h2 data-copy="projectHeading"></h2><p data-copy="projectLead"></p></div><article class="project-card"><div class="project-visual"><img src="/img/knowledge-tomb.jpg" alt="知识冢项目封面：红色灯光照亮的地下档案馆"></div><div class="project-detail"><span class="project-kicker"><i class="fa-solid fa-circle"></i> <span data-copy="projectKind"></span></span><h3 data-copy="tombTitle"></h3><p data-copy="tombText"></p><div class="project-links"><a class="button button-red" data-url="tombUrl" target="_blank" rel="noopener"><span data-copy="tombCta"></span><i class="fa-solid fa-arrow-up-right-from-square"></i></a><a class="text-link" data-url="tombRepoUrl" target="_blank" rel="noopener"><span data-copy="tombRepoCta"></span><i class="fa-brands fa-github"></i></a></div></div><span class="project-number">01</span></article><div class="project-mini-grid"><a class="project-mini" data-url="examUrl" target="_blank" rel="noopener"><span class="mini-icon"><i class="fa-solid fa-graduation-cap"></i></span><span class="mini-kind" data-copy="examKind"></span><strong data-copy="examTitle"></strong><p data-copy="examText"></p><span class="mini-link"><span data-copy="examCta"></span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a><a class="project-mini" data-url="labUrl" target="_blank" rel="noopener"><span class="mini-icon"><i class="fa-solid fa-shield-halved"></i></span><span class="mini-kind" data-copy="labKind"></span><strong data-copy="labTitle"></strong><p data-copy="labText"></p><span class="mini-link"><span data-copy="labCta"></span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a></div></section>
      <section class="section wrap friends-section" id="friends"><div class="section-label"><span data-copy="friendsIndex"></span><span data-copy="friendsLabel"></span></div><div class="section-heading"><h2 data-copy="friendHeading"></h2><p data-copy="friendLead"></p></div><div class="friend-grid" id="friend-grid"></div><button type="button" class="button button-quiet friend-manage-open" id="friend-manage-open"><i class="fa-solid fa-pen-to-square"></i> 管理友链</button></section>
      <section class="secret-section wrap" id="secret"><div class="secret-copy"><span class="section-label-inline" data-copy="secretLabel"></span><p data-copy="secretHint"></p></div><div class="star-lock" aria-label="点亮三颗星解锁隐藏来信"><button class="star" aria-label="点亮第一颗星"><i class="fa-solid fa-star"></i></button><button class="star" aria-label="点亮第二颗星"><i class="fa-solid fa-star"></i></button><button class="star" aria-label="点亮第三颗星"><i class="fa-solid fa-star"></i></button><span class="star-status">0 / 3</span></div></section>
    </main>
    <footer class="cyber-footer wrap"><a class="brand" href="#top" data-copy="siteName"></a><p data-copy="footerNote"></p><button class="terminal-open" id="terminal-open" type="button" title="隐藏终端彩蛋：键入 garden"><i class="fa-solid fa-terminal"></i><span>GARDEN TERMINAL</span><kbd>TYPE GARDEN</kbd></button><span>© <span id="year"></span> · <span data-copy="footerCredit"></span></span></footer>
    <span class="cursor-prompt" id="cursor-prompt" aria-hidden="true"><i class="fa-solid fa-sparkles"></i></span>
    <span class="cursor-orbit" id="cursor-orbit" aria-hidden="true"></span>
    <canvas class="signal-canvas" id="signal-canvas" aria-hidden="true"></canvas>
    <div class="reading-signal" id="reading-signal" aria-hidden="true"><span></span></div>
    <dialog class="terminal-dialog" id="terminal-dialog" aria-labelledby="terminal-title"><section class="terminal-shell"><header class="terminal-top"><div><i></i><i></i><i></i></div><span id="terminal-title">GARDEN://LOCAL_TERMINAL</span><button class="icon-button" id="terminal-close" aria-label="关闭终端"><i class="fa-solid fa-xmark"></i></button></header><div class="terminal-screen"><p class="terminal-welcome">SIGNAL FOUND · 欢迎来到花园的隐藏层。<br>输入 <code>help</code> 查看指令，输入后按 <kbd>Enter ↵</kbd> 发送。</p><div class="terminal-output-log" id="terminal-log" role="log" aria-live="polite" aria-relevant="additions text"></div><form id="terminal-form"><label for="terminal-input">krrb@garden:~$</label><input id="terminal-input" autocomplete="off" spellcheck="false" placeholder="输入 help，然后按 Enter" aria-label="输入终端指令"><button type="submit" aria-label="执行指令"><i class="fa-solid fa-arrow-right"></i></button></form></div><footer>LOCAL SIMULATION · NO SHELL ACCESS · ESC TO CLOSE</footer></section></dialog>
    <dialog class="edit-dialog" id="edit-dialog"><form method="dialog" class="edit-shell"><header class="edit-header"><div><span>PERSONAL CONTROL PANEL</span><h2>自定义你的数字花园</h2></div><button class="icon-button" value="cancel" aria-label="关闭"><i class="fa-solid fa-xmark"></i></button></header><p class="edit-notice">更改和图片保存在当前浏览器，只影响这台设备。若要让所有访客看到修改，请导出配置后同步更新仓库内容并发布。</p><div class="edit-fields" id="edit-fields"></div><div class="upload-field"><label for="hero-upload">替换当前轮播图 <small>PNG / JPG / WebP，建议小于 2 MB；只保存在本浏览器并记住当前页序</small></label><input id="hero-upload" type="file" accept="image/png,image/jpeg,image/webp"></div><footer class="edit-footer"><button type="button" class="button button-quiet" id="reset-config">恢复默认</button><span></span><button type="button" class="button button-quiet" id="export-config">导出配置</button><button type="submit" class="button button-red" id="save-config">保存修改</button></footer></form></dialog>
    <dialog class="letter-dialog" id="letter-dialog"><div class="letter-paper"><button class="icon-button letter-close" id="letter-close" aria-label="关闭"><i class="fa-solid fa-xmark"></i></button><span class="letter-stamp" data-copy="letterStamp"></span><h2 data-copy="secretTitle"></h2><p data-copy="secretText"></p><a class="button button-red secret-link" data-url="secretUrl" target="_blank" rel="noopener"><span data-copy="secretCta"></span></a></div></dialog>
    <dialog class="friend-manager-dialog" id="friend-manager-dialog"><form method="dialog" class="friend-manager-shell"><header class="edit-header"><div><span>LINK PORTAL · FRIENDS</span><h2>友链管理</h2></div><button class="icon-button" value="cancel" aria-label="关闭"><i class="fa-solid fa-xmark"></i></button></header><p class="edit-notice">支持新增、编辑、删除、头像链接或本地上传。要让所有访客看到，请导出 friends.json 并替换仓库中的 data/friends.json 后提交发布。</p><div id="friend-editor-list" class="friend-editor-list"></div><div class="friend-manager-actions"><button type="button" class="button button-quiet" id="friend-add"><i class="fa-solid fa-plus"></i> 添加友链</button><button type="button" class="button button-quiet" id="friend-export">导出 friends.json</button><label class="button button-quiet friend-import-label" for="friend-import">导入友链<input id="friend-import" type="file" accept="application/json"></label><span></span><button type="button" class="button button-red" id="friend-save">保存友链</button></div></form></dialog>`
  document.body.classList.add('cyber-home')
  const FRIENDS_KEY = 'krrb-blog-friends-v1'
  const seedFriends = [1, 2, 3].map((n, i) => ({ name: config[`friend${n}Name`], intro: config[`friend${n}Text`], url: config[`friend${n}Url`], avatar: '', icon: ['fa-satellite-dish', 'fa-meteor', 'fa-moon'][i] }))
  let friends = seedFriends
  try { friends = JSON.parse(localStorage.getItem(FRIENDS_KEY) || 'null') || seedFriends } catch (_) { friends = seedFriends }
  const hasLegacyFriends = [1, 2, 3].some(index => config[`friend${index}Name`] !== defaults[`friend${index}Name`] || config[`friend${index}Text`] !== defaults[`friend${index}Text`] || config[`friend${index}Url`] !== defaults[`friend${index}Url`])
  const hasLocalFriends = localStorage.getItem(FRIENDS_KEY) !== null || hasLegacyFriends

  const safeUrl = value => {
    try {
      const url = new URL(value, location.origin)
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '#'
    } catch (_) { return '#' }
  }
  const isValidUrl = value => {
    try { return ['http:', 'https:'].includes(new URL(value).protocol) }
    catch (_) { return false }
  }
  const applyConfig = () => {
    document.querySelectorAll('[data-copy]').forEach(el => {
      const value = config[el.dataset.copy]
      if (value !== undefined) el.textContent = value
    })
    document.querySelectorAll('[data-url]').forEach(el => { el.href = safeUrl(config[el.dataset.url] || '#') })
    const gardenDate = document.querySelector('.radio-since [data-copy="siteSince"]')
    if (gardenDate) gardenDate.textContent = String(config.siteSince || '').replace(/-/g, '.')
    document.title = `${config.siteName} — 数字花园`
  }
  const validAvatar = value => {
    if (/^data:image\/(png|jpeg|webp);base64,/i.test(value || '')) return value
    try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.href : '' } catch (_) { return '' }
  }
  const renderFriends = () => {
    const grid = document.getElementById('friend-grid')
    grid.replaceChildren()
    friends.forEach((friend, index) => {
      const card = document.createElement('a')
      card.className = 'friend-card'
      card.href = safeUrl(friend.url)
      card.target = '_blank'
      card.rel = 'noopener noreferrer'
      const number = document.createElement('span')
      number.className = 'friend-no'
      number.textContent = `LINK ${String(index + 1).padStart(3, '0')}`
      const avatar = document.createElement('span')
      avatar.className = 'friend-avatar-wrap'
      const imageUrl = validAvatar(friend.avatar)
      const appendIcon = () => {
        const icon = document.createElement('i')
        icon.className = `fa-solid ${(friend.icon || 'fa-star').split(' ').filter(part => /^[a-z0-9-]+$/i.test(part)).join(' ')}`
        icon.setAttribute('aria-hidden', 'true')
        avatar.replaceChildren(icon)
      }
      if (imageUrl) {
        const image = document.createElement('img')
        image.className = 'friend-avatar'
        image.src = imageUrl
        image.alt = `${friend.name} 的头像`
        image.loading = 'lazy'
        image.onerror = appendIcon
        avatar.appendChild(image)
      } else appendIcon()
      const name = document.createElement('strong')
      name.textContent = friend.name
      const intro = document.createElement('small')
      intro.textContent = friend.intro
      const arrow = document.createElement('i')
      arrow.className = 'fa-solid fa-arrow-up-right-from-square friend-arrow'
      card.append(number, avatar, name, intro, arrow)
      grid.appendChild(card)
    })
  }
  const drawFriendEditor = () => {
    const list = document.getElementById('friend-editor-list')
    list.replaceChildren()
    friends.forEach((friend, index) => {
      const row = document.createElement('section')
      row.className = 'friend-editor-row'
      row.dataset.index = String(index)
      row.innerHTML = `<div class="friend-editor-top"><span>LINK ${String(index + 1).padStart(3, '0')}</span><button type="button" class="friend-remove" aria-label="删除友链 ${index + 1}">移除此友链 ×</button></div><div class="friend-editor-fields"><label class="edit-field"><span>友链名称</span><input data-friend="name" value=""></label><label class="edit-field"><span>友链网址</span><input data-friend="url" value="" placeholder="https://"></label><label class="edit-field friend-editor-wide"><span>一句简介</span><textarea data-friend="intro" rows="2"></textarea></label><label class="edit-field"><span>头像图片网址（可选）</span><input data-friend="avatar" value="" placeholder="https://... 或上传本地图片"></label><label class="edit-field"><span>上传头像</span><input data-friend-file type="file" accept="image/png,image/jpeg,image/webp"></label></div>`
      row.querySelector('[data-friend="name"]').value = friend.name || ''
      row.querySelector('[data-friend="url"]').value = friend.url || ''
      row.querySelector('[data-friend="intro"]').value = friend.intro || ''
      row.querySelector('[data-friend="avatar"]').value = /^https?:/i.test(friend.avatar || '') ? friend.avatar : ''
      row.dataset.avatarData = /^data:image\//i.test(friend.avatar || '') ? friend.avatar : ''
      row.querySelector('.friend-remove').addEventListener('click', () => { friends.splice(index, 1); drawFriendEditor() })
      row.querySelector('[data-friend-file]').addEventListener('change', async event => {
        const file = event.target.files?.[0]
        if (!file) return
        try {
          row.dataset.avatarData = await resizeAvatar(file)
          row.querySelector('[data-friend="avatar"]').value = ''
          event.target.previousElementSibling.textContent = '头像已载入，将随友链一起保存'
        } catch (_) { alert('头像读取失败，请换一张 PNG、JPG 或 WebP 图片。') }
      })
      list.appendChild(row)
    })
  }
  const resizeAvatar = file => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      const image = new Image()
      image.onerror = reject
      image.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = 240
        canvas.height = 240
        const size = Math.min(image.naturalWidth, image.naturalHeight)
        const x = (image.naturalWidth - size) / 2
        const y = (image.naturalHeight - size) / 2
        canvas.getContext('2d').drawImage(image, x, y, size, size, 0, 0, 240, 240)
        resolve(canvas.toDataURL('image/webp', .78))
      }
      image.src = reader.result
    }
    reader.readAsDataURL(file)
  })
  const addBusuanzi = () => {
    if (document.querySelector('script[src*="busuanzi.ibruce.info"]')) return
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    document.body.appendChild(script)
  }
  const persistConfig = () => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(config)); return true }
    catch (_) { alert('保存失败：浏览器存储空间不足，请换一张小于 2 MB 的图片后重试。'); return false }
  }
  const fields = document.getElementById('edit-fields')
  editFields.forEach(([key, label]) => {
    const wrapper = document.createElement('label')
    wrapper.className = 'edit-field'
    const caption = document.createElement('span')
    caption.textContent = label
    const input = document.createElement(key.endsWith('Url') ? 'input' : (['title', 'artStamp', 'intro', 'aboutText', 'projectLead', 'tombText', 'examText', 'labText', 'articleText', 'friendLead', 'secretHint', 'secretText'].includes(key) ? 'textarea' : 'input'))
    input.dataset.edit = key
    input.value = config[key] || ''
    wrapper.append(caption, input)
    fields.appendChild(wrapper)
  })
  applyConfig()
  renderFriends()
  drawFriendEditor()
  if (!hasLocalFriends) fetch('/data/friends.json', { cache: 'no-store' }).then(response => response.ok ? response.json() : null).then(remote => {
    if (!Array.isArray(remote) || localStorage.getItem(FRIENDS_KEY) !== null) return
    friends = remote
    renderFriends()
    if (!friendDialog.open) drawFriendEditor()
  }).catch(() => {})
  document.getElementById('year').textContent = new Date().getFullYear()

  addBusuanzi()
  const statsPoll = setInterval(() => {
    const uv = document.getElementById('busuanzi_value_site_uv')?.textContent.trim()
    const pv = document.getElementById('busuanzi_value_site_pv')?.textContent.trim()
    if (uv && pv && uv !== '统计中' && pv !== '统计中') clearInterval(statsPoll)
  }, 500)
  setTimeout(() => {
    clearInterval(statsPoll)
    ;['busuanzi_value_site_uv', 'busuanzi_value_site_pv'].forEach(id => {
      const counter = document.getElementById(id)
      if (counter?.textContent.trim() === '统计中') counter.textContent = '暂不可用'
    })
  }, 12000)
  const renderHomeArticles = articles => {
    const published = articles.filter(article => article && article.status === 'published' && typeof article.id === 'string' && typeof article.title === 'string').sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')))
    const latest = published[0]
    if (!latest) return
    const readUrl = article => `/archives/?read=${encodeURIComponent(article.id)}`
    const featuredUrl = readUrl(latest)
    document.getElementById('featured-article-title').textContent = latest.title
    document.getElementById('featured-article-summary').textContent = latest.summary || latest.title
    document.getElementById('featured-article-date').textContent = `${latest.category || '随笔'} · ${latest.date || ''}`
    document.getElementById('featured-article-link').href = featuredUrl
    document.getElementById('featured-article-read').href = featuredUrl
    const cover = document.getElementById('featured-article-cover')
    if (typeof latest.cover === 'string' && /^(https?:\/\/|\/)/i.test(latest.cover)) cover.src = latest.cover
    const recent = document.getElementById('recent-articles')
    recent.replaceChildren()
    published.slice(0, 4).forEach(article => {
      const link = document.createElement('a')
      link.className = 'recent-item'
      link.href = readUrl(article)
      const image = document.createElement('img')
      image.src = typeof article.cover === 'string' && /^(https?:\/\/|\/)/i.test(article.cover) ? article.cover : '/img/essay-workstation.jpg'
      image.alt = `${article.title} 封面`
      const copy = document.createElement('span')
      copy.className = 'recent-copy'
      const meta = document.createElement('small')
      meta.textContent = `${article.category || '随笔'} · ${article.date || ''}`
      const title = document.createElement('strong')
      title.textContent = article.title
      const summary = document.createElement('span')
      summary.textContent = article.summary || ''
      const arrow = document.createElement('i')
      arrow.className = 'fa-solid fa-chevron-right'
      copy.append(meta, title, summary)
      link.append(image, copy, arrow)
      recent.appendChild(link)
    })
  }
  const refreshHomeArticles = async () => {
    let published = []
    try {
      const response = await fetch('/data/articles.json', { cache: 'no-store' })
      if (response.ok) published = await response.json()
    } catch (_) { /* offline fallback to local published work */ }
    try {
      const local = JSON.parse(localStorage.getItem('krrb-archive-v1') || '[]')
      const merged = new Map(published.filter(post => post?.id).map(post => [post.id, post]))
      local.filter(post => post?.id && post.status === 'published').forEach(post => merged.set(post.id, post))
      renderHomeArticles([...merged.values()])
    } catch (_) { renderHomeArticles(published) }
  }
  refreshHomeArticles()

  const editDialog = document.getElementById('edit-dialog')
  document.getElementById('edit-open').addEventListener('click', () => editDialog.showModal())
  document.getElementById('save-config').addEventListener('click', event => {
    event.preventDefault()
    fields.querySelectorAll('[data-edit]').forEach(input => { config[input.dataset.edit] = input.value.trim() })
    const invalidUrl = editFields.find(([key]) => key.endsWith('Url') && !isValidUrl(config[key] || ''))
    if (invalidUrl) { alert(`“${invalidUrl[1]}”请填写 http:// 或 https:// 开头的网址。`); return }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(config.siteSince)) { alert('建站日期请使用 YYYY-MM-DD 格式。'); return }
    if (persistConfig()) { applyConfig(); editDialog.close() }
  })
  document.getElementById('reset-config').addEventListener('click', () => {
    config = { ...defaults }
    fields.querySelectorAll('[data-edit]').forEach(input => { input.value = config[input.dataset.edit] || '' })
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(`${STORAGE_KEY}-image`)
    localStorage.removeItem(`${STORAGE_KEY}-image-slide`)
    slides.forEach(slide => {
      slide.src = slide.dataset.originalSrc
      slide.dataset.creditName = slide.dataset.originalCreditName
    })
    showSlide(0)
    applyConfig()
  })
  document.getElementById('export-config').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'krrb-home-config.json'
    link.click()
    URL.revokeObjectURL(link.href)
  })
  const friendDialog = document.getElementById('friend-manager-dialog')
  document.getElementById('friend-manage-open').addEventListener('click', () => { drawFriendEditor(); friendDialog.showModal() })
  document.getElementById('friend-add').addEventListener('click', () => {
    friends.push({ name: '', intro: '', url: '', avatar: '', icon: 'fa-star' })
    drawFriendEditor()
    document.querySelector('.friend-editor-row:last-child [data-friend="name"]').focus()
  })
  const readFriendEditor = () => [...document.querySelectorAll('.friend-editor-row')].map(row => ({
      name: row.querySelector('[data-friend="name"]').value.trim(),
      url: row.querySelector('[data-friend="url"]').value.trim(),
      intro: row.querySelector('[data-friend="intro"]').value.trim(),
      avatar: validAvatar(row.querySelector('[data-friend="avatar"]').value.trim()) || row.dataset.avatarData || '',
      icon: friends[Number(row.dataset.index)]?.icon || 'fa-star'
    }))
  document.getElementById('friend-save').addEventListener('click', () => {
    const next = readFriendEditor()
    const invalid = next.find(friend => !friend.name || !friend.intro || !isValidUrl(friend.url))
    if (invalid) { alert('请为每条友链填写名称、简介以及 http:// 或 https:// 开头的网址。'); return }
    try {
      localStorage.setItem(FRIENDS_KEY, JSON.stringify(next))
      friends = next
      renderFriends()
      friendDialog.close()
    } catch (_) { alert('友链保存失败，图片数据超过浏览器存储容量，请改用较小的头像。') }
  })
  document.getElementById('friend-export').addEventListener('click', () => {
    const draft = readFriendEditor()
    const blob = new Blob([JSON.stringify(draft.length ? draft : friends, null, 2)], { type: 'application/json' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'friends.json'
    link.click()
    URL.revokeObjectURL(link.href)
  })
  document.getElementById('friend-import').addEventListener('change', async event => {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      const imported = JSON.parse(await file.text())
      if (!Array.isArray(imported) || imported.some(friend => !friend || typeof friend.name !== 'string' || typeof friend.url !== 'string')) throw new Error('invalid format')
      friends = imported
      drawFriendEditor()
    } catch (_) { alert('无法读取该文件，请选择此前导出的友链 JSON。') }
    event.target.value = ''
  })
  document.getElementById('hero-upload').addEventListener('change', event => {
    const file = event.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) { alert('图片请控制在 2 MB 以内。'); event.target.value = ''; return }
    const reader = new FileReader()
    reader.onload = () => {
      const currentSlide = slides[activeSlide]
      currentSlide.src = reader.result
      currentSlide.dataset.creditName = '你上传的图片'
      showSlide(activeSlide)
      try {
        localStorage.setItem(`${STORAGE_KEY}-image`, reader.result)
        localStorage.setItem(`${STORAGE_KEY}-image-slide`, String(activeSlide))
      } catch (_) { alert('图片太大，浏览器无法保存；请尝试压缩到 1 MB 以内。') }
    }
    reader.readAsDataURL(file)
  })
  const savedImage = localStorage.getItem(`${STORAGE_KEY}-image`)
  const savedImageSlide = Number(localStorage.getItem(`${STORAGE_KEY}-image-slide`) || 0)
  const slides = [...document.querySelectorAll('.hero-slide')]
  slides.forEach(slide => {
    slide.dataset.originalSrc = slide.getAttribute('src')
    slide.dataset.originalCreditName = slide.dataset.creditName
  })
  if (savedImage && slides[savedImageSlide]) {
    slides[savedImageSlide].src = savedImage
    slides[savedImageSlide].dataset.creditName = '你上传的图片'
  }
  const slideDots = [...document.querySelectorAll('.slide-dot')]
  const slideCaption = document.querySelector('.hero-slide-caption')
  let activeSlide = savedImage && slides[savedImageSlide] ? savedImageSlide : 0
  const showSlide = index => {
    activeSlide = (index + slides.length) % slides.length
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === activeSlide))
    slideDots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === activeSlide)
      dot.setAttribute('aria-selected', String(i === activeSlide))
    })
    document.querySelector('.slide-count').textContent = `${String(activeSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`
    slideCaption.querySelector('[data-copy]').dataset.copy = `slide${activeSlide + 1}Title`
    slideCaption.querySelector('[data-copy]').textContent = config[`slide${activeSlide + 1}Title`]
    const credit = slideCaption.querySelector('.slide-credit')
    credit.textContent = slides[activeSlide].dataset.creditName || (activeSlide === 0 ? '主页原始插画' : '原创 AI 氛围插画')
  }
  document.getElementById('slide-prev').addEventListener('click', () => showSlide(activeSlide - 1))
  document.getElementById('slide-next').addEventListener('click', () => showSlide(activeSlide + 1))
  slideDots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)))
  const heroControls = document.querySelector('.hero-controls')
  let slideTimer = setInterval(() => showSlide(activeSlide + 1), 6500)
  const stopSlideshow = () => { clearInterval(slideTimer); slideTimer = null }
  const startSlideshow = () => {
    if (!slideTimer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) slideTimer = setInterval(() => showSlide(activeSlide + 1), 6500)
  }
  heroControls.addEventListener('mouseenter', stopSlideshow)
  heroControls.addEventListener('mouseleave', startSlideshow)
  heroControls.addEventListener('focusin', stopSlideshow)
  heroControls.addEventListener('focusout', startSlideshow)
  document.addEventListener('visibilitychange', () => document.hidden ? stopSlideshow() : startSlideshow())
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) stopSlideshow()
  showSlide(activeSlide)

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const theme = document.documentElement.dataset.homeTheme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.homeTheme = theme
    document.documentElement.dataset.theme = theme
    localStorage.setItem(`${STORAGE_KEY}-theme`, theme)
    document.querySelector('#theme-toggle i').className = `fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`
  })
  const theme = document.documentElement.dataset.homeTheme
  document.querySelector('#theme-toggle i').className = `fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`

  const stars = [...document.querySelectorAll('.star')]
  const status = document.querySelector('.star-status')
  let lit = 0
  stars.forEach((star, index) => star.addEventListener('click', () => {
    if (index !== lit) { status.textContent = config.starOrderHint; return }
    star.classList.add('lit')
    lit += 1
    status.textContent = `${lit} / 3`
    if (lit === 3) {
      setTimeout(() => document.getElementById('letter-dialog').showModal(), 350)
      status.textContent = config.starReadyText
    }
  }))
  document.getElementById('letter-close').addEventListener('click', () => document.getElementById('letter-dialog').close())
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close()
  }))

  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target) }
  }), { threshold: 0.12 })
  document.querySelectorAll('.section, .secret-section').forEach(section => { section.classList.add('reveal'); revealObserver.observe(section) })

  // A lightweight, decorative signal field: pointer-reactive, density capped, and
  // completely disabled for reduced-motion users or hidden tabs.
  const signalCanvas = document.getElementById('signal-canvas')
  const signalContext = signalCanvas.getContext('2d', { alpha: true })
  const signalNodes = []
  const signalPointer = { x: -1000, y: -1000 }
  let signalFrame = 0
  let signalWidth = 0
  let signalHeight = 0
  const signalMotionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const resizeSignal = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
    signalWidth = window.innerWidth
    signalHeight = window.innerHeight
    signalCanvas.width = Math.round(signalWidth * ratio)
    signalCanvas.height = Math.round(signalHeight * ratio)
    signalCanvas.style.width = `${signalWidth}px`
    signalCanvas.style.height = `${signalHeight}px`
    signalContext.setTransform(ratio, 0, 0, ratio, 0, 0)
    signalNodes.length = 0
    const count = Math.min(54, Math.max(24, Math.floor(signalWidth * signalHeight / 26000)))
    for (let i = 0; i < count; i++) signalNodes.push({ x: Math.random() * signalWidth, y: Math.random() * signalHeight, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, phase: Math.random() * 6 })
  }
  const drawSignal = time => {
    signalFrame = 0
    if (document.hidden || !signalMotionOK) return
    signalContext.clearRect(0, 0, signalWidth, signalHeight)
    for (let i = 0; i < signalNodes.length; i++) {
      const node = signalNodes[i]
      node.x += node.vx; node.y += node.vy
      if (node.x < -8 || node.x > signalWidth + 8) node.vx *= -1
      if (node.y < -8 || node.y > signalHeight + 8) node.vy *= -1
      const dx = node.x - signalPointer.x; const dy = node.y - signalPointer.y
      const distanceToPointer = Math.hypot(dx, dy)
      if (distanceToPointer < 115 && distanceToPointer > 0) { node.x += dx / distanceToPointer * .22; node.y += dy / distanceToPointer * .22 }
      signalContext.fillStyle = `rgba(255, ${70 + Math.round(22 * Math.sin(time / 1300 + node.phase))}, 105, .48)`
      signalContext.beginPath(); signalContext.arc(node.x, node.y, 1.1, 0, Math.PI * 2); signalContext.fill()
      for (let j = i + 1; j < signalNodes.length; j++) {
        const other = signalNodes[j]
        const distance = Math.hypot(node.x - other.x, node.y - other.y)
        if (distance < 105) {
          signalContext.strokeStyle = `rgba(242, 115, 145, ${(1 - distance / 105) * .105})`
          signalContext.lineWidth = .65; signalContext.beginPath(); signalContext.moveTo(node.x, node.y); signalContext.lineTo(other.x, other.y); signalContext.stroke()
        }
      }
    }
    signalFrame = requestAnimationFrame(drawSignal)
  }
  if (signalMotionOK && signalContext) {
    resizeSignal()
    signalFrame = requestAnimationFrame(drawSignal)
    window.addEventListener('resize', resizeSignal, { passive: true })
    document.addEventListener('pointermove', event => { signalPointer.x = event.clientX; signalPointer.y = event.clientY }, { passive: true })
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && signalFrame) { cancelAnimationFrame(signalFrame); signalFrame = 0 }
      else if (!document.hidden && !signalFrame) signalFrame = requestAnimationFrame(drawSignal)
    })
  }

  // Reading progress is intentionally a hairline, not a blocking widget.
  const readingSignal = document.querySelector('.reading-signal > span')
  let progressFrame = 0
  const updateReadingSignal = () => {
    progressFrame = 0
    const range = document.documentElement.scrollHeight - window.innerHeight
    readingSignal.style.transform = `scaleX(${range > 0 ? Math.min(1, window.scrollY / range) : 0})`
  }
  window.addEventListener('scroll', () => { if (!progressFrame) progressFrame = requestAnimationFrame(updateReadingSignal) }, { passive: true })
  updateReadingSignal()

  // Keyboard-discoverable, deliberately simulated terminal: commands can only
  // reveal page sections or open the user's existing links; no shell/eval/network.
  const terminal = document.getElementById('terminal-dialog')
  const terminalInput = document.getElementById('terminal-input')
  const terminalLog = document.getElementById('terminal-log')
  const terminalForm = document.getElementById('terminal-form')
  const terminalClose = () => terminal.close()
  document.getElementById('terminal-open').addEventListener('click', () => { terminal.showModal(); setTimeout(() => terminalInput.focus(), 30) })
  const terminalCommands = {
    help: 'help · about · projects · friends · archive · secret · clear · exit',
    whoami: 'krrb@digital-garden — collector of stories, builder of small universes.',
    ls: 'about/  projects/  friends/  archives/  secret.signal',
    about: () => { document.querySelector('#about').scrollIntoView({ behavior: signalMotionOK ? 'smooth' : 'auto' }); return '正在连接个人档案…' },
    projects: () => { document.querySelector('#projects').scrollIntoView({ behavior: signalMotionOK ? 'smooth' : 'auto' }); return '正在连接项目星图…' },
    friends: () => { document.querySelector('#friends').scrollIntoView({ behavior: signalMotionOK ? 'smooth' : 'auto' }); return '正在连接同频站点…' },
    archive: () => { location.href = '/archives/'; return '传送至文章档案…' },
    secret: () => { document.querySelector('#secret').scrollIntoView({ behavior: signalMotionOK ? 'smooth' : 'auto' }); return '信号坐标已标记：页面底部的三颗星。' },
    clear: () => { terminalLog.replaceChildren(); return '' },
    exit: () => { terminalClose(); return 'connection closed' }
  }
  document.getElementById('terminal-close').addEventListener('click', terminalClose)
  terminal.addEventListener('click', event => { if (event.target === terminal) terminalClose() })
  terminal.addEventListener('close', () => document.getElementById('terminal-open')?.focus())
  terminalForm.addEventListener('submit', event => {
    event.preventDefault()
    const command = terminalInput.value.trim().toLowerCase()
    if (!command) return
    const inputLine = document.createElement('p'); inputLine.className = 'terminal-command-line'; inputLine.textContent = `krrb@garden:~$ ${command}`; terminalLog.append(inputLine)
    const action = terminalCommands[command]
    const response = typeof action === 'function' ? action() : (action || `unknown command: ${command} · 输入 help 查看指令。`)
    if (response) { const output = document.createElement('p'); output.className = 'terminal-response'; output.textContent = response; terminalLog.append(output) }
    terminalInput.value = ''; terminalLog.scrollTop = terminalLog.scrollHeight
  })
  let secretTyping = ''
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && terminal.open) { terminalClose(); return }
    if (terminal.open || event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1 || /input|textarea|select/i.test(document.activeElement?.tagName || '')) return
    secretTyping = `${secretTyping}${event.key.toLowerCase()}`.slice(-6)
    if (secretTyping === 'garden') {
      if (!terminal.open) terminal.showModal()
      setTimeout(() => terminalInput.focus(), 30)
      secretTyping = ''
    }
  })

  const prompt = document.getElementById('cursor-prompt')
  const orbit = document.getElementById('cursor-orbit')
  let cursorFrame = 0
  let lastParticle = null
  let particleClock = 0
  const spawnSpark = (x, y, index) => {
    const particle = document.createElement('i')
    particle.className = `cursor-particle fa-solid ${index % 3 === 0 ? 'fa-sparkles' : 'fa-star'}`
    particle.setAttribute('aria-hidden', 'true')
    particle.style.left = `${x}px`
    particle.style.top = `${y}px`
    particle.style.setProperty('--particle-tilt', `${Math.round(Math.random() * 80 - 40)}deg`)
    particle.style.setProperty('--particle-size', `${12 + Math.round(Math.random() * 10)}px`)
    document.body.appendChild(particle)
    particle.addEventListener('animationend', () => particle.remove(), { once: true })
  }
  document.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (cursorFrame) cancelAnimationFrame(cursorFrame)
    cursorFrame = requestAnimationFrame(() => {
      prompt.style.transform = `translate(${event.clientX + 14}px, ${event.clientY + 12}px)`
      orbit.style.transform = `translate(${event.clientX - 17}px, ${event.clientY - 17}px)`
      prompt.classList.add('cursor-visible')
      orbit.classList.add('cursor-visible')
    })
    const now = performance.now()
    const point = { x: event.clientX, y: event.clientY }
    const distance = lastParticle ? Math.hypot(point.x - lastParticle.x, point.y - lastParticle.y) : 0
    if (lastParticle && distance > 5 && now - particleClock > 10) {
      const steps = Math.min(8, Math.max(1, Math.ceil(distance / 11)))
      for (let i = 1; i <= steps; i++) {
        const t = i / steps
        spawnSpark(lastParticle.x + (point.x - lastParticle.x) * t, lastParticle.y + (point.y - lastParticle.y) * t, i + Math.floor(now))
      }
      lastParticle = point
      particleClock = now
    } else if (!lastParticle) lastParticle = point
  })
  document.addEventListener('pointerleave', () => { prompt.classList.remove('cursor-visible'); orbit.classList.remove('cursor-visible') })
})()
