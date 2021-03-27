---
title: Πρόγραμμα οδήγησης &amp; υλικολογισμικό
---

Έχουμε ήδη προετοιμάσει το υλικολογισμικό. Το μόνο που πρέπει να κάνετε είναι να εγκαταστήσετε τους οδηγούς και να φλασάρετε τις πλακέτες NodeMCU (ESP8266) και Teensy 4.0.

Για να επικοινωνήσετε με το ESP8266 χρειάζεστε usb2serial οδηγούς για το λειτουργικό σας σύστημα.

Το chipset για τα NocdeMCUs v3 είναι συνήθως το CH341, απλά ελέγξτε το πίσω μέρος του NodeMCU σας για να βρείτε κάποιες τεχνικές πληροφορίες. Επιλέξτε το σύνδεσμο που αντιστοιχεί στο λειτουργικό σύστημα του υπολογιστή σας.

### Windows

##### Οδηγούς για μοντέλο V2 (CP2102) για Windows
* [Windows 10](https://www.silabs.com/documents/public/software/CP210x_Universal_Windows_Driver.zip) - Τα Windows 10 θα πρέπει να είναι σε θέση να κατεβάσουν αυτόματα αυτά τα προγράμματα.
* [Windows 7/8/8.1](https://www.silabs.com/documents/public/software/CP210x_Windows_Drivers.zip) - έκδοση 32-bit - **δεν** υποστηρίζει έκδοση 64-bit OS

##### Πρόγραμμα οδήγησης για το μοντέλο V3 (CH341) για Windows
* [Windows](http://www.wch.cn/downloads/file/5.html) - Τα Windows 10 θα πρέπει να είναι σε θέση να τα κατεβάσουν αυτόματα.

##### Εξαγάγετε το αρχείο που κατεβάσατε για τα Windows:
* για το V2: Ανοίξτε το φάκελο CP210x και κάντε διπλό κλικ στην εφαρμογή CP210xVCPInstaller_x64 (ή x86).
* για V3: ανοίξτε το φάκελο CH341SER και κάντε διπλό κλικ στην εφαρμογή SETUP.

---

### MacOS

##### Οδηγούς MacOS
* [NodeMCU V2](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip )
* [NodeMCU V3](http://www.wch.cn/downloads/file/178.html)

##### Εξαγάγετε το αρχείο που κατεβάσατε για MacOS.
* για το V2: και κάντε διπλό κλικ στην εφαρμογή CP210xVCPInstaller_x64 (ή x86).
* για V3: Αποσυμπιέστε το φάκελο CH341SER και κάντε διπλό κλικ στην εφαρμογή SETUP.
* Επανεκκίνηση του Mac σας

---

### Linux
Δεν χρειάζεται να εγκατασταθούν προγράμματα οδήγησης. Το τσιπ θα πρέπει να υποστηρίζεται άμεσα (επαληθεύεται με το dmesg)

---
### Firmware Flasher NodeMCU
Υποστήριξη πολλαπλών λειτουργικών συστημάτων: Windows, MacOS και Linux.

* [airRohr Flashing Tool](http://firmware.sensor.community/airrohr/flashing-tool/)
* [Πηγαίος κώδικας](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)

Συνδέστε το NodeMCU στον υπολογιστή σας με ένα κοντό καλώδιο micro-USB (επιλέξτε ένα καλώδιο μικρότερο από 1 μέτρο, διαφορετικά η εγκατάσταση μπορεί να αποτύχει). Επιλέξτε `latest_en.bin` (ή μια άλλη γλωσσική έκδοση) και κάντε κλικ στο "Upload".
Περιμένετε μέχρι να ολοκληρωθεί η διαδικασία. Τώρα μπορούμε να συναρμολογήσουμε τον αισθητήρα.
<br>
Ένα μεγάλο ευχαριστώ στον [Piotr, από την Πολωνία](https://dropbox.inf.re), για τη βοήθειά του! 🙋♂️

---
### Firmware Flasher Teensy
Στο [Github του Helmut Bitter](https://github.comhbitterDNMStreemasterFirmware) μπορείτε να βρείτε δύο είδη firmware:
* .ino
* .hex

##### Φορτωτής Teensy
Μπορείτε να φλασάρετε το αρχείο .hex στις πλακέτες Teensy με το αυτόνομο λογισμικό GUI [Teensy Loader](https://www.pjrc.comteensyloader.html) για Windows, Mac και Linux.
Υπάρχει επίσης μια έκδοση γραμμής εντολών.

##### Teensyduino
Μπορείτε να φλασάρετε το αρχείο .ino στις πλακέτες Teensy με την επέκταση Arduino IDE [Teensyduino](https://www.pjrc.comteensyteensyduino.html).
Εάν χρειαστεί, μπορείτε να τροποποιήσετε το υλικολογισμικό απευθείας στο IDE του Arduino.
