import{c as e}from"./app.3696bbe2.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const o={},a=e('<h1 id="preface" tabindex="-1"><a class="header-anchor" href="#preface" aria-hidden="true">#</a> Preface</h1><p>Welcome to the 2nd edition of the widely acclaimed <em>You Don&#39;t Know JS</em> (<strong>YDKJS</strong>) book series: <em>You Don&#39;t Know JS <strong>Yet</strong></em> (<strong>YDKJSY</strong>).</p><p>If you&#39;ve read any of the 1st edition books, you can expect a refreshed approach in these new ones, with plenty of updated coverage of what&#39;s changed in JS over the last five years. But what I hope and believe you&#39;ll still <em>get</em> is the same commitment to respecting JS and digging into what really makes it tick.</p><p>If this is your first time reading these books, I&#39;m glad you&#39;re here. Prepare for a deep and extensive journey into all the corners of JavaScript.</p><p>If you are new to programming or JS, be aware that these books are not intended as a gentle &quot;intro to JavaScript.&quot; This material is, at times, complex and challenging, and goes much deeper than is typical for a first-time learner. You&#39;re welcome here no matter what your background is, but these books are written assuming you&#39;re already comfortable with JS and have at least 6\u20139 months experience with it.</p><h2 id="the-parts" tabindex="-1"><a class="header-anchor" href="#the-parts" aria-hidden="true">#</a> The Parts</h2><p>These books approach JavaScript intentionally opposite of how <em>The Good Parts</em> treats the language. No, that doesn&#39;t mean we&#39;re looking at <em>the bad parts</em>, but rather, exploring <strong>all the parts</strong>.</p><p>You may have been told, or felt yourself, that JS is a deeply flawed language that was poorly designed and inconsistently implemented. Many have asserted that it&#39;s the worst most popular language in the world; that nobody writes JS because they want to, only because they have to given its place at the center of the web. That&#39;s a ridiculous, unhealthy, and wholly condescending claim.</p><p>Millions of developers write JavaScript every day, and many of them appreciate and respect the language.</p><p>Like any great language, it has its brilliant parts as well as its scars. Even the creator of JavaScript himself, Brendan Eich, laments some of those parts as mistakes. But he&#39;s wrong: they weren&#39;t mistakes at all. JS is what it is today\u2014the world&#39;s most ubiquitous and thus most influential programming language\u2014precisely because of <em>all those parts</em>.</p><p>Don&#39;t buy the lie that you should only learn and use a small collection of <em>good parts</em> while avoiding all the bad stuff. Don&#39;t buy the &quot;X is the new Y&quot; snake oil, that some new feature of the language instantly relegates all usage of a previous feature as obsolete and ignorant. Don&#39;t listen when someone says your code isn&#39;t &quot;modern&quot; because it isn&#39;t yet using a stage-0 feature that was only proposed a few weeks ago!</p><p>Every part of JS is useful. Some parts are more useful than others. Some parts require you to be more careful and intentional.</p><p>I find it absurd to try to be a truly effective JavaScript developer while only using a small sliver of what the language has to offer. Can you imagine a construction worker with a toolbox full of tools, who only uses their hammer and scoffs at the screwdriver or tape measure as inferior? That&#39;s just silly.</p><p>My unreserved claim is that you should go about learning all parts of JavaScript, and where appropriate, use them! And if I may be so bold as to suggest: it&#39;s time to discard any JS books that tell you otherwise.</p><h2 id="the-title" tabindex="-1"><a class="header-anchor" href="#the-title" aria-hidden="true">#</a> The Title?</h2><p>So what&#39;s the title of the series all about?</p><p>I&#39;m not trying to insult you with criticism about your current lack of knowledge or understanding of JavaScript. I&#39;m not suggesting you can&#39;t or won&#39;t be able to learn JavaScript. I&#39;m not boasting about secret advanced insider wisdom that I and only a select few possess.</p><p>Seriously, all those were real reactions to the original series title before folks even read the books. And they&#39;re baseless.</p><p>The primary point of the title &quot;You Don&#39;t Know JS Yet&quot; is to point out that most JS developers don&#39;t take the time to really understand how the code that they write works. They know <em>that</em> it works\u2014that it produces a desired outcome. But they either don&#39;t understand exactly <em>how</em>, or worse, they have an inaccurate mental model for the <em>how</em> that falters on closer scrutiny.</p><p>I&#39;m presenting a gentle but earnest challenge to you the reader, to set aside the assumptions you have about JS, and approach it with fresh eyes and an invigorated curiosity that leads you to ask <em>why</em> for every line of code you write. Why does it do what it does? Why is one way better or more appropriate than the other half-dozen ways you could have accomplished it? Why do all the &quot;popular kids&quot; say to do X with your code, but it turns out that Y might be a better choice?</p><p>I added &quot;Yet&quot; to the title, not only because it&#39;s the second edition, but because ultimately I want these books to challenge you in a hopeful rather than discouraging way.</p><p>But let me be clear: I don&#39;t think it&#39;s possible to ever fully <em>know</em> JS. That&#39;s not an achievement to be obtained, but a goal to strive after. You don&#39;t finish knowing everything about JS, you just keep learning more and more as you spend more time with the language. And the deeper you go, the more you revisit what you <em>knew</em> before, and you re-learn it from that more experienced perspective.</p><p>I encourage you to adopt a mindset around JavaScript, and indeed all of software development, that you will never fully have mastered it, but that you can and should keep working to get closer to that end, a journey that will stretch for the entirety of your software development career, and beyond.</p><p>You can always know JS better than you currently do. That&#39;s what I hope these YDKJSY books represent.</p><h2 id="the-mission" tabindex="-1"><a class="header-anchor" href="#the-mission" aria-hidden="true">#</a> The Mission</h2><p>The case doesn&#39;t really need to be made for why developers should take JS seriously\u2014I think it&#39;s already more than proven worthy of first-class status among the world&#39;s programming languages.</p><p>But a different, more important case still needs to be made, and these books rise to that challenge.</p><p>I&#39;ve taught more than 5,000 developers from teams and companies all over the world, in more than 25 countries on six continents. And what I&#39;ve seen is that far too often, what <em>counts</em> is generally just the result of the program, not how the program is written or how/why it works.</p><p>My experience not only as a developer but in teaching many other developers tells me: you will always be more effective in your development work if you more completely understand how your code works than you are solely <em>just</em> getting it to produce a desired outcome.</p><p>In other words, <em>good enough to work</em> is not, and should not be, <em>good enough</em>.</p><p>All developers regularly struggle with some piece of code not working correctly, and they can&#39;t figure out why. But far too often, JS developers will blame this on the language rather than admitting it&#39;s their own understanding that is falling short. These books serve as both the question and answer: why did it do <em>this</em>, and here&#39;s how to get it to do <em>that</em> instead.</p><p>My mission with YDKJSY is to empower every single JS developer to fully own the code they write, to understand it and to write with intention and clarity.</p><h2 id="the-path" tabindex="-1"><a class="header-anchor" href="#the-path" aria-hidden="true">#</a> The Path</h2><p>Some of you have started reading this book with the goal of completing all six books, back to back.</p><p>I would like to caution you to consider changing that plan.</p><p>It is not my intention that YDKJSY be read straight through. The material in these books is dense, because JavaScript is powerful, sophisticated, and in parts rather complex. Nobody can really hope to <em>download</em> all this information to their brains in a single pass and retain any significant amount of it. That&#39;s unreasonable, and it&#39;s foolish to try.</p><p>My suggestion is you take your time going through YDKJSY. Take one chapter, read it completely through start to finish, and then go back and re-read it section by section. Stop in between each section, and practice the code or ideas from that section. For larger concepts, it probably is a good idea to expect to spend several days digesting, re-reading, practicing, then digesting some more.</p><p>You could spend a week or two on each chapter, and a month or two on each book, and a year or more on the whole series, and you would still not be squeezing every ounce of YDKJSY out.</p><p>Don&#39;t binge these books; be patient and spread out your reading. Interleave reading with lots of practice on real code in your job or on projects you participate in. Wrestle with the opinions I&#39;ve presented along the way, debate with others, and most of all, disagree with me! Run a study group or book club. Teach mini-workshops at your office. Write blog posts on what you&#39;ve learned. Speak about these topics at local JS meetups.</p><p>It&#39;s never my goal to convince you to agree with my opinion, but to encourage you to own and be able to defend your opinions. You can&#39;t get <em>there</em> with an expedient read-through of these books. That&#39;s something that takes a long while to emerge, little by little, as you study and ponder and re-visit.</p><p>These books are meant to be a field-guide on your wanderings through JavaScript, from wherever you currently are with the language, to a place of deeper understanding. And the deeper you understand JS, the more questions you will ask and the more you will have to explore! That&#39;s what I find so exciting!</p><p>I&#39;m so glad you&#39;re embarking on this journey, and I am so honored you would consider and consult these books along the way. It&#39;s time to start <em>getting to know JS</em>.</p>',42);function n(r,s){return a}var l=t(o,[["render",n]]);export{l as default};
