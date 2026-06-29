export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-5">
      <div className="bg-white border border-slate-100 rounded-3xl rounded-bl-md px-5 py-4 shadow-sm">
        <p className="text-sm font-bold text-blue-600 mb-2">Nova is thinking</p>
        <div className="flex gap-1">
          <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></span>
          <span className="h-2 w-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.15s]"></span>
          <span className="h-2 w-2 bg-teal-500 rounded-full animate-bounce [animation-delay:0.3s]"></span>
        </div>
      </div>
    </div>
  );
}