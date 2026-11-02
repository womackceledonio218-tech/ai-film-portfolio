const projects = [
  {id:'amber',title:'琥珀与翡翠',type:'AI ANIMATION · IN PROGRESS',image:'assets/amber-main.png',alt:'琥珀与翡翠的作品画面',idea:'项目资料整理中',role:'待补充',placeholder:true},
  {
    id:'bridge',title:'赵州桥',fullTitle:'拱月长虹 · 李春的构建艺术',
    type:'AI ANIMATION · COMPLETED',image:'assets/bridge/cover.webp',
    alt:'赵州桥动画成片中，工匠在脚手架间建设石拱桥',
    idea:'三维动画风格 · 古代匠人的造桥故事',
    role:'导演与镜头组接 · 角色与主视觉 · AI视频制作 · 剪辑配乐',
    lead:'以李春建造赵州桥为主线，用三维动画风格讲述古代匠人的造桥故事。通过角色、镜头与音乐的选择，让生成影像共同服务叙事。',
    leadTail:'共同服务叙事。',leadPhrases:['三维动画风格','古代匠人','角色','镜头','音乐'],status:'已完成 · 2026.04',
    award:{title:'国赛三等奖',event:'2026 中国大学生计算机设计大赛',category:'数媒动画赛道'},
    facts:[{label:'创作时间',value:'2026.04'},{label:'当前成片',value:'07:04'},{label:'影像形式',value:'AI三维风格动画'}],
    film:{src:'assets/bridge/zhaozhou-bridge.mp4',duration:'07:04',
      summary:'影片围绕李春的造桥经历展开，以水患、营造实践及人物交流串联故事，呈现匠人面对造桥难题时的思考与选择。',
      chapters:[{time:15,label:'渡河困境'},{time:160,label:'工匠与设计'},{time:340,label:'桥梁营造'}]},
    approach:'前期画风调整、不同分镜版本的冲突，以及有限的设计参考，让这个项目不断面临取舍。我的工作是把这些选择落实到人物、镜头与最终成片中。',
    process:[
      {image:'assets/bridge/visual-direction.webp',alt:'赵州桥项目中村落与水渠的视觉开发图',caption:'环境气氛 · 视觉开发素材',
        title:'画风重启后的视觉设计',capability:'视觉方向 / VISUAL DIRECTION',
        challenge:'原视觉方案未达到预期，角色、脚本和已生成片段都需要重新调整。',
        decision:'团队讨论后转向三维动画风格。我承担角色与主视觉设计，并按新的视觉方向推进视频生成与制作。'},
      {image:'assets/bridge/editing.webp',alt:'赵州桥成片中洪水冲击木桥的镜头',caption:'02:10 · 成片画面',
        title:'分镜冲突中的镜头取舍',capability:'叙事与组接 / EDITORIAL JUDGMENT',
        challenge:'不同版本的分镜在剧情编排上发生冲突，距离提交只剩一周。',
        decision:'我对零散片段进行取舍与剪辑，围绕故事的推进重新组织镜头关系，将生成素材整合为可观看的叙事。'},
      {image:'assets/bridge/visual-development.webp',alt:'赵州桥项目中李春伏案思考的视觉开发图',caption:'李春工作场景 · 视觉开发素材',
        title:'参考有限时的人物塑造',capability:'角色设计 / CHARACTER DEVELOPMENT',keepPhrases:['李春','阿柚','老石匠'],
        challenge:'项目可获取的人物、服饰与建筑参考有限，李春也缺少可直接采用的形象依据。',
        decision:'我负责李春、阿柚与老石匠的角色设计，以故事需要和全片风格为依据塑造人物。李春的形象属于艺术化创作。'},
      {image:'assets/bridge/sound-edit.webp',alt:'赵州桥成片中李春在蓝色梦境空间思考的画面',caption:'04:40 · 成片画面',
        title:'用配乐完成声画表达',capability:'剪辑与声音 / PICTURE & SOUND',
        challenge:'片段完成生成后，还需要通过剪辑与音乐建立段落节奏和情绪。',
        decision:'我参与后期剪辑与配乐筛选，结合画面内容选择音乐，使影像片段形成连续的观看体验。'}
    ],
    characters:[
      {name:'李春',image:'assets/bridge/lichun.webp',alt:'赵州桥动画中低头绘制图纸的李春',caption:'主角设计 · 成片画面'},
      {name:'阿柚',image:'assets/bridge/ayou.webp',alt:'赵州桥动画小女孩阿柚的角色视觉开发图',caption:'角色设计 · 视觉开发素材'},
      {name:'老石匠',image:'assets/bridge/old-craftsman.webp',alt:'赵州桥动画老石匠的角色视觉开发图',caption:'角色设计 · 视觉开发素材'}
    ],
    mine:'导演与镜头组接、李春／阿柚／老石匠的角色设计、主视觉设计、AI视频生成与制作、后期剪辑及配乐筛选。',
    team:'团队其他成员负责故事剧本创作、资料收集与物料制作。画风转向由团队讨论决定。',
    tools:'DeepSeek · 可灵 · Seedance 2.0',
    takeaway:'这个项目体现了我在方案调整与时间约束下，围绕叙事进行视觉选择、镜头取舍和声画整合的能力。'
  },
  {id:'journey',title:'定海',fullTitle:'西游灵器录 · 金箍棒的前世今生',type:'LIVE-ACTION STYLE · FANTASY',image:'assets/dinghai/cover.webp',alt:'定海项目中龙宫内的龙王与水族角色画面',idea:'真人风格奇幻微电影 · 孙悟空与金箍棒的故事',role:'约八分钟剧情片段制作 · 角色与场景设计 · 整体美术定调',lead:'以《西游记》为原型，讲述孙悟空与金箍棒的前世今生。我负责约八分钟剧情片段的制作、角色与场景设计，以及整体美术定调，重点处理传统角色的视觉辨识与复杂打斗中的空间关系。',leadPhrases:['孙悟空','金箍棒','约八分钟'],status:'团队作品已完成 · 制作周期两周',facts:[{label:'项目周期',value:'两周'},{label:'团队成片',value:'17:52'},{label:'个人制作范围',value:'约八分钟剧情片段'}],film:{src:'assets/dinghai/film.mp4',duration:'17:52',label:'团队成片',summary:'基于西游题材展开的真人风格奇幻微电影，围绕孙悟空与金箍棒的故事展开。此处展示团队完整成片；本人负责约八分钟剧情片段、角色与场景设计、整体美术定调，其他成员负责剩余部分视频生成及剪辑。个人镜头的精确时间码待进一步整理。',chapters:[{time:0,label:'从头观看团队成片'},{time:180,label:'03:00 画面定位'},{time:900,label:'15:00 画面定位'}]},approach:'从剧本中的角色文化特征和场景关系出发，先确定视觉方向，再思考人物走位、镜头编排与段落衔接。复杂打斗不仅需要动作画面，也需要让人物在空间中的位置有依据。',process:[
    {image:'assets/dinghai/characters.webp',alt:'项目保留的孙悟空与少年龙王角色设计图',caption:'项目角色设计素材 · 并列展示，非迭代前后对比',title:'让传统角色具有明确辨识',capability:'角色设计与文化判断',challenge:'生成模型容易把猴子做成猩猩，或使龙王的角偏离中国龙的形象，削弱角色的文化辨识度。',decision:'我在角色设计中将猴子的形态与中国龙的角部特征作为重点约束，结合剧本考虑造型和整体画风，使角色设计围绕中国传统形象展开。'},
    {image:'assets/dinghai/scene.webp',alt:'定海项目中蓝色龙宫的场景视觉设计',caption:'项目场景设计素材',title:'从剧本建立统一的美术方向',capability:'美术定调与场景设计',challenge:'故事跨越不同空间，单个场景的视觉效果需要与角色造型及相邻段落共同成立。',decision:'接到剧本后，我承担整体美术定调与角色、场景设计，并结合不同场景的衔接进行考虑，让视觉选择服务于人物和剧情。'},
    {image:'assets/dinghai/blocking.webp',alt:'团队成片15分钟处的孙悟空与多名角色同框画面',caption:'15:00 · 团队成片抽帧，用于说明多人空间关系；非原始调度图',title:'生成之前先梳理走位与站位',capability:'场面调度与空间意识',challenge:'复杂打斗中，多人物的站位与行动方向容易出现偏移，影响动作的合理性和空间连续性。',decision:'我先画出大致调度图，对人物走位进行预演，再思考打斗如何编排，以及多人应该站在哪里，以此组织自己负责片段的镜头。'},
    {image:'assets/dinghai/atmosphere.webp',alt:'定海项目中洞窟与水帘入口的场景画面',caption:'项目场景素材 · 原始调度草图尚未录入',title:'围绕负责段落组织剧情衔接',capability:'段落组织与团队协作',challenge:'团队分段制作时，个人片段需要在剧情和场景变化上与整片连接，而不只是独立的生成镜头。',decision:'我负责约八分钟剧情片段的编排与制作，在自己的制作范围内考虑剧情衔接、场景转换和角色位置；其他成员完成剩余视频生成与剪辑。'}
  ],mine:'约八分钟剧情片段的制作与段落编排、角色与场景设计、整体美术定调；在负责段落中考虑人物走位预演与打斗镜头组织。',team:'其他成员负责剩余部分的视频生成以及剪辑。此处展示的是团队成片，不将全片剪辑与全部视频生成计入个人贡献。',tools:'Seedance 2.0 · 可灵 · GPT Image 2',takeaway:'把传统角色的文化特征、场景美术与人物走位转化为生成前的设计约束，在团队制作中承担明确的视觉与段落职责。'}
  ,{id:'rotoscope',title:'真人转绘',fullTitle:'真人竖屏短剧的三维动画风格试片',type:'STYLE TRANSFER · COMMERCIAL PILOT',image:'assets/rotoscope/cover.webp',alt:'真人转绘试片中的两位女性角色与情绪表演',idea:'三天独立完成 · 面向海外的竖屏短剧商业试片',role:'需求理解 · 转绘流程探索 · 镜头修复 · 成片整合',lead:'将真人竖屏短剧转为三维卡通风格。面对表情失真、人物信息缺失和正反打生成困难，我按镜头特点组合直接转绘、参考帧再生成与特写替换，在三天内独立完成试片。',status:'商业试片已完成 · 独立制作',facts:[{label:'制作周期',value:'3天'},{label:'交付片长',value:'01:02'},{label:'呈现规格',value:'9:16 竖屏试片'}],film:{src:'assets/rotoscope/film.mp4',duration:'01:02',portrait:true,summary:'真人短剧情节的三维卡通风格转绘试片，展示人物对话、情绪表演与镜头组接。原真人视频为项目转绘输入，非本人实拍。',chapters:[{time:0,label:'从头观看'},{time:20,label:'人物情绪片段'},{time:40,label:'对话与组接片段'}]},approach:'先拆解甲方对画风和成片的要求，再判断每个镜头适合怎样的制作路径。对生成难以稳定完成的镜头，调整呈现方式，优先保证情绪表达与观看连贯性。',process:[
    {image:'assets/rotoscope/direction.webp',alt:'项目保留的女性角色多角度设计素材',caption:'项目角色素材 · 用于呈现画风方向，非前后对比',title:'把客户要求转为制作路径',capability:'需求理解与独立执行',challenge:'甲方要求将真人短剧转为三维卡通画风，缺少可直接照搬的制作流程。',decision:'我独立理解需求、检索资料并探索制作方法，按镜头的表演复杂度拆分处理路径，完成从方法选择到成片的制作。'},
    {image:'assets/rotoscope/emotion.webp',alt:'成片20秒与40秒处的人物情绪镜头',caption:'成片抽帧 · 00:20 / 00:40，非转绘前后对比',title:'按表演难度组合转绘方法',capability:'流程判断与情绪表达',challenge:'直接视频转绘容易让哭泣、愤怒等丰富表情变得僵硬。',decision:'对表情相对平缓的镜头使用可灵直接转绘；对情绪较强的镜头，先抽取画面做风格转换，再以转换后的参考帧和表情提示词生成视频。'},
    {image:'assets/rotoscope/coverage.webp',alt:'成片10秒与30秒处的对话镜头',caption:'成片抽帧 · 00:10 / 00:30',title:'为失败镜头寻找可交付替代',capability:'镜头语言与问题解决',challenge:'实拍素材中人物信息不完整，AI对正反打和空间关系的理解也不稳定。',decision:'我尝试使用3D导演台辅助组织镜头；效果仍不理想时，补充特写并替换难以生成的镜头，以调整镜头方案继续推进交付。'},
    {image:'assets/rotoscope/detail.webp',alt:'项目保留的手部与道具特写素材',caption:'项目过程素材 · 特写与局部画面，未标记为对应镜头的修复对照',title:'在时间限制下完成成片整合',capability:'交付意识与素材取舍',challenge:'试片需要在三天内完成，不能持续消耗时间在同一种失败的生成方式上。',decision:'我根据镜头效果切换制作方法、筛选可用素材并完成成片整合。最终提供约一分钟的竖屏商业试片，展示从需求到画面交付的完整执行能力。'}
  ],mine:'独立承担甲方需求理解、制作方法探索、真人素材的风格转绘、复杂表情再生成、镜头替换与成片整合。',teamTail:'剧本',team:'本次试片由我独立制作。真人原片作为转绘输入；不将原片的剧本、演员表演与实拍工作计入个人贡献。',tools:'可灵 · 参考帧风格转换 · 3D导演台（具体产品待补）',takeaway:'以镜头结果为判断依据选择方法，在生成限制与三天交付周期之间作出取舍，独立推进从需求到成片的制作。'}
];

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const scene = new PortfolioScene(document.querySelector('#kinetic-scene'));
const main = document.querySelector('.app-main');
const intro = document.querySelector('.intro-screen');
const motionButton = document.querySelector('.motion-toggle');
const views = { home: document.querySelector('#view-home'), works: document.querySelector('#view-works'), project: document.querySelector('#view-project') };
let introActive = true;
let activeView = 'home';
let activeProject = '';
let motionChoice = null;
try {
  const saved = sessionStorage.getItem('portfolio.motion');
  if (saved === 'on' || saved === 'off') motionChoice = saved;
} catch {}
let motionEnabled = !reducedMotion.matches;
let transition = null;
let introTimeline = null;
let transitionVersion = 0;
let scrollEffects = [];
const revealed = new Set();

