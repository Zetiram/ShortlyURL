const API_URL = 'https://api.shrtco.de/v2/shorten?url='
var resultP = ''

async function shorten(copy_btn) {
	const link = document.getElementById('Shorting__link').value;
	const show_url = document.getElementById('show-url')
	const input = document.getElementById('Shorting__link')
	const original = document.getElementById('original_link')
	const SpanErrorText = document.getElementById('Span-Error');

	const res = await fetch(`${API_URL}${link}`)

	const data = await res.json()
	var p = document.getElementById('short_url')
	resultP = p

	if (data.ok == true) {
	show_url.classList.remove('show')
	input.classList.add('input-border')

	original.innerText = data.result.original_link;
	p.innerText = data.result.full_short_link;
	} else {
		input.classList.remove('input-border');
		input.classList.add('place-color');
		SpanErrorText.innerHTML = data.error.slice(0, 21)

	}
	

		console.log(data)
}

function copiartxt() {


	var input = document.createElement("input")
	input.setAttribute("value", document.getElementById('short_url').innerHTML);
	document.body.appendChild(input)
	input.select()
	document.execCommand("copy")

	document.body.removeChild(input)

	
	alert("copied!")
}






const icon = document.querySelector('#burgerimg');
const hidden = document.querySelector('#burger-in');

icon.addEventListener('click', (burger) => {
	hidden.classList.toggle('active');
	document.body.classList.toggle('opacity');
})


