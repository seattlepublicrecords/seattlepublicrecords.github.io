---
layout: page
title: Seattle Police West Precinct Radio Scanner
permalink: /information/agencies/city_of_seattle/seattle_police_department/radio_scanner/
---

<script>
  $(function() {
    $.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&channelId=UC9A7EGZcrfsuLtpyyQRmbww&eventType=live&key=AIzaSyA2NXaonfp6HwfPSxLxKPibYbVk3dtgh24', function(data){
    console.log(JSON.stringify(data));
      var items = data["items"].reverse();
      $('#video').attr('src', 'https://www.youtube.com/embed/'+items[0]["id"]["videoId"])
    })
  })
</script><iframe id="video" width="200" height="200" src="" frameborder="0" allowfullscreen></iframe>