const wrap = (value, count) => ((value % count) + count) % count;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const ORBIT_POSITION_PER_SECOND = .4;

// Repeat the project sequence around the ring while keeping one indicator per project.
document.querySelector('.orbit-ring').innerHTML = [...projects, ...projects].map((project, slot) =>
  '<a class="orbit-card" data-slot="' + slot + '" href="#project/' + project.id + '"' + (slot ? ' tabindex="-1"' : '') + '><img src="' + project.image + '" alt="' + project.alt + '" width="1600" height="900" draggable="false"><span class="card-caption"><span>' + project.title + '</span><span>进入项目 ↗</span></span></a>'
).join('');
const projectIndicators = document.querySelector('.progress-dots');
projectIndicators.setAttribute('aria-label', '项目选择');
projectIndicators.innerHTML = projects.map((project, index) => '<button type="button" aria-label="' + project.title + '"' + (index === 0 ? ' aria-current="true"' : '') + '></button>').join('');

class OrbitGallery {
  constructor(stage) {
    this.stage = stage;
    this.cards = [...stage.querySelectorAll('.orbit-card')];
    this.dots = [...document.querySelectorAll('.progress-dots button')];
    this.state = { position: 0 };
    this.active = false;
    this.running = motionEnabled;
    this.hover = false;
    this.focused = false;
    this.drag = null;
    this.tween = null;
    this.slot = -1;
    this.width = 1000;
    this.height = 400;
    this.lastInteraction = performance.now();
    this.suppressClickUntil = 0;
    this.autoEnabled = true;
    this.autoResumeRequested = false;
    this.autoButton = document.querySelector('.orbit-auto');
    this.wheelTimer = 0;
    this.render = this.render.bind(this);
    new ResizeObserver(() => this.resize()).observe(stage);
    document.querySelector('.previous').addEventListener('click', () => this.step(-1));
    document.querySelector('.next').addEventListener('click', () => this.step(1));
    this.autoButton.addEventListener('click', () => {
      this.autoEnabled = !this.autoEnabled;
      this.autoResumeRequested = this.autoEnabled;
      this.lastInteraction = performance.now();
      this.updateAutoButton();
    });
    this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.selectProject(index)));
    const readingArea = stage;
    readingArea.addEventListener('pointerenter', event => {
      if (event.pointerType !== 'touch') this.hover = true;
      this.autoResumeRequested = false;
    });
    readingArea.addEventListener('pointerleave', () => {
      this.hover = false;
      this.lastInteraction = performance.now();
      stage.style.setProperty('--ring-x', '0deg');
      stage.style.setProperty('--ring-y', '0deg');
    });
    readingArea.addEventListener('focusin', event => {
      this.focused = event.target.matches('a,button,[tabindex="0"]');
      if (!event.target.closest('.orbit-auto')) this.autoResumeRequested = false;
    });
    readingArea.addEventListener('focusout', event => {
      this.focused = readingArea.contains(event.relatedTarget) && event.relatedTarget.matches('a,button,[tabindex="0"]');
      this.lastInteraction = performance.now();
    });
    stage.addEventListener('pointerdown', event => this.startDrag(event));
    stage.addEventListener('pointermove', event => this.moveDrag(event));
    stage.addEventListener('pointerup', event => this.endDrag(event));
    stage.addEventListener('pointercancel', event => this.endDrag(event, true));
    stage.addEventListener('dragstart', event => event.preventDefault());
    stage.addEventListener('wheel', event => this.wheel(event), { passive: false });
    stage.addEventListener('click', event => {
      const card = event.target.closest('.orbit-card');
      if (!card) return;
      if (performance.now() < this.suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      } else if (card.dataset.front !== 'true') {
        event.preventDefault();
        event.stopPropagation();
        const index = Number(card.dataset.slot);
        this.pauseAuto();
        const current = this.state.position;
        this.moveTo(current + this.nearestOffset(index, current));
      }
    });
    gsap.ticker.add((time, deltaTime) => {
      if (this.active && this.running && this.autoEnabled && !document.hidden && (this.autoResumeRequested || !this.hover && !this.focused) && !this.drag && !this.tween?.isActive()) {
        this.state.position = wrap(this.state.position + Math.min(deltaTime / 1000, .05) * ORBIT_POSITION_PER_SECOND, this.cards.length);
        this.render();
      }
    });
    this.render();
  }

  nearestOffset(index, position) {
    let offset = index - position;
    offset -= Math.round(offset / this.cards.length) * this.cards.length;
    return offset;
  }

  resize() {
    const rect = this.stage.getBoundingClientRect();
    if (!rect.width) return;
    this.width = rect.width;
    this.height = rect.height;
    this.render();
  }

  render() {
    const front = wrap(Math.round(this.state.position), this.cards.length);
    for (let index = 0; index < this.cards.length; index++) {
      const offset = this.nearestOffset(index, this.state.position);
      const angle = offset * Math.PI * 2 / this.cards.length;
      const depth = (Math.cos(angle) + 1) / 2;
      const x = Math.sin(angle) * this.width * (this.width < 700 ? .58 : .39);
      const y = Math.cos(angle) * this.height * .14 - this.height * .06;
      const z = (Math.cos(angle) - 1) * (this.width < 700 ? 170 : 270);
      const card = this.cards[index];
      card.style.transform = 'translate(-50%,-50%) translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,' + z.toFixed(2) + 'px) rotateY(' + (-Math.sin(angle) * 34).toFixed(2) + 'deg) rotateZ(' + (Math.sin(angle) * 3).toFixed(2) + 'deg) scale(' + (.53 + depth * .47).toFixed(4) + ')';
      card.style.opacity = String(.15 + depth * .85);
      card.style.zIndex = String(Math.round(depth * 100) + 1);
      card.querySelector('img').style.filter = 'brightness(' + (.24 + depth * .76).toFixed(3) + ')';
      card.dataset.front = String(index === front);
      card.tabIndex = index === front ? 0 : -1;
      card.setAttribute('aria-label', index === front ? '进入' + projects[index % projects.length].title + '项目详情' : '旋转至' + projects[index % projects.length].title);
    }
    if (this.slot !== front) this.updateInfo(front);
  }

  updateInfo(slot) {
    this.slot = slot;
    const index = slot % projects.length;
    const project = projects[index];
    document.querySelector('#work-title').textContent = project.title;
    document.querySelector('#work-type').textContent = '0' + (index + 1) + ' / ' + project.type;
    document.querySelector('#work-idea').textContent = project.idea;
    document.querySelector('#work-role').innerHTML = roleParts(project.role);
    document.querySelector('#work-count').textContent = '0' + (index + 1) + ' / ' + String(projects.length).padStart(2, '0');
    this.dots.forEach((dot, i) => {
      if (i === index) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    document.querySelector('#carousel-status').textContent = '当前作品：' + project.title;
    if (this.active && motionEnabled) {
      gsap.fromTo('#work-title, #work-type, #work-idea, #work-role', { opacity: .25, y: 6 }, { opacity: 1, y: 0, duration: .3, stagger: .025, overwrite: true });
    }
  }

  moveTo(position, immediate = false) {
    clearTimeout(this.wheelTimer);
    this.lastInteraction = performance.now();
    this.tween?.kill();
    this.tween = gsap.to(this.state, { position, duration: immediate || !motionEnabled ? 0 : .76, ease: 'power3.out', overwrite: true, onUpdate: this.render, onComplete: () => { this.lastInteraction = performance.now(); } });
  }

  step(direction) {
    this.pauseAuto();
    this.moveTo(Math.round(this.state.position) + direction);
  }

  selectProject(index) {
    this.pauseAuto();
    const candidates = this.cards.map((_, i) => i).filter(i => i % projects.length === index);
    const offset = candidates.map(i => this.nearestOffset(i, this.state.position)).sort((a, b) => Math.abs(a) - Math.abs(b))[0];
    this.moveTo(this.state.position + offset);
  }

  startDrag(event) {
    if (event.button !== 0 || event.target.closest('button')) return;
    this.lastInteraction = performance.now();
    this.drag = { startX: event.clientX, startY: event.clientY, position: this.state.position, lastX: event.clientX, lastTime: performance.now(), velocity: 0, accepted: false, pointerId: event.pointerId };
  }

  moveDrag(event) {
    if (this.drag) {
      const drag = this.drag;
      const dx = event.clientX - drag.startX, dy = event.clientY - drag.startY;
      if (!drag.accepted) {
        if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) { this.drag = null; return; }
        if (Math.abs(dx) < 6 || Math.abs(dx) < Math.abs(dy)) return;
        drag.accepted = true;
        this.pauseAuto();
        this.tween?.kill();
        this.stage.setPointerCapture(event.pointerId);
        this.stage.classList.add('is-dragging');
      }
      event.preventDefault();
      const now = performance.now();
      const gap = this.width * (this.width < 700 ? .5 : .25);
      const elapsed = Math.max(8, now - drag.lastTime);
      drag.velocity = -(event.clientX - drag.lastX) / elapsed * 1000 / gap;
      this.state.position = drag.position - dx / gap;
      drag.lastX = event.clientX;
      drag.lastTime = now;
      this.render();
    } else if (motionEnabled && finePointer.matches && event.pointerType !== 'touch') {
      const rect = this.stage.getBoundingClientRect();
      this.stage.style.setProperty('--ring-x', ((.5 - (event.clientY - rect.top) / rect.height) * 2).toFixed(2) + 'deg');
      this.stage.style.setProperty('--ring-y', (((event.clientX - rect.left) / rect.width - .5) * 2).toFixed(2) + 'deg');
    }
  }

  endDrag(event, cancelled = false) {
    if (!this.drag) return;
    const drag = this.drag;
    this.drag = null;
    this.stage.classList.remove('is-dragging');
    if (!drag.accepted) return;
    if (this.stage.hasPointerCapture(event.pointerId)) this.stage.releasePointerCapture(event.pointerId);
    this.suppressClickUntil = performance.now() + 300;
    const velocity = performance.now() - drag.lastTime < 140 && !cancelled ? drag.velocity : 0;
    const projected = this.state.position + (motionEnabled ? clamp(velocity * .18, -1, 1) : 0);
    this.moveTo(Math.round(projected));
  }

  wheel(event) {
    if (event.ctrlKey || event.metaKey || !this.active) return;
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    if (!horizontal && document.documentElement.scrollHeight > innerHeight + 2) return;
    const delta = (Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY) * (event.deltaMode === 1 ? 16 : 1);
    if (Math.abs(delta) < 1) return;
    event.preventDefault();
    this.pauseAuto();
    this.tween?.kill();
    this.lastInteraction = performance.now();
    this.state.position += clamp(delta / 180, -.8, .8);
    this.render();
    clearTimeout(this.wheelTimer);
    this.wheelTimer = setTimeout(() => this.moveTo(Math.round(this.state.position)), 140);
  }

  setActive(value) {
    this.active = value;
    this.lastInteraction = performance.now();
    if (!value) {
      this.tween?.kill();
      clearTimeout(this.wheelTimer);
      this.drag = null;
      this.state.position = Math.round(this.state.position);
    } else this.resize();
  }

  setRunning(value) {
    this.running = value;
    this.lastInteraction = performance.now();
    if (!value) this.moveTo(Math.round(this.state.position), true);
    this.updateAutoButton();
  }

  pauseAuto() {
    this.autoEnabled = false;
    this.autoResumeRequested = false;
    this.updateAutoButton();
  }

  updateAutoButton() {
    this.autoButton.setAttribute('aria-pressed', String(this.autoEnabled && this.running));
    this.autoButton.textContent = this.autoEnabled && this.running ? '自动环绕 开' : '自动环绕 关';
    this.autoButton.disabled = !this.running;
    this.autoButton.title = this.running ? '阅读时暂停，手动选择后保持当前作品' : '请先开启全局动效';
  }
}

