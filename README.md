# ADRIAN LOPEZ PORTFOLIO 🚀

Welcome to my *not-just-another* portfolio! This is a personal playground where I showcase everything I love about software development—automation, optimization, and making tech work for us (not the other way around). From articles and libraries to my work experience, side projects, and certifications, this site is more than just a static page—it’s a living lab. 🤓

Check it out live at [adrilopez.dev](https://adrilopez.dev)! 🌐

![Banner Image](https://res.cloudinary.com/dlj66ezaw/image/upload/v1737906092/PORTFOLIO/projects/dx7i154ohywp5qrma8ui.png)

---

## 🛠️ Features

### 🚀 Releasing Automations
If your idea of a good time includes automating everything, this project has a system that analyzes changes in base texts and configurations, updating features with ease. It’s like having a personal assistant for your software. 😉

### ⌨️ Magic Keyboard Shortcuts
You know what’s worse than clicking? A LOT of clicking. Enter the magic of keyboard shortcuts. Try Shift + arrow keys to zip between pages like a wizard. 💨

### 🧠 Bionic Reading
Get ready to upgrade your brain’s reading speed. With bionic reading, key parts of words are highlighted, making it easier and faster to comprehend text. The future of reading is here. 🔮

### 🌍 Smart (and Cost-effective) Translations
This project also solves the *ever-lasting* translation woes with an efficient storage system. Forget translation files that balloon up your app. It’s smart, efficient, and keeps your wallet (and app bundle) light. 🏋️‍♂️

### 💻 Modular, Elegant, and Highly Configurable Code
Who needs bloated code? Not me! This project features a clean, modular, and scalable architecture that’s highly configurable. If code was a salad, this would be a no-carb, all-veggie, gluten-free masterpiece. 🥗

---

## 🌟 How to Run the Project

### 🐳 Dockerized Environments

This project is fully Dockerized, and that means no more *"it works on my machine!"* excuses. Whether you’re in development or production, Docker’s got your back. 🎉

Just use:

To fire up the dev environment.
```bash
    npm run up:dev

```

For production.
```bash
    npm run up:pro
```

This ensures that everything’s running smoothly no matter where you are. 🎮

### 🏗️ Development Mode
To fire up the project in development mode, just hit:

```bash
    npm run dev
```

Don’t forget to set up your `.env.dev` file with the development variables!

### 🚀 Production Mode
Want to see your app in full production glory? Run:

```bash
    npm run build && npm run start
```

This starts your app with the production environment settings. Easy peasy. 😎

---

## 🌍 Environment Variables

You know the drill: make sure you have your environment variables set up correctly. Here are the key ones:

- `NODE_ENV` - Set to `development` or `production`, depending on where you are.
- `DEBUG` - Debugging flag. Use it if you like to live on the edge.
- `OPENAI_APIKEY` - Your OpenAI API key (if you’re into that AI magic).
- `REDIS_URI` - The URI for your Redis instance (because caching is life).
- `MONGO_URI` - The URI for your MongoDB instance (where all your data lives).

Also, don’t forget your **`.env.dev`** file for development-specific settings. Otherwise, your app might not work (and that’s a problem). 😉

---


---

## 💡 Project Architecture

This project isn’t just for showing off—it’s a testing ground for libraries, ideas, and concepts I’m constantly developing. I built it with my own architectural principles in mind, focusing on scalability, minimal boilerplate, and a development experience that’s faster and smoother. 🚗💨

- **MongoDB** – For storing translations (and maybe your secrets 😉).
- **Redis** – Because caching is love, caching is life.
- **In-memory trending locales** – To save you the trouble of making unnecessary reads and writes to the DB. It’s like storing the latest trends in your brain. 🧠

This project also includes an auto-translation feature powered by OpenAI’s GPT, optimized for performance and cost. No need to manually manage translation files—just let the system do the heavy lifting.

---

## 🤝 Contributing

I’m all about sharing knowledge, and this project is no exception. Feel free to fork it, raise issues, and contribute. If you want to collaborate or just steal some good code, I’m all for it. 🔥

---

## 📜 License

This project is open source and available under the MIT License. You’re free to use it, modify it, and, of course, give credit where credit’s due. ✨

---

### 💻 Enjoy hacking, and welcome to the future of development! 😎
