# Irrigation Balance Monitoring System

----
## Purpose

> IBMS is a combination of database data mining and measurements to determine ratio irrigation source (i.e., rainwater or pumped water) utilizing existing remote embedded sensors populating a SQL database. IBMSs purpose is to transform this content into an usable, chartable format as well as provide mobile Android platform webApp support. This webApp will feature a login system enabling users wishing to review their specific measurements and statistics as opposed to a standardized Universal measurement upon logging into the webApp. 

See [UT Crops](http://www.utcrops.com/irrigation/irr_mgmt_moist.htm)

----
## System Inputs

* Rain water gauges
* Ambient temperature
* Humidity
* Pressure
* Sunlight intensity
* Regional weather data
* Soil moisture
* misc. ag data

----
## Outputs

* GSP overlay data
* Rain Collection Data
* Temp. and humidity contour maps
* Site specific and field water balance at various time intervals
* Generate report on irrigation for farmer showing:
* Cost, monthly stats on balance, and targeted water volume/sq ft for plant type

----
## Functionality
>Simple user interface to visualize data, maps, and reports on water balance

----
## Performance & Cost
>
Unless storm warning detected for county, DECAGON server has a maximum of six pushes to the database per day. UTIA aggrigates this data typically every two hours. The current xls spreadsheet workaround updates every twenty minutes. This introduced latency cannot be reworked from our end without further exploration into wireless sensor networking. The cost is variable dependent on the scope of the customers satisfaction. 

----
## Size & Weight
* 6" x 6" x 3" (for atmospheric measurement sensor system) 
* < 250 grams

----
## Frameworks

* BootStrap (bloated UX of webApp):

> Bootstrap has a mobile-first approach for delivery of webApps and includes "scaffolding" (not exactly like ROR) to ensure the webApp maintains a consistent user experience (UX) across platforms (mobile, browser, tablet, etc). Relatively minimal experience in programming with HTML/CSS and javascript required to produce great looking webApps.

See
[Similar](http://wrapbootstrap.com/preview/WB0R5L90S)

See
[Similar](https://blackrockdigital.github.io/startbootstrap-sb-admin-2/pages/index.html)

* Android SDK (Downloadable webApp)

> The Android Studio Development Kit provides a webApp interface to create a view in a downloadable app that may contain content not created on the device itself The Android SDK also provides interfaces to the physical device such as to support auxiliary functionality built in the phone and not serviced by the webApp. (e.g. Bluetooth, GPS, Wifi, etc). The Android SDK is also a likely candidate to alert the user to notifications about the sensors.This requires the user to have an Android phone however, and does not support notifications to users utilizing the web browser version of the WebApp. It is likely email alerts could be used in conjunction with the mobile App through an email daemon.


See [WebApp Ref. for Android](https://developer.android.com/guide/webapps/index.html)


 * Google Charts (UX visualization of Database candidate)

> Google Charts provide interactive display of content either hardcoded in the JavaScript, or from cached resources such as Databases and spreadsheets. This could be a solution

See [Google Charts Ref](https://developers.google.com/chart/interactive/docs/gallery)


* LAMP (Database and Login System)

> "LAMP is an archetypal model of web service solution stacks, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications"  ** -wikipedia. **This provides a method of utilizing the large data collected from the DECAGON MySQL sever as well as providing a login system for customizable views of the aggregated data.


----
## Contribution

Not actively seeking contribution at this time