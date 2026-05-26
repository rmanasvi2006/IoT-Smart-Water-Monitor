# Smart Water Level Monitoring and Environmental Analytics System Using IoT

An IoT-based smart monitoring system developed using ESP32, HC-SR04 Ultrasonic Sensor, DHT11 Sensor, ThingSpeak Cloud, and a custom React Dashboard for real time water level and environmental monitoring.

---

## Project Overview

This project was developed to monitor water storage conditions in real time using low cost IoT technology. The system continuously collects water level, temperature, and humidity data and visualizes the collected information through cloud analytics and a live dashboard interface.

The deployed monitoring node was tested near a real water sump/storage system to observe refill activity, water consumption patterns, and environmental conditions in real time.

---

## Features

- Real time water level monitoring
- Distance measurement using ultrasonic sensing
- Temperature and humidity monitoring
- ThingSpeak cloud integration
- Live React dashboard visualization
- Smart alerts for low water conditions
- Tank visualization interface
- Graphical trend analytics
- Remote monitoring capability

---

## Technologies Used

- ESP32 Development Board
- HC-SR04 Ultrasonic Sensor
- DHT11 Sensor
- ThingSpeak Cloud Platform
- React.js
- JavaScript
- HTML/CSS

---

## System Workflow

1. HC-SR04 sensor measures the distance between the sensor and water surface.
2. ESP32 processes sensor readings and converts them into water level percentage values.
3. DHT11 sensor collects temperature and humidity readings.
4. Sensor data is uploaded to ThingSpeak cloud using WiFi connectivity.
5. The React dashboard fetches and visualizes the collected data in real time.

---

## Dashboard Features

- Water level percentage display
- Distance measurement display
- Temperature and humidity monitoring
- Smart alert system
- Real time analytics graph
- Tank level visualization
- Cloud based monitoring

---

## Deployment

The monitoring node was deployed near a water sump/storage system for real time testing and monitoring. The ESP32 and sensors were enclosed inside a protective box structure and powered using a portable power bank.

The deployment setup successfully demonstrated real time monitoring, cloud analytics, and environmental sensing in a practical outdoor environment.

<img width="960" height="1280" alt="WhatsApp Image 2026-05-25 at 5 11 16 PM" src="https://github.com/user-attachments/assets/25c7c459-d0b3-45ba-bed5-e2fb58b05414" />

<img width="1280" height="960" alt="image" src="https://github.com/user-attachments/assets/293e2cba-d732-4e23-bef1-7736ed1d8a60" />


---

## Results

The system successfully monitored:
- Water level conditions
- Temperature and humidity
- Refill activity
- Water consumption patterns
- Real time cloud analytics

The project demonstrated the effectiveness of low cost IoT systems for smart infrastructure monitoring applications.

---

## Future Improvements

- Automatic motor control
- Predictive analytics for water management
- Long term monitoring analytics

---

## Project Screenshots
<img width="1920" height="1080" alt="Screenshot (304)" src="https://github.com/user-attachments/assets/825e5a85-a0c6-412a-954b-8fa4d92023c8" />

<img width="1920" height="1080" alt="Screenshot (291)" src="https://github.com/user-attachments/assets/32ca9b3f-6ec9-4a73-b876-f7412b5d6803" />

<img width="1920" height="1080" alt="Screenshot (271)" src="https://github.com/user-attachments/assets/4c0891a0-6988-401a-8aa4-f08f723192e5" />

<img width="1920" height="1080" alt="Screenshot (302)" src="https://github.com/user-attachments/assets/10f43083-e915-4b09-8b2f-d4b176877795" />


<img width="1920" height="1080" alt="Screenshot (303)" src="https://github.com/user-attachments/assets/328e7d70-04c8-4337-afa8-79b062d23f19" />

<img width="1920" height="1080" alt="Screenshot (287)" src="https://github.com/user-attachments/assets/c265e717-3ec0-465e-8796-bc1a879b7fe9" />

<img width="1920" height="1080" alt="Screenshot (289)" src="https://github.com/user-attachments/assets/388dc01f-8373-4eab-ae64-a825c82b40aa" />

<img width="1920" height="1080" alt="Screenshot (285)" src="https://github.com/user-attachments/assets/0b199312-4421-4ad6-9ba7-e99dc89ccb0f" />

<img width="1920" height="1080" alt="Screenshot (300)" src="https://github.com/user-attachments/assets/d4a9ecc6-29ef-4f3c-b076-6bffd5c597b1" />

<img width="1920" height="1080" alt="Screenshot (293)" src="https://github.com/user-attachments/assets/ef0989e2-341a-4454-a574-97d54ff89976" />


---
## Demo Video
https://drive.google.com/file/d/1rXn5gqXP-81satueHFpCGgwLyKPSxJMN/view?usp=sharing

---

## Live Dashboard

https://iot-smart-water-monitor.vercel.app/

---

## License

This project was developed for academic and learning purposes.
