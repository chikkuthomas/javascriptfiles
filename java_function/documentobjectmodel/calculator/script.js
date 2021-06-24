// to make the numbers clicked appear on th text box
displayValue=(num)=>int.value+=num
 // here int.value =num implies that the num is set as value of
// the text box and += is given if we have to get
//more than one num or operator at the same time

evaluateExpression=()=>int.value=eval(int.value)
// here int.value is the value of result box 
// which is set as the evaluate value of the expression in it

clearBox=()=>int.value="";

//to delete the element in the last position
deleteElement=()=>int.value=int.value.slice(0,-1)