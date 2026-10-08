---
name: tutorly-ui-review
description: Audit a Tutorly page or component for visual consistency, accessibility, usability, and responsive behavior.
---

# Tutorly UI review

Use this skill when asked to review or polish an existing Tutorly interface. Read `../../DESIGN.md` and inspect the actual component or page, including its available responsive preview. Review the user journey as well as the code.

Look for concrete issues: unclear first-screen value, competing CTAs, unverified claims, inconsistent token use, weak contrast, missing focus states, unlabeled controls, broken keyboard or touch interactions, overflow, cramped type, placeholder links, and inappropriate image alternatives. Use WCAG 2.2 AA as the accessibility baseline, including 4.5:1 contrast for normal text and the applicable pointer target size rules. Check loading, empty, error, and success states when the reviewed UI has them.

Report actionable findings in severity order with file and line references. Explain the user impact and suggest a specific fix. Distinguish observed failures from risks that could not be verified. If the user asked to fix the page, implement the fixes and review the result; do not stop at a list of recommendations.
