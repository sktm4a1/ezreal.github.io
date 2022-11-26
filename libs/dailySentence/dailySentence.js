(
	function hitokoto() {
		var sentences = [
		'要让一群人团结起来，需要的不是英明的领导，而是共同的敌人。',
		'要记住伟大的探知可逆定律:如果你能看到一个低墒世界,那个低嫡世界迟早也能看到你,只是时间问题。所以,什么事情都等别人做是危险的。',
		'超过一定的年龄之后，所谓人生，无非是一个不断丧失的过程而已。',
		'我们往往把自己的性格和人品说得言过其实了。如果真理被冷酷无情地揭示出来时，我们反倒不能明辨是非了。',
		'这样的日子，居然一过就是一年多，他们和所有正常的不正常的恋人一样，相爱着，伤害着。 　好像彼此已经在一起很多年了，那种感情，慢慢变成一种习惯。',
		'能诚实地承认穷，诚恳地表达对于钱的兴趣，就是穷者的尊严。',
		'你问我世间什么最难得？徒手摘星，爱而不得，世人万千，再难遇我。',
		'为你明灯三千，为你花开满城，为你所向披靡。',
		'是你的就好好抓住，不是你的就不要多想。 天底下没谁是欠你的，但是你欠了别人，就别不当回事。',
		'如果你掉进了黑暗里，你能做的，不过是静心等待，直到你的双眼适应黑暗。',
		'我爱你是一连串夹七缠八永远说不清楚很难明白可能最好就不要懂了的爱你。',
		'大人是不会作梦的。大人呀，是会实现梦想的。',
		'仿佛这一瞬间，火光也照亮了他同驹子共同度过的岁月。这当中也充满一种说不出的苦痛和悲哀。',
		'没有期望，就没有失望”，从此之后，再没受过伤害，因为从一开始，就不抱有什么希望。',
		'一个人有两个我，一个在黑暗中醒着，一个在光明中睡着。',
		'流浪汉最受不了的或许不是吃不饱喝不足，而是他们终日终年的沉默。人们会赏他们一两个角子，但从来不赏个面子站下脚，听他们说句话',
		'你最可爱,我说时来不及思索,但思索过后,还是这样说',
		'情不知所起，一往而深，生者可以死，死者可以生，生而不可与死，死而不可复生者，皆非情之至也。',
		'我触摸不到的除了喜马拉雅山顶的雪，还有你。',
		'生命的本质就是在关系中寻找自己，并成为真正的自己;在关系中寻找爱，并成为爱。'
	];
	var index = Math.floor(Math.random() * 20);
	var hitokoto = sentences[index] || 6;
	var dom = document.querySelector('#hitokoto');
	if(!dom) return; 
	Array.isArray(dom) ? dom[0].innerText = hitokoto : dom.innerText = hitokoto;
})()