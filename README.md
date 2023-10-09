# Appointment Planner

This project is a functional React application for managing contacts and appointments. It was developed as a challenge project, and the main goal was to work with stateful and stateless functional React components using hooks.

## Project Overview

The application consists of two main pages:
- **Contacts Page**: Allows users to view and add new contacts.
- **Appointments Page**: Enables users to view and schedule new appointments.

![Component Diagram](link-to-your-component-diagram-if-you-have-one)

## [Live Demo](https://appointment-planner-tylerte.netlify.app/contacts)

Experience the application in action by visiting the live demo.

## Setup

To set up the project locally:

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository: `git clone https://github.com/TyTe108/Appointment-Planner.git`
3. Navigate to the project directory: `cd Appointment-Planner`
4. Install the required dependencies: `npm install`
5. Start the application: `npm start`
6. Open your browser and visit [http://localhost:3000/](http://localhost:3000/)

## Features

### Contacts Page

- View a list of existing contacts.
- Add new contacts with fields for name, phone, and email.
- Check for duplicate names and prevent adding contacts with duplicate names.

### Appointments Page

- View a list of scheduled appointments.
- Schedule new appointments with fields for name, contact, date, and time.
- Select a contact from the existing contacts list when scheduling an appointment.

## Project Structure

The main components of the project are:

- `App.js`: Handles routing between the Contacts and Appointments pages and maintains the state for contacts and appointments.
- `ContactsPage.js`: Manages the logic for adding and listing contacts.
- `AppointmentsPage.js`: Manages the logic for scheduling and listing appointments.
- `ContactForm.js`: Stateless component for the contact form.
- `AppointmentForm.js`: Stateless component for the appointment form.
- `TileList.js`: Renders a list of Tile components.
- `Tile.js`: Displays data from an object.
- `ContactPicker.js`: Renders a dropdown list of all contact names.

## Prerequisites

To fully understand and work with this project, you should be familiar with:

- JSX
- React Components
- Components Interacting
- Hooks
- React Programming Patterns
- React Styles
- React Forms

## Author

Tyler Te

## Contribution

Feel free to fork this repository, make changes, and submit pull requests. Any contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).

