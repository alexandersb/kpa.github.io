import{_ as t,o as d,c as e,a6 as a}from"./chunks/framework.DnJfIKBR.js";const u=JSON.parse('{"title":"iptables命令速查","description":"","frontmatter":{"title":"iptables命令速查","layout":"doc","navbar":true,"sidebar":true,"aside":false},"headers":[],"relativePath":"post/网络/iptables命令速查.md","filePath":"post/网络/iptables命令速查.md","lastUpdated":1739793876000}'),o={name:"post/网络/iptables命令速查.md"},s=a(`<h1 id="iptables-v1-8-4-legacy-命令整理" tabindex="-1">iptables v1.8.4 (legacy) 命令整理 <a class="header-anchor" href="#iptables-v1-8-4-legacy-命令整理" aria-label="Permalink to &quot;iptables v1.8.4 (legacy) 命令整理&quot;">​</a></h1><h2 id="表-tables" tabindex="-1">表（Tables） <a class="header-anchor" href="#表-tables" aria-label="Permalink to &quot;表（Tables）&quot;">​</a></h2><table><thead><tr><th>表名</th><th>描述</th></tr></thead><tbody><tr><td><code>filter</code></td><td>默认表，用于过滤数据包（INPUT/OUTPUT/FORWARD）</td></tr><tr><td><code>nat</code></td><td>网络地址转换（NAT）表（PREROUTING/POSTROUTING）</td></tr><tr><td><code>mangle</code></td><td>修改数据包头（如TTL、TOS）的表</td></tr><tr><td><code>raw</code></td><td>连接跟踪豁免或优先级设置的表</td></tr></tbody></table><hr><h2 id="命令-commands" tabindex="-1">命令（Commands） <a class="header-anchor" href="#命令-commands" aria-label="Permalink to &quot;命令（Commands）&quot;">​</a></h2><h3 id="规则管理" tabindex="-1">规则管理 <a class="header-anchor" href="#规则管理" aria-label="Permalink to &quot;规则管理&quot;">​</a></h3><table><thead><tr><th>命令</th><th>缩写</th><th>描述</th></tr></thead><tbody><tr><td><code>--append</code></td><td><code>-A</code></td><td>追加规则到链的末尾</td></tr><tr><td><code>--check</code></td><td><code>-C</code></td><td>检查规则是否存在</td></tr><tr><td><code>--delete</code></td><td><code>-D</code></td><td>删除链中的规则（按序号或规则内容）</td></tr><tr><td><code>--insert</code></td><td><code>-I</code></td><td>插入规则到链的指定位置（默认头部）</td></tr><tr><td><code>--replace</code></td><td><code>-R</code></td><td>替换链中的指定规则</td></tr></tbody></table><h3 id="链管理" tabindex="-1">链管理 <a class="header-anchor" href="#链管理" aria-label="Permalink to &quot;链管理&quot;">​</a></h3><table><thead><tr><th>命令</th><th>缩写</th><th>描述</th></tr></thead><tbody><tr><td><code>--new-chain</code></td><td><code>-N</code></td><td>创建自定义链</td></tr><tr><td><code>--delete-chain</code></td><td><code>-X</code></td><td>删除空的自定义链</td></tr><tr><td><code>--policy</code></td><td><code>-P</code></td><td>设置链的默认策略（ACCEPT/DROP）</td></tr><tr><td><code>--flush</code></td><td><code>-F</code></td><td>清空链中的所有规则</td></tr><tr><td><code>--rename-chain</code></td><td><code>-E</code></td><td>重命名链</td></tr></tbody></table><h3 id="查看与列表" tabindex="-1">查看与列表 <a class="header-anchor" href="#查看与列表" aria-label="Permalink to &quot;查看与列表&quot;">​</a></h3><table><thead><tr><th>命令</th><th>缩写</th><th>描述</th></tr></thead><tbody><tr><td><code>--list</code></td><td><code>-L</code></td><td>列出链中的规则</td></tr><tr><td><code>--list-rules</code></td><td><code>-S</code></td><td>以规则格式输出（用于备份/恢复）</td></tr><tr><td><code>--line-numbers</code></td><td></td><td>显示规则的行号（配合 <code>-L</code> 使用）</td></tr></tbody></table><hr><h2 id="通用选项-options" tabindex="-1">通用选项（Options） <a class="header-anchor" href="#通用选项-options" aria-label="Permalink to &quot;通用选项（Options）&quot;">​</a></h2><table><thead><tr><th>选项</th><th>描述</th></tr></thead><tbody><tr><td><code>--protocol</code></td><td><code>-p</code> 指定协议（如 <code>tcp</code>, <code>udp</code>, <code>icmp</code>）</td></tr><tr><td><code>--source</code></td><td><code>-s</code> 源IP地址或网段</td></tr><tr><td><code>--destination</code></td><td><code>-d</code> 目标IP地址或网段</td></tr><tr><td><code>--in-interface</code></td><td><code>-i</code> 输入网卡（如 <code>eth0</code>）</td></tr><tr><td><code>--out-interface</code></td><td><code>-o</code> 输出网卡</td></tr><tr><td><code>--jump</code></td><td><code>-j</code> 指定目标动作（如 <code>ACCEPT</code>, <code>DROP</code>）</td></tr><tr><td><code>--goto</code></td><td><code>-g</code> 跳转到指定链继续处理</td></tr><tr><td><code>--match</code></td><td><code>-m</code> 加载扩展模块（如 <code>state</code>, <code>multiport</code>）</td></tr><tr><td><code>--numeric</code></td><td><code>-n</code> 以数字格式显示IP和端口</td></tr><tr><td><code>--verbose</code></td><td><code>-v</code> 显示详细信息</td></tr></tbody></table><hr><h2 id="常用匹配模块-match-modules" tabindex="-1">常用匹配模块（Match Modules） <a class="header-anchor" href="#常用匹配模块-match-modules" aria-label="Permalink to &quot;常用匹配模块（Match Modules）&quot;">​</a></h2><h3 id="基础匹配" tabindex="-1">基础匹配 <a class="header-anchor" href="#基础匹配" aria-label="Permalink to &quot;基础匹配&quot;">​</a></h3><table><thead><tr><th>模块</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>tcp</code></td><td><code>--sport</code>, <code>--dport</code></td><td>匹配TCP源/目标端口</td></tr><tr><td><code>udp</code></td><td><code>--sport</code>, <code>--dport</code></td><td>匹配UDP源/目标端口</td></tr><tr><td><code>icmp</code></td><td><code>--icmp-type</code></td><td>匹配ICMP类型</td></tr></tbody></table><h3 id="扩展匹配" tabindex="-1">扩展匹配 <a class="header-anchor" href="#扩展匹配" aria-label="Permalink to &quot;扩展匹配&quot;">​</a></h3><table><thead><tr><th>模块</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td><code>state</code></td><td><code>--state</code></td><td>匹配连接状态（NEW/ESTABLISHED等）</td></tr><tr><td><code>multiport</code></td><td><code>--sports</code>, <code>--dports</code></td><td>匹配多个端口（逗号分隔或范围）</td></tr><tr><td><code>limit</code></td><td><code>--limit</code></td><td>限制规则匹配速率（如 <code>5/second</code>）</td></tr><tr><td><code>mac</code></td><td><code>--mac-source</code></td><td>匹配源MAC地址</td></tr></tbody></table><hr><h2 id="目标动作-targets" tabindex="-1">目标动作（Targets） <a class="header-anchor" href="#目标动作-targets" aria-label="Permalink to &quot;目标动作（Targets）&quot;">​</a></h2><h3 id="基础动作" tabindex="-1">基础动作 <a class="header-anchor" href="#基础动作" aria-label="Permalink to &quot;基础动作&quot;">​</a></h3><table><thead><tr><th>目标</th><th>描述</th></tr></thead><tbody><tr><td><code>ACCEPT</code></td><td>允许数据包通过</td></tr><tr><td><code>DROP</code></td><td>丢弃数据包</td></tr><tr><td><code>REJECT</code></td><td>拒绝数据包并返回错误（如ICMP不可达）</td></tr><tr><td><code>RETURN</code></td><td>返回到调用链继续处理</td></tr></tbody></table><h3 id="nat-相关" tabindex="-1">NAT 相关 <a class="header-anchor" href="#nat-相关" aria-label="Permalink to &quot;NAT 相关&quot;">​</a></h3><table><thead><tr><th>目标</th><th>描述</th></tr></thead><tbody><tr><td><code>SNAT</code></td><td>源地址转换（需指定 <code>--to-source</code>）</td></tr><tr><td><code>DNAT</code></td><td>目标地址转换（需指定 <code>--to-destination</code>）</td></tr><tr><td><code>MASQUERADE</code></td><td>自动SNAT（适用于动态IP）</td></tr></tbody></table><h3 id="其他扩展" tabindex="-1">其他扩展 <a class="header-anchor" href="#其他扩展" aria-label="Permalink to &quot;其他扩展&quot;">​</a></h3><table><thead><tr><th>目标</th><th>描述</th></tr></thead><tbody><tr><td><code>LOG</code></td><td>记录日志（可指定前缀和日志级别）</td></tr><tr><td><code>REDIRECT</code></td><td>端口重定向</td></tr></tbody></table><hr><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 允许来自 192.168.1.0/24 的 SSH 连接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.1.0/24</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拒绝所有其他入站流量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> INPUT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DROP</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示 NAT 表规则（带行号）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --line-numbers</span></span></code></pre></div>`,31),c=[s];function r(i,h,l,n,p,b){return d(),e("div",null,c)}const m=t(o,[["render",r]]);export{u as __pageData,m as default};
