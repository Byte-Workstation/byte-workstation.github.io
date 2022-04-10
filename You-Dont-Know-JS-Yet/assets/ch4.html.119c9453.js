import{_ as e,c as o}from"./app.cb0ee471.js";const t={},a=o('<h1 id="chapter-4-the-bigger-picture" tabindex="-1"><a class="header-anchor" href="#chapter-4-the-bigger-picture" aria-hidden="true">#</a> Chapter 4: The Bigger Picture</h1><p>This book surveys what you need to be aware of as you <em>get started</em> with JS. The goal is to fill in gaps that readers newer to JS might have tripped over in their early encounters with the language. I also hope that we&#39;ve hinted at enough deeper detail throughout to pique your curiosity to want to dig more into the language.</p><p>The rest of the books in this series are where we will unpack all of the rest of the language, in far greater detail than we could have done in a few brief chapters here.</p><p>Remember to take your time, though. Rather than rushing onto the next book in an attempt to churn through all the books expediently, spend some time going back over the material in this book. Spend some more time looking through code in your current projects, and comparing what you see to what&#39;s been discussed so far.</p><p>When you&#39;re ready, this final chapter divides the organization of the JS language into three main pillars, then offers a brief roadmap of what to expect from the rest of the book series, and how I suggest you proceed. Also, don&#39;t skip the appendices, especially Appendix B, &quot;Practice, Practice, Practice!&quot;.</p><h2 id="pillar-1-scope-and-closure" tabindex="-1"><a class="header-anchor" href="#pillar-1-scope-and-closure" aria-hidden="true">#</a> Pillar 1: Scope and Closure</h2><p>The organization of variables into units of scope (functions, blocks) is one of the most foundational characteristics of any language; perhaps no other characteristic has a greater impact on how programs behave.</p><p>Scopes are like buckets, and variables are like marbles you put into those buckets. The scope model of a language is like the rules that help you determine which color marbles go in which matching-color buckets.</p><p>Scopes nest inside each other, and for any given expression or statement, only variables at that level of scope nesting, or in higher/outer scopes, are accessible; variables from lower/inner scopes are hidden and inaccessible.</p><p>This is how scopes behave in most languages, which is called lexical scope. The scope unit boundaries, and how variables are organized in them, is determined at the time the program is parsed (compiled). In other words, it&#39;s an author-time decision: where you locate a function/scope in the program determines what the scope structure of that part of the program will be.</p><p>JS is lexically scoped, though many claim it isn&#39;t, because of two particular characteristics of its model that are not present in other lexically scoped languages.</p><p>The first is commonly called <em>hoisting</em>: when all variables declared anywhere in a scope are treated as if they&#39;re declared at the beginning of the scope. The other is that <code>var</code>-declared variables are function scoped, even if they appear inside a block.</p><p>Neither hoisting nor function-scoped <code>var</code> are sufficient to back the claim that JS is not lexically scoped. <code>let</code>/<code>const</code> declarations have a peculiar error behavior called the &quot;Temporal Dead Zone&quot; (TDZ) which results in observable but unusable variables. Though TDZ can be strange to encounter, it&#39;s <em>also</em> not an invalidation of lexical scoping. All of these are just unique parts of the language that should be learned and understood by all JS developers.</p><p>Closure is a natural result of lexical scope when the language has functions as first-class values, as JS does. When a function makes reference to variables from an outer scope, and that function is passed around as a value and executed in other scopes, it maintains access to its original scope variables; this is closure.</p><p>Across all of programming, but especially in JS, closure drives many of the most important programming patterns, including modules. As I see it, modules are as <em>with the grain</em> as you can get, when it comes to code organization in JS.</p><p>To dig further into scope, closures, and how modules work, read Book 2, <em>Scope &amp; Closures</em>.</p><h2 id="pillar-2-prototypes" tabindex="-1"><a class="header-anchor" href="#pillar-2-prototypes" aria-hidden="true">#</a> Pillar 2: Prototypes</h2><p>The second pillar of the language is the prototypes system. We covered this topic in-depth in Chapter 3 (&quot;Prototypes&quot;), but I just want to make a few more comments about its importance.</p><p>JS is one of very few languages where you have the option to create objects directly and explicitly, without first defining their structure in a class.</p><p>For many years, people implemented the class design pattern on top of prototypes\u2014so-called &quot;prototypal inheritance&quot; (see Appendix A, &quot;Prototypal &#39;Classes&#39;&quot;)\u2014and then with the advent of ES6&#39;s <code>class</code> keyword, the language doubled-down on its inclination toward OO/class-style programming.</p><p>But I think that focus has obscured the beauty and power of the prototype system: the ability for two objects to simply connect with each other and cooperate dynamically (during function/method execution) through sharing a <code>this</code> context.</p><p>Classes are just one pattern you can build on top of such power. But another approach, in a very different direction, is to simply embrace objects as objects, forget classes altogether, and let objects cooperate through the prototype chain. This is called <em>behavior delegation</em>. I think delegation is more powerful than class inheritance, as a means for organizing behavior and data in our programs.</p><p>But class inheritance gets almost all the attention. And the rest goes to functional programming (FP), as the sort of &quot;anti-class&quot; way of designing programs. This saddens me, because it snuffs out any chance for exploration of delegation as a viable alternative.</p><p>I encourage you to spend plenty of time deep in Book 3, <em>Objects &amp; Classes</em>, to see how object delegation holds far more potential than we&#39;ve perhaps realized. This isn&#39;t an anti-<code>class</code> message, but it is intentionally a &quot;classes aren&#39;t the only way to use objects&quot; message that I want more JS developers to consider.</p><p>Object delegation is, I would argue, far more <em>with the grain</em> of JS, than classes (more on <em>grains</em> in a bit).</p><h2 id="pillar-3-types-and-coercion" tabindex="-1"><a class="header-anchor" href="#pillar-3-types-and-coercion" aria-hidden="true">#</a> Pillar 3: Types and Coercion</h2><p>The third pillar of JS is by far the most overlooked part of JS&#39;s nature.</p><p>The vast majority of developers have strong misconceptions about how <em>types</em> work in programming languages, and especially how they work in JS. A tidal wave of interest in the broader JS community has begun to shift to &quot;static typing&quot; approaches, using type-aware tooling like TypeScript or Flow.</p><p>I agree that JS developers should learn more about types, and should learn more about how JS manages type conversions. I also agree that type-aware tooling can help developers, assuming they have gained and used this knowledge in the first place!</p><p>But I don&#39;t agree at all that the inevitable conclusion of this is to decide JS&#39;s type mechanism is bad and that we need to cover up JS&#39;s types with solutions outside the language. We don&#39;t have to follow the &quot;static typing&quot; way to be smart and solid with types in our programs. There are other options, if you&#39;re just willing to go <em>against the grain</em> of the crowd, and <em>with the grain</em> of JS (again, more on that to come).</p><p>Arguably, this pillar is more important than the other two, in the sense that no JS program will do anything useful if it doesn&#39;t properly leverage JS&#39;s value types, as well as the conversion (coercion) of values between types.</p><p>Even if you love TypeScript/Flow, you are not going to get the most out of those tools or coding approaches if you aren&#39;t deeply familiar with how the language itself manages value types.</p><p>To learn more about JS types and coercion, check out Book 4, <em>Types &amp; Grammar</em>. But please don&#39;t skip over this topic just because you&#39;ve always heard that we should use <code>===</code> and forget about the rest.</p><p>Without learning this pillar, your foundation in JS is shaky and incomplete at best.</p><h2 id="with-the-grain" tabindex="-1"><a class="header-anchor" href="#with-the-grain" aria-hidden="true">#</a> With the Grain</h2><p>I have some advice to share on continuing your learning journey with JS, and your path through the rest of this book series: be aware of the <em>grain</em> (recall various references to <em>grain</em> earlier in this chapter).</p><p>First, consider the <em>grain</em> (as in, wood) of how most people approach and use JS. You&#39;ve probably already noticed that these books cut against that <em>grain</em> in many respects. In YDKJSY, I respect you the reader enough to explain all the parts of JS, not only some select popular parts. I believe you&#39;re both capable and deserving of that knowledge.</p><p>But that is not what you&#39;ll find from a lot of other material out there. It also means that the more you follow and adhere to the guidance from these books\u2014that you think carefully and analyze for yourself what&#39;s best in your code\u2014the more you will stand out. That can be a good and bad thing. If you ever want to break out from the crowd, you&#39;re going to have to break from how the crowd does it!</p><p>But I&#39;ve also had many people tell me that they quoted some topic/explanation from these books during a job interview, and the interviewer told the candidate they were wrong; indeed, people have reportedly lost out on job offers as a result.</p><p>As much as possible, I endeavor in these books to provide completely accurate information about JS, informed generally from the specification itself. But I also dose out quite a bit of my opinions on how you can interpret and use JS to the best benefit in your programs. I don&#39;t present opinion as fact, or vice versa. You&#39;ll always know which is which in these books.</p><p>Facts about JS are not really up for debate. Either the specification says something, or it doesn&#39;t. If you don&#39;t like what the specification says, or my relaying of it, take that up with TC39! If you&#39;re in an interview and they claim you&#39;re wrong on the facts, ask them right then and there if you can look it up in the specification. If the interviewer won&#39;t re-consider, then you shouldn&#39;t want to work there anyway.</p><p>But if you choose to align with my opinions, you have to be prepared to back up those choices with <em>why</em> you feel that way. Don&#39;t just parrot what I say. Own your opinions. Defend them. And if someone you were hoping to work with disagrees, walk away with your head still held high. It&#39;s a big JS, and there&#39;s plenty of room for lots of different ways.</p><p>In other words, don&#39;t be afraid to go against the <em>grain</em>, as I have done with these books and all my teachings. Nobody can tell you how you will best make use of JS; that&#39;s for you to decide. I&#39;m merely trying to empower you in coming to your own conclusions, no matter what they are.</p><p>On the other hand, there&#39;s a <em>grain</em> you really should pay attention to and follow: the <em>grain</em> of how JS works, at the language level. There are things that work well and naturally in JS, given the right practice and approach, and there are things you really shouldn&#39;t try to do in the language.</p><p>Can you make your JS program look like a Java, C#, or Perl program? What about Python or Ruby, or even PHP? To varying degrees, sure you can. But should you?</p><p>No, I don&#39;t think you should. I think you should learn and embrace the JS way, and make your JS programs as JS&#39;y as is practical. Some will think that means sloppy and informal programming, but I don&#39;t mean that at all. I just mean that JS has a lot of patterns and idioms that are recognizably &quot;JS,&quot; and going with that <em>grain</em> is the general path to best success.</p><p>Finally, maybe the most important <em>grain</em> to recognize is how the existing program(s) you&#39;re working on, and developers you&#39;re working with, do stuff. Don&#39;t read these books and then try to change <em>all that grain</em> in your existing projects over night. That approach will always fail.</p><p>You&#39;ll have to shift these things little by little, over time. Work on building consensus with your fellow developers on why it&#39;s important to re-visit and re-consider an approach. But do so with just one small topic at a time, and let before-and-after code comparisons do most of the talking. Bring everyone on the team together to discuss, and push for decisions that are based on analysis and evidence from the code rather than the inertia of &quot;our senior devs have always done it this way.&quot;</p><p>That&#39;s the most important advice I can impart to help you learn JS. Always keep looking for better ways to use what JS gives us to author more readable code. Everyone who works on your code, including your future self, will thank you!</p><h2 id="in-order" tabindex="-1"><a class="header-anchor" href="#in-order" aria-hidden="true">#</a> In Order</h2><p>So now you&#39;ve got a broader perspective on what&#39;s left to explore in JS, and the right attitude to approach the rest of your journey.</p><p>But one of the most common practical questions I get at this point is, &quot;What order should I read the books?&quot; There is a straightforward answer... but it also depends.</p><p>My suggestion for most readers is to proceed through this series in this order:</p><ol><li><p>Get started with a solid foundation of JS from <em>Get Started</em> (Book 1) -- good news, you&#39;ve already almost finished this book!</p></li><li><p>In <em>Scope &amp; Closures</em> (Book 2), dig into the first pillar of JS: lexical scope, how that supports closure, and how the module pattern organizes code.</p></li><li><p>In <em>Objects &amp; Classes</em> (Book 3), focus on the second pillar of JS: how JS&#39;s <code>this</code> works, how object prototypes support delegation, and how prototypes enable the <code>class</code> mechanism for OO-style code organization.</p></li><li><p>In <em>Types &amp; Grammar</em> (Book 4), tackle the third and final pillar of JS: types and type coercion, as well as how JS&#39;s syntax and grammar define how we write our code.</p></li><li><p>With the <strong>three pillars</strong> solidly in place, <em>Sync &amp; Async</em> (Book 5) then explores how we use flow control to model state change in our programs, both synchronously (right away) and asynchronously (over time).</p></li><li><p>The series concludes with <em>ES.Next &amp; Beyond</em> (Book 6), a forward look at the near- and mid-term future of JS, including a variety of features likely coming to your JS programs before too long.</p></li></ol><p>That&#39;s the intended order to read this book series.</p><p>However, Books 2, 3, and 4 can generally be read in any order, depending on which topic you feel most curious about and comfortable exploring first. But I don&#39;t recommend you skip any of these three books\u2014not even <em>Types &amp; Grammar</em>, as some of you will be tempted to do!\u2014even if you think you already have that topic down.</p><p>Book 5 (<em>Sync &amp; Async</em>) is crucial for deeply understanding JS, but if you start digging in and find it&#39;s too intimidating, this book can be deferred until you&#39;re more experienced with the language. The more JS you&#39;ve written (and struggled with!), the more you&#39;ll come to appreciate this book. So don&#39;t be afraid to come back to it at a later time.</p><p>The final book in the series, <em>ES.Next &amp; Beyond</em>, in some respects stands alone. It can be read at the end, as I suggest, or right after <em>Getting Started</em> if you&#39;re looking for a shortcut to broaden your radar of what JS is all about. This book will also be more likely to receive updates in the future, so you&#39;ll probably want to re-visit it occasionally.</p><p>However you choose to proceed with YDKJSY, check out the appendices of this book first, especially practicing the snippets in Appendix B, &quot;Practice, Practice, Practice!&quot; Did I mention you should go practice!? There&#39;s no better way to learn code than to write it.</p>',59);function i(r,n){return a}var h=e(t,[["render",i],["__file","ch4.html.vue"]]);export{h as default};
