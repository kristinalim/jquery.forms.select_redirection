/* 
 * jQuery SelectRedirection plugin
 * Version: 0.1
 * 
 * Kristina Lim
 * http://i-think.com.ph/kristina
 *
 */

(function($) {
	$.fn.selectRedirection = function() {
		return this.each(
			function() {
				$(this).change(function() {
					top.location.href = $(this).val();
				});
			}
		);
	}
})(jQuery);
