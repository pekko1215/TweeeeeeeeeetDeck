$(function() {
        setInterval(function() {
                $('section').each(function(i, vd) {
                        var val = $(vd)
                        if ($(vd).attr('resizeble') != "true") {
                                val.attr('resizeble', true);
                                val.funcResizeBox({
                                        isHeightResize: false
                                })
                                val.css("overflow-x","hidden")
                        }
                })
        }, 5000)
})
