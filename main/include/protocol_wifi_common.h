#pragma once

#ifdef __cplusplus
extern "C" {
#endif

#include "esp_err.h"
#include "tcpip_adapter.h"

#define WIFI_INTERFACE TCPIP_ADAPTER_IF_STA

esp_err_t wifi_connect(void);
esp_err_t wifi_disconnect(void);
esp_err_t wifi_configure_stdin_stdout(void);
esp_err_t wifi_set_connection_info(const char *ssid, const char *passwd);

#ifdef __cplusplus
}
#endif
