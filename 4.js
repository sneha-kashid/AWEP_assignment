let count=1;
function increment()
{
   let a=document.getElementById ("counterid");
    count++;
    a.innerHTML=count;
}


function decrement()
{
    let b=document.getElementById("counterid");
    count--;
    b.innerHTML=count;
}

