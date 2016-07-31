function makeWidget(element, data) {
  console.log(element, JSON.stringify(data));
  console.log('third', element.attr('data-type'))
  var widget_html = '';
  if (element.attr('data-type') == 'table') {
    widget_html += '<table><tr>';
    $.each(data['fields'], function(i, field) {
      widget_html += '<td>'+field+'</td>';
    })
    widget_html += '</tr>';
    $.each(data['rows'], function(i, row) {
      widget_html += '<tr>';
      $.each(data['fields'], function(j, field) {
        var cell = row[field];
        if (Array.isArray(cell)) {
            cell = JSON.stringify(row[field]);
        }
        widget_html += '<td>'+cell+'</td>';
      })
      widget_html += '</tr>';
    })
    widget_html += '</table>';
  }
  console.log(widget_html);
  element.html(widget_html);
}
function runWidgets() {
  console.log('running widgets');
  $('.widget').each(function() {
    console.log('first');
    var url = $(this).attr('data-url') + encodeURIComponent($(this).attr('data-query'));
    var element = $(this);
    element.html('Data is loading')
    $.get(url, function(data) {
      console.log('second');
      makeWidget(element, data);
    })
  })
}
  $(function() {
    runWidgets();
  })
