```mermaid
flowchart TD
    A[Başla] --> B[Kelimeyi al]
    B --> C[Sesli harfleri belirle]
    C --> D[Heceler ve geçici hece değişkeni oluştur]
    D --> E[Kelime boyunca döngü başlat]
    
    E -->|Her harfi heceye ekle| F{Harf sesli mi?}
    F -->|Evet| G{Son harf mi?}
    
    G -->|Hayır| H{Bir sonraki harf var mı?}
    H -->|Evet| I{Sonraki harf sessiz mi?}
    
    I -->|Evet| J[Sonraki harfi de ekle ve i++]
    I -->|Hayır| K[Heceyi listeye ekle]

    J --> K
    H -->|Hayır| K

    K --> L[Yeni heceyi başlat]
    L --> M{Döngü devam ediyor mu?}

    M -->|Evet| E
    M -->|Hayır| N{Kalan harf var mı?}
    
    N -->|Evet| O[Kalan heceyi ekle]
    N -->|Hayır| P[Heceleri döndür]

    O --> P
    P --> Q[Bitiş]
