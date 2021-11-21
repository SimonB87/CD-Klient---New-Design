# Process of Client Deploy

* Basic install instructions
1) remove content of client folder on target system
2) copy content od debug.zip to target folder on TEST environment ... or content of relase.zip in case of PRODUCTION environment
3) copy config.js.MCATEST do "scripts" sub-folder on TEST environment .. or config.js.PROD in case of PRODUCTION environment
4) delete config.js in "scripts" sub-folter, if it exists there 
5) rename config.js.MCATEST/config.js.PROD to config.js in "scripts" sub-folder

* Advanced edit instructions in case of CIC url change
- edit scripts\config.js file... 
- edit $globals.main_CIC.rootUrl property and use correct actual CIC url


