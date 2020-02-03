# Taller1 Aplicaciones progresivas (PWA)
## F1
Para inyectar la información de la estación en la base de datos de IndexedDB en el primer reload del cliente se hace usó de la librería localforage.js, el motivo es porque LocalForage es una librería de JavaScript open source que hace que trabajar con bases de datos en el navegador sea mucho más sencillo. Su API, a primera vista, se parece mucho a localStorage. Su implementación fue la siguiente:
En app.js se agregó la siguiente configuración:
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/localforage_app.jpg)
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/localforage_app2.jpg)

## F2
Para inyectar la información en la base de datos de IndexedDB cada vez que un usuario agrega una estación solo se agregó el llamado de la función saveSelectedTimetables() (expuesta en la imagen anterior) en la función que ejecuta el evento al dar click en el botón agregar (app.js):
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/guardar_nueva_estacion.jpg)

## F3
Para almacenar la App Shell se guardan en un arreglo los archivos estáticos de nuestra aplicación y se aplica el evento install en el service-worker.js
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/cache_app_shell.png)

## F4
En el service-worker.js se utiliza la siguiente función para interceptar todos los llamados que contengan la url: "https://api-ratp.pierre-grimaud.fr/v3/schedules/" cuando esos llamados son realizados, los datos se almacenan en un cache llamado: data-cache-v1.
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/cache_datos_horarios.png)

Se agregan funciones en el app.js para obtener por red o por cache
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/cache_datos_funciones.png)
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/cache_datos_app.png)


## F5
Se crea el script install.js con el fin de poder integrar nativamente las aplicaciones Android y IOS. Este script nos permite descargar la aplicación a cualquier dispositivo (web y móvil). Para ello se agrega en el index.html el botón de descargar.

![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/compatibilidad_movil.jpg)

## F6
La url de la aplicación desplegada en firebase es: https://taller1-daury-lecca.firebaseapp.com/

## WORKBOX
Se agrega el siguiente código al service-worker.js:
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/workbox_service_worker.png)
Con este código importamos la librería de workbox-sw.js la cual nos permite almacenar en caché los archivos estáticos y los datos de los horarios de la aplicación en tiempo de ejecución

## Reportes Lighthouse
#### Reporte inicial
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/reporte_1.jpg)
#### Reporte final en local
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/reporte_local_pwa.jpg)
#### Reporte Firebase
![](https://github.com/naty1610/ratp-pwa-taller1/blob/master/images/reporte_firebase.png)

