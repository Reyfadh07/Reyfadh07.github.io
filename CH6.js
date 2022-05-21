
            function tampilData(){
                var nama = document.getElementById("nama").value;
                var umur = document.getElementById("umur").value;
                var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
                var nilaikepuasan = document.getElementById("nilaikepuasan").value;
                var anime = document.querySelector("input[name=anime]:checked").value;
                var kritiksaran = document.getElementById("kritiksaran").value;
                var tauanime = document.getElementsByName("tauanime");
                var daftaranime = ''

                for( var tauanime2 of tauanime) {
                    if(tauanime2.checked) {
                        daftaranime += ', '+ tauanime2.value
                    }
                }

                daftaranime = daftaranime.substring(1)


                alert(
                    "Nama : " + nama +
                    "\nUmur : " + umur +
                    "\nJenis Kelamin : " + jeniskelamin +
                    "\nNilai Kepuasan(1-5) : " + nilaikepuasan +
                    "\nMengetahui website kami : " + daftaranime +
                    "\nMenggunakan website kami : " + anime +
                    "\nKritik dan Saran : " + kritiksaran
                 );
            } 