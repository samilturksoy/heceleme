/*Challenge: Heceleme Programi
Verilen Türkçe string parametresini hecelerine ayiran bir fonksiyon yazin.

Bu parametre daima kelime olacaktir.

Ipucu: Bir kelimeyi hecelerine ayirmak icin sesli harflere dikkat etmelisiniz. */

function hecele(kelime) {
    let sesliHarfler = 'aeıioöuü';
    let heceler = [];
    let hece = '';

    for (let i = 0; i < kelime.length; i++) {
        hece += kelime[i]; 

        if (sesliHarfler.includes(kelime[i])) {
            
            if (i + 1 < kelime.length && !sesliHarfler.includes(kelime[i + 1])) {
                hece += kelime[i + 1]; 
                i++; 
            }

            heceler.push(hece); 
            hece = ''; // 
        }
    }

    
    if (hece) {
        heceler.push(hece);
    }

    return heceler;
}

// Örnek Kullanım
console.log(hecele('istanbul')); // ['is', 'tan', 'bul']



