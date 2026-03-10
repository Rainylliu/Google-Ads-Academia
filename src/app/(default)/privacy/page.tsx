import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - biostate.AI",
  description: "Biostate AI Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <div
      style={{
        maxWidth: "1080px",
        margin: "0 auto",
        padding: "40px 24px 40px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingBottom: "75%",
        }}
      >
        <iframe
          src="/pdf/Biostate%20AI%20-%20Privacy%20Policy.pdf#toolbar=0&navpanes=0&scrollbar=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="Biostate AI Privacy Policy PDF"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a
          href="/pdf/Biostate%20AI%20-%20Privacy%20Policy.pdf"
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
