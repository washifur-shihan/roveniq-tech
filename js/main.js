/* ==========================================================================
   ROVENIQ TECHNOLOGIES - MAIN JAVASCRIPT
   Core interactions, terminal sandbox, direct contact handlers
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTerminalSandbox();
  initFAQAccordion();
  initContactForm();
  initCopyActions();
  initModalHandlers();
  initScrollTop();
});

/* --------------------------------------------------------------------------
   1. Navbar & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav .nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  // Active section indicator on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. Interactive Terminal Sandbox in Hero
   -------------------------------------------------------------------------- */
function initTerminalSandbox() {
  const termBody = document.getElementById('terminal-live-body');
  const termTabs = document.querySelectorAll('.term-tab');

  const scenarios = {
    ai: [
      { type: 'cmd', text: 'roveniq agent:init --model gpt-4o --rag enterprise_knowledge' },
      { type: 'output', text: '⚡ Vector DB connected: Pinecone cluster [Asia-Southeast-1]' },
      { type: 'output', text: '🧠 Neural embeddings synthesized: 14,820 chunks indexed' },
      { type: 'output', text: '🔗 LangChain orchestration bus active: 4 autonomous sub-agents ready' },
      { type: 'success', text: '✓ AI Agent runtime operational. Response latency: 180ms.' }
    ],
    flutter: [
      { type: 'cmd', text: 'flutter build apk --release --dart-define=ENV=production' },
      { type: 'output', text: '📦 Bundling assets & tree-shaking native symbols...' },
      { type: 'output', text: '📱 Compiling iOS & Android multi-platform engine...' },
      { type: 'output', text: '💳 bKash, Nagad & Stripe SDKs initialized with zero overhead' },
      { type: 'success', text: '✓ Cross-platform bundle built. 60 FPS verified on all devices.' }
    ],
    web: [
      { type: 'cmd', text: 'roveniq deploy --env production --edge-routing' },
      { type: 'output', text: '⚡ Compiling React/Next.js edge serverless workers...' },
      { type: 'output', text: '🛡️ Bank-grade TLS & DDoS shield verified' },
      { type: 'output', text: '🚀 Deployed to 32 Global Edge Locations (Latency: <35ms)' },
      { type: 'success', text: '✓ 100/100 Lighthouse score achieved. Live & running.' }
    ]
  };

  function renderScenario(key) {
    if (!termBody || !scenarios[key]) return;
    const steps = scenarios[key];
    termBody.innerHTML = '';

    steps.forEach((step, index) => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = 'terminal-line';

        if (step.type === 'cmd') {
          line.innerHTML = `<span class="term-prompt">roveniq@core:~$</span> <span class="term-cmd">${step.text}</span>`;
        } else if (step.type === 'output') {
          line.className = 'term-output';
          line.textContent = step.text;
        } else if (step.type === 'success') {
          line.className = 'term-output term-success';
          line.textContent = step.text;
        }

        termBody.appendChild(line);
      }, index * 260);
    });
  }

  termTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      termTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const scenarioKey = tab.getAttribute('data-scenario');
      renderScenario(scenarioKey);
    });
  });

  // Initial load
  renderScenario('ai');
}

/* --------------------------------------------------------------------------
   3. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other open items
      faqItems.forEach(other => other.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Contact Form Handler (WhatsApp & Mailto Dispatch - No DB Needed)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('consultation-form');
  const btnWhatsApp = document.getElementById('btn-send-whatsapp');
  const btnEmail = document.getElementById('btn-send-email');
  const btnCopy = document.getElementById('btn-copy-form');

  if (!form) return;

  function getFormData() {
    const name = document.getElementById('form-name')?.value.trim() || 'Potential Client';
    const contact = document.getElementById('form-contact')?.value.trim() || 'Not specified';
    const projectType = document.getElementById('form-project-type')?.value || 'Web & AI Development';
    const budget = document.getElementById('form-budget')?.value || 'Flexible';
    const message = document.getElementById('form-message')?.value.trim() || 'I am interested in working with Roveniq Technologies.';

    const structuredText = 
`*New Project Inquiry - Roveniq Technologies*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name}
📞 *Contact (Email/Phone):* ${contact}
🚀 *Service Needed:* ${projectType}
💰 *Estimated Budget:* ${budget}
━━━━━━━━━━━━━━━━━━━━━━
📝 *Project Overview:*
${message}
━━━━━━━━━━━━━━━━━━━━━━
Sent via Roveniq Technologies Online Hub`;

    return { name, contact, projectType, budget, message, structuredText };
  }

  // Send via WhatsApp
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      const encoded = encodeURIComponent(data.structuredText);
      const waUrl = `https://wa.me/8801759957439?text=${encoded}`;
      window.open(waUrl, '_blank');
      showToast('Opening WhatsApp with your project brief...');
    });
  }

  // Send via Email (mailto)
  if (btnEmail) {
    btnEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      const subject = encodeURIComponent(`Project Inquiry: ${data.projectType} - ${data.name}`);
      const body = encodeURIComponent(data.structuredText.replace(/\*/g, ''));
      const mailtoUrl = `mailto:roveniq.technologies@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
      showToast('Opening your email client to send to Roveniq Technologies...');
    });
  }

  // Copy Message to Clipboard
  if (btnCopy) {
    btnCopy.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      navigator.clipboard.writeText(data.structuredText).then(() => {
        showToast('✓ Project inquiry copied to clipboard!');
      }).catch(() => {
        showToast('Unable to copy. Please select text manually.');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   5. Direct Copy Actions (Email & Phone)
   -------------------------------------------------------------------------- */
function initCopyActions() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`✓ Copied "${textToCopy}" to clipboard!`);
      }).catch(() => {
        showToast(`Copied text: ${textToCopy}`);
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Modal Handlers
   -------------------------------------------------------------------------- */
function initModalHandlers() {
  const modalBackdrop = document.getElementById('project-modal');
  const closeBtns = document.querySelectorAll('.modal-close-trigger');

  window.openModal = function(title, description, techTags = [], demoUrl = '#') {
    if (!modalBackdrop) return;
    const modalTitle = document.getElementById('modal-project-title');
    const modalDesc = document.getElementById('modal-project-desc');
    const modalTech = document.getElementById('modal-project-tech');
    const modalAction = document.getElementById('modal-action-btn');

    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.innerHTML = description;

    if (modalTech) {
      modalTech.innerHTML = techTags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
    }

    if (modalAction) {
      modalAction.href = `https://wa.me/8801759957439?text=${encodeURIComponent(`Hello Washifur, I saw the "${title}" project and would like to build something similar!`)}`;
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  closeBtns.forEach(btn => {
    btn.addEventListener('click', window.closeModal);
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        window.closeModal();
      }
    });
  }

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   7. Back to Top Button
   -------------------------------------------------------------------------- */
function initScrollTop() {
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   8. Global Toast Notification
   -------------------------------------------------------------------------- */
let toastTimeout;
window.showToast = function(msg) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>💬</span> <span>${msg}</span>`;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
};
