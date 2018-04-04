/* 1. Buat array dengan berisi tahun-tahun di mana orang dilahirkan */
var year = [1997, 1998, 1999, 2000, 2001, 2002];

/* 2. Buat array kosong(cukup[]) */
/*var usia = []; */

/* 3. Gunakan loop untuk mengisi array dengan usia orang-orang */
/*for (var i = 0; i < year.length; i++)
     {
     var age = 2018 - year[i];
     usia.push(age);
     };*/

/* 4. Gunakan loop lain untuk masuk ke konsol apakah setiap orang berusia penuh (18 tahun atau lebih), serta usia mereka */
/* for (var j = 0; j < year.length; j++)
     {
     var age = 2018 - year[j];
         if(age<18)
             {
                 console.log('Penuh' + age);
             }
         else
             {
                 console.log('Tidak Penuh' + age);
             }
     };*/
/* 5. Terakhir, buat fungsi yang disebut printFullAge yang menerima array tahun sebagai argumen, jalankan langkah 2., 3. dan 4. dan kembalikan sebuah larik nilai boolean true / false: benar jika orang tersebut berusia penuh ( > = 18 tahun) dan salah jika tidak (<18 tahun) */
function printFullAge(tahun)
{
    var usia = [];
     var age = 2018 - tahun;
     usia.push(age);
         if(age>18)
             {
                 console.log('Penuh' + ' ' + 'umurnya adalah ' + age);
                 console.log('True');
             }
         else
             {
                 console.log('Tidak Penuh' + ' ' + 'umurnya adalah ' + age);
                 console.log('False');
             }
}

/* 6. Panggil fungsi dengan dua array yang berbeda dan simpan hasilnya dalam dua variabel: full_1 dan full_2 */
var full_1 = printFullAge(1965);
var full_2 = printFullAge(2008);
var full_3 = printFullAge(1992);

     