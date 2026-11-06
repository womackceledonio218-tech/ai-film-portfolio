const projects = [
  {id:'amber',title:'琥珀与翡翠',type:'AI ANIMATION · IN PROGRESS',image:'assets/amber-main.png',alt:'琥珀与翡翠的作品画面',idea:'项目资料整理中',role:'待补充',placeholder:true},
  {
    id:'bridge',title:'赵州桥',fullTitle:'拱月长虹 · 李春的构建艺术',
    type:'AI ANIMATION · COMPLETED',image:'assets/bridge/cover.webp',
    alt:'赵州桥动画成片中，工匠在脚手架间建设石拱桥',
    idea:'三维动画风格 · 古代匠人的造桥故事',
    role:'约80%制作镜头（回忆估计） · 三个角色设计 · 剪辑配乐与导出',
    lead:'三人团队制作的三维动画风格短片。画风重启后距提交仅剩一周，我负责视频制作、剪辑、配乐和最终导出，并设计李春、老石匠与阿柚三个主要角色。本人约承担80%的制作镜头，该比例为回忆估计。成片07:04，团队获江苏省赛特等奖、国赛三等奖。',
    leadTail:'共同服务叙事。',leadPhrases:['三维动画风格','古代匠人','角色','镜头','音乐'],status:'已完成 · 2026.04',
    award:{title:'国赛三等奖',event:'2026 中国大学生计算机设计大赛',category:'数媒动画赛道 · 江苏省赛特等奖'},
    facts:[{label:'团队规模',value:'3人'},{label:'团队成片',value:'07:04'},{label:'个人制作镜头占比',value:'约80%（回忆估计）'}],
    film:{src:'assets/bridge/zhaozhou-bridge.mp4',duration:'07:04',
      summary:'影片围绕李春的造桥经历展开，以水患、营造实践及人物交流串联故事，呈现匠人面对造桥难题时的思考与选择。',
      chapters:[{time:15,label:'渡河困境'},{time:160,label:'工匠与设计'},{time:340,label:'桥梁营造'}]},
    approach:'围绕生成错误、桥体造型与赛前制作压力复盘。以下结果区分个人制作范围与团队成片、奖项，不把整体成果等同于单项方法的提升。',
    process:[{"image":"assets/bridge/visual-development.webp","alt":"赵州桥项目李春的视觉开发素材","caption":"项目保留视觉素材，非生成错误与修复的对应对照","title":"修正模型无法稳定识别的角色与细节","capability":"角色设计与生成修正","challenge":"提示词正确时，生成结果仍可能出现人物重复、细节模糊、面孔趋同、场景与站位错误。","decision":"对有问题的图像先用Photoshop修正，再更换模型，以修正后的首帧继续生成；同时承担李春、老石匠与阿柚的角色设计。","result":"完成李春、老石匠、阿柚3个主要角色设计，并用于影片制作。"},{"image":"assets/bridge/cover.webp","alt":"影片中呈现赵州桥全貌的画面","caption":"团队成片抽帧；建桥过程的对应时间码待整理","title":"用局部操作镜头组织建桥过程","capability":"镜头取舍与蒙太奇叙事","challenge":"模型难以生成符合赵州桥现有造型的建设过程全景，持续生成大场景也不便修改。","decision":"改用工匠制作的局部细节镜头，通过蒙太奇推进建桥叙事，仅在最后关键大场景呈现赵州桥全景，集中处理桥体造型。","result":"建桥段落以工匠操作的局部镜头推进，最后呈现桥体全景，进入07:04团队成片。"},{"image":"assets/bridge/sound-edit.webp","alt":"赵州桥团队成片中的场景","caption":"团队成片画面","title":"在画风重启后的赛前一周整合成片","capability":"视频制作与声画整合","challenge":"三人团队在画风重启后距提交只剩一周，需要把生成片段整合成可观看、可提交的作品。","decision":"我承担视频制作、镜头剪辑、配乐与最终导出；另外两名成员负责剧本、PPT等文本材料。","result":"完成07:04团队成片；本人约承担80%的制作镜头（回忆估计）。团队获得2026中国大学生计算机设计大赛江苏省赛特等奖、国赛三等奖。"}],
    characters:[
      {name:'李春',image:'assets/bridge/lichun.webp',alt:'赵州桥动画中低头绘制图纸的李春',caption:'主角设计 · 成片画面'},
      {name:'阿柚',image:'assets/bridge/ayou.webp',alt:'赵州桥动画小女孩阿柚的角色视觉开发图',caption:'角色设计 · 视觉开发素材'},
      {name:'老石匠',image:'assets/bridge/old-craftsman.webp',alt:'赵州桥动画老石匠的角色视觉开发图',caption:'角色设计 · 视觉开发素材'}
    ],
    mine:'本人约承担80%的制作镜头（回忆估计），负责李春、老石匠、阿柚三个角色设计，以及视频制作、剪辑、配乐与最终导出。',
    team:'团队共3人；另外两名成员负责剧本、PPT等文本材料。07:04成片与省赛特等奖、国赛三等奖均为团队成果。',
    tools:'DeepSeek · 可灵 · Seedance 2.0',
    takeaway:'在画风重启后距提交一周的条件下，负责视频制作与后期整合；个人制作镜头占比约80%，为回忆估计，非逐镜精确统计。'
  },
  {"id":"journey","title":"定海","fullTitle":"西游灵器录 · 金箍棒的前世今生","type":"CG FANTASY","image":"assets/dinghai/cover.webp","alt":"定海团队成片中的龙宫画面","idea":"CG微电影 · 约50项资产设计与约4分钟对话段落制作","role":"全片约50项资产 · 约4分钟对话段落 · 构思与片段生成","lead":"围绕已有剧本向CG微电影的改编，完成全片所需约50项角色、场景与道具资产，并负责孙悟空与神铁对话的约4分钟片段。该段落所需的资产设计与片段生成在两个晚上完成；团队成片17:52，用于公司IP的线下宣传与销售展示。","status":"团队作品已完成 · 个人对话段落约4分钟","facts":[{"label":"个人资产产出","value":"约50项（全片合计）"},{"label":"个人片段","value":"约4分钟"},{"label":"该段落制作","value":"两个晚上（含相关资产）"}],"film":{"src":"assets/dinghai/film.mp4","duration":"17:52","label":"团队成片","summary":"此处展示17:52团队完整成片。本人负责全片所需约50项角色、场景及道具资产，以及孙悟空与神铁对话的约4分钟段落。该段落的资产与片段生成用两个晚上完成，不将全部50项资产归为这两个晚上的产出；其余片段由团队其他成员完成。作品用于公司IP的线下宣传与销售展示。","chapters":[{"time":0,"label":"从头观看团队成片"},{"time":180,"label":"03:00 画面定位"},{"time":900,"label":"15:00 画面定位"}]},"approach":"从剧本改编、资产构思与正反打空间关系三个问题复盘。资产总量、个人片段和团队成片分别标明，不把公司用途等同于可量化销售业绩。","process":[{"image":"assets/dinghai/characters.webp","alt":"定海项目的角色视觉设计素材","caption":"项目保留的角色素材，非风格候选完整对照","title":"把已有剧本转化为CG资产与视觉方向","capability":"视觉构思与资产设计","challenge":"已有剧本需要改编为微电影；角色需要有辨识度，避免猴子形态被生成得像猩猩。","decision":"尝试真人与CG两类方向，经小组讨论确定CG画风；依据剧本组织角色、场景和道具资产，并围绕角色特征开展设计。","result":"个人完成全片所需的角色、场景与道具资产，合计约50项。"},{"image":"assets/dinghai/scene.webp","alt":"定海龙宫场景视觉素材","caption":"项目场景设计素材，非对应镜头修复前后对照","title":"修正正反打中不一致的背景与动作","capability":"三维辅助与镜头修正","challenge":"生成正反打时可能出现人物位置正确但背景错误；角色动作也需要反复校正。","decision":"使用腾讯混元的3D模型，截取所需视角图像以替换错误背景；根据具体动作重新编写提示词，再生成片段。","result":"个人制作的单片段总生成次数不超过3次（含首次，据本人回忆）。"},{"image":"assets/dinghai/atmosphere.webp","alt":"定海项目保留的场景画面","caption":"项目场景素材，非对话段落的精确时间码定位","title":"在两个晚上完成个人对话段落","capability":"片段构思与制作交付","challenge":"时间紧，需要把孙悟空与神铁对话的构思落实为可用片段，并与团队成片衔接。","decision":"承担该段落的构思、相关资产设计与片段生成，根据角色动作和画面空间逐项调整。","result":"两个晚上完成约4分钟对话片段及该段落所需资产，最终随17:52团队成片用于公司IP的线下宣传与销售展示。"}],"mine":"个人完成全片约50项角色、场景、道具资产；负责孙悟空与神铁对话的约4分钟片段及构思、生成。两个晚上指该段落及其相关资产，不指全片所有资产的总工时。","team":"此处展示团队17:52成片，其余片段由其他成员完成。公司用于IP线下宣传与销售展示，不把影片总时长或公司销售成果计入个人独立业绩。","tools":"腾讯混元3D模型 · Seedance 2.0 · 可灵 · GPT Image 2","takeaway":"个人完成约50项全片资产与约4分钟对话片段；该段落及其相关资产用两个晚上完成，用于团队CG微电影的制作与公司IP展示。"}
  ,{id:'rotoscope',title:'真人转绘',fullTitle:'真人竖屏短剧的三维动画风格试片',type:'STYLE TRANSFER · COMMERCIAL PILOT',image:'assets/rotoscope/cover.webp',alt:'真人转绘试片中的两位女性角色与情绪表演',idea:'三种画风探索 · 独立完成约30个镜头的转绘试片',role:'需求理解 · 转绘流程探索 · 镜头修复 · 成片整合',lead:'面向已有真人短剧的出海需求，比较三种画风并生成样图，经负责人确认采用三维卡通方向。初期五秒分段转绘出现表情、动作和口型识别不稳后，改用首尾帧与表情提示词组织生成，独立完成约30个镜头、01:02的试片。项目因预算不足以覆盖生成成本、工期受限未继续制作；此次交付存在延迟。',status:'试片已完成 · 独立制作 · 未继续制作',facts:[{label:'个人镜头量',value:'约30个'},{label:'交付片长',value:'01:02'},{label:'呈现规格',value:'9:16 竖屏试片'}],film:{src:'assets/rotoscope/film.mp4',duration:'01:02',portrait:true,summary:'真人短剧情节的三维卡通风格转绘试片，展示人物对话、情绪表演与镜头组接。原真人视频为项目转绘输入，非本人实拍。',chapters:[{time:0,label:'从头观看'},{time:20,label:'人物情绪片段'},{time:40,label:'对话与组接片段'}]},approach:'从画风选择、表演还原与生成成本三个问题复盘。试片完成能够说明执行范围；负责人对效果的反馈尚可，但时间和生成成本使项目未继续制作。',process:[{"image":"assets/rotoscope/direction.webp","alt":"转绘项目保留的角色画风素材","caption":"项目保留素材，非三种候选画风的完整对比","title":"先确定可执行的画风方向","capability":"需求理解与风格选择","challenge":"甲方希望将已有真人短剧转为适合海外内容的动画形式，制作前尚未确定画风。","decision":"参考海外受众常见风格，生成普通二次元、吉卜力风格二次元、迪士尼倾向三维卡通三种样图，以变形风险和表情演绎为判断依据，提交负责人选择。","result":"完成3种画风的样图探索，负责人确认采用三维卡通方向。"},{"image":"assets/rotoscope/emotion.webp","alt":"转绘试片中的情绪镜头","caption":"成片00:20与00:40抽帧，不作为修复前后对照","title":"为表演不稳定的片段更换方法","capability":"视频生成与方法调整","challenge":"按五秒与镜头切换拆分原片后，第二个五秒片段就出现表情、动作和口型识别不稳。","decision":"先按五秒片段尝试可灵转绘；发现问题后改用截取首尾帧、补充表情提示词的方式，引导角色表演。","result":"以调整后的方法继续制作，最终独立完成约30个镜头的试片。"},{"image":"assets/rotoscope/coverage.webp","alt":"试片中的人物对话镜头","caption":"成片00:10与00:30抽帧","title":"把试片结果与制作限制一并交代","capability":"成片整合与项目复盘","challenge":"甲方预算不足以覆盖生成费用，制作期间又穿插其他工作，交付时间受影响。","decision":"独立推进素材生成与成片整合，结合负责人对效果与成本的反馈复盘制作路径。","result":"完成01:02竖屏试片，交付存在延迟；负责人反馈效果尚可但成本偏高，项目未继续制作。"}],mine:'独立承担甲方需求理解、制作方法探索、真人素材的风格转绘、复杂表情再生成、镜头替换与成片整合。',teamTail:'剧本',team:'本次试片由我独立制作。真人原片作为转绘输入；不将原片的剧本、演员表演与实拍工作计入个人贡献。',tools:'可灵 · 参考帧风格转换 · 3D导演台（具体产品待补）',takeaway:'独立完成约30个镜头、01:02试片；此次交付延迟，项目因预算与生成成本不匹配、工期受限未继续制作。'}
];

