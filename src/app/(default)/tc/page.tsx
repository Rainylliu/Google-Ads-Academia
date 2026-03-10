import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - biostate.AI",
  description:
    "Biostate AI terms and conditions for services and agreements.",
};

export default function TermsPage() {
  return (
    <div
      style={{
        maxWidth: "1080px",
        margin: "0 auto",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "85vh",
          overflow: "hidden",
          borderRadius: "8px",
          background: "#ffffff",
        }}
      >
        <iframe
          src="/pdf/T&C-03062026.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          style={{
            width: "calc(100% + 4px)",
            height: "calc(100% + 4px)",
            margin: "-2px",
            border: "none",
            display: "block",
          }}
          title="Biostate AI Terms and Conditions"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a
          href="/pdf/T&C-03062026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="book-a-call-btn book-a-call-btn-solid-teal"
        >
          Download PDF
          <span className="book-a-call-arrow">
            <span className="book-a-call-arrow-inner">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
