const sriram = [
{
	first_name: 'Mike',
	last_name: 'Sheriden',
},
{
	first_name: 'Tim',
	last_name: 'Lee',
},
{
	first_name: 'John',
	last_name: 'Carte',
}
];
	var b=[];
sriram.map(function(x)
{
		b.push(x.first_name+" "+x.last_name);
});
 console.log(b);