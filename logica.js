var ehMorse = false;  
  var operacoes = new Object();
  // definição de atributos
  operacoes.A = 0;
  

  // definição de métodos funcionais
  operacoes.cr1 = function() { };
  operacoes.cr2 = function() { };

  function Operacoes(n1) {
       this.a = n1;
     //  this.B = n2; 
       this.cr1 = function()  // METODO DO CODIGO MORSE
      { 
        switch(this.a)
        {

          case "A":
          return".-";

          break;

          case "B":
          return"-...";
          
          break;

          case "C":
          return"-.-.";

          case "D":
          return"-..";

          break;

          case "E":
          return".";
          
          break;

          case "F":
          return"..-.";

          case "G":
          return"--.";

          break;

          case "H":
          return"....";
          
          break;

          case "I":
          return"..";

          case "J":
          return".---";

          break;

          case "K":
          return"-.-";
          
          break;

          case "L":
          return".-..";

          case "M":
          return"--";

          break;

          case "N":
          return"-.";
          
          break;

          case "O":
          return"---";

          case "P":
          return".--.";

          break;

          case "Q":
          return"--.-";
          
          break;

          case "R":
          return".-.";

          case "S":
          return"...";

          break;

          case "T":
          return"-";
          
          break;

          case "U":
          return"..-";

          case "V":
          return"...-";

          break;

          case "W":
          return".--";
          
          break;

          case "X":
          return"-..-";

          case "Y":
          return"-.--";

          case "Z":
          return"--..";

          case "Ç":
          return"-.-..";
          
          break;
        }
        
      };


      this.cr2 = function()
      {

         switch(this.a)
        {

          case "A":
          return"😍";

          break;

          case "B":
          return"⛵️";
          
          break;

          case "C":
          return"🏠";

          case "D":
          return"☝️";

          break;

          case "E":
          return"✯";
          
          break;

          case "F":
          return"🔪";

          case "G":
          return"😸";

          break;

          case "H":
          return"🍔";
          
          break;

          case "I":
          return"⛪️";

          case "J":
          return"🐞";

          break;

          case "K":
          return"👊";
          
          break;

          case "L":
          return"🌙";

          case "M":
          return"🍜";

          break;

          case "N":
          return"☁️";
          
          break;

          case "O":
          return"🍳";

          case "P":
          return"🐟";

          break;

          case "Q":
          return"◻️";
          
          break;

          case "R":
          return"🐭";

          case "S":
          return"🐸";

          break;

          case "T":
          return"🍅";
          
          break;

          case "U":
          return"🍇";

          case "V":
          return"🐮";

          break;

          case "W":
          return"🏂";
          
          break;

          case "X":
          return"♟️";

          case "Y":
          return"☯️";

          case "Z":
          return"💤";

          case "Ç":
          return"🍏";
          
          break;
        }
        
      }
    
    }



/*******************************************/

   $(document).ready(function() {

  // variável local
  var Letra, codigo;

 // clique do CE
 $("input[name=ce]").click( function() { 
    $("#frase").val('');
    
 });

 $("input[name=botao]").click(function() { 

  var conteudoBotao = $(this).val(); 
  $("#frase").val($("#frase").val() + conteudoBotao);  

});

/////////////////////////

  $("input[name=CR1]").click( function() {
  var codigo = "";
  var visor = $("#frase").val();

  for(indice in visor)
  {
    var obj_operacoes = new Operacoes(visor[indice]);
    var codificado = obj_operacoes.cr1();
    codigo = codigo + codificado ;
  }

  $("#frase").val(codigo);
  
  });

/////////////////////////////////

  $("input[name=CR2]").click( function() {
    
    var codigo = "";
    var visor = $("#frase").val();
  
    for(indice in visor)
    {
      var obj_operacoes = new Operacoes(visor[indice]);
      var codificado = obj_operacoes.cr2();
      codigo = codigo + codificado  ;
    }
  
    $("#frase").val(codigo);
    
  });

 
});