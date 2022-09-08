/**
 * @version    3.6.x
 * @package    Simple Image Gallery Pro
 * @author     JoomlaWorks - https://www.joomlaworks.net
 * @copyright  Copyright (c) 2006 - 2019 JoomlaWorks Ltd. All rights reserved.
 * @license    https://www.joomlaworks.net/license
 */
var SIGProHelper={ieBrowserDetect:function(){if(!document.getElementsByTagName)return!1;if(!document.getElementById)return!1;var e=document.getElementsByTagName("body")[0].className,o=-1!=navigator.userAgent.toLowerCase().indexOf("msie 6"),n=-1!=navigator.userAgent.toLowerCase().indexOf("msie 7"),t=-1!=navigator.userAgent.toLowerCase().indexOf("msie 8");o&&(document.getElementsByTagName("body")[0].className=e+" sigProIsIE6"),n&&(document.getElementsByTagName("body")[0].className=e+" sigProIsIE7"),t&&(document.getElementsByTagName("body")[0].className=e+" sigProIsIE8")},loader:function(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o&&o(),e()}}};SIGProHelper.loader(SIGProHelper.ieBrowserDetect);