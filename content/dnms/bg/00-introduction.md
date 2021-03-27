---
title: Въведение
---
---
  <div class="max-w-screen-xl mx-auto pb-5">

    <div class="flex items-center">
          <span class="p-2 rounded-lg bg-indigo-500">
            <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5. 436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" >
            <svg>
          <span>
        <div class="flex-wrap flex">
          <p class="pt-1 text-indigo-700 font-medium">
              Шумът е в бета версия. Изпращайте въпроси до<p>
        <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-whover:text-yellow-600">
                Noise@Sensor.Community<a>
        <div>
    <div>
  <div>
<div>


> 🚧 Изградете своя сензор "Направи си сам" и станете част от световната мрежа opendata &amp; civictech. <br> С DNMS (цифров сензор за измерване на шума) можете сами да измервате шумовото замърсяване.

 <img src="..docsdnmsdnms-noise-measuring-sensor-kit.jpg" style="display: block; margin: 1em 0" loading="lazy">


Вижте оригиналните инструкции и предишните версии на сензора за шум в [Github на Helmut Bitter](https://github.comhbitterDNMStreemasterManual).

<br>

Това хранилище съдържа различни настройки за изграждане на сензора с различни видове платки и печатни платки.
Това хранилище съдържа различни настройки за изграждане на сензора с различни видове платки и печатни платки.
 <br>
 <br>
 Съществуват два различни вида настройки:
 Съществуват два различни вида настройки:
* конфигурация, при която NodeMCU с някои сензори (PM, температура и др.) и DNMS са разделени. Платките се наричат AIRROHR V1.4 и DNMS - T4 V1.4
* комбинирана версия на NodeMCU и DNMS на една и съща печатна платка: DNMS - T4+NodeMCU V1.4
* комбинирана версия на NodeMCU и DNMS на една и съща печатна платка: DNMS - T4+NodeMCU V1.4
 Тук е описан само вариантът, при който NODEMCU и DNMS са разделени. Погледнете в Github на Helmut за другите варианти!
 Тук е описан само вариантът, при който NODEMCU и DNMS са разделени. Погледнете в Github на Helmut за другите варианти!
  В този случай връзката между NodeMCU и DNMS може да бъде дълга до 10 m. Това е важно, тъй като трябва да се намери подходящата позиция за DNMS, за да се получат точни измервания на шума.

### Списък за пазаруване

##### Единични компоненти
* [NodeMCU ESP8266 CPUWLAN](https://www.aliexpress.com/wholesale?groupsort=1&SortType=price_asc&SearchText=nodemcu+v3+esp8266+ch340)
* [Развойна платка Teensy 4.0](https://www.pjrc.comstoreteensy40.html). Други продавачи: [EXPTECH](https://www.exp-tech.deplattformenteensy9596teensy-4.0-development-board), [Antratek](https://www.antratek.deteensy-4-0), [PIMORONI](https://shop.pimoroni.comproductsteensy-4-0-development-board)
* [Digitales Mikrofon ICS-43434](https://www.tindie.comproductsonehorseics43434-i2s-digital-microphone)
* ултра гъвкави силиконови кабели с диаметър 0,15 mm² (AWG 26) в 6 различни цвята
<br>
DNMS (цифров сензор за измерване на шума) може да се комбинира с PM-сензор на airRohr:

* Сензор за фин прах SPS30] (https://www.sparkfun.comproducts15103). Други продавачи: [TME](https://www.tme.eudedetailssps30gassensorensensirion1-101638-10?brutto=1), [SOS electronic](https://www.soselectronic.deproductssensirionsps30-2-304234). Може да се използва и обичайният [SDS011 сензор за твърди частици](https://de.aliexpress.comwholesale?catId=0&amp;initiative_id=AS_20200813122806&amp;SearchText=sds011).
* [BME280 6-PIN версия, температура и влажност] (https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040440&SearchText=bme280+-5V+%2B3.3V). Други продавачи: [Nettigo](https://nettigo.eu/products/module-pressure-humidity-and-temperature-sensor-bosch-bme280), [Berrybase](https://www.berrybase.de/bauelemente/sensoren-module/feuchtigkeit/bme680-breakout-board-4in1-sensor-f-252-r-temperatur-luftfeuchtigkeit-luftdruck-und-luftg-252-t)
* [Кабел] (http://www.aliexpress.comwholesale?groupsort=1&amp;SortType=price_asc&amp;SearchText=Dupont+кабел+20cm+женски-женски)
* [USB кабел, например: плосък 2 м Micro-USB] (https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040708&amp;SearchText=micro+usb+плосък+кабел+2 м)
* [Захранване USB](https://www.aliexpress.com/wholesale?catId=0&initiative_id=SB_20200308040834&SearchText=single+micro+usb+eu+power+supply)
* [Кабелни ремъци](https://www.aliexpress.comwholesale?catId=0&amp;initiative_id=SB_20200308040852&amp;SearchText=cable+ремъци)

ПХБ и защитата от атмосферни влияния ще бъдат описани по-долу.

<br>

🙌 Чудесно, решихте да купите частите онлайн!
За съжаление доставката може да отнеме от няколко дни до три седмици.
Дотогава се наслаждавайте на живота си️.
