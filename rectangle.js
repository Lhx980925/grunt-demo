$(function() {
  console.log("hello world");
  //get dom elem
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');

  /* calc button click event */
  $btnCal.click(function(){
  //get value
  var w=Number($width.val()),
      h=Number($height.val());

  //calculate
  //var p=(w+h)*2,
  //    a=w*h;
      
  //var p2=Math.round(p*Math.pow(10,2))/Math.pow(10,2),
  //    a2=Math.round(a*Math.pow(10,2))/Math.pow(10,2);
  
  var rect=rectangle();

  //output
  $perimeter.val(rect.perimeter(w,h));
  $area.val(rect.area(w,h));
  });
})
