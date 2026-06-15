export default function ATSScore({ score }) {
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
        ATS Score
      </h2>

      <div
        className="
        text-5xl
        font-black
        text-cyan-400
        "
      >
        {score}%
      </div>
    </div>
  );
}