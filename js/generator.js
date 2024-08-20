var print = ""

function imprimir(){

  for (var e = 0; e <= 276; e++){
        print += 'var paseA'+e+'=true;<br>';
        print += 'function funcionesA'+e+'(){<br>if (paseA'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[0].puntuacionUno;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseA'+e+' = false;<br>}<br>}<br>';
        
        print += 'var paseB'+e+'=true;<br>';
        print += 'function funcionesB'+e+'(){<br>if (paseB'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[1].puntuacionDos;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseB'+e+' = false;<br>}<br>}<br>';
        
        print += 'var paseC'+e+'=true;<br>';
        print += 'function funcionesC'+e+'(){<br>if (paseC'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[2].puntuacionTres;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseC'+e+' = false;<br>}<br>}<br>';
        
        print += 'var paseD'+e+'=true;<br>';
        print += 'function funcionesD'+e+'(){<br>if (paseD'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[3].puntuacionCuatro;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseD'+e+' = false;<br>}<br>}<br>';
        
        print += 'var paseE'+e+'=true;<br>';
        print += 'function funcionesE'+e+'(){<br>if (paseE'+e+' == true){<br>puntuacionUnoR = preguntas['+e+'].respuestas[4].puntuacionCinco;<br>puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;<br>for (var e = 0; e < cantidadPreguntas; e++){<br>var divPuntuacionPorRonda = textoRonda + e;<br>document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;<br>}<br>paseE'+e+' = false;<br>}<br>}<br>';
        print += '//----------------------------------------------<br>';

        print += 'function vidas' + e + '(){<br>if(conteoVidas == 0){<br>document.getElementById("vida' + e + 'A").innerHTML = vidasCambio;<br>conteoVidas++;<br>}else if(conteoVidas == 1){<br>document.getElementById("vida' + e + 'B").innerHTML = vidasCambio;<br>conteoVidas++;<br>}<br>else if(conteoVidas == 2){<br>document.getElementById("vida' + e + 'C").innerHTML = vidasCambio;<br>}<br>}<br>';
        print += '//----------------------------------------------<br>';










        document.getElementById("imprimir").innerHTML = print;

        console.log(e);
      } 

  
  
}