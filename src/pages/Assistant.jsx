import { useState, useRef, useEffect } from "react";

const SUGGESTED = [
  "What are our biggest ESG risks this year?",
  "How should we respond to investor ESG questionnaires?",
  "What does CSRD require us to disclose by 2025?",
  "How do we compare to sector peers on Scope 1 emissions?",
  "What questions should the board be asking management?",
];

const SYSTEM_PROMPT = `You are an expert ESG advisor speaking directly to board members of a company. Your role is to:
- Give clear, direct answers in plain English — not consultant jargon
- Be specific and actionable, not vague
- Cite relevant frameworks (CSRD, TCFD, GRI, SBTi) when useful
- Flag when something is a regulatory requirement vs best practice
- Help boards ask better questions of management
- Keep answers concise — boards value brevity

Never use bullet-point overload. Write in short paragraphs. Be the advisor who tells the board what they need to know, not what they want to hear.`;

function Message({ role, content }) {
  return (
    <div className={`flex gap-4 ${role === "user" ? "justify-end" : "justify-start"}`}>
      {role === "assistant" && (
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
          🌱
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${
          role === "user"
            ? "bg-white/8 text-white/80 rounded-tr-sm"
            : "bg-white/[0.03] border border-white/5 text-white/60 rounded-tl-sm"
        }`}
      >
        {content}
      </div>
      {role === "user" && (
        <div className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-xs text-white/50 flex-shrink-0 mt-0.5">
          You
        </div>
      )}
    </div>
  );
}

export default function Assistant() {
  const [apiKey, setApiKey] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text) {
    const userMsg = text || input.trim();
    if (!userMsg) return;
    if (!apiKey) { setError("Enter your Anthropic API key above."); return; }

    setError("");
    setInput("");
    const updated = [...messages, { role: "user", content: userMsg }];
    setMessages(updated);
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: updated,
        }),
      });
      if (!res.ok) {
        const e = await res.json();
        throw new Error(e.error?.message || "API error");
      }
      const data = await res.json();
      const reply = data.content.map((b) => b.text || "").join("");
      setMessages([...updated, { role: "assistant", content: reply }]);
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  const hasMessages = messages.length > 0;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col" style={{ minHeight: "calc(100vh - 128px)" }}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl text-white font-bold mb-2" style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.02em" }}>
          Board <span className="text-emerald-400 italic">Assistant</span>
        </h1>
        <p className="text-white/30 text-sm">Ask anything about ESG, CSRD, sustainability strategy or investor relations.</p>
      </div>

      {/* API key */}
      <div className="bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 mb-6 flex gap-3 items-center">
        <span className="text-[10px] uppercase tracking-widest text-white/25 flex-shrink-0">API Key</span>
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="sk-ant-..."
          className="flex-1 bg-transparent text-sm text-white/60 placeholder-white/15 outline-none"
        />
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {!hasMessages ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl">
              🌱
            </div>
            <div className="text-center">
              <p className="text-white/50 text-sm font-medium mb-1">Your ESG board advisor</p>
              <p className="text-white/25 text-xs">Ask about risks, regulations, investor questions or strategy</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
              {SUGGESTED.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-left text-xs text-white/40 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 hover:bg-white/[0.04] hover:text-white/60 hover:border-white/10 transition-all leading-snug"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 space-y-5 mb-6 overflow-y-auto">
            {messages.map((m, i) => (
              <Message key={i} role={m.role} content={m.content} />
            ))}
            {loading && (
              <div className="flex gap-4 justify-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm flex-shrink-0">
                  🌱
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl rounded-tl-sm px-5 py-3.5 flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}

        {error && (
          <div className="bg-red-500/5 border border-red-500/15 rounded-lg px-4 py-2.5 text-xs text-red-400 mb-3">
            ⚠️ {error}
          </div>
        )}

        {/* Input */}
        <div className="bg-white/[0.02] border border-white/8 rounded-2xl p-2 flex gap-2 mt-auto sticky bottom-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
            placeholder="Ask your ESG question…"
            className="flex-1 bg-transparent px-3 py-2 text-sm text-white/70 placeholder-white/20 outline-none"
          />
          <button
            onClick={() => send()}
            disabled={loading || !input.trim()}
            className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 text-emerald-950 font-semibold text-sm px-5 py-2 rounded-xl transition-all disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
