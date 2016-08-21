function loadXmlFile(xmlFile)//xmlFile 是xml文件的地址
{   
    var xmlDom = null;
    if (window.ActiveXObject)//IE浏览器中读取xml文件
    {
        xmlDom = new ActiveXObject("Microsoft.XMLDOM");
        xmlDom.async="false";
        xmlDom.load(xmlFile);
    }
    else if(document.implementation && document.implementation.createDocument)
    {
        //Firefox，Chrome 浏览器中读取xml文件 ,Chrome 需要开服务器才能访问
        var xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open("GET", xmlFile, false);
        xmlhttp.send(null);
        xmlDom = xmlhttp.responseXML;
    }
    else
    {
        xmlDom = null;
    }
    return xmlDom;
};
 
//好了读取出来了xml 我们就要获取的他的数据了
function gerthinkingInJavaDatas(str)
{
    //生成关键词链接
    var xdoc =loadXmlFile(str)
    //var list=xdoc.selectNodes("//keys")//只能在Ie浏览器中获取
    var list=xdoc.getElementsByTagName("data");//读取所有节点值
    var table = document.createElement('table');
		table.border = 2;
		table.className = 'colors';
		var thead = table.createTHead();
		var tr = thead.insertRow(0);
		var td1 = tr.insertCell(tr.cells.length);
		td1.innerHTML = "title";
		td1.style.width = "49%";
		var td2 = tr.insertCell(tr.cells.length);
		td2.innerHTML = "desc";
		td2.style.width = "49%"
		var tbody = document.createElement('tbody');
		table.appendChild(tbody); 
		
    for (var i = 0; i < list.length; i++)
    {
         var trx = tbody.insertRow(tbody.rows.length);
         var tdx1 = trx.insertCell(trx.cells.length);
         var tdx2 = trx.insertCell(trx.cells.length);
		 var url = list[i].getElementsByTagName("url")[0].childNodes[0].nodeValue;
		 var id = list[i].getAttribute("id");
         tdx1.innerHTML = "<a href='"+url+"?id="+id+"' target='_Blank'>"+list[i].getElementsByTagName("title")[0].childNodes[0].nodeValue+"</a>";
         tdx2.innerHTML = list[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
    }
    document.getElementsByTagName('body')[0].appendChild(table);
};



//好了读取出来了xml 我们就要获取的他的数据了
function getOneDatas(str,urlId)
{
    //生成关键词链接
    var xdoc =loadXmlFile(str)
    //var list=xdoc.selectNodes("//keys")//只能在Ie浏览器中获取
    var list=xdoc.getElementsByTagName("data");//读取所有节点值
    
    for (var i = 0; i < list.length; i++)
    {
    	 var id = list[i].getAttribute("id");
		 if(id == urlId){
			var title = list[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
			var desc = list[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
			var content = list[i].getElementsByTagName("content")[0].childNodes[0].nodeValue;
			document.getElementById("title").value = title;
			document.getElementById("desc").value = desc;
			document.getElementById("content").value = content;
		 }
    }
    document.getElementsByTagName('body')[0].appendChild(table);
};


function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}



