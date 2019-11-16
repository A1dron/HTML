window.onload = function() {

	//Header
	var h = create('header');
	document.body.appendChild(h);
	var h_div1 = create('div');
	h.appendChild(h_div1);
	var h_a1 = create('a');
	h_div1.appendChild(h_a1);
	h_a1.href = '#';
	h_a1.innerHTML = "Movies";
	var h_div2 = create('div');
	h.appendChild(h_div2);
	var h_span2 = create('span');
	h_div2.appendChild(h_span2);
	h_span2.innerHTML = 'Name Lname';
	var h_a2 = create('a');
	h_div2.appendChild(h_a2);
	var h_img = create('img');
	h_a2.appendChild(h_img);
	h_img.src = 'img/icon.png';
	h_img.alt = 'logo';

	// Section
	var s = create('section');
	document.body.appendChild(s);
	s.className = 'container';
	var s_form1 = create('form');
	s.appendChild(s_form1);
	s_form1.name = 'select';
	s_form1.method = 'get';
	var s_div1 = create('div');
	s_form1.appendChild(s_div1);
	s_div1.className = 'selectors';

	// Format
	var s_select1 = create('select');
	s_div1.appendChild(s_select1);
	s_select1.name = 'Type';
	var s_select1_arr = ['Format','Movie','Cartoon', 'Anime'];
	selectList(s_select1_arr, s_select1);

	//Genre
	var s_select2 = create('select');
	s_div1.appendChild(s_select2);
	s_select2.name = 'genre';
	var s_select2_arr = ['Genre','Action','Adventure','Apocalypse','Comedy','Drama','Thriller'];
	selectList(s_select2_arr, s_select2);

	// Year
	var s_select3 = create('select');
	s_div1.appendChild(s_select3);
	s_select3.name = 'year';
	var data = new Date();
	var currentYear = data.getFullYear();
	var s_select3_arr = ['Year'];
	for (var i = currentYear; i > 2010; i--) {
		s_select3_arr.push(i);
	}
	selectList(s_select3_arr, s_select3);

	// Search
	var s_div2 = create('div');
	s_form1.appendChild(s_div2);
	s_div2.className = 'nav';
	var s_input1 = create('input');
	s_div2.appendChild(s_input1);
	s_input1.name = 'title';
	s_input1.type = 'text';
	var s_input2 = create('input');
	s_div2.appendChild(s_input2);
	s_input2.type = 'submit';
	s_input2.value = 'Найти';
	s_input2.className = 'search_btn';

	// Table

	var colsName = ['Name','Format','Genre','Year','Rating'];
	var Movies = [{
		Name: "Your Name",
		Format: "Anime",
		Genre: "drama",
		Year: 2016,
		Rating: 9.5
	},
	{
		Name: "Blade Runner 2049",
		Format: "Movie",
		Genre: "action",
		Year: 2017,
		Rating: 9.0
	},
	{
		Name: "Predator",
		Format: "Movie",
		Genre: "action",
		Year: 2017,
		Rating: 6.5
	},
	{
		Name: "Ben 10",
		Format: "Cartoon",
		Genre: "action",
		Year: 2005,
		Rating: 7.5
	},
	{
		Name: "Deadpool",
		Format: "movie",
		Genre: "action",
		Year: 2016,
		Rating: 8.1
	},];
	var tab1e = create('table');
	tab1e.className = 'container';
	s.appendChild(tab1e);
	createTable(tab1e, colsName, Movies);

	

	// Footer
	document.body
	.appendChild(create('footer'))
	.appendChild(create('div'))
	.appendChild(create('span'))
	.textContent = '';
}



function selectList(arrName, selectVar) {
	for (var i = 0; i < arrName.length; i++) {
		var s_option1 = create('option');
		selectVar.appendChild(s_option1).textContent = arrName[i];
		if (arrName[i] == arrName[0]) {
			s_option1.setAttribute('disabled', true);
			s_option1.setAttribute('selected', true);
		}
	}
}

function create(name) {
	return document.createElement(name);
}

const createTable = (table, columnNameList, dataList) => {
	let tableRow = create('tr');
	table.appendChild(tableRow);
	columnNameList.forEach(columnName => {
		let tableCell = create('td');
		tableRow.appendChild(tableCell);
		tableCell.textContent = columnName;
	});
	dataList.forEach(row => {
		let tableRow = create('tr');
		table.appendChild(tableRow);
		Object.values(row).forEach(column => {
			let tableCell = create('td');
			tableRow.appendChild(tableCell);
			tableCell.textContent = column;
		});
	});
};
