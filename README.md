# HIP [Discord](https://discord.gg/ahJVRvjyzk) [Twitter](https://twitter.com/Haptic_Finance) [Telegram](https://t.me/HapticFinance)

Haptic Improvement Proposals (HIP) describe standards for the Haptic platform, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [HIP-1](https://github.com/hapticfinance/HIPss/blob/master/content/hips/hip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your HIP to your fork of the repository. There is a [template HIP here](hip-x.md).
4.  Submit a Pull Request to Haptic's [HIPs repository](https://github.com/hapticfinance/HIPs).

Your first PR should be a first draft of the final HIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new HIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [research.haptic.finance](https://research.haptic.finance) where people can discuss the HIP as a whole.

If your HIP requires images, the image files should be included in a subdirectory of the `assets` folder for that HIP as follow: `assets/hip-X` (for hip **X**). When linking to an image in the HIP, use relative links such as `../assets/hip-X/image.png`.

When you believe your HIP is mature and ready to progress past the Draft phase, you should reach out to a Haptic Council member on discord by searching members with the "Haptic Council" role or finding them within the #governance channel. The Haptic Council will schedule in a call with the HIP author to go through the HIP in more detail.

Once assessed, a HIP is moved into `Feasibility` and a Core Contributor is assigned. The Core Contributor will work with the author to conduct a feasibility study. Once the Author and the Core Contributor are satisfied, a HIP is moved to `HC Review Pending`. Once the Haptic Council has formally reviewed the HIP during the HIP presentation they can either move it to a vote or send it back to `Feasability`. A vote is conducted within the `hapticfinance.eth` snapshot space connected to our [dApp](https://haptic.finance/) . If a vote by the Haptic Council reaches a super majority, the HIP is moved to `Approved`, otherwise it is `Rejected`.

Once the HIP has been implemented by either the protocol DAO or the HIP author and relevant parties, the HIP is assigned the `Implemented` status. There is a 100 pLYS (subject to changes) bounty for proposing a HIP that reaches the `Implemented` phase.

# HIP Statuses

- **Draft** - The initial state of a new HIP before the Haptic Council and core contributors have assessed it.
- **Feasibility** - a HIP that is being assessed for feasibility with an assigned Core Contributor
- **EC_Review_Pending** - a HIP that is awaiting a Haptic Council Review after the Author and Core Contributor are satisfied with feasibility
- **Vote_Pending** - a HIP that is awaiting a vote.
- **Approved** - a HIP that has successfully reached a super majority Haptic Council vote in favour.
- **Rejected** - a HIP that has failed to reach a super-majority Haptic Council vote in favour.
- **Implemented** - a HIP that has been released to main-net.

# Validation

HIPs must pass some validation tests.

It is possible to run the HIP validator locally:

```
npm install (if not done already)
npm run test
```

# Automerger

The HIP repository contains an "auto merge" feature to ease the workload for HIP editors. If a change is made via a PR to a draft HIP, then the authors of the HIP can Github approve the change to have it auto-merged by the [hip-automerger](https://github.com/bakaoh/hip_automerger) bot.
