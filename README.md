# <img src="https://intranet.hbtn.io/assets/holberton-logo-default-27055cb2f875eb10bf3b3942e52a24581bc0667695bdc856d4f08b469b678000.png" width="30"> AirBnB Clone V.4 - Web dynamic

Project Links: [v0.0](https://github.com/peytonbrsmith/airbnb_clone) [v0.5](https://github.com/peytonbrsmith/airbnb_clone_v2) [v0.75](https://github.com/peytonbrsmith/airbnb_clone_v3) [Final - You Are Here](https://github.com/peytonbrsmith/airbnb_clone_v4)

This was an iterative and collaborative project which spanned multiple repositories and contributors.

## Synopsis
This is the 4th and FINAL version of our AirBnB clone project. We will be using python3, RESTful API, MySQL, Flask, and jQuery AJAX

<p><img src="https://s3.amazonaws.com/intranet-projects-files/concepts/74/hbnb_step5.png" alt="step2"></p>

## Table of Contents
* [Environment](#environment)
* [File Descriptions](#file-structure)

## Environment
This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3), jQuery (version 3.x), MySQL (version 5.7), Flask, and Chrome (version 57.0)

## File Structure
- **[api](api)** directory contains Flask web applications for a RESTful API
- **[models](models)** directory contains all classes used for this project:
- **[tests](tests)** directory contains all unit test cases for this project.
- **[web_dynamic](web_dynamic)** directory contains all files necessary to start a dynamic Flask web application.
- **[web_flask](web_flask)** directory contains all files necessary to start a Flask web application.
- **[web_static](web_static)** directory contains all html, css and images used for the static website.
- [0-setup_web_static.sh](0-setup_web_static.sh) - bash script that sets up web servers for the deployment of `web_static`
- [1-pack_web_static.py](1-pack_web_static.py) - Fabric script that generates a .tgz archive from the contents of `web_static`, using the function `do_pack`
- [2-do_deploy_web_static.py](2-do_deploy_web_static.py) - Fabric script (based on [1-pack_web_static.py](1-pack_web_static.py)) that distributes an archive to web servers, using the function `do_deploy`
- [3-deploy_web_static.py](3-deploy_web_static.py) - Fabric script (based on [2-do_deploy_web_static.py](2-do_deploy_web_static.py)) that creates and distributes an archive to web servers, using the function `deploy`
- [AUTHORS](AUTHORS) - list of Authors who have worked on this project.
- [console.py](console.py) - the console is a command line used to interact with the storage engines. 
- [setup_mysql_dev.sql](setup_mysql_dev.sql) - MySQL script to set-up the hbnb_dev_db database.
- [setup_mysql_test.sql](setup_mysql_test.sql) - MySQL script to set-up the hbnb_test_db database.

