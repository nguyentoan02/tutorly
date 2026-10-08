# Tutorly product blueprint

This document describes a **proposed** tutor marketplace and learning platform. The application currently implements an English landing page only. It does **not** yet collect tutoring requests or have a tutor catalog, live match results, LMS accounts, lesson booking, payments, or AI assignment generation.

## 1. Learner journey

1. **Start a request:** learner chooses a subject and describes a goal, current level, preferred time, and contact details.
2. **Complete a learning profile:** collect optional budget, timezone, lesson format, language, and teaching preferences as needed. Keep the first form short; ask for richer preferences only when they affect a match.
3. **Review matches:** show eligible tutors with an explainable match score, availability, transparent hourly price, and profile details. The learner can change criteria and compare alternatives.
4. **Book and learn:** confirm a lesson, pay through a payment provider, meet the tutor, and manage the lesson from a shared workspace.
5. **Continue:** tutor and learner use assignments, feedback, and progress history to guide the next lesson.

## 2. Matching algorithm

### 2.1 Eligibility before ranking

Exclude a tutor from the candidate set only when a required constraint fails: verified status, supported subject and level, compatible lesson format or language, bookable availability, and any hard budget limit the learner explicitly sets. Distinguish a strict requirement from a preference in the UI. Never infer protected characteristics as matching inputs.

### 2.2 Proposed score

For each eligible tutor, normalize each available factor to `0..1` and calculate:

```text
match_strength = 100 × (
  0.35 × goal_and_subtopic_fit
  + 0.25 × schedule_overlap
  + 0.20 × teaching_approach_fit
  + 0.10 × budget_fit
  + 0.10 × learner_level_fit
)
```

These weights are product hypotheses, not measured model parameters. Validate them with user research and real outcomes before presenting a live percentage. For example, hypothetical factor values of `0.90`, `0.80`, `0.75`, `1.00`, and `0.90` produce `85.5/100`, rounded to `86%`. This example does not describe a real tutor.

| Factor | Proposed evidence | Weight |
| --- | --- | ---: |
| Goal and subtopic fit | Tutor expertise tags compared with the learner's stated goal | 35% |
| Schedule overlap | Number and quality of mutually available lesson windows, in the learner's timezone | 25% |
| Teaching approach fit | Structured practice, conversational work, exam coaching, or other declared preferences | 20% |
| Budget fit | Actual hourly price compared with the learner's stated range | 10% |
| Learner level fit | Tutor experience with the learner's current level | 10% |

If a factor is missing, renormalize the weights of known factors and display a **provisional** result rather than treating missing data as a zero. Suppress a percentage when evidence coverage is too low (suggested initial threshold: 70% of weighted inputs). Show the top two or three factual reasons beside each result, such as “teaches your subtopic” or “available on your preferred evening”; do not ask a language model to invent explanations.

### 2.3 Ranking quality and safeguards

- Separate tutor eligibility from rank so a high score cannot override a hard constraint.
- Break near ties with a small amount of candidate rotation to avoid repeatedly favoring already popular tutors.
- Let learners adjust preferences and see why rankings change. Offer a way to browse all eligible tutors.
- Track match-to-contact, booking, lesson completion, and explicit learner feedback. Use these signals only with appropriate consent and privacy controls.
- Audit candidate exposure and outcomes for systematic bias; do not score protected traits or let price become a proxy for quality.
- Version scoring rules so past results remain explainable. Keep enough non-sensitive decision data to investigate disputes without retaining unnecessary personal information.

## 3. LMS scope

### Lesson scheduling

Tutor availability is stored with a timezone and an explicit recurrence rule. A booking reserves a slot atomically, preventing double booking. Both parties see confirmed, pending, rescheduled, cancelled, and completed states. Notifications link back to the same lesson record. Cancellation and refund rules must be visible before payment.

### Assignments and progress

An assignment belongs to a course or learner-tutor relationship and contains instructions, due date, attachments, rubric, and version. Learners can submit work; tutors can comment, return it for revision, and mark it complete. A progress view summarizes completed lessons, assignment outcomes, and goals without claiming a precise skill score where evidence is thin.

### Lesson payments

Display the currency, hourly price, platform fee if any, and total before confirmation. Use a regulated payment provider for collection and tutor payouts; never store card numbers in Tutorly. Use server-side webhooks, idempotency keys, and an append-only internal ledger to reconcile booking, charge, refund, and payout events. Choose a marketplace payment flow only after confirming the business model, supported countries, tax responsibilities, and provider requirements. Stripe Connect is one possible provider, not a dependency of the current app. See [Stripe Connect documentation](https://docs.stripe.com/connect).

### AI-assisted assignments from tutor material

1. A tutor uploads or selects material they are allowed to use. Store it privately with access scoped to the tutor and learner relationship.
2. Extract text and structure, segment it by topic, and index it for retrieval. Preserve document/page references.
3. A tutor chooses learning objective, level, question types, language, and difficulty. Retrieve relevant source passages and generate draft questions with answer keys and source citations.
4. Validate that each answer is supported by the source, check for duplicates and age-inappropriate content, and flag low-confidence items. The tutor reviews and edits every draft before publishing.
5. Store the approved assignment version. Learner work and feedback can inform future suggestions only with consent and access controls.

Retrieval can be implemented with a provider's file search or an owned vector index; the current app has neither. See [OpenAI File Search documentation](https://platform.openai.com/docs/guides/tools-file-search) for one possible approach. Do not upload copyrighted, private, or student material to an AI provider without the right permissions and a reviewed data policy.

## 4. Suggested data and services

| Area | Core records | Key rule |
| --- | --- | --- |
| Identity | User, role, consent, contact preferences | Separate learner, tutor, and admin permissions |
| Marketplace | TutorProfile, Expertise, Price, Availability, LearnerRequest, MatchResult | Version ranking inputs and explanations |
| Learning | Course, Lesson, Assignment, Submission, Feedback, Goal | Scope records to the relevant learner and tutor |
| Commerce | PaymentIntent, LedgerEntry, Refund, Payout | Reconcile from trusted provider webhooks |
| AI | SourceDocument, IndexJob, GenerationJob, DraftItem, ReviewDecision | Publish only tutor-approved content |

A future production system should use a durable database, private object storage for files, a job queue for document processing and notifications, and a payment provider. Public upload, matching, and payment routes need authentication, rate limits, audit logs, and clear retention policies.

## 5. Delivery sequence

1. **Current:** landing page, subject overview, proposed match explanation, and platform vision.
2. **Marketplace foundation:** learner requests, verified tutor profiles, availability, learner preferences, match ranking, and explanations.
3. **LMS core:** accounts, lesson calendar, assignments, submissions, feedback, and notifications.
4. **Payments:** booking checkout, provider webhooks, refunds, tutor payouts, and reconciliation.
5. **AI practice:** permissioned document ingestion, grounded exercise drafts, tutor review, and quality monitoring.

Do not label stages 2–5 as available in the public product until their real user flows are implemented and verified.
