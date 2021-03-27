---
title: 疑难解答
---

### 传送问题？
在浏览器中输入以下自己的数据。
`https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&var-chipID=esp8266-[ID]`

也可以在页面左侧打开的输入栏中搜索[ID][https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1)。

* 传感器是否通过[https://devices.sensor.community](https://devices.sensor.community)注册，传感器在地图上是否可见？
* 过去的无线信号是否很弱？
  下面是服务器端信号协议：`https://api-rrd.madavi.de/grafana/d/Fk6mw1WGz/wifi-signal?orgId=1&var-chipID=esp8266-[ID]`。

### USB线有问题？
* 检查电源
* 重新启动（断开电源，例如拔出USB插头）。
* WLAN配置是否正常（传感器连接到配置的WLAN）。如果没有
  * 在重启后的头2-7分钟内，传感器是否会打开adhoc wifi（接入点）？
  * 搜索无线局域网网络`airrohr-[ID]`。重启后可能需要几分钟才能看到。
* 在自己的路由器上检查传感器是否在网络中注册，并注意IP地址。
  * 或者使用[airRohr Flashing Tool](https://github.com/opendata-stuttgart/airrohr-firmware-flasher)中的 "在网络中搜索"。
  * 如果是：通过浏览器`http://[ip-your-sensor]`连接到传感器，应出现配置。
  * 如果没有：可能是由于电源不足，重新启动循环或类似的原因。
* 通过USB电缆将NodeMCU连接到电脑上，并查看协议。
  * 用串行终端程序进行跟踪（设置：波特9600，8N1）。
    * Linux：screen、minicom、cutecom。
    * 视窗。Tera术语
    * macOS：屏幕、迷你电脑、......。
    * 可能需要合适的USB-2串行驱动程序，见[https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen](https://github.com/opendata-stuttgart/meta/wiki/Firmware-einspielen)
  * 在这里你应该看到传感器正在做什么（启动信息、WLAN连接或接入点、测量--仅在3分钟后）。

### 电子设备有问题？
* 从外壳上拆下传感器电子元件，并仔细检查。
* 再次检查电源
    * NodeMCU(ESP8266)是否在重启后不久就会闪烁？
    * SDS011：重启后红色LEDFan亮起？
    * 重新检查传感器的电缆。

  <div class="max-w-screen-xl mx-auto pt-5">
      <div class="p-2 rounded-lg bg-indigo-100 shadow-lg sm:p-3">
      <div class="flex items-center">
            <span class="p-2 rounded-lg bg-indigo-500">
              <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
        <div class="flex flex-wrap">
          <div class="flex-wrap flex">
            <p class="pt-1 text-indigo-700 font-medium">
                 噪声正在测试中。发送问题到</p>
          <a href="mailto:Noise@Sensor.Community" class="ml-1 font-medium underline text-white hover:text-yellow-600">
                  Noise@Sensor.Community</a>
          </div>
           </div>
      </div>
    </div>
  </div>