const projectOrder = ['bridge', 'journey', 'rotoscope', 'amber'];
projects.sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));

gsap.registerPlugin(ScrollTrigger);

const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const scene = new PortfolioScene(document.querySelector('#kinetic-scene'));
const main = document.querySelector('.app-main');
const intro = document.querySelector('.intro-screen');
const views = { home: document.querySelector('#view-home'), project: document.querySelector('#view-project') };
let introActive = true;
let activeView = 'home';
let activeProject = '';
const motionEnabled = true;
let transition = null;
let introTimeline = null;
let transitionVersion = 0;
let scrollEffects = [];

const wrap = (value, count) => ((value % count) + count) % count;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const ORBIT_POSITION_PER_SECOND = .4;
const selectedProjects = projects.filter(project => !project.placeholder);

// Repeat the project sequence around the ring while keeping one indicator per project.
document.querySelector('.orbit-ring').innerHTML = [...selectedProjects, ...selectedProjects].map((project, slot) =>
  '<a class="orbit-card" data-slot="' + slot + '" href="#project/' + project.id + '"' + (slot ? ' tabindex="-1"' : '') + '><img src="' + project.image + '" alt="' + project.alt + '" width="1600" height="900" draggable="false"><span class="card-caption"><span>' + project.title + '</span><span>进入项目 ↗</span></span></a>'
).join('');
const projectIndicators = document.querySelector('.progress-dots');
projectIndicators.setAttribute('aria-label', '项目选择');
projectIndicators.innerHTML = selectedProjects.map((project, index) => '<button type="button" aria-label="' + project.title + '"' + (index === 0 ? ' aria-current="true"' : '') + '></button>').join('');

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
    this.wheelTimer = 0;
    this.render = this.render.bind(this);
    new ResizeObserver(() => this.resize()).observe(stage);
    document.querySelector('.previous').addEventListener('click', () => this.step(-1));
    document.querySelector('.next').addEventListener('click', () => this.step(1));
    this.dots.forEach((dot, index) => dot.addEventListener('click', () => this.selectProject(index)));
    const readingArea = document.querySelector('.works-stage');
    readingArea.addEventListener('pointerleave', () => {
      this.hover = false;
      this.lastInteraction = performance.now();
      stage.style.setProperty('--ring-x', '0deg');
      stage.style.setProperty('--ring-y', '0deg');
    });
    readingArea.addEventListener('pointermove', event => {
      if (event.pointerType !== 'touch') this.hover = Boolean(event.target.closest('.orbit-card,.work-summary'));
    });
    readingArea.addEventListener('focusin', event => {
      this.focused = event.target.matches('a,button,[tabindex="0"]') && event.target.matches(':focus-visible');
    });
    readingArea.addEventListener('focusout', event => {
      this.focused = readingArea.contains(event.relatedTarget) && event.relatedTarget.matches('a,button,[tabindex="0"]') && event.relatedTarget.matches(':focus-visible');
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
      }
    });
    gsap.ticker.add((time, deltaTime) => {
      if (this.active && this.running && !document.hidden && !this.hover && !this.focused && !this.drag && !this.tween?.isActive() && performance.now() - this.lastInteraction > 800) {
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
      card.setAttribute('aria-label', '进入' + selectedProjects[index % selectedProjects.length].title + '项目详情');
    }
    if (this.slot !== front) this.updateInfo(front);
  }

  updateInfo(slot) {
    this.slot = slot;
    const index = slot % selectedProjects.length;
    const project = selectedProjects[index];
    document.querySelector('#work-title').textContent = project.title;
    document.querySelector('#work-type').textContent = project.film
      ? project.film.duration + ' / ' + (project.film.label || '完整成片') + (project.award ? ' / ' + project.award.title : '')
      : '进行中的动画项目';
    document.querySelector('#work-idea').textContent = project.idea;
    document.querySelector('#work-role').innerHTML = roleParts(project.role);
    document.querySelector('#work-count').textContent = '0' + (index + 1) + ' / ' + String(selectedProjects.length).padStart(2, '0');
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
    this.holdAuto();
    this.moveTo(Math.round(this.state.position) + direction);
  }

  selectProject(index) {
    this.holdAuto();
    const candidates = this.cards.map((_, i) => i).filter(i => i % selectedProjects.length === index);
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
        this.holdAuto();
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
    this.holdAuto();
    this.tween?.kill();
    this.lastInteraction = performance.now();
    this.state.position += clamp(delta / 180, -.8, .8);
    this.render();
    clearTimeout(this.wheelTimer);
    this.wheelTimer = setTimeout(() => this.moveTo(Math.round(this.state.position)), 140);
  }

  setActive(value) {
    this.active = value;
    this.hover = false;
    this.focused = false;
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
  }

  holdAuto() {
    this.lastInteraction = performance.now();
  }
}

