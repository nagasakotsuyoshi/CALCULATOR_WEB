$(function(){
  var inputFormula = "";
  $("#inputfield").val("");
  $("#inputfield").focus();

  // 数字ボタンの処理
  $(".num").click(function(){
    var inputNum = $(this).text();
    addInputVal(inputNum);
  });

  // 演算子ボタンの処理
  $(".op").click(function(){
    var inputOp = $(this).text();
    addInputVal(inputOp);
  });

  // イコールボタンの処理
  $(".eq").click(function(){
    cal();
  });

  // Enterキー入力時の処理
  $("#inputfield").keypress(function(ev){
    if ((ev.which && ev.which === 13) || (ev.keyCode && ev.keyCode === 13))
      cal();
  })

  function addInputVal(addStr){
    var inputVal = $("#inputfield").val();
    $("#inputfield").val(inputVal + addStr);
  }

  function initInputVal(initStr){
    $("#inputfield").val(initStr);
  }

  function cal(){
    var inputVal = $("#inputfield").val();
    inputFormula = inputVal.replace("＋", "+")
                           .replace("−", "-")
                           .replace("×", "*")
                           .replace("÷", "/");
    var reversePolishFormula = rpn.Generate(inputFormula);
    var answer = rpn(reversePolishFormula);
    initInputVal(answer);
    inputFormula = answer;
  }
});