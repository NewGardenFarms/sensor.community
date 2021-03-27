---
title: Uvod
---
---
  <div class="max-w-screen-xl mx-auto pb-5">
    <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
            </svg>
          </span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Hrup je v beta različici. Vprašanja pošljite na<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                Noise@Sensor.Community</a>
        </div>
    </div>
  </div>
</div>


> 🚧 Sestavite svoj senzor DIY in postanite del svetovnega omrežja opendata &amp; civictech. <br> S senzorjem DNMS (digitalni senzor za merjenje hrupa) lahko sami merite onesnaženost s hrupom.

 <img src="...docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy">


Oglejte si izvirna navodila in prejšnje različice senzorja hrupa na [Github Helmuta Bitterja](https://github.comhbitterDNMStreemasterManual).

<br>

Ta shramba vsebuje različne nastavitve za izdelavo senzorja z različnimi vrstami plošč in tiskanih vezij.
Ta shramba vsebuje različne nastavitve za izdelavo senzorja z različnimi vrstami plošč in tiskanih vezij.
 <br>
 <br>
 Obstajata dve različni vrsti nastavitev:
 Obstajata dve različni vrsti nastavitev:
* nastavitev, kjer sta NodeMCU z nekaterimi senzorji (PM, temperatura itd.) in DNMS ločena. PCB se imenujeta AIRROHR V1.4 in DNMS - T4 V1.4
* kombinirana različica NodeMCU in DNMS na istem tiskanem vezju: DNMS - T4+NodeMCU V1.4
* kombinirana različica NodeMCU in DNMS na istem tiskanem vezju: DNMS - T4+NodeMCU V1.4
 Tu je opisana samo različica, pri kateri sta NODEMCU in DNMS ločena. Za druge različice si oglejte Helmutov Github!
 Tu je opisana samo različica, pri kateri sta NODEMCU in DNMS ločena. Za druge različice si oglejte Helmutov Github!
  V tem primeru je lahko povezava med NodeMCU in DNMS dolga do 10 m. To je pomembno, ker morate najti pravi položaj za DNMS, da dobite natančne meritve hrupa.

### Nakupovalni seznam

##### Posamezni sestavni deli
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Razvojna plošča Teensy 4.0](https://www.pjrc.comstoreteensy40.html). Drugi prodajalci: [EXPTECH](https://www.exp-tech.deplattformenteensy9596teensy-4.0-development-board), [Antratek](https://www.antratek.deteensy-4-0), [PIMORONI](https://shop.pimoroni.comproductsteensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)
* izjemno prožni silikonski kabli s premerom 0,15 mm² (AWG 26) v 6 različnih barvah
<br>
DNMS (digitalni senzor za merjenje hrupa) je mogoče kombinirati s senzorjem PM airRohr:

* Senzor finega prahu SPS30] (https://www.sparkfun.comproducts15103). Drugi prodajalci: [TME](https://www.tme.eudedetailssps30gassensorensensirion1-101638-10?brutto=1), [SOS electronic](https://www.soselectronic.deproductssensirionsps30-2-304234). Uporablja se lahko tudi običajni senzor PM [SDS011](https://de.aliexpress.comwholesale?catId=0&amp;initiative_id=AS_20200813122806&amp;SearchText=sds011).
* [BME280 6-PIN Različica, temperatura in vlažnost] (https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040440&amp;SearchText=bme280+-5V++3,3V). Drugi prodajalci: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Kabel] (http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+kabel+20cm+ženska-ženska)
* [Kabel USB, npr.: ploščati 2m Micro-USB](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+ploščati+kabel+2m)
* [Napajalnik USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Kabelski trakovi](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+trakovi)

PCB-ji in zaščita pred vremenskimi vplivi so opisani v nadaljevanju.

<br>

🙌 Super, odločili ste se za spletni nakup delov!
Žal lahko dostava traja od nekaj dni do treh tednov.
Do takrat uživajte v življenju️.
