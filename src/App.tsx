/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Hero, 
  Problem, 
  KeyIdea, 
  WhatIsIt, 
  WhyDifferent, 
  Included, 
  HowItWorks, 
  ForWho, 
  Proof, 
  Pricing, 
  FinalMessage, 
  Footer 
} from "./components/Sections";

export default function App() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Hero />
      <Problem />
      <KeyIdea />
      <WhatIsIt />
      <WhyDifferent />
      <Included />
      <HowItWorks />
      <ForWho />
      <Proof />
      <Pricing />
      <FinalMessage />
      <Footer />
    </main>
  );
}
