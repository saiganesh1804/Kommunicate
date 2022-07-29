function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
    var c = url.searchParams.get(parameter);
    console.log(parameter, ":", c);
}

var url_name = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"
var url = new URL(url_name);
getUrlParameterValue(url, "utm_medium");
getUrlParameterValue(url, "utm_campaign");
