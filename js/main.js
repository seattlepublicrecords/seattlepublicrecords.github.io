window.firstTimeLoad = true;

Array.prototype.remove = function() {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};
function makeWidget(element, data) {
    console.log(element, JSON.stringify(data));
    console.log('third', element.attr('data-type'))
    var widget_html = '';
    var limitOptions = '';
    console.log('RANGE', range(1,11));
    $.each(range(1,11), function(i, n) {
        limitOptions += '<option>'+(n*10) +'</option>';
    });
    if (!(element.attr('data-allow-query-edit') == 'false')) {
        widget_html += '<strong>Limit</strong> <select>'+limitOptions+'</select>'; 
    }
    if (element.attr('data-type') == 'table') {
        widget_html += '<table class="data_table">';
        var layout = 'horizontal';
        if (element.attr('data-layout') == 'horizontal') {
            widget_html += '<tr>';
        }
        
        var fields = data['fields'];
        if (element.attr('data-hide-fields')) {
            var fields_to_hide = element.attr('data-hide-fields').split(',');
            $.each(fields_to_hide, function(i, field) {
                fields.remove(field);
            });
        }
        if (element.attr('data-layout') == 'horizontal') {
            $.each(fields, function(i, field) {
                widget_html += '<th>' + field + '</th>';
            })
            widget_html += '</tr>';
        }
        $.each(data['rows'], function(i, row) {
            
            var whole_row_link = '';
            if (element.attr('data-whole-row-link')) {
                var link = element.attr('data-whole-row-link');
                link = link.replace('{fslocation}', data['rows'][i]['fslocation'])
                whole_row_link = ' class="linked_row" data-whole-row-link="' + link + '"';
            }
            widget_html += '<tr' + whole_row_link + '>';
            $.each(fields, function(j, field) {
                if (element.attr('data-layout') != 'horizontal') {
                    widget_html += '<tr><th>'+field+'</th>';
                }
                var cell = row[field];

                if(Array.isArray(cell)) {
                    cell = JSON.stringify(row[field]).replaceAll('","', '", "');
                } else if (cell.indexOf('http') > -1 && cell.indexOf(' ') == -1) {
                    cell = '<a href="' + cell + '">' + cell + '</a>';
                } else if (cell.indexOf('\n') > -1) {
                    cell = cell.replaceAll('\n', '<br/>');
                }
                widget_html += '<td>' + cell + '</td>';
                if (element.attr('data-layout') != 'horizontal') {
                    widget_html += '</tr>';
                }
            })
            if (element.attr('data-layout') == 'horizontal') {
                widget_html += '</tr>';
            }
        })
        widget_html += '</table>';
    }
    console.log(widget_html);
    element.html(widget_html);
}

function runWidgets() {
    console.log('running widgets');
    var url_parms = [];
    var hashFor = [];
    $.each(window.location.hash.slice(2).split('&'), function(i, item) {
        console.log(item.split('=')[0]);
        if (item.split('=')[0] == '*for') {
            hashFor.push(item[1]);
        } else {
            url_parms.push(item.split('='));
        }
    });
    $('.widget').each(function() {
        var element = $(this);
        if (!$(this).attr('data-query')) {
            
            var wheres = '';
            $.each(url_parms, function(i, item) {
                wheres += item[0] + " = '" + item[1] + "'";
                if (i < (url_parms.length - 1)) {
                    wheres += ' AND ';
                }
            });
            var query = 'SELECT * FROM ' + element.attr('data-table') + ' WHERE ' + wheres;
            var url = $(this).attr('data-url') + encodeURIComponent(query);
        } else {
            var url = $(this).attr('data-url') + encodeURIComponent($(this).attr('data-query'));
        }
        if (!(element.attr('data-hide-ifnohashurl') == 'true' && (hashFor.indexOf(element.attr('data-name')) > -1))) {
            element.html('Data is loading')
            $.get(url, function(data) {
                console.log('second');
                makeWidget(element, data);
            })
        }
    })
}
$(function() {
    runWidgets();
    $('body').on('click', '.linked_row', function() {
        window.location = $(this).attr('data-whole-row-link');
    })
    $(window).on('hashchange', function() {
        runWidgets();
    });
})