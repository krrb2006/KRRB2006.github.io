(() => {
  const STORAGE_KEY = 'krrb-hacker-home-v1'
  const defaults = {
    siteName: '一如既往',
    navHome: '首页', navWriting: '文章', navProjects: '项目', navFriends: '友链', navAbout: '关于', statusTag: 'ONLINE',
    eyebrow: 'A GIRL · A KEYBOARD · A MORE INTERESTING UNIVERSE', artStamp: 'NO. 01\nGIRL IN THE SYSTEM',
    tickerOne: 'THINK DEEPER', tickerTwo: 'BUILD COOLER THINGS', tickerThree: 'LIVE A SOFTER LIFE',
    title: '你好，欢迎来到\n我的数字花园',
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
    writingIndex: '03 / FIELD NOTES', writingLabel: '最近的文字', writingDateTag: 'FIELD NOTE',
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
    secretCta: '打开那封信 ↗', secretUrl: 'https://github.com/krrb2006/cruel.github.io'
  }
  const editFields = [
    ['siteName', '网站名称'], ['navHome', '导航：主页'], ['navWriting', '导航：文章'], ['navProjects', '导航：项目'], ['navFriends', '导航：友链'], ['navAbout', '导航：关于'], ['statusTag', '状态文字'],
    ['eyebrow', '标题上方英文小字'], ['artStamp', '头图角标（换行用回车）'], ['title', '主页大标题（换行用回车）'], ['intro', '主页介绍'], ['signature', '个性签名'],
    ['tickerOne', '滚动标语 1'], ['tickerTwo', '滚动标语 2'], ['tickerThree', '滚动标语 3'],
    ['aboutIndex', '关于区编号'], ['aboutLabel', '关于区中文标签'], ['aboutTitle', '关于标题'], ['aboutText', '关于介绍'], ['terminalUser', '终端用户名'], ['terminalText', '终端简介'],
    ['projectIndex', '项目区编号'], ['projectLabel', '项目区中文标签'], ['projectHeading', '项目区标题'], ['projectLead', '项目区介绍'], ['projectKind', '项目类型标签'],
    ['tombTitle', '知识冢项目名称'], ['tombText', '知识冢项目介绍'], ['tombCta', '试玩按钮文字'], ['tombUrl', '知识冢试玩地址'], ['tombRepoCta', '源码按钮文字'], ['tombRepoUrl', '知识冢源码地址'],
    ['examTitle', '复习助手项目名称'], ['examText', '复习助手项目介绍'], ['examKind', '复习助手项目标签'], ['examCta', '复习助手链接文字'], ['examUrl', '复习助手链接地址'],
    ['labTitle', '安全实验项目名称'], ['labText', '安全实验项目介绍'], ['labKind', '安全实验项目标签'], ['labCta', '安全实验链接文字'], ['labUrl', '安全实验链接地址'],
    ['writingIndex', '文章区编号'], ['writingLabel', '文章区中文标签'], ['writingDateTag', '文章卡片小标签'], ['articleTitle', '文章标题'], ['articleText', '文章摘要'], ['articleDate', '文章日期/分类'], ['articleCta', '文章按钮文字'], ['archiveCta', '档案按钮文字'],
    ['friendsIndex', '友链区编号'], ['friendsLabel', '友链区中文标签'], ['friendHeading', '友链标题'], ['friendLead', '友链介绍'],
    ['friend1Name', '友链 1 名称'], ['friend1Text', '友链 1 介绍'], ['friend1Url', '友链 1 地址'],
    ['friend2Name', '友链 2 名称'], ['friend2Text', '友链 2 介绍'], ['friend2Url', '友链 2 地址'],
    ['friend3Name', '友链 3 名称'], ['friend3Text', '友链 3 介绍'], ['friend3Url', '友链 3 地址'],
    ['footerNote', '页脚文字'], ['footerCredit', '页脚英文署名'], ['secretLabel', '彩蛋标签'], ['letterStamp', '来信标签'], ['starOrderHint', '点星顺序提示'], ['starReadyText', '彩蛋解锁提示'], ['secretHint', '彩蛋提示'], ['secretTitle', '隐藏来信标题'], ['secretText', '隐藏来信内容'], ['secretCta', '隐藏来信链接文字'], ['secretUrl', '隐藏来信目标地址']
  ]
  let config = { ...defaults }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    config = { ...config, ...saved }
  } catch (_) { localStorage.removeItem(STORAGE_KEY) }

  document.title = `${config.siteName} — 数字花园`
  document.documentElement.dataset.homeTheme = localStorage.getItem(`${STORAGE_KEY}-theme`) || 'dark'
  document.documentElement.dataset.theme = document.documentElement.dataset.homeTheme
  document.body.innerHTML = `
    <header class="cyber-nav"><a class="brand" href="#top" data-copy="siteName"></a><span class="brand-mark"><i class="fa-solid fa-sparkles" aria-hidden="true"></i></span>
      <nav aria-label="主导航"><a href="#top" data-copy="navHome"></a><a href="#writing" data-copy="navWriting"></a><a href="#projects" data-copy="navProjects"></a><a href="#friends" data-copy="navFriends"></a><a href="#about" data-copy="navAbout"></a></nav>
      <div class="nav-actions"><span class="live-indicator"><i></i> <span data-copy="statusTag"></span></span><button class="icon-button" id="theme-toggle" aria-label="切换主题" title="切换主题"><i class="fa-solid fa-moon"></i></button><button class="icon-button" id="edit-open" aria-label="自定义主页" title="自定义主页"><i class="fa-solid fa-sliders"></i></button></div>
    </header>
    <main id="top">
      <section class="hero wrap">
        <div class="hero-art"><img src="/img/hacker-garden.jpg" alt="红色霓虹下的数字花园插画"><div class="art-stamp" data-copy="artStamp"></div></div>
        <div class="hero-copy"><p class="eyebrow" data-copy="eyebrow"></p><h1 data-copy="title"></h1><div class="red-rule"></div><p class="hero-intro" data-copy="intro"></p><div class="hero-bottom"><a class="button button-red" href="#writing"><span data-copy="navWriting"></span><i class="fa-solid fa-arrow-right"></i></a><span class="signature" data-copy="signature"></span></div></div>
        <div class="hero-index">INDEX NO. 001<br>STILL HERE<br><span>STILL PLANTING</span></div>
      </section>
      <div class="ticker" aria-label="滚动标语"><div><span data-copy="tickerOne"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerTwo"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerThree"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerOne"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerTwo"></span><i class="fa-solid fa-sparkles" aria-hidden="true"></i><span data-copy="tickerThree"></span></div></div>
      <section class="section wrap about-section" id="about"><div class="section-label"><span data-copy="aboutIndex"></span><span data-copy="aboutLabel"></span></div><div class="about-grid"><h2 data-copy="aboutTitle"></h2><div><p class="about-text" data-copy="aboutText"></p><div class="terminal-line"><span data-copy="terminalUser"></span>:~$ <span class="terminal-output" data-copy="terminalText"></span><i class="fa-solid fa-square terminal-cursor" aria-hidden="true"></i></div></div></div></section>
      <section class="section wrap" id="projects"><div class="section-label"><span data-copy="projectIndex"></span><span data-copy="projectLabel"></span></div><div class="section-heading"><h2 data-copy="projectHeading"></h2><p data-copy="projectLead"></p></div><article class="project-card"><div class="project-visual"><img src="/img/knowledge-tomb.jpg" alt="知识冢项目封面：红色灯光照亮的地下档案馆"></div><div class="project-detail"><span class="project-kicker"><i class="fa-solid fa-circle"></i> <span data-copy="projectKind"></span></span><h3 data-copy="tombTitle"></h3><p data-copy="tombText"></p><div class="project-links"><a class="button button-red" data-url="tombUrl" target="_blank" rel="noopener"><span data-copy="tombCta"></span><i class="fa-solid fa-arrow-up-right-from-square"></i></a><a class="text-link" data-url="tombRepoUrl" target="_blank" rel="noopener"><span data-copy="tombRepoCta"></span><i class="fa-brands fa-github"></i></a></div></div><span class="project-number">01</span></article><div class="project-mini-grid"><a class="project-mini" data-url="examUrl" target="_blank" rel="noopener"><span class="mini-icon"><i class="fa-solid fa-graduation-cap"></i></span><span class="mini-kind" data-copy="examKind"></span><strong data-copy="examTitle"></strong><p data-copy="examText"></p><span class="mini-link"><span data-copy="examCta"></span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a><a class="project-mini" data-url="labUrl" target="_blank" rel="noopener"><span class="mini-icon"><i class="fa-solid fa-shield-halved"></i></span><span class="mini-kind" data-copy="labKind"></span><strong data-copy="labTitle"></strong><p data-copy="labText"></p><span class="mini-link"><span data-copy="labCta"></span><i class="fa-solid fa-arrow-up-right-from-square"></i></span></a></div></section>
      <section class="section wrap writing-section" id="writing"><div class="section-label"><span data-copy="writingIndex"></span><span data-copy="writingLabel"></span></div><div class="writing-card"><div class="writing-date"><span data-copy="writingDateTag"></span><strong><i class="fa-solid fa-sparkles" aria-hidden="true"></i></strong><small data-copy="articleDate"></small></div><div class="writing-copy"><h2 data-copy="articleTitle"></h2><p data-copy="articleText"></p><a class="text-link" href="/archives/"><span data-copy="articleCta"></span><i class="fa-solid fa-arrow-right"></i></a></div><span class="writing-index">01—∞</span></div><a class="archive-link" href="/archives/"><span data-copy="archiveCta"></span><i class="fa-solid fa-arrow-up-right-from-square"></i></a></section>
      <section class="section wrap friends-section" id="friends"><div class="section-label"><span data-copy="friendsIndex"></span><span data-copy="friendsLabel"></span></div><div class="section-heading"><h2 data-copy="friendHeading"></h2><p data-copy="friendLead"></p></div><div class="friend-grid">
        <a class="friend-card" data-url="friend1Url" target="_blank" rel="noopener"><span class="friend-no">LINK 001</span><span class="friend-icon"><i class="fa-solid fa-satellite-dish"></i></span><strong data-copy="friend1Name"></strong><small data-copy="friend1Text"></small><i class="fa-solid fa-arrow-up-right-from-square friend-arrow"></i></a>
        <a class="friend-card" data-url="friend2Url" target="_blank" rel="noopener"><span class="friend-no">LINK 002</span><span class="friend-icon"><i class="fa-solid fa-meteor"></i></span><strong data-copy="friend2Name"></strong><small data-copy="friend2Text"></small><i class="fa-solid fa-arrow-up-right-from-square friend-arrow"></i></a>
        <a class="friend-card" data-url="friend3Url" target="_blank" rel="noopener"><span class="friend-no">LINK 003</span><span class="friend-icon"><i class="fa-solid fa-moon"></i></span><strong data-copy="friend3Name"></strong><small data-copy="friend3Text"></small><i class="fa-solid fa-arrow-up-right-from-square friend-arrow"></i></a>
      </div></section>
      <section class="secret-section wrap"><div class="secret-copy"><span class="section-label-inline" data-copy="secretLabel"></span><p data-copy="secretHint"></p></div><div class="star-lock" aria-label="点亮三颗星解锁隐藏来信"><button class="star" aria-label="点亮第一颗星"><i class="fa-solid fa-star"></i></button><button class="star" aria-label="点亮第二颗星"><i class="fa-solid fa-star"></i></button><button class="star" aria-label="点亮第三颗星"><i class="fa-solid fa-star"></i></button><span class="star-status">0 / 3</span></div></section>
    </main>
    <footer class="cyber-footer wrap"><a class="brand" href="#top" data-copy="siteName"></a><p data-copy="footerNote"></p><span>© <span id="year"></span> · <span data-copy="footerCredit"></span></span></footer>
    <button class="cursor-prompt" id="cursor-prompt" aria-hidden="true"><i class="fa-solid fa-sparkles"></i></button>
    <dialog class="edit-dialog" id="edit-dialog"><form method="dialog" class="edit-shell"><header class="edit-header"><div><span>PERSONAL CONTROL PANEL</span><h2>自定义你的数字花园</h2></div><button class="icon-button" value="cancel" aria-label="关闭"><i class="fa-solid fa-xmark"></i></button></header><p class="edit-notice">更改和图片保存在当前浏览器，只影响这台设备。若要让所有访客看到修改，请导出配置后同步更新仓库内容并发布。</p><div class="edit-fields" id="edit-fields"></div><div class="upload-field"><label for="hero-upload">更换主页背景图 <small>PNG / JPG / WebP，建议小于 2 MB，仅本浏览器保存</small></label><input id="hero-upload" type="file" accept="image/png,image/jpeg,image/webp"></div><footer class="edit-footer"><button type="button" class="button button-quiet" id="reset-config">恢复默认</button><span></span><button type="button" class="button button-quiet" id="export-config">导出配置</button><button type="submit" class="button button-red" id="save-config">保存修改</button></footer></form></dialog>
    <dialog class="letter-dialog" id="letter-dialog"><div class="letter-paper"><button class="icon-button letter-close" id="letter-close" aria-label="关闭"><i class="fa-solid fa-xmark"></i></button><span class="letter-stamp" data-copy="letterStamp"></span><h2 data-copy="secretTitle"></h2><p data-copy="secretText"></p><a class="button button-red secret-link" data-url="secretUrl" target="_blank" rel="noopener"><span data-copy="secretCta"></span></a></div></dialog>`
  document.body.classList.add('cyber-home')

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
    document.title = `${config.siteName} — 数字花园`
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
  document.getElementById('year').textContent = new Date().getFullYear()

  const editDialog = document.getElementById('edit-dialog')
  document.getElementById('edit-open').addEventListener('click', () => editDialog.showModal())
  document.getElementById('save-config').addEventListener('click', event => {
    event.preventDefault()
    fields.querySelectorAll('[data-edit]').forEach(input => { config[input.dataset.edit] = input.value.trim() })
    const invalidUrl = editFields.find(([key]) => key.endsWith('Url') && !isValidUrl(config[key] || ''))
    if (invalidUrl) { alert(`“${invalidUrl[1]}”请填写 http:// 或 https:// 开头的网址。`); return }
    if (persistConfig()) { applyConfig(); editDialog.close() }
  })
  document.getElementById('reset-config').addEventListener('click', () => {
    config = { ...defaults }
    fields.querySelectorAll('[data-edit]').forEach(input => { input.value = config[input.dataset.edit] || '' })
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(`${STORAGE_KEY}-image`)
    document.querySelector('.hero-art img').src = '/img/hacker-garden.jpg'
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
  document.getElementById('hero-upload').addEventListener('change', event => {
    const file = event.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) { alert('图片请控制在 2 MB 以内。'); event.target.value = ''; return }
    const reader = new FileReader()
    reader.onload = () => {
      document.querySelector('.hero-art img').src = reader.result
      try { localStorage.setItem(`${STORAGE_KEY}-image`, reader.result) } catch (_) { alert('图片太大，浏览器无法保存；请尝试压缩到 1 MB 以内。') }
    }
    reader.readAsDataURL(file)
  })
  const savedImage = localStorage.getItem(`${STORAGE_KEY}-image`)
  if (savedImage) document.querySelector('.hero-art img').src = savedImage

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

  const prompt = document.getElementById('cursor-prompt')
  let cursorFrame = 0
  document.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (cursorFrame) cancelAnimationFrame(cursorFrame)
    cursorFrame = requestAnimationFrame(() => {
      prompt.style.transform = `translate(${event.clientX + 14}px, ${event.clientY + 12}px)`
      prompt.classList.add('cursor-visible')
    })
  })
  document.addEventListener('pointerleave', () => prompt.classList.remove('cursor-visible'))
})()
