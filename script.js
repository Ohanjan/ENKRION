const languages={en:'English',de:'Deutsch',cs:'Čeština',es:'Español',zh:'中文',ru:'Русский',hi:'हिन्दी',ar:'العربية'};
const T={
de:['Funktionen','Kontinuität','Preise','Kontakt','Datenschutz','Bedingungen','Startseite','Ein Verstand.','Jeder Bildschirm.','ORIN entdecken','An der Alpha teilnehmen','Weniger Wechsel.','Mehr erreichen.','Sprachsteuerung','Dateiintelligenz','Aktuelle Informationen','Absturz-Hilfe','Geplante Preise','Kostenlos','Persönlich','Familie','Projektstatus','Frühe Alpha','Plattformen','Zugang','Einladung','Änderungen','Zuletzt aktualisiert:'],
cs:['Možnosti','Návaznost','Ceny','Kontakt','Soukromí','Podmínky','Domů','Jedna mysl.','Každá obrazovka.','Prozkoumat ORIN','Připojit se k alfě','Méně přepínání.','Více práce.','Ovládání hlasem','Inteligentní soubory','Aktuální informace','Pomoc při pádu','Plánované ceny','Zdarma','Osobní','Rodina','Stav projektu','Raná alfa','Platformy','Přístup','Pozvánka','Změny','Poslední aktualizace:'],
es:['Funciones','Continuidad','Precios','Contacto','Privacidad','Términos','Inicio','Una mente.','Cada pantalla.','Explorar ORIN','Unirse a la alfa','Menos cambios.','Más acción.','Control por voz','Inteligencia de archivos','Información actual','Ayuda con fallos','Precios previstos','Gratis','Personal','Familia','Estado del proyecto','Alfa inicial','Plataformas','Acceso','Invitación','Cambios','Última actualización:'],
zh:['功能','连续体验','价格','联系','隐私','条款','首页','一个智慧。','每一块屏幕。','探索 ORIN','加入测试','减少切换。','完成更多。','语音控制','智能文件处理','实时信息','故障帮助','计划价格','免费','个人版','家庭版','项目状态','早期测试','平台','访问方式','邀请制','变更','最后更新：'],
ru:['Возможности','Непрерывность','Цены','Контакты','Конфиденциальность','Условия','Главная','Один разум.','Каждый экран.','Изучить ORIN','Присоединиться к альфе','Меньше переключений.','Больше дела.','Голосовое управление','Умные файлы','Актуальная информация','Помощь при сбоях','Планируемые цены','Бесплатно','Личный','Семейный','Статус проекта','Ранняя альфа','Платформы','Доступ','По приглашению','Изменения','Последнее обновление:'],
hi:['क्षमताएँ','निरंतरता','मूल्य','संपर्क','गोपनीयता','शर्तें','होम','एक बुद्धि।','हर स्क्रीन।','ORIN देखें','अल्फ़ा से जुड़ें','कम बदलाव।','अधिक काम।','आवाज़ से नियंत्रण','स्मार्ट फ़ाइल सहायता','ताज़ा जानकारी','क्रैश सहायता','नियोजित मूल्य','निःशुल्क','व्यक्तिगत','परिवार','परियोजना स्थिति','प्रारंभिक अल्फ़ा','प्लेटफ़ॉर्म','पहुँच','आमंत्रण','परिवर्तन','अंतिम अपडेट:'],
ar:['الإمكانات','الاستمرارية','الأسعار','التواصل','الخصوصية','الشروط','الرئيسية','عقل واحد.','كل شاشة.','استكشف ORIN','انضم إلى ألفا','تنقّل أقل.','إنجاز أكثر.','التحكم بالصوت','ذكاء الملفات','معلومات مباشرة','دعم الأعطال','الأسعار المخطط لها','مجاني','شخصي','عائلي','حالة المشروع','ألفا مبكرة','المنصات','الوصول','بدعوة','التغييرات','آخر تحديث:']
};
const source=['Capabilities','Continuity','Pricing','Contact','Privacy','Terms','Home','One mind.','Every screen.','Explore ORIN','Join the alpha','Less switching.','More doing.','Control by voice','File intelligence','Live information','Crash support','Planned pricing','Free','Personal','Family','Project status','Early alpha','Platforms','Access','Invitation','Changes','Last updated:'];
const root=document.documentElement;
const originalTitle=document.title;
const originalText=[];const tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement&&!['SCRIPT','STYLE'].includes(n.parentElement.tagName)&&n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});while(tw.nextNode())originalText.push([tw.currentNode,tw.currentNode.nodeValue.trim()]);
const longText={
de:{'Private alpha in development':'Private Alpha in Entwicklung','ORIN is an AI assistant built to understand your intent, work across your devices, and turn a conversation into action.':'ORIN ist ein KI-Assistent, der Ihre Absicht versteht, geräteübergreifend arbeitet und Gespräche in Handlungen verwandelt.','ORIN brings conversation, files, apps, and practical computer help into one calm workspace.':'ORIN vereint Gespräche, Dateien, Apps und praktische Computerhilfe in einem ruhigen Arbeitsbereich.','Download not yet available':'Download noch nicht verfügbar','Request alpha access':'Alpha-Zugang anfragen','Built to earn trust.':'Entwickelt, um Vertrauen zu verdienen.','Clear from the start.':'Von Anfang an klar.'},
cs:{'Private alpha in development':'Soukromá alfa ve vývoji','ORIN is an AI assistant built to understand your intent, work across your devices, and turn a conversation into action.':'ORIN je AI asistent, který rozumí vašemu záměru, pracuje napříč zařízeními a mění konverzaci v činy.','ORIN brings conversation, files, apps, and practical computer help into one calm workspace.':'ORIN spojuje konverzace, soubory, aplikace a praktickou pomoc s počítačem v jednom klidném prostředí.','Download not yet available':'Stažení zatím není dostupné','Request alpha access':'Požádat o přístup k alfě','Built to earn trust.':'Navrženo pro získání důvěry.','Clear from the start.':'Jasné od začátku.'},
es:{'Private alpha in development':'Alfa privada en desarrollo','ORIN is an AI assistant built to understand your intent, work across your devices, and turn a conversation into action.':'ORIN es un asistente de IA creado para entender tu intención, trabajar entre tus dispositivos y convertir una conversación en acción.','ORIN brings conversation, files, apps, and practical computer help into one calm workspace.':'ORIN reúne conversaciones, archivos, aplicaciones y ayuda informática en un espacio de trabajo tranquilo.','Download not yet available':'Descarga aún no disponible','Request alpha access':'Solicitar acceso alfa','Built to earn trust.':'Creado para ganarse tu confianza.','Clear from the start.':'Claro desde el principio.'},
zh:{'Private alpha in development':'私人测试版开发中','ORIN is an AI assistant built to understand your intent, work across your devices, and turn a conversation into action.':'ORIN 是一款理解你的意图、跨设备协作并将对话转化为行动的 AI 助手。','ORIN brings conversation, files, apps, and practical computer help into one calm workspace.':'ORIN 将对话、文件、应用和实用电脑帮助整合到一个简洁的工作空间。','Download not yet available':'暂未开放下载','Request alpha access':'申请测试资格','Built to earn trust.':'为赢得信任而设计。','Clear from the start.':'从一开始就清晰。'},
ru:{'Private alpha in development':'Закрытая альфа в разработке','ORIN is an AI assistant built to understand your intent, work across your devices, and turn a conversation into action.':'ORIN — ИИ-помощник, который понимает ваши намерения, работает на разных устройствах и превращает разговор в действие.','ORIN brings conversation, files, apps, and practical computer help into one calm workspace.':'ORIN объединяет разговоры, файлы, приложения и помощь в одном спокойном рабочем пространстве.','Download not yet available':'Скачивание пока недоступно','Request alpha access':'Запросить доступ к альфе','Built to earn trust.':'Создано, чтобы заслужить доверие.','Clear from the start.':'Ясно с самого начала.'},
hi:{'Private alpha in development':'निजी अल्फ़ा निर्माणाधीन','ORIN is an AI assistant built to understand your intent, work across your devices, and turn a conversation into action.':'ORIN एक AI सहायक है जो आपकी मंशा समझता है, आपके उपकरणों पर काम करता है और बातचीत को कार्रवाई में बदलता है।','ORIN brings conversation, files, apps, and practical computer help into one calm workspace.':'ORIN बातचीत, फ़ाइलें, ऐप्स और व्यावहारिक सहायता को एक शांत कार्यस्थल में लाता है।','Download not yet available':'डाउनलोड अभी उपलब्ध नहीं','Request alpha access':'अल्फ़ा पहुँच माँगें','Built to earn trust.':'विश्वास अर्जित करने के लिए निर्मित।','Clear from the start.':'शुरुआत से स्पष्ट।'},
ar:{'Private alpha in development':'نسخة ألفا خاصة قيد التطوير','ORIN is an AI assistant built to understand your intent, work across your devices, and turn a conversation into action.':'ORIN مساعد ذكاء اصطناعي يفهم مقصدك ويعمل عبر أجهزتك ويحوّل المحادثة إلى فعل.','ORIN brings conversation, files, apps, and practical computer help into one calm workspace.':'يجمع ORIN المحادثات والملفات والتطبيقات والمساعدة العملية في مساحة عمل هادئة واحدة.','Download not yet available':'التنزيل غير متاح بعد','Request alpha access':'اطلب وصول ألفا','Built to earn trust.':'مصمم لكسب الثقة.','Clear from the start.':'واضح منذ البداية.'}
};
async function translatePhrase(text,code){
  const key='orin-i18n:'+code+':'+text;
  const cached=localStorage.getItem(key);if(cached)return cached;
  const url='https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='+encodeURIComponent(code)+'&dt=t&q='+encodeURIComponent(text);
  const response=await fetch(url);if(!response.ok)throw new Error('translation unavailable');
  const data=await response.json();const value=data[0].map(part=>part[0]).join('');
  if(value)localStorage.setItem(key,value);return value||text;
}
let languageRun=0;
async function setLanguage(code){
  const run=++languageRun,map={};if(T[code])source.forEach((s,i)=>map[s]=T[code][i]);Object.assign(map,longText[code]||{});
  root.lang=code;root.dir=code==='ar'?'rtl':'ltr';localStorage.setItem('orin-language',code);
  document.querySelectorAll('[data-language-choice]').forEach(b=>b.setAttribute('aria-checked',String(b.dataset.languageChoice===code)));
  const label=document.querySelector('.language-code');if(label)label.textContent=code.toUpperCase();
  const ui={de:['Farbpalette','Kobalt','Violett','Glut','Arktis'],cs:['Barevná paleta','Kobaltová','Fialová','Žhavá','Arktická'],es:['Paleta de colores','Cobalto','Violeta','Brasa','Ártico'],zh:['配色方案','钴蓝','紫罗兰','余烬','极光'],ru:['Цветовая палитра','Кобальт','Фиолетовый','Уголь','Арктика'],hi:['रंग पैलेट','कोबाल्ट','बैंगनी','अंगारा','आर्कटिक'],ar:['لوحة الألوان','كوبالت','بنفسجي','جمرة','قطبي']}[code]||['Color palette','Cobalt','Violet','Ember','Arctic'];
  const paletteTitle=document.querySelector('.palette-title');if(paletteTitle)paletteTitle.textContent=ui[0];
  document.querySelectorAll('.palette-option').forEach((option,index)=>{const text=[...option.childNodes].find(n=>n.nodeType===Node.TEXT_NODE&&n.nodeValue.trim());if(text)text.nodeValue=ui[index+1]});
  originalText.forEach(([node,en])=>node.nodeValue=node.nodeValue.replace(node.nodeValue.trim(),code==='en'?en:(map[en]||en)));
  if(code==='en'){document.body.classList.remove('translating');return}
  document.body.classList.add('translating');
  const missing=originalText.filter(([,en])=>!map[en]&&/[A-Za-z]/.test(en)&&en!=='ORIN');
  let cursor=0;
  const worker=async()=>{while(cursor<missing.length){const item=missing[cursor++],node=item[0],en=item[1];try{const value=await translatePhrase(en,code);if(run===languageRun)node.nodeValue=node.nodeValue.replace(node.nodeValue.trim(),value)}catch{if(run===languageRun)node.nodeValue=node.nodeValue.replace(node.nodeValue.trim(),en)}}};
  await Promise.all(Array.from({length:Math.min(5,missing.length)},worker));
  try{if(run===languageRun)document.title=code==='en'?originalTitle:await translatePhrase(originalTitle,code)}catch{}
  if(run===languageRun)document.body.classList.remove('translating');
}
const themeToggle=document.querySelector('[data-theme-toggle]');
const savedTheme=localStorage.getItem('orin-theme');
const savedPalette=localStorage.getItem('orin-palette')||'cobalt';
root.dataset.palette=savedPalette;
if(savedTheme)root.dataset.theme=savedTheme;
else if(matchMedia('(prefers-color-scheme: light)').matches)root.dataset.theme='light';

