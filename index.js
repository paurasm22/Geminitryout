// Import the required module
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the GoogleGenerativeAI client with your API key
const genAI = new GoogleGenerativeAI('AIzaSyBf7--nw90xSkhcAiXn6Hbj0HZtRHsbUng');

// Retrieve the generative model
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Define the prompt
const prompt = 'i want a recipe with eggs , turmeric, onions , tomatoes only i have diseases like obesity give me a recipe which i can make to serve 1 give all list of ingredients , calories , carbs , protiens and should be prepared within 10 minutes . I want to display the prompt in a chatbot so dont give formal messages ! also includea message "Subscripe to nutibot for unlimited AI generated recipes dont include placeholder for links ';

// Generate content using the model
const generateContent = async () => {
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.error('Error generating content:', error);
  }
};

// Execute the content generation function
generateContent();
