var adManager = {
	list: [],
	inti: null,
	anchor: "__ad__$key__$id",
	preview: "",
	second: 60,
	agent: [],
	$: function(o) {
		return document.getElementById(o);
	},
	$N: function(o) {
		return document.getElementsByName(o);
	},
	$V: function(i) {
		document.write(i);
	},
	adPoint: function(id) {
		adManager.getPosition("ad_" + id);
	},
	adLoad: function() {},
	getPosition: function(obj) {
		var obj = adManager.getObject(obj);
		this.width = obj.offsetWidth;
		this.height = obj.offsetHeight;
		this.top = obj.offsetTop;
		this.left = obj.offsetLeft;
		while (obj = obj.offsetParent) {
			this.top += obj.offsetTop;
			this.left += obj.offsetLeft;
		}
	},
	getObject: function(o) {
		if (typeof(o) != "object") {
			var o = adManager.$(o);
		};
		return o;
	},
	delObject: function(obj) {
		var obj = adManager.getObject(obj);
		obj.parentNode.removeChild(obj);
	},
	getCookie: function(key) {
		var str = "";
		var arr = document.cookie.replace(/%25/g, "%").replace(/%5F/g, "_").match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
		if (arr != null) {
			try {
				str = decodeURIComponent(arr[2]);
			} catch(e) {
				str = arr[2];
			}
		};
		return str;
	},
	getDocument: function() {
		return (document.documentElement && document.documentElement.clientWidth) ? document.documentElement: document.body;
	},
	adStart: function() {
		adManager.getAgent();
		adManager.domain = adManager.host = location.host;
		if (adManager.host.indexOf(".") > 0) {
			var host = adManager.host.split(".");
			adManager.domain = host[host.length - 2] + "." + host[host.length - 1];
		};
		adManager.cookie = "__ad";
		adManager.views = parseInt(adManager.getCookie(adManager.cookie + "_view"));
		adManager.views = (isNaN(adManager.views) ? 0 : adManager.views);
		adManager.date = parseInt(adManager.getCookie(adManager.cookie + "_date"));
		if (((new Date().getTime() / 1000) - adManager.date <= adManager.second)) {
			return;
		};
		if (adManager.views) {
			adManager.views++;
		} else {
			adManager.views = 1;
		};
		adManager.setCookie(adManager.cookie + "_view", adManager.views, 86400);
		adManager.setCookie(adManager.cookie + "_date", (Date.parse(new Date()) / 1000), 86400);
	},
	setCookie: function(key, value, second, domain) {
		var cookies = key.replace("_", "%5F") + "=" + encodeURIComponent(value) + "; ";
		if (second) {
			var dExpire = new Date();
			dExpire.setTime(dExpire.getTime() + parseInt(second * 1000));
			cookies += "expires=" + dExpire.toUTCString() + "; ";
		};
		if (domain) {
			cookies += "domain=" + domain + "; ";
		};
		cookies += "path=/;";
		document.cookie = cookies;
	},
	strTrim: function(s) {
		return s.replace(/(^\s*)|(\s*$)/g, "");
	},
	addIframe: function(url) {
		adManager.addLoadEvent(function() {
			var Bodys = document.getElementsByTagName("body").item(0);
			var ifr = document.createElement("iframe");
			ifr.style.width = "0px";
			ifr.style.height = "0px";
			ifr.style.border = "none";
			ifr.src = url;
			Bodys.appendChild(ifr);
		});
	},
	addLoadEvent: function(func) {
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
				oldonload();
				func();
			}
		}
	}
};
adManager.getAgent = function() {
	agent = adManager.agent;
	var nav = navigator;
	agent.scrWidth = screen.width;
	agent.scrHeight = screen.height;
	agent.colDepth = screen.colorDepth;
	agent.cookieEn = nav.cookieEnabled ? 1 : 0;
	agent.javaEn = nav.javaEnabled() ? 1 : 0;
	agent.flash = (function() {
		var f = "-";
		var n = navigator;
		if (n.plugins && n.plugins.length) {
			for (var i = 0; i < n.plugins.length; i++) {
				if (n.plugins[i].name.indexOf('Shockwave Flash') != -1) {
					f = n.plugins[i].description.split('Shockwave Flash ')[1];
					break;
				}
			}
		} else if (window.ActiveXObject) {
			for (var i = 10; i >= 2; i--) {
				try {
					var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + i + "');");
					if (fl) {
						f = i + '.0';
						break;
					}
				} catch(e) {}
			}
		};
		return f;
	})();
};
adManager.adStart();
adManager.adLoad = function(adMark, adName, adType, adNumber, adKey, adSize, adPrice, adTag, adRequest) {
	this.adMark = adMark;
	this.adKey = adKey;
	this.adSize = adManager.strTrim(adSize);
	this.adType = parseInt(adType);
	this.adNumber = parseInt(adNumber);
	this.adRequest = adRequest;
	this.adArray = [];
	if (adSize.indexOf("*") > 0) {
		this.adSize = [this.adSize.split("*")[0], this.adSize.split("*")[1]];
	} else {
		this.adSize = [0, 0];
	};
	adManager.list[adKey] = [];
	adManager.list[adKey]["property"] = new Array(adMark, adName, adType, adNumber, adSize, adPrice, adTag, adRequest);
	this.adAdd = function(adId, adText, adImage, adWidth, adHeight, adLink, adTarget, adExpire, adStatView, adStatClick, adForm, adStyle, adDefault, adShowTime, adShowSpace) {
		var sid = "__as_" + adId;
		var val = adManager.getCookie(sid);
		var now = (new Date().getTime() / 1000 / 3600);
		if (adShowSpace && val && (now - val <= adShowSpace)) {
			return false;
		} else {
			adManager.setCookie(sid, now, (adShowSpace * 3600), "");
		};
		adManager.list[this.adKey][adManager.list[this.adKey].length] = new Array(adId, adText, adWidth, adHeight, adImage, adLink, adExpire);
		// if (adStatClick) {
		// 	var Agent = adManager.agent;
		// 	var doc = adManager.getDocument();
		// 	Agent.cliWidth = doc.clientWidth;
		// 	Agent.cliHeight = doc.clientHeight;
		// 	adLink = this.adRequest + "?action=click&area=" + this.adKey + "&id=" + adId + "&url=" + encodeURIComponent(adLink) + "&variable=" + (this.variable ? encodeURIComponent(this.variable) : '') + "&source=" + encodeURIComponent(location.href) + "&view=" + adManager.views + "&color=" + Agent.colDepth + "&flash=" + Agent.flash + "&cookie=" + Agent.cookieEn + "&java=" + Agent.javaEn + "&screen=" + Agent.scrWidth + "*" + Agent.scrHeight + "&client=" + Agent.cliWidth + "*" + Agent.cliHeight;
		// };
		var len = this.adArray.length;
		this.adArray["ad_" + parseInt(adId)] = [adId, this.adKey, adText, parseInt(adWidth), parseInt(adHeight), adImage, adLink, adTarget, adForm, adStyle, adShowTime];
		this.adArray[len] = this.adArray["ad_" + parseInt(adId)];
		var cid = "__av_" + adId;
		var val = adManager.getCookie(cid);
		if (adStatView && !val) {
			adManager.setCookie(cid, "view", adManager.second, "");
			adManager.addIframe(this.adRequest + "?action=view&id=" + adId);
		} else {
			if (val != "update") {
				adManager.setCookie(cid, "update", adManager.second, "");
				adManager.addIframe(this.adRequest + "?action=update&id=" + adId + "&rnd=" + Math.random());
			}
		};
		if (!adDefault) {
			if (new Date().getTime() > (adExpire * 1000)) {
				adManager.addIframe(this.adRequest + "?action=expire&id=" + adId + "&rnd=" + Math.random());
			}
		}
	};
	this.adHTML = function() {
		adImage = adImage.replace(" ", "");
		var TEMP_IMAGE = '<img src="$src$" alt="$title$" style="border:none;width:$width$px;height:$height$px; $style$ " />';
		var TEMP_FLASH = '<EMBED id="$fid$" src="$src$" quality="high" width="$width$" height="$height$" style="width:$width$px; height:$height$px; margin:0; paading:0; border:0;" scale="exactfit" AllowScriptAccess="$script$" AllowNetworking="$net$" wmode="opaque" TYPE="application/x-shockwave-flash"></EMBED>';
		var TEMP_TEXT = '<font style="$style$">' + adText + '</font>';
		if (!adImage) return TEMP_TEXT;
		return (/\.swf$/i.test(adImage) == true ? TEMP_FLASH: TEMP_IMAGE).replace(/\$src\$/gi, adImage).replace(/\$width\$/gi, adWidth).replace(/\$height\$/gi, adHeight);
	};
	this.adCreate = function(index) {
		var adCfg = this.adArray[index];
		adId = adCfg[0];
		adKey = adCfg[1];
		adText = adCfg[2];
		adWidth = adCfg[3];
		adHeight = adCfg[4];
		adImage = adCfg[5];
		adLink = adCfg[6];
		adTarget = adCfg[7];
		adForm = adCfg[8];
		adStyle = adCfg[9];
		if (adForm) {
			return '';
		};
		var adTag = adManager.list[adKey]["property"][6];
		var adTagClass = " ";
		if(index >0){
			adTagClass = " class='gird-space'";
		}
		var TEMP_LINK = (adTag ? '<' + adTag + adTagClass + '>': '') + (adLink ? '<a href="$link$" target="$target$" name="' + adManager.anchor + '" id="' + adManager.anchor + '">$ad_fodder$</a>': '$ad_fodder$') + (adTag ? '</' + adTag + '>': '');
		TEMP_LINK = TEMP_LINK.replace(/\$key/ig, adKey).replace(/\$id/ig, adId);
		var TEMP_COVER = '<a name="' + adManager.anchor + '"  id="' + adManager.anchor + '" style="display:none"></a>$ad_fodder$';
		TEMP_COVER = TEMP_COVER.replace(/\$key/ig, adKey).replace(/\$id/ig, adId);
		adWidth = parseInt(adWidth);
		adHeight = parseInt(adHeight);
		var _adHTML = this.adHTML();
		_adHTML = _adHTML.replace(/\$key/gi, adKey).replace(/\$id/gi, adId);
		if (/\.swf$/i.test(adImage) == false) {
			return TEMP_LINK.replace(/\$ad_fodder\$/gi, _adHTML).replace(/\$link\$/gi, adLink).replace(/\$target\$/gi, adTarget).replace(/\$style\$/gi, adStyle).replace(/\$title\$/gi, adText).replace(/\$key/gi, adKey).replace(/\$id/gi, adId);
		};
		var adClcik = "";
		if (adLink) {
			_adHTML = _adHTML.replace(/\$script\$/gi, "never");
			_adHTML = _adHTML.replace(/\$net\$/gi, "none");
			switch (adTarget) {
			case "_blank":
				adClcik = 'window.open(&apos;$link$&apos;); ';
				break;
			case "_top":
				adClcik = "top.location.href=&apos;$link$&apos;; ";
				break;
			default:
				adClcik = "location.href=&apos;$link$&apos;; ";
				break;
			};
			_adHTML = _adHTML.replace(/\$fid\$/gi, "");
			_adHTML = '<iframe src="' + this.adRequest + 'flash.html?flash=' + adImage + '&width=' + adWidth + '&height=' + adHeight + '&target=' + adTarget + '&title=' + escape(adText) + '&link=' + adLink.replace(/&/g, "%26") + '&rnd=' + Math.random() + '" scrolling="no" frameborder="0" style="height:$height$px; width:$width$px; overflow:hidden; background:transparent; $style$" id="' + adManager.anchor + '"></iframe>';
		} else {
			_adHTML = _adHTML.replace(/\$fid\$/gi, adManager.anchor);
			_adHTML = _adHTML.replace(/\$script\$/gi, "always");
			_adHTML = _adHTML.replace(/\$net\$/gi, "all");
		};
		_adHTML = _adHTML.replace(/\$click\$/gi, adClcik.replace(/\$link\$/gi, adLink)).replace(/\$style\$/gi, adStyle).replace(/\$title\$/gi, adText);
		if (adTag) {
			_adHTML = '<' + adTag + '>' + _adHTML + '</' + adTag + '>';
		};
		return TEMP_COVER.replace(/\$ad_fodder\$/gi, _adHTML.replace(/&apos;/ig, "'")).replace(/\$key/gi, adKey).replace(/\$id/gi, adId).replace(/\$width\$/gi, adWidth).replace(/\$height\$/gi, adHeight);
	};
	this.adMove = function(obj) {
		var _self = this;
		var inti = "";
		if (obj) {
			obj.style.top = adManager.getDocument().scrollTop + 150 + "px";
			inti = window.setTimeout(function() {
				_self.adMove(obj);
			},
			1);
		} else {
			clearInterval(inti);
		}
	};
	this.adInsert = function() {
		var str = "";
		if (this.adArray.length < 1 || this.adNumber == 0) return;
		switch (this.adType) {
		case 1:
			for (var i = 0; i < this.adArray.length; i++) {
				str += this.adCreate(i);
				if (i == this.adNumber - 1) break;
			};
			break;
		case 2:
			for (var i = 0; i < this.adNumber; i++) {
				var n = parseInt(Math.random() * this.adArray.length);
				str += this.adCreate(n);
				this.adArray.splice(n, 1);
				if (i == this.adNumber - 1) break;
			};
			break;
		case 3:
		case 4:
			var adCouplet = [];
			adCouplet[0] = "";
			adCouplet[1] = "";
			for (var i = 0; i < this.adArray.length; i++) {
				var n = i % 2 > 0 ? n = 1 : n = 0;
				adCouplet[n] = adCouplet[n] + this.adCreate(i);
				if (i == this.adNumber - 1) break;
			};
			if (adCouplet[0]) {
				var rnd = Math.random();
				adManager.$V('<div id="' + rnd + '" style="position:absolute;left:20px;top:0;">' + adCouplet[0] + '</div>');
				if (this.adType == 4) {
					this.adMove(adManager.$(rnd));
				}
			};
			if (adCouplet[1]) {
				var rnd = Math.random();
				adManager.$V('<div id="' + rnd + '" style="position:absolute;right:20px;top:0;">' + adCouplet[1] + '</div>');
				if (this.adType == 4) {
					this.adMove(adManager.$(rnd));
				}
			};
			break;
		case 5:
			for (var i = 0; i < this.adArray.length; i++) {
				str += this.adCreate(i);
				if (i == this.adNumber - 1) break;
			};
			var tmpArray = this.adArray;
			var self = this;
			for (var i = 0; i < tmpArray.length; i++) { (function() {
					var adId = tmpArray[i][0];
					var adKey = tmpArray[i][1];
					var adSTime = tmpArray[i][10];
					window.setTimeout(function() {
						var n = adManager.anchor.replace("$key", adKey).replace("$id", adId);
						var o = adManager.$N(n);
						for (var j = 0; j < o.length; j++) {
							adManager.delObject(o[j]);
						};
						if (adManager.$(n)) {
							adManager.delObject(adManager.$(n));
						}
					},
					(1000 * adSTime));
				})();
				if (i == self.adNumber - 1) break;
			};
			break;
		case 6:
			for (var i = 0; i < this.adArray.length; i++) {
				var adLink = this.adArray[i][6];
				window.open(adLink, "");
				if (i == this.adNumber - 1) break;
			};
			break;
		case 7:
			for (var i = 0; i < this.adArray.length; i++) {
				var adWidth = this.adArray[i][3];
				var adHeight = this.adArray[i][4];
				var adLink = this.adArray[i][6];
				var adStyle = this.adArray[i][9];
				str += '<iframe src="' + adLink + '" scrolling="no" frameborder="0" width="' + adWidth + '" height="' + adHeight + '" style="' + adStyle + '"></iframe>';
				if (i == this.adNumber - 1) break;
			};
			break;
		case 8:
			for (var i = 0; i < this.adArray.length; i++) {
				var adId = this.adArray[i][0];
				var adWidth = this.adArray[i][3];
				var adHeight = this.adArray[i][4];
				var adSTime = this.adArray[i][10];
				adManager.$V('<div id="slide-ads-' + adId + '" style="width:' + adWidth + 'px; height:0px;overflow:hidden;">' + this.adCreate(i) + '</div>'); (function() {
					var ADId = adId;
					var ADHeight = adHeight;
					var ADWidth = adWidth;
					var ADSTime = adSTime;
					var ADObject = adManager.$('slide-ads-' + ADId);
					var time = 500;
					var h = 0;
					var inter = window.setInterval(function() {
						if (time > 0) {
							time--;
							h += 15;
						} else {
							clearInterval(inter);
							return;
						};
						ADObject.style.display = "";
						ADObject.style.height = (h > ADHeight ? ADHeight: h) + "px";
						if (h >= ADHeight) {
							clearInterval(inter);
							return;
						}
					},
					10);
					window.setTimeout(function() {
						clearInterval(inter);
						var N = ADHeight;
						var inter = window.setInterval(function() {
							if (N > 1) {
								N -= 10;
								N = (N <= 1 ? 1 : N);
								ADObject.style.height = N + "px";
							} else {
								clearInterval(inter);
								adManager.delObject(ADObject);
								return;
							}
						},
						30);
					},
					(1000 * adSTime));
				})();
				if (i == this.adNumber - 1) break;
			};
			break;
		case 9:
			var _files = '';
			var _links = '';
			var _texts = '';
			for (var i = 0; i < this.adArray.length; i++) {
				var adText = this.adArray[i][2];
				var adWidth = this.adArray[i][3];
				var adHeight = this.adArray[i][4];
				var adImage = this.adArray[i][5];
				var adLink = this.adArray[i][6];
				_files += adImage;
				_links += adLink.replace(/&/g, "%26");
				_texts += adText;
				//if (i == this.adNumber - 1) {
				//	break;
				//} else {
					_files += '|';
					_links += '|';
					_texts += '|';
				//}
			};
			var _width = adWidth;
			var _height = adHeight;
			if (this.adSize[0] && this.adSize[1]) {
				_width = this.adSize[0];
				_height = this.adSize[1];
			};
			str = '<embed src="' + this.adRequest + 'image-silde.swf" wmode="opaque" FlashVars="bcastr_file='
				  + _files.substr(0, _files.length - 1) + '&bcastr_link=' + _links.substr(0, _links.length - 1)
				  + '&bcastr_title=" menu="false" quality="high" width="' + _width + '" height="' + _height
				  + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
			break;
		case 10:
			for (var i = 0; i < this.adArray.length; i++) {
				var adId = this.adArray[i][0];
				var adWidth = this.adArray[i][3];
				var adHeight = this.adArray[i][4];
				var adSTime = this.adArray[i][10];
				adManager.$V('<div id="slide-ads-' + adId + '" style="width:' + adWidth + 'px; position:absolute;">'
					     + this.adCreate(i) + '</div>'); (function() {
					var ADId = adId;
					var ADHeight = adHeight;
					var ADWidth = adWidth;
					var ADSTime = adSTime;
					var ADObject = adManager.$('slide-ads-' + ADId);
					var N = 0;
					var inti = window.setInterval(function() {
						if (N < 100) {
							N += 10;
							ADObject.style.filter = "alpha(opacity=" + N + ");";
							ADObject.style.mozOpacity = (N / 100);
							ADObject.style.opacity = (N / 100);
						} else {
							clearInterval(inti);
							return;
						}
					},
					50);
					var inter = window.setInterval(function() {
						var doc = adManager.getDocument();
						ADObject.style.top = (doc.scrollTop + (doc.clientHeight - ADHeight) / 2) + "px";
						ADObject.style.left = ((doc.scrollLeft + doc.offsetWidth - ADWidth) / 2) + "px";
					},
					10);
					window.setTimeout(function() {
						var N = 100;
						clearInterval(inter);
						var inter = window.setInterval(function() {
							if (N > 0) {
								N -= 15;
								ADObject.style.filter = "alpha(opacity=" + N + ");";
								ADObject.style.mozOpacity = (N / 100);
								ADObject.style.opacity = (N / 100);
							} else {
								adManager.delObject(ADObject);
								clearInterval(inter);
								return;
							}
						},
						50);
					},
					(1000 * ADSTime));
				})();
				if (i == this.adNumber - 1) break;
			};
			break;
		};
		if (str) {
			adManager.$V(str);
		}
	}
}