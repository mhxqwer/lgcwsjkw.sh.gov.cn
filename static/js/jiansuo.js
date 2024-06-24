document.writeln("<div class=\'search-bar search-bar-sec clearfix\'>");
document.writeln("    <div class=\'container\'>");
document.writeln("        <div class=\'row\'>");
document.writeln("            <div class=\'search-box clearfix trout-region-mutual\'>");
document.writeln("                <div class=\'col-md-4\'>");
document.writeln("                    <h2 class=\'search-title pull-right\'>全文检索</h2></div>");
document.writeln("                <div id=\'searchForm\'>");
document.writeln("                    <div class=\'col-md-8\'>");
document.writeln("                        <div class=\'search pull-left\'>");
document.writeln("                            <input type=\'text\' id=\'textfield\' name=\'query\' placeholder=\'请输入检索关键字\'>");
document.writeln("                        </div>");
document.writeln("                        <button type=\'submit\' style=\'display: block;position: absolute;top: 16px;right: 188px;font-size: 29px;color: #f96000;height:49px;\' onclick=\'searchQwjs();\'>");
document.writeln("                            <i class=\'iconfont icon-search\' style=\'font-size: 29px;\'></i>");
document.writeln("                        </button>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("</div>");
function searchQwjs(){
    var search=$("#textfield").val();
    if(search=="" || search == "请输入检索关键字"){
        alert("请输入检索关键字！");
        $("#textfield").focus();
        return;
    }
    var url="//wsjkw.sh.gov.cn/search/index.html#search/";
    window.location.href = url + "query=" + search;
}