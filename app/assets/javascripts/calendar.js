$(function () {
    function eventCalendar() {
        return $('#calendar').fullCalendar({
        });
    };

    function clearCalendar() {
        $('#calendar').html('');
    };

    $(document).on('turbolinks:load', function () {
        eventCalendar();
    });
    $(document).on('turbolinks:before-cache', clearCalendar);

    $('#calendar').fullCalendar({
        events: '/events.json',
        lang: 'ja',
        contentHeight: 'auto',
        displayEventTime: false,
    });
  });
  
