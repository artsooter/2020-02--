import $ from '../node_modules/jquery/dist/jquery.js';
const config={
    'getManage':"http://121.43.146.149/test.php?manage=1",
    'getDetail':"http://121.43.146.149/test.php?id=",
}
export function net(url) {
    let type_net='';
    if(typeof(url)==Number){
        url=config.getDetali+url;
        type_net='manage';
    }else if(url='getManage'){
        url=config.getManage;
        type_net='datail'
    }
    $.ajax({
        type: "GET",
        url: url, //访问的链接
        success: function(data) { //成功的回调函数
            if(type_net=='manage'){
                data=JSON.parse(data);
            }else if(type_net='detail'){
            }
            console.log(data)
            return data;
        },
        error: function(e) {
            alert("error");
        }
    });
}
