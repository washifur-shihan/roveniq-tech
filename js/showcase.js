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
      title: 'Aurora Algorithm AI - Enterprise Knowledge & Analytics Platform',
      tech: ['React / Next.js', 'Python FastAPI', 'OpenAI GPT-4o', 'Pinecone Vector DB', 'LangChain', 'Docker'],
      description: `
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Challenge & Scope</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">The client needed a secure, enterprise-grade AI knowledge assistant capable of processing massive PDF manuals, real-time SQL databases, and internal tickets to answer complex technical queries with ultra-consistent 380ms latency.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Engineering Solution</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">We engineered an autonomous multi-agent pipeline using LangChain, GPT-4o, and Pinecone vector similarity clustering. The frontend delivers real-time token streaming and dynamic executive analytics dashboards.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Verified Results</h4>
        <ul style="color:#cbd5e1; padding-left:20px; margin-bottom:20px; line-height:1.7;">
          <li>⚡ <strong>380ms average latency</strong> across multi-turn vector similarity queries.</li>
          <li>📉 <strong>78% reduction</strong> in customer support turnaround times.</li>
          <li>📈 <strong>2.1M monthly queries</strong> processed with 99.98% reliability.</li>
          <li>🛡️ Enterprise-grade SOC2 and RBAC permission isolation.</li>
        </ul>
      `
    },
    'universal-university': {
      title: 'Universal University App System — Unified Campus, CRM & Recruiter Suite',
      tech: ['Flutter 3.x', 'Dart', 'Node.js APIs', 'Stripe Gateway', 'PostgreSQL', 'Digital Library & CRM'],
      description: `
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Challenge & Scope</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Universities previously juggled disjointed third-party software for admissions, class enrollment, RFID library book tracking, faculty workloads, corporate campus hiring, and tuition collection.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Engineering Solution</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Built a single-codebase Flutter and Web university administration ecosystem. Combines an Admissions CRM, an automated RFID/ISBN Digital Library catalog, Faculty workload and grade submitters, a dedicated Corporate Recruiter portal with automated student CV matching, and a direct Stripe payment integration for tuition & fee collections.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Verified Results</h4>
        <ul style="color:#cbd5e1; padding-left:20px; margin-bottom:20px; line-height:1.7;">
          <li>💳 <strong>100% Automated Stripe Billing</strong> for tuition, examination, and semester registration fees.</li>
          <li>📚 <strong>Integrated CRM & Library</strong>: Real-time book reservation, ISBN barcode scanner, and admissions pipeline.</li>
          <li>🎓 <strong>Corporate Recruiter Portal</strong>: Direct campus hiring gateway with 3x faster applicant review times.</li>
          <li>📱 <strong>60 FPS Native Performance</strong> with offline caching on iOS, Android, and Web.</li>
        </ul>
      `
    },
    'novapay-flutter': {
      title: 'Universal University App System — Unified Campus, CRM & Recruiter Suite',
      tech: ['Flutter 3.x', 'Dart', 'Node.js APIs', 'Stripe Gateway', 'PostgreSQL', 'Digital Library & CRM'],
      description: `
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Challenge & Scope</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Universities previously juggled disjointed third-party software for admissions, class enrollment, RFID library book tracking, faculty workloads, corporate campus hiring, and tuition collection.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Engineering Solution</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Built a single-codebase Flutter and Web university administration ecosystem. Combines an Admissions CRM, an automated RFID/ISBN Digital Library catalog, Faculty workload and grade submitters, a dedicated Corporate Recruiter portal with automated student CV matching, and a direct Stripe payment integration for tuition & fee collections.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Verified Results</h4>
        <ul style="color:#cbd5e1; padding-left:20px; margin-bottom:20px; line-height:1.7;">
          <li>💳 <strong>100% Automated Stripe Billing</strong> for tuition, examination, and semester registration fees.</li>
          <li>📚 <strong>Integrated CRM & Library</strong>: Real-time book reservation, ISBN barcode scanner, and admissions pipeline.</li>
          <li>🎓 <strong>Corporate Recruiter Portal</strong>: Direct campus hiring gateway with 3x faster applicant review times.</li>
          <li>📱 <strong>60 FPS Native Performance</strong> with offline caching on iOS, Android, and Web.</li>
        </ul>
      `
    },
    'vapi-restaurant': {
      title: 'VapiDine AI — Multi-Vendor Autonomous Restaurant Voice Platform',
      tech: ['Vapi.ai Voice Engine', 'Next.js 14', 'Dynamic Prompting', 'Node.js Microservices', 'Stripe POS', 'Twilio Webhooks'],
      description: `
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Challenge & Scope</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">High-volume restaurants and multi-vendor food halls miss up to 35% of inbound takeout orders and table reservations during peak hours due to busy lines. Each restaurant requires distinct menu customizations, seasonal promotions, and personalized conversational tones.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Engineering Solution</h4>
        <p style="color:#94a3b8; margin-bottom:16px;">Architected a multi-tenant voice telephony SaaS leveraging Vapi.ai, Deepgram speech-to-text, and OpenAI. Built a proprietary <strong>Dynamic Prompting Engine</strong> where individual restaurant owners can alter their AI's instructions on the fly—updating daily specials, 86'd out-of-stock items, upsell pairings, and conversational tone without writing a single line of code. Converts speech directly into structured tickets for Kitchen Display Systems (KDS) and dispatches automated Stripe SMS checkout links.</p>
        
        <h4 style="color:#ffffff; margin-bottom:8px; font-size:1.1rem;">Verified Results</h4>
        <ul style="color:#cbd5e1; padding-left:20px; margin-bottom:20px; line-height:1.7;">
          <li>⚡ <strong>Zero Call Hold Times</strong>: Handles dozens of concurrent phone calls simultaneously during peak dinner rush.</li>
          <li>🎯 <strong>Dynamic Vendor Prompting</strong>: Individual restaurants configure distinct AI personalities and menus in seconds.</li>
          <li>💳 <strong>Automated Stripe & KDS Flow</strong>: 100% automated order ticket creation and SMS billing dispatch.</li>
          <li>📈 <strong>28% Revenue Uplift</strong> via automated smart upselling during live phone orders.</li>
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
