import 'bootstrap@4.6.0'
import $ from 'jquery'

console.log('App started')

    // function detect(num){ belum bisa detect otomatis nomornya
    // 	if (num.substring(0,3)==='110'){
    //     return 'SIM';
    //   }
    //   else if (num.substring(0,3)==='157'){
    //     return 'KTP';
    //   }
    //   else {
    //     return 'Jenis ID tidak dikenal'
    //   }      
    // }



    function changeID(x, y){
      listOfId[x-1].nomorID = y;
      listOfId[x-1].type = detect(y);
    }

  let leaveList =[];
  let leaveCount = 0;
  let listOfId = [];
  let N = 0;


$("#init")  
  .on('click', function initFunction() {
    console.log('Hi!')
    // let justNumberList = [];
    let justNumber; 
    let justType;

    let M = prompt("Masukkan jumlah ID yang akan dimasukkan :");
    // if (M>100) console.log("yang bener dong"); M = null; M = prompt("masukkan yang serius")
    N = parseInt(M,10);

    console.log("Jumlah ID berarti "+ N +" ya kak");
    alert("Jumlah ID berarti "+ N +" ya kak");
    console.log("Sekarang masukkan daftar ID :")
    // let contoh = 0; //hanya untuk debug
    for (let i = 0;i < N; i++){

    	// do{        
      justNumber = prompt("masukkan nomor ID ke " + (i+1)); 
      // } while ((justNumber !== '110') || (justNumber !== '157') )   //while condition kok ngga bisa y?
       
      // justNumberList.push(justNumber);
    // }
    // justNumberList.forEach(function(theNumber){
      justType = prompt("masukkan tipe ID juga " );
      let exObj = {};
      exObj.nomorID = justNumber;
      exObj.type = justType;
      listOfId.push(exObj);

    // });
    }

  }
  
 )
 
$('#leave')
  .on('click', function leaveFunction() { 

    let leaveNumber = prompt ("Masukkan nomor loker yang akan dikosongkan")
    leaveList.push(leaveNumber);
    listOfId[leaveNumber-1].type = null;
    listOfId[leaveNumber-1].nomorID = null;
    leaveCount++;
    
    console.log("Anda baru saja menghapus data di loker "+leaveNumber)
    alert("Anda baru saja menghapus data di loker "+leaveNumber);
    // console.log("leaveNumber adalah " + leaveNumber); //ngecek fungsinya jalan apa ngga
    // console.log(leaveCount);   //ngecek fungsinya nyambung ke variabel atas atw ngga
    // console.log('Hi friend!') // debug ngeliat kalo tombolnya jalan

  })

  $('#add')
  .on('click', function addFunction() { 
    // console.log(N);
    // console.log(listOfId[1].nomorID);
    // console.log(listOfId[N-1]);
    // diatas untuk cek fungsi tombolnya

    if (leaveCount === 0){

      // let exObj = {};
      // exObj.nomorID = prompt("Masukkan ID baru :");
      // exObj.type = prompt("Masukkan tipenya juga ");
      // listOfId.push(exObj);
      // diatas tadinya saya pakai kalau bisa nambah loker otomatis, rupanya g boleh.
      console.log("Maaf loker penuh, hapus dulu.");
      alert("Maaf loker penuh, hapus dulu.");

    }
    else {
      leaveList.sort((a, b) => a - b); 
      // untuk javascript, klo tidak ada expresi komparasi setelah sort, yang di sort adalah bentuk string-nya. Singkat cerita, di string itu 10 lebih kecil dari 2.
      console.log ("anda akan menaruh ID baru di loker kosong nomer " +leaveList[0]+ ", soalnya dekat");
      
      let x = prompt("Masukkan ID baru");
      console.log(x +" baru saja dimasukkan sebagai ID baru di loker " + leaveList[0]);
      alert(x +" baru saja dimasukkan sebagai ID baru di loker " + leaveList[0]);
      changeID(leaveList[0],x);
      leaveList.shift(); //supaya setelah ini leaveList[0] bisa dipakai lagi dengan elemen baru karena yang tadi sudah diisi.
      leaveCount --;
    }

  })
  $('#show')
  .on('click', function showFunction() { 
    console.log(listOfId)
    alert(JSON.stringify(listOfId))
  })
  $('#searchId')
  .on('click', function searchByIdFunction() { 
    let x = prompt ("Masukkan nomor identitas yang anda cari : ");
    

    const index = listOfId.map(e => e.nomorID).indexOf(x); //++

    if(index === -1) {
      console.log("g ketemu"); alert ("g ketemu")}
      
     else {
       console.log("Id dengan nomor " + x +" ada di loker " + (index + 1)) // 
        alert("Id dengan nomor " + x +" ada di loker " + (index + 1))}

  })
  $('#searchType')
  .on('click', function searchByTypeFunction() { 
    let tempList = [];
    let tempType = prompt ("masukkan jenis ID yang ingin anda cari");

    

    findWithType(listOfId,tempType)

    function findWithType(array, value) { //++
      for(var i = 0; i < array.length; i += 1) {
        if(array[i].type === value) {
            tempList.push(i+1);
        }
    };
    if (tempList.length === 0) {
      console.log("g ketemu");
      alert("g ketemu");
    }
    else {
    console.log("ID dengan tipe tersebut ada di loker nomor " + tempList); 
    alert("ID dengan tipe tersebut ada di loker nomor " + tempList);
    }
}

    // console.log('Hi friend!') //debug

  })
