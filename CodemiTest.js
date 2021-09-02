import 'bootstrap@4.6.0'
import $ from 'jquery'

console.log('App started')

$('button')
  .html('Click moi') // Try edit it...
  .on('click', function myFunction() {
    console.log('Hi friend!')

    class ID{
    	constructor (type, numero){
    		this.type = type;
    		this.numero = numero;
	    }	

      }

    var N = prompt("Masukkan jumlah ID yang akan dimasukkan :");
    console.log("Jumlah ID berarti "+ N +" ya kak");
    console.log("Sekarang masukkan daftar ID :")
    // let contoh = 0; //hanya untuk debug
    for (let i = 0;i < N; i++){
    	
    	do
      {this.numero = prompt("masukkan nomor ID ke " + (i+1));
    	
      } while (this.numero.substring(0,2) !== ('11'||'19'));

    	detect(this.numero);
    }

      function detect(num){
      	if (num.substring(0,2)==='11'){
          this.type = 'SIM';
        }
        else if (num.substring(0,2)==='19'){
          this.type = 'KTP';
        }
  
      
	    }

  }
 )

