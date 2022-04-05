import * as React from 'react'
import { Helmet } from 'react-helmet'

import Main from '../layout/Main'

// markup
const IndexPage = () => (
  <Main>
    <Helmet title="Haptic Improvement Proposals" />
    <h1 className="page-heading">
      Haptic Improvement Proposals{' '}
      <a
        href="https://discordapp.com/channels/951945913046294528/"
        rel="nofollow"
      >
        <img
          className="max-w-full"
          src="https://img.shields.io/discord/951945913046294528.svg?color=768AD4&amp;label=discord"
          alt="Discord"
          data-canonical-src="https://img.shields.io/discord/951945913046294528.svg?color=768AD4&amp;label=discord"
        />
      </a>
    </h1>
    <p>
      Haptic Improvement Proposals (HIPs) describe standards for the
      Haptic platform, including core protocol specifications, client APIs,
      and contract standards.
    </p>

    <h2>Contributing</h2>
    <ol>
      <li>
        Review <a href="/hips/hip-1">HIP-1</a>.
      </li>
      <li>
        Fork the repository by visiting the HIPs{' '}
        <a href="https://github.com/hapticfinance/HIPs">repo</a> and pressing
        "Fork" in the top right.
      </li>
      <li>
        Add your HIP to your fork of the repository. There is a{' '}
        <a href="https://github.com/hapticfinance/HIPs/blob/master/hip-x.md">
          template HIP here
        </a>
        .
      </li>
      <li>
        Submit a Pull Request to Haptic's{' '}
        <a href="https://github.com/hapticfinance/HIPs">HIPs repository</a>.
      </li>
    </ol>

    <p>
      Your first PR should be a first draft of the final HIP. It must meet the
      formatting criteria enforced by the build (largely, correct metadata in
      the header). An editor will manually review the first PR for a new HIP and
      assign it a number before merging it. Make sure you include a <code>discussions-to</code> header with the URL to a discussion forum or
      open GitHub issue where people can discuss the HIP as a whole.
    </p>
    <p>
      If your HIP requires images, the image files should be included in a
      subdirectory of the `assets` folder for that HIP as follow: <code>hip/assets/hip-X</code> (for hip <b>X</b>). When linking to an
      image in the HIP, use relative links such as{' '}
      <code>../assets/hip-X/image.png</code>.
    </p>
    <p>
      When you believe your HIP is mature and ready to progress past the{' '}
      <code>Draft</code> phase, you should reach out to a Haptic Council member
      on discord by searching members with the "Haptic Council" role or finding
      them within the #governance channel. The Haptic Council will schedule in
      a call with the HIP author to go through the HIP in more detail.
    </p>

    <p>
      Once assessed, a HIP is moved into <code>Feasibility</code> and a Core
      Contributor is assigned. The Core Contributor will work with the author to
      conduct a feasibility study. Once the Author and the Core Contributor are
      satisfied, a HIP is moved to <code>HC Review Pending</code>. Once the
      Haptic Council has formally reviewed the HIP during the HIP presentation
      they can either move it to a vote or send it back to{' '}
      <code>Feasability</code>. A vote is conducted within the{' '}
      <code>hapticfinance.eth</code> snapshot space connected on the
      upcoming staking dApp. If a vote by
      the Haptic Council reaches a super majority, the HIP is moved to{' '}
      <code>Approved</code>, otherwise it is <code>Rejected</code>.
    </p>

    <p>
      Once the HIP has been implemented by either the protocol DAO or the HIP
      author and relevant parties, the HIP is assigned the{' '}
      <code>Implemented</code> status. Community members who successfully reach
      this stage are entitled to a reward from the Haptic Protocol.
    </p>

    <h2>HIP status terms</h2>
    <ul>
      <li>
        <strong>Draft</strong> - The initial state of a new HIP before the
        Haptic Council and core contributors have assessed it.
      </li>
      <li>
        <strong>Feasibility</strong> - a HIP that is being assessed for
        feasability with an assigned Core Contributor
      </li>
      <li>
        <strong>HC Review Pending</strong> - a HIP that is awaiting a Haptic
        Council Review after the Author and Core Contributor are satisfied with
        feasibility
      </li>
      <li>
        <strong>Vote Pending</strong> - a HIP that is awaiting a vote.
      </li>
      <li>
        <strong>Approved</strong> - a HIP that has successfully reached a super
        majority Haptic Council vote in favour.
      </li>
      <li>
        <strong>Rejected</strong> - a HIP that has failed to reach a
        supermajority Haptic Council vote in favour.
      </li>
      <li>
        <strong>Implemented</strong> - a HIP that has been released to main-net.
      </li>
    </ul>
  </Main>
)

export default IndexPage
