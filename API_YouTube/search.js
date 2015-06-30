// use with search.html

function showRespone(response){
  var responseString = JSON.stringify(response, '',2);//.stringify(JSON thing, replacer function, no of spaces )
  document.getElementById('response').innerHTML += responseString;
}

function onClientLoad(){
  gapi.client.load('youtube','v3',onYouTubeApiLoad);
}

function onYouTubeApiLoad(){
  gapi.client.setApiKey('SET KEY on  http://goo.gl/PdPA1');
}

function search() {
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: "Harlem Shake"
    });
    request.execute(onSearchResponse);
}

function onSearchResponse(response) {
    showResponse(response);
}
