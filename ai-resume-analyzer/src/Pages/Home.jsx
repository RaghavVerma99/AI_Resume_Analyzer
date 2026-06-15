import { useState } from "react";

import API from "../services/api";

import ATSScore from "../components/ATSScore";
import MissingSkills from "../components/MissingSkills";

export default function Home() {

  const [resumeText, setResumeText] =
    useState("");

  const [jobDescription,
    setJobDescription] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const analyzeResume = async () => {

    if (
      !resumeText ||
      !jobDescription
    ) {
      alert(
        "Please fill both fields."
      );
      return;
    }

    try {

      setLoading(true);

      const response =
        await API.post(
          "/analyze",
          {
            resume_text:
              resumeText,

            job_description:
              jobDescription,
          }
        );

      setResult(response.data);

    } catch (error) {

      console.error(error);

      alert(
        "Backend connection failed."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-black
      text-white
      px-6
      py-12
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        "
      >
        <h1
          className="
          text-5xl
          md:text-7xl
          font-black
          text-center
          bg-gradient-to-r
          from-cyan-400
          via-purple-400
          to-pink-500
          text-transparent
          bg-clip-text
          "
        >
          AI Resume Analyzer
        </h1>

        <p
          className="
          text-center
          text-gray-400
          mt-4
          "
        >
          Analyze resumes against
          job descriptions.
        </p>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          mt-12
          "
        >

          <textarea
            placeholder="Paste Resume Text"
            value={resumeText}
            onChange={(e) =>
              setResumeText(
                e.target.value
              )
            }
            className="
            h-80
            p-5
            rounded-3xl
            bg-white/5
            border border-white/10
            outline-none
            "
          />

          <textarea
            placeholder="Paste Job Description"
            value={jobDescription}
            onChange={(e) =>
              setJobDescription(
                e.target.value
              )
            }
            className="
            h-80
            p-5
            rounded-3xl
            bg-white/5
            border border-white/10
            outline-none
            "
          />

        </div>

        <div className="text-center mt-10">

          <button
            onClick={
              analyzeResume
            }
            disabled={loading}
            className="
            px-10
            py-4
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            font-semibold
            hover:scale-105
            transition
            "
          >
            {loading
              ? "Analyzing..."
              : "Analyze Resume"}
          </button>

        </div>

        {result && (

          <div
            className="
            grid
            md:grid-cols-2
            gap-8
            mt-12
            "
          >
            <ATSScore
              score={
                result.ats_score
              }
            />

            <MissingSkills
              skills={
                result.missing_skills
              }
            />

          </div>

        )}

      </div>
    </div>
  );
}