export const Foo = { template: '<div>foo {{$route.params.id}}</div>' }
export const Bar = { template: '<div>bar</div>' }

export const vue_content=  {
	// vue_content 组件现在接受一个
	// "prop"，类似于一个自定义 attribute。
	// 这个 prop 名为 interface。将vue里的数据传入组件的入口
	props: ['interface'],
	template: '<div  class="content-bar" >\
					<div class="content-head" v-if="interface.flag_head">\
						<a  :href=interface.href_head > {{interface.text_head}} </a>\
					</div>\
					<div class="content-main"  v-for="(snap,index) in Array(interface.num_main)">\
						<a  :href=interface.href_main > {{interface.text_main[index]}} </a>\
					</div>\
				</div>	'
}

