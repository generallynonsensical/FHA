# Formal Hazard Assessment Web App

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
   - [User Input Section](#user-input-section)
   - [Output Tables](#output-tables)
4. [Global Logic](#global-logic)
5. [How to Run This Project](#how-to-run-this-project)
6. [License](#license)
7. [Author](#author)

## Overview

The Formal Hazard Assessment Web App is a SPA (Single Page App) that provides a comprehensive interface for conducting hazard assessments in various workplace environments. It allows users to input information related to the task, hazards associated with the task, and the control measures. Each section of input is organized into collapsible accordion buttons to maintain a clean UI. The application also includes an output table section that dynamically populates with the data entered, offering a real-time view of the assessment. The data is stored in a SQLite3 database under the user's login credentials, allowing for secure storage and retrieval.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) for server-rendered React applications.
- **Backend**: [Node.js](https://nodejs.org/en/) for handling API requests and database interaction.
- **Database**: [SQLite3](https://www.sqlite.org/index.html) for local database management.
- **Styling**: [Tailwind.css](https://tailwindcss.com/) for utility-first CSS framework.

## Features

### User Input Section

#### General Information Accordion

- **Created By (Text Input)**: Records the name of the individual conducting the assessment.
- **Date (Date Input)**: Specifies the date on which the assessment is conducted.
- **Company Name (Text Input)**: Captures the name of the company for which the assessment is carried out.
- **Position Being Evaluated (Text Input)**: Notes the job role or position that the assessment targets.
- **Submit Information Button**: Submits the entered general information to the SQLite3 database.

#### Task Information Accordion

- **Task Name (Text Input)**: Records the specific task that is being evaluated for potential hazards.
- **Submit Task Button**: Initiates the task evaluation process, storing the task name in the database.

#### Hazard Information Accordion

- **Hazard Name (Text Input)**: Identifies the particular hazard associated with the task.
- **Hazard Type (Dropdown)**: Allows users to categorize the hazard as either "Health" or "Safety."
- **Likelihood of Occurrence (User Selectable 1-5)**: Estimates how likely the hazard is to occur.
- **Exposure to Hazard (User Selectable 1-5)**: Assesses the level of exposure to the hazard.
- **Consequence of Exposure to Hazard (User Selectable 1-5)**: Evaluates the potential outcomes of exposure to the hazard.
- **Submit Hazard Button**: Saves the hazard-related data to the SQLite3 database.

#### Control Information Accordion

- **Control Name (Text Input)**: Identifies the control measure implemented to mitigate the hazard.
- **Control Type (Dropdown)**: Categorizes the control measure (e.g., "Elimination," "Engineering").
- **Likelihood of Occurrence After Control (User Selectable 1-5)**: Estimates the likelihood of the hazard occurring post-control measures.
- **Exposure to Hazard After Control (User Selectable 1-5)**: Assesses the level of exposure to the hazard post-control measures.
- **Consequence of Exposure to Hazard After Control (User Selectable 1-5)**: Evaluates the potential outcomes of exposure to the hazard post-control measures.
- **Submit Control Button**: Submits control-related data to the SQLite3 database.

### Output Tables

#### General Table

Displays general information, including the company name, the individual who created the assessment, the date, and the position being evaluated.

#### Evaluation Table

Displays a comprehensive view of the tasks, associated hazards, and control measures, along with risk ratings before and after control measures.

## Global Logic

Detailed explanation of the accordion behavior, modal confirmations, and how the application handles required fields and data validation.

## How to Run This Project

1. Clone this repository: `git clone https://github.com/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your web browser and go to: `http://localhost:3000`

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Author

generallynonsensical (W.Roberts)
