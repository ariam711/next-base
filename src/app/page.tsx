import Image from 'next/image';

// Import CSS modules for component-scoped styling
import styles from './page.module.css';

/**
 * Home page component - the main landing page of the application
 * 
 * This component demonstrates the basic structure of a Next.js page with:
 * - Optimized images using Next.js Image component
 * - CSS modules for scoped styling
 * - External links with proper security attributes
 * 
 * @returns {JSX.Element} The rendered home page
 */
export default function Home() {
  return (
    <div className={styles.page}>
      {/* Main content area */}
      <main className={styles.main}>
        {/* Next.js logo with priority loading for LCP optimization */}
        <Image 
          className={styles.logo} 
          src="/next.svg" 
          alt="Next.js logo" 
          width={180} 
          height={38} 
          priority // Marks this image as high priority for loading
        />
        
        {/* Getting started instructions */}
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        {/* Call-to-action buttons */}
        <div className={styles.ctas}>
          {/* Primary CTA - Deploy button */}
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer" // Security best practice for external links
          >
            <Image className={styles.logo} src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </a>
          
          {/* Secondary CTA - Documentation link */}
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      
      {/* Footer with resource links */}
      <footer className={styles.footer}>
        {/* Learn link */}
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        
        {/* Examples link */}
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        
        {/* Next.js website link */}
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
