jQuery.noConflict();

function pixgridderTinyMCEinit() {
	var DOM = tinymce.DOM;

	tinymce.init;

	tinymce.create('tinymce.plugins.PixGridder', {
		mceTout : 0,

		init : function(ed, url) {
			var t = this;

			ed.onBeforeSetContent.add(function(ed, o) {

				var head = tinyMCE.activeEditor.dom.select('head');

				var thisLink = jQuery("<link>"),
					thisLink2 = jQuery("<link>");
				thisLink.attr({
						type: 'text/css',
						rel: 'stylesheet',
						href: pixgridder_url+'/css/tinymce_frame.css'
				});
				jQuery(head).append( thisLink );

				if (pix_builder_modal=='open') {

					setTimeout(function(){
						var h = (jQuery('#textarea_builder').height() - (jQuery('#content_toolbargroup').height() + jQuery('#wp-content-editor-tools').height())),
							h2 = (jQuery('#textarea_builder').height() - (jQuery('#qt_content_toolbar').height() + jQuery('#wp-content-editor-tools').height()));

						ed.theme.resizeTo('auto', (h-42));
						jQuery('#wp-content-editor-container textarea').css({height:(h2-20)});

						jQuery(window).bind('resize',function(){
							h = (jQuery('#textarea_builder').height() - (jQuery('#content_toolbargroup').height() + jQuery('#wp-content-editor-tools').height()));
							h2 = (jQuery('#textarea_builder').height() - (jQuery('#qt_content_toolbar').height() + jQuery('#wp-content-editor-tools').height()));

							ed.theme.resizeTo('auto', (h-42));
							jQuery('#wp-content-editor-container textarea').css({height:(h2-20)});
						});
					},10);
				}

			});

		}

	});

	tinymce.PluginManager.add('pixgridder', tinymce.plugins.PixGridder);

}
jQuery(function() { pixgridderTinyMCEinit(); });