const gallery = new OrbitGallery(document.querySelector('.orbit'));

function readRoute() {
  const hash = location.hash.slice(1);
  const parts = hash.split('/');
  if (parts[0] === 'project') {
    const project = projects.find(item => item.id === parts[1]) || projects[0];
    return { view: 'project', id: project.id, section: parts[2] || '' };
  }
  if (hash === 'works') return { view: 'works' };
  return { view: 'home', section: hash === 'about' || hash === 'contact' ? hash : '' };
}

function updateNav(route) {
  const name = route.view === 'project' ? 'works' : route.section || route.view;
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === name) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function roleParts(role) {
  return role.split(' · ').map(part => '<span class="keep-phrase">' + part + '</span>').join(' · ');
}

function keepPhrases(text, phrases = []) {
  return phrases.reduce((copy, phrase) => copy.replaceAll(phrase, '<span class="keep-phrase">' + phrase + '</span>'), text);
}

function renderFilm(project) {
  if (!project.film) return '<div class="film-placeholder"><img src="' + project.image + '" alt="' + project.alt + '" width="1672" height="941" loading="lazy"><span>影片片段整理中</span></div>';
  const film = project.film;
  const poster = film.portrait ? 'assets/rotoscope/film-0.webp' : project.image;
  const chapters = film.chapters.map(chapter => {
    const stamp = String(Math.floor(chapter.time / 60)).padStart(2, '0') + ':' + String(chapter.time % 60).padStart(2, '0');
    return '<button type="button" data-film-time="' + chapter.time + '" data-film-label="' + chapter.label + '"><span class="mono">' + stamp + '</span><span>' + chapter.label + '</span><span aria-hidden="true">↗</span></button>';
  }).join('');
  return '<figure class="film-player' + (film.portrait ? ' film-player-portrait' : '') + '"><video controls playsinline preload="none" poster="' + poster + '" width="1280" height="720" aria-label="《' + project.title + '》完整成片" aria-describedby="film-summary"><source src="' + film.src + '" type="video/mp4">浏览器无法播放，请使用下方链接打开影片。</video><figcaption><span>' + (film.label || '完整成片') + ' · ' + film.duration + ' · 原声</span><a href="' + film.src + '" target="_blank" rel="noopener">单独打开影片 ↗</a></figcaption></figure><div class="film-chapters" role="group" aria-label="按叙事段落观看">' + chapters + '</div><p class="sr-only" id="film-status" role="status"></p><details class="film-summary"><summary>影片内容摘要</summary><p id="film-summary">' + film.summary + '</p></details>';
}