const gallery = new OrbitGallery(document.querySelector('.orbit'));
const homeSections = ['works', 'personal', 'contact'].map(name => ({ name, element: document.querySelector('#view-' + name) }));
let homeScrollFrame = 0;
function updateHomeScroll() {
  homeScrollFrame = 0;
  if (introActive || activeView !== 'home') return;
  const headerHeight = document.querySelector('.site-header').offsetHeight;
  const current = homeSections.filter(section => section.element.getBoundingClientRect().top <= headerHeight + 120).at(-1);
  updateNav({ view: 'home', section: current?.name || '' });
  const worksBounds = homeSections[0].element.getBoundingClientRect();
  const visible = worksBounds.top < innerHeight && worksBounds.bottom > headerHeight;
  if (gallery.active !== visible) gallery.setActive(visible);
  const mode = current?.name === 'personal' || current?.name === 'contact' ? 'project' : current?.name === 'works' ? 'works' : 'home';
  if (scene.mode !== mode) scene.setMode(mode, .5);
}
window.addEventListener('scroll', () => {
  if (!homeScrollFrame) homeScrollFrame = requestAnimationFrame(updateHomeScroll);
}, { passive: true });
window.addEventListener('resize', updateHomeScroll);


function readRoute() {
  const hash = location.hash.slice(1);
  const parts = hash.split('/');
  if (parts[0] === 'project') {
    const project = projects.find(item => item.id === parts[1]) || projects[0];
    return { view: 'project', id: project.id, section: parts[2] || '' };
  }
  if (hash === 'about') return { view: 'home', section: 'personal' };
  if (['works', 'personal', 'contact'].includes(hash)) return { view: 'home', section: hash };
  return { view: 'home' };
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
  const next = selectedProjects[(selectedProjects.indexOf(project) + 1) % selectedProjects.length];
  if (project.placeholder) {
    document.querySelector('#project-root').innerHTML = '<section class="project-hero" id="overview"><div><a class="project-kicker" href="#works">← 返回作品 / PROJECT 0' + (index + 1) + '</a><h1 tabindex="-1">' + project.title + '</h1><p class="project-small">项目资料整理中</p></div><div class="project-cover"><img src="' + project.image + '" alt="' + project.alt + '" width="1600" height="900"></div></section><a class="next-project" href="#project/' + next.id + '"><span><small>下一个项目 / NEXT FILM</small>' + next.title + '</span><span aria-hidden="true">↗</span></a>';
    document.title = project.title + ' · 李谢怡';
    activeProject = project.id;
    return;
  }
  const sectionLink = section => '#project/' + project.id + '/' + section;
  const lead = keepPhrases(project.lead, [project.leadTail, ...(project.leadPhrases || [])]);
  const team = keepPhrases(project.team, project.teamTail ? [project.teamTail] : []);
  const process = project.process.map((item, i) => '<article class="process-item"><figure><img src="' + item.image + '" alt="' + (item.alt || project.title + '创作过程画面 ' + (i + 1)) + '" width="1600" height="900" loading="lazy">' + (item.caption ? '<figcaption>' + item.caption + '</figcaption>' : '') + '</figure><h3>0' + (i + 1) + ' / ' + item.title + '</h3>' + (item.challenge ? '<p><strong>问题</strong>' + keepPhrases(item.challenge, item.keepPhrases) + '</p><p><strong>我的处理</strong>' + keepPhrases(item.decision, item.keepPhrases) + '</p>' + (item.result ? '<p class="process-result"><strong>结果</strong>' + item.result + '</p>' : '') + '<span class="process-capability">' + item.capability + '</span>' : '<p>' + item.text + '</p>') + '</article>').join('');
  const award = project.award ? '<p class="project-award"><span class="award-mark" aria-hidden="true"></span><span><strong>' + project.award.title + '</strong><small>' + project.award.event + '<br>' + project.award.category + '</small></span></p>' : '';
  const facts = project.facts ? '<dl class="project-facts">' + project.facts.map(fact => '<div><dt>' + fact.label + '</dt><dd>' + fact.value + '</dd></div>').join('') + '</dl>' : '';
  const characters = project.characters ? '<div class="character-study"><h3>角色视觉开发</h3><p>我负责李春、阿柚与老石匠的角色设计。以下展示成片画面与项目保留的视觉开发素材。</p><div class="character-grid">' + project.characters.map(character => '<figure><img src="' + character.image + '" alt="' + character.alt + '" width="1600" height="900" loading="lazy"><figcaption><strong>' + character.name + '</strong><span>' + character.caption + '</span></figcaption></figure>').join('') + '</div></div>' : '';
  document.querySelector('#project-root').innerHTML = [
    '<section class="project-hero" id="overview"><div class="project-introduction"><a class="project-kicker" href="#works">← 返回作品 / PROJECT 0' + (index + 1) + '</a><h1 tabindex="-1">' + project.title + '</h1>' + (project.fullTitle ? '<p class="project-subtitle">' + project.fullTitle + '</p>' : '') + '<p class="project-lead">' + lead + '</p>' + award + '<p class="project-small">' + (project.award ? '' : project.status + '<br>') + '我的职责 / ' + roleParts(project.role) + '</p></div><a class="project-cover project-watch" href="' + sectionLink('film') + '" aria-label="前往观看《' + project.title + '》' + (project.film.label || '完整成片') + '"><img src="' + project.image + '" alt="' + project.alt + '" width="1600" height="900" fetchpriority="high"><span class="watch-label"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><span>观看' + (project.film.label || '成片') + '</span><small>' + project.film.duration + '</small></span></a>' + facts + '</section>',
    '<nav class="project-tabs" aria-label="项目内容导航"><a class="project-return" href="#works">← 返回作品</a><a href="' + sectionLink('overview') + '">概览 / OVERVIEW</a><a href="' + sectionLink('film') + '">片段 / FILM</a><a href="' + sectionLink('approach') + '">思路 / APPROACH</a><a href="' + sectionLink('credits') + '">职责 / ROLE</a></nav>',
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
  if (activeView === 'project') {
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

function scrollToSection(section, immediate = false) {
  if (!section) return;
  const target = document.getElementById(activeView === 'home' ? 'view-' + section : section);
  target?.scrollIntoView({ behavior: immediate ? 'instant' : 'smooth', block: 'start' });
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
    else document.title = ({ works: '作品 · 李谢怡', personal: '个人 · 李谢怡', contact: '联系 · 李谢怡' })[route.view] || '李谢怡 · AI 影像创作者';
    const incoming = views[activeView];
    incoming.hidden = false;
    incoming.inert = false;
    document.body.dataset.view = activeView;
    window.scrollTo({ top: 0, behavior: 'instant' });
    scene.setMode(activeView, immediate || !motionEnabled ? 0 : .6);
    setupScrollEffects();
    const finish = () => {
      if (version !== transitionVersion) return;
      gsap.set(incoming, { clearProps: 'opacity,visibility,transform' });
      if (route.section) scrollToSection(route.section, true);
      else incoming.querySelector('h1')?.focus({ preventScroll: true });
      updateHomeScroll();
    };
    if (immediate || !motionEnabled) finish();
    else transition = gsap.fromTo(incoming, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .36, ease: 'power3.out', onComplete: finish });
  };
  if (immediate || !motionEnabled || wasIntro) apply();
  else transition = gsap.to(outgoing, { autoAlpha: 0, y: -10, duration: .16, ease: 'power2.in', onComplete: apply });
}

function enterPortfolio() {
  if (!introActive) return;
  history.replaceState(null, '', '#home');
  showRoute({ view: 'home' });
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
  document.title = '开场页 · 李谢怡';
  updateNav({ view: 'intro' });
  playIntroSequence();
  history.replaceState(null, '', '#intro');
  document.querySelector('.enter-button').focus({ preventScroll: true });
}

document.querySelector('.enter-button').addEventListener('click', enterPortfolio);
document.querySelector('.replay-intro').addEventListener('click', replayIntro);
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  const href = link.getAttribute('href');
  event.preventDefault();
  if (link.matches('.project-watch')) {
    const video = document.querySelector('#project-root video');
    if (!video) return;
    const status = document.querySelector('#film-status');
    video.play().then(() => {
      if (activeView !== 'project' || !video.isConnected || video.closest('.view').inert) video.pause();
    }).catch(() => { status.textContent = '请点击播放器继续播放，或单独打开影片。'; });
    video.scrollIntoView({ behavior: 'instant', block: 'center' });
    video.focus({ preventScroll: true });
    return;
  }
  if (activeView === 'project' && href.startsWith('#project/' + activeProject + '/')) {
    history.replaceState(null, '', href);
    scrollToSection(readRoute().section);
    return;
  }
  if (location.hash === href && href === '#intro') replayIntro();
  else if (location.hash === href) showRoute(readRoute());
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
  } else if (!introActive && activeView === 'home' && gallery.active && !event.altKey && !event.metaKey && !event.ctrlKey) {
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

document.body.classList.add('motion-enabled');
scene.setRunning(true);
gallery.setRunning(true);
if (location.hash && location.hash !== '#intro') showRoute(readRoute(), true);
else {
  document.title = '开场页 · 李谢怡';
  updateNav({ view: 'intro' });
  scene.setMode('intro', 0);
  playIntroSequence();
}
