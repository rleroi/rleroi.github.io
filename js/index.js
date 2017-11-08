//scroll to element
//document.querySelector('.hello').scrollIntoView({ 
//  behavior: 'smooth' 
//});

// thanks stackoverflow
function getScroll() {
	var h = document.documentElement, 
	b = document.body,
	st = 'scrollTop',
	sh = 'scrollHeight';

	return parseInt((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}

// textarea styling
var contactText = document.getElementById('contactMsg');
contactText.onfocus = function(e) {
    contactText.style.lineHeight = '100%';
    contactText.style.textAlign = 'initial';
    contactText.style.padding = '1rem 3rem';
};

contactText.onblur = function(e) {
    if(contactText.value == '') {
        contactText.style.lineHeight = '60vh';
        contactText.style.textAlign = 'center';
        contactText.style.padding = '0';
    }
};

// lory slider
document.addEventListener('DOMContentLoaded', function() {
	var slider1 = document.getElementById('slider1');
	
	var loryElement = lory(slider1, {
		//options
		infinite: 5
	})
	
	var percent = 0;
	document.addEventListener('scroll', function() {
		
		// get scroll percentage
		var newPercent = getScroll();
		
		// if page is scrolled for 10% further than the last scroll
		if(newPercent > (percent + 5)) {			
			loryElement.next(slider1);
			percent = newPercent;
		} else if (newPercent < (percent - 5)) {
			loryElement.prev(slider1);
			percent = newPercent;
		}
	})
});