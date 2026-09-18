import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LiFiWidget } from '@lifi/widget';
import { EthereumProvider } from '@lifi/widget-provider-ethereum';
import { SolanaProvider } from '@lifi/widget-provider-solana';
import { BitcoinProvider } from '@lifi/widget-provider-bitcoin';
import { SuiProvider } from '@lifi/widget-provider-sui';
import { StellarProvider } from '@lifi/widget-provider-stellar';

const CONTRACT_ADDRESS = "0x1d83f1cd9f42ce46f13d8af490993da95b2fc8d9";

const widgetConfig: any = {
  integrator: 'raouf',
  feeConfig: {
    fee: 0.01,
    name: 'Nexus Swap Fee',
  },
  providers: [
    EthereumProvider(),
    SolanaProvider(),
    BitcoinProvider(),
    SuiProvider(),
    StellarProvider(),
  ],
  theme: {
    appearance: 'dark',
    container: {
      border: '1px solid rgb(40, 40, 40)',
      borderRadius: '16px',
    },
  },
};

// مكوّن نسخ عنوان العقد التفاعلي (Token Contract Box Component)
const ContractAddressBox = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.contractContainer}>
      <span style={styles.contractLabel}>$NEXUS Contract:</span>
      <code style={styles.contractCode}>
        {CONTRACT_ADDRESS.slice(0, 6)}...{CONTRACT_ADDRESS.slice(-4)}
      </code>
      <button onClick={handleCopy} style={copied ? styles.copiedBtn : styles.copyBtn}>
        {copied ? '✓ Copied' : '📋 Copy'}
      </button>
    </div>
  );
};

// 1. الصفحة الرئيسية (Home & Swap Page)
const SwapPage = () => {
  return (
    <div style={styles.homeWrapper}>
      {/* القسم الرئيسي العلوي: النص على اليسار والويدجت على اليمين */}
      <section style={styles.heroSection}>
        {/* الطرف الأيسر: النصوص والوصف */}
        <div style={styles.heroLeft}>
          <div style={styles.heroBadgeRow}>
            <div style={styles.heroBadge}>
              <span>🚀 Multi-Chain Cross-Bridge Protocol</span>
            </div>
            {/* شريط عنوان التوكن المميز */}
            <ContractAddressBox />
          </div>

          <h1 style={styles.heroTitle}>
            Swap Any Token <br />
            <span style={styles.heroTitleGradient}>Across Any Blockchain</span>
          </h1>
          <p style={styles.heroSubtext}>
            NexusSwap bridges liquidities across EVM and non-EVM chains with optimal routing, minimal slippage, and maximum security powered by LI.FI.
          </p>
        </div>

        {/* الطرف الأيمن: الويدجت */}
        <div style={styles.heroRight}>
          <div style={styles.widgetContainer}>
            <LiFiWidget integrator="raouf" config={widgetConfig as any} />
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات البارزة / Stats Section */}
      <section style={styles.statsBar}>
        <div style={styles.statBox}>
          <span style={styles.statBoxNum}>20+</span>
          <span style={styles.statBoxLabel}>Supported Chains</span>
        </div>
        <div style={styles.statBoxDivider} />
        <div style={styles.statBox}>
          <span style={styles.statBoxNum}>100+</span>
          <span style={styles.statBoxLabel}>DEX Aggregators</span>
        </div>
        <div style={styles.statBoxDivider} />
        <div style={styles.statBox}>
          <span style={styles.statBoxNum}>$0 Hidden</span>
          <span style={styles.statBoxLabel}>Transparent Fees</span>
        </div>
        <div style={styles.statBoxDivider} />
        <div style={styles.statBox}>
          <span style={styles.statBoxNum}>50%</span>
          <span style={styles.statBoxLabel}>Fee Revenue Burn</span>
        </div>
      </section>

      {/* قسم ميزات المشروع / Features Grid */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionHeading}>Why Choose NexusSwap?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>Best Rates Guaranteed</h3>
            <p style={styles.featureDesc}>
              Our router continuously queries dozens of DEXs and bridges to execute your swaps at the most competitive rates available.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>Non-Custodial & Secure</h3>
            <p style={styles.featureDesc}>
              You maintain full ownership of your assets. Smart contracts process transactions directly from your wallet.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🌐</div>
            <h3 style={styles.featureTitle}>Cross-Chain Interoperability</h3>
            <p style={styles.featureDesc}>
              Seamlessly swap across Ethereum, Solana, Bitcoin, Sui, Stellar, Arbitrum, Optimism, and more in a single step.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔥</div>
            <h3 style={styles.featureTitle}>Deflationary Ecosystem</h3>
            <p style={styles.featureDesc}>
              50% of platform fee revenue is automatically funneled into open market buybacks and permanent token burns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// 2. About Page
const AboutPage = () => (
  <div style={styles.aboutWrapper}>
    <h1 style={styles.aboutTitle}>About NexusSwap</h1>
    <p style={styles.aboutSubdescription}>
      NexusSwap is a next-generation decentralized cross-chain liquidity aggregator designed to make crypto swaps seamless, secure, and lightning fast.
    </p>

    <div style={styles.aboutCardsGrid}>
      <div style={styles.aboutCard}>
        <h3 style={styles.aboutCardTitle}>Our Mission</h3>
        <p style={styles.aboutCardText}>
          To eliminate blockchain boundaries by providing unified liquidity across all major EVM and non-EVM ecosystems.
        </p>
      </div>

      <div style={styles.aboutCard}>
        <h3 style={styles.aboutCardTitle}>Powered by LI.FI</h3>
        <p style={styles.aboutCardText}>
          By integrating advanced routing protocols, NexusSwap finds the most cost-effective and secure swap paths available.
        </p>
      </div>
    </div>
  </div>
);

// 3. FAQ Page
const FAQPage = () => (
  <div style={styles.faqWrapper}>
    <h1 style={styles.faqTitle}>Frequently Asked Questions</h1>
    <div style={styles.faqContainer}>
      <div style={styles.faqCard}>
        <h3 style={styles.faqQuestion}>What is NexusSwap?</h3>
        <p style={styles.faqAnswer}>
          NexusSwap is a multi-chain aggregator allowing you to swap tokens across different blockchains directly from your wallet.
        </p>
      </div>

      <div style={styles.faqCard}>
        <h3 style={styles.faqQuestion}>Are there extra platform fees?</h3>
        <p style={styles.faqAnswer}>
          NexusSwap routes your transactions with zero hidden markup fees beyond network gas and standard bridge fees.
        </p>
      </div>

      <div style={styles.faqCard}>
        <h3 style={styles.faqQuestion}>Which wallets are supported?</h3>
        <p style={styles.faqAnswer}>
          We support MetaMask, WalletConnect, Coinbase Wallet, Rabby, Trust Wallet, and all major Web3 mobile wallets.
        </p>
      </div>

      <div style={styles.faqCard}>
        <h3 style={styles.faqQuestion}>What should I do if a transaction is delayed?</h3>
        <p style={styles.faqAnswer}>
          Cross-chain bridge transactions depend on network congestion. You can track your transaction status via the route detail link provided in the widget.
        </p>
      </div>
    </div>
  </div>
);

// 4. Burn Page
const BurnPage = () => (
  <div style={styles.burnWrapper}>
    <div style={styles.burnContainer}>
      <div style={styles.badgeContainer}>
        <span style={styles.badge}>Tokenomics & Deflation</span>
      </div>

      <h1 style={styles.burnTitle}>
        50% Revenue <span style={styles.burnTitleHighlight}>Buyback & Burn</span>
      </h1>

      <div style={{ marginBottom: '25px' }}>
        <ContractAddressBox />
      </div>

      <p style={styles.burnDescription}>
        We are committed to building long-term value for our community. To reduce the total circulating supply of{' '}
        <strong>NEXUSSWAP ($NEXUS)</strong>, 50% of all platform revenues are dedicated to automated token buybacks and permanent burns.
      </p>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statValue}>50%</div>
          <div style={styles.statLabel}>Revenue Allocated</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statValue}>DEX</div>
          <div style={styles.statLabel}>Market Buybacks</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statValue}>$NEXUS</div>
          <div style={styles.statLabel}>Deflationary Token</div>
        </div>
      </div>

      <div style={styles.mechanismCard}>
        <h3 style={styles.mechanismTitle}>🔥 How the Burn Mechanism Works</h3>
        <ol style={styles.mechanismList}>
          <li style={styles.mechanismItem}>
            <strong>1. Revenue Collection:</strong> Swap fees collected by NexusSwap are aggregated into a dedicated buyback pool.
          </li>
          <li style={styles.mechanismItem}>
            <strong>2. Open Market Buyback:</strong> 50% of these funds are used directly on DEXs to purchase $NEXUS tokens.
          </li>
          <li style={styles.mechanismItem}>
            <strong>3. Permanent Deflation:</strong> Purchased tokens are immediately sent to a dead burn address (0x0...000), removing them from supply forever.
          </li>
        </ol>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <header style={styles.navbar}>
          <div style={styles.logo}>
            <Link to="/" style={styles.logoLink}>⚡ Nexus Swap</Link>
          </div>
          <nav style={styles.navLinks}>
            <Link to="/" style={styles.link}>Swap</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/faq" style={styles.link}>FAQ</Link>
            <Link to="/burn" style={{ ...styles.link, color: '#ff4d4f' }}>🔥 Burn</Link>
          </nav>
        </header>

        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<SwapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/burn" element={<BurnPage />} />
          </Routes>
        </main>

        <footer style={styles.footer}>
          © 2026 NexusSwap. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  appContainer: {
    backgroundColor: '#07080a',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  navbar: {
  display: 'flex',
  justifyContent: 'space-between', // ✅ الصحيح
  alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#0d0e12',
    borderBottom: '1px solid #1a1c23',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logoLink: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#ffffff',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 20px',
    flex: '1',
  },

  /* Contract Address Component Styles */
  contractContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#12151e',
    border: '1px solid #282f42',
    borderRadius: '20px',
    padding: '4px 12px',
    fontSize: '13px',
  },
  contractLabel: {
    color: '#8d94a5',
    fontWeight: '600',
  },
  contractCode: {
    color: '#7c5dfa',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  copyBtn: {
    backgroundColor: '#202636',
    border: '1px solid #323b52',
    color: '#fff',
    borderRadius: '12px',
    padding: '3px 8px',
    fontSize: '11px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
  copiedBtn: {
    backgroundColor: '#1c3b2b',
    border: '1px solid #2e6045',
    color: '#4ade80',
    borderRadius: '12px',
    padding: '3px 8px',
    fontSize: '11px',
    cursor: 'pointer',
    fontWeight: '600',
  },

  /* Home Section Wrapper */
  homeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
  },

  /* Hero Section (Split Layout) */
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '40px',
    padding: '20px 0 60px 0',
    flexWrap: 'wrap',
  },
  heroLeft: {
    flex: '1 1 480px',
    textAlign: 'left',
  },
  heroRight: {
    flex: '1 1 420px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroBadgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  heroBadge: {
    display: 'inline-block',
    backgroundColor: '#1b1437',
    border: '1px solid #3d2f75',
    color: '#9d8bf2',
    borderRadius: '20px',
    padding: '6px 18px',
    fontSize: '13px',
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: '46px',
    fontWeight: '800',
    lineHeight: '1.2',
    margin: '0 0 20px 0',
  },
  heroTitleGradient: {
    background: 'linear-gradient(90deg, #7c5dfa, #ff4e50)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtext: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#8d94a5',
    margin: 0,
  },
  widgetContainer: {
    width: '100%',
    maxWidth: '450px',
  },

  /* Stats Bar Styles */
  statsBar: {
    display: 'flex',
    justify: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#0f1117',
    border: '1px solid #1c202a',
    borderRadius: '16px',
    padding: '24px 20px',
    marginBottom: '60px',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statBoxNum: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#ffffff',
  },
  statBoxLabel: {
    fontSize: '13px',
    color: '#8d94a5',
    marginTop: '4px',
  },
  statBoxDivider: {
    width: '1px',
    height: '35px',
    backgroundColor: '#1c202a',
  },

  /* Features Grid Styles */
  featuresSection: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '40px',
  },
  sectionHeading: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#ffffff',
    margin: '0 0 8px 0',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '30px',
  },
  featureCard: {
    backgroundColor: '#0f1117',
    border: '1px solid #1c202a',
    borderRadius: '16px',
    padding: '30px 25px',
    textAlign: 'left',
  },
  featureIcon: {
    fontSize: '28px',
    marginBottom: '12px',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 10px 0',
  },
  featureDesc: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#8d94a5',
    margin: 0,
  },

  /* About Page Styles */
  aboutWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '850px',
    textAlign: 'center',
  },
  aboutTitle: {
    fontSize: '38px',
    fontWeight: '800',
    margin: '0 0 16px 0',
    color: '#ffffff',
  },
  aboutSubdescription: {
    color: '#8d94a5',
    fontSize: '16px',
    lineHeight: '1.6',
    maxWidth: '720px',
    margin: '0 0 40px 0',
  },
  aboutCardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    width: '100%',
  },
  aboutCard: {
    backgroundColor: '#0f1117',
    border: '1px solid #1c202a',
    borderRadius: '16px',
    padding: '30px 25px',
    textAlign: 'left',
  },
  aboutCardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 12px 0',
  },
  aboutCardText: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#8d94a5',
    margin: 0,
  },

  /* FAQ Styles */
  faqWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '850px',
  },
  faqTitle: {
    fontSize: '36px',
    fontWeight: '800',
    textAlign: 'center',
    margin: '0 0 30px 0',
    color: '#ffffff',
  },
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
  },
  faqCard: {
    backgroundColor: '#0f1117',
    border: '1px solid #1c202a',
    borderRadius: '16px',
    padding: '24px 28px',
    textAlign: 'left',
  },
  faqQuestion: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#7c5dfa',
    margin: '0 0 10px 0',
  },
  faqAnswer: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#8d94a5',
    margin: 0,
  },

  /* Burn Styles */
  burnWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '850px',
  },
  burnContainer: {
    backgroundColor: '#0f1115',
    border: '1px solid #1d212a',
    borderRadius: '24px',
    padding: '40px',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  badgeContainer: {
    marginBottom: '20px',
  },
  badge: {
    backgroundColor: '#1b1437',
    border: '1px solid #3d2f75',
    color: '#9d8bf2',
    borderRadius: '20px',
    padding: '6px 16px',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },
  burnTitle: {
    fontSize: '42px',
    fontWeight: '800',
    textAlign: 'center',
    margin: '0 0 20px 0',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  burnTitleHighlight: {
    background: 'linear-gradient(90deg, #ff4e50, #f9d423)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  burnDescription: {
    color: '#8d94a5',
    fontSize: '15px',
    lineHeight: '1.6',
    textAlign: 'center',
    margin: '0 0 35px 0',
    maxWidth: '680px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    width: '100%',
    marginBottom: '35px',
  },
  statCard: {
    backgroundColor: '#15181f',
    border: '1px solid #232934',
    borderRadius: '16px',
    padding: '24px 15px',
    textAlign: 'center',
  },
  statValue: {
    color: '#ff4e50',
    fontSize: '28px',
    fontWeight: '800',
    marginBottom: '8px',
  },
  statLabel: {
    color: '#656e80',
    fontSize: '13px',
    fontWeight: '500',
  },
  mechanismCard: {
    backgroundColor: '#0f1115',
    border: '1px solid #1d212a',
    borderRadius: '16px',
    padding: '30px',
    width: '100%',
    boxSizing: 'border-box',
  },
  mechanismTitle: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 20px 0',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  mechanismList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  mechanismItem: {
    color: '#8d94a5',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  footer: {
    borderTop: '1px solid #1a1c23',
    backgroundColor: '#0d0e12',
    color: '#656e80',
    fontSize: '13px',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: 'auto',
  },
};