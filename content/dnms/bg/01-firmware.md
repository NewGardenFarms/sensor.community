---
title: Драйвер и фърмуер
---

Вече сме подготвили фърмуера. Трябва само да инсталирате драйвери и да флашнете вашите платки NodeMCU (ESP8266) и Teensy 4.0.

За да комуникирате с вашия ESP8266, се нуждаете от usb2serial драйвери за вашата операционна система.

Чипсетът за NocdeMCU v3 обикновено е CH341, просто проверете на гърба на вашия NodeMCU, за да намерите техническа информация. Изберете връзката, която съответства на операционната система на вашия компютър.

### Windows

##### Драйвери за model V2 (CP2102) за Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Windows 10 трябва да може автоматично да изтегли тези
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - 32-битова версия - **не поддържа** 64-битова версия на операционната система

##### Драйвер за модел V3 (CH341) за Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Windows 10 трябва да може да ги изтегли автоматично

##### Изтеглете изтегления файл за Windows:
* за V2: Отворете папката CP210x и кликнете два пъти върху приложението CP210xVCPInstaller_x64 (или x86)
* за V3: отворете папката CH341SER и щракнете два пъти върху приложението SETUP.

---

### MacOS

##### MacOS драйвери
* [NodeMCU V2](https://www.silabs.comdocumentspublicsoftwareMac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Извлечете изтегления файл за MacOS.
* за V2: Разопаковайте папката CP210x и кликнете два пъти върху приложението CP210xVCPInstaller_x64 (или x86)
* за V3: разархивирайте папката CH341SER и кликнете два пъти върху приложението SETUP.
* Рестартирайте вашия Mac

---

### Linux
Не е необходимо да се инсталират драйвери. Чипът трябва да се поддържа директно (проверява се с dmesg)

---
### Firmware Flasher NodeMCU
Поддръжка на множество операционни системи: Windows, MacOS и Linux.

* [AirRohr Flashing Tool] (http://firmware.sensor.communityairrohrflashing-tool)
* [Изходен код](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Свържете NodeMCU към компютъра си с къс микро USB кабел (изберете по-къс от 1 метър, в противен случай инсталацията може да се провали). Изберете `latest_en.bin` (или друга езикова версия) и щракнете върху "Upload".
Изчакайте, докато процесът приключи. Сега можем да сглобим сензора.
<br>
Големи благодарности на [Piotr, от Полша](https://dropbox.inf.re) за помощта му! 🙋♂️

---
### Firmware Flasher Teensy
В [Github на Helmut Bitter](https://github.comhbitterDNMStreemasterFirmware) можете да намерите два вида фърмуер:
* .ino
* .hex

##### Зареждане на Teensy
Можете да флашнете .hex файла в платките Teensy с помощта на самостоятелния софтуер с графичен потребителски интерфейс [Teensy Loader](https://www.pjrc.comteensyloader.html) за Windows, Mac и Linux.
Съществува и версия за команден ред.

##### Teensyduino
Можете да флашнете .ino файла в платките Teensy с разширението Arduino IDE [Teensyduino](https://www.pjrc.comteensyteensyduino.html).
Ако е необходимо, можете да модифицирате фърмуера директно в Arduino IDE.
