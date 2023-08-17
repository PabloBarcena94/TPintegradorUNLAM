
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'dayGridMonth',
      //events: 'https://fullcalendar.io/api/demo-feeds/events.json',
      editable: true,
      selectable: true,
      locale: 'es',
      events: [
        {
          title: 'Diseño UX/UI',  
          start: '2023-07-03',
          end: '2024-01-15',
        },
        {
          title: 'Marketing Digital',
          start: '2023-07-10',
          end: '2024-01-25',
        },
        {
          title: 'Product Marketing',
          start: '2023-07-07',
          end: '2024-01-18',
        },
        {
          title: 'Product Design',
          start: '2023-08-09',
          end: '2024-04-10',
        },
        {
          title: 'Desarrollo Apps',
          start: '2023-10-03',
          end: '2024-06-8',
        },
        {
          title: 'Marketing en Redes',
          start: '2023-11-13',
          end: '2024-06-15',
        }
    ]
    });
  
    calendar.render();
  });