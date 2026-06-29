from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from groq import Groq
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

@app.get("/")
def home():
    return {"message": "LifeLink AI backend is running"}

@app.post("/chat")
def chat(message: str = Form(...)):
    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": """
You are Nova, the AI companion of LifeLink AI.
You help users with accessibility, education opportunities, healthcare guidance,
safety support, and mental wellness.

Reply warmly, clearly, and concisely.
For medical issues, give general guidance and recommend professional care.
For safety issues, give calm emergency guidance.
"""
            },
            {"role": "user", "content": message}
        ],
        temperature=0.7,
        max_tokens=500,
    )

    return {"reply": response.choices[0].message.content}

@app.post("/accessibility-text")
async def accessibility_text(file: UploadFile = File(...)):
    content = await file.read()

    try:
        text = content.decode("utf-8")
    except UnicodeDecodeError:
        text = "The uploaded file could not be decoded as plain text."

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": """
You are Nova, an accessibility assistant.
Simplify uploaded text for users who may need screen-reader friendly,
easy-English, and audio-friendly explanations.
Extract deadlines, action items, warnings, and important points.
"""
            },
            {
                "role": "user",
                "content": f"Make this content accessible:\n\n{text}"
            }
        ],
        temperature=0.5,
        max_tokens=700,
    )

    return {"reply": response.choices[0].message.content}