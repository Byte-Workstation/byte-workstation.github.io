import{c as e}from"./app.f1185aa4.js";import{_ as n}from"./fig2.dbe54159.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";var t="/You-Dont-Know-JS-Yet/assets/fig3.6af53489.png";const s={},o=e(`<h1 id="chapter-2-illustrating-lexical-scope" tabindex="-1"><a class="header-anchor" href="#chapter-2-illustrating-lexical-scope" aria-hidden="true">#</a> Chapter 2: Illustrating Lexical Scope</h1><p>In Chapter 1, we explored how scope is determined during code compilation, a model called &quot;lexical scope.&quot; The term &quot;lexical&quot; refers to the first stage of compilation (lexing/parsing).</p><p>To properly <em>reason</em> about our programs, it&#39;s important to have a solid conceptual foundation of how scope works. If we rely on guesses and intuition, we may accidentally get the right answers some of the time, but many other times we&#39;re far off. This isn&#39;t a recipe for success.</p><p>Like way back in grade school math class, getting the right answer isn&#39;t enough if we don&#39;t show the correct steps to get there! We need to build accurate and helpful mental models as foundation moving forward.</p><p>This chapter will illustrate <em>scope</em> with several metaphors. The goal here is to <em>think</em> about how your program is handled by the JS engine in ways that more closely align with how the JS engine actually works.</p><h2 id="marbles-and-buckets-and-bubbles-oh-my" tabindex="-1"><a class="header-anchor" href="#marbles-and-buckets-and-bubbles-oh-my" aria-hidden="true">#</a> Marbles, and Buckets, and Bubbles... Oh My!</h2><p>One metaphor I&#39;ve found effective in understanding scope is sorting colored marbles into buckets of their matching color.</p><p>Imagine you come across a pile of marbles, and notice that all the marbles are colored red, blue, or green. Let&#39;s sort all the marbles, dropping the red ones into a red bucket, green into a green bucket, and blue into a blue bucket. After sorting, when you later need a green marble, you already know the green bucket is where to go to get it.</p><p>In this metaphor, the marbles are the variables in our program. The buckets are scopes (functions and blocks), which we just conceptually assign individual colors for our discussion purposes. The color of each marble is thus determined by which <em>color</em> scope we find the marble originally created in.</p><p>Let&#39;s annotate the running program example from Chapter 1 with scope color labels:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// outer/global scope: RED</span>

<span class="token keyword">var</span> students <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Kyle&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">73</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Suzy&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Frank&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Sarah&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token parameter">studentID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// function scope: BLUE</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> student <span class="token keyword">of</span> students<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// loop scope: GREEN</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>student<span class="token punctuation">.</span>id <span class="token operator">==</span> studentID<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> student<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> nextStudent <span class="token operator">=</span> <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token number">73</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nextStudent<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Suzy</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>We&#39;ve designated three scope colors with code comments: RED (outermost global scope), BLUE (scope of function <code>getStudentName(..)</code>), and GREEN (scope of/inside the <code>for</code> loop). But it still may be difficult to recognize the boundaries of these scope buckets when looking at a code listing.</p><p>Figure 2 helps visualize the boundaries of the scopes by drawing colored bubbles (aka, buckets) around each:</p><figure><img src="`+n+`" width="500" alt="Colored Scope Bubbles" align="center"><figcaption><em>Fig. 2: Colored Scope Bubbles</em></figcaption></figure><ol><li><p><strong>Bubble 1</strong> (RED) encompasses the global scope, which holds three identifiers/variables: <code>students</code> (line 1), <code>getStudentName</code> (line 8), and <code>nextStudent</code> (line 16).</p></li><li><p><strong>Bubble 2</strong> (BLUE) encompasses the scope of the function <code>getStudentName(..)</code> (line 8), which holds just one identifier/variable: the parameter <code>studentID</code> (line 8).</p></li><li><p><strong>Bubble 3</strong> (GREEN) encompasses the scope of the <code>for</code>-loop (line 9), which holds just one identifier/variable: <code>student</code> (line 9).</p></li></ol><table><thead><tr><th style="text-align:left;">NOTE:</th></tr></thead><tbody><tr><td style="text-align:left;">Technically, the parameter <code>studentID</code> is not exactly in the BLUE(2) scope. We&#39;ll unwind that confusion in &quot;Implied Scopes&quot; in Appendix A. For now, it&#39;s close enough to label <code>studentID</code> a BLUE(2) marble.</td></tr></tbody></table><p>Scope bubbles are determined during compilation based on where the functions/blocks of scope are written, the nesting inside each other, and so on. Each scope bubble is entirely contained within its parent scope bubble\u2014a scope is never partially in two different outer scopes.</p><p>Each marble (variable/identifier) is colored based on which bubble (bucket) it&#39;s declared in, not the color of the scope it may be accessed from (e.g., <code>students</code> on line 9 and <code>studentID</code> on line 10).</p><table><thead><tr><th style="text-align:left;">NOTE:</th></tr></thead><tbody><tr><td style="text-align:left;">Remember we asserted in Chapter 1 that <code>id</code>, <code>name</code>, and <code>log</code> are all properties, not variables; in other words, they&#39;re not marbles in buckets, so they don&#39;t get colored based on any the rules we&#39;re discussing in this book. To understand how such property accesses are handled, see the third book in the series, <em>Objects &amp; Classes</em>.</td></tr></tbody></table><p>As the JS engine processes a program (during compilation), and finds a declaration for a variable, it essentially asks, &quot;Which <em>color</em> scope (bubble or bucket) am I currently in?&quot; The variable is designated as that same <em>color</em>, meaning it belongs to that bucket/bubble.</p><p>The GREEN(3) bucket is wholly nested inside of the BLUE(2) bucket, and similarly the BLUE(2) bucket is wholly nested inside the RED(1) bucket. Scopes can nest inside each other as shown, to any depth of nesting as your program needs.</p><p>References (non-declarations) to variables/identifiers are allowed if there&#39;s a matching declaration either in the current scope, or any scope above/outside the current scope, but not with declarations from lower/nested scopes.</p><p>An expression in the RED(1) bucket only has access to RED(1) marbles, <strong>not</strong> BLUE(2) or GREEN(3). An expression in the BLUE(2) bucket can reference either BLUE(2) or RED(1) marbles, <strong>not</strong> GREEN(3). And an expression in the GREEN(3) bucket has access to RED(1), BLUE(2), and GREEN(3) marbles.</p><p>We can conceptualize the process of determining these non-declaration marble colors during runtime as a lookup. Since the <code>students</code> variable reference in the <code>for</code>-loop statement on line 9 is not a declaration, it has no color. So we ask the current BLUE(2) scope bucket if it has a marble matching that name. Since it doesn&#39;t, the lookup continues with the next outer/containing scope: RED(1). The RED(1) bucket has a marble of the name <code>students</code>, so the loop-statement&#39;s <code>students</code> variable reference is determined to be a RED(1) marble.</p><p>The <code>if (student.id == studentID)</code> statement on line 10 is similarly determined to reference a GREEN(3) marble named <code>student</code> and a BLUE(2) marble <code>studentID</code>.</p><table><thead><tr><th style="text-align:left;">NOTE:</th></tr></thead><tbody><tr><td style="text-align:left;">The JS engine doesn&#39;t generally determine these marble colors during runtime; the &quot;lookup&quot; here is a rhetorical device to help you understand the concepts. During compilation, most or all variable references will match already-known scope buckets, so their color is already determined, and stored with each marble reference to avoid unnecessary lookups as the program runs. More on this nuance in Chapter 3.</td></tr></tbody></table><p>The key take-aways from marbles &amp; buckets (and bubbles!):</p><ul><li><p>Variables are declared in specific scopes, which can be thought of as colored marbles from matching-color buckets.</p></li><li><p>Any variable reference that appears in the scope where it was declared, or appears in any deeper nested scopes, will be labeled a marble of that same color\u2014unless an intervening scope &quot;shadows&quot; the variable declaration; see &quot;Shadowing&quot; in Chapter 3.</p></li><li><p>The determination of colored buckets, and the marbles they contain, happens during compilation. This information is used for variable (marble color) &quot;lookups&quot; during code execution.</p></li></ul><h2 id="a-conversation-among-friends" tabindex="-1"><a class="header-anchor" href="#a-conversation-among-friends" aria-hidden="true">#</a> A Conversation Among Friends</h2><p>Another useful metaphor for the process of analyzing variables and the scopes they come from is to imagine various conversations that occur inside the engine as code is processed and then executed. We can &quot;listen in&quot; on these conversations to get a better conceptual foundation for how scopes work.</p><p>Let&#39;s now meet the members of the JS engine that will have conversations as they process our program:</p><ul><li><p><em>Engine</em>: responsible for start-to-finish compilation and execution of our JavaScript program.</p></li><li><p><em>Compiler</em>: one of <em>Engine</em>&#39;s friends; handles all the dirty work of parsing and code-generation (see previous section).</p></li><li><p><em>Scope Manager</em>: another friend of <em>Engine</em>; collects and maintains a lookup list of all the declared variables/identifiers, and enforces a set of rules as to how these are accessible to currently executing code.</p></li></ul><p>For you to <em>fully understand</em> how JavaScript works, you need to begin to <em>think</em> like <em>Engine</em> (and friends) think, ask the questions they ask, and answer their questions likewise.</p><p>To explore these conversations, recall again our running program example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> students <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Kyle&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">73</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Suzy&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Frank&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Sarah&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token parameter">studentID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> student <span class="token keyword">of</span> students<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>student<span class="token punctuation">.</span>id <span class="token operator">==</span> studentID<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> student<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> nextStudent <span class="token operator">=</span> <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token number">73</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nextStudent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Suzy</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Let&#39;s examine how JS is going to process that program, specifically starting with the first statement. The array and its contents are just basic JS value literals (and thus unaffected by any scoping concerns), so our focus here will be on the <code>var students = [ .. ]</code> declaration and initialization-assignment parts.</p><p>We typically think of that as a single statement, but that&#39;s not how our friend <em>Engine</em> sees it. In fact, JS treats these as two distinct operations, one which <em>Compiler</em> will handle during compilation, and the other which <em>Engine</em> will handle during execution.</p><p>The first thing <em>Compiler</em> will do with this program is perform lexing to break it down into tokens, which it will then parse into a tree (AST).</p><p>Once <em>Compiler</em> gets to code generation, there&#39;s more detail to consider than may be obvious. A reasonable assumption would be that <em>Compiler</em> will produce code for the first statement such as: &quot;Allocate memory for a variable, label it <code>students</code>, then stick a reference to the array into that variable.&quot; But that&#39;s not the whole story.</p><p>Here&#39;s the steps <em>Compiler</em> will follow to handle that statement:</p><ol><li><p>Encountering <code>var students</code>, <em>Compiler</em> will ask <em>Scope Manager</em> to see if a variable named <code>students</code> already exists for that particular scope bucket. If so, <em>Compiler</em> would ignore this declaration and move on. Otherwise, <em>Compiler</em> will produce code that (at execution time) asks <em>Scope Manager</em> to create a new variable called <code>students</code> in that scope bucket.</p></li><li><p><em>Compiler</em> then produces code for <em>Engine</em> to later execute, to handle the <code>students = []</code> assignment. The code <em>Engine</em> runs will first ask <em>Scope Manager</em> if there is a variable called <code>students</code> accessible in the current scope bucket. If not, <em>Engine</em> keeps looking elsewhere (see &quot;Nested Scope&quot; below). Once <em>Engine</em> finds a variable, it assigns the reference of the <code>[ .. ]</code> array to it.</p></li></ol><p>In conversational form, the first phase of compilation for the program might play out between <em>Compiler</em> and <em>Scope Manager</em> like this:</p><blockquote><p><em><strong>Compiler</strong></em>: Hey, <em>Scope Manager</em> (of the global scope), I found a formal declaration for an identifier called <code>students</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Nope, never heard of it, so I just created it for you.</p></blockquote><blockquote><p><em><strong>Compiler</strong></em>: Hey, <em>Scope Manager</em>, I found a formal declaration for an identifier called <code>getStudentName</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Nope, but I just created it for you.</p></blockquote><blockquote><p><em><strong>Compiler</strong></em>: Hey, <em>Scope Manager</em>, <code>getStudentName</code> points to a function, so we need a new scope bucket.</p></blockquote><blockquote><p><em><strong>(Function) Scope Manager</strong></em>: Got it, here&#39;s the scope bucket.</p></blockquote><blockquote><p><em><strong>Compiler</strong></em>: Hey, <em>Scope Manager</em> (of the function), I found a formal parameter declaration for <code>studentID</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Function) Scope Manager</strong></em>: Nope, but now it&#39;s created in this scope.</p></blockquote><blockquote><p><em><strong>Compiler</strong></em>: Hey, <em>Scope Manager</em> (of the function), I found a <code>for</code>-loop that will need its own scope bucket.</p></blockquote><blockquote><p>...</p></blockquote><p>The conversation is a question-and-answer exchange, where <strong>Compiler</strong> asks the current <em>Scope Manager</em> if an encountered identifier declaration has already been encountered. If &quot;no,&quot; <em>Scope Manager</em> creates that variable in that scope. If the answer is &quot;yes,&quot; then it&#39;s effectively skipped over since there&#39;s nothing more for that <em>Scope Manager</em> to do.</p><p><em>Compiler</em> also signals when it runs across functions or block scopes, so that a new scope bucket and <em>Scope Manager</em> can be instantiated.</p><p>Later, when it comes to execution of the program, the conversation will shift to <em>Engine</em> and <em>Scope Manager</em>, and might play out like this:</p><blockquote><p><em><strong>Engine</strong></em>: Hey, <em>Scope Manager</em> (of the global scope), before we begin, can you look up the identifier <code>getStudentName</code> so I can assign this function to it?</p></blockquote><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Yep, here&#39;s the variable.</p></blockquote><blockquote><p><em><strong>Engine</strong></em>: Hey, <em>Scope Manager</em>, I found a <em>target</em> reference for <code>students</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Yes, it was formally declared for this scope, so here it is.</p></blockquote><blockquote><p><em><strong>Engine</strong></em>: Thanks, I&#39;m initializing <code>students</code> to <code>undefined</code>, so it&#39;s ready to use.</p></blockquote><blockquote><p>Hey, <em>Scope Manager</em> (of the global scope), I found a <em>target</em> reference for <code>nextStudent</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Yes, it was formally declared for this scope, so here it is.</p></blockquote><blockquote><p><em><strong>Engine</strong></em>: Thanks, I&#39;m initializing <code>nextStudent</code> to <code>undefined</code>, so it&#39;s ready to use.</p></blockquote><blockquote><p>Hey, <em>Scope Manager</em> (of the global scope), I found a <em>source</em> reference for <code>getStudentName</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Yes, it was formally declared for this scope. Here it is.</p></blockquote><blockquote><p><em><strong>Engine</strong></em>: Great, the value in <code>getStudentName</code> is a function, so I&#39;m going to execute it.</p></blockquote><blockquote><p><em><strong>Engine</strong></em>: Hey, <em>Scope Manager</em>, now we need to instantiate the function&#39;s scope.</p></blockquote><blockquote><p>...</p></blockquote><p>This conversation is another question-and-answer exchange, where <em>Engine</em> first asks the current <em>Scope Manager</em> to look up the hoisted <code>getStudentName</code> identifier, so as to associate the function with it. <em>Engine</em> then proceeds to ask <em>Scope Manager</em> about the <em>target</em> reference for <code>students</code>, and so on.</p><p>To review and summarize how a statement like <code>var students = [ .. ]</code> is processed, in two distinct steps:</p><ol><li><p><em>Compiler</em> sets up the declaration of the scope variable (since it wasn&#39;t previously declared in the current scope).</p></li><li><p>While <em>Engine</em> is executing, to process the assignment part of the statement, <em>Engine</em> asks <em>Scope Manager</em> to look up the variable, initializes it to <code>undefined</code> so it&#39;s ready to use, and then assigns the array value to it.</p></li></ol><h2 id="nested-scope" tabindex="-1"><a class="header-anchor" href="#nested-scope" aria-hidden="true">#</a> Nested Scope</h2><p>When it comes time to execute the <code>getStudentName()</code> function, <em>Engine</em> asks for a <em>Scope Manager</em> instance for that function&#39;s scope, and it will then proceed to look up the parameter (<code>studentID</code>) to assign the <code>73</code> argument value to, and so on.</p><p>The function scope for <code>getStudentName(..)</code> is nested inside the global scope. The block scope of the <code>for</code>-loop is similarly nested inside that function scope. Scopes can be lexically nested to any arbitrary depth as the program defines.</p><p>Each scope gets its own <em>Scope Manager</em> instance each time that scope is executed (one or more times). Each scope automatically has all its identifiers registered at the start of the scope being executed (this is called &quot;variable hoisting&quot;; see Chapter 5).</p><p>At the beginning of a scope, if any identifier came from a <code>function</code> declaration, that variable is automatically initialized to its associated function reference. And if any identifier came from a <code>var</code> declaration (as opposed to <code>let</code>/<code>const</code>), that variable is automatically initialized to <code>undefined</code> so that it can be used; otherwise, the variable remains uninitialized (aka, in its &quot;TDZ,&quot; see Chapter 5) and cannot be used until its full declaration-and-initialization are executed.</p><p>In the <code>for (let student of students) {</code> statement, <code>students</code> is a <em>source</em> reference that must be looked up. But how will that lookup be handled, since the scope of the function will not find such an identifier?</p><p>To explain, let&#39;s imagine that bit of conversation playing out like this:</p><blockquote><p><em><strong>Engine</strong></em>: Hey, <em>Scope Manager</em> (for the function), I have a <em>source</em> reference for <code>students</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Function) Scope Manager</strong></em>: Nope, never heard of it. Try the next outer scope.</p></blockquote><blockquote><p><em><strong>Engine</strong></em>: Hey, <em>Scope Manager</em> (for the global scope), I have a <em>source</em> reference for <code>students</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Yep, it was formally declared, here it is.</p></blockquote><blockquote><p>...</p></blockquote><p>One of the key aspects of lexical scope is that any time an identifier reference cannot be found in the current scope, the next outer scope in the nesting is consulted; that process is repeated until an answer is found or there are no more scopes to consult.</p><h3 id="lookup-failures" tabindex="-1"><a class="header-anchor" href="#lookup-failures" aria-hidden="true">#</a> Lookup Failures</h3><p>When <em>Engine</em> exhausts all <em>lexically available</em> scopes (moving outward) and still cannot resolve the lookup of an identifier, an error condition then exists. However, depending on the mode of the program (strict-mode or not) and the role of the variable (i.e., <em>target</em> vs. <em>source</em>; see Chapter 1), this error condition will be handled differently.</p><h4 id="undefined-mess" tabindex="-1"><a class="header-anchor" href="#undefined-mess" aria-hidden="true">#</a> Undefined Mess</h4><p>If the variable is a <em>source</em>, an unresolved identifier lookup is considered an undeclared (unknown, missing) variable, which always results in a <code>ReferenceError</code> being thrown. Also, if the variable is a <em>target</em>, and the code at that moment is running in strict-mode, the variable is considered undeclared and similarly throws a <code>ReferenceError</code>.</p><p>The error message for an undeclared variable condition, in most JS environments, will look like, &quot;Reference Error: XYZ is not defined.&quot; The phrase &quot;not defined&quot; seems almost identical to the word &quot;undefined,&quot; as far as the English language goes. But these two are very different in JS, and this error message unfortunately creates a persistent confusion.</p><p>&quot;Not defined&quot; really means &quot;not declared&quot;\u2014or, rather, &quot;undeclared,&quot; as in a variable that has no matching formal declaration in any <em>lexically available</em> scope. By contrast, &quot;undefined&quot; really means a variable was found (declared), but the variable otherwise has no other value in it at the moment, so it defaults to the <code>undefined</code> value.</p><p>To perpetuate the confusion even further, JS&#39;s <code>typeof</code> operator returns the string <code>&quot;undefined&quot;</code> for variable references in either state:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> studentName<span class="token punctuation">;</span>
<span class="token keyword">typeof</span> studentName<span class="token punctuation">;</span>     <span class="token comment">// &quot;undefined&quot;</span>

<span class="token keyword">typeof</span> doesntExist<span class="token punctuation">;</span>     <span class="token comment">// &quot;undefined&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>These two variable references are in very different conditions, but JS sure does muddy the waters. The terminology mess is confusing and terribly unfortunate. Unfortunately, JS developers just have to pay close attention to not mix up <em>which kind</em> of &quot;undefined&quot; they&#39;re dealing with!</p><h4 id="global-what" tabindex="-1"><a class="header-anchor" href="#global-what" aria-hidden="true">#</a> Global... What!?</h4><p>If the variable is a <em>target</em> and strict-mode is not in effect, a confusing and surprising legacy behavior kicks in. The troublesome outcome is that the global scope&#39;s <em>Scope Manager</em> will just create an <strong>accidental global variable</strong> to fulfill that target assignment!</p><p>Consider:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assignment to an undeclared variable :(</span>
    nextStudent <span class="token operator">=</span> <span class="token string">&quot;Suzy&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nextStudent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;Suzy&quot; -- oops, an accidental-global variable!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Here&#39;s how that <em>conversation</em> will proceed:</p><blockquote><p><em><strong>Engine</strong></em>: Hey, <em>Scope Manager</em> (for the function), I have a <em>target</em> reference for <code>nextStudent</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Function) Scope Manager</strong></em>: Nope, never heard of it. Try the next outer scope.</p></blockquote><blockquote><p><em><strong>Engine</strong></em>: Hey, <em>Scope Manager</em> (for the global scope), I have a <em>target</em> reference for <code>nextStudent</code>, ever heard of it?</p></blockquote><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Nope, but since we&#39;re in non-strict-mode, I helped you out and just created a global variable for you, here it is!</p></blockquote><p>Yuck.</p><p>This sort of accident (almost certain to lead to bugs eventually) is a great example of the beneficial protections offered by strict-mode, and why it&#39;s such a bad idea <em>not</em> to be using strict-mode. In strict-mode, the <em><strong>Global Scope Manager</strong></em> would instead have responded:</p><blockquote><p><em><strong>(Global) Scope Manager</strong></em>: Nope, never heard of it. Sorry, I&#39;ve got to throw a <code>ReferenceError</code>.</p></blockquote><p>Assigning to a never-declared variable <em>is</em> an error, so it&#39;s right that we would receive a <code>ReferenceError</code> here.</p><p>Never rely on accidental global variables. Always use strict-mode, and always formally declare your variables. You&#39;ll then get a helpful <code>ReferenceError</code> if you ever mistakenly try to assign to a not-declared variable.</p><h3 id="building-on-metaphors" tabindex="-1"><a class="header-anchor" href="#building-on-metaphors" aria-hidden="true">#</a> Building On Metaphors</h3><p>To visualize nested scope resolution, I prefer yet another metaphor, an office building, as in Figure 3:</p><figure><img src="`+t+'" width="250" alt="Scope &quot;Building&quot;" align="center"><figcaption><em>Fig. 3: Scope &quot;Building&quot;</em></figcaption><br><br></figure><p>The building represents our program&#39;s nested scope collection. The first floor of the building represents the currently executing scope. The top level of the building is the global scope.</p><p>You resolve a <em>target</em> or <em>source</em> variable reference by first looking on the current floor, and if you don&#39;t find it, taking the elevator to the next floor (i.e., an outer scope), looking there, then the next, and so on. Once you get to the top floor (the global scope), you either find what you&#39;re looking for, or you don&#39;t. But you have to stop regardless.</p><h2 id="continue-the-conversation" tabindex="-1"><a class="header-anchor" href="#continue-the-conversation" aria-hidden="true">#</a> Continue the Conversation</h2><p>By this point, you should be developing richer mental models for what scope is and how the JS engine determines and uses it from your code.</p><p>Before <em>continuing</em>, go find some code in one of your projects and run through these conversations. Seriously, actually speak out loud. Find a friend and practice each role with them. If either of you find yourself confused or tripped up, spend more time reviewing this material.</p><p>As we move (up) to the next (outer) chapter, we&#39;ll explore how the lexical scopes of a program are connected in a chain.</p>',116);function r(i,p){return o}var d=a(s,[["render",r]]);export{d as default};
