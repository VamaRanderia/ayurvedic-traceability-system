# 🌿 Ayurvedic Herb Traceability System

A secure **geo-tagged supply chain traceability platform** designed to track the origin, processing, and verification of Ayurvedic herbs from collection to final product.
The system ensures **data integrity, transparency, and consumer trust** using **cryptographic hashing, audit logs, and QR-based verification**.

This project demonstrates how centralized architectures can provide reliable traceability for herbal supply chains **without relying on blockchain**, making it practical for real-world regulatory and pharmaceutical adoption.

---

# 📌 Overview

Traditional herbal supply chains often lack transparency regarding:

* Herb origin
* Collection authenticity
* Processing stages
* Product verification

This project solves the problem by implementing a **digital traceability platform** that records every stage of the herb lifecycle.

Each herb batch receives a **unique traceability ID**, geo-location metadata, and an integrity hash.
Manufacturers update processing stages, and final products include a **QR code** that allows consumers to verify authenticity and origin.

---

# 🚀 Key Features

### 🌍 Geo-Tagged Herb Collection

* Captures **latitude and longitude** at the point of collection
* Records herb name, scientific name, and source type (wild or cultivated)

### 🔐 Data Integrity Protection

* Uses **SHA-256 hashing** to detect data tampering
* Hash values stored with each record

### 🧾 Append-Only Processing Logs

* Every manufacturing stage is stored as a **traceability log**
* Prevents overwriting historical records

### 👥 Role-Based Access Control

* **Collectors** → submit herb data
* **Manufacturers** → update processing stages
* **Admin** → system management

### 📦 QR-Based Product Verification

* Final products receive a **unique QR code**
* Consumers scan the QR to view the full supply chain history

### 📊 Manufacturer Dashboard

* View herb batches
* Update processing stages
* Generate verification QR codes

---

# 🏗 System Architecture

Collector Interface
↓
Backend API (Authentication & Validation)
↓
Central Database (Traceability Records)
↓
Manufacturer Dashboard
↓
QR Code Generation
↓
Consumer Verification Page

---

# 🛠 Tech Stack

### Frontend

* React.js
* Axios
* QRCode React Library

### Backend

* Node.js
* Express.js
* JWT Authentication
* SHA-256 Hashing

### Database

* PostgreSQL (Relational Database)

### Security

* Role-based authentication
* Data integrity verification
* Audit logging

---

# 📂 Project Structure

```
ayurveda-traceability
│
├── backend
│   ├── server.js
│   ├── db.js
│   ├── routes
│   │   ├── auth.js
│   │   ├── collect.js
│   │   ├── process.js
│   │   └── trace.js
│   ├── middleware
│   └── utils
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   │   ├── CollectorForm.js
│   │   │   ├── ManufacturerDashboard.js
│   │   │   └── VerifyPage.js
│   │   ├── services
│   │   └── App.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```
git clone https://github.com/yourusername/ayurvedic-herb-traceability-system.git
```

---

## 2. Install Backend Dependencies

```
cd backend
npm install
```

Start backend server:

```
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 3. Install Frontend Dependencies

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🔎 QR Verification Flow

1. Collector records herb data
2. System assigns unique batch ID
3. Manufacturer processes herb
4. QR code generated for product
5. Consumer scans QR
6. Verification page displays:

   * Herb origin
   * Collection location
   * Processing history
   * Authenticity status

---

# 📊 Database Schema

Main tables:

* **users** – system users and roles
* **herb_batches** – traceability records
* **processing_logs** – manufacturing stages
* **products** – final product records
* **audit_logs** – system change tracking

---

# 🎯 Project Significance

This system demonstrates how **digital traceability systems** can improve:

* Herbal medicine authenticity
* Supply chain transparency
* Consumer trust
* Regulatory compliance

The architecture can be extended for:

* Pharmaceutical traceability
* Organic food verification
* Agricultural supply chains

---

# 📚 Future Improvements

* Mobile collector application
* AI-based herb authenticity verification
* IoT sensors for environmental monitoring
* Cloud deployment with AWS
* Advanced analytics dashboard

---

# 👨‍💻 Author

Developed as a **computer engineering project focusing on secure supply chain traceability systems**.

---

# 📄 License

This project is developed for **educational and research purposes**.