function setupFilm() {
  const video = document.querySelector('#project-root video');
  if (!video) return;
  const status = document.querySelector('#film-status');
  video.addEventListener('error', () => { status.textContent = '影片暂时无法加载，可尝试单独打开影片。'; });
  let request = 0;
  document.querySelectorAll('[data-film-time]').forEach(button => {
    button.addEventListener('click', () => {
      const currentRequest = ++request;
      const playChapter = () => {
        if (!video.isConnected || video.closest('.view').inert || currentRequest !== request) return;
        video.currentTime = Number(button.dataset.filmTime);
        video.play().then(() => {
          if (!video.isConnected || video.closest('.view').inert || activeView !== 'project') { video.pause(); return; }
          status.textContent = '正在播放：' + button.dataset.filmLabel;
        }).catch(() => { status.textContent = '已定位到' + button.dataset.filmLabel + '，请点击播放器继续观看。'; });
      };
      if (video.readyState >= 1) playChapter();
      else {
        video.addEventListener('loadedmetadata', playChapter, { once:true });
        if (video.preload === 'none') { video.preload = 'metadata'; video.load(); }
      }
    });
  });
}

function renderProject(id) {
  const project = projects.find(item => item.id === id) || projects[0];
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  if (project.placeholder) {
    document.querySelector('#project-root').innerHTML = '<section class="project-hero" id="overview"><div><a class="project-kicker" href="#works">← 返回作品 / PROJECT 0' + (index + 1) + '</a><h1 tabindex="-1">' + project.title + '</h1><p class="project-small">项目资料整理中</p></div><div class="project-cover"><img src="' + project.image + '" alt="' + project.alt + '" width="1600" height="900"></div></section><a class="next-project" href="#project/' + next.id + '"><span><small>下一个项目 / NEXT FILM</small>' + next.title + '</span><span aria-hidden="true">↗</span></a>';
    document.title = project.title + ' · 李谢怡';
    activeProject = project.id;
    return;
  }
  const sectionLink = section => '#project/' + project.id + '/' + section;
  const lead = keepPhrases(project.lead, [project.leadTail, ...(project.leadPhrases || [])]);
  const team = keepPhrases(project.team, project.teamTail ? [project.teamTail] : []);
  const process = project.process.map((item, i) => '<article class="process-item"><figure><img src="' + item.image + '" alt="' + (item.alt || project.title + '创作过程画面 ' + (i + 1)) + '" width="1600" height="900" loading="lazy">' + (item.caption ? '<figcaption>' + item.caption + '</figcaption>' : '') + '</figure><h3>0' + (i + 1) + ' / ' + item.title + '</h3>' + (item.challenge ? '<p><strong>问题</strong>' + keepPhrases(item.challenge, item.keepPhrases) + '</p><p><strong>我的处理</strong>' + keepPhrases(item.decision, item.keepPhrases) + '</p><span class="process-capability">' + item.capability + '</span>' : '<p>' + item.text + '</p>') + '</article>').join('');
  const award = project.award ? '<p class="project-award"><span class="award-mark" aria-hidden="true"></span><span><strong>' + project.award.title + '</strong><small>' + project.award.event + '<br>' + project.award.category + '</small></span></p>' : '';
  const facts = project.facts ? '<dl class="project-facts">' + project.facts.map(fact => '<div><dt>' + fact.label + '</dt><dd>' + fact.value + '</dd></div>').join('') + '</dl>' : '';
  const characters = project.characters ? '<div class="character-study"><h3>角色视觉开发</h3><p>我负责李春、阿柚与老石匠的角色设计。以下展示成片画面与项目保留的视觉开发素材。</p><div class="character-grid">' + project.characters.map(character => '<figure><img src="' + character.image + '" alt="' + character.alt + '" width="1600" height="900" loading="lazy"><figcaption><strong>' + character.name + '</strong><span>' + character.caption + '</span></figcaption></figure>').join('') + '</div></div>' : '';
  document.querySelector('#project-root').innerHTML = [
    '<section class="project-hero" id="overview"><div><a class="project-kicker" href="#works">← 返回作品 / PROJECT 0' + (index + 1) + '</a><h1 tabindex="-1">' + project.title + '</h1>' + (project.fullTitle ? '<p class="project-subtitle">' + project.fullTitle + '</p>' : '') + '<p class="project-lead">' + lead + '</p>' + award + '<p class="project-small">' + (project.award ? '' : project.status + '<br>') + '我的职责 / ' + roleParts(project.role) + '</p></div><div class="project-cover"><img src="' + project.image + '" alt="' + project.alt + '" width="1600" height="900" fetchpriority="high"></div>' + facts + '</section>',
    '<nav class="project-tabs" aria-label="项目内容导航"><a href="' + sectionLink('overview') + '">概览 / OVERVIEW</a><a href="' + sectionLink('film') + '">片段 / FILM</a><a href="' + sectionLink('approach') + '">思路 / APPROACH</a><a href="' + sectionLink('credits') + '">职责 / ROLE</a></nav>',
    '<section class="project-section" id="film"><div class="section-heading"><span class="eyebrow">01 / FILM</span><div><h2>' + (project.film ? ('观看' + (project.film.label || '成片')) : '影像片段') + '</h2><p>' + project.idea + '</p></div></div>' + renderFilm(project) + '</section>',
    '<section class="project-section" id="approach"><div class="section-heading"><span class="eyebrow">02 / APPROACH</span><div><h2>创作思路与过程</h2><p>' + (project.approach || project.idea) + '</p></div></div><div class="process-grid">' + process + '</div>' + characters + '</section>',
    '<section class="project-section" id="credits"><div class="section-heading"><span class="eyebrow">03 / ROLE</span><div><h2>职责与合作</h2>' + (project.takeaway ? '<p>' + project.takeaway + '</p>' : '') + '</div></div><div class="facts"><div><span class="fact-label">个人工作 / MY CONTRIBUTION</span><p>' + project.mine + '</p></div><div><span class="fact-label">合作与来源 / TEAM</span><p>' + team + '</p></div></div>' + (project.tools ? '<p class="project-tools">制作工具 / ' + project.tools + '</p>' : '') + '</section>',
    '<a class="next-project" href="#project/' + next.id + '"><span><small>下一个项目 / NEXT FILM</small>' + next.title + '</span><span aria-hidden="true">↗</span></a>'
  ].join('');
  document.title = project.title + ' · 李谢怡';
  activeProject = project.id;
  setupFilm();
  setProjectTab('overview');
}

