set(COMPONENT_SRCS "app_main.c")
set(COMPONENT_ADD_INCLUDEDIRS ".")

idf_component_register(SRCS "wifi_connect.c"
		INCLUDE_DIRS "include"
		REQUIRES "tcpip_adapter")

register_component()
