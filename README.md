# Beni Özledin Mi? Web Sayfası

## Genel Bilgi

Bu web sayfası, "Beni Özledin Mi?" sorusunu soran interaktif bir sayfa içerir. "Hayır" butonuna her tıklandığında, buton rastgele hareket eder ve "Evet" butonu büyür. Sonunda "Evet" butonuna tıklandığında özel bir mesaj gösterilir.

## Kendi Fotoğraflarınızı Ekleme

Şu anda sayfada örnek placeholder resimler kullanılmaktadır. Kendi fotoğraflarınızı eklemek için:

1. Fotoğraflarınızı `akm` klasörüne yükleyin (örneğin: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`)

2. `style.css` dosyasını açın ve aşağıdaki satırı bulun:

```css
background-image: url('https://via.placeholder.com/300x200/333333/ffffff?text=Eski+Foto+1'), url('https://via.placeholder.com/300x200/333333/ffffff?text=Eski+Foto+2'), url('https://via.placeholder.com/300x200/333333/ffffff?text=Eski+Foto+3');
```

3. Bu satırı kendi fotoğraflarınızın dosya adlarıyla değiştirin:

```css
background-image: url('foto1.jpg'), url('foto2.jpg'), url('foto3.jpg');
```

4. Fotoğrafların boyutunu ve konumunu ayarlamak için aşağıdaki satırları düzenleyebilirsiniz:

```css
background-position: 0 0, 100% 0, 50% 100%;
background-repeat: no-repeat;
background-size: 300px 200px;
```

## Sayfayı Açma

Sayfayı görüntülemek için `index.html` dosyasını herhangi bir web tarayıcısında açın.

## Özelleştirme

Daha fazla özelleştirme yapmak isterseniz:

- Renkleri ve metinleri değiştirmek için `style.css` dosyasını düzenleyebilirsiniz
- Butonların davranışlarını değiştirmek için `script.js` dosyasını düzenleyebilirsiniz
- Sayfa yapısını değiştirmek için `index.html` dosyasını düzenleyebilirsiniz