function clearScrollEffects() {
  scrollEffects.forEach(effect => effect.kill());
  scrollEffects = [];
  gsap.killTweensOf(scene.story);
  scene.story.progress = 0;
  gsap.set('.home-info h2,.home-info p,.home-info .text-link,.project-section .section-heading,.process-item', { clearProps: 'opacity,visibility,transform' });
}

function setupScrollEffects() {
  clearScrollEffects();
  if (activeView === 'project' && !introActive) {
    document.querySelectorAll('#project-root section[id]').forEach(section => {
      scrollEffects.push(ScrollTrigger.create({ trigger: section, start: 'top 35%', end: 'bottom 35%', onToggle: self => {
        if (self.isActive) setProjectTab(section.id);
      } }));
    });
  }
  if (!motionEnabled || introActive) { ScrollTrigger.refresh(); return; }
  if (activeView === 'home') {
    const timeline = gsap.to(scene.story, { progress: 1, duration: 1, ease: 'none', paused: true, onUpdate: () => { scene.dirty = true; } });
    scrollEffects.push(ScrollTrigger.create({ trigger: '.home-hero', start: 'top top', end: 'bottom top', animation: timeline, scrub: .5 }));
    document.querySelectorAll('.home-info').forEach(section => {
      if (revealed.has(section.id)) return;
      const elements = section.querySelectorAll('h2,p:not(.eyebrow),.text-link');
      gsap.set(elements, { autoAlpha: 0, y: 16 });
      scrollEffects.push(ScrollTrigger.create({ trigger: section, start: 'top 88%', once: true, onEnter: () => {
        revealed.add(section.id);
        gsap.to(elements, { autoAlpha: 1, y: 0, duration: .55, stagger: .06, ease: 'power3.out', clearProps: 'transform' });
      } }));
    });
  } else if (activeView === 'project') {
    document.querySelectorAll('.project-section').forEach(section => {
      const elements = section.querySelectorAll('.section-heading,.process-item');
      gsap.set(elements, { autoAlpha: 0, y: 16 });
      scrollEffects.push(ScrollTrigger.create({ trigger: section, start: 'top 86%', once: true, onEnter: () => gsap.to(elements, { autoAlpha: 1, y: 0, duration: .5, stagger: .06, ease: 'power3.out', clearProps: 'transform' }) }));
    });
  }
  ScrollTrigger.refresh();
}

