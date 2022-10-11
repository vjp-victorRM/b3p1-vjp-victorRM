function cambiarATwitter(){
    var parte1 = document.querySelector("a");
    console.log(parte1.getAttributeNode("a"));
    parte1.setAttribute("id","aTwitter");
    parte1.setAttribute("href","https://twitter.com");
    document.createTextNode("Twitter");
    if(document.querySelector("title")){
        parte1.setAttribute("title","Ir a Twitter");
    }

}

 cambiarATwitter();




