// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs


var accountId = '325862';
var companyAbbr = 'rhnr'
var companyId = '353'
var randomNumber = Math.floor(Math.random()*11)

/* CLIENT LOGGED IN */
window.onload = function() {
	var lOut = document.getElementById('loggedOut');
	var lIn = document.getElementById('loggedIn');
	var classShow = 'logIn'
	var classHide = 'hide'
	if (loggedIn == "true") {
		lOut.className = classHide;
		lIn.className = classShow;
	} else if (loggedIn == "false") {
		lOut.className = classShow;
		lIn.className = classHide;
	} else {
		return;
	}
};


/* RN QUICK SEARCH */

$(document).ready(function() {
	var quickSearch = setInterval(function() { 
		if ($('.rn-qsr').length > 0) {
		  $('.rn-qsr-button').attr('value', '');
      $('.rn-qsr-mn-f option').eq(0).html('<option id="blanks" value="null">MIN</option>'); 
      $('.rn-qsr-mx-f option').eq(0).html('<option id="blanks" value="null">MAX</option>');
      $('.rn-qsr-bd-f option').eq(0).html('<option id="blanks" value="null">Any</option>'); 
      $('.rn-qsr-ba-f option').eq(0).html('<option id="blanks" value="null">Any</option>');
      $('.rn-qsr-button').replaceWith('<button onclick="submitForm()" id="qsrButton">GO <i class="fa fa-angle-right"></i></button>'); 
		  clearInterval(quickSearch); 
		} 
	}, 200);
});



/* FOOTER */
/*
var footerHeight = $('#copyright').height();
$('#copyright').css('bottom', '-' + footerHeight + 'px');
*/

/* TOP BAR */
$('ul.submenu-list.subnav-list').addClass('dropdown');
$('ul.submenu-list.subnav-list').parent('li').addClass('has-dropdown not-click');
$('li.has-dropdown > a').attr('href', '#').removeAttr('class');
$('li.menu-item.mainnav-item').after('<li class="divider"></li>').removeClass('menu-item mainnav-item');
$('ul.submenu-list.subnav-list').removeClass('submenu-list subnav-list');
$('li.submenu-item.subnav-item').removeClass('submenu-item subnav-item');
$('a.submenu-link.subnav-link').removeAttr('class');
$('nav.top-bar').removeClass('hide');
$('li.divider:last-child').hide();

/* INVIS IMG */
$('img[src*="invis.gif"]').attr('style', 'height:0px');

/* SRP */
if ($("#rn-search-container").length > 0){
  $('#seoSearches').hide();
  $('#social').hide();
}
$('.rn-search-Right-map > div:nth-child(1) > a:nth-child(4)').attr('style', 'float:right;overflow:hidden;margin-right:10px;font-size:100%;font-weight:bold;white-space:nowrap;color:#ffffff !important;')
$('#advancedsearchbutton').click(function() {
  $('img#imgX').attr('src', 'http://content.mediastg.net/dynamic/RealEstate/Company/' + companyID + '/account/' + accountID + '/CustomWebsite/Resources/square_x_black.png');
  $('#btnNewSearch').attr('src', 'http://content.mediastg.net/dynamic/RealEstate/Company/' + companyID + '/account/' + accountID + '/CustomWebsite/Resources/new_search_black.png');
})

/* VIP HOME TOURS */
$('#minprice').removeAttr('type');
$('#maxprice').removeAttr('type');
$('#location').removeAttr('type');
$('#year').removeAttr('type');
$('#beds').removeAttr('type');
$('#baths').removeAttr('type');
$('#fire').removeAttr('type');
$('#footage').removeAttr('type');


/* DASHBOARD */
$(function() {
  if ($('#newsearchcontainer').length > 0) {
    $('body').addClass('reliance');
    $('meta[name="viewport"]').attr('content', '1000');
  }
});   

