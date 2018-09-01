//服务层
app.service('brandService',function($http){
	    	
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get('../brand/findAll');
	}
	//分页 
	this.findPage=function(pageNum,pageSize){
		return $http.get('../brand/findPage/'+pageNum+"/"+pageSize);
	}
	//查询实体
	this.findOne=function(id){
		return $http.get('../brand/findOne/'+id);
	}
	//增加 
	this.add=function(entity){
		return  $http.post('../brand/add.do',entity );
	}
	//修改 
	this.update=function(entity){
		return  $http.post('../brand/update.do',entity );
	}
	//删除
	this.dele=function(ids){
		return $http.get('../brand/delete/'+ids);
	}
	//搜索
	this.search=function(pageNum,pageSize,searchEntity){
		return $http.post('../brand/search/'+pageNum+"/"+pageSize, searchEntity);
	}    	
});
