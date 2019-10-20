/*!
 * xzParse.js v2.0.1-beta.0
 * (c) 2018-20@2 Sean lee
 */

(function(global,$){
	
	$.fn.parseChildren=function(isSearch){
		return this.each(function(){
			if($(this).children().length){
				if(isSearch){
					$(this).children().parseSearchTag();
				}else{
					$(this).children().parseTag();
				};
				$(this).children().parseChildren();
			};
		});
	};
	
	$.fn.parseTag=function(){
		return this.each(function(){
			let $this=$(this);
			
			if($this.attr('wx:if')){
				let ifv=$this.attr('wx:if').replace('{{','').replace('}}','');
				$this.removeAttr('wx:if').attr('xz-if',ifv);
			};
			if($this.attr('wx:elif')){
				let ifv=$this.attr('wx:elif').replace('{{','').replace('}}','');
				$this.removeAttr('wx:elif').attr('xz-else-if',ifv);
			};
			
			if($this.attr('wx:for')){
				let fv=$this.attr('wx:for').replace('{{','').replace('}}',''),
						fitem=$this.attr('wx:for-item')||'item',
						findex=$this.attr('wx:for-index')||'index',
						newFor='('+fitem+', '+findex+') in '+fv;
				$this.removeAttr('wx:for').removeAttr('wx:for-item').removeAttr('wx:for-index').removeAttr('wx:key').attr('xz-for',newFor);
			};
			
			if(this.tagName=='RICH-TEXT'){
				$('<div xz-html="'+$(this).attr('nodes').replace('{{','').replace('}}','')+'"></div>').insertAfter($(this));
				$(this).remove();
			};
			
			if(this.tagName=='CHECKBOX-GROUP'){
				if($(this).data('model')){
					$(this).find('checkbox').attr('xz-model',$(this).data('model'));	
					$(this).removeAttr('bindchange').removeAttr('bind:change');
				}else{
					$(this).attr('data-checkbox','checkbox');	
				};
			};
			if(this.tagName=='RADIO-GROUP'){
				if($(this).data('model')){
					$(this).find('radio').attr('xz-model',$(this).data('model'));	
					$(this).removeAttr('bindchange').removeAttr('bind:change');
				}else{
					$(this).attr('data-radio','radio');	
				};
			};
			if(this.tagName=='SWITCH'){
				$(this).attr('data-switch','switch').hide();
				$('<div class="xzui-switch-cp__box"></div>').insertAfter($(this));
			};
			if(this.tagName=='PICKER'){
				/*let mode=$(this).attr('mode');
				if(!mode){
					let range=$(this).attr('range').replace('{{','').replace('}}',''),
							model=$(this).data('model'),
							tagEvet='';
					if(model){
						tagEvent='xz-model="'+model+'"';
					}else{
						let change=$(this).attr('bindchange')||$(this).attr('bind:change');
						if(change){
							tagEvent='xz-on:change="'+change+'"';
						};
					};
					$(this).find('span').html('<select '+tagEvent+' class="xzui-select"><option xz-for="(item,index) in '+range+'" :value="index">{{item}}</option></select>');
					$(this).removeAttr('bindchange').removeAttr('bind:change');
				};*/
				if($(this).data('model')){
					$(this).attr('data-model',$(this).data('model'));
				}
				
			};
	
			if(this.attributes.length){
				let attrs=[];
						
				$.each(this.attributes,function(i,item){
					let nodeName=item.nodeName,
							oldName=nodeName,
							nodeValue=item.nodeValue,
							capture='';
					
					if(nodeName.indexOf('bind')==0&&nodeName.indexOf('bind:')<0){
						nodeName='bind:'+nodeName.substring(4);
					};
					if(nodeName.indexOf('catch')==0&&nodeName.indexOf('catch:')<0){
						nodeName='catch:'+nodeName.substring(5);
					};
					
					if(nodeName.indexOf('capture-')==0){
						nodeName=nodeName.replace('capture-','');
						capture='.capture';
					};
					if(nodeName.indexOf('bind:')==0){
						let fn=nodeName.replace('bind:','xz-on:').replace('tap','click')+capture;
						attrs.push([oldName,fn,nodeValue]);
					};
					if(nodeName.indexOf('catch:')==0){
						let fn=nodeName.replace('catch:','xz-on:').replace('tap','click')+'.stop';
						attrs.push([oldName,fn,nodeValue]);
					};
					
					if(nodeName=='hidden'){
						let value='!('+nodeValue.replace('{{','').replace('}}','')+')';
						attrs.push([oldName,'xz-show',value]);
					};
					
					if(nodeValue.indexOf('{{')>-1&&nodeName!='hidden'){
						 let 	newName,
						 			value='';
						 $.each(nodeValue.split('{{'),function(i,item){
							 if(item){
								 if(value){
									 value+='+';
								 };
								 if(item.indexOf('}}')<0){
									 value+="'"+item+"'";
								 }else{
									 let v=item.split('}}');
									 value+=v[0];
									 if(v[1]){
										 value+="+'"+v[1]+"'";
									 };
								 };
							 };
						 });
						 
						 if(oldName=='model'){
							 newName='xz-model';
						 }else{
							 newName=':'+oldName;
						 };
						 attrs.push([oldName,newName,value]);
					};
					
				});
				
				if(attrs.length){
					$.each(attrs,function(i,item){
						$this.removeAttr(item[0]).attr(item[1],item[2]);
					});
				};
				
			};
			
			
		});
	};
	
	
	$.fn.parseSearchTag=function(){
		return this.each(function(){
			let $this=$(this);
			
			if($this.attr('wx:if')){
				let ifv=$this.attr('wx:if').replace('{{','').replace('}}','');
				$this.removeAttr('wx:if');
				$('<d>{% if '+ifv+' %}</d>').insertBefore($this);
				if(!($this.next().length&&($this.next().attr('wx:elif')||$this.next().attr('wx:else')!=undefined))){
					$('<d>{% endif %}</d>').insertAfter($this);
				};
					
			};
			if($this.attr('wx:else')!=undefined){
				$this.removeAttr('wx:else');
				$('<d>{% else %}</d>').insertBefore($this);
				$('<d>{% endif %}</d>').insertAfter($this);
			};
			if($this.attr('wx:elif')){
				let ifv=$this.attr('wx:elif').replace('{{','').replace('}}','');
				$this.removeAttr('wx:elif');
				$('<d>{% elseif '+ifv+' %}</d>').insertBefore($this);
				if(!($this.next().length&&($this.next().attr('wx:elif')||$this.next().attr('wx:else')!=undefined))){
					$('<d>{% endif %}</d>').insertAfter($this);
				};
			};
			
			if($this.attr('wx:for')){
				let fv=$this.attr('wx:for').replace('{{','').replace('}}',''),
						fitem=$this.attr('wx:for-item')||'item',
						findex=$this.attr('wx:for-index')||'index',
						newFor='for '+findex+', '+fitem+' in '+fv;
				$this.removeAttr('wx:for').removeAttr('wx:for-item').removeAttr('wx:for-index').removeAttr('wx:key');
				$('<d>{% '+newFor+' %}</d>').insertBefore($this);
				$('<d>{% endfor %}</d>').insertAfter($this);
			};			
			
		});
	};

	
	global.xzParse=function(html,isSearch){
		let el=$('<div>'+html+'</div>');
		el.parseChildren(isSearch);
		html=el.html().replace(/navigator/g,'a').replace(/url/g,'href').replace(/<view/g,'<div').replace(/view>/g,'div>').replace(/<image /g,'<img ').replace(/<checkbox /g,'<input type="checkbox" ').replace(/<radio /g,'<input type="radio" ').replace(/<switch/g,'<input type="checkbox"').replace(/<slider/g,'<input type="range"').replace(/<label/g,'<labeldiv').replace(/label>/g,'labeldiv>');/*.replace(/<picker mode="time"/g,'<input type="time"').replace(/<picker mode="date"/g,'<input type="date"')*/;
		if(isSearch){
			return html.replace(/<d>/g,'').replace(/<\/d>/g,'');
		}else{
			return html.replace(/wx:else/g,'xz-else');
		};
	};
	
	$(document).delegate('labeldiv span,labeldiv div','click',function(e){
					let $this=$(this),
							checked=$(this).prev('input').prop('checked');
					setTimeout(function(){
						$this.prev('input').trigger('click');
						if(checked==$this.prev('input').prop('checked')){
							setTimeout(function(){
								$this.prev('input').trigger('click');
							},50);
						};
					},50);
					
				});
})(this,jQuery);