function setProjectTab(section) {
  document.querySelectorAll('.project-tabs a').forEach(link => {
    if (link.hash.endsWith('/' + section)) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

function scrollToSection(section) {
  if (!section) return;
  const target = document.getElementById(section);
  target?.scrollIntoView({ behavior: motionEnabled ? 'smooth' : 'instant', block: 'start' });
  if (activeView === 'project') setProjectTab(section);
}

function showRoute(route, immediate = false) {
  introTimeline?.kill();
  const wasIntro = introActive;
  if (introActive) {
    introActive = false;
    intro.hidden = true;
    intro.inert = true;
    document.body.classList.remove('is-intro');
    main.inert = false;
  }
  if (!intro.hidden) {
    intro.hidden = true;
    gsap.set(intro, { autoAlpha: 0 });
  }
  updateNav(route);
  if (!wasIntro && activeView === route.view && (route.view !== 'project' || activeProject === route.id) && !immediate && !transition?.isActive()) {
    if (route.section) scrollToSection(route.section);
    else window.scrollTo({ top: 0, behavior: motionEnabled ? 'smooth' : 'instant' });
    return;
  }
  const version = ++transitionVersion;
  document.querySelectorAll('#project-root video').forEach(video => video.pause());
  transition?.kill();
  gsap.set('.identity-frame,.identity-frame>*:not(.corner)', { clearProps: 'opacity,visibility,transform' });
  gsap.set('.signal-link', { clearProps: 'opacity,visibility' });
  clearScrollEffects();
  const outgoing = views[activeView];
  outgoing.inert = true;
  gallery.setActive(false);
  const apply = () => {
    if (version !== transitionVersion) return;
    Object.values(views).forEach(view => { view.hidden = true; view.inert = true; gsap.set(view, { clearProps: 'opacity,visibility,transform' }); });
    activeView = route.view;
    if (route.view === 'project') renderProject(route.id);
    else document.title = route.view === 'works' ? '作品 · 李谢怡' : '李谢怡 · AI 影像创作者';
    const incoming = views[activeView];
    incoming.hidden = false;
    incoming.inert = false;
    document.body.dataset.view = activeView;
    window.scrollTo({ top: 0, behavior: 'instant' });
    scene.setMode(activeView, immediate || !motionEnabled ? 0 : .6);
    gallery.setActive(activeView === 'works');
    setupScrollEffects();
    const finish = () => {
      if (version !== transitionVersion) return;
      gsap.set(incoming, { clearProps: 'opacity,visibility,transform' });
      if (route.section) scrollToSection(route.section);
      else incoming.querySelector('h1')?.focus({ preventScroll: true });
    };
    if (immediate || !motionEnabled) finish();
    else transition = gsap.fromTo(incoming, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .36, ease: 'power3.out', onComplete: finish });
  };
  if (immediate || !motionEnabled) apply();
  else transition = gsap.to(outgoing, { autoAlpha: 0, y: -10, duration: .16, ease: 'power2.in', onComplete: apply });
}

function enterPortfolio() {
  if (!introActive) return;
  introTimeline?.kill();
  const duration = motionEnabled ? .9 : 0;
  introActive = false;
  document.body.classList.remove('is-intro');
  main.inert = false;
  intro.inert = true;
  views.home.hidden = false;
  views.home.inert = false;
  activeView = 'home';
  document.body.dataset.view = 'home';
  history.replaceState(null, '', '#home');
  window.scrollTo({ top: 0, behavior: 'instant' });
  scene.setMode('home', duration);
  updateNav({ view: 'home' });
  transition?.kill();
  transition = gsap.timeline({ onComplete: () => {
    intro.hidden = true;
    document.querySelector('#home-title').focus({ preventScroll: true });
    setupScrollEffects();
    gsap.set('.identity-frame,.identity-frame>*:not(.corner),.signal-link', { clearProps: 'opacity,visibility,transform' });
  } });
  transition.to(intro, { autoAlpha: 0, duration: duration ? .28 : 0 }, 0);
  transition.fromTo('.identity-frame', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: duration ? .55 : 0, ease: 'power3.out' }, duration ? .15 : 0);
  transition.fromTo('.identity-frame>*:not(.corner)', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: duration ? .36 : 0, stagger: duration ? .045 : 0, ease: 'power3.out' }, duration ? .25 : 0);
  transition.fromTo('.signal-link', { autoAlpha: 0 }, { autoAlpha: 1, duration: duration ? .3 : 0, stagger: duration ? .05 : 0 }, duration ? .45 : 0);
}

