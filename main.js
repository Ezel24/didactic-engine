var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}
function setTimeout()
{
    img_id="selfie1";
    take_snapshot();
    speak_data="taking yoyuaevb aseldfie i n 10 swde9onsdds"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis);

}
function take_snapshot()
{
    console.log(img_id)
    Webcam.snap(function(data_uri)
    {
        if(img_=="selfie1"){ 
        document.getElementById("result1").innerHTML='<img id="selfie_image" src="'+data_uri+'">';}
        if(img_=="selfie12"){ 
            document.getElementById("result2").innerHTML='<img id="selfie_image" src="'+data_uri+'">';}
            if(img_=="selfie3"){ 
                document.getElementById("resul1t3").innerHTML='<img id="selfie_image" src="'+data_uri+'">';}

    });
}