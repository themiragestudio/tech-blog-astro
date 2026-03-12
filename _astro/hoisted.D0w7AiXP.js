import"./hoisted.BD515g-k.js";import"./hoisted.4hNS936Z.js";document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll("article h2, article h3");if(i.length>2){const r=document.createElement("div");r.className="toc-container bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-10 border border-gray-200 dark:border-gray-800";const o=document.createElement("h3");o.className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",o.innerHTML=`
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        目录
      `;const n=document.createElement("ol");n.className="space-y-2 text-sm",i.forEach((e,a)=>{e.id||(e.id=`heading-${a}`);const c=document.createElement("li"),d=e.tagName==="H3"?"ml-4":"";c.innerHTML=`
          <a href="#${e.id}" class="text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-light transition-colors ${d} flex items-center gap-2">
            <span class="text-gray-400 dark:text-gray-600">${a+1}.</span>
            ${e.textContent}
          </a>
        `,n.appendChild(c)}),r.appendChild(o),r.appendChild(n);const t=document.querySelector("article header");t&&t.parentNode&&t.parentNode.insertBefore(r,t.nextSibling)}document.querySelectorAll('article a[href^="#"]').forEach(r=>{r.addEventListener("click",function(o){o.preventDefault();const n=this.getAttribute("href");if(n==="#")return;const t=document.querySelector(n);if(t){const e=document.querySelector("nav"),a=e?e.offsetHeight:0,c=t.getBoundingClientRect().top+window.pageYOffset-a-20;window.scrollTo({top:c,behavior:"smooth"})}})})});
