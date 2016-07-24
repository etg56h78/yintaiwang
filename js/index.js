$(function(){
	var lis=$(".cz-left-top li");
	var imgs=$(".kuang");
	var lis1=$(".zgbt li");
	var imgs1=$(".kuang1");

	function lunbo(obj1,obj2){
     obj1.mouseover(function(){
		var index=$(this).index();
		obj2.css("display","none").eq(index).css("display","block");
		obj1.removeAttr("class");
		this.className="hot";
	})
	}
	lunbo(lis,imgs)
	function move(obj3,obj4){
     obj3.mouseover(function(){
		var index=$(this).index();
		obj4.css("display","none").eq(index).css("display","block");
		obj3.removeAttr("class");
		this.className="xiahuaxian";
	 })
	}
	move(lis1,imgs1)
})