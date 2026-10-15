(() => {
  const STORAGE = 'krrb-archive-v1'
  const AUTOSAVE = 'krrb-archive-autosave-v1'
  const SITE_DATA = '/data/articles.json'
  const seed = []
  const escape = value => String(value || '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
  const formatDate = value => {
    const date = new Date(`${value}T00:00:00`)
    return Number.isNaN(date.valueOf()) ? value || '' : new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date)
  }
  const safeImage = value => /^(https?:\/\/|\/|data:image\/(png|jpeg|webp);base64,)/i.test(value || '') ? value : ''
  const sanitizeHtml = html => {
    const container = document.createElement('div')
    container.innerHTML = String(html || '')
    container.querySelectorAll('script,style,iframe,object,embed,form,meta,link').forEach(element => element.remove())
    container.querySelectorAll('*').forEach(element => {
      [...element.attributes].forEach(attribute => {
        const name = attribute.name.toLowerCase()
        const value = attribute.value.trim()
        if (name.startsWith('on') || name === 'srcdoc' || name === 'style' && /url\s*\(|expression\s*\(/i.test(value)) element.removeAttribute(attribute.name)
        if (name === 'href' && value && !/^(https?:\/\/|mailto:|\/|#)/i.test(value)) element.removeAttribute(attribute.name)
        if (name === 'src' && /^\s*javascript:/i.test(value)) element.removeAttribute(attribute.name)
      })
      if (element.tagName === 'IMG') {
        const src = safeImage(element.getAttribute('src'))
        if (!src) element.remove()
        else { element.src = src; element.loading = 'lazy'; element.alt ||= '文章插图' }
      }
      if (element.tagName === 'A') { element.target = '_blank'; element.rel = 'noopener noreferrer' }
    })
    return container.innerHTML
  }
  const defaultArticle = () => ({ id: `draft-${Date.now()}`, title: '', date: new Date().toISOString().slice(0, 10), updatedAt: new Date().toISOString(), category: '随笔', summary: '', cover: '', content: '<p><br></p>', status: 'draft', demo: false })
  const normalizeArticle = post => ({
    ...post,
    id: String(post.id),
    title: typeof post.title === 'string' ? post.title : '未命名文章',
    date: /^\d{4}-\d{2}-\d{2}$/.test(post.date || '') ? post.date : new Date().toISOString().slice(0, 10),
    updatedAt: typeof post.updatedAt === 'string' ? post.updatedAt : `${post.date || '2026-04-02'}T00:00:00.000Z`,
    category: typeof post.category === 'string' ? post.category : '随笔',
    summary: typeof post.summary === 'string' ? post.summary : '',
    cover: safeImage(post.cover),
    content: sanitizeHtml(post.content),
    status: post.status === 'draft' ? 'draft' : 'published',
    demo: post.demo === true
  })
  document.title = '文章归档与写作台 — 一如既往'
  document.body.className = 'archive-studio-page'
  document.body.innerHTML = `
    <div class="studio-shell">
      <header class="studio-topbar"><a class="studio-brand" href="/"><span class="studio-brand-mark">✿</span> 一如既往 <small>WRITE YOUR UNIVERSE</small></a><nav aria-label="主导航"><a href="/">主页</a><a class="is-current" href="/archives/">文章归档</a><a href="/#projects">项目</a><a href="/#friends">友链</a></nav><div class="studio-top-actions"><span class="studio-status"><i></i> 本地写作空间</span><a class="studio-avatar" href="/" aria-label="回到首页">K</a></div></header>
      <main class="studio-main"><div class="studio-heading"><div><p class="studio-kicker">FIELD NOTES · ARCHIVE</p><h1>文章归档</h1><p>把灵感收好，也让每一段文字都有自己的位置。</p></div><button id="new-article" class="studio-primary"><span>＋</span> 新建图文</button></div>
        <div class="studio-stats"><div><strong id="published-count">0</strong><span>篇已发布</span></div><div><strong id="draft-count">0</strong><span>篇草稿</span></div><div><strong id="site-since">2026.04.02</strong><span>建站日期</span></div><div><strong id="visitor-count">统计中</strong><span>访客</span></div><div><strong id="pageview-count">统计中</strong><span>访问量</span></div></div>
        <div class="studio-notice"><i>✦</i> 归档中的三篇是可编辑的示例文章。这里的写作与发布先保存在本浏览器；如需同步到 GitHub Pages 给所有访客，请使用“导出发布包”，并用导出的文件替换仓库中的 <code>data/articles.json</code> 后提交发布。</div>
        <div class="studio-workspace"><aside class="article-sidebar"><div class="article-sidebar-heading"><h2>我的文章</h2><button id="export-articles" title="导出所有已发布文章">导出发布包</button></div><label class="article-search"><span>⌕</span><input id="article-search" type="search" placeholder="搜索文章标题"></label><div class="article-filters" role="tablist"><button class="is-active" data-filter="all">全部</button><button data-filter="published">已发布</button><button data-filter="draft">草稿</button></div><div class="article-list" id="article-list"></div><div class="article-side-footer"><button id="import-articles">导入文章包</button><input id="article-import-file" type="file" accept="application/json" hidden><small>支持备份恢复，也可以导入发布包继续编辑</small></div></aside>
          <section class="editor-panel" aria-label="文章编辑器"><div class="editor-empty" id="editor-empty"><span>✧</span><h2>从一个想法开始</h2><p>新建图文，或从左侧选择一篇文章继续编辑。</p><button class="studio-primary" id="empty-new">开始写作</button></div><div class="editor-content" id="editor-content" hidden>
            <div class="editor-bar"><span id="editor-state">正在编辑</span><div><button id="preview-article">预览</button><button id="delete-article" class="editor-delete">删除文章</button></div></div>
            <label class="editor-title-label"><span>文章标题</span><input id="article-title" maxlength="100" placeholder="请输入一个好标题"></label>
            <div class="editor-meta"><label><span>分类</span><input id="article-category" maxlength="24" placeholder="例如：随笔"></label><label><span>发布日期</span><input id="article-date" type="date"></label></div>
            <label class="editor-summary-label"><span>摘要 · 用一两句话介绍这篇文章</span><textarea id="article-summary" rows="2" maxlength="180" placeholder="摘要会显示在归档卡片中"></textarea></label>
            <div class="cover-row"><div class="cover-preview" id="cover-preview"><span>封面预览</span></div><div><strong>文章封面</strong><p>建议横版图片，上传后仅保存在当前浏览器，导出发布包时一并打包。</p><label class="upload-cover" for="cover-file">选择封面<input type="file" id="cover-file" accept="image/png,image/jpeg,image/webp"></label><button type="button" id="cover-clear" class="link-button">移除封面</button><input id="cover-url" type="url" placeholder="或粘贴图片网址"></div></div>
            <div class="format-toolbar" role="toolbar" aria-label="正文排版工具"><button type="button" data-command="bold" title="加粗"><b>B</b></button><button type="button" data-block="h2" title="二级标题">H₂</button><button type="button" data-block="h3" title="三级标题">H₃</button><button type="button" data-block="blockquote" title="引用">❝</button><button type="button" data-command="insertUnorderedList" title="无序列表">☷</button><button type="button" data-command="insertOrderedList" title="有序列表">1.</button><button type="button" id="insert-link" title="插入链接">↗</button><label class="toolbar-upload" title="插入图片">▧<input type="file" id="body-image-file" accept="image/png,image/jpeg,image/webp"></label><span class="toolbar-hint">像公众号一样，边写边排版</span></div>
            <div class="editor-canvas" id="article-body" contenteditable="true" role="textbox" aria-label="文章正文" aria-multiline="true" data-placeholder="从这里开始写下你的故事…"></div>
            <div class="editor-footer"><span id="word-count">0 字 · 自动保存草稿</span><div><button id="save-draft" class="editor-secondary">保存草稿</button><button id="publish-article" class="studio-primary">发布到本机归档</button></div></div>
          </div></section>
        </div>
        <footer class="archive-footer"><a href="/">← 回到数字花园</a><span>访客 <b id="busuanzi_value_site_uv">统计中</b> · 访问量 <b id="busuanzi_value_site_pv">统计中</b></span><span>© <span id="footer-year"></span> KRRB · 写给另一个宇宙</span></footer>
      </main>
    </div>
    <dialog id="article-preview" class="article-preview-dialog"><button class="preview-close" id="preview-close" aria-label="关闭预览">×</button><article class="preview-paper"><img id="preview-cover" alt="文章封面"><p class="preview-meta" id="preview-meta"></p><h1 id="preview-title"></h1><p class="preview-summary" id="preview-summary"></p><div class="preview-body" id="preview-body"></div></article></dialog>`
  document.documentElement.dataset.homeTheme = localStorage.getItem('krrb-hacker-home-v1-theme') || 'dark'
  document.documentElement.dataset.theme = document.documentElement.dataset.homeTheme
  document.getElementById('footer-year').textContent = new Date().getFullYear()

  const addStats = () => {
    if (document.querySelector('script[src*="busuanzi.ibruce.info"]')) return
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    document.body.appendChild(script)
  }
  addStats()
  const countSyncTimer = setInterval(() => {
    const visitorCount = document.getElementById('busuanzi_value_site_uv')?.textContent.trim()
    const pageviewCount = document.getElementById('busuanzi_value_site_pv')?.textContent.trim()
    if (visitorCount && visitorCount !== '统计中') document.getElementById('visitor-count').textContent = visitorCount
    if (pageviewCount && pageviewCount !== '统计中') document.getElementById('pageview-count').textContent = pageviewCount
    if ((visitorCount && visitorCount !== '统计中') && (pageviewCount && pageviewCount !== '统计中')) clearInterval(countSyncTimer)
  }, 500)
  setTimeout(() => {
    clearInterval(countSyncTimer)
    ;['visitor-count', 'pageview-count'].forEach(id => {
      const value = document.getElementById(id)
      if (value.textContent === '统计中') value.textContent = '—'
    })
  }, 12000)

  const readStored = () => {
    try { return JSON.parse(localStorage.getItem(STORAGE) || 'null') } catch (_) { return null }
  }
  const saveStored = () => {
    try { localStorage.setItem(STORAGE, JSON.stringify(posts)); return true }
    catch (_) { setStatus('本地空间不足，请压缩图片或导出备份后重试'); return false }
  }
  let posts = []
  let currentId = ''
  let activeFilter = 'all'
  let autosaveTimer = 0
  let remotePosts = []
  const list = document.getElementById('article-list')
  const empty = document.getElementById('editor-empty')
  const editor = document.getElementById('editor-content')
  const titleInput = document.getElementById('article-title')
  const categoryInput = document.getElementById('article-category')
  const dateInput = document.getElementById('article-date')
  const summaryInput = document.getElementById('article-summary')
  const bodyInput = document.getElementById('article-body')
  const coverInput = document.getElementById('cover-url')
  const stateLabel = document.getElementById('editor-state')

  const setStatus = value => { stateLabel.textContent = value; clearTimeout(stateLabel._timer); stateLabel._timer = setTimeout(() => { stateLabel.textContent = '正在编辑' }, 2600) }
  const getArticle = status => ({
    ...(posts.find(post => post.id === currentId) || defaultArticle()),
    id: currentId || `post-${Date.now()}`,
    title: titleInput.value.trim(), category: categoryInput.value.trim() || '随笔', date: dateInput.value || new Date().toISOString().slice(0, 10),
    summary: summaryInput.value.trim(), cover: safeImage(coverInput.value.trim()) || document.getElementById('cover-preview').dataset.image || '',
    content: sanitizeHtml(bodyInput.innerHTML), status, demo: false, updatedAt: new Date().toISOString()
  })
  const persistAutosave = () => {
    if (!currentId || !editor.hidden) return
    clearTimeout(autosaveTimer)
    setStatus('正在保存草稿…')
    autosaveTimer = setTimeout(() => {
      try { localStorage.setItem(AUTOSAVE, JSON.stringify(getArticle('draft'))); setStatus('草稿已自动保存') }
      catch (_) { setStatus('自动保存失败，请先导出备份') }
    }, 650)
  }
  const renderCounts = () => {
    document.getElementById('published-count').textContent = posts.filter(post => post.status === 'published').length
    document.getElementById('draft-count').textContent = posts.filter(post => post.status === 'draft').length
  }
  const renderList = () => {
    const query = document.getElementById('article-search').value.trim().toLowerCase()
    const visible = posts.filter(post => (activeFilter === 'all' || post.status === activeFilter) && (!query || post.title.toLowerCase().includes(query) || (post.summary || '').toLowerCase().includes(query)))
    list.replaceChildren()
    if (!visible.length) {
      const hint = document.createElement('p')
      hint.className = 'article-list-empty'
      hint.textContent = '这里还没有文章，开始写下第一篇吧。'
      list.appendChild(hint)
      return
    }
    visible.forEach(post => {
      const card = document.createElement('article')
      card.className = `article-list-card${post.id === currentId ? ' is-selected' : ''}`
      card.tabIndex = 0
      card.dataset.articleId = post.id
      const cover = document.createElement('div')
      cover.className = 'article-list-cover'
      cover.style.backgroundImage = post.cover ? `url("${safeImage(post.cover).replaceAll('"', '%22')}")` : 'none'
      const detail = document.createElement('div')
      detail.className = 'article-list-detail'
      const label = document.createElement('small')
      label.textContent = `${post.status === 'draft' ? '草稿' : post.demo ? '示例' : post.category || '文章'} · ${formatDate(post.date)}`
      const heading = document.createElement('strong')
      heading.textContent = post.title || '未命名文章'
      const summary = document.createElement('span')
      summary.textContent = post.summary || '还没有摘要，打开编辑器添加一段介绍。'
      detail.append(label, heading, summary)
      card.append(cover, detail)
      card.addEventListener('click', () => openArticle(post.id))
      card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openArticle(post.id) } })
      list.appendChild(card)
    })
  }
  const updateWordCount = () => {
    const text = bodyInput.innerText.replace(/\s/g, '')
    document.getElementById('word-count').textContent = `${text.length} 字 · 自动保存草稿`
  }
  const updateCoverPreview = value => {
    const preview = document.getElementById('cover-preview')
    const source = safeImage(value)
    preview.dataset.image = source
    preview.style.backgroundImage = source ? `url("${source.replaceAll('"', '%22')}")` : 'none'
    preview.classList.toggle('has-image', Boolean(source))
  }
  const showEditor = () => { empty.hidden = true; editor.hidden = false }
  const openArticle = id => {
    currentId = id
    const post = posts.find(item => item.id === id)
    if (!post) return
    showEditor()
    titleInput.value = post.title || ''
    categoryInput.value = post.category || '随笔'
    dateInput.value = post.date || new Date().toISOString().slice(0, 10)
    summaryInput.value = post.summary || ''
    coverInput.value = /^https?:/i.test(post.cover || '') ? post.cover : ''
    updateCoverPreview(post.cover || '')
    bodyInput.innerHTML = sanitizeHtml(post.content || '<p><br></p>')
    document.getElementById('delete-article').hidden = false
    stateLabel.textContent = post.demo ? '示例文章 · 修改后可另存发布' : post.status === 'published' ? '已发布 · 可继续编辑' : '草稿 · 本地保存'
    updateWordCount()
    renderList()
    history.replaceState(null, '', `/archives/?article=${encodeURIComponent(id)}`)
  }
  const newArticle = () => {
    const article = defaultArticle()
    posts.unshift(article)
    currentId = article.id
    showEditor()
    titleInput.value = ''
    categoryInput.value = '随笔'
    dateInput.value = article.date
    summaryInput.value = ''
    coverInput.value = ''
    updateCoverPreview('')
    bodyInput.innerHTML = '<p><br></p>'
    document.getElementById('delete-article').hidden = false
    stateLabel.textContent = '新建草稿 · 输入内容会自动保存'
    saveStored()
    renderList()
    updateWordCount()
    history.replaceState(null, '', '/archives/')
    titleInput.focus()
  }
  const saveCurrent = status => {
    const article = getArticle(status)
    if (!article.title) { titleInput.focus(); setStatus('请先填写文章标题'); return }
    const index = posts.findIndex(post => post.id === article.id)
    if (index >= 0) posts[index] = article
    else posts.unshift(article)
    currentId = article.id
    if (!saveStored()) return
    try { localStorage.removeItem(AUTOSAVE) } catch (_) { /* optional autosave cleanup */ }
    document.getElementById('delete-article').hidden = false
    stateLabel.textContent = status === 'published' ? '已发布到本机归档' : '草稿已保存'
    renderList()
    renderCounts()
    history.replaceState(null, '', `/archives/?article=${encodeURIComponent(currentId)}`)
  }
  const compressImage = (file, maxWidth = 1280) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      const image = new Image()
      image.onerror = reject
      image.onload = () => {
        const ratio = Math.min(1, maxWidth / image.naturalWidth)
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(image.naturalWidth * ratio)
        canvas.height = Math.round(image.naturalHeight * ratio)
        canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL('image/jpeg', .78))
      }
      image.src = reader.result
    }
    reader.readAsDataURL(file)
  })

  document.getElementById('new-article').addEventListener('click', newArticle)
  document.getElementById('empty-new').addEventListener('click', newArticle)
  document.getElementById('article-search').addEventListener('input', renderList)
  document.querySelectorAll('.article-filters button').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter
    document.querySelectorAll('.article-filters button').forEach(item => item.classList.toggle('is-active', item === button))
    renderList()
  }))
  ;[titleInput, categoryInput, dateInput, summaryInput].forEach(input => input.addEventListener('input', persistAutosave))
  bodyInput.addEventListener('input', () => { updateWordCount(); persistAutosave() })
  coverInput.addEventListener('input', () => { updateCoverPreview(coverInput.value); persistAutosave() })
  document.querySelectorAll('.format-toolbar [data-command]').forEach(button => button.addEventListener('mousedown', event => event.preventDefault()))
  document.querySelectorAll('.format-toolbar [data-command]').forEach(button => button.addEventListener('click', () => { bodyInput.focus(); document.execCommand(button.dataset.command, false); updateWordCount(); persistAutosave() }))
  document.querySelectorAll('.format-toolbar [data-block]').forEach(button => button.addEventListener('mousedown', event => event.preventDefault()))
  document.querySelectorAll('.format-toolbar [data-block]').forEach(button => button.addEventListener('click', () => { bodyInput.focus(); document.execCommand('formatBlock', false, button.dataset.block); updateWordCount(); persistAutosave() }))
  document.getElementById('insert-link').addEventListener('mousedown', event => event.preventDefault())
  document.getElementById('insert-link').addEventListener('click', () => {
    const url = window.prompt('输入链接地址（https:// 开头）')
    if (!url || !/^https?:\/\//i.test(url)) return
    bodyInput.focus()
    document.execCommand('createLink', false, url)
    updateWordCount()
    persistAutosave()
  })
  document.getElementById('cover-file').addEventListener('change', async event => {
    const file = event.target.files?.[0]
    if (!file) return
    try { const data = await compressImage(file, 960); coverInput.value = ''; updateCoverPreview(data); persistAutosave() }
    catch (_) { alert('封面图片读取失败，请改用 PNG、JPG 或 WebP。') }
    event.target.value = ''
  })
  document.getElementById('cover-clear').addEventListener('click', () => { coverInput.value = ''; updateCoverPreview(''); persistAutosave() })
  document.getElementById('body-image-file').addEventListener('change', async event => {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      const data = await compressImage(file)
      bodyInput.focus()
      document.execCommand('insertHTML', false, `<figure><img src="${data}" alt="文章插图"></figure>`)
      updateWordCount()
      persistAutosave()
    } catch (_) { alert('正文图片插入失败，请重试或压缩图片。') }
    event.target.value = ''
  })
  document.getElementById('save-draft').addEventListener('click', () => saveCurrent('draft'))
  document.getElementById('publish-article').addEventListener('click', () => saveCurrent('published'))
  document.getElementById('delete-article').addEventListener('click', () => {
    if (!currentId || !window.confirm('确定移除这篇本地文章吗？已导出的发布包不会被修改。')) return
    posts = posts.filter(post => post.id !== currentId)
    saveStored()
    currentId = ''
    editor.hidden = true
    empty.hidden = false
    renderList()
    renderCounts()
    history.replaceState(null, '', '/archives/')
  })
  document.getElementById('preview-article').addEventListener('click', () => {
    const article = getArticle('draft')
    document.getElementById('preview-cover').src = article.cover
    document.getElementById('preview-cover').hidden = !article.cover
    document.getElementById('preview-meta').textContent = `${article.category} · ${formatDate(article.date)}`
    document.getElementById('preview-title').textContent = article.title || '未命名文章'
    document.getElementById('preview-summary').textContent = article.summary
    document.getElementById('preview-body').innerHTML = sanitizeHtml(article.content)
    document.getElementById('article-preview').showModal()
  })
  const previewDialog = document.getElementById('article-preview')
  document.getElementById('preview-close').addEventListener('click', () => previewDialog.close())
  previewDialog.addEventListener('click', event => { if (event.target === previewDialog) previewDialog.close() })
  document.getElementById('export-articles').addEventListener('click', () => {
    const publishable = posts.filter(post => post.status === 'published').map(post => ({ ...post, content: sanitizeHtml(post.content) }))
    const blob = new Blob([`${JSON.stringify(publishable, null, 2)}\n`], { type: 'application/json' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'articles.json'
    link.click()
    setTimeout(() => URL.revokeObjectURL(link.href), 1000)
  })
  const importInput = document.getElementById('article-import-file')
  document.getElementById('import-articles').addEventListener('click', () => importInput.click())
  importInput.addEventListener('change', async event => {
    const file = event.target.files?.[0]
    if (!file) return
    try {
      const imported = JSON.parse(await file.text())
      if (!Array.isArray(imported) || imported.some(item => !item || typeof item.title !== 'string' || !item.id || !['published', 'draft'].includes(item.status))) throw new Error('invalid archive')
      const combined = new Map(posts.map(post => [post.id, post]))
      imported.forEach(post => combined.set(String(post.id), normalizeArticle(post)))
      posts = [...combined.values()].sort((a, b) => b.date.localeCompare(a.date))
      saveStored()
      renderList()
      renderCounts()
      setStatus('文章包已导入，可继续编辑')
    } catch (_) { alert('文件格式不正确，请选择导出的 articles.json。') }
    event.target.value = ''
  })

  const load = async () => {
    try {
      const response = await fetch(SITE_DATA, { cache: 'no-store' })
      if (response.ok) {
        const payload = await response.json()
        if (Array.isArray(payload)) remotePosts = payload.filter(post => post && typeof post.id === 'string' && typeof post.title === 'string' && ['published', 'draft'].includes(post.status)).map(normalizeArticle)
      }
    } catch (_) { /* current local draft work remains available offline */ }
    const stored = readStored()
    posts = stored || remotePosts.length ? (stored || remotePosts) : seed
    try {
      const auto = JSON.parse(localStorage.getItem(AUTOSAVE) || 'null')
      if (auto) {
        const index = posts.findIndex(post => post.id === auto.id)
        if (index >= 0) posts[index] = auto
        else posts.unshift(auto)
      }
    } catch (_) { /* malformed autosaves are ignored */ }
    posts = posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    renderList()
    renderCounts()
    const siteSince = localStorage.getItem('krrb-hacker-home-v1')
    try { document.getElementById('site-since').textContent = (JSON.parse(siteSince || '{}').siteSince || '2026-04-02').replace(/-/g, '.') } catch (_) { /* use repo creation date */ }
    const id = new URLSearchParams(location.search).get('article')
    if (id && posts.some(post => post.id === id)) openArticle(id)
  }
  load()
})()
