# ESP8266 MQTT MQ9 sensor

Gas (CO2) sensor publisher IoT project.

```
Board: ESP8266
OS: FreeRTOS
SDK: ESP8266_RTOS_SDK
Sensor: MQ9
MQTT topic: 'mq9'
```

## Setup

### Setup SDK
Follow the `ESP8266_RTOS_SDK` setup guide [link](https://github.com/espressif/ESP8266_RTOS_SDK)

### Setup config

Copy config file and change values
```sh
cp main/Kconfig.projbuild.example main/Kconfig.projbuild
```


## Commands

### Compile and flash

```sh
make app-flash
```

### Show serial monitor logs

```sh
make monitor
```

> Ctrl+] to exit 

