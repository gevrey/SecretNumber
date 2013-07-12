// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#050');

//var tools = require('./tools');

Ti.include('businessRules.js');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Guess my number',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Guess my number',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Guess my number between 1 and 100',
	font:{fontSize:13,fontFamily:'Helvetica Neue'},
	top:50,
	left:10,
	width:'auto'
});

win1.add(label1);
var YourNumber = Ti.UI.createTextField({
		hintText:'Your number between 1 and 100',
		height:32,
		top:70,
		left:10,
		right:60,
		font:{fontSize:13},
		color:'#999',
		clearOnEdit:true
	});
win1.add(YourNumber);

/*YourNumber.addEventListener('clic',function(e){
	alert(e.source.text)
});*/
button1 = Ti.UI.createButton({width:100,height:50,top:100,title:"Compare"})
win1.add(button1);

button1.addEventListener('click',function(){
alert("Your Number is greater than the secret number")
});
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'My guess was',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Solution',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//win2.add(label2);


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();

var secretNumber = getRandomNumber(100);
label2.text = "Secret number is " + secretNumber.toString( );

button2 = Ti.UI.createButton({width:150,height:80,title:"Click here to know the secret number"})
win2.add(button2);
button2.addEventListener('click',function(){
alert(label2.text)
});
