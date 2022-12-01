
// chrome - console 控制台执行以下代码

function sum_num(json_resp){
    var sum_num = 0
    for (let i = 0; i < 10; i++) {
        var aaa = json_resp[i].value
        console.log(aaa)
        sum_num += parseInt(aaa)
    }
    console.log('-----------')
    return sum_num
}

function post_url(){
    var sum_total = 0
    for (let i = 1; i < 101; i++) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', 'https://www.python-spider.com/api/challenge29', false);
        httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        httpRequest.send('page='+i);
        var json_resp = httpRequest.responseText
        var page_num =  sum_num(jQuery.parseJSON(json_resp).data)
        sum_total += page_num
    }
    return sum_total
}
post_url