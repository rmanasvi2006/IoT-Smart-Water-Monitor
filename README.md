# Smart Water Level Monitoring and Environmental Analytics System Using IoT

An IoT-based smart monitoring system developed using ESP32, HC-SR04 Ultrasonic Sensor, DHT11 Sensor, ThingSpeak Cloud, and a custom React Dashboard for real-time water-level and environmental monitoring.

---

## Project Overview

This project was developed to monitor water storage conditions in real time using low-cost IoT technology. The system continuously collects water-level, temperature, and humidity data and visualizes the collected information through cloud analytics and a live dashboard interface.

The deployed monitoring node was tested near a real water sump/storage system to observe refill activity, water-consumption patterns, and environmental conditions in real time.

---

## Features

- Real-time water-level monitoring
- Distance measurement using ultrasonic sensing
- Temperature and humidity monitoring
- ThingSpeak cloud integration
- Live React dashboard visualization
- Smart alerts for low-water conditions
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
2. ESP32 processes sensor readings and converts them into water-level percentage values.
3. DHT11 sensor collects temperature and humidity readings.
4. Sensor data is uploaded to ThingSpeak cloud using WiFi connectivity.
5. The React dashboard fetches and visualizes the collected data in real time.

---

## Dashboard Features

- Water-level percentage display
- Distance measurement display
- Temperature and humidity monitoring
- Smart alert system
- Real-time analytics graph
- Tank-level visualization
- Cloud-based monitoring

---

## Deployment

The monitoring node was deployed near a water sump/storage system for real-time testing and monitoring. The ESP32 and sensors were enclosed inside a protective box structure and powered using a portable power bank.

The deployment setup successfully demonstrated real-time monitoring, cloud analytics, and environmental sensing in a practical outdoor environment.

---

## Results

The system successfully monitored:
- Water-level conditions
- Temperature and humidity
- Refill activity
- Water-consumption patterns
- Real-time cloud analytics

The project demonstrated the effectiveness of low-cost IoT systems for smart infrastructure monitoring applications.

---

## Future Improvements

- Automatic motor control
- Predictive analytics for water management
- Long-term monitoring analytics

---

## Project Screenshots

_Add deployment images, ThingSpeak screenshots, and dashboard screenshots here._

---

## Video Demonstration

Add your demo video link here.

---

## Live Dashboard

Add your deployed Vercel dashboard link here.

---

## License

This project was developed for academic and learning purposes.
