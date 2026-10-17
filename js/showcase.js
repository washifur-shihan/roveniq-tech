/* ==========================================================================
   ROVENIQ TECHNOLOGIES - PORTFOLIO SHOWCASE & CASE STUDIES
   Filterable projects and interactive modal deep-dive
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initShowcase();
});

function initShowcase() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const showcaseCards = document.querySelectorAll('.showcase-card');

  // Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      showcaseCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Modal details
  const projectsData = {
    'aurora-ai': {
      title: 'Aurora AI - Enterprise Knowledge & Analytics Platform',
      tech: ['React / Next.js', 'Python FastAPI', 'OpenAI GPT-4o', 'Pinecone Vector DB', 'LangChain', 'Docker'],
      description: `
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Challenge & Scope</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">The client needed a secure, enterprise-grade AI assistant capable of digesting massive PDF manuals, real-time SQL databases, and internal tickets to answer enterprise queries in under 300ms.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Engineering Solution</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">We engineered an autonomous multi-agent pipeline using LangChain and Pinecone. The frontend features a sleek dark mode dashboard with real-time streaming tokens and custom visualization charts.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Verified Results</h4>
        <ul style="color:#cbd5e1; padding-left:20px; margin-bottom:20px; line-height:1.7;">
          <li>⚡ <strong>78% reduction</strong> in customer support turnaround time.</li>
          <li>📈 <strong>2.1M monthly queries</strong> processed with 99.98% reliability.</li>
          <li>🛡️ Enterprise-grade SOC2 and RBAC permission isolation.</li>
        </ul>
      `
    },
    'novapay-flutter': {
      title: 'NovaPay & Trade - Flutter Cross-Platform Fintech App',
      tech: ['Flutter 3.x', 'Dart', 'Riverpod', 'WebSocket Engine', 'bKash / Stripe', 'Biometrics'],
      description: `
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Challenge & Scope</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Developing a unified, high-security mobile trading and wallet experience for both iOS and Android with live candlestick charts and local payment gateway compliance.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Engineering Solution</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Built entirely with Flutter and Dart using single-codebase architecture. We achieved 60fps chart rendering using custom Canvas shaders and integrated bKash, Nagad, and Stripe APIs.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Verified Results</h4>
        <ul style="color:#cbd5e1; padding-left:20px; margin-bottom:20px; line-height:1.7;">
          <li>⭐ <strong>4.9/5 Rating</strong> across Apple App Store and Google Play.</li>
          <li>🚀 <strong>50% faster time-to-market</strong> compared to dual native teams.</li>
          <li>🔒 Zero security vulnerabilities reported across rigorous penetration testing.</li>
        </ul>
      `
    },
    'nexus-cloud': {
      title: 'NexusCloud - Autonomous Multi-Agent Cloud Platform',
      tech: ['Kubernetes', 'AWS EKS', 'Go & Node.js', 'Prometheus', 'CI/CD Pipelines', 'Cybersecurity'],
      description: `
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Challenge & Scope</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Consolidating 14 legacy systems into a modern microservice mesh with autonomous self-healing monitoring and automated zero-downtime canary deployments.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Engineering Solution</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Implemented containerized Kubernetes pods with automated scaling policies, automated rollbacks, and AI-assisted predictive incident alerting.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Verified Results</h4>
        <ul style="color:#cbd5e1; padding-left:20px; margin-bottom:20px; line-height:1.7;">
          <li>💰 <strong>42% reduction</strong> in infrastructure monthly cloud spend.</li>
          <li>⚡ <strong>Zero downtime</strong> across over 200 consecutive deployments.</li>
          <li>⏱️ Rapid failover recovery in less than 4 seconds.</li>
        </ul>
      `
    }
  };

  // Attach modal click handlers
  document.querySelectorAll('[data-open-project]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = trigger.getAttribute('data-open-project');
      const data = projectsData[projKey];
      if (data && window.openModal) {
        window.openModal(data.title, data.description, data.tech);
      }
    });
  });
}
