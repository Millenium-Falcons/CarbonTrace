![github](https://img.shields.io/badge/GitHub-000000.svg?style=for-the-badge&logo=GitHub&logoColor=white)
![markdown](https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white)

<h1 align=center>CarbonTrace</h1>
<h2 align=center>CodeUtsava 8.0<br>Millenium Falcons</h2>

## Overview
As the Millennium Falcons team, we’re more than just problem-solvers. Together, we're taking on the challenge of coal theft in the mining industry, combining our unique strengths and perspectives to tackle this head-on. The mining industry endures major financial setbacks due to coal theft, especially during transport. Thieves often mask the stolen coal by adding water to maintain the overall weight, making it difficult to detect theft using traditional methods. These conventional monitoring systems, typically manual or limited in scope, fall short in addressing the complexities of theft prevention. The lack of real-time tracking, load integrity monitoring, and anomaly detection results in unchecked inefficiencies and poor accountability. 

>[!NOTE]
>### Key Features:
> - ***Real-time Moisture Fluctuation Tracking:*** It constantly monitors the moisture of the coal. If it exceeds the base level of the moisture, it will send an alert notification both in the train and the server
>
> - ***Real-Time Anomaly Detection:*** It uses opencv to detect faces of anomalies. If detected, then it again sends an alert notifications to both train and the server
>
> - ***Cetralized Server for Surveillance:*** The centrlized Surveillance server is used to recieve the alert notifications, along with daily basis transportation data analysis
>

## Getting Started
### Cloning into local mahine
To clone this repository into the local machine, you need to follow the following steps
use git to clone the repo
```bash
git clone "https://github.com/Millenium-Falcons/CarbonTrace.git"
```
navigate into the clone directory `CarbonTrace`
```bash
cd CarbonTrace
```
And you can use and inspect the individual piece of codes inside that directory
### Frontend
***<a href="https://github.com/avirup-ghosal"> Avirup Ghosal</a> is responsible for the creation and maintanace of the whole frontend. The website is written using a javascript framework React.js. Deployed link: https://coal-trace.vercel.app***

For getting started with the frontend, please read the following instructions:
Deployed address:
```
cd CarbonTrace
cd frontend
npm run dev
```
### Backend
***<a href="https://github.com/hritesh-saha"> Hritesh Saha</a> is responsible for the creation and maintanace of the whole backend for this project. It is written in a node.js framework called Express.js, and it serves as an medium for the frontend, the hardware and the machine learning to communicate.***

For setting up the backend, please read the following instructions
```bash
cd CarbonTrace
cd Server
node index
```

### Machine Learning
***<a href="https://github.com/mintRaven-05"> Debjeet Banerjee</a> is responsible for the creation and maintanace of the Machine Learning models. It is written in python is using OpenCV and Scikit-Learn Logistic Regression. It is responsible for processing real-time video for anomaly detection and alerts the user whenever an anomaly is detected. For setting up the GenAI, please read the following instructions:***

Navigate in the cloned repository and go inside the `machine_learning` directory
```
cd CarbonTrace
cd machine_learning
```
Install the required modules using the following command
for Windows
```bash
pip install -r requirements.txt
```
for Linux
```bash
pip3 install -r requirements.txt --break-system-packages
```
execute the the python code for anomaly detection using OpenCV using the following commands
```bash
python opencv_face_detection.py
```
Install the required modules and dependencies using this command
```
pip install -r requirements.txt
```

## Contributors
<table>
<tr><th> Builders </th><th> Tech Stack </th></tr>
<tr><td>

| Member | Role | Branch |
|--|--|--|
|<p align=center>Debjeet Banerjee</p>|<p align=center>ML & Hardware</p>|<a href="https://github.com/Millenium-Falcons/CarbonTrace/tree/ML">ML</a>|
|<p align=center>Hritesh Saha</p>|<p align=center>Backend</p>|<a href="https://github.com/Millenium-Falcons/CarbonTrace/tree/backend">Backend</a>|
|<p align=center>Sayantana Halder</p>|<p align=center>Hardware</p>|<a href="https://github.com/Millenium-Falcons/CarbonTrace/tree/esp">ESP</a>|
|<p align=center>Avirup Ghosal</p>|<p align=center>Frontend</p>|<a href="https://github.com/Millenium-Falcons/CarbonTrace/tree/frontend">Frontend</a>|

</td><td>

|Role|Tech used|
|--|--|
|ML/DL|![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white) ![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)|
|Backend|![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)|
|Frontend|![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)<br>![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)|
|Hardware|![Espressif](https://img.shields.io/badge/espressif-E7352C.svg?style=for-the-badge&logo=espressif&logoColor=white)|
|Deployment|![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)|


</td></tr> </table>

<p align="center">Copyright &copy; 2024 <a href="https://github.com/mintRaven-org" target="_blank">Millenium-Falcons</a>
<p align="center"><a href="https://github.com/Millenium-Falcons/CarbonTrace/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=BSD-3-Clause&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
