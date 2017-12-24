var tree;
var correctAnswer;
var verbName;
var functionCounter = 0;
$.getJSON( "./verbs.json", function( data ) {
    tree = data;
    // console.log( "JSON Data: " + data);
    // $.each( data, function( key, val ) {
    //     console.log(key + "value:: " + val );
    // });
    // console.log(tree.manifest);
    getVerb();
});

function getVerb (){
  var manifest = tree.manifest;
  var verbNum = Math.floor((Math.random() * (tree.manifest.length)));
  var conjugationNum = Math.floor((Math.random() * (tree.verbConjugationManifest.length)));

  //console.log(verbNum);
  //console.log(tree[manifest[verbNum]]);
  var currentVerb = tree[manifest[verbNum]];
  //console.log(tree.manifest[verbNum]);
  $("#verb").text(tree.manifest[verbNum]);
  var verb = tree.manifest[verbNum];
  console.log(verb);
  //$("#conjugationType").text(currentVerb[tree.verbConjugationManifest[conjugationNum]]);
  var conjugationType = tree.verbConjugationManifest[conjugationNum];
  correctAnswer = tree[verb][conjugationType];
  verbName = tree.plainEnglishDictionary[conjugationType];
  $("#conjugationText2").text(verbName);
  $("#conjugationText2").css("left","0").css("opacity","1");
  //$("#conjugationText2").css("opacity","1");

}
$("#conjugationText2").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
  if (functionCounter == 0){
    $("#conjugationText").text("");
    $("#conjugationText").removeClass("leavescreen");
    $("#conjugationText").css("opacity","1");
    $("#conjugationTextHolder").text(verbName);
    $("#conjugationText2").text("")
    $("#conjugationText2").css("left","1000px")
  }
  functionCounter+=1;
});


var mapObj = {a:"\u3042",i:"\u3044",u:"\u3046",e:"\u3048",o:"\u304A",ka:"\u304B",ga:"\u304c",
ki:"\u304D",gi:"\u304E", ku:"\u304F", gu:"\u3050", ke:"\u3051", ge:"\u3052", ko:"\u3053", go:"\u3054", sa:"\u3055", za:"\u3056",
shi:"\u3057", ji:"\u3058", su:"\u3059", zu:"\u305A", se:"\u305B", ze:"\u305c", so:"\u305D",zo:"\u305E", ta:"\u305F", da:"\u3060", chi:"\u3061",
di:"\u3062", tsu: "\u3064", du:"\u3065", te:"\u3066", de:"\u3067",to:"\u3068",do:"\u3069", na:"\u306A", ni:"\u306B",ne:"\u306D", no:"\u306E",
ha: "\u306F", ba:"\u3070", pa:"\u3071", hi:"\u3072", bi:"\u3073", pi:"\u3074", fu:"\u3075", bu:"\u3076", pu:"\u3077", he:"\u3078", be:"\u3079", pe:"\u307A",
ho:"\u307B", bo:"\u307C", po:"\u307D", ma:"\u307E", mi:"\u307F", mu:"\u3080", me:"\u3081", mo:"\u3082", ya:"\u3084", yu:"\u3086", yo:"\u3088", ra:"\u3089", ri:"\u308A", ru:"\u308B", re:"\u308C", ro:"\u308D",
wa:"\u308F", wo: "\u3092", nn:"\u3093", nya:"\u306B\u3083", cha:"\u3061\u3083", sha:"\u3057\u3083", kya:"\u304D\u3083", nyu:"\u306B\u3085", chu:"\u3061\u3085",shu:"\u3057\u3085",kyu:"\u304D\u3085", nyo:"\u306B\u3087", cho:"\u3061\u3087", sho:"\u3057\u3087",
kyo:"\u304D\u3087", gya:"\u304E\u3083", rya:"\u308A\u3083", mya:"\u307F\u3083", hya:"\u3072\u3083", gyu:"\u304E\u3085", ryu:"\u308A\u3085", myu:"\u307F\u3084", hyu:"\u3072\u3085", gyo:"\u304E\u3087", ryo:"\u308A\u3087", myo:"\u307F\u3087", hyo:"\u3072\u3087",
pya:"\u3074\u3083", bya:"\u3073\u3083", dzya:"\u3065\u3083", jya:"\u3058\u3083", ja:"\u3058\u3083", jo:"\u3058\u3087", pyu:"\u3074\u3085", byu:"\u3073\u3085", dzyu:"\u3065\u3085", jyu:"\u3058\u3085",ju:"\u3058\u3085", pyo:"\u3074\u3087", byo:"\u3073\u3087", dzyo:"\u3065\u3087",
jyo:"\u3058\u3087", t:"\u3063", k:"\u3063", g:"\u3063", s:"\u3063", z:"\u3063", n:"\u3063"};
$("input[name=fname]").keyup(function(e){
//var c = String.fromCharCode(e.which);
var str = $(this).val();
//console.log(str)
str = str.replace(/a|i|u|e|o|ka|ga|ki|gi|ku|gu|ke|ge|ko|go|sa|za|shi|ji|su|zu|se|ze|so|zo|ta|da|chi|di|tsu|du|te|de|to|do|na|ni|ne|no|ha|ba|pa|hi|bi|pi|fu|bu|pu|he|be|pe|ho|bo|po|ma|mi|mu|me|mo|ya|yu|yo|ra|ri|ru|re|ro|wa|wo|nn|nya|cha|sha|kya|nyu|chu|shu|kyu|nyo|cho|sho|kyo|gya|rya|mya|hya|gyu|ryu|myu|hyu|gyo|ryo|myo|hyo|pya|bya|dzya|jya|pyu|byu|dzyu|jyu|pyo|byo|dzyo|jyo|jo|ja|ju|t(?=t)|k(?=k)|g(?=g)|s(?=s)|z(?=z)|n(?=n)/gi, function(matched){
  return mapObj[matched];
});
//console.log(str);
$(this).val(str);
})

$('input[name=fname]').keydown(function (e){
    if(e.keyCode == 13){
        checkCorrect();
    }
})

$(".correct").click(function(){
  checkCorrect();
})
var counter = 0;
function checkCorrect(){
  if (counter == 0){
    counter+=1;
    var checkString = $("input[name=fname]").val();
    console.log(checkString);
    console.log(correctAnswer);
    if (checkString == correctAnswer){
      $(".answerBar").css("background-color", "#3DA35D");
    }
    else{
      $(".answerBar").css("background-color", "#C5283D");
      counter = 0;
    }
  }
  else{
    functionCounter = 0;
    $("#conjugationText").text(verbName);
    $("#conjugationTextHolder").text("");
    $("#conjugationText").addClass("leavescreen");
    $("#conjugationText").css("opacity", "0");
    $(".answerBar").css("background-color", "white");
    counter = 0;
    getVerb();
    $("input[name=fname]").val("");
  }
}
