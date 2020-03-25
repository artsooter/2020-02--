
export const Loading = {
	template: ' <div class="loading"  >\
	 				<canvas id="loadingCanvas" ></canvas>\
				</div>\
				',
	methods: {
		init:function(){
			setTimeout(()=>{
				console.log(this)
				console.log(document.getElementById("loadingCanvas"))
			let l_a = new this.loadingAnimation(document.getElementById("loadingCanvas"));
			l_a.canvas.width=document.getElementsByClassName("loading")[0].offsetWidth;
			l_a.canvas.height=document.getElementsByClassName("loading")[0].offsetHeight;
			l_a.update=this.update.bind(l_a);//将组件methods中的方法，搭载到对象上
			window.requestAnimationFrame(l_a.update)//函数方法从外部搭载上去)
			},0)
		},
		
		loadingAnimation:function(canvas){
			console.log (canvas);
			this.canvas=canvas;
			this.ctx=canvas.getContext('2d');
			this.img = new Image();
			this.img.src="laodingImg.png";
			this.timer;//定时器
			this.xPos=0;
			this.xPosDiv=0;//div的移动控制
			this.speed=3;
			this.changeCorrect=0;
			this.changeFlag=0;//动画帧切换
			this.readyFlag=0;//数据准备完成,动画消失

			this.runFrame={
				0:[1854,2,88,94,0,0,50,75],
				1:[1942,2,88,94,0,0,50,75]
			};
			this.update;
		},
		update:function(){
			this.changeCorrect++;
			this.changeFlag=this.changeCorrect>5?1:0;
			if(this.changeCorrect>10) this.changeCorrect=0;
			this.xPos+=this.speed;
			this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
			this.ctx.drawImage(
				this.img,
				this.runFrame[this.changeFlag][0],
				this.runFrame[this.changeFlag][1],
				this.runFrame[this.changeFlag][2],
				this.runFrame[this.changeFlag][3],
				this.runFrame[this.changeFlag][4]+this.xPos,
				this.runFrame[this.changeFlag][5],
				this.runFrame[this.changeFlag][6],
				this.runFrame[this.changeFlag][7]);
			if(this.xPos<this.canvas.width/2){
				window.requestAnimationFrame(this.update)
			}
		},	
	},
}




export const modern=  {
	// Content 组件现在接受一个
	// "prop"，类似于一个自定义 attribute。
	// 这个 prop 名为 contentData。将vue里的数据传入组件的入口
	template: '<div>ContentData</div>',
	/*
	<div  class="content-bar" >\
					<div class="content-head" >\
						<a  :href=ContentData.href_head > {{ContentData.text_head}} </a>\
					</div>\
					<div class="content-main"  v-for="(snap,index) in Array(ContentData.num_main)">\
						<a  :href=ContentData.href_main > {{ContentData.text_main[index]}} </a>\
					</div>\
				</div>	
	*/
	methods:{
		init:function(states){
			console.log(states)
			console.log(this);
		}
	},
	watch: {
		ContentData : (oldval,newval)=>{
			console.log(oldval)
			console.log(newval)
		}
	},
}

