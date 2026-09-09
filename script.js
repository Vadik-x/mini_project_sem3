const GRADS = ['linear-gradient(135deg,#c7d2fe,#818cf8)','linear-gradient(135deg,#99f6e4,#2dd4bf)','linear-gradient(135deg,#fde68a,#f59e0b)','linear-gradient(135deg,#fbcfe8,#ec4899)','linear-gradient(135deg,#ddd6fe,#8b5cf6)','linear-gradient(135deg,#bbf7d0,#22c55e)'];

const ITEMS = [
  {id:1,type:'found',title:'AirPods charging case',cat:'Electronics',loc:'Central Library — Level 2 study pods',days:0,ref:'FND-2094',hold:'Library front desk',
   desc:'White AirPods case, second generation, no earbuds inside. Small scratch along the hinge. Turned in by library staff at closing.',
   img:'https://images.unsplash.com/photo-1586691078366-a3a0e6eee789?fm=jpg&q=80&w=1200&auto=format&fit=crop'},
  {id:2,type:'found',title:'Set of keys, blue lanyard',cat:'Keys & IDs',loc:'Recreation Center — main entrance',days:0,ref:'FND-2093',hold:'Rec Center welcome desk',
   desc:'Four keys on a silver ring with a bright blue woven lanyard and a small gym-fob tag. Found on the bench by the turnstiles.',
   img:'https://i.etsystatic.com/9789901/r/il/1d131b/7477211649/il_1080xN.7477211649_7xdt.jpg'},
  {id:3,type:'lost',title:'Brown leather bifold wallet',cat:'Wallets & Bags',loc:'Student Union — food court',days:1,ref:'LST-1187',hold:'—',
   desc:'Tan-brown bifold with a student ID and two bank cards inside. Sentimental value — it was a gift. Reward offered, no questions asked.',
   img:'https://www.graphicimage.com/cdn/shop/files/WLM-HAR-BRN-2_fd9e006c-47ad-4c6e-bb73-716e757542b4.jpg?v=1684737127'},
  {id:4,type:'found',title:'Teal insulated water bottle',cat:'Bottles & Drinkware',loc:'Science Hall — Room 204',days:1,ref:'FND-2090',hold:'Science Hall office, Rm 101',
   desc:'32 oz stainless bottle in teal with a spout lid. Covered in astronomy stickers, one dent near the base. Left under a lab stool.',
   img:'https://images.thdstatic.com/productImages/3b199ad7-215c-4192-8bee-9afd58f67f2c/svn/takeya-water-bottles-50301-64_600.jpg'},
  {id:5,type:'lost',title:'Black backpack, laptop sleeve',cat:'Wallets & Bags',loc:'North Campus shuttle stop',days:2,ref:'LST-1184',hold:'—',
   desc:'Matte-black 20L backpack with a padded laptop compartment. Inside: two spiral notebooks and a scientific calculator. Left on the bench around 6 pm.',
   img:'https://images.pexels.com/photos/18999231/pexels-photo-18999231/free-photo-of-black-backpack-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1200'},
  {id:6,type:'found',title:'Round gold-frame eyeglasses',cat:'Accessories',loc:'Lecture Hall B — seat C-14',days:2,ref:'FND-2086',hold:'Registrar\u2019s office',
   desc:'Slim round frames in brushed gold, clear prescription lenses, in a soft black case. Found tucked into the seat-back pocket after the 2 pm lecture.',
   img:'https://images.unsplash.com/photo-1764740116658-84e5566d62f2?fm=jpg&q=80&w=1200&auto=format&fit=crop'},
  {id:7,type:'lost',title:'Black umbrella, wooden crook handle',cat:'Accessories',loc:'Performing Arts Center lobby',days:3,ref:'LST-1181',hold:'—',
   desc:'Full-length black umbrella with a polished wooden crook handle. Left by the coat racks during Tuesday\u2019s downpour.',
   img:'https://luxbrellas.com/cdn/shop/files/gents-black-umbrella-with-classy-wooden-crook-handle-940.jpg?v=1715352676'},
  {id:8,type:'found',title:'Student ID — A. Rahman',cat:'Keys & IDs',loc:'Engineering Building — 3rd floor corridor',days:4,ref:'FND-2079',hold:'Engineering front office',
   desc:'Current-year student ID card in a black lanyard holder. Owner can collect from the front office with any photo ID.',
   img:'https://i5.walmartimages.com/seo/Black-ID-Badge-Holder-Lanyard-Vertical-PU-Leather-Card-1-Clear-Window-4-Credit-Slots-Detachable-Neck-Lanyard-Office-School-Student_b423d47c-49e4-4f64-9e35-90f4db1b4d9c.39c16843fe928fb2315b38035ec79e01.jpeg'},
  {id:9,type:'lost',title:'Silver MacBook Air 13\u2033',cat:'Electronics',loc:'Design Studio — west wing',days:5,ref:'LST-1176',hold:'—',
   desc:'Silver 13-inch MacBook Air with a NASA sticker and a band sticker on the lid. Last seen charging near the large-format plotters. Reward offered.',
   img:'https://www.androidauthority.com/wp-content/uploads/2023/02/Apple-MacBook-Pro-2023-lid-half-open-sitting-on-desk-showing-Apple-logo-scaled.jpg'},
  {id:10,type:'found',title:'Black fitness smartwatch',cat:'Electronics',loc:'Recreation Center — locker room B',days:6,ref:'FND-2071',hold:'Rec Center welcome desk',
   desc:'Square black smartwatch with a silicone sport band, found on the bench in locker room B. Screen locked — owner can identify the watch face.',
   img:'https://us.amazfit.com/cdn/shop/files/Pamir_45_b21d2a6c-d7bf-4d0f-9cd8-99fdd5de9731.png?v=1742891101'},
  {id:11,type:'lost',title:'Heather-gray hoodie, size M',cat:'Clothing',loc:'Main Auditorium — row F',days:7,ref:'LST-1169',hold:'—',
   desc:'Mid-weight heather-gray hoodie, size M, small embroidery on the chest. Left on a seat during the guest lecture on Thursday.',
   img:'https://c2h4losangeles.com/cdn/shop/files/C2H4_R010-HD028_product_02_0006__3_768c027b-be8f-4ee1-9deb-15df54569574_2000x.jpg?v=1762770146'},
  {id:12,type:'found',title:'Organic Chemistry textbook (8th ed.)',cat:'Books & Notes',loc:'Cafeteria — window table',days:9,ref:'FND-2062',hold:'Cafeteria lost-property bin',
   desc:'Hardcover 8th edition. The name tag on the first page is torn off, and chapter 4 has careful margin notes in pencil. Heavy — come with a bag.',
   img:'https://news.rice.edu/sites/g/files/bxs2656/files/2023-08/ochem_pr_image22_copy.png'},
];

