# Mellow Agent

**Describe a business in plain words and get a ready-to-test AI customer-service agent.**

A business owner types what the business does and what the agent should handle. Mellow Agent writes the agent (name, tone, instructions, knowledge, rules, abilities), lets the owner edit and test it in a live chat, and then shares it as a chat link, a QR code, a website chat bubble or a downloadable chat page.

![Agent builder](docs/screenshots/1-agent-builder.jpg)

| Customer chat page | Dashboard |
| --- | --- |
| ![Customer chat](docs/screenshots/2-customer-chat.jpg) | ![Dashboard](docs/screenshots/3-dashboard.jpg) |

More screens: [leads page](docs/screenshots/4-leads.jpg), [admin page](docs/screenshots/5-admin.jpg), [SMS activation](docs/screenshots/6-sms-activation.jpg). All screenshots use demo data.

## Features

- **Agent generator**: turns a short business description into a full agent, streamed with a live progress bar.
- **Builder and test chat**: edit every part of the agent, chat with it as a customer and see the exact instructions it runs on.
- **Sharing**: chat link, QR code, website chat bubble (`widget.js`) and a downloadable standalone chat page.
- **Leads and conversations**: customer chats are saved, phone numbers and emails are picked out, with a leads page, CSV export and a 14-day dashboard chart.
- **Quick questions**: tap-to-ask buttons in the customer chat.
- **Accounts**: email and password, Google sign-in and SMS activation codes (Twilio Verify).
- **Open to visitors**: a few free tries without an account, then a login prompt.
- **Plans**: a free trial, then plans with a PayFast checkout. A test mode lets you try the whole flow without real money.
- **Admin page** for the owner: users, paying clients, monthly income and manual plan grants (for EFT payments).
- Light and dark themes, a responsive layout and a logo drawn and animated in plain code (SVG + JavaScript).

## Tech

Node.js 20+, Express, vanilla HTML/CSS/JavaScript (no front-end framework), the Groq API for the language models, Google Identity Services, Twilio Verify and PayFast. Data is stored in JSON files under `data/`.

## Run it on your computer

You need Node.js 20 or newer and a free Groq API key from https://console.groq.com/keys.

```bash
git clone https://github.com/Gmello904/Gmello904.github.io.git
cd Gmello904.github.io/mellow-agent
npm install
cp .env.example .env      # on Windows: copy .env.example .env
# open .env and put your key after GROQ_API_KEY=
npm start
```

Open http://localhost:3000. The builder opens straight away. Log in to save and share agents.

**Test modes (the defaults):** with `SMS_MODE=test` the activation code is printed in the terminal instead of being sent as an SMS, and with `PAYMENTS_MODE=test` a plan activates instantly with no payment. Nothing costs money until you switch them on.

### Settings (`.env`)

| Variable | What it does |
| --- | --- |
| `GROQ_API_KEY` | Your Groq key (required for the AI) |
| `MODEL`, `FALLBACK_MODEL` | Main and backup language model |
| `GUEST_LIMIT` | Free tries for visitors before login is requested (default 5) |
| `TRIAL_MINUTES` | Free minutes for logged-in users before plans are offered |
| `PAYMENTS_MODE` | `test` or `payfast` (then set the `PAYFAST_*` values) |
| `SMS_MODE` | `test` or `twilio` (then set the `TWILIO_*` values) |
| `REQUIRE_PHONE_VERIFY` | Set `false` to turn SMS activation off |
| `GOOGLE_CLIENT_ID` | Shows the "Continue with Google" button when set |
| `ADMIN_EMAIL` | The login email that unlocks the Admin page |
| `APP_URL` | The public address of the app (needed for PayFast and the downloadable chat page) |

## How it is organised

```
server.js          Express server: accounts, billing, agents, AI chat, leads, admin
public/index.html  The app (builder, dashboard, leads, admin, login pop-up)
public/chat.html   The customer chat page (also the downloadable chat page)
public/widget.js   The website chat bubble
public/icons.js    Icons, the logo drawn in code, and its intro animation
```

## Security notes

- Passwords are hashed with scrypt. Sessions use HttpOnly cookies.
- Rate limits on sign-up and login, on public chats and on SMS codes (per number, per account and per internet address), so strangers cannot run up the AI or SMS bill.
- Each user can only read and change their own agents. The Admin routes check the admin email on the server.
- The leads CSV neutralises cells that start like spreadsheet formulas.
- The AI key stays on the server. The downloadable chat page talks to the server and never contains the key.

## Limitations and next steps

- Built and tested on a local machine. SMS, payments and Google sign-in run in test mode until real keys are added and the app is deployed.
- JSON file storage is fine for a demo. A database would be the next step.
- No automated tests yet, and no email password reset.

## About this project

Built by **Given Mello** (https://gmello904.github.io). Development note: I built it with AI coding assistance (Claude), specified the product, and tested the sign-up, activation, payment and sharing flows in a real browser.

Shared for portfolio review. Contact me if you would like to use it.
