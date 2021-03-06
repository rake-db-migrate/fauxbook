# fauxbook

[Click here for live website.][live-link]

[live-link]: http://fauxbook.danphillips.io

## Minimum Viable Product

**fauxbook** is a facebook clone built using **Ruby on Rails** and **React.js**. Users of the site can:

- [x] Create an account.
- [x] Log in and out.
- [x] Create a personal profile.
- [x] Edit their own profile.
- [x] Upload a profile picture.
- [x] Upload a cover photo.
- [x] Create text posts.
- [x] Create photo posts.
- [x] Add other users as friends.
- [x] See friend's personal profiles.
- [x] Post on friend's personal profiles.
- [x] See a feed of friend's posts.
- [x] Search for other users.
- [x] Comment on friend's posts.
- [x] Like friend's posts.
- [x] Receive Notifications for relevant events.

Bonus:
- [ ] Summary of recent actions by friends.
- [ ] Message other users!

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./views.md
[components]: ./components.md
[stores]: ./stores.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### [Phase 1][phase-one]: Backend setup and User Authentication (0.5 Days) (0.5 Days Total)

**Objective:** Functioning Rails project with Authentication.

- [x] Create Rails' `User` backend, model and controller.
- [x] Create Rails' `Session` controller.
- [x] Implement authentication and session backend support.
- [x] Create landing page with sign in and sign up features.
- [x] Create temporary landing page for a logged-in `User`.
- [x] Users can Sign Up, Log In, and Log Out.

### [Phase 2][phase-two]: Basic Profile Creation (0.5 Days) (1 Day Total)

**Objective:** Ability to create a profile.

- [x] Create Rails' `Profile` backend, model, and controller.
- [x] Create JSON-API for `Profile` Create, Show, Update. (Dependent Destroy of user).
- [x] Create Flux `ProfileStore`.
- [x] Create React `App`, `Display`, `Profile`, `ProfileDisplay`, `AboutProfileDisplay` components.
- [x] Users can Log In and see their own `Profile`.

### [Phase 3][phase-three]: Basic Profile Editing (0.25 Days) (1.25 Days Total)

**Objective:** Ability to edit profile.

- [x] Create React `EditProfileDisplay`, `EditProfileAttribute`, and `EditProfileAttributeForm`.
- [x] Users can Edit their own `Profile`.

### [Phase 4][phase-four]: Profile and Cover Photo Upload (0.5 Days) (1.75 Days Total)

**Objective:** Users can upload a Profile Picture and Cover Photo for their Profile.

- [x] Implement backend support for image uploading.
- [x] Create React `ProfileHeader`, and `MainProfileDisplay`.
- [x] Users can upload a profile picture, a cover photo, and change it.

### [Phase 5][phase-five]: Users Text and Photo Posts (1 Day) (2.75 Days Total)

**Objective:** Users can create Text and Photo posts on their own profiles.

- [x] Create Rails' `Post` backend, model, and controller.
- [x] Create JSON-API for Post Create, Show, Index, Destroy.
- [x] Create Flux `PostStore`.
- [x] Create React `Feed`, `PostIndex`, `PostForm`, and `PostItem`.
- [x] Users now land on their Feed view.
- [x] Users can make and delete text/photo posts and see a feed of posts.

### [Phase 6][phase-six]: Friendship and Profile Posting (1 Day) (3.75 Days Total)

**Objective:** Users can add other users and friends and post on their profiles.

- [x] Create Rails' `Friendship` backend, model, and controller.
- [x] Create JSON-API for Friendship Create, Index, Update, and Destroy.
- [x] Create Flux `FriendStore` and `FriendRequestStore`
- [x] Create React `Navigation`, `FriendRequestNotificationButton`, `FriendRequestIndex`, `FriendRequestItem`, `FriendIndex`, `FriendItem`, `FriendRequestButton`, and `FriendSummary`.
- [x] Users can now add friends, accept and reject friend requests, and see information about their friends, and their friend's friends on their profiles.

### [Phase 7][phase-seven]: Navigation and User Search (0.5 Days) (4.25 Days Total)

**Objective:** Users can search for other users to add.

- [x] Create Flux `SearchedUserStore`.
- [x] Create React `Search`, `SearchedUserIndex`, and `SearchedUserItem`.
- [x] Users can use the search bar to find other users of the site, visit their profiles, and add them as a friend.

### [Phase 8][phase-eight]: Commenting (1 Day) (5.25 Days Total)

**Objective:** Users can comment on posts, and other comments, one-level deep.

- [x] Create Rails' `Comment` backend, model and controller.
- [x] Create JSON-API for Comment Create, Index, and Destroy.
- [x] Create support for Post Comments in Post Flux `PostStore`.
- [x] Create React `CommentButton`, `CommentForm`, `CommentIndex`, and `CommentItem`.
- [x] Users can now comment on posts and other comments, up to one-level deep.

### [Phase 9][phase-nine]: Liking (0.75 Days) (6 Days Total)

**Objective:** Users can like posts and comments.

- [x] Create Rails' `Like` backend, model, and controller.
- [x] Create JSON-API for Like Create, Index, and Destroy.
- [x] Create support for Likes in `PostStore`.
- [x] Create React `LikeButton`.
- [x] Users can Like and unLike posts/comments and see Like counts.

### [Phase 10][phase-ten]: Notifications (0.5 Days) (6.5 Days Total)

**Objective:** Users get notifications for all relevant events.

- [x] Create Rails' `Notification` backend, model, and controller.
- [x] Create JSON-API for Notification Create, Update
- [x] Create Flux `NotificationStore`.
- [x] Create React `NotificationButton`, `NotificationIndex`, `NotificationItem`
- [x] Users receive notifications whenever a post or comment of their's is liked or commented upon.

### [Phase 11][phase-eleven]: Polish (1.5 Days) (8 Days Total)

**Objective::** Final styling and UI improvements.

- [x] Add React `LeftSideBarNavigation`, `ProfileSummary`
- [x] Finalize CSS for entire site.
- [x] Ensure clear and responsive usability of entire site with excellent feedback to the user.

### Bonuses:

- [ ] Implement an Action Summary.
- [ ] Implement User to User Messaging.

[phase-one]: ./phases/phase1.md
[phase-two]: ./phases/phase2.md
[phase-three]: ./phases/phase3.md
[phase-four]: ./phases/phase4.md
[phase-five]: ./phases/phase5.md
[phase-six]: ./phases/phase6.md
[phase-seven]: ./phases/phase7.md
[phase-eight]: ./phases/phase8.md
[phase-nine]: ./phases/phase9.md
[phase-ten]: ./phases/phase10.md
[phase-eleven]: ./phases/phase11.md
