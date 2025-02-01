# Scribble - Modern Journal App

![image](https://github.com/user-attachments/assets/190b2eae-a82e-496e-ac0d-89e2af80e7c4)

Scribble is a sleek and intuitive journal web app designed to provide a seamless and insightful journaling experience. Built with cutting-edge technology, it offers an elegant home page, seamless authentication via Clerk, and an analytics-rich dashboard that provides users with mood tracking, entry statistics, and drafts for later use.


## 🚀 Features

### Authentication

- Powered by Clerk for secure authentication
- User profile management
- Google Sign-In & Sign-Up integration
- User-friendly onboarding experience


####  Insightful Dashboard

- Total Entries: count displayed for quick reference
- Mood Summary Cards showing mood trends
- Mood Timeline Chart for visual mood tracking
- Collections & Drafts for better organization
- Entry Editor with a smooth and rich-text experience

## Dashboard Overview:

### Journal Entries

- Create, edit, and save journal entries
- Draft feature to save unfinished thoughts
- Rich text formatting support


  ![image](https://github.com/user-attachments/assets/e0e6861f-8134-4124-a394-24ba99cc8f4e)

  ![image](https://github.com/user-attachments/assets/e0812813-2908-4eba-8fcc-210630662522)

### Collections

- Organize journal entries into custom collections
- Drag-and-drop support for easy management

![image](https://github.com/user-attachments/assets/716121a3-c7e0-4760-a7b4-204aab5352d9)


####  Mood Analytics

- AI-driven insights into mood trends
- Detailed charts and graphs
- Personalized mood tracking

  ![image](https://github.com/user-attachments/assets/3727c0e4-d367-44a1-95df-ecce88913697)




## 🛠️ Tech Stack

- Frontend: Next.js, React, Tailwind CSS, Shadcn UI

- Authentication: Clerk

- Database: Prisma with PostgreSQL

- State Management: React Hook Form, Zod

- UI Components: Radix UI, Lucide React

- Charts: Recharts

- Carousel: Embla Carousel

- Text Editor: React Quill
- Backend Services: Arcjet

##  Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/AsTeriaa09/scribble.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_sign_in_url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_sign_up_url
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=your_after_sign_in_url
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=your_after_sign_up_url
DATABASE_URL=your_postgresql_database_url
ARCJET_KEY=your_arcjet_key
PIXABAY_API_KEY=your_pixabay_api_key
```

You can find an example in the `.env.example` file. Make sure to replace all placeholder values with your actual API keys and credentials.

4. **Run the development server**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

