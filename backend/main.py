from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.request_model import ResumeRequest

from services.ats_score import (
    calculate_ats_score,
)

from services.skill_matcher import (
    find_missing_skills,
)

app = FastAPI(

    title="AI Resume Analyzer",
    version="1.0"
)
app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message": "AI Resume Analyzer Running"
    }


@app.post("/analyze")
def analyze_resume(
    data: ResumeRequest
):

    score = calculate_ats_score(
        data.resume_text,
        data.job_description
    )

    missing_skills = find_missing_skills(
        data.resume_text,
        data.job_description
    )

    return {
        "ats_score": score,
        "missing_skills": missing_skills,
        "resume_length": len(
            data.resume_text.split()
        ),
    }