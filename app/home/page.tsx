export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold text-white">Ton</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Public Key</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Private Key</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Community</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Get</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Register</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Application</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl scale-150"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              TON Ecosystem Quietly Reshapes{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Everything
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Exploring the silent revolution of decentralized finance, where TON blockchain redefines value, trust, and the future economy through Telegram integration.
            </p>
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Get started</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <p className="text-sm text-slate-400 mt-4">500+ MILLION USERS</p>
          </div>

          {/* Floating Crypto Icons */}
          <div className="relative flex justify-center items-center mb-16">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center animate-pulse relative">
              {/* TON Coin */}
              <div className="absolute -left-20 top-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              {/* Telegram */}
              <div className="absolute -right-20 top-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              {/* DeFi */}
              <div className="absolute -left-16 -bottom-8 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              {/* NFT */}
              <div className="absolute -right-16 -bottom-8 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              {/* Gaming */}
              <div className="absolute left-8 -top-16 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              {/* AI */}
              <div className="absolute right-8 -top-16 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">A</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Asset Swapping */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Asset Swapping</h3>
              <p className="text-slate-300 text-lg">
                Seamless peer-to-peer exchanges with TON`&apos;`s lightning-fast micropayments and cross-chain compatibility.
              </p>
            </div>

            {/* Fractional Ownership */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fractional Ownership</h3>
              <p className="text-slate-300 text-lg">
                Own a piece of digital assets through TON`&apos;`s smart contract fractionalization and NFT marketplace.
              </p>
            </div>

            {/* Climate Integrity */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Climate Integrity</h3>
              <p className="text-slate-300 text-lg">
                Verified impact through TON`&apos;`s transparent, traceable sustainability transactions and carbon-neutral operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-lg mb-8">Built on Trust, Powered by Beloved Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-white">Telegram</div>
            <div className="text-2xl font-bold text-white">StonFi</div>
            <div className="text-2xl font-bold text-white">Tonnel</div>
            <div className="text-2xl font-bold text-white">TON Diamonds</div>
            <div className="text-2xl font-bold text-white">TON DNS</div>
            <div className="text-2xl font-bold text-white">TON Storage</div>
            <div className="text-2xl font-bold text-white">TON Proxy</div>
            <div className="text-2xl font-bold text-white">TON Services</div>
          </div>
        </div>
      </section>

      {/* Why Choose Ton Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-medium mb-2">Why Ton?</p>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Ton for TON?</h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Where innovation meets clarity explore smarter TON insights, trends, and tools in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Global Market Movers */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Global Market Movers</h3>
              <p className="text-slate-300 mb-6">
                Driving liquidity, shaping trends, and powering the pulse of the TON digital asset world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">T</span>
                    </div>
                    <span className="text-white font-medium">TON (TON)</span>
                  </div>
                  <span className="text-green-400 font-semibold">+12.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="text-white font-medium">StonFi (STON)</span>
                  </div>
                  <span className="text-red-400 font-semibold">-2.1%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <span className="text-white font-medium">TON Diamonds</span>
                  </div>
                  <span className="text-green-400 font-semibold">+8.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <span className="text-white font-medium">Tonnel (TNL)</span>
                  </div>
                  <span className="text-green-400 font-semibold">+15.7%</span>
                </div>
              </div>
            </div>

            {/* Market Cap */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Market Cap</h3>
              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">T</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">TON (TON)</p>
                      <p className="text-slate-400 text-sm">The Open Network</p>
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">$8.2B</div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-400 font-semibold">-3.2%</span>
                  <span className="text-slate-400 text-sm">(24H) Vol.</span>
                </div>
              </div>
              
              {/* Mini Chart */}
              <div className="h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-end justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
                <div className="text-slate-400 text-sm absolute top-2 left-2">G8B</div>
                <div className="text-slate-400 text-sm absolute top-2 right-2">2B</div>
                <div className="text-slate-400 text-sm absolute bottom-2 left-1/2 transform -translate-x-1/2">7D</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Next-Level Digital Security */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Next-Level Digital Security</h3>
              <p className="text-slate-300 text-lg">
                Your assets stay fortified with TON`&apos;`s advanced encryption and biometric defense, built for tomorrow`&apos;`s threats.
              </p>
            </div>

            {/* Trailblazing Blockchain Innovation */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Trailblazing Blockchain Innovation</h3>
              <p className="text-slate-300 text-lg">
                Step into the next era of finance powered by TON`&apos;`s revolutionary blockchain infrastructure and vision.
              </p>
            </div>
          </div>

          {/* Transaction and Financial Reports */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Transaction and Financial Reports</h3>
            <p className="text-slate-300 mb-6">
              Driving liquidity, shaping trends, and powering the pulse of the TON digital asset world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <p className="text-slate-400 text-sm mb-2">Balanced</p>
                <p className="text-2xl font-bold text-white">$146,440.86</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <p className="text-slate-400 text-sm mb-2">Profit</p>
                <p className="text-2xl font-bold text-green-400">$24,110.10</p>
                <p className="text-green-400 text-sm">(+206.12%)</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <p className="text-slate-400 text-sm mb-2">Avg. Trade</p>
                <p className="text-2xl font-bold text-white">$32,580.30</p>
                <p className="text-green-400 text-sm">(+100.84%)</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <p className="text-slate-400 text-sm mb-2">Lost</p>
                <p className="text-2xl font-bold text-red-400">$1,440.86</p>
                <p className="text-red-400 text-sm">(-104.45%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-medium mb-2">How It Works</p>
            <h2 className="text-4xl font-bold text-white mb-4">From Idea to Action</h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Simple Steps to Start Trading Safely and Confidently on TON.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 space-y-4">
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <p className="text-white font-semibold">Profile Report</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Priority Access</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-3/5"></div>
                    </div>
                    <span className="text-slate-400 text-sm">52% Priority</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex-1 bg-slate-700 rounded-full h-2">
                      <div className="bg-slate-500 h-2 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-slate-400 text-sm">32% Other</span>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <div className="h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-end justify-center relative">
                    <div className="text-slate-400 text-xs absolute bottom-2 left-1/2 transform -translate-x-1/2">Jun Jul Aug Sep Oct</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Step 1: Step Into First Access</h3>
                <p className="text-slate-300">
                  Join the waiting list to gain priority access. Submit your details and complete identity verification to unlock early TON trading benefits.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Step 2: Load Your Currency</h3>
                <p className="text-slate-300">
                  Fund your account with TON, fiat, or existing assets or buy digital currency directly on our platform through Telegram integration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Step 3: Order Your Trade Pass</h3>
                <p className="text-slate-300">
                  Secure your Trade Pass through our platform. Select from flexible options, including both digital and physical formats for TON ecosystem access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm font-medium mb-2">FAQ</p>
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Where innovation meets clarity explore smarter TON insights, trends, and tools in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "What is Ton?",
              "Is it Possible to Access Cash with Ton?",
              "Is Ton secure?",
              "How can I Begin Using Ton?",
              "What coins can I use with Ton?",
              "How does Ton Determine your Fees?"
            ].map((question, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">{question}</h3>
                  <div className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Coins Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Discover 2,000+ TON Crypto</h2>
          <p className="text-slate-300 text-xl mb-8 max-w-3xl mx-auto">
            Explore top tokens and hidden gems to diversify, grow, and future-proof your TON digital portfolio.
          </p>
          
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Get started</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Floating Icons */}
          <div className="relative mt-16 h-32 overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold">T</span>
              </div>
              <div className="absolute -left-20 top-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="absolute -right-20 top-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <div className="absolute left-8 -top-8 w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-xs">N</span>
              </div>
              <div className="absolute right-8 -top-8 w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-xs">A</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-xl font-bold text-white">Ton</span>
              </div>
              <p className="text-slate-400">
                Revolutionizing the future of TON ecosystem with innovative solutions and Telegram integration.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">The Good</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Supported Coins</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Build</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Developer Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wallet Core</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit dApps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Get assets listed</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Downloads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8">
            <div className="text-center text-slate-400 mb-4">
              <p className="text-6xl font-bold text-white">Ton</p>
            </div>
            <div className="text-center text-slate-400">
              <p>&copy; 2024 Ton. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}