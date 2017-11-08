//scroll to element
//document.querySelector('.hello').scrollIntoView({ 
//  behavior: 'smooth' 
//});

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
	
	lory(slider1, {
		//options
		rewind: 5
	})
});