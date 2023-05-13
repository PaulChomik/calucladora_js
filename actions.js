//variable global del texto en pantalla
const a1=document.getElementById('fname');


function reset()
{
	//const doc=getDocument('index.html')
    const a1=document.getElementById('fname');
    a1.value='';
}

function update_text(n)
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+n;
}

function igual()
{
	const a1=document.getElementById('fname');
	let    a=a1.value;
	a=a.replace('×', '*');
	a=a.replace('÷', '/');
	a=a.replace('π', '3.14159');
	a=eval(a);
	a1.value=+a;
}

function igualENTER(event)
{
	if (event.keyCode === 13) {	
		igual()
	}
}