## Installation

This project is based on NextJS 13, and requires node 16.13.0 or higher.

**Installation**

```
npm install
```

**Running the application**

```
npm run dev
```

## Your assignment

We are going to display a list of trending companies on our start page, your assigment is to create a list of companies that we can display on our start page. The design is not complete, but should give you a good idea on what direction to take. The code provided is functional, but it's difficult to read and understand. It needs significant refactoring to improve its structure and maintainability.

You can find a link to the Figma [here](https://www.figma.com/file/PWNtHgOgjeYYGmQIYpLkm4/Quartr?node-id=0%3A1&t=49UGjItn5gFyMAku-0).

## Instructions

You can make any modifications or suggestions for modifications that you see fit. Fork this repository and deliver your results via a pull-request or send us an e-mail. You could also create a gist, for privacy reasons, and send us the link.

During a technical interview, we will discuss this task and have a closer look at the code together with you. You should be able to explain your considerations of the code implementation.

## Completion time

The time you spend on this test is not limited. The idea is to take your time, respect the assignment, and send us the result when you are happy with it. But please let us know if there are circumstances delaying your submission of the code.

## What we expect

- A clean and well-structured readable code, where it is easy to understand what is going on
- Organizing the code in a way where every function or component is responsible for only one thing
- Usage of Typescript, and good practices using interfaces where needed

## Appreciated with the implementation

⚠️ Those are not required, but can give you some advice how to make your task look even better.

- Unit and functional tests: a 100% coverage is not necessary, just make them pertinent
- Good accessibility practices
- Usage of the state co-location pattern

Technical constraints

- Use React 17+ and TypeScript

---------------- updated on 2025/12/05 ----------------

# Quartr – Coding Assignment (Eric Johansson)

This project is my solution to the Quartr coding assignment.
The goal was to refactor the existing codebase, implement a clean end-to-end companies list, and deliver a maintainable, accessible, and production-ready UI that follows modern standards.

TL;DR: I refactored the entire codebase into a clean, scalable Next.js 13 architecture, normalized the backend data, added tests, improved UI/UX, added accessibility, responsiveness, and CI/CD, and delivered a polished experience that's easy to extend.

I prioritized correctness, readability, predictability, and long-term maintainability over shipping fast.

## Overview

The original project contained functional but unstructured code. My focus was to:

Fully refactor the codebase into a clear, maintainable architecture
Use modern Next.js 13+ patterns (Server Components, co-located data fetching)
Normalize backend data into a predictable domain model
Build a polished UI based on the provided Figma design
Add tests, tooling, responsiveness, and accessibility
Add several small UX enhancements that make the product feel more complete

This README explains my technical decisions, what I implemented, and what I would add with more time.

## Features Implemented

**Core Refactor**

Removed unstructured code and rewrote the project using a layered, coherent structure

Introduced a clear separation of concerns:

/app: routing + server components
/components: UI components
/services: backend data fetching + transformation
/lib: helpers and utilities
/types: domain models
/data: mock data

**Modern Next.js patterns**

Server Components for data fetching that reduce client bundle size
Avoided unnecessary "fetch localhost" API calls
Directly invoked backend services for better performance and simplicity
Graceful loading states using Suspense + skeleton loader

Calling /api/companies from a server component introduces unnecessary complexity. It adds an extra network round trip, it's harder to test, and it broke the ci chain since localhost wasn't running in GitHub actions. Instead, the frontend calls the service layer directly, which is faster, cleaner and more maintainable.

**UI & UX Enhancements**

Fully redesigned company cards:
Improved spacing, hierarchy, typography
Better readability
Fallback image logic
Event list toggle button
Hover states & interaction indicators
Responsive layout for desktop and mobile
Cleaner visual identity:
Use of soft shadows
No pure black or pure white
Subtle gradients for background polish
More “airy” layout than the raw Figma file

**Loading State**

Real skeleton loader system
Matches layout dimensions and uses accessible opacity animations

**Data Processing**

Data normalization:

Picks best image fallback (iconUrl || logoDark || logoLight)
Maps inconsistent API fields into a predictable shape
Ensures the frontend always receives stable, typed data

The provided data model was inconsistent. Normalizing early:

Creates a predictable domain model
Avoids “if/else” logic scattered through the UI
Makes testing straightforward
Makes future API changes less painful
Reduces the amount of re-renders

**Testing**

Backend / Services

normalizeCompany
Ensures correct field mapping
Verifies image fallback logic
Confirms normalized domain model shape

companyService
Loads mock data
Applies normalization correctly
Ensures stable, predictable output

api (lib/api)
Basic API abstraction checks
Validates returned structure

Frontend / Components

CompanyList
Renders correct number of items
Handles empty state gracefully

CompanyCard
Renders company info (name, ticker, logo, description)
Tests show/hide events toggle

CompanyCardEvents
Renders event list correctly
Handles no events scenario

**Page-Level**

Home page (page.test.tsx)
Smoke test that ensures page renders and mounts the list

## Tooling

GitHub Actions CI:
Runs tests
Lints
Builds

Next lint + Prettier
TypeScript strict improvements
Module aliasing (@components, @lib, etc.)

## General Improvements

Accessibility fixes:
Semantic HTML
ARIA attributes
Outline links
Consistent code style across the repo
Enhanced readability by splitting large components

## Project Structure

```
.

├── README.md

├── app

│   ├── error.tsx

│   ├── globals.css

│   ├── head.tsx

│   ├── layout.tsx

│   ├── page.test.tsx

│   └── page.tsx

├── components

│   ├── CompanyCard

│   │   ├── CompanyCard.module.scss

│   │   ├── CompanyCard.test.tsx

│   │   └── CompanyCard.tsx

│   ├── CompanyCardEvent

│   │   ├── CompanyCardEvent.module.scss

│   │   └── CompanyCardEvent.tsx

│   ├── CompanyCardEvents

│   │   ├── CompanyCardEvents.module.scss

│   │   ├── CompanyCardEvents.test.tsx

│   │   └── CompanyCardEvents.tsx

│   ├── CompanyCardLogo

│   │   ├── CompanyCardLogo.module.scss

│   │   └── CompanyCardLogo.tsx

│   ├── CompanyCardSkeleton

│   │   ├── CompanyCardSkeleton.module.scss

│   │   └── CompanyCardSkeleton.tsx

│   ├── CompanyList

│   │   ├── CompanyList.test.mock.ts

│   │   ├── CompanyList.test.tsx

│   │   └── CompanyList.tsx

│   └── LoadingSkeleton

│       └── LoadingSkeleton.tsx

├── data

│   └── companies.mock.ts

├── jest.config.ts

├── jest.setup.ts

├── lib

│   ├── api.test.ts

│   ├── api.ts

│   └── env.ts

├── next-env.d.ts

├── next.config.js

├── package-lock.json

├── package.json

├── pages

│   └── api

│       └── v1

│           └── companies.ts

├── public

│   ├── chevron-right.svg

│   └── favicon.ico

├── services

│   ├── companyService.test.ts

│   ├── companyService.ts

│   ├── normalizeCompany.test.ts

│   └── normalizeCompany.ts

├── tsconfig.jest.json

├── tsconfig.json

├── tsconfig.tsbuildinfo

└── types

    ├── Company.ts

    ├── EventReport.ts

    └── RawCompany.ts


```

I separated the original codebase into several directories to make it more maintainable and scalable.

## Architectural Decisions & Rationale

1. Server Components for Data Fetching

Next.js 13 encourages server-side data fetching for improved performance:

Zero client bundle cost

No waterfall fetching

Cleaner code

Simpler testing

2. UI Decisions

Where the Figma left open visual details, I expanded the design with these points in mind;

Readability: darker text, larger font size, higher line height

Contrast: borders, clear separation of content/components

Spacing: breathable page, airier design

Card content density: same height initially, uniform list

Interaction clarity: real buttons and clear purpose

## Testing Strategy

Backend (Node environment) example test getCompanies assert that:

Data is mapped correctly
Fallback image selection works
Unnecessary fields are stripped out
Output matches the domain model

Frontend (jsdom environment) CompanyList test, for example, ensures that;

Components render correct number of companies
Empty states behave correctly
Basic UI expectations are met

These tests demonstrate both logic testing and UI testing.

## Tooling & CI

**CI Pipeline (GitHub Actions)**

Runs automatically on push:

Install dependencies
Run next lint
Run Prettier
Run Jest tests
Builds the project

**Linting & Formatting**

Next lint (Next.js + TypeScript rules)
Prettier (auto-formatting)

**TypeScript**

Strict mode
Strong typing of domain data
Eliminated usage of `any` where possible
Used interfaces instead of stating types directly in function declaration for clarity

## Responsiveness & Accessibility

**Responsiveness**

The layout adapts across mobile and desktop.

**Accessibility**

I incorporated:

ARIA attributes
Semantically correct HTML elements
Good color contrast ratios

## Potential Improvements (If Given More Time)

These are intentionally out of scope for the test but would be natural next steps:

1. Caching

Even simple caching would improve performance.

2. Dark Mode

Using CSS variables and state to handle toggling on/off.

3. Filtering / sorting

Filter and sort on company data values

4. Form/Data Validation (Zod)

Useful if the API expands, helps to prevent malformed data issues

5. Pagination or Infinite Scrolling

6. Animations

Subtle transitions for card expansion & load states, button interaction response

## How to Run

npm install
npm run dev

## Final Notes

My focus in this assignment was to:
Follow Next.js 13 best practices
Produce clean, maintainable, testable code
Improve UX, accessibility, readability, and visual polish
Present a codebase that would be easy to expand in a real production environment

Thanks for reviewing my implementation. I look forward to discussing it!

Eric Johansson
