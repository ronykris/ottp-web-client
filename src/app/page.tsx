'use client';
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="flex flex-col items-start justify-center px-4 py-8">
    <h1 className="text-5xl font-bold mb-4">Collaboration, verified.</h1>
    <p className="mb-4">
      Open to the Public (OTTP) is an open protocol.<br />
      - Co-create with your network.<br />
      - Attest to contributions onchain.<br />
      - Own your collaboration graph, forever.
    </p>
    <p className="mb-4">
      We’re on a mission to democratize innovation.<br />
      No degree required. Just pure value creation.
    </p>

    <div className="mb-8">
      <Link href="/Attest" className="text-blue-600 hover:underline">Own Your Graph</Link>
      
      <p>- Start attesting to get your OTTP ID.</p>
    </div>

    <div className="mb-8">
      <a href="#" className="text-blue-600 hover:underline">Connect</a>
      <p>- Say gm on Warpcast /ottp channel.</p>
    </div>

    <div className="mb-8">
      <a href="#" className="text-blue-600 hover:underline">Get Involved</a>
      <p>- Interested in building this open-source project together? Join us!</p>
    </div>

    <div className="mb-8">
      <a href="#" className="text-blue-600 hover:underline">Build</a>
      <p>- Create the future of work onchain using the OTTP SDK. What will you build?</p>
    </div>

    <a href="#" className="text-blue-600 hover:underline">Documentation</a>
  </div>
  );
}
