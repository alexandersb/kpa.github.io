import{_ as s,o as a,c as i,a6 as t}from"./chunks/framework.DnJfIKBR.js";const g=JSON.parse('{"title":"PVE设置","description":"","frontmatter":{"title":"PVE设置","layout":"doc","navbar":true,"sidebar":true,"aside":false},"headers":[],"relativePath":"post/PVE/PVE设置.md","filePath":"post/PVE/PVE设置.md","lastUpdated":1739793876000}'),n={name:"post/PVE/PVE设置.md"},e=t(`<h1 id="_1-pve设置" tabindex="-1">1.PVE设置 <a class="header-anchor" href="#_1-pve设置" aria-label="Permalink to &quot;1.PVE设置&quot;">​</a></h1><p>去node界面的Disk选项的LVM-thin页面删除Optane上的data卷</p><p><code>lvresize --extents +100%FREE --resizefs pve/root</code></p><p><code>resize2fs /dev/mapper/pve-root</code></p><h1 id="ubuntu设置" tabindex="-1">ubuntu设置 <a class="header-anchor" href="#ubuntu设置" aria-label="Permalink to &quot;ubuntu设置&quot;">​</a></h1><p>安装1panel管理</p><p>1.配置ssh</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装网络工具</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> net-tools</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看本机IP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ifconfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#配置root密码    输入2次密码就行了</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span></span></code></pre></div><p>2.在1panel的<strong>ssh管理</strong>中添加 <strong>PermitRootLogin yes</strong></p>`,9),p=[e];function l(h,k,r,d,o,F){return a(),i("div",null,p)}const u=s(n,[["render",l]]);export{g as __pageData,u as default};
