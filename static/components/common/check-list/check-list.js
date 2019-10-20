/**
 *模块组件构造器
 */
(function(){
	
	let app=getApp();
			
	app.Component({
		
		//组件名称，不需要改变
		comName: 'check-list',
	 
		/**
		 * 组件的属性列表
		 */
		properties: {
			items:Array,
			type:Number,
			togglebutton:Boolean
		},
	
		/**
		 * 组件的初始数据
		 */
		data: {
			checks:[]
		},
		
		/**
		 *组件布局完成时执行
		 */
		 
		ready:function(){
		},
	
		/**
		 * 组件的函数列表
		 */
		methods: {
				checkItem:function(e){
					let values = app.eValue(e),
							eData=app.eData(e),
							index=eData.index,
							checks = [],
							items = this.getData().items,
							type=this.getData().type;
						if(eData.parent){
							if(values.length) {
								items[index].checked=true;
								items[index].expand=true;
								if(type==2||type==3){
									app.each(items[index].children, function(i, item) {
										item.checked = true;
									});
								};
							} else {
								items[index].checked=false;
								if(type==2||type==3){
									items[index].expand=false;
									app.each(items[index].children, function(i, item) {
										item.checked = false;
									});
								};
							};
						}else{
							if(values.length) {
								
								if(type==2){
									items[index].checked=true;
								};
								app.each(items[index].children, function(i, item) {
									if(app.inArray(item.id,values)>-1){
										item.checked = true;
									}else{
										item.checked = false;
									};
								});
							} else {
								if(type==2){
									items[index].checked=false;
								};
								app.each(items[index].children, function(i, item) {
									item.checked = false;
								});
							};
						};
						app.each(items,function(i,item){
							
							if(item.checked){
								checks.push(item.id);
							};
							if(item.children&&item.children.length){
								app.each(item.children,function(j,ci){
									if(ci.checked){
										checks.push(ci.id);
									}
								});
							};
						});
						this.setData({
							checks: checks,
							items:items
						});
						this.pEvent('change', checks);
				},
				toggle:function(e){
					 let index=app.eData(e).index,
					 		 items = this.getData().items;	
					 items[index].expand=!items[index].expand;
					 this.setData({
							items:items
						});
				}
		}
	});
})();
