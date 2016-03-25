//История о том, как я это реализовывал.Комментарии будут под пунктами.
var source = 0;
var fl = 0;
	window.onload = function() {
	var kyesObj = {
		"A" : 37,
		"W" : 38, 
		"D" : 39,
		"S" : 40
	}


var Gl = 80, Gt = 350;
go.onclick = playGAME;
// 5. Это функия срабатывает при нажатиее кнопок,а именно двигает машину влево,вправо,вниз,вверх, не позволяя залезать за пределы карты.Также игнорирует все кнопки кроме кнопок движения - стрелочки.
document.onkeydown = function(e){
	if(!(+e.keyCode >= 37 && +e.keyCode <= 40))  return;
		var pack = +e.keyCode;
			if(pack ==  37) {
				if(!(Gl <= -1)) 
					Gl-= 3;

					mensh.style.left = Gl+"px";
			}
			else if(pack == 39) {
					if(!(Gl >= 174)) 
				Gl+= 3;
				mensh.style.left = Gl+"px";
			}
			else if(pack == 38) {
					if(!(Gt <= 0)) 
				Gt-=3;
				mensh.style.top = Gt+"px";
			}
			else {
				 		if(!(Gt >= 350)) 
					Gt+=3;
				mensh.style.top = Gt+"px";
				
			}
}


var str = ["first", "two", "fri", "four", "five"]
var autos = [];
		//4.Это функция которая запускается в таймере под цифрой 1,рандомное положение машины задется здесь же.
		function Machine(cl) {
			var elem = document.createElement("div");

			this.class= cl;
				
					if(autos.length)
				autos.pop();

				var rand = Math.round(Math.random()*4);
				elem.classList.add(str[rand], "auto");
				elem.setAttribute("alt", rand+"f");

				autos.push(elem)

			


		}

		var lvl = 30;
		//3. Это таймер увеличения скорости
		var clears = setInterval(function(){
			lvl -= 7;
		}, 100000)

		//2.Данная функция для каждой машины меняет координату,если машина пересекла предел карты,то уничтожает ее.
		//Также в этой функии создает контейнер,в котором каждый раз обновляются координаты left и top, данный контейнер записывается в массив  massObj;
		function chang(amg) {
				var e = getComputedStyle(amg); 
				var zn = -40;
				var oop = {};
				oop.alt = amg.getAttribute("alt");
				massObj.push(oop);
				
			amg.style.top = "-40px";
				var inter = setInterval(function (){
						if(zn<410){

							zn += 3;
					amg.style.top = zn + "px";
					oop.top = amg.style.top;
					oop.left = e.left;
					
					
					
				}
				else {
					
					massObj.pop();
						if(track.children.lenght > 2)
					track.removeChild(amg);
					clearInterval(inter);
				}
				}, lvl)
		}

		var timers;
		// 1.Фунция,которая запускает таймер,и каждые 1400мс создает машины,добавляя их на страницу,и для каждой машины запускает фунцию  chang();
			function playGAME(){
				gameClose = 0;
					if(!timers)
		timers = setTimeout(function out(){
	
				new Machine();
				track.appendChild(autos[0]);
				chang(autos[0]);
			
				timers = setTimeout(out, 1400)
				
		}, 1400)
	
}
		
		var massObj = [];
		
	//6. Эта фунция срабатывает при столкновении, очищает полностью трассу от машин,останавливает все таймеры, чистит массивы, обновляет переменные.
		function endGame(arg){
			
			clearTimeout(arg);
				if(track.children.length > 1) {
					for(var i =0;i<track.children.length;i++) {
						if(!track.children[i].classList.contains("gamer"))
							track.removeChild(track.children[i]);
					}
				}
				for(var j = 0;array.length;j++) {
					clearInterval(array[i]);
					array.pop();
				}
				source = 0;
				lvl = 30;
				timers = false;
				clearInterval(clears);

		}
	

 	var XColl;
  	var YColl;
  	var wid = 30;
  	var heig = 50;

  	




var inters;
// 7.Запускает таймер и фунцию MacroCollision принимая аргументы саму машину - игрока и массив координат всех врагов.
	setTimeout(function(){
	inters =  setInterval(function(){
		MacroCollision(mensh,massObj)
		
	},100)
},1500)




var array = [];

XColl=false;
  	 YColl=false;
var newGamer;
//9. Ну а эта фунция каждые 10 мс отслеживает координаты игрока и элемента массива - конкретной машины и при совпадение запускает фунцию endGame();
	function revisionen(any) { 
		var x = false, y = false;
		
		var s = setInterval(function() {
			if(parseInt(any.top) > 380) {
				source++;
					chetchik.innerHTML = source;
				for(var b = 0; b<array.length;b++) {
					if(array[b] == s) array.pop();
				}
				clearInterval(s);
				return;
			}
			
  			
  		if(x && y) {
  			
  			endGame(timers);
  		

  		}

  			x = false;
			y = false;
				//if(!(mensh.getAttribute("alt") == any.alt)) clearInterval(s);
				setTimeout(function(){
				if ((Gl + 25 >= parseInt(any.left)) && (Gl <= parseInt(any.left) + 25))   {x= true;}
				}, 10)
			
 			
  		    if ((Gt + 48 >= parseInt(any.top)) && (Gt <= parseInt(any.top) + 48)) {y = true;}

  		
  			
  			
  			

  			
		}, 10)
		array.push(s);
	}





var globLength;
var iteration = 1;
//8. Алгоритм,написанный в этой фунции,наверное,наиважнейший,так как очень хорошо оптимизирует  игру. Эта фунция запускае для каждого элемента массива massObj функию revisionen(); Так как эта функиция MacroCollision() срабатывает очень часто каждые 100мс,то я сделал так,чтобы функия revisionen() запускалась только для появившихся машин,не брав полностью массив massObj;Сложно написано,но здесь то и творится вся магия!

		function MacroCollision(gamer,arr){
  	 	
  	newGamer = getComputedStyle(gamer);
  			if(iteration) {
  				globLength = massObj.length;
  		for(var i =0;i<arr.length;i++) {
  			revisionen(massObj[i]);
  		}
  		iteration--;
  	}
else{

  		if(globLength != massObj.length && massObj.length != 0)
  		{
  			for(var j = 0;j<massObj.length - globLength;j++) {
  				revisionen(massObj[globLength+j]);
  			}
  		}
  	globLength = massObj.length;
  }

  	
	
}
}


	
