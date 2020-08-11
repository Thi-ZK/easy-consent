User Tracking / Cookie Consent Modal.

It has two options:

One with cookies allowance options for user to choose and the other is just the warning modal.

Very simple to be used.

Usage:

All you have to do is to place a script tag preferably in the head tag of your website.

Version with cookies allowance options:

<script src="https://easy-consent.herokuapp.com/modal_request/modal_ns?domain=<your domain>&lang=en"></script>

Version with only warning:

<script src="https://easy-consent.herokuapp.com/modal_request/modal_warn?domain=<your domain>&lang=en"></script>

The modal requires the allowance of the domain in the database.

The modal comes with very interesting "tracking friendly" features and has 0 dependencies.

Main features:

It has a "first pageview" prevention dataLayer push that handles any situation, also with a link for cookie options. The modal is completely prepared for this and pushes in the dataLayer
an event with gclid & utm`s and referrer data from the first pageview of the user.

That's not only helpful to prevent losing the first pageview of the user session or losing the user session as a whole, but also prevents losing the user reference which is very important data for marketers and campaigns.

Example:

Imagine the user visited the website and didn't consent, then he browses to another page and only then consents. In a normal cookie / tracking modal the first pageview of his / her session
would be from this last browsed page and not from the real first page he visited. And now imagine the user came from a link in a facebook ad. Google analytics only sends reference data
in the first pageview of the session in the collect request. This way this reference is lost forever in this user session is gonna be registered as a "direct" session.

With this feature, the tracker can assure easily just append the reference in the ga request (via gtm / hardcoded, ga field to sets) with perfect firing timing.

Another feature is a standard cookie setting very easy to read about the consent choices.

The modal is also very light with very few code, summing CSS, JS and HTML lines around 1000 lines of code (when not minified ofc).

It also works with most browsers and with no changes in the original from IE 9 above.

It is also responsive for any device size.

Is also has a version with cookie scanning, but it is still being made.

<script src="https://easy-consent.herokuapp.com/modal_request/modal?domain=<your domain>&lang=en"></script>