const state = { q:'', tab:'all', cat:'All' };
let reportType = 'found';
let currentItem = null;

const grid = document.getElementById('grid');
const relTime = d => d===0 ? 'TODAY' : d===1 ? 'YESTERDAY' : d+' DAYS AGO';

function filtered(){
  const q = state.q.trim().toLowerCase();
  return ITEMS.filter(it =>
    (state.tab==='all' || it.type===state.tab) &&
    (state.cat==='All' || it.cat===state.cat) &&
    (!q || (it.title+' '+it.loc+' '+it.cat+' '+it.desc).toLowerCase().includes(q))
  );
}

function renderCats(){
  const cats = ['All', ...new Set(ITEMS.map(i=>i.cat))];
  document.getElementById('catRow').innerHTML = cats.map(c=>{
    const n = c==='All' ? ITEMS.length : ITEMS.filter(i=>i.cat===c).length;
    return `<button class="cat-chip ${state.cat===c?'active':''}" onclick="state.cat='${c.replace(/'/g,"\\'")}';render()">${c}<span class="n">${n}</span></button>`;
  }).join('');
}

function cardHTML(it, i){
  const g = GRADS[it.id % GRADS.length];
  return `
  <article class="card" style="animation-delay:${Math.min(i*45,400)}ms" onclick="openItem(${it.id})">
    <div class="card-img">
      <div class="fallback" style="background:${g}">${it.title.charAt(0)}</div>
      <img src="${it.img}" alt="${it.title}" loading="lazy" onerror="this.remove()">
      <span class="badge ${it.type}"><span class="status-dot ${it.type}"></span>${it.type==='found'?'Found':'Lost'}</span>
      ${it.isNew?'<span class="badge new">Just posted</span>':''}
    </div>
    <div class="card-body">
      <div class="card-title">${it.title}</div>
      <div class="card-meta">
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>${it.loc.split('—')[0].trim()}</span>
        <span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 9h18"/></svg>${it.cat}</span>
      </div>
      <div class="card-foot">
        <span class="card-time">${relTime(it.days)}</span>
        <span class="card-view">Details<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></span>
      </div>
    </div>
  </article>`;
}