/* RN */
$(document).ready(function () {		
  if($('input[name=ext-username]').length > 0){
    $('input[name=ext-username]').val('');
    $('input[name=ext-password]').val('');
	}
});

$(window).bind('contactmeclick', contactMe);
$(window).bind('contactformclose', closeContactMe);
$(window).bind('forgotpasswordclick', submitlostpasswordrequest);
$(window).bind('openpageclick', openPage);
$(window).bind('openformclick', openForm);

function openPage(evnt, url, name, newWindow) {
	if (newWindow) {
	  window.open('/' + companyAbbr + '/' + url + '?AccountID=' + accountID, name, 'width=815px,height=555px,resizable=1,scrollbars=1,');
  } else {
    document.location = '/' + companyAbbr + '/' + url;
  }
}

function openForm(evnt, url, name, newWindow) {
	if (newWindow) {
	  window.open('/' + companyAbbr + '/modules/global/forms/' + url + '?AccountID=' + accountID, name, 'width=450px,height=600px,resizable=1,scrollbars=1,');
  } else {
    document.location = '?' + url;
  }
}

function testForm() {
  addMask();
	$.ajax({url:'http://devweb.summitnetworks.com/' + companyAbbr + '/modules/global/forms/sellerrequest.asp?AccountID=' + accountID + '&acc=' + account, success:testformCallback, dataType:'html'});
}

function testformCallback(response) {
	response = response.replace(/<\/?(html|head|body)[^>]*>/g,'');
	response = response.substring(response.indexOf('/script>')+8).replace(/script/g, '')
	console.log(response)
	$('<div></div>').attr('id', 'form').css({position:'absolute', top:'10px', backgroundColor:'#fff', zIndex:1001}).append(response).appendTo($('body'));
}

function forgotPassword() {
	addMask();
}

function tryLogin(username, rememberMe, password) {
	var usernameField = $('input[name=' + username + ']');
	var passwordField = $('input[name=' + password + ']');
	var rememberMeField = $('input[name=' + rememberMe + ']');

	if (rememberMeField.attr('type') == 'radio') {
		rememberMeField = $('#' + rememberMe + '-yes');
		if (rememberMeField.length == 0) {
		  throw '\'Remember Me\' field not found';
      return;
      $('<div></div>').attr('id', 'form').css({backgroundColor:'#fff'}).append(response).appendTo(body);
		}
	}

	var usernameValue = $.trim(usernameField.val());
	var passwordValue = $.trim(passwordField.val());
	var rememberMeValue = rememberMeField.attr('checked') == 'checked' ? 'on' : 'off';

	if (usernameValue.length == 0) {
		alert('Please enter your email address.');
		usernameField.focus();
		return false;
	}

	$('input[name=username]').val(usernameValue);
	$('input[name=password]').val(passwordValue);
	$('input[name=remember]').val(rememberMeValue);

  var form = $('form[name=extranet-login]')[0];
  form.submit();
  
  return false;
}

function closeContactMe() {
	$('#contactMask').remove();
	$('#contactForm').remove();
}

function addMask() {
	$('<div id="contactMask"></div>').appendTo($('body'));
}

function contactMe(evnt) {
	addMask();
	$.ajax({url:'/' + companyAbbr + '/modules/internet/contactMeForm.aspx?webSessionID=' + randomNumber + '&contentID=' + companyId + '&accountid=' + accountId, success:contactMeCallback});
}

