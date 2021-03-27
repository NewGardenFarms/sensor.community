---
title: Sissejuhatus
---

  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13,683A4,001 4,001 0 017 6h1,832c4,1 0 7,625-1,234 9,168-3v14c-1,543-1,766-5,067-3-9,168-3H7a3,988 3,988 0 01-1,564-,317z" >
            </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Müra on beeta-versioonis. Saada küsimused aadressile</p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Ehita oma DIY-sensor ja saa osa ülemaailmsest opendata &amp; civictech võrgustikust. <br> DNMS (Digital Noise Measuring Sensor) abil saate ise mõõta mürasaastet.

 <img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy">


Vaadake müraanduri originaaljuhiseid ja varasemaid versioone [Helmut Bitteri Githubis](https://github.comhbitterDNMStreemasterManual).

<br>

See repositoorium sisaldab erinevaid seadistusi anduri ehitamiseks erinevate plaatide ja trükkplaatidega.
See repositoorium sisaldab erinevaid seadistusi anduri ehitamiseks erinevate plaatide ja trükkplaatidega.
 <br>
 <br>
 On olemas kaks erinevat tüüpi seadistusi:
 On olemas kaks erinevat tüüpi seadistusi:
* seadistus, kus NodeMCU koos mõne anduriga (PM, temperatuur jne) ja DNMS on eraldatud. Trükkplaadid kannavad nime AIRROHR V1.4 ja DNMS - T4 V1.4.
* NodeMCU ja DNMS kombineeritud versioon samal trükkplaadil: DNMS - T4+NodeMCU V1.4.
* NodeMCU ja DNMS kombineeritud versioon samal trükkplaadil: DNMS - T4+NodeMCU V1.4.
 Siin kirjeldatakse ainult seda varianti, kus NODEMCU ja DNMS on eraldatud. Vaadake Helmut'i Githubis teisi variante!
 Siin kirjeldatakse ainult seda varianti, kus NODEMCU ja DNMS on eraldatud. Vaadake Helmut'i Githubis teisi variante!
  Sellisel juhul võib NodeMCU ja DNMS vaheline ühendus olla kuni 10 m pikk. See on oluline, sest täpsete müramõõtmiste saamiseks on vaja leida DNMSi jaoks õige asukoht.

### Ostunimekiri

##### Üksikud komponendid
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Teensy 4.0 arendusplaat](https://www.pjrc.comstoreteensy40.html). Muud müüjad: [EXPTECH](https://www.exp-tech.deplattformenteensy9596teensy-4.0-development-board), [Antratek](https://www.antratek.deteensy-4-0), [PIMORONI](https://shop.pimoroni.comproductsteensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)
* ülipaindlikud silikoonkaablid läbimõõduga 0,15mm² (AWG 26) 6 erinevas värvitoonis.
<br>
DNMS (digitaalne müramõõtmisandur) on kombineeritav airRohr PM-anduriga:

* SPS30 peentolmuandur](https://www.sparkfun.comproducts15103). Muud müüjad: [TME](https://www.tme.eudedetailssps30gassensorensensirion1-101638-10?brutto=1), [SOS electronic](https://www.soselectronic.deproductssensirionsps30-2-304234). Võib kasutada ka tavalist [SDS011 PM-andurit](https://de.aliexpress.comwholesale?catId=0&amp;initiative_id=AS_20200813122806&amp;SearchText=sds011).
* [BME280 6-PIN versioon, temperatuur ja niiskus] (https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Muud müüjad: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Kaabel](http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+kaabel+20cm+naine-naine)
* [USB-kaabel nt: lame 2m Micro-USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+lame+kaabel+2m)
* [toiteallikas USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040834&amp;SearchText=single+mikro+usb+eu+toiteallikas+toiteallikas)
* [kaablipaelad](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+paelad)

Järgnevalt kirjeldatakse trükkplaate ja ilmastikukaitset.

<br>

🙌 Suurepärane, sa otsustasid osad osta internetist!
Kahjuks võib kohaletoimetamine võtta aega päevadest kuni kolme nädalani.
Seniks nautige oma elu️.
