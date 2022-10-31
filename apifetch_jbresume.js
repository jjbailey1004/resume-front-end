updateVisitCount();
function updateVisitCount() {
    fetch('https://pythondscounterconfig3gateway-8kncmh4x.ue.gateway.dev/vc')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data.count;
        })
    }