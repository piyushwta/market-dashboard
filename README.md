Instrument Dashboard (React + TypeScript)

A modern, responsive SaaS-style dashboard for exploring financial instruments with real-time updates, filtering, and watchlist functionality.

🚀 Features
📈 Real-time price updates (simulated WebSocket)
🔍 Search with debouncing
🎯 Advanced filters (sector, market status, sorting)
⭐ Watchlist management
📱 Fully responsive (mobile + desktop)
📊 Instrument details with sparkline chart
🧾 Raw data explorer (expandable JSON view)
🛠️ Tech Stack
React + TypeScript
Tailwind CSS
Custom Hooks
Context API (state management)
▶️ How to Run the Project

# 1. Clone the repository

git clone git@github.com:piyushwta/market-dashboard.git

# 2. Navigate to project

cd instrument-dashboard

# 3. Install dependencies

npm install

# 4. Start development server

npm run dev

App will run on:

http://localhost:5173
🏗️ Architecture Overview
components/
layout/ → Layout (Header, Dashboard)
instruments/ → List, Row, Filters
details/ → Instrument details, charts, raw explorer
watchlist/ → Watchlist UI

context/
AppContext → Global state (instruments, watchlist)

hooks/
useInstruments → Filtering, sorting logic
useRealtime → Simulated live updates
useDebounce → Optimized search input

data/
instruments.ts → Mock dataset

types/
instrument.types.ts → Type definitions

utils/
helpers.ts → Utility functions
🔁 Data Flow
useRealtime updates instrument prices
Global state stored in AppContext
useInstruments applies:
search
filters
sorting
UI components consume processed data
⚙️ Assumptions Made
Real-time data is simulated (no backend/WebSocket server)
Dataset is relatively small (no virtualization implemented)
Filters are client-side only
Authentication/user management is not included
Watchlist is stored in-memory (not persisted)
🚧 Improvements (With More Time)
🔥 Performance
Virtualized list (for large datasets)
Memoization optimizations
Server-side filtering
📊 Features
Real API integration
Historical charts with charting library
Advanced analytics (volume trends, indicators)
💾 Persistence
Save watchlist to localStorage or backend
User preferences storage
🎨 UX Enhancements
Dark mode
Animations (price change flash)
Drag & reorder watchlist
Keyboard navigation
📱 Mobile
Bottom navigation (like trading apps)
Gesture-based interactions
🧠 Key Highlights
Clean separation of concerns using hooks
Scalable architecture for real-time apps
Mobile-first responsive design
Performance optimization using debouncing
📌 Conclusion

This project demonstrates building a scalable, responsive financial dashboard with modern frontend practices, focusing on performance, usability, and clean architecture.
