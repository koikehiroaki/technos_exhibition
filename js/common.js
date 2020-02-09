console.log(1)


$('.study').css({
    position: 'relative',
})

$('.work').each(function () {
    $(this).parallaxFit({
        start: '#' + $(this).attr('id') + ', -500',
        end: '#' + $(this).attr('id') + ', -100',
        fromStyle: {
            opacity: '0',
            right: '200px'
        },
        toStyle: {
            opacity: '1',
            right: '0px'
        },
        easing: 'linear',
    }) 
})

/*
$('.desige_list').parallaxFit({
        start: '#design, -300',
        end: '#design',
        fromStyle: {
            opacity: '0',
        },
        toStyle: {
            opacity: '1',
        },
        easing: 'linear',
    })
*/


$('#design').parallaxTiming({
    eventTriggerPercentage: 0.1,
})

