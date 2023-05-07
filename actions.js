
function reset()
{
	//const doc=getDocument('index.html')
    const a1=document.getElementById('fname');
    a1.value='';
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
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'0';
}

function n_pi()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'π';
}


function n_point()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'·';
}

function n_por()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'×';
}

function n_menos()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'-';
}

function n_mas()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'+';
}

function n_divide()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'÷';
}

function n_parentesis_der()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+'(';
}

function n_parentesis_izq()
{
	const a1=document.getElementById('fname');
	a1.value=a1.value+')';
}

/*function separar(texto)
{
	let texto1=
}*/

function igual()
{
	const a1=document.getElementById('fname');
	let    a=a1.value;
	a=a.replace('×', '*');
	a=a.replace('÷', '/');
	a=eval(a);
	a1.value=+a;
}