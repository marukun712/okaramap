fetch('https://marukun-dev.com/verse/api')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        var num = data.length
        for (let i = 0; i < num; i++) {
            var title = data[i].title
            var ID = data[i].id
            var time = data[i].time
            var image = data[i].image

            $("#main").append(`<tr><td class="border"><a href="https://www.youtube.com/watch?v=${ID}">${title}</a></td></tr>`);
            $("#image").append(`<tr><td><a href="https://www.youtube.com/watch?v=${ID}"><img src="${image}" style="border: 9px solid white;"></a></td></tr>`);
            $("#time").append(`<tr><td class="border">${time}</td></tr>`)

        }
    })