function render(){
  const list = filtered();
  const parts = [];
  if(state.tab!=='all') parts.push(`<strong>${state.tab==='lost'?'Lost':'Found'}</strong>`);
  if(state.cat!=='All') parts.push(`in <strong>${state.cat}</strong>`);
  if(state.q.trim()) parts.push(`matching \u201C<strong>${state.q.trim()}</strong>\u201D`);
  document.getElementById('resultLine').innerHTML =
    list.length ? `Showing <strong>${list.length}</strong> ${list.length===1?'item':'items'} ${parts.join(' ')}`
                : '';
  grid.innerHTML = list.length ? list.map(cardHTML).join('') :
    `<div class="empty" style="grid-column:1/-1">
       <div class="big">Nothing here — yet.</div>
       <div>No ${state.tab==='found'?'found':state.tab==='lost'?'lost':''} items match that search. Try broadening it, or post a report so the board works for you.</div>
       <button class="pill-btn accent" onclick="openReport()">Report it instead</button>
     </div>`;
}

/* tabs */
document.getElementById('typeSeg').addEventListener('click', e=>{
  const btn = e.target.closest('button'); if(!btn) return;
  document.querySelectorAll('#typeSeg button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  state.tab = btn.dataset.tab;
  render();
});

/* search */
function heroSearch(e){ e.preventDefault(); quickSearch(document.getElementById('heroQ').value); }
function quickSearch(q){
  state.q = q; document.getElementById('boardQ').value = q;
  render();
  document.getElementById('board').scrollIntoView({behavior:'smooth'});
}

/* item modal */
function openItem(id){
  const it = ITEMS.find(x=>x.id===id); if(!it) return;
  currentItem = it;
  const g = GRADS[it.id % GRADS.length];
  const img = document.getElementById('mImg');
  img.style.display=''; img.onerror=()=>{img.style.display='none'};
  img.src = it.img;
  document.getElementById('mFallback').style.background = g;
  document.getElementById('mFallback').textContent = it.title.charAt(0);
  const badge = document.getElementById('mBadge');
  badge.className = 'badge '+it.type;
  badge.innerHTML = `<span class="status-dot ${it.type}"></span>${it.type==='found'?'Found':'Lost'}`;
  document.getElementById('mRef').textContent = 'REF · '+it.ref;
  document.getElementById('mTitle').textContent = it.title;
  document.getElementById('mDesc').textContent = it.desc;
  document.getElementById('mLoc').textContent = it.loc;
  document.getElementById('mTime').textContent = relTime(it.days).charAt(0)+relTime(it.days).slice(1).toLowerCase();
  document.getElementById('mCat').textContent = it.cat;
  document.getElementById('mHold').textContent = it.hold;
  const act = document.getElementById('mAction');
  act.textContent = it.type==='found' ? 'This is mine — start a claim' : 'I found this item';
  document.getElementById('itemOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeItem(){
  document.getElementById('itemOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('mAction').addEventListener('click', ()=>{
  if(!currentItem) return;
  closeItem();
  toast(currentItem.type==='found'
    ? 'Claim started — check your campus email to verify with your student ID.'
    : 'Thank you — the owner has been discreetly notified.');
});

/* report modal */
function openReport(){
  document.getElementById('reportOverlay').classList.add('open');
  document.getElementById('rDate').valueAsDate = new Date();
  document.body.style.overflow = 'hidden';
}
function closeReport(){
  document.getElementById('reportOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function setReportType(t){
  reportType = t;
  document.getElementById('tglLost').className = t==='lost' ? 'sel-lost' : '';
  document.getElementById('tglFound').className = t==='found' ? 'sel-found' : '';
}
function submitReport(e){
  e.preventDefault();
  const title = document.getElementById('rTitle').value.trim();
  const cat = document.getElementById('rCat').value;
  const loc = document.getElementById('rLoc').value.trim();
  const desc = document.getElementById('rDesc').value.trim() || 'No additional details provided yet.';
  ITEMS.unshift({
    id: Math.max(...ITEMS.map(i=>i.id)) + 1,
    type: reportType, title, cat, loc, days: 0, desc,
    ref: (reportType==='found'?'FND-':'LST-') + Math.floor(2000+Math.random()*7000),
    hold: reportType==='found' ? 'Student Services desk' : '—',
    img: '', isNew: true
  });
  closeReport();
  state.q=''; document.getElementById('boardQ').value=''; state.tab='all'; state.cat='All';
  document.querySelectorAll('#typeSeg button').forEach(b=>b.classList.toggle('active', b.dataset.tab==='all'));
  render();
  document.getElementById('board').scrollIntoView({behavior:'smooth'});
  toast('Posted — your report is live on the board.');
  e.target.reset();
}

/* toast */
let toastTimer;
function toast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 4200);
}

/* esc */
document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeItem(); closeReport(); } });

