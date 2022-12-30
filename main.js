//Get Data From Api
//Variables
let url ="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLvahqwMqN4M1wRSYyzJJqJWb2QxoBspyi&maxResults=20&key=AIzaSyATt6FrRM4bibVzR2y-sDkIfU_qpn8yGkE";

let theContent = document.getElementById("content");
let theIframe = document.getElementById("frame");

fetch(url).then(response => response.json())
.then(data => playData(data.items))
.catch(error => console.log(error));



function playData (listData) {
   console.log(listData);
   listData.forEach( element => {
    let title = element.snippet.title ; 
    let description = element.snippet.description.substring(0 , 200);
    let img = element.snippet.thumbnails.default.url;
    let idVideo = element.snippet.resourceId.videoId;


    theContent.innerHTML += ' <div class="shadow-lg p-3 mb-4 bg-body rounded" >  <div  onclick="playVideo(\''+idVideo+'\')" >' + '<img src=" '+img+' " style="float:left; margin-right:20px;" /> <p style="font-size:14px;font-weight:bold;margin-top:19px;">' +title +'</p><p style="font-size:12px;">'+ description+'</p></div></div>';
   // theContent.innerHTML += '<img src=" '+img+' " onclick="playVideo(\''+idVideo+'\')" /> </div>';
   // theContent.innerHTML += '<img src=" '+img+' "/>';
   });
}

function playVideo(idv){
   theIframe.src="https://www.youtube.com/embed/"+idv+ "?showinfo=0&rel=0"; // "?showinfo=0&rel=0" 
} 


