# Project Setup Guide

This README file provides detailed instructions to set up and run the **Chatbot** and **Web Application** projects. Follow the steps below to ensure proper configuration.

---

## Chatbot Setup

### 1. Navigate to the Chatbot Folder
``
cd chatbot
``


### 2. Create a Virtual Environment
You can use either Conda or `venv` to create a virtual environment for the project.

### 3. Activate the Created Environment
Activate the virtual environment:

For Conda
```
conda activate <env_name>
```

For venv (Linux/macOS)
```
source <env_name>/bin/activate
```

For venv (Windows)
```
<env_name>\Scripts\activa
```


### 4. Install Required Dependencies
Install all necessary dependencies listed in the `requirements.txt` file:

```
pip install -r requirements.txt
```

### 5. Run the Application
Start the chatbot application using:
```
python app.py
```
Chatbot will run on ``localhost:8000``



---

## Web Application Setup

### 1. Install Dependencies
Use `pnpm` to install all required dependencies:

```
pnpm install
```

### 2. Create Environment Files
- **Create `env.local` File**: Add environment variables specific to your local development environment.
- **Create `.env` File**: Add general environment variables required for the application.
- Follow ``env.local.example`` and ``env.example`` file format.


### 3. Start Development Server
Run the development server using:

```
pnpm run dev
```

---

## Notes

- Ensure that you have Python, Conda, Node.js, and `pnpm` installed on your system.
- Verify that all environment variables are correctly added to the respective files (`env.local` and `.env`) before running the applications.
- For production deployment, additional configuration may be required.

---
All Rights Reserved.

