# NOTES.md

## Summary of Changes

I focused on fixing the highest-impact issues affecting application correctness, stability, and user experience. The changes include correcting task filtering logic, removing an artificial API delay, handling invalid status values gracefully, resetting pagination when filters change, improving loading and error state handling, validating pagination inputs, and adding search debouncing to reduce unnecessary API requests.

## What I Chose Not To Change

I did not modify the Oracle reference artifacts beyond consistency-related fixes, as they are not part of the locally running application. I also did not make broader architectural or UI refactoring changes because the exercise emphasized focused fixes within a limited timebox.

## Biggest Remaining Risk

The biggest remaining risk is the lack of automated test coverage around filtering, pagination, and API validation. Several of the identified issues could have been detected earlier with integration and regression tests. As the application grows, missing test coverage may allow similar bugs to be reintroduced.

## AI Usage

I used AI tools to assist with code review, bug investigation, and understanding potential fixes. All code changes were manually reviewed, understood, tested locally, and verified before being committed.