function contactMeCallback(response) {
	$('<div id="contactForm" class="row"></div>').append(response).appendTo($('body'));
  if ($('#contactForm').length > 0) {
		$('#-cf-column-form').attr('id', 'contactFormLeft').addClass('medium-8 columns');
		$('#-cf-column-info').attr('id', 'contactFormRight').addClass('medium-4 columns').removeAttr('style');
		
		$('#-cf-form-close').attr('id', 'formClose').addClass('right').html('<i class="fa fa-times-circle fa-lg"></i>').appendTo('#contactForm');
		$('#contactFormLeft > div > form').attr('onsubmit', 'return newContactFormSubmit();').removeAttr('style').unwrap();
		$('.-cf-clear').remove();
		$('.-cf-form-required-indicator').remove();
	
		$('label[for="-cf-form-field-from"]').append('*');
		$('label[for="-cf-form-field-firstname"]').append('*');
		$('label[for="-cf-form-field-lastname"]').append('*');
		
	 	$('#-cf-form > div:first-child').attr('id', 'fromRow');
	 	$('#-cf-form > div:nth-child(2)').attr('id', 'subjectRow');
	 	$('#-cf-form > div:nth-child(3)').attr('id', 'textareaRow');
	 	$('#-cf-form > div:nth-child(4)').attr('id', 'firstNamePhoneRow');
	 	$('#-cf-form > div:nth-child(5)').attr('id', 'lastNameContactRow');
	 	$('#-cf-form > div:nth-child(6)').attr('id', 'buttonRow').removeAttr('style');
		$('#-cf-form').children().addClass('row').unwrap();
		
		$('#fromRow > div:first-child').attr('class', 'large-12 columns');
		$('#-cf-form-field-from').removeAttr('class').removeAttr('onfocus').removeAttr('onblur').removeAttr('value').attr('placeholder', 'Enter Your Email Address').unwrap().appendTo('label[for="-cf-form-field-from"]');
		
		$('#subjectRow > div:first-child').attr('class', 'large-12 columns');
		$('#-cf-form-field-subject').removeAttr('class').appendTo('label[for="-cf-form-field-subject"]');
		
		$('#-cf-form-field-message').wrap('<div class="large-12 columns">').removeAttr('style');
		
		$('#firstNamePhoneRow > div:first-child').attr('class', 'medium-6 columns');
		$('#-cf-form-field-firstname').removeAttr('class').unwrap().appendTo('label[for="-cf-form-field-firstname"]');
		
		$('#firstNamePhoneRow > div:nth-child(2)').attr('class', 'medium-6 columns');
		$('#-cf-form-field-phone').removeAttr('class').unwrap().appendTo('label[for="-cf-form-field-phone"]');
		
		$('#lastNameContactRow > div:first-child').attr('class', 'medium-6 columns');
		$('#-cf-form-field-lastname').removeAttr('class').unwrap().appendTo('label[for="-cf-form-field-lastname"]');
		
		$('#lastNameContactRow > div:nth-child(2)').attr('class', 'medium-6 columns');
		$('#-cf-form-field-method').removeAttr('class').appendTo('label[for="-cf-form-field-method"]');
		
		$('#buttonRow').append('<div class="large-12 columns text-center"></div>');
		$('#-cf-form-button-submit').appendTo('#buttonRow div.large-12').replaceWith('<button type="submit" class="small radius success">Submit</button> ');
		$('button.small').after('<br>');
		$('#-cf-form-button-reset').appendTo('#buttonRow div.large-12').replaceWith('<button type="reset" class="tiny radius secondary">Reset</button> ');
		$('#-cf-form-button-cancel').appendTo('#buttonRow div.large-12').replaceWith('<button onclick="closeContactForm()" type="button" class="tiny radius alert">Cancel</button>');
		
		$('#contactForm form div:nth-child(7)').replaceWith('<div id="formFooter" class="row"><div class="medium-3 columns">* = Required Field</div></div>');
		$('#-cf-disclaimer').attr('id', 'formDisclaimer').addClass('medium-9 columns').appendTo('#formFooter');
		$('#formDisclaimer span').removeAttr('style');
		$('#formDisclaimer span a').removeAttr('style');
		$('#formFooter').children().wrapInner('<small>');
		
		$('#-cf-info-name').wrapInner('<h5 class="text-center">');
		$('#-cf-info-name h5').unwrap();
		$('#-cf-info-photo').attr('class', 'text-center').removeAttr('id');
		$('#-cf-info-photo img').removeAttr('style');
		$('#-cf-info-office-heading').wrapInner('<h6>');
		$('#-cf-info-numbers-heading').wrapInner('<h6>');
		$('#-cf-info-website-heading').wrapInner('<h6>');
		$('#-cf-info-mobile-heading').wrapInner('<h6>');
		$('#-cf-info-office-heading h5').unwrap();
		$('#-cf-info-numbers-heading h5').unwrap();
		$('#-cf-info-website-heading h5').unwrap();
		$('#-cf-info-mobile-heading h5').unwrap();
		
		$('#-cf-info-company-name').replaceWith('<p id="officeInfo">'+$("#-cf-info-company-name").html()+'<br></p>');
		$('#-cf-info-address-1').appendTo('#officeInfo').replaceWith($("#-cf-info-address-1").html()+'<br>');
		$('#-cf-info-address-city').appendTo('#officeInfo').replaceWith($("#-cf-info-address-city").html()+' ');
		$('#-cf-info-address-state').appendTo('#officeInfo').replaceWith($("#-cf-info-address-state").html()+' ');
		$('#-cf-info-address-zip').appendTo('#officeInfo').replaceWith($("#-cf-info-address-zip").html()+'<br>');
		$('#-cf-info-office-phone').appendTo('#officeInfo').replaceWith($("#-cf-info-office-phone").html()+'</p>');
		$('#-cf-form-field-phone').removeAttr('id');
		$('#-cf-info-numbers-info div:first-child').replaceWith('<p id="contactNumbers">'+$("#-cf-info-numbers-info div:first-child").html()+'<br>');
		$('#-cf-info-numbers-info div:nth-child(2)').appendTo('#contactNumbers').replaceWith(''+$("#-cf-info-numbers-info div:nth-child(2)").html()+'<br>');
		$('#-cf-info-numbers-info div:nth-child(3)').appendTo('#contactNumbers').replaceWith(''+$("#-cf-info-numbers-info div:nth-child(3)").html()+'<br>');
		$('.-cf-info-numbers-number').appendTo('#contactNumbers').replaceWith(''+$(".-cf-info-numbers-number").html()+'</p>');
		$('#-cf-info-website-info').replaceWith('<p id="websiteInfo">'+$("#-cf-info-website-info").html()+'</p>');
		$('#-cf-info-mobile-info').replaceWith('<p id="mobileInfo">'+$("#-cf-info-mobile-info").html()+'</p>');
	}
}

