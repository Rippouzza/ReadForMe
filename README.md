
# 📖 ReadForMe

**ReadForMe** is a mobile application designed to assist individuals with visual impairments by recognizing objects in their environment and reading them aloud. This app addresses the challenge of visually impaired people struggling to identify their surroundings and offers a practical solution to help them navigate their environment more independently.

## 🚀 Features

- **Object Detection:** Captures objects in the environment and recognizes them using the Google Cloud Vision API.
- **Text-to-Speech:** Reads aloud the recognized objects for immediate auditory feedback.
- **Simple User Interaction:** Users press a button on the home screen to open the camera and capture images.

## 🛠️ Technologies Used

- **React Native:** Framework for building the app with a single codebase for both iOS and Android.
- **Expo:** Tool for building and compiling the app.
- **Google Cloud Vision API:** Utilized for object recognition and analysis.
- **Text-to-Speech:** Provides speech output for the recognized object descriptions.

## ⚙️ Installation

To run **ReadForMe** on your own device, follow these steps:

### Prerequisites

- **Expo Go app:** Install the Expo Go app on your phone (available on the App Store or Google Play).
- **Google Cloud Vision API Key:** You need to set up a Google Cloud account and obtain a valid API key for the Vision API.

### Steps to Run

1. **Clone the Repository:**
   - Clone this repository to your local machine.

2. **Install Dependencies:**
   - Open the `app.js` file in **VS Code** (or your preferred text editor).
   - Open a terminal and navigate to the project directory.
   - Run the following command to install the dependencies:
     ```bash
     npm install
     ```

3. **Start the Project:**
   - In the terminal, run:
     ```bash
     npm start
     ```
   - A QR code will be generated in the terminal.

4. **Run on Your Device:**
   - Scan the generated QR code using the **Expo Go** app on your phone.
   - The app will open on your phone and is ready to use.

### Demo

A **demo video** showcasing the app in action is available in the **demo** folder of this repository.

## 🚧 Challenges Faced

- **API Key Issues:** The primary challenge was obtaining a functional Google Cloud Vision API key due to billing constraints. Ensure that you have a valid API key configured for the app to work properly.

## 📝 Contributing

If you would like to contribute to this project, feel free to:

1. Fork the repository.
2. Create a new branch.
3. Make changes and submit a pull request.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🌱 Future Roadmap

- **Multiple Language Support:** Adding support for different languages in the object recognition and text-to-speech functionality.
- **User Interface Improvements:** Enhancing accessibility features for easier navigation.

## 🙏 Credits

- Special thanks to **Google Cloud Vision API** for providing the object recognition capabilities.
