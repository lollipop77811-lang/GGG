import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  Sparkles,
  X,
  Send,
  RotateCcw,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { contact, countries, jobGroups } from "../data/siteData";

const INITIAL_MESSAGES = [
  {
    id: "welcome",
    sender: "bot",
    text: "Namaste! 🙏 Main Guru Gorakhnath Global Manpower ka AI Assistant hoon.\n\nAap Gulf aur Europe jobs, visa process, documents ya hamare Gorakhpur office ke baare mein kuch bhi pooch sakte hain!",
    time: "Just now",
    chips: [
      "🌍 Gulf & Europe Jobs",
      "👷 Available Trades",
      "📋 Required Documents",
      "📍 Gorakhpur Office Location",
      "📞 Helplines & Numbers",
    ],
  },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  function getBotResponse(userText) {
    const q = userText.toLowerCase().trim();

    if (
      q.includes("country") ||
      q.includes("countries") ||
      q.includes("desh") ||
      q.includes("gulf") ||
      q.includes("europe") ||
      q.includes("dubai") ||
      q.includes("saudi") ||
      q.includes("qatar") ||
      q.includes("poland") ||
      q.includes("romania")
    ) {
      return {
        text: `Hum in 12+ international destinations ke liye recruitment & manpower services provide karte hain:\n\n🌴 Gulf: Dubai (UAE), Saudi Arabia, Qatar, Oman, Bahrain, Kuwait, Iraq\n🇪🇺 Europe: Poland, Romania, Bulgaria\n🌐 Others: Israel, Russia\n\nAap kis country ya category ke liye apply karna chahte hain?`,
        actions: [
          { type: "link", label: "View Countries Page", to: "/countries" },
          {
            type: "whatsapp",
            label: "Ask on WhatsApp",
            href: `https://wa.me/91${contact.primary}?text=Hello,%20mujhe%20overseas%20countries%20vacancy%20ki%20jaankari%20chahiye.`,
          },
        ],
      };
    }

    if (
      q.includes("job") ||
      q.includes("kaam") ||
      q.includes("naukri") ||
      q.includes("trade") ||
      q.includes("vacancy") ||
      q.includes("category") ||
      q.includes("electrician") ||
      q.includes("plumber") ||
      q.includes("welder") ||
      q.includes("mason") ||
      q.includes("cook")
    ) {
      return {
        text: `Hamare paas regular overseas interview chalte rehte hain in trades ke liye:\n\n🏗️ Civil: Mason, Tile Mason, Steel Fixer, Carpenter, Painter, Helper\n⚡ MEP: Electrician, Plumber, AC Technician, Ductman, Pipe Fitter\n⚙️ Mechanical/Oil & Gas: Multi-Welder (6G/TIG/ARC), Fabricator, Rigger\n🍽️ Catering: Cook, Continental/Indian Chef, Waiter, Kitchen Boy\n🪟 Aluminium & Glass: Fabricator, Glass Fixer\n🧹 Facility Management: Indoor/Outdoor Cleaners, Packing Staff\n\nAapka kaunsa trade hai?`,
        actions: [
          { type: "link", label: "Explore All Jobs", to: "/jobs" },
          {
            type: "call",
            label: `Call Hotline: ${contact.primary}`,
            href: `tel:${contact.primary}`,
          },
        ],
      };
    }

    if (
      q.includes("document") ||
      q.includes("paper") ||
      q.includes("passport") ||
      q.includes("kya chahiye") ||
      q.includes("requirement") ||
      q.includes("eligib") ||
      q.includes("visa")
    ) {
      return {
        text: `Overseas application ke liye zaroori documents:\n\n1. 🛂 Original Passport (Minimum 1 se 2 saal validity, ECR ya ECNR dono chalte hain)\n2. 📸 White Background Passport Size Photos\n3. 📜 Trade Certificate / ITI / Diploma (Agar applicable ho)\n4. 🏢 Past Work Experience Certificate (India ya Gulf Return)\n5. 🏥 Medical Fitness (GAMCA / Approved Medical Center)\n\nAap apna CV aur Passport hamare office me submit kar sakte hain ya WhatsApp par bhej sakte hain.`,
        actions: [
          {
            type: "whatsapp",
            label: "Send Passport on WhatsApp",
            href: `https://wa.me/91${contact.primary}?text=Hello,%20main%20apna%20document%20verification%20ke%20liye%20bhejna%20chahta%20hoon.`,
          },
        ],
      };
    }

    if (
      q.includes("office") ||
      q.includes("address") ||
      q.includes("location") ||
      q.includes("kahan") ||
      q.includes("kaha") ||
      q.includes("gorakhpur") ||
      q.includes("pata") ||
      q.includes("center")
    ) {
      return {
        text: `📍 Hamara Head Office Address:\n\nSonbarsa Bazar (Police Chowki ke bagal mein), NH 28, Gorakhpur, Uttar Pradesh 273002.\n\n🏛️ Landmark: Directly beside Police Chowki on National Highway 28.\n⏰ Timings: Monday to Saturday (9:30 AM - 6:30 PM).\n📋 Company Reg: ${contact.registration}`,
        actions: [
          {
            type: "external",
            label: "Open in Google Maps",
            href: `https://maps.google.com/?q=${encodeURIComponent("Sonbarsa Bazar, NH 28, Gorakhpur, Uttar Pradesh 273002")}`,
          },
        ],
      };
    }

    if (
      q.includes("contact") ||
      q.includes("number") ||
      q.includes("phone") ||
      q.includes("helpline") ||
      q.includes("call") ||
      q.includes("whatsapp") ||
      q.includes("baat")
    ) {
      return {
        text: `Aap in numbers par direct humse sampark kar sakte hain:\n\n📞 Primary Helpline: ${contact.primary}\n📱 Other Hotlines: ${contact.phones.slice(0, 3).join(", ")}\n📧 Email: ${contact.email || "gurugorakhnathglobalmanpower@gmail.com"}\n\nOffice team aapko ongoing interviews aur interview schedule ki complete guidance degi.`,
        actions: [
          {
            type: "call",
            label: `Call: ${contact.primary}`,
            href: `tel:${contact.primary}`,
          },
          {
            type: "whatsapp",
            label: "Chat on WhatsApp",
            href: `https://wa.me/91${contact.primary}`,
          },
        ],
      };
    }

    if (
      q.includes("salary") ||
      q.includes("paisa") ||
      q.includes("tankhwah") ||
      q.includes("income") ||
      q.includes("overtime")
    ) {
      return {
        text: `Salary aapke trade, skill test result aur selected country par depend karti hai:\n\n• Helpers/General Labor: ₹25,000 - ₹38,000 + Overtime\n• Skilled Technicians (Electrician, Plumber, Mason): ₹35,000 - ₹60,000 + Food/Accommodation\n• 6G Welders / Chefs / Supervisors: ₹55,000 - ₹95,000+\n• Europe Contracts: European labor standards ke anusar currency benefits.\n\nAccurate offer letter interview ke baad company directly issue karti hai.`,
        actions: [
          {
            type: "call",
            label: `Enquire Details: ${contact.primary}`,
            href: `tel:${contact.primary}`,
          },
        ],
      };
    }

    if (
      q.includes("hi") ||
      q.includes("hello") ||
      q.includes("hey") ||
      q.includes("namaste") ||
      q.includes("salam")
    ) {
      return {
        text: "Namaste! 🙏 Kaise madad kar sakta hoon aapki aaj? Kripya batayein ki aap kis role, trade ya country ke baare mein jaankari chahte hain.",
        chips: [
          "Civil & MEP Jobs",
          "Gulf Vacancies",
          "Europe Opportunities",
          "Office Address",
        ],
      };
    }

    // Default friendly response
    return {
      text: `Aapka sawaal note kar liya gaya hai! Overseas recruitment, documentation ya upcoming client interviews ke liye aap hamare Gorakhpur office hotline par call kar sakte hain ya direct WhatsApp par message bhej sakte hain.`,
      actions: [
        {
          type: "call",
          label: `Call: ${contact.primary}`,
          href: `tel:${contact.primary}`,
        },
        {
          type: "whatsapp",
          label: "Chat on WhatsApp",
          href: `https://wa.me/91${contact.primary}?text=Hello%20GG%20Manpower,%20I%20have%20an%20enquiry.`,
        },
      ],
      chips: [
        "Available Trades",
        "Gulf Countries",
        "Office Address",
        "Required Documents",
      ],
    };
  }

  function handleSend(textToSend) {
    const messageContent = textToSend || input;
    if (!messageContent.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: messageContent.trim(),
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const replyData = getBotResponse(messageContent);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyData.text,
        actions: replyData.actions,
        chips: replyData.chips,
        time: "Just now",
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 550);
  }

  function resetChat() {
    setMessages(INITIAL_MESSAGES);
    setInput("");
  }

  return (
    <>
      {/* Floating Right AI Chatbot Button */}
      <aside
        className="ai-chatbot-widget"
        aria-label="AI Recruitment Assistant"
      >
        <button
          className={`ai-float-btn ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          title="Open AI Recruitment Assistant"
          aria-expanded={isOpen}
        >
          <span className="ai-pulse-ring" />
          <span className="ai-icon-wrapper">
            {isOpen ? <X size={22} /> : <Bot size={24} />}
          </span>
          <span className="float-micro-badge ai-badge">AI</span>
          <span className="ai-status-dot" />
          <span className="ai-float-label">
            <Sparkles size={13} className="sparkle-spin" /> AI Assistant
          </span>
        </button>
      </aside>

      {/* Interactive AI Chat Window */}
      {isOpen && (
        <div
          className="ai-chat-window"
          role="dialog"
          aria-modal="true"
          aria-label="AI Assistant Window"
        >
          {/* Header */}
          <div className="ai-chat-header">
            <div className="ai-header-left">
              <div className="ai-avatar">
                <Bot size={20} color="#0a192f" />
                <span className="ai-avatar-badge" />
              </div>
              <div>
                <strong className="ai-bot-name">GG Manpower AI</strong>
                <span className="ai-bot-sub">
                  <span className="live-indicator" /> Online • 24/7 Candidate
                  Support
                </span>
              </div>
            </div>
            <div className="ai-header-actions">
              <button
                className="ai-action-btn"
                title="Reset Chat"
                onClick={resetChat}
                aria-label="Reset conversation"
              >
                <RotateCcw size={15} />
              </button>
              <button
                className="ai-action-btn"
                title="Close Chat"
                onClick={() => setIsOpen(false)}
                aria-label="Close conversation"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="ai-chat-body">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`ai-msg-group ${m.sender === "user" ? "user-group" : "bot-group"}`}
              >
                <div
                  className={`ai-bubble ${m.sender === "user" ? "user-bubble" : "bot-bubble"}`}
                >
                  <p style={{ whiteSpace: "pre-line", margin: 0 }}>{m.text}</p>

                  {/* Message Action Links */}
                  {m.actions && m.actions.length > 0 && (
                    <div className="ai-actions-grid">
                      {m.actions.map((act, idx) => {
                        if (act.type === "link") {
                          return (
                            <a
                              key={idx}
                              href={act.to}
                              className="ai-action-pill link-pill"
                            >
                              {act.label} <ArrowRight size={13} />
                            </a>
                          );
                        }
                        if (act.type === "call") {
                          return (
                            <a
                              key={idx}
                              href={act.href}
                              className="ai-action-pill call-pill"
                            >
                              <Phone size={13} /> {act.label}
                            </a>
                          );
                        }
                        if (act.type === "whatsapp") {
                          return (
                            <a
                              key={idx}
                              href={act.href}
                              target="_blank"
                              rel="noreferrer"
                              className="ai-action-pill wa-pill"
                            >
                              <MessageCircle size={13} /> {act.label}
                            </a>
                          );
                        }
                        return (
                          <a
                            key={idx}
                            href={act.href}
                            target="_blank"
                            rel="noreferrer"
                            className="ai-action-pill ext-pill"
                          >
                            <ExternalLink size={13} /> {act.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Prompt Suggestion Chips */}
                {m.chips && m.chips.length > 0 && (
                  <div className="ai-chips-wrap">
                    {m.chips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        className="ai-chip-btn"
                        onClick={() => handleSend(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="ai-msg-group bot-group">
                <div className="ai-bubble bot-bubble typing-bubble">
                  <span className="dot-flashing" />
                  <span className="dot-flashing" />
                  <span className="dot-flashing" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Footer / Input */}
          <form
            className="ai-chat-footer"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              className="ai-input-field"
              placeholder="Ask anything (e.g. Dubai jobs, documents)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="ai-send-btn"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
