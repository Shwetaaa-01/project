
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\ban ja rani.mp3"
,"songs\\Banduk meri laila.mp3"
,"songs\\barish.mp3"
,"songs\\haareya.mp3"
,"songs\\ik vari aa.mp3"
,"songs\\main tera.mp3"
,"songs\\mercy.mp3"
,"songs\\musafir.mp3"
,"songs\\o sathi.mp3"
,"songs\\phir bhi.mp3"
,"songs\\Badtameez - Ankit Tiwari.mp3"
,"songs\\Jee Karda.mp3"
,"songs\\Jag Soona Soona Lage.mp3"
,"songs\\Saadda Haq.mp3"
,"songs\\Tujhe Kitna Chahein Aur.mp3"
,"songs\\soja jara.mp3"
,"songs\\rabta.mp3"
,"songs\\suit suit.mp3"
,"songs\\Jo Tu Na Mila.mp3"
,"songs\\Faasle.mp3"];

var sname=["Ban Ja tu meri Rani",
"Banduk Meri Laila",
"Barish",
"Haareya",
"Ik vari aa",
"main tera boyfriend",
"mercy",
"musafir",
"o sathi",
"Phir Bhi Tumko Chahunga",
"Badtmeez",
"Jee Karda",
"Jag Soona Soona Lage",
"Sadda Haq",
"Tujhe Kitna Chahein Aur Hum",
"Soja Zara",
"Raabta",
"Suit Suit",
"Jo Tu Na Mila",
"Faasle"];

var sd=["Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017",
"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
,"Artist: KK<br>Movie: Shab<br>Released: 2017"
,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"
,"Artist: Ankit Tiwari<br>Released: 2016"
,"Artist: Divya Kumar<br>Movie: Badlapur<br>Released: 2015"
,"Artists: Rahat Fateh Ali Khan,Richa Sharma<br>Movie: Om Shanti Om<br>Released: 2007"
,"Artists: A.R Rahman, Clinton Cerejo, Mohit Chauhan<br>Movie: Rockstar<br>Released: 2011"
,"Artist: Jubin Nautiyal<br>Movie: Kabir Singh<br>Released: 2019"
,"Artist: Madhushree<br>Movie: Baahubali 2: The Conclusion<br>Released: 2017"
,"Artist: Arijit Singh<br>Movie: Agent Vinod<br>Released: 2012"
,"Artist: Guru Randhawa<br>Movie: Hindi Medium<br>Released: 2018"
,"Artist: Asim Azhar<br>Released: 2013"
,"Artist: Aditya Rikhari<br>Album: Shab<br>Released: 2021"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg",
"images\\\\12.jpg",
"images\\\\13.jpg",
"images\\\\14.jpg",
"images\\\\15.jpg",
"images\\\\16.jpg",
"images\\\\17.jpg",
"images\\\\18.jpg",
"images\\\\19.jpg",
"images\\\\20.jpg",];

var mood=[["9","17","20"],["2","7","11","16","19"],["1","5","6","8","10","14","15"],["3","4","12","13","18"]];

var mmm=["2.png","4.png","3.png","3.png","2.png","2.png","2.png","3.png","3.png","3.png","1.png","1.png","3.png","1.png","1.png",
"4.png","4.png","2.png","3.png","4.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==1)
			getTime();
		if(mod==2)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }