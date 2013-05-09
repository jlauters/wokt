jQuery(document).ready(function($) {
    beerParse = function(posts) {
        console.log('beerParse called...');
        $(posts).each(function(idx, obj) {

            // we only care about #homebrew posts
            if(obj.message && obj.message.match(/#homebrew/g)) {

                // check for tap update
                if(obj.message.match(/#tap/g)) {
                    // durph .. why oh why
                    obj.message = obj.message.replace(obj.link, '');
                    obj.message = obj.message.substr(0,(obj.message.length-2));

                    var parts = obj.message.split("#homebrew");
                    var tap_id = '';
                    $(parts).each(function(idx, part) {
                        if(0 == idx) {
                            obj.tapTitle = part.replace('.', '');
                        }

                        if(part.match(/#tap/g)) {
                            tap_id = part;
                        }
                    });

                    updateTap(tap_id, obj);       
                }
            }
        });
    }

    updateTap = function(tap_id, obj) {
        if(tap_id) {
            $(tap_id.toString()).html(
                '<span class="label label-info">Tap 3</span>'
              + '<h2>' + obj.tapTitle + '</h2>'
              + '<ul class="thumbnails">'
              + '<li class="span3">'
              + '<a class="thumbnail" href="' + obj.link + '">'
              + '<img src="' + obj.link + '" data-src="' + obj.link + '"/>'
              + '</a>'
              + '<p>' + obj.message + '</p>'
              + '</li>'
              + '</ul>'
            );
        }
    }
});
