var tree;
$.getJSON( "./verbs.json", function( data ) {
    tree = data;
    console.log( "JSON Data: " + data);
    $.each( data, function( key, val ) {
        console.log(key + "value:: " + val );
    });
    console.log(tree.manifest);
    var manifest = tree.manifest;
    var verbNum = Math.floor((Math.random() * (tree.manifest.length)));
    var conjugationNum = Math.floor((Math.random() * (tree.verbConjugationManifest.length)));

    console.log(verbNum);
    console.log(tree[manifest[verbNum]]);
    var currentVerb = tree[manifest[verbNum]];
    console.log(tree.manifest[verbNum]);
    $("#verb").text(tree.manifest[verbNum]);
    //$("#conjugationType").text(currentVerb[tree.verbConjugationManifest[conjugationNum]]);
    var conjugationType = tree.verbConjugationManifest[conjugationNum];
    $("#conjugationType").text(tree.plainEnglishDictionary[conjugationType]);
});
