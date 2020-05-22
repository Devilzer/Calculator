function getHistory()
{
    return document.getElementById("history").innerText;
}
function printHistory(num)
{
    document.getElementById("history").innerText=num;
}
function getAnswer()
{
    return document.getElementById("answer").innerText;
}
function printAnswer(num)
{
    if(num=="")
    {
        document.getElementById("answer").innerText=num;    
    }
    else{
    document.getElementById("answer").innerText=formattedNo(num);}
}
function formattedNo(num)
{
    var n = Number(num);
    var ans =n.toLocaleString("en"); 
    return ans;
}
function removeComa(num)
{
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener("click",function(){
        if(this.id=="c")
        {
        printAnswer("");
        printHistory("");   
        }
        else if(this.id=="backspace")
        {
            var output =removeComa(getAnswer()).toString();
            if(output)
            {
                output=output.substr(0,output.length-1);
                printAnswer(output);
            }
        }
        else{
            var output = getAnswer();
            var history = getHistory();
            if(output=="" && history!="")
            {
                if(isNaN(history[history.length-1]))
                {
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!="")
            {
                output= output==""?output:removeComa(output);
                history= history+output;
                if(this.id=="="){
					var result=eval(history);
					printAnswer(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printAnswer("");
				}
            }
        }
    });

}
var nos = document.getElementsByClassName("no");
for(var i=0;i<nos.length;i++)
{
    nos[i].addEventListener("click",function()
    {
       var output = removeComa(getAnswer());
       if(output!=NaN) //when result is empty just add the no to string
       {
           output=output+this.id;
           printAnswer(output);
       }
    });
}