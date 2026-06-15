export default function MissingSkills({
  skills,
}) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-xl font-bold mb-4">
        Missing Skills
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills.length === 0 ? (
          <p className="text-green-400">
            No missing skills 🎉
          </p>
        ) : (
          skills.map((skill) => (
            <span
              key={skill}
              className="
              px-3
              py-2
              rounded-full
              bg-red-500/20
              text-red-300
              "
            >
              {skill}
            </span>
          ))
        )}

      </div>
    </div>
  );
}