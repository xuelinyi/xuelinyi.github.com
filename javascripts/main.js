function loadXmlFile(xmlFile)//xmlFile ��xml�ļ��ĵ�ַ
{   
    var xmlDom = null;
    if (window.ActiveXObject)//IE������ж�ȡxml�ļ�
    {
        xmlDom = new ActiveXObject("Microsoft.XMLDOM");
        xmlDom.async="false";
        xmlDom.load(xmlFile);
    }
    else if(document.implementation && document.implementation.createDocument)
    {
        //Firefox��Chrome ������ж�ȡxml�ļ� ,Chrome ��Ҫ�����������ܷ���
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
 
//���˶�ȡ������xml ���Ǿ�Ҫ��ȡ������������
function gerthinkingInJavaDatas(str)
{
    //���ɹؼ�������
    var xdoc =loadXmlFile(str)
    //var list=xdoc.selectNodes("//keys")//ֻ����Ie������л�ȡ
    var list=xdoc.getElementsByTagName("data");//��ȡ���нڵ�ֵ
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



//���˶�ȡ������xml ���Ǿ�Ҫ��ȡ������������
function getOneDatas(str,urlId)
{
    //���ɹؼ�������
    var xdoc =loadXmlFile(str)
    //var list=xdoc.selectNodes("//keys")//ֻ����Ie������л�ȡ
    var list=xdoc.getElementsByTagName("data");//��ȡ���нڵ�ֵ
    
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



