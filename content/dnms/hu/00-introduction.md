---
title: Bevezetés
---
---
  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
            <svg>
          <span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              A zaj béta verzióban van. Kérdéseket a<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community<a>
        <div>
    <div>
  <div>
<div>


> 🚧 Építsd meg barkácsérzékelődet, és légy része a világméretű opendata &amp; civictech hálózatnak. <br> A DNMS (Digitális zajmérő érzékelő) segítségével saját maga is mérheti a zajszennyezést.

 <img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy">


Nézze meg a zajérzékelő eredeti utasításait és korábbi verzióit [Helmut Bitter Githubján](https://github.comhbitterDNMStreemasterManual).

<br>

Ez az adattár különböző beállításokat tartalmaz az érzékelő építéséhez különböző típusú lapokkal és NYÁK-okkal.
Ez az adattár különböző beállításokat tartalmaz az érzékelő építéséhez különböző típusú lapokkal és NYÁK-okkal.
 <br>
 <br>
 Kétféle beállítás létezik:
 Kétféle beállítás létezik:
* egy olyan beállítás, ahol a NodeMCU néhány érzékelővel (PM, hőmérséklet stb.) és a DNMS külön van választva. A NYÁK neve AIRROHR V1.4 és DNMS - T4 V1.4.
* a NodeMCU és a DNMS kombinált változata ugyanazon a NYÁK-on: DNMS - T4+NodeMCU V1.4
* a NodeMCU és a DNMS kombinált változata ugyanazon a NYÁK-on: DNMS - T4+NodeMCU V1.4
 Itt csak azt a változatot ismertetjük, ahol a NODEMCU és a DNMS külön van választva. A többi változatért nézd meg Helmut Githubját!
 Itt csak azt a változatot ismertetjük, ahol a NODEMCU és a DNMS külön van választva. A többi változatért nézd meg Helmut Githubját!
  Ebben az esetben a NodeMCU és a DNMS közötti kapcsolat akár 10 m hosszú is lehet. Ez azért fontos, mert a pontos zajmérésekhez meg kell találni a DNMS megfelelő pozícióját.

### Bevásárlólista

##### Egyedi alkatrészek
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 fejlesztői kártya](https://www.pjrc.comstoreteensy40.html). Egyéb eladók: [EXPTECH](https://www.exp-tech.deplattformenteensy9596teensy-4.0-development-board), [Antratek](https://www.antratek.deteensy-4-0), [PIMORONI](https://shop.pimoroni.comproductsteensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)
* ultra rugalmas szilikon kábelek 0,15 mm² átmérővel (AWG 26), 6 különböző színben.
<br>
A DNMS (digitális zajmérő érzékelő) kombinálható airRohr PM-érzékelővel:

* SPS30 finom porérzékelő](https://www.sparkfun.comproducts15103). Egyéb eladók: [TME](https://www.tme.eudedetailssps30gassensorensensirion1-101638-10?brutto=1), [SOS electronic](https://www.soselectronic.deproductssensirionsps30-2-304234). A szokásos [SDS011 PM érzékelő](https://de.aliexpress.comwholesale?catId=0&amp;initiative_id=AS_20200813122806&amp;SearchText=sds011) is használható.
* [BME280 6-PIN verzió, hőmérséklet és páratartalom] (https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Egyéb eladók: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Kábel] (http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+kábel+20cm+női-női)
* [USB kábel pl.: lapos 2m Micro-USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+lapos+kábel+2m)
* [Tápegység USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040834&amp;SearchText=single+mikro+usb+eu+táp+tápegység)
* [kábelhevederek](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+hevederek)

A PCB-ket és az időjárásvédelmet az alábbiakban ismertetjük.

<br>

🙌 Nagyszerű, úgy döntöttél, hogy online vásárolod meg az alkatrészeket!
Sajnos a szállítás napoktól akár három hétig is eltarthat.
Addig is élvezd az életed.
