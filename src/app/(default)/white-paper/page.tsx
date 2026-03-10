import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIRT+PERD White Paper - biostate.AI",
  description: "Biostate AI BIRT+PERD technology white paper.",
};

export default function WhitePaperPage() {
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
          src="https://cdn.prod.website-files.com/67a3b8fb7bd426c2ac36fa56/67fe575bfa9b1fa07d980457_20250402-BIRT%2BPERD%20One%20Page.pdf#toolbar=0&navpanes=0&scrollbar=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          title="BIRT+PERD White Paper PDF"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a
          href="https://cdn.prod.website-files.com/67a3b8fb7bd426c2ac36fa56/67fe575bfa9b1fa07d980457_20250402-BIRT%2BPERD%20One%20Page.pdf"
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