/* reveal on scroll */
const io = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* count-up stats */
const statIO = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(!en.isIntersecting) return;
    statIO.unobserve(en.target);
    en.target.querySelectorAll('.num').forEach(el=>{
      const target = +el.dataset.count, pre = el.dataset.prefix||'', suf = el.dataset.suffix||'';
      const dur = 1600, t0 = performance.now();
      (function tick(t){
        const p = Math.min((t-t0)/dur, 1), e = 1-Math.pow(1-p,3);
        el.textContent = pre + Math.round(target*e).toLocaleString() + suf;
        if(p<1) requestAnimationFrame(tick);
      })(t0);
    });
  });
},{threshold:.4});
statIO.observe(document.querySelector('.stats-grid'));

renderCats();
render();

/* fullscreen escape handler */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && window.parent !== window) {
    window.parent.postMessage({ type: 'close-fullscreen' }, '*');
  }
});

/* broken-img-handler */
(function(){
  if(window.__brokenImgHandler)return;
  window.__brokenImgHandler=true;
  var MAX=5,DELAYS=[2000,4000,8000,16000,32000];
  var TOKEN=/^__(?:IMG|EMBED)_[a-zA-Z0-9_-]+__/;
  var SENTINEL=new RegExp('^/api/published/[^/]+/(?:assets|embeds)/[^/?#]*-missing(?:[?#]|$)');
  var NOISE=/^[\s\u2018\u2019\u201c\u201d]+|[\s\u2018\u2019\u201c\u201d]+$/g;
  function canSrcEverResolve(src){
    var bare=src.replace(NOISE,'');
    return !TOKEN.test(bare)&&!SENTINEL.test(bare);
  }
  document.addEventListener('error',function(e){
    var img=e.target;
    if(!img||img.tagName!=='IMG')return;
    var liveSrc=img.getAttribute('src');
    var src=img.dataset.haOriginalSrc||liveSrc;
    if(!src)return;
    if(img.dataset.haOriginalSrc&&liveSrc&&liveSrc!==img.dataset.haOriginalSrc&&liveSrc.indexOf('_r=')<0){src=liveSrc;img.dataset.haOriginalSrc=src;img.dataset.haRetryCount='0'}
    else if(!img.dataset.haOriginalSrc){img.dataset.haOriginalSrc=src}
    var attempt=canSrcEverResolve(src)?parseInt(img.dataset.haRetryCount||'0',10):MAX;
    if(img.dataset.haPhId){var old=document.getElementById(img.dataset.haPhId);if(old)old.remove()}
    var ph=document.createElement('div');
    ph.className='ha-img-placeholder'+(attempt>=MAX?' ha-failed':'');
    ph.id='ha-ph-'+Math.random().toString(36).slice(2,9);
    var w=img.getAttribute('width');var h=img.getAttribute('height');
    if(w)ph.style.width=w+(isNaN(Number(w))?'':'px');
    else if(img.style.width)ph.style.width=img.style.width;
    else if(img.width>1)ph.style.width=img.width+'px';
    if(h)ph.style.height=h+(isNaN(Number(h))?'':'px');
    else if(img.style.height)ph.style.height=img.style.height;
    else if(img.height>1)ph.style.height=img.height+'px';
    ph.textContent=attempt>=MAX?'Image unavailable':'Loading image\u2026';
    img.dataset.haPhId=ph.id;
    if(img.dataset.haOrigDisplay==null)img.dataset.haOrigDisplay=img.style.display||'';
    img.style.display='none';
    img.insertAdjacentElement('afterend',ph);
    if(attempt<MAX){
      img.dataset.haRetryCount=String(attempt+1);
      setTimeout(function(){
        if(!img.isConnected)return;
        if(img.dataset.haOriginalSrc!==src)return;
        if(img.complete&&img.naturalWidth>0)return;
        var curSrc=img.getAttribute('src');
        if(curSrc&&curSrc.indexOf(src)!==0)return;
        var fresh=src+(src.indexOf('?')>=0?'&':'?')+'_r='+(attempt+1)+'_'+Date.now();
        img.src=fresh;
      },DELAYS[attempt]);
    }
  },true);
  document.addEventListener('load',function(e){
    var img=e.target;
    if(!img||img.tagName!=='IMG')return;
    if(img.dataset.haPhId){
      var ph=document.getElementById(img.dataset.haPhId);
      if(ph)ph.remove();
      delete img.dataset.haPhId;
      img.style.display=img.dataset.haOrigDisplay||'';
      delete img.dataset.haOrigDisplay;
      delete img.dataset.haOriginalSrc;
      delete img.dataset.haRetryCount;
    }
  },true);
})();