function submitlostpasswordrequest() {
  var x;
  var username = $.trim($('input[name=username]').val());
  x = window.open('/' + companyAbbr + '/modules/internet/search/lostpassword.asp?email=' + username,'lostpassword','width=313,height=245');
  x.focus();
  return true;
}

function newContactFormSubmit() {
  var fromField = $('#-cf-form-field-from');
  var firstNameField = $('#-cf-form-field-firstname');
  var lastNameField = $('#-cf-form-field-lastname');
  var phoneField = $('#-cf-form-field-phone');
  
  var from = $.trim(fromField.val().replace('Enter Your Email Address', ''));
  var subject = $.trim($('#-cf-form-field-subject').val().split(' ').join('+'));
  var firstName = $.trim(firstNameField.val());
  var lastName = $.trim(lastNameField.val());
  var phone = $.trim(phoneField.val());
  var method = $('#-cf-form-field-method').val();
  var message = $.trim($('#-cf-form-field-message').val());
  
  
  var emailPattern = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*(\+[a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2}[a-zA-Z0-9]*$/;
  if(!from.match(emailPattern)) {
  	alert('Please enter a valid email address.');
  	fromField.focus();
  	return false;
  }

  if (firstName.length == 0) {
  	alert('Please enter your first name.');
  	firstNameField.focus();
  	return false;
  }
  
  if (lastName.length == 0) {
  	alert('Please enter your last name.');
  	lastNameField.focus();
  	return false;
  }

  var data = 'from=' + from + '&subject=' + subject + '&first=' + firstName + '&last=' + lastName + '&phone=' + phone + '&contactby=' + method + '&message=' + escape(message);

  $.ajax('/' + companyAbbr + '/modules/global/contact.asp?accountid=' + accountId + '&action=sendmail', {data:data, type:'POST', success:contactFormSubmitCallback});
  newContactFormSubmitCallback();
  return false;
}

function newContactFormSubmitCallback() {
  var formArea = $('#contactFormLeft');
  formArea.empty();
  formArea.addClass('text-center').html('<h6>Thank you, your email has been sent.</h6><button onclick="newCloseContactForm()" type="button" class="tiny radius alert">Close</button>');
}

function newCloseContactForm() {
  $(window).trigger('contactformclose');
}

//////

(function() {
    var KEY_CODE_ARROW_LEFT = 37, KEY_CODE_ARROW_RIGHT = 39, KEY_CODE_ARROW_UP = 38, KEY_CODE_ARROW_DOWN = 40, KEY_CODE_ENTER_RETURN = 13, KEY_CODE_HOME = 36, KEY_CODE_END = 35, KEY_CODE_PAGE_UP = 33, KEY_CODE_PAGE_DOWN = 34, KEY_CODE_ESCAPE = 27, KEY_CODE_TAB = 9;
    var _textPadding = 2, _rowHeight = 20, _maxRows = 6;

    function SuggestionField(field, dataSource, method, opts) {
        if (!field.tagName || (field.tagName && !field.type) || (field.tagName && field.type && field.type != 'text'))
            reliance.throwError('[reliance.Exception: SuggestionField] Cannot instantiate given field.');

        if (method && typeof method != 'function')
            reliance.throwError('[reliance.Exception: SuggestionField] Type mismatch: method must be a type of function.');
		
		if (opts.version != 2)
			reliance.xDomainHttpRequest.create('http://' + reliance.loader.proxyHost() + '/proxy/' + dataSource, this, function(response) { this.data = response }, { silent: true });

        this.field = field;
        this.method = method;
        this.data = opts.version == 2 ? null : [];
        this.suggestionKeystrokeMinimum = opts && opts.suggestionKeystrokeMinimum && typeof opts.suggestionKeystrokeMinimum == 'number' ? opts.suggestionKeystrokeMinimum : 1;
        this.width = opts && opts.expandedWidth && typeof opts.expandedWidth == 'number' ? opts.expandedWidth : field.offsetWidth;
        this.displayInfo = opts && opts.displayInfo && typeof opts.displayInfo == 'boolean' ? opts.displayInfo : false;
        this.infoSize = opts && opts.infoSize && typeof opts.infoSize == 'number' ? opts.infoSize : 35;
		this.version = opts.version ? opts.version : 1;
        this.dataSource = dataSource;
        initialize.apply(this);
    }
    SuggestionField.prototype.setValue = function(value) {
        this.field.value = value;
    }
    SuggestionField.prototype.getValue = function() {
        return this.field.value;
    }

    function initialize() {
        // The "this" keyword refers to the SuggestionField object
        var f = this.field;
        f.autocomplete = 'off';
        var list = document.createElement('div');
        list.style.cssText = 'float:left; position:absolute; border:#d21f26 1px solid; heigh: auto; display:none; overflow:auto; width:' + (this.width - _getBorderCorrection()) + 'px;z-index:10000;';
        document.body.appendChild(list);
        
        this.list = list;

        reliance.event.bindDom(f, 'keyup', this, function(evnt) { return _handleKey.apply(this, ['up', evnt]) });
        reliance.event.bindDom(f, 'keydown', this, function(evnt) { return _handleKey.apply(this, ['down', evnt]) });
        reliance.event.addDomListener(document, 'click', reliance.event.callbackArgs(this, _handleDisplay, 0));
    }

    function _getBorderCorrection() {
        var borderWidth = 1;
        return borderWidth * 2;
    }

    function _handleKey(eventKeyMode, evnt) {
        // The "this" keyword refers to the SuggestionField object
        evnt = reliance.domUtilities.fixEvent(evnt);

        if (evnt.keyCode == KEY_CODE_ESCAPE || evnt.keyCode == KEY_CODE_TAB)
            return this.list.style.display = 'none';

        if (eventKeyMode == 'up') {
            if (evnt.keyCode == KEY_CODE_ARROW_LEFT || evnt.keyCode == KEY_CODE_ARROW_RIGHT || evnt.keyCode == KEY_CODE_ARROW_UP || evnt.keyCode == KEY_CODE_ARROW_DOWN || evnt.keyCode == KEY_CODE_HOME || evnt.keyCode == KEY_CODE_END || evnt.keyCode == KEY_CODE_PAGE_UP || evnt.keyCode == KEY_CODE_PAGE_DOWN) {
                // do nothing
            } else if (evnt.keyCode == KEY_CODE_ENTER_RETURN) {
                if (this.highlightIndex != -1)
                    this.list.childNodes[this.highlightIndex].onclick.apply();
            } else {
                if (eventKeyMode == 'up')
                    _redraw.apply(this);
            }
        }

        if (eventKeyMode == 'down') {
            if (evnt.keyCode == KEY_CODE_ARROW_UP || evnt.keyCode == KEY_CODE_ARROW_DOWN) {
				var x = evnt.keyCode == KEY_CODE_ARROW_UP ? -1 : 1;
				x += this.version == 2 && (this.highlightIndex + x) < this.list.childNodes.length && (this.list.childNodes[this.highlightIndex + x].className == 'rn-search-location-title' || this.list.childNodes[this.highlightIndex + x].firstChild.innerHTML === 'No Suggestions') ? evnt.keyCode == KEY_CODE_ARROW_UP ? -1 : 1 : 0;
                _highlight.apply(this, [this.highlightIndex + x]);
            }
        }
    }

    var _city;

    function _redraw() {
        // The "this" keyword refers to the SuggestionField object
        if (this.getValue().length < 3) {
			reliance.domUtilities.clearChildNodes(this.list);
			this.list.style.display = 'none';
		}

        var value = this.field.value.trim().replace(/^,\s*/g, '');
        value = value.replace(/\|/gi, '\\|');
        if (value.length >= this.suggestionKeystrokeMinimum) {
            var clear = document.createElement('div');
            clear.style.cssText = 'clear:both; overflow:hidden; height:' + (document.compatMode == 'BackCompat' ? 1 : 0) + 'px; background-color:#ffffff';
            clear.appendChild(document.createTextNode('.'));

            var matchCount = 0;

            if (this.data != null) {
				reliance.domUtilities.clearChildNodes(this.list);
                var re = new RegExp('\\b' + value + '.*?\\b', 'gi');
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data[i].suggestion.match(re)) {
                        this.list.appendChild(_createItem.apply(this, [this.data[i], matchCount]));
                        matchCount++;
                    }
                }
                this.list.appendChild(clear);
                _handleDisplay.apply(this, [matchCount]);
            } else {
                var dataSource = this.dataSource + (this.dataSource.indexOf('?') == -1 ? '?' : '&') + (this.version == 2 ? 'term=' : 'q=') + value;
                reliance.xDomainHttpRequest.abort(_city);
                _city = reliance.xDomainHttpRequest.create('http://' + reliance.loader.proxyHost() + '/proxy/' + dataSource, this, function(response) {
					reliance.domUtilities.clearChildNodes(this.list);
					var index = 0;
                    for (var i = 0; i < response.length; i++) {
						if (this.version == 2 && response[i].type && (i == 0 || response[i].type != response[i-1].type)) {
							this.list.appendChild(_createTitle.apply(this, [response[i].type]));
							index++;
						}

                        this.list.appendChild(_createItem.apply(this, [response[i], index]));
						index++
                    }
                    this.list.appendChild(clear);
                    //_handleDisplay.apply(this, [response.length]);
					_handleDisplay.apply(this, [index]);
                }, { silent: true });
            }
        }
    }

    function _handleDisplay(matches) {
        // The "this" keyword refers to the SuggestionField object
        var mode = matches > 0 ? 1 : 0;
        var display = { 0: 'none', 1: 'block' };
        this.list.style.display = display[mode];
        this.highlightIndex = -1;
        var height = (matches * _rowHeight);
        if (matches > _maxRows) {
            height = (_maxRows * _rowHeight);
            var scrollCorrection = this.version == 2 ? 0 : reliance.browser.scrollbarWidthCorrection();
            for (var i = 0; i < this.list.childNodes.length - 1; i++) {
                var item = this.list.childNodes[i];
                var primaryNode = item.childNodes[0];
                item.style.width = (item.offsetWidth - scrollCorrection) + 'px';
                primaryNode.style.width = (primaryNode.offsetWidth - scrollCorrection) + 'px';
            }
        }
		if (this.version != 2)
			this.list.style.height = (height + (document.compatMode == 'BackCompat' ? (reliance.browser.isIE() ? 3 : 1) : 0)) + 'px';
        if (mode != 0) {
            var offset = reliance.domUtilities.getOffset(this.field);
            this.list.style.left = offset.x + 'px';
            this.list.style.top = ((offset.y + this.field.offsetHeight) + 1) + 'px';

			if (this.version == 2) {
				var index = 0;
				for (var i=0; i<this.list.childNodes.length; i++) {
					if (this.list.childNodes[i].className == 'rn-search-location-title' || i == (this.list.childNodes.length - 1)) {
						if ((i - index - 1) >= 10) {
							this.list.childNodes[index].firstChild.style.width = 'auto';
							this.list.childNodes[index].firstChild.appendChild(document.createTextNode(' (first 10)'));
						}
						index = i;
					}
				}
			}
        }
    }

    function _unhighlight() {
        // The "this" keyword refers to the SuggestionField object
        this.style.backgroundColor = '#ffffff';
        this.childNodes[0].style.color = '#000000';
        if (this.childNodes[1])
            this.childNodes[1].style.color = '#999999';
    }

    function _highlight(displayIndex, mouseEvent) {
        // The "this" keyword refers to the SuggestionField object
        if (displayIndex > this.list.childNodes.length - 2) displayIndex = -1;
        if (displayIndex < -1) displayIndex = this.list.childNodes.length - 2;
        if (this.highlightIndex == -1) {
            this.userText = this.field.value;
        } else {
            _unhighlight.apply(this.list.childNodes[this.highlightIndex]);
        }
        if (displayIndex > -1 && displayIndex < this.list.childNodes.length - 1) {
            var node = this.list.childNodes[displayIndex];
            node.style.backgroundColor = '#d21f26';
            node.childNodes[0].style.color = '#ffffff';
            if (node.childNodes[1])
                node.childNodes[1].style.color = '#edb3b6';
            if (!mouseEvent)
                this.field.value = _getInnerText.apply(node.childNodes[0]);
        } else {
            this.field.value = this.userText;
        }
        if ((displayIndex + 1) * _rowHeight > this.list.scrollTop + (_maxRows * _rowHeight)) {
            this.list.scrollTop = (((displayIndex + 1) - _maxRows) * _rowHeight);
        } else if (displayIndex * _rowHeight < this.list.scrollTop) {
            this.list.scrollTop = (displayIndex * _rowHeight);
        }

        this.highlightIndex = displayIndex;
    }

    function _selectItem(dataItem) {
        // The "this" keyword refers to the SuggestionField object
        this.setValue(this.version == 2 ? dataItem.label : dataItem.suggestion);
        _handleDisplay.apply(this, [0]);
        if (this.method) {
            var callback = reliance.event.callbackArgs(null, this.method, (dataItem.arguments ? dataItem.arguments : dataItem));
            callback.apply();
        }
    }

    function _createItem(dataItem, displayIndex) {
        // The "this" keyword refers to the SuggestionField object
        
        //var itemWidth = this.width - (_getBorderCorrection() * (document.compatMode == 'BackCompat' ? 2 : 1));
        
		var noSuggestions = this.version == 2 && dataItem === 'No Suggestions';

        var itemWidth = this.width - _getBorderCorrection();
        if (reliance.browser.isIE()) {
			if (document.compatMode == 'BackCompat') {
				itemWidth -= _getBorderCorrection();
			}
        } else if (!reliance.browser.isFirefox()) {
			itemWidth -= _getBorderCorrection();
        }
        var nodeContentWidth = itemWidth - (_textPadding * 2);
        var primaryInfo = document.createElement('div');
        primaryInfo.style.cssText = 'position:absolute; white-space:nowrap; font-family:Arial, sans-serif; overflow:hidden; text-overflow:ellipsis; font-size:9pt; left:' + _textPadding + 'px; top:2px; zIndex:1; float:left; color:#000000; width:' + nodeContentWidth + 'px';
        primaryInfo.appendChild(document.createTextNode(this.version == 2 ? !noSuggestions ? dataItem.label : dataItem : dataItem.suggestion));

        var item = document.createElement('div');
        item.style.cssText = 'position:relative; float:left; width:' + itemWidth + 'px; height:' + _rowHeight + 'px; background-color:#ffffff;' + (!noSuggestions ? 'cursor:pointer' : '');
		if (!noSuggestions) {
			item.onmouseover = reliance.event.callbackArgs(this, _highlight, displayIndex, true);
			item.onclick = reliance.event.callbackArgs(this, _selectItem, dataItem);
		}
        item.appendChild(primaryInfo);

        if (this.displayInfo && dataItem.info) {
            var secondaryNodeWidth = nodeContentWidth * (this.infoSize / 100);
            primaryInfo.style.width = (nodeContentWidth - secondaryNodeWidth) + 'px'
            var secondaryInfo = primaryInfo.cloneNode(false);
            secondaryInfo.style.fontSize = '7.5pt';
            secondaryInfo.style.left = '';
            secondaryInfo.style.right = _textPadding + 'px';
            secondaryInfo.style.top = '3px';
            secondaryInfo.style.width = secondaryNodeWidth + 'px';
            secondaryInfo.style.zIndex = 0;
            secondaryInfo.style.cssFloat = 'right';
            secondaryInfo.style.styleFloat = 'right';
            secondaryInfo.style.textAlign = 'right';
            secondaryInfo.style.color = '#999999';
            secondaryInfo.appendChild(document.createTextNode(dataItem.info));

            item.appendChild(secondaryInfo);
        }
        return item;
    }

    function _getInnerText() {
        // The "this" keyword refers to the SuggestionField object
        if (this.innerText)
            return this.innerText;
        return this.textContent;
    }

	function _createTitle(type) {
		var title, method;
		switch (type) {
			case 1:
				title = 'Cities';
				method = 'City';
				break;
			case 2:
				title = 'Neighborhoods';
				method = 'Neighborhood';
				break;
			default:
				title = type;
				method = 'All';
				break;
		}
		var div = document.createElement('div');
		div.className = 'rn-search-location-title';
		div.style.width = this.width - _getBorderCorrection() + 'px';

		var content = document.createElement('div');
		content.appendChild(document.createTextNode(title));
		div.appendChild(content);

		return div;
	}

/*
    window.reliance_exportSymbols('reliance.controls', [['SuggestionField', SuggestionField]]);
    reliance.load('domUtilities');
    reliance.load('browser');
    reliance.load('xDomainHttpRequest');
*/
})();