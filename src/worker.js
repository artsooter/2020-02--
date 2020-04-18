import {faceAnimationJson} from './data.js'

onmessage=function(e){
    if(e.data.msg=="init"){
    }
    let canvas=new OffscreenCanvas(300,300);
    let ctx=canvas.getContext("2d");
    console.log(canvas)
    console.log(ctx)
    ctx.beginPath();
    ctx.moveTo(0,0)
    ctx.lineTo(270,100);
    ctx.stroke()
    
    let imageBitmap=canvas.transferToImageBitmap();
    postMessage({imageBitmap:imageBitmap},[imageBitmap]);

    //console.log(offcanvas)
}

