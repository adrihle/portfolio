# ADRIAN LOPEZ PORTFOLIO

Welcome to my personal portfolio! This is not just another "About Me" page; it's a functional showcase of my skills as a software engineer, packed with cool features, automation, and a sprinkle of humor. 🤓

You can explore everything from articles, side projects, and libraries to my work experience and certifications on platforms like AWS. It's a living lab where I test my ideas, frameworks, and experiment with new technologies.

Check it out live at [adrilopez.dev](https://adrilopez.dev)!

![Banner Image](https://res.cloudinary.com/dlj66ezaw/image/upload/v1737906092/PORTFOLIO/projects/dx7i154ohywp5qrma8ui.png)

---

## Features

### Releasing Automations
This project contains a system to analyze changes in base texts and configurations, ensuring features are updated seamlessly. It's an automation lover's dream.

### Magic Keyboard Shortcuts
Do you love fast navigation? Try Shift + arrow keys to switch between pages. Because, honestly, who enjoys unnecessary clicking? 😎

### Bionic Reading
Boost your reading efficiency by highlighting key parts of words. It's simple, customizable, and designed to make text easier to process. Reading should be effortless, not overwhelming.

### Smart (and Cost-effective) Translations
A storage system for managing translations efficiently. No need to maintain translation files in future versions. This keeps the bundle small, saving on both time and cost.

### Modular, Elegant, and Highly Configurable Code
No unnecessary dependencies or bloated code here. The architecture is clean, scalable, and easy to configure. Good code should be flexible, not rigid.

---

## How to Run the Project

### Development Mode
To spin up the project in development mode, simply run the following command:

- Use `npm run up:dev`

This will start the project with Docker for the development environment. Make sure you have a `.env.dev` file for your development environment variables.

### Production Mode
For production, you can use:

- Use `npm run up:pro`

This command will start your project in production mode with the correct environment settings.

---

## Environment Variables

Make sure to configure the following environment variables for proper functionality:

- `NODE_ENV` - Set to `development` or `production` based on the environment.
- `DEBUG` - Debugging option for your app.
- `OPENAI_APIKEY` - Your OpenAI API key.
- `REDIS_URI` - Redis connection URI.
- `MONGO_URI` - MongoDB connection URI.

Additionally, for development, make sure you have a `.env.dev` file that contains the variables specific to the development environment.

---

## Project Architecture

This project is a playground for both personal projects and as a testing ground for libraries I publish. It integrates cutting-edge architecture concepts and real-world applications like automatic translation powered by OpenAI, MongoDB for translation storage, Redis for caching, and even a memory-based system for trending locales.

The system also reduces database writes and reads, ensuring that MongoDB and Redis are used efficiently, leading to a faster app that won't break the bank.

---

## Contributing

I built this project to share knowledge, demonstrate concepts, and encourage collaboration. Feel free to explore the source code, raise issues, or contribute by forking the repository.

---

## License

This project is open source and available under the MIT License.
