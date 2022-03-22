var member = {
  'uno': {
    id: "UCLfAsY3iMUAF2vvDxvIjymQ"
  },
  'itsuki': {
    id: "UCi3aT9cC6YyC0BnOpm2XBEw"
  },
  'otoha': {
    id: "UCYcnLc0n1ryBDZeGWQTVJ_g"
  },
  'sera': {
    id: "UCvXsXmpMKthJuX8XHbsnOjQ"
  },
  'maru': {
    id: "UCOg01LJmZF9UnwFbly73CVw"
  }
}
var ids = []
$.ajax({
  type: 'GET',
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + member.itsuki.id + "&key=" + key3 + "&eventType=upcoming&type=video",
  datatype: 'json',
  success: function (json) {
    num = json.items.length;
    for (let i = 0; i < num; i++) {
      var ID = json.items[i].id.videoId
      ids.push(json.items[i].id.videoId);
      var title = json.items[i].snippet.title
      var image = json.items[i].snippet.thumbnails.medium.url;
      $("#main").append(`<tr><td class="border"><a href="https://www.youtube.com/watch?v=${ID}">💙${title}</a></td></tr>`);
      $("#image").append(`<tr><td><a href="https://www.youtube.com/watch?v=${ID}"><img src="${image}" style="border: 9px solid white;"></a></td></tr>`);
    }
  }
})

$.ajax({
  type: 'GET',
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + member.uno.id + "&key=" + key3 + "&eventType=upcoming&type=video",
  datatype: 'json',
  success: function (json) {
    num = json.items.length;
    for (let i = 0; i < num; i++) {
      var ID = json.items[i].id.videoId
      ids.push(json.items[i].id.videoId);
      var title = json.items[i].snippet.title
      var image = json.items[i].snippet.thumbnails.medium.url;
      $("#main").append(`<tr><td class="border"><a href="https://www.youtube.com/watch?v=${ID}">🧡${title}</a></td></tr>`);
      $("#image").append(`<tr><td><a href="https://www.youtube.com/watch?v=${ID}"><img src="${image}" style="border: 9px solid white;"></a></td></tr>`);
    }
  }
})
$.ajax({
  type: 'GET',
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + member.maru.id + "&key=" + key3 + "&eventType=upcoming&type=video",
  datatype: 'json',
  success: function (json) {
    num = json.items.length;
    for (let i = 0; i < num; i++) {
      var ID = json.items[i].id.videoId
      ids.push(json.items[i].id.videoId);
      var title = json.items[i].snippet.title
      var image = json.items[i].snippet.thumbnails.medium.url;
      $("#main").append(`<tr><td class="border"><a href="https://www.youtube.com/watch?v=${ID}">💛${title}</a></td></tr>`);
      $("#image").append(`<tr><td><a href="https://www.youtube.com/watch?v=${ID}"><img src="${image}" style="border: 9px solid white;"></a></td></tr>`);
    }
  }
})
$.ajax({
  type: 'GET',
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + member.sera.id + "&key=" + key3 + "&eventType=upcoming&type=video",
  datatype: 'json',
  success: function (json) {
    num = json.items.length;
    for (let i = 0; i < num; i++) {
      var ID = json.items[i].id.videoId
      ids.push(json.items[i].id.videoId);
      var title = json.items[i].snippet.title
      var image = json.items[i].snippet.thumbnails.medium.url;
      $("#main").append(`<tr><td class="border"><a href="https://www.youtube.com/watch?v=${ID}">❤${title}</a></td></tr>`);
      $("#image").append(`<tr><td><a href="https://www.youtube.com/watch?v=${ID}"><img src="${image}" style="border: 9px solid white;"></a></td></tr>`);
    }
  }
})
$.ajax({
  type: 'GET',
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=" + member.otoha.id + "&key=" + key3 + "&eventType=upcoming&type=video",
  datatype: 'json',
  success: function (json) {
    num = json.items.length;
    for (let i = 0; i < num; i++) {
      var ID = json.items[i].id.videoId
      ids.push(json.items[i].id.videoId);
      var title = json.items[i].snippet.title
      var image = json.items[i].snippet.thumbnails.medium.url;
      $("#main").append(`<tr><td class="border"><a href="https://www.youtube.com/watch?v=${ID}">💜${title}</a></td></tr>`);
      $("#image").append(`<tr><td><a href="https://www.youtube.com/watch?v=${ID}"><img src="${image}" style="border: 9px solid white;"></a></td></tr>`);
    }
  }
})

function gettime() {
  console.log(ids)
  num = ids.length;
  for (let i = 0; i < num; i++) {
    $.ajax({
      type: 'GET',
      url: `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${ids}&key=${key3}`,
      datatype: 'json',
      success: function (json) {
        num = json.items.length;
        var timedata = json.items[i].liveStreamingDetails.scheduledStartTime
        var time = moment(timedata).format('YYYY.MM.DD HH:mm')
        $("#time").append(`<tr><td class="border">${time}</td></tr>`)
      }
    })
  }
}
setTimeout(gettime, 1000)