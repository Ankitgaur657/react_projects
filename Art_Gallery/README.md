# Art Institute Gallery - React Assignment

A high-performance Art Gallery application built with **React**, **TypeScript**, and **Vite**. This project displays artwork data from the Art Institute of Chicago API using server-side pagination and persistent state management.

# Live Demo
[https://apir.netlify.app/]

# Tech Stack
1. Framework: React 18 (Vite)
2. Language: TypeScript (Strict Mode)
3. UI Components: PrimeReact (DataTable, OverlayPanel, InputNumber)
4.Styling: PrimeFlex & Custom CSS

# Key Features
1. Server-Side Pagination: Fetches exactly 12 records per page to ensure fast load times and minimal memory usage.
2. Persistent Selection: Uses `dataKey="id"` and state lifting to maintain selected rows even when navigating between different pages.
3. Intent-Based Custom Selection: Allows users to specify a total number of rows to select through a custom overlay panel.
4. Aggregate Row Counter: A dynamic counter in the top-left corner that tracks total selections across the entire dataset.
5. Splash Screen: A clean "Welcome to Art Gallery" entry screen for a professional user experience.
6. Responsive UI: A centered, dark-themed gallery designed to prevent horizontal scrolling on all screen sizes.

# Technical Implementation: Memory Safety (No Pre-fetching)
To comply with the strict memory-safety requirements of the assignment, this project **does not pre-fetch data**. 

# The Strategy:
If a user requests a selection of 20 rows while only 12 are loaded:
1. The app immediately selects the **12 available rows** on the current page.
2. It stores the **Intent (Target Count)** in a state variable without making additional API calls.
3. As the user **manually navigates** to subsequent pages, a `useEffect` hook detects the pending selection intent and automatically checks the remaining rows as they arrive from the API.

**Why this matters:** This prevents "Out of Memory" issues and "Multiple API Call" loops that occur when trying to fetch thousands of records at once, which is a common cause for rejection in this assignment.