function replayIntro() {
  document.querySelectorAll('#project-root video').forEach(video => video.pause());
  transition?.kill();
  ++transitionVersion;
  clearScrollEffects();
  gallery.setActive(false);
  introActive = true;
  main.inert = true;
  Object.values(views).forEach(view => { view.hidden = view !== views.home; view.inert = true; });
  activeView = 'home';
  document.body.dataset.view = 'home';
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.body.classList.add('is-intro');
  intro.hidden = false;
  intro.inert = false;
  gsap.set(intro, { autoAlpha: 1 });
  scene.setMode('intro', motionEnabled ? .7 : 0);
  playIntroSequence();
  history.replaceState(null, '', '#intro');
  document.querySelector('.enter-button').focus({ preventScroll: true });
}

function applyMotionPreference() {
  motionEnabled = motionChoice === null ? !reducedMotion.matches : motionChoice === 'on';
  document.body.classList.toggle('motion-paused', !motionEnabled);
  document.body.classList.toggle('motion-enabled', motionEnabled);
  motionButton.setAttribute('aria-pressed', String(motionEnabled));
  motionButton.setAttribute('aria-label', motionEnabled ? '暂停持续动效' : '开启动效');
  motionButton.title = motionChoice === null && reducedMotion.matches ? '当前遵循系统减少动态效果，点击可主动开启' : '点击切换动效，本次浏览中记住选择';
  motionButton.disabled = false;
  document.querySelector('.motion-label').textContent = motionEnabled ? '动效 开' : '动效 关';
  scene.setRunning(motionEnabled);
  gallery.setRunning(motionEnabled);
  if (!motionEnabled) transition?.progress(1);
  if (!motionEnabled) introTimeline?.progress(1);
  setupScrollEffects();
}

