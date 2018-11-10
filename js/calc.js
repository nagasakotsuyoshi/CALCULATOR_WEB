$(function(){
  var inputVal = "";
  var inputFormula = "";

  // 数字ボタンの処理
  $(".num").click(function(){
    var inputNum = $(this).text();
    inputFormula = inputFormula + inputNum;
    inputVal = inputVal + inputNum;
    $("#inputbox").val(inputVal);
  });

  // 演算子ボタンの処理
  $(".op").click(function(){
    var inputOp = $(this).text();
    inputVal = inputVal + inputOp;
    $("#inputbox").val(inputVal);
    switch (inputOp){
      case "＋": var replacedSym = "+"; break;
      case "−" : var replacedSym = "-"; break;
      case "×": var replacedSym = "*"; break;
      case "÷": var replacedSym = "/"; break;
    }
    inputFormula = inputFormula + replacedSym;
  });

  $(".eq").click(function(){
    var reversePolishFormula = rpn.Generate(inputFormula);
    var answer = rpn(reversePolishFormula);
    inputVal = answer;
    $("#inputbox").val(inputVal);
    inputFormula = answer;
  });
});