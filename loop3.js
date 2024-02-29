const readline=require('readline-sync')
let a=readline.question("Enter the number=");
let str="",m,m1=a;
while(m!=0)
{
for(let i=0;i<a;i++)
{   m=a;
    str+=m-i;str+=" ";
    for(let j=1;j<a-i;j++)
    {
        str+=m;str+=" ";
        m--;

    }
    str+='\n';
}
for(let i=1;i<a;i++)
{ m=1+i;
    str+=m;
    str+=" ";
    for(let j=0;j<i;j++)
    {
        str+=m1-j;str+=" ";
        m--;

    }
    str+='\n';
}
m=0;
}
console.log(str);