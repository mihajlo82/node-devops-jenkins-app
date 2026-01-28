# Node DevOps Jenkins App

A simple Node.js application with automated CI/CD using **Jenkins**, **Docker**, and **GitHub**. This project demonstrates best practices for building, testing, and deploying containerized Node.js applications with a fully automated pipeline.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Technologies Used](#technologies-used)  
- [Project Structure](#project-structure)  
- [Setup & Installation](#setup--installation)  
- [Running Locally](#running-locally)  
- [CI/CD Pipeline](#cicd-pipeline)  
- [Testing](#testing)  
- [Docker Deployment](#docker-deployment)  
- [License](#license)  

---

## Project Overview

This project is a sample **Node.js application** designed to demonstrate a **full DevOps pipeline**:

1. Code hosted on **GitHub**
2. Automated **checkout and build** via **Jenkins**
3. Dependency installation and **unit testing** with **Jest**
4. **Docker image creation** and **container deployment**
5. Continuous integration triggered by **GitHub pushes**

The goal is to show how developers can integrate **CI/CD**, containerization, and automation into a Node.js project.

---

## Technologies Used

- **Node.js (v20)** – Runtime for the application  
- **npm** – Dependency management and scripts  
- **Jest** – Unit testing framework  
- **Docker** – Containerization of the Node.js application  
- **Jenkins (2.x)** – CI/CD automation server  
- **GitHub** – Source code repository and webhook integration  
- **Alpine Linux** – Base Docker image for lightweight containers  

---

