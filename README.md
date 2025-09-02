# ChatPad - AI-Powered Chat Application

A modern, responsive chat application built with React (Vite), Tailwind CSS, Shadcn UI, Express.js, and OpenAI API integration.

## Features

- **Modern UI**: Beautiful, responsive interface using Tailwind CSS and Shadcn UI components
- **Real-time Chat**: Instant messaging with AI-powered responses
- **OpenAI Integration**: Powered by OpenAI's GPT-3.5-turbo model
- **Dark/Light Theme**: Built-in theme support via Shadcn UI
- **Error Handling**: Comprehensive error handling and loading states
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

### Frontend

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality, accessible component library
- **Lucide React** - Beautiful, customizable icons

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **OpenAI API** - AI-powered chat responses
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd test_chat_pad
   ```

2. **Install all dependencies**

   ```bash
   npm run install-all
   ```

   This will install dependencies for both frontend and backend.

3. **Set up environment variables**

   Copy the example environment file in the backend directory:

   ```bash
   cp backend/env.example backend/.env
   ```

   Edit `backend/.env` and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   ```

4. **Get your OpenAI API key**
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Sign up or log in to your account
   - Go to API Keys section
   - Create a new secret key
   - Copy and paste it into your `.env` file

## Running the Application

### Development Mode

To run both frontend and backend concurrently:

```bash
npm run dev
```

This will start:

- Backend server on `http://localhost:3001`
- Frontend development server on `http://localhost:3000`

### Individual Services

To run services individually:

**Backend only:**

```bash
npm run server
```

**Frontend only:**

```bash
npm run client
```

## Project Structure

```
test_chat_pad/
├── backend/                 # Express.js backend
│   ├── index.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── env.example         # Environment variables template
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/         # Shadcn UI components
│   │   │   ├── Chat.tsx    # Main chat component
│   │   │   ├── ChatInput.tsx
│   │   │   └── ChatMessage.tsx
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript type definitions
│   │   ├── lib/           # Utility functions
│   │   └── App.tsx        # Main app component
│   ├── package.json       # Frontend dependencies
│   ├── tailwind.config.js # Tailwind configuration
│   ├── tsconfig.json      # TypeScript configuration
│   └── vite.config.ts     # Vite configuration
├── package.json           # Root package.json for scripts
└── README.md             # This file
```

## API Endpoints

### Backend API

- `POST /api/chat` - Send a chat message and receive AI response
- `GET /api/health` - Health check endpoint

### Request/Response Format

**Chat Request:**

```json
{
  "message": "Hello, how are you?",
  "messages": [
    {
      "role": "user",
      "content": "Previous message"
    }
  ]
}
```

**Chat Response:**

```json
{
  "message": "I'm doing well, thank you! How can I help you today?",
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 25,
    "total_tokens": 40
  }
}
```

## Customization

### Styling

- Modify `frontend/src/index.css` for global styles
- Update `frontend/tailwind.config.js` for Tailwind customization
- Edit Shadcn UI components in `frontend/src/components/ui/`

### AI Configuration

- Modify OpenAI model settings in `backend/index.js`
- Change the system prompt or model parameters
- Adjust rate limiting or response formatting

### Adding Features

- Add new components in `frontend/src/components/`
- Create new API endpoints in `backend/index.js`
- Extend TypeScript types in `frontend/src/types/`

## Environment Variables

### Backend (.env)

```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
```

## Troubleshooting

### Common Issues

1. **OpenAI API Key Issues**

   - Ensure your API key is correctly set in the `.env` file
   - Check if you have sufficient credits in your OpenAI account
   - Verify the API key has the necessary permissions

2. **Port Conflicts**

   - Backend runs on port 3001, frontend on port 3000
   - Change ports in `package.json` scripts if needed

3. **CORS Issues**

   - The backend is configured to allow CORS for development
   - For production, update CORS settings as needed

4. **TypeScript Errors**
   - Ensure all dependencies are installed
   - Check TypeScript configuration in `tsconfig.json`

### Getting Help

If you encounter issues:

1. Check the browser console for frontend errors
2. Check the terminal/console for backend errors
3. Verify all environment variables are set correctly
4. Ensure your OpenAI API key is valid and has credits

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Acknowledgments

- [OpenAI](https://openai.com/) for the powerful AI API
- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
