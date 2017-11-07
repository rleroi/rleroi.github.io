// Whatsapp
document.getElementById('whatsappButton').onclick = function(e) {
    window.open('https://api.whatsapp.com/send?phone=31684346693&text=' + encodeURIComponent(
        'Name: ' + document.getElementById('contactMsg').value + ", \r\n" +
        'E-mail: ' + document.getElementById('contactMsg').value + ", \r\nMessage: \r\n" +
        document.getElementById('contactMsg').value
    ));
};

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
