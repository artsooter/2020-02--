import $ from '../node_modules/jquery/dist/jquery.js';
const config={
    'getManage':"http://121.43.146.149/test.php?manage=1",
    'getDetail':"http://121.43.146.149/test.php?id=",
}
//获取manage：url为“getManage” 
//获取具体文章： url为id（文章编号）
export function net(url,resolve,reject) {//作为Promise调用
    let type_net='';
    if(typeof(url)==Number){
        url=config.getDetali+url;
        type_net='datail';
    }else if(url='getManage'){
        url=config.getManage;
        type_net='manage'
    }
    $.ajax({
        type: "GET",
        url: url, //访问的链接
        success: function(data) { //成功的回调函数
            if(type_net=='manage'){
                data=JSON.parse(data);
            }else if(type_net=='detail'){
            }
            resolve(data);
        },
        error: function(e) {
            reject("wrong");
            alert("error");
        }
    });
}
