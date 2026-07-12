"use client";

const addressParts = ["hello", "bloxdungeon", "com"] as const;

export default function EmailLink() {
  const openEmail = () => {
    window.location.href = `mailto:${addressParts[0]}@${addressParts[1]}.${addressParts[2]}`;
  };

  return (
    <button className="email-link" type="button" onClick={openEmail}>
      {addressParts[0]}<span aria-hidden="true">@</span>{addressParts[1]}<span aria-hidden="true">.</span>{addressParts[2]}
    </button>
  );
}
