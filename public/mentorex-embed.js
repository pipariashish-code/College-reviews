/**
 * MentoreX 1-Line Universal Embed Script
 * Embeds Scholarship Finder, Loan Eligibility Calculator, and College Tools directly into any website.
 * Usage: <script src="https://ais-pre-sgivg5k3uiruc47wddhrxr-240390082362.asia-southeast1.run.app/mentorex-embed.js" async></script>
 */
(function() {
  if (window.__MENTOREX_EMBED_INITIALIZED__) return;
  window.__MENTOREX_EMBED_INITIALIZED__ = true;

  const BASE_URL = "https://ais-pre-sgivg5k3uiruc47wddhrxr-240390082362.asia-southeast1.run.app";

  function init() {
    // 1. Check for dedicated container divs in user's HTML
    const scholarshipContainers = document.querySelectorAll(".mentorex-scholarships, #mentorex-scholarships");
    scholarshipContainers.forEach(container => {
      if (!container.dataset.loaded) {
        container.dataset.loaded = "true";
        const iframe = document.createElement("iframe");
        iframe.src = `${BASE_URL}/tools/scholarship-finder`;
        iframe.style.width = "100%";
        iframe.style.height = "900px";
        iframe.style.border = "none";
        iframe.style.borderRadius = "12px";
        iframe.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
        container.appendChild(iframe);
      }
    });

    const loanContainers = document.querySelectorAll(".mentorex-loan-calculator, #mentorex-loan-calculator");
    loanContainers.forEach(container => {
      if (!container.dataset.loaded) {
        container.dataset.loaded = "true";
        const iframe = document.createElement("iframe");
        iframe.src = `${BASE_URL}/tools/loan-eligibility`;
        iframe.style.width = "100%";
        iframe.style.height = "900px";
        iframe.style.border = "none";
        iframe.style.borderRadius = "12px";
        iframe.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
        container.appendChild(iframe);
      }
    });

    // 2. Inject sleek floating trigger button & popup modal
    createFloatingModal();
  }

  function createFloatingModal() {
    if (document.getElementById("mentorex-floating-launcher")) return;

    // Floating Button
    const launcher = document.createElement("button");
    launcher.id = "mentorex-floating-launcher";
    launcher.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
      <span>Scholarships & Loan Tools</span>
    `;

    Object.assign(launcher.style, {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      zIndex: "999999",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      border: "none",
      borderRadius: "50px",
      padding: "12px 22px",
      fontSize: "14px",
      fontWeight: "700",
      fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
      cursor: "pointer",
      boxShadow: "0 6px 20px rgba(37, 99, 235, 0.45)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    });

    launcher.onmouseenter = () => launcher.style.transform = "scale(1.05)";
    launcher.onmouseleave = () => launcher.style.transform = "scale(1)";

    // Modal Backdrop
    const modalBackdrop = document.createElement("div");
    modalBackdrop.id = "mentorex-modal-backdrop";
    Object.assign(modalBackdrop.style, {
      display: "none",
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(10, 15, 29, 0.8)",
      backdropFilter: "blur(6px)",
      zIndex: "1000000",
      justifyContent: "center",
      alignItems: "center",
      padding: "16px",
      boxSizing: "border-box"
    });

    // Modal Window
    const modalWindow = document.createElement("div");
    Object.assign(modalWindow.style, {
      width: "100%",
      maxWidth: "1100px",
      height: "90vh",
      maxHeight: "900px",
      backgroundColor: "#0d1527",
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
      overflow: "hidden",
      border: "1px solid #1e293b",
    });

    // Modal Header with Tabs and Close Button
    const header = document.createElement("div");
    Object.assign(header.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 20px",
      backgroundColor: "#090d16",
      borderBottom: "1px solid #1e293b"
    });

    const tabContainer = document.createElement("div");
    Object.assign(tabContainer.style, {
      display: "flex",
      gap: "8px"
    });

    const tabs = [
      { id: "scholarship", label: "🎓 Scholarships & Grants", path: "/tools/scholarship-finder" },
      { id: "loan", label: "🧮 Loan Eligibility Calculator", path: "/tools/loan-eligibility" },
      { id: "compare", label: "⚖️ Fee Comparison", path: "/tools/college-fee-comparison" }
    ];

    const iframe = document.createElement("iframe");
    iframe.src = `${BASE_URL}/tools/scholarship-finder`;
    Object.assign(iframe.style, {
      width: "100%",
      flex: "1",
      border: "none",
      backgroundColor: "#0a0f1d"
    });

    tabs.forEach((tab, index) => {
      const btn = document.createElement("button");
      btn.innerText = tab.label;
      btn.dataset.path = tab.path;
      Object.assign(btn.style, {
        background: index === 0 ? "#2563eb" : "transparent",
        color: index === 0 ? "#ffffff" : "#94a3b8",
        border: "none",
        padding: "8px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "13px",
        transition: "all 0.15s"
      });

      btn.onclick = () => {
        tabContainer.querySelectorAll("button").forEach(b => {
          b.style.background = "transparent";
          b.style.color = "#94a3b8";
        });
        btn.style.background = "#2563eb";
        btn.style.color = "#ffffff";
        iframe.src = `${BASE_URL}${tab.path}`;
      };

      tabContainer.appendChild(btn);
    });

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    Object.assign(closeBtn.style, {
      background: "transparent",
      color: "#94a3b8",
      border: "none",
      fontSize: "28px",
      cursor: "pointer",
      padding: "0 8px",
      lineHeight: "1"
    });

    closeBtn.onclick = () => {
      modalBackdrop.style.display = "none";
    };

    modalBackdrop.onclick = (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.style.display = "none";
      }
    };

    launcher.onclick = () => {
      modalBackdrop.style.display = "flex";
    };

    header.appendChild(tabContainer);
    header.appendChild(closeBtn);
    modalWindow.appendChild(header);
    modalWindow.appendChild(iframe);
    modalBackdrop.appendChild(modalWindow);

    document.body.appendChild(launcher);
    document.body.appendChild(modalBackdrop);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
