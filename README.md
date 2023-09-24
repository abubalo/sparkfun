# Sparkfun - Your Personalized Video Messaging Platform

Sparkfun is a platform that enables users to connect with their favorite celebrities and influencers, allowing them to request personalized video messages for special occasions or just to connect on a personal level. With Sparkfun, you can bring joy to your loved ones or receive a message from your favorite stars that you'll cherish forever.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Registration and Profiles**: Users can create accounts and personalize their profiles.
- **Booking Celebrities**: Users can browse a list of celebrities and request personalized video messages.
- **Payment Processing**: Secure and convenient payment processing for bookings.
- **Video Delivery**: Celebrities can record and deliver video messages to users.
- **Notifications**: Users receive notifications for booking confirmations and video deliveries.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (at least version 18)
- [pnpm](https://www.pnpmjs.com/)
- [Database system](e.g., PostgreSQL, MySQL)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abubalo/sparkfun.git
   cd sparkfun
   ```
Install dependencies:

`pnpm install`

Configure the environment variables by creating a .env file and adding your configuration:

```PORT=3000
DATABASE_URL=your_database_url_here
SECRET_KEY=your_secret_key_here
```
Run database migrations:
`pnpm run migrate`


## License

[MIT](/LICENSE)