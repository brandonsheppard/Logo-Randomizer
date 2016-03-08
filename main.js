x = [
	'//skeletaltheme.neto.com.au/assets/website_logo.png',
	'//alizarintheme.neto.com.au/assets/website_logo.png',
	'//atomictheme.neto.com.au/assets/website_logo.png',
	'//bbrushtheme.neto.com.au/assets/website_logo.png',
	'//glaucoustheme.neto.com.au/assets/website_logo.png',
	'//glazytheme.neto.com.au/assets/website_logo.png',
	'//greatbeertheme.neto.com.au/assets/website_logo.png',
	'//imaginenoatheme.neto.com.au/assets/website_logo.png',
	'//linenfabrics.neto.com.au/assets/website_logo.png',
	'//pounceteestheme.neto.com.au/assets/website_logo.png',
	'//shamrockthemes.neto.com.au/assets/website_logo.png',
	'//triskixtheme.neto.com.au/assets/website_logo.png',
	'//uniquesofatheme.neto.com.au/assets/website_logo.png',
	'//angrywhaletheme.neto.com.au/assets/website_logo.png',
	'//baziktheme.neto.com.au/assets/website_logo.png',
	'//crackrjacktheme.neto.com.au/assets/website_logo.png',
	'//endlesstheme.neto.com.au/assets/website_logo.png',
	'//greenlemontheme.neto.com.au/assets/website_logo.png',
	'//lacyjuliettetheme.neto.com.au/assets/website_logo.png',
	'//omgpetstheme.neto.com.au/assets/website_logo.png',
	'//physlamtheme.neto.com.au/assets/website_logo.png',
	'//scenictheme.neto.com.au/assets/website_logo.png',
	'//shinglebumtheme.neto.com.au/assets/website_logo.png',
	'//sunnyrobottheme.neto.com.au/assets/website_logo.png',
	'//teatastictheme.neto.com.au/assets/website_logo.png',
	'//vermiliontheme.neto.com.au/assets/website_logo.png',
	'//voltaictheme.neto.com.au/assets/website_logo.png',
	'//zoompedaltheme.neto.com.au/assets/website_logo.png',
	'//sunraystheme.neto.com.au/assets/website_logo.png',
	'//wineviennatheme.neto.com.au/assets/website_logo.png',
	'//phoenixtheme.neto.com.au/assets/website_logo.png',
	'//lusholivetheme.neto.com.au/assets/website_logo.png',
	'//fantoccinitheme.neto.com.au/assets/website_logo.png',
	'//storefronttheme.neto.com.au/assets/website_logo.png',
	'//classictheme.neto.com.au/assets/website_logo.png',
	'//countrytheme.neto.com.au/assets/website_logo.png',
	'//ardrossantheme.neto.com.au/assets/website_logo.png',
	'//sherwoodtheme.neto.com.au/assets/website_logo.png',
	'//rightsidetheme.neto.com.au/assets/website_logo.png',
	'//vintagetheme.neto.com.au/assets/website_logo.png',
	'//byrontheme.neto.com.au/assets/website_logo.png',
	'//ascottheme.neto.com.au/assets/website_logo.png',
	'//westendtheme.neto.com.au/assets/website_logo.png',
	'//takemehomeresponsivetheme.neto.com.au/assets/website_logo.png',
	'//classicdtheme.neto.com.au/assets/website_logo.png',
	'//cartbrewerytheme.neto.com.au/assets/website_logo.png',
	'//countrydtheme.neto.com.au/assets/website_logo.png',
	'//midsummertheme.neto.com.au/assets/website_logo.png',
	'//flashovertheme.neto.com.au/assets/website_logo.png'
]

i = 0
window.setInterval(function(){
	if (i < x.length - 1){
		i = i + 1
	} else {
		i = 0
	}
	document.querySelector('.logo').setAttribute('src',x[i])
}, 1000);
