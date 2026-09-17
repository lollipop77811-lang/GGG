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
      <aside className="fixed right-4 bottom-24 z-40 md:bottom-8" aria-label="AI Recruitment Assistant">
        <button
          onClick={() => setIsOpen(!isOpen)}
          title="Open AI Recruitment Assistant"
          aria-expanded={isOpen}
          className="group relative flex items-center justify-center rounded-full bg-navy-deep p-4 text-cream shadow-[0_18px_40px_-12px_rgba(9,30,51,0.55)] transition-all duration-300 hover:bg-charcoal active:scale-95"
        >
          <span className="absolute inset-0 rounded-full bg-navy-deep animate-pulse-ring" />
          {isOpen ? <X size={21} className="relative" /> : <Bot size={23} className="relative" />}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-citron text-[8px] font-bold text-charcoal">
              AI
            </span>
          )}
        </button>
        {!isOpen && (
          <span className="pointer-events-none absolute top-1/2 right-[calc(100%+14px)] hidden -translate-y-1/2 items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-[12px] font-medium whitespace-nowrap text-cream opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 md:flex">
            <Sparkles size={12} className="text-citron" /> AI assistant
          </span>
        )}
      </aside>

      {/* Interactive AI Chat Window */}
      {isOpen && (
        <div
          className="fixed right-4 bottom-24 z-50 flex h-[min(560px,72svh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-lg border border-line bg-paper shadow-[0_40px_90px_-20px_rgba(9,30,51,0.5)] md:right-6 md:bottom-24"
          role="dialog"
          aria-modal="true"
          aria-label="AI Assistant Window"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-navy-deep px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-citron text-charcoal">
                <Bot size={19} />
                <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-navy-deep bg-emerald-400" />
              </span>
              <div className="leading-tight">
                <strong className="block text-[14px] font-semibold text-cream lowercase">
                  gg manpower ai
                </strong>
                <span className="flex items-center gap-1.5 text-[11px] text-cream/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-blink" />
                  online • 24/7 candidate support
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                title="Reset Chat"
                onClick={resetChat}
                aria-label="Reset conversation"
                className="flex h-8 w-8 items-center justify-center rounded-full text-cream/60 transition-colors hover:bg-cream/10 hover:text-cream"
              >
                <RotateCcw size={14} />
              </button>
              <button
                title="Close Chat"
                onClick={() => setIsOpen(false)}
                aria-label="Close conversation"
                className="flex h-8 w-8 items-center justify-center rounded-full text-cream/60 transition-colors hover:bg-cream/10 hover:text-cream"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="thin-scroll flex-1 space-y-4 overflow-y-auto bg-paper px-4 py-5">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 text-[13.5px] leading-relaxed ${
                    m.sender === "user"
                      ? "rounded-br-sm bg-blue text-cream"
                      : "rounded-bl-sm border border-line bg-cream text-charcoal"
                  }`}
                >
                  <p style={{ whiteSpace: "pre-line", margin: 0 }}>{m.text}</p>

                  {/* Message Action Links */}
                  {m.actions && m.actions.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.actions.map((act, idx) => {
                        const base =
                          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11.5px] font-semibold lowercase transition-colors";
                        if (act.type === "link") {
                          return (
                            <a key={idx} href={act.to} className={`${base} bg-charcoal text-cream hover:bg-blue`}>
                              {act.label} <ArrowRight size={12} />
                            </a>
                          );
                        }
                        if (act.type === "call") {
                          return (
                            <a key={idx} href={act.href} className={`${base} border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-cream`}>
                              <Phone size={12} /> {act.label}
                            </a>
                          );
                        }
                        if (act.type === "whatsapp") {
                          return (
                            <a key={idx} href={act.href} target="_blank" rel="noreferrer" className={`${base} bg-citron text-charcoal hover:bg-charcoal hover:text-citron`}>
                              <MessageCircle size={12} /> {act.label}
                            </a>
                          );
                        }
                        return (
                          <a key={idx} href={act.href} target="_blank" rel="noreferrer" className={`${base} border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-cream`}>
                            <ExternalLink size={12} /> {act.label}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Prompt Suggestion Chips */}
                {m.chips && m.chips.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {m.chips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        onClick={() => handleSend(chip)}
                        className="rounded-full border border-line bg-cream px-3 py-1.5 text-[11.5px] font-medium text-ink-soft transition-colors hover:border-citron-deep hover:bg-citron/25 hover:text-charcoal"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start">
                <div className="flex gap-1.5 rounded-lg rounded-bl-sm border border-line bg-cream px-4 py-3.5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-charcoal/40 animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Footer / Input */}
          <form
            className="flex items-center gap-2.5 border-t border-line bg-cream px-4 py-3.5"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="ask anything (e.g. dubai jobs, documents)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-full border border-line bg-paper px-4 py-2.5 text-[13px] text-charcoal placeholder:text-charcoal/35 focus:border-blue focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-deep text-cream transition-all hover:bg-blue disabled:opacity-35"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
