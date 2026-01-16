import { GoogleGenerativeAI } from '@google/generative-ai';
import { getFormattedKnowledge } from '../data/chatbotKnowledge';

// Initialize the Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Get the generative model
// Using gemini-pro which is the standard model availability for free tier/general access
const model = genAI.getGenerativeModel({
    model: 'gemini-flash-latest',
    generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
    }
});

// System prompt with knowledge base
const systemPrompt = getFormattedKnowledge();

/**
 * Send a message to the Gemini AI chatbot
 * @param {string} userMessage - The user's message
 * @param {Array} chatHistory - Previous chat messages for context
 * @returns {Promise<string>} - The AI's response
 */
export const sendMessage = async (userMessage, chatHistory = []) => {
    try {
        // Build the conversation context
        const conversationContext = chatHistory
            .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
            .join('\n');

        // Combine system prompt, conversation history, and new message
        const fullPrompt = `${systemPrompt}

${conversationContext ? `Previous conversation:\n${conversationContext}\n` : ''}
User: ${userMessage}

Assistant:`;

        // Generate response from Gemini AI
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        return text;
    } catch (error) {
        console.error('Error sending message to Gemini AI:', error);
        throw new Error('Failed to get response from AI. Please try again.');
    }
};
