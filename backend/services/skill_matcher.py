SKILLS_DATABASE = [

    "Python",
    "Java",
    "C++",
    "React",
    "Node.js",
    "FastAPI",
    "Flask",

    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",

    "Docker",
    "Kubernetes",

    "AWS",
    "Azure",

    "SQL",
    "MongoDB",

    "Git",
    "Linux"
]


def find_missing_skills(
    resume_text: str,
    job_description: str
):
    missing_skills = []

    resume_lower = resume_text.lower()
    job_lower = job_description.lower()

    for skill in SKILLS_DATABASE:

        skill_lower = skill.lower()

        if (
            skill_lower in job_lower
            and skill_lower not in resume_lower
        ):
            missing_skills.append(skill)

    return missing_skills