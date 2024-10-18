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
function n_one()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'1';
}
function n_dos()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'2';
}
function n_tres()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'3';
}
function n_for()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'4';
}
function n_five()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'5';
}
function n_six()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'6';
}
function n_7()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'7';
}
function n_8()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'8';
}
function n_9()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'9';
}
function n_0()
