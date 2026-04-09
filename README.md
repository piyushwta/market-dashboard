# 📊 Instrument Dashboard

A modern, responsive **SaaS-style financial dashboard** built using React and TypeScript.
It allows users to explore instruments with real-time updates, filtering, and watchlist management.

---

## 🚀 Features

- 📈 Real-time price updates _(simulated via WebSocket logic)_
- 🔍 Debounced search for better performance
- 🎯 Advanced filtering (sector, market status, sorting)
- ⭐ Add/remove instruments from watchlist
- 📱 Fully responsive (mobile-first design)
- 📊 Instrument details with sparkline visualization
- 🧾 Expandable raw data explorer (JSON viewer)

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **Architecture:** Custom Hooks-based modular structure

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/piyushwta/market-dashboard.git
```

### 2. Navigate to Project

```bash
cd market-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

### 🌐 App URL

```
http://localhost:5173
```

---

## 🏗️ Project Structure

```
components/
  layout/         → Header, Dashboard
  instruments/    → List, Row, Filters
  details/        → Details, Sparkline, Raw Explorer
  watchlist/      → Watchlist UI

context/
  AppContext      → Global state management

hooks/
  useInstruments  → Filtering & sorting logic
  useRealtime     → Simulated live updates
  useDebounce     → Optimized search handling

data/
  instruments.ts  → Mock dataset

types/
  instrument.types.ts

utils/
  helpers.ts
```

---

## 🔁 Data Flow

1. `useRealtime` simulates live price updates
2. Data is stored in **AppContext (global state)**
3. `useInstruments` applies:
   - search
   - filters
   - sorting

4. Processed data is rendered in UI components

---

## ⚙️ Assumptions

- Real-time updates are simulated (no backend integration)
- Dataset is small (no virtualization required)
- Filtering is handled client-side
- No authentication or user system
- Watchlist is stored in-memory (non-persistent)

---

## 🚧 Future Improvements

### 🔥 Performance

- Virtualized lists for large datasets
- Memoization optimizations
- Server-side filtering

### 📊 Features

- Real API integration
- Advanced charting (historical data)
- Financial indicators & analytics

### 💾 Persistence

- Save watchlist in localStorage / backend
- Store user preferences

### 🎨 UX Enhancements

- Dark mode
- Price change animations
- Drag & reorder watchlist
- Keyboard navigation

### 📱 Mobile Experience

- Bottom navigation (like trading apps)
- Gesture-based interactions

---

## 🧠 Key Highlights

- Clean and scalable architecture using custom hooks
- Mobile-first responsive design
- Optimized search using debouncing
- Separation of concerns across modules

---

## 📌 Summary

This project demonstrates how to build a **scalable, responsive, and performance-focused dashboard** using modern frontend practices, with emphasis on clean architecture and user experience.
