---
hip: 1
network: Ethereum
title: HIP Purpose and Guidelines
status: Implemented
author: E. Folch
created: 'March 18, 2022'
type: Governance
---

## What is an HIP?

HIP stands for Haptic Improvement Proposal, it has been adapted from the HIP (Ethereum Improvement Proposal). The purpose of this process is to ensure changes to Haptic are transparent and well governed. An HIP is a design document providing information to the Haptic community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

## What is an HCCP?

HCCP stands for Haptic Configuration Change Proposal. HCCP's are documents for making a case for modifying one of the system configuration variables. The intent is to provide a clear and detailed history behind each configuration change and the rationale behind it at the time it was implemented. The author of the document is responsible for building consensus within the community and documenting dissenting opinions.

## HIP & HCCP Rationale

We intend HIPs and HCCPs to be the primary mechanisms for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Haptic. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single HIP contain a single key proposal or new idea. The more focused the HIP, the more successful it is likely to be.

An HIP or HCCP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

## HIP Work Flow

Parties involved in the process are the _author_, the [_HIP editors_](#hip-editors), the [Haptic Core Contributors] and the Haptic community.

:warning: Before you begin, vet your idea, this will save you time. Ask the Haptic community first if an idea is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intend effect. The appropriate public forum to gauge interest around your HIP or HCCP is [the Haptic Discord].

Your role as the champion is to write the HIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful HIP will move along:

![HIP-workflow.png](https://github.com/hapticfinance/HIPs/blob/master/static/hip-workflow.png)

Each status change is requested by the HIP author and reviewed by the HIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your HIP. The HIP editors will process these requests as per the conditions below.

- **Draft** -- This HIP is work-in-progress and being reviewed by a Haptic Council member with the champion.
- **Feasibility** -- This HIP is assigned with a Core Contributor and underdoing a feasibility study.
- **HC Review Pending** -- This HIP is being formally reviewed by the Haptic Council to decide on voting or sent back for feasibility study.
- **Vote Pending** -- This HIP is scheduled for voting on [our portal](https://haptic.finance/)
- **Approved** -- This HIP has passed community governance and is now being prioritised for development.
- **Rejected** -- This HIP has failed to reach community consensus.
- **Implemented** -- This HIP has been implemented and deployed to mainnet.

## What belongs in a successful HIP?

Each HIP or HCCP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the HIP, including the HIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the HIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Motivation (\*optional) - The motivation is critical for HIPs that want to change Haptic. It should clearly explain why the existing specification is inadequate to address the problem that the HIP solves. HIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver - All HIPs must be in the public domain. See the bottom of this HIP for an example copyright waiver.

## HIP Formats and Templates

HIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that HIP as follows: `assets/hip-X` (for hip **X**). When linking to an image in the HIP, use relative links such as `../assets/hip-X/image.png`.

## HIP Header Preamble

Each HIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` hip:` <HIP number> (this is determined by the HIP editor)

` title:` <HIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread at research.haptic.finance\>

` status:` < Draft \| Feasibility \| HC Review Pending \| Vote Pending \| Approved \| Rejected \| Implemented >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <HIP number(s)>

` * resolution:` \<a url pointing to the resolution of this HIP\>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the HIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an HIP is in **Draft** or **Feasibility** status, a `discussions-to` header will indicate the URL at [research.haptic.finance](https://research.haptic.finance/) where the HIP is being discussed.

#### `created` header

The `created` header records the date that the HIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the HIP was updated with "substantial" changes. This header is only valid for HIPs of Draft and Active status.

#### `requires` header

HIPs may have a `requires` header, indicating the HIP numbers that this HIP depends on.

## Auxiliary Files

HIPs may include auxiliary files such as diagrams. Such files must be named HIP-XXXX-Y.ext, where “XXXX” is the HIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## HIP Editors

The current HIP editors are

` * Albert (@alberthaptic)`

` * Folch (@folch#0001)`

## HIP Editor Responsibilities

For each new HIP that comes in, an editor does the following:

- Read the HIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the HIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the HIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the HIP is ready for the repository, the HIP editor will:

- Assign an HIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this HIP)

- Merge the corresponding pull request

- Send a message back to the HIP author with the next step.

Many HIPs are written and maintained by developers with write access to the Ethereum codebase. The HIP editors monitor HIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on HIPs. We merely do the administrative & editorial part.

## History

The HIP document was derived heavily from the HIP Ethereum Improvement Proposal document in many places text was simply copied and modified. Any comments about the HIP document should be directed to the HIP editors. The history of the HIP is quoted below from the HIP document for context:

- _"This document (HIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

June 10, 2019: HIP 1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/HapticFinance/), which is also available by clicking on the History button in the top right of the HIP.

### Bibliography

[the haptic finance discord]: https://discord.gg/gNFfBfV4he
[pull request]: https://github.com/hapticfinance/HIPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/
[haptic finance engineering team]: https://github.com/orgs/HapticFinance/people

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