document.querySelector('.enter-button').addEventListener('click', enterPortfolio);
document.querySelector('.replay-intro').addEventListener('click', replayIntro);
motionButton.addEventListener('click', () => {
  motionChoice = motionEnabled ? 'off' : 'on';
  try { sessionStorage.setItem('portfolio.motion', motionChoice); } catch {}
  applyMotionPreference();
});
reducedMotion.addEventListener('change', applyMotionPreference);
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  const href = link.getAttribute('href');
  event.preventDefault();
  if (introActive && href === '#home') { enterPortfolio(); return; }
  if (location.hash === href) showRoute(readRoute());
  else location.hash = href;
});
window.addEventListener('hashchange', () => {
  if (location.hash === '#intro') replayIntro();
  else showRoute(readRoute());
});
window.addEventListener('wheel', event => {
  if (!introActive || event.deltaY <= 0) return;
  event.preventDefault();
  if (event.deltaY > 12) enterPortfolio();
}, { passive: false });
let touchStartY = 0;
intro.addEventListener('touchstart', event => { touchStartY = event.touches[0].clientY; }, { passive: true });
intro.addEventListener('touchend', event => {
  if (touchStartY - event.changedTouches[0].clientY > 40) enterPortfolio();
}, { passive: true });
document.addEventListener('keydown', event => {
  if (introActive && (event.key === 'Enter' && !event.target.closest('button,a') || event.key === 'Escape' || event.key === 'ArrowDown')) {
    event.preventDefault();
    enterPortfolio();
  } else if (!introActive && activeView === 'works' && !event.altKey && !event.metaKey && !event.ctrlKey) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      gallery.step(event.key === 'ArrowRight' ? 1 : -1);
    }
  }
});

function playIntroSequence() {
  introTimeline?.kill();
  const labels = '.intro-label,.intro-entry,.intro-identity';
  gsap.set(labels, { clearProps: 'transform,opacity,visibility' });
  scene.measureLinks();
  if (!motionEnabled) {
    gsap.set(scene.introReveal, { frames: 1, lines: 1 });
    scene.dirty = true;
    return;
  }
  introTimeline = gsap.timeline({ onUpdate: () => { scene.dirty = true; } });
  introTimeline.fromTo(scene.introReveal, { frames: 0, lines: 0 }, { frames: 1, duration: .9, ease: 'power2.out' }, 0);
  introTimeline.to(scene.introReveal, { lines: 1, duration: 1.5, ease: 'power2.inOut' }, .35);
  introTimeline.fromTo('.intro-identity', { autoAlpha: 0 }, { autoAlpha: 1, duration: .7 }, 0);
  introTimeline.fromTo('.intro-craft', { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: .7, stagger: .12, clearProps: 'transform' }, .75);
  introTimeline.fromTo('.intro-entry', { opacity: .25 }, { opacity: 1, duration: .65 }, 1.65);
}

applyMotionPreference();
if (location.hash && location.hash !== '#intro') showRoute(readRoute(), true);
else {
  scene.setMode('intro', 0);
  playIntroSequence();
}

