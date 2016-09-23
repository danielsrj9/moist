# **Irrigation Balance Monitoring System** #

### Purpose ###
* Combination of database data mining and measurements to determine ratio irrigation source (i.e., rainwater or pumped water).
* Convert existing SQL database into usable format. 

### Inputs ###
* Rain water gauges
* Ambient temperature
* Humidity
* Pressure
* Sunlight intensity
* Regional weather data
* Soil moisture
* misc. ag data 

### Outputs
* GSP overlay data 
* Rain Collection Data
* Temp. and humidity contour maps
* Site specific and field water balance at various time intervals
* Generate report on irrigation for farmer showing:
* Cost, monthly stats on balance, and targeted water volume/sq ft for plant type 


### Functions
* Simple user interface to visualize data, maps, and reports on water balance 

### Performance
* Reports generated once a day, data collected every hour, unless storm warning detected for county. 
### Cost 
* TBD
* Rain gauge already provided 

### Power
* Less than 500 mW per unit during activity, < 250 mW while listening, and < 100 mW while sleeping 

### Size/weight
* 6" x 6" x 3" (for atmospheric measurement sensor system) and < 250 grams 


### Frameworks
* MySQL (Database): Current system could be replaced by SQL-lite or MongoDB (not likely). 

* BootStrap (UX of webApp): Bootstrap has a mobile-first approach for delivery of webApps and includes "scaffolding" (not exactly like ROR) to ensure the webApp maintains a consistent user experience (UX) across platforms (mobile, browser, tablet, etc). Relatively minimal experience in programming with HTML/CSS and javascript required to produce great looking webApps. Unfortunately, it is not natively paired with MySQL, rather jQuery. We will have to marry these together somehow. I am currently researching this. Google Charts is a likely candidate to support MySQL. Worst case scenario - we write our own parser specific to our application (likely in PHP and JavaScript) **Similar Ideas**:http://wrapbootstrap.com/preview/WB0R5L90S  
https://blackrockdigital.github.io/startbootstrap-sb-admin-2/pages/index.html 
Notice how the site dynamically changes when you scale the window size of the browser.   
 
* Android SDK (Downloadable webApp). The Android Studio Development Kit provides a webApp interface to create a view in a downloadable app that may contain content not created on the device itself (WebApp: https://developer.android.com/guide/webapps/index.html). The Android SDK also provides interfaces to the physical device such as to support auxiliary functionality built in the phone and not serviced by the webApp. (e.g. Bluetooth, GPS, Wifi, etc). The Android SDK is also a likely candidate to alert the user to notifications about the sensors.This requires the user to have an Android phone however, and does not support notifications to users utilizing the web browser version of the WebApp. It is likely email alerts could be used in conjunction with the mobile App through an email daemon.      

* Google Charts  (UX visualization of Database) Google Charts provide interactive display of content either hardcoded in the JavaScript, or from cached resources such as Databases and spreadsheets. This could be a solution to interfacing between BootStrap and the data from the sensors. It will also aid in minimizing data that does not need to be repeatedly sent to the device. https://developers.google.com/chart/interactive/docs/gallery 
 
### Not actively seeking contribution
(at the moment)

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact