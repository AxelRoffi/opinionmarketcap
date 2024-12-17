'use client'

import React from 'react';
import { TrendingUp, ChevronDown, ChevronUp, Wallet, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { CSSProperties } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div 
    className={className}
    style={{
      borderRadius: '12px',
      border: '1px solid #eaeaea',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: 'white'
    } as CSSProperties}
  >
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div style={{ padding: '24px' } as CSSProperties} className={className}>
    {children}
  </div>
);

interface MarketQuestion {
  id: number;
  question: string;
  currentAnswer: string;
  price: string;
  change: number;
  volume: string;
  owner: string;
}

// Define styles with proper TypeScript types
const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
  },
  topBanner: {
    backgroundColor: '#4763FF',
    color: 'white',
    padding: '12px 0',
    textAlign: 'center',
    fontWeight: 500
  },
  nav: {
    borderBottom: '1px solid #eaeaea',
    backgroundColor: 'white'
  },
  navInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  navLink: {
    color: '#4763FF',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    marginLeft: '16px'
  },
  button: {
    backgroundColor: '#4763FF',
    color: 'white',
    padding: '10px 24px',
    borderRadius: '8px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500
  },
  outlineButton: {
    backgroundColor: 'transparent',
    color: '#4763FF',
    border: '2px solid #4763FF',
    padding: '10px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500
  },
  hero: {
    textAlign: 'center',
    padding: '96px 0 64px'
  },
  heroTitle: {
    fontSize: '64px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#111'
  },
  heroSubtitle: {
    fontSize: '24px',
    color: '#666',
    marginBottom: '24px'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    maxWidth: '896px',
    margin: '48px auto 0'
  },
  statValue: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  statLabel: {
    color: '#666'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    textAlign: 'left',
    padding: '16px',
    borderBottom: '1px solid #eaeaea',
    fontWeight: 500
  },
  tableCell: {
    padding: '16px',
    borderBottom: '1px solid #eaeaea'
  },
  footer: {
    backgroundColor: '#4763FF',
    color: 'white',
    padding: '64px 0',
    textAlign: 'center'
  }
} as const;

const mockQuestions: MarketQuestion[] =  [
  { id: 1, question: "Goat of soccer?", currentAnswer: "Messi", price: "2450", change: 15.5, volume: "125K", owner: "messi.base.eth" },
  { id: 2, question: "Greatest NFT project?", currentAnswer: "BAYC", price: "1850", change: -5.2, volume: "82K", owner: "punk.base.eth" },
  { id: 3, question: "Best Pizza in NY?", currentAnswer: "Grimaldi's", price: "3200", change: 25.8, volume: "151K", owner: "nyc.base.eth" },
  { id: 4, question: "Most trusted crypto-exchange?", currentAnswer: "Binance", price: "4100", change: 12.3, volume: "203K", owner: "trader.base.eth" },
  { id: 5, question: "Best Hip Hop Album ever?", currentAnswer: "Illmatic", price: "2800", change: -8.4, volume: "95K", owner: "beats.base.eth" },
  { id: 6, question: "Most beautiful city?", currentAnswer: "Paris", price: "3600", change: 18.9, volume: "178K", owner: "travel.base.eth" },
  { id: 7, question: "Best watch brand?", currentAnswer: "Rolex", price: "5200", change: 22.1, volume: "245K", owner: "luxe.base.eth" },
  { id: 8, question: "Most iconic luxury brand?", currentAnswer: "Louis Vuitton", price: "4800", change: -3.7, volume: "192K", owner: "fashion.base.eth" },
  { id: 9, question: "Best SF movie ever?", currentAnswer: "Blade Runner", price: "2900", change: 9.6, volume: "134K", owner: "film.base.eth" },
  { id: 10, question: "Goat of Basketball?", currentAnswer: "Jordan", price: "4500", change: 16.2, volume: "215K", owner: "nba.base.eth" }
];

export const OpinionMarketLanding: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' } as CSSProperties}>
      <div style={styles.topBanner}>
        🚀 Built on Base blockchain - The most efficient L2 for Web3 social applications
      </div>

      <nav style={styles.nav}>
        <div style={{ ...styles.container, ...styles.navInner }}>
          <div style={{ display: 'flex', alignItems: 'center' } as CSSProperties}>
            <TrendingUp style={{ height: 24, width: 24, color: '#4763FF' }} />
            <span style={{ marginLeft: '8px', fontSize: '20px', fontWeight: 600 }}>
              OpinionMarketCap
            </span>
            <Link href="https://helix-result-8fd.notion.site/OpinionMarketCap-1422a027814780fe83fdefddbee96227" style={styles.navLink}>
              Roadmap <ExternalLink style={{ marginLeft: 4, height: 16, width: 16 }} />
            </Link>
            <Link href="https://twitter.com/OpnionMarketCap" style={styles.navLink}>
              Twitter <ExternalLink style={{ marginLeft: 4, height: 16, width: 16 }} />
            </Link>
          </div>
          <button style={styles.button}>
            <Wallet style={{ height: 20, width: 20 }} />
            Connect Wallet
          </button>
        </div>
      </nav>

      <div style={styles.container}>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>
            Trade Opinions, Not Just Crypto
          </h1>
          <p style={styles.heroSubtitle}>
            The first decentralized opinion exchange platform on Base (Data demo & inactive buttons)
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' } as CSSProperties}>
            <button style={styles.button}>Start Trading</button>
            <button style={styles.outlineButton}>Learn More</button>
          </div>

          <div style={styles.statsGrid}>
            <Card>
              <CardContent>
                <div style={styles.statValue}>1,234</div>
                <div style={styles.statLabel}>Active Questions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div style={styles.statValue}>$5.82M</div>
                <div style={styles.statLabel}>Total Volume in USDC</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div style={styles.statValue}>892</div>
                <div style={styles.statLabel}>Active Traders</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div style={{ margin: '64px 0' } as CSSProperties}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' } as CSSProperties}>
            Top Questions
          </h2>
          <Card>
            <div style={{ overflowX: 'auto' } as CSSProperties}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>#</th>
                    <th style={styles.tableHeader}>Question</th>
                    <th style={styles.tableHeader}>Current Opinion</th>
                    <th style={styles.tableHeader}>Price (USDC)</th>
                    <th style={styles.tableHeader}>24h Change</th>
                    <th style={styles.tableHeader}>Volume</th>
                    <th style={styles.tableHeader}>Owner</th>
                    <th style={styles.tableHeader}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockQuestions.map((item) => (
                    <tr key={item.id}>
                      <td style={styles.tableCell}>{item.id}</td>
                      <td style={styles.tableCell}>{item.question}</td>
                      <td style={styles.tableCell}>{item.currentAnswer}</td>
                      <td style={styles.tableCell}>${item.price}</td>
                      <td style={{ 
                        ...styles.tableCell, 
                        color: item.change >= 0 ? '#10B981' : '#EF4444'
                      }}>
                        {item.change >= 0 ? (
                          <ChevronUp style={{ display: 'inline', height: 16, width: 16 }} />
                        ) : (
                          <ChevronDown style={{ display: 'inline', height: 16, width: 16 }} />
                        )}
                        {Math.abs(item.change)}%
                      </td>
                      <td style={styles.tableCell}>${item.volume}</td>
                      <td style={styles.tableCell}>{item.owner}</td>
                      <td style={styles.tableCell}>
                        <button style={{ ...styles.button, padding: '8px 16px', fontSize: '14px' }}>
                          Change Opinion
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div style={{ margin: '64px 0', maxWidth: '960px' } as CSSProperties}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px' } as CSSProperties}>
            How It Works
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '0 auto' } as CSSProperties}>
            <Card>
              <CardContent>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' } as CSSProperties}>
                  Buy & Sell Opinions
                </h3>
                <p style={{ fontSize: '20px', color: '#666', marginBottom: '24px' } as CSSProperties}>
                  Buy the right to change opinions using USDC
                </p>
                <div style={{ 
                  backgroundColor: '#F3F4F6', 
                  padding: '24px', 
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: '#666'
                } as CSSProperties}>
                  Example: If someone changes your opinion for 1000 USDC, you receive 950 USDC (95%)
                </div>
              </CardContent>
            </Card>

            {/* Additional cards here with proper typing */}
          </div>
        </div>

        <div style={styles.footer}>
          <iframe 
            src="https://embeds.beehiiv.com/816397ad-ba2f-457a-898f-265a3673ce4f" 
            width="100%" 
            height={320}
            style={{
              borderRadius: '4px',
              margin: 0,
              backgroundColor: 'transparent'
            } as CSSProperties}
          />
        </div>
      </div>
    </div>
  );
};
