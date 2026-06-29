export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-5`}>
      <div
        className={`max-w-[90%] md:max-w-[75%] rounded-3xl px-5 py-4 shadow-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-white/90 text-slate-800 border border-white rounded-bl-md"
        }`}
      >
        {!isUser && (
          <p className="text-sm font-bold text-blue-600 mb-2">Nova</p>
        )}

        <p className="leading-relaxed whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}