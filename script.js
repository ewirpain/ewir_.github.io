document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');
    
    let yesBtnSize = 1;
    let clickCount = 0;
    
    // Hayır butonuna tıklandığında
    noBtn.addEventListener('click', function(e) {
        // Rastgele pozisyon hesapla
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        // Butonun container içinde kalmasını sağla
        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;
        
        // Rastgele pozisyon
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        // Butonu hareket ettir
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        
        // Evet butonunu büyüt
        clickCount++;
        yesBtnSize += 0.2;
        yesBtn.style.transform = `scale(${yesBtnSize})`;
        
        // Evet butonunu genişlet
        if (clickCount > 3) {
            yesBtn.style.width = (yesBtn.offsetWidth + 20) + 'px';
            yesBtn.style.height = (yesBtn.offsetHeight + 10) + 'px';
        }
        
        // Buton metni güncelle
        if (clickCount > 5) {
            yesBtn.textContent = 'Evet';
        }
        
        // Eğer evet butonu çok büyüdüyse, container'ı doldur
        if (clickCount > 10) {
            yesBtn.style.width = '90%';
            yesBtn.style.height = 'auto';
            yesBtn.style.padding = '30px';
            yesBtn.style.fontSize = '2rem';
        }
    });
    
    // Evet butonuna tıklandığında
    yesBtn.addEventListener('click', function() {
        // Tüm içeriği temizle
        container.innerHTML = '';
        
        // Kutlama mesajı göster
        const message = document.createElement('div');
message.innerHTML = `
            <h1 style="color: #000000; margin-bottom: 20px;">Teşekkür ederim</h1>
            <p style="font-size: 1.5rem; margin-bottom: 30px;">Bende seni özledim.. Allah yokluğunu göstermesin.</p>
            <img src="WhatsApp Görsel 2025-07-03 saat 00.25.07_974d80ff.jpg" alt="Resim" style="max-width: 100%; border-radius: 10px;">
            <p style="margin-top: 30px; font-size: 1.2rem;">Gözlerine bakınca özlediğimi değil, eksik kaldığımı anlıyorum..</p>
        `;

// Arka plan müziği ekle (Google Drive)
const audio = document.createElement('audio');
audio.id = 'background-music';
audio.loop = true;
audio.autoplay = true;
audio.volume = 0.5;

// Google Drive'dan müzik dosyasını ekle
// Google Drive linki: https://drive.google.com/file/d/1AeidBxRQDF2NCoEut4bVe6X7YMp4Kvx1/view?usp=sharing
// Drive ID: 1AeidBxRQDF2NCoEut4bVe6X7YMp4Kvx1
const driveID = '1AeidBxRQDF2NCoEut4bVe6X7YMp4Kvx1';
audio.src = `https://docs.google.com/uc?export=download&id=${driveID}`;

// Sayfa yüklendiğinde müziği otomatik başlat
audio.addEventListener('canplaythrough', function() {
    audio.play().catch(e => {
        console.error('Müzik otomatik başlatılamadı:', e);
    });
});

document.body.appendChild(audio);

// Müzik kontrol butonu ekle
const musicControl = document.createElement('button');
musicControl.innerHTML = '🔇 Müziği Kapat';
musicControl.style.position = 'fixed';
musicControl.style.bottom = '10px';
musicControl.style.right = '10px';
musicControl.style.padding = '5px 10px';
musicControl.style.backgroundColor = 'rgba(0,0,0,0.5)';
musicControl.style.color = 'white';
musicControl.style.border = 'none';
musicControl.style.borderRadius = '5px';
musicControl.style.cursor = 'pointer';
musicControl.style.zIndex = '1000';

let musicPlaying = true; // Başlangıçta müzik çalıyor

musicControl.addEventListener('click', function() {
    if (musicPlaying) {
        audio.pause();
        this.innerHTML = '🔊 Müziği Aç';
        musicPlaying = false;
    } else {
        audio.play().catch(e => {
            console.error('Müzik başlatılamadı:', e);
        });
        this.innerHTML = '🔇 Müziği Kapat';
        musicPlaying = true;
    }
});

document.body.appendChild(musicControl);
        container.appendChild(message);
        
        // Konfeti efekti ekle
        celebrateWithConfetti();
    });
    
    // Konfeti efekti fonksiyonu
    function celebrateWithConfetti() {
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDelay = Math.random() * 5 + 's';
            confetti.style.backgroundColor = getRandomColor();
            document.body.appendChild(confetti);
            
            // 5 saniye sonra konfetileri temizle
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // Rastgele renk oluştur
    function getRandomColor() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Konfeti stili ekle
    const style = document.createElement('style');
    style.textContent = `
        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            top: -10px;
            border-radius: 0;
            animation: fall 5s linear infinite;
        }
        
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});