function syncTheme(){
  if(!themeToggle)return;
  const light=root.dataset.theme==='light';
  themeToggle.setAttribute('aria-label',light?'Switch to dark mode':'Switch to light mode');
  themeToggle.innerHTML=light
    ?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/><circle cx="12" cy="12" r="4"/></svg>'
    :'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z"/></svg>';
}
syncTheme();
themeToggle?.addEventListener('click',()=>{
  root.dataset.theme=root.dataset.theme==='light'?'dark':'light';
  localStorage.setItem('orin-theme',root.dataset.theme);
  syncTheme();
});

const palettes=[
  {id:'cobalt',name:'Cobalt',colors:['#8ea8ff','#b596ff']},
  {id:'violet',name:'Violet',colors:['#a78bfa','#e879f9']},
  {id:'ember',name:'Ember',colors:['#ff7a5c','#ffb45f']},
  {id:'arctic',name:'Arctic',colors:['#55d9e8','#73a7ff']}
];
const nav=document.querySelector('.nav-links');
if(nav&&themeToggle){
  const languageWrap=document.createElement('div');
  languageWrap.className='language-wrap';
  languageWrap.innerHTML='<button class="language-toggle" type="button" aria-label="Choose language" aria-expanded="false"><span class="language-code">EN</span><span aria-hidden="true">⌄</span></button><div class="language-popover" role="radiogroup" aria-label="Language">'+Object.entries(languages).map(([code,name])=>'<button class="language-option" type="button" role="radio" data-language-choice="'+code+'" aria-checked="false"><span>'+name+'</span><small>'+code.toUpperCase()+'</small></button>').join('')+'</div>';
  nav.insertBefore(languageWrap,themeToggle);
  const languageTrigger=languageWrap.querySelector('.language-toggle');
  const languagePopover=languageWrap.querySelector('.language-popover');
  const closeLanguage=()=>{languagePopover.classList.remove('open');languageTrigger.setAttribute('aria-expanded','false')};
  languageTrigger.addEventListener('click',e=>{e.stopPropagation();const open=languagePopover.classList.toggle('open');languageTrigger.setAttribute('aria-expanded',String(open))});
  languageWrap.querySelectorAll('[data-language-choice]').forEach(button=>button.addEventListener('click',()=>{setLanguage(button.dataset.languageChoice);closeLanguage()}));
  document.addEventListener('click',e=>{if(!languageWrap.contains(e.target))closeLanguage()});
  const wrap=document.createElement('div');
  wrap.className='palette-wrap';
  wrap.innerHTML='<button class="palette-toggle" type="button" aria-label="Choose color palette" aria-expanded="false"><i></i><i></i><i></i><i></i></button><div class="palette-popover" role="radiogroup" aria-label="Color palette"><div class="palette-title">Color palette</div>'+palettes.map(p=>'<button class="palette-option" type="button" role="radio" data-palette-choice="'+p.id+'" aria-checked="'+(p.id===savedPalette)+'"><span class="swatches"><i style="background:'+p.colors[0]+'"></i><i style="background:'+p.colors[1]+'"></i></span>'+p.name+'</button>').join('')+'</div>';
  nav.insertBefore(wrap,themeToggle);
  const trigger=wrap.querySelector('.palette-toggle');
  const popover=wrap.querySelector('.palette-popover');
  const close=()=>{popover.classList.remove('open');trigger.setAttribute('aria-expanded','false')};
  trigger.addEventListener('click',e=>{e.stopPropagation();const open=popover.classList.toggle('open');trigger.setAttribute('aria-expanded',String(open))});
  wrap.querySelectorAll('[data-palette-choice]').forEach(button=>button.addEventListener('click',()=>{
    root.dataset.palette=button.dataset.paletteChoice;
    localStorage.setItem('orin-palette',button.dataset.paletteChoice);
    wrap.querySelectorAll('[data-palette-choice]').forEach(item=>item.setAttribute('aria-checked',String(item===button)));
    close();
  }));
  document.addEventListener('click',e=>{if(!wrap.contains(e.target))close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}
setLanguage(localStorage.getItem('orin-language')||'en');

if(document.querySelector('#capabilities'))document.querySelector('.hero')?.insertAdjacentHTML('beforeend','<a class="scroll-indicator" href="#capabilities" aria-label="Scroll to capabilities"></a>');
if(document.querySelector('#capabilities')){
  const badge=document.querySelector('.hero .eyebrow');
  badge?.insertAdjacentHTML('beforebegin','<div class="hero-brandmark" aria-label="ORIN"><img src="orin-mark.svg" alt=""><span>ORIN</span></div>');
}
const revealItems=document.querySelectorAll('.section-head,.card,.quote-panel,.price-card,.contact-card,.prose>*,.cta h2,.cta p,.cta .actions');
revealItems.forEach((el,index)=>{el.classList.add('reveal');el.style.transitionDelay=(index%3)*70+'ms'});
if('IntersectionObserver'in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -5% 0px'});
  revealItems.forEach(el=>observer.observe(el));
}else revealItems.forEach(el=>el.classList.add('is-visible'));

if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('mousemove',event=>{
      const box=card.getBoundingClientRect();
      const x=(event.clientX-box.left)/box.width-.5;
      const y=(event.clientY-box.top)/box.height-.5;
      card.style.transform='perspective(900px) rotateX('+(-y*2.5)+'deg) rotateY('+(x*2.5)+'deg) translateY(-3px)';
    });
    card.addEventListener('mouseleave',()=>card.style.transform='');
  });
}
const enkrionUrl='../index.html';
const navLinks=document.querySelector('.nav-links');
if(navLinks&&!navLinks.querySelector('.enkrion-link')){
  const companyLink=document.createElement('a');
  companyLink.className='enkrion-link mobile-keep';
  companyLink.href=enkrionUrl;
  companyLink.innerHTML='Enkrion <span aria-hidden="true">↗</span>';
  const firstControl=navLinks.querySelector('.language-wrap,.palette-wrap,.theme-toggle');
  navLinks.insertBefore(companyLink,firstControl);
}
document.querySelectorAll('.footer-links').forEach(footerLinks=>{
  if(!footerLinks.querySelector('.enkrion-link')){
    const companyLink=document.createElement('a');
    companyLink.className='enkrion-link';
    companyLink.href=enkrionUrl;
    companyLink.innerHTML='Enkrion <span aria-hidden="true">↗</span>';
    footerLinks.prepend(companyLink);
  }
});
