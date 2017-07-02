$(function(){
  //创建行
  addRow();
  function addRow(){
    $('.add').live("click",function(){
      var tr=$(this).parent().parent();
      var newtr=tr.clone();
      tr.after(newtr);
      //改变序数
      $(".num").each(function(i){
        $(".num").eq(i).html(i+1);
      })
    })
  };
  //删除行
  del();
  function del(){
    $(".del").live("click",function(){
      var tr=$(this).parent().parent();
      tr.remove();
      //改变序数
      $(".num").each(function(i){
          $(".num").eq(i).html(i+1);
      })
    })
  };
  upData();
  /*function upData(){
    $("input[type=text]").live("focus",function(){
      $(this).css({border:"1px solid #aaa"});
    })
    $("select").live("focus",function(){
      $(this).css({border:"1px solid #aaa"});
      $(this).attr("class","");
    })
    $("input[type=text]").live("blur",function(){
      $(this).css({border:"0px"});
    })
    $("select").live("blur",function(){
      $(this).css({border:"0px"});
      $(this).attr("class","none");
    })
  }*/
  
  function upData(){
    $(".val").live("dblclick",function(){
      var $this=$(this);
      var html=$this.html();
      var divType=$this.attr("select");
      if(divType!=undefined){
        console.log(divType);
        var input=$("<select></select>");
        var newData=eval('('+divType+')');
        for(var i=0;i<newData.length;i++){
          if(html==newData[i]){
            var option=$('<option selected>'+newData[i]+'</option>');
          }else{
            var option=$('<option>'+newData[i]+'</option>');
          }
          
          input.append(option);
        }
      }else{
        console.log(divType)
        var input=$('<input type="text" value="'+html+'">');
      }
      $this.html(input);
      input.focus();
      input.blur(function(){
        var val=$(this).val();
        $this.html(val);
      })
    })
  }
  //提交数据
  sublime();
  function sublime(){
    $("#save").on("click",function(){
      var datas=[];
      $("#table tr").each(function(i){
        if(i==0){
          return;
        }else{
          var td=$(this).children();
          td.each(function(i){
            var name=$(this).attr("name");
            if(name==undefined){
              return;
            }
            var val=$(this).html();
            var partData={name,val};
            datas.push(partData);
          })
        }
      })
     console.log(datas);//输出数据
    })
   
  }
})