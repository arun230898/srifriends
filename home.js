function calculator(){
    var size=document.getElementById('values').value
    var total=size/4
    if (size>=25||size<=40){
        for (let i=1;i<5;i++){
            var values=(i*total)
            var h1=document.createElement('h1');
            var textanswer=document.createTextNode('the values are '  + values)
            h1.setAttribute('id','value');
            h1.appendChild(textanswer);
            document.getElementById("result").appendChild(h1);
            console.log(values)
    }
}
else{
    console.log("enter the valid size")
}
}

function reset(){
    document.getElementById("result").remove()
    return true
}