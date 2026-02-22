
# Jazz Almanac Meanjin

Your guide to jazz, improvised, and live music across Meanjin

almanac (n.) — a publication containing a calendar of events, useful reference information, and guidance on recurring cycles. A trusted companion for navigating what happens, where, and when.

## Concept

JAM is a curated online guide to the live jazz and jazz-adjacent music scene in Meanjin/Brisbane. It serves as a trusted reference, an almanac, for musicians, students, and audiences looking to discover and navigate the city's diverse weekly sessions.

Think of it as a zine that happens to be a website: opinionated, local, and useful.

## Audience

- Students and emerging musicians — finding sessions to attend, sit in at, and learn from

- Working musicians — visibility across the scene and where to connect

- The public — people who enjoy live music but don't know the scene well enough to navigate it alone

## Scope

Phase 1 (launch): A read-only almanac, maintained by a small editorial team. No auth, no user-generated content.
Phase 2 (later): One-off gig listings, user accounts, artist/venue submissions, sit-in availability.

## Core Directories

Four interconnected entities form the backbone of JAM.

1. Residencies
The core content. Recurring sessions — weekly, fortnightly, monthly — with enough detail to help someone decide if a night is for them: style, vibe, sit-in availability, format, door cost, time.

2. Projects
Bands, ensembles, duos, and other configurations. "Projects" rather than "bands" reflects how jazz musicians typically operate across multiple fluid groupings.

3. Artists
Individual musicians, linked to their projects. Essential because the jazz scene revolves around people — someone might be involved in three projects across three residencies in a single week.

4. Venues
The rooms where it happens. Venue character matters — a residency at a quiet wine bar reads differently from one at a late-night club, even if the music overlaps.

## Relationships

- A residency happens at a venue

- A residency features one or more projects

- A project is made up of artists

- An artist can belong to multiple projects

- These relationships allow JAM to answer key questions: What's on tonight? Where does this person play? What happens at this venue? Who's in this group?

# Site Structure:

Navigation?

- Tonight / This Week — the default landing view

- Residencies — the full browsable almanac, each residency will have its own page with a set structure. Maybe “see more like this” feature. 

- Projects — band and ensemble directory

- Artists — musician directory

- Venues — browse by location

- About — what JAM is, who's behind it

Phase 2: Players, instruments.

## Homepage?

- Hero — JAM branding and byline

- Tonight — residencies running today (or next upcoming). The highest-value content; always visible first

- This Week — the next seven days, scannable by day

- Featured / Editor's Pick — short editorial write-up of a particular residency, rotated for freshness

- Venues — visual grid or map of locations across Meanjin

## Modular Components

The site is built from reusable blocks:

- Residency card — name, venue, day/time, style tags, short description

- Day group — residency cards grouped under a day heading

- Venue card — name, neighbourhood, vibe, associated residencies

- Artist card — name, instruments, associated projects

- Project card — name, members, associated residencies

- Feature block — longer editorial write-up with imagery

## Filtering

Residencies filterable by: day of the week, style/genre tags, vibe, neighbourhood. Keep it simple — tag-based filtering on a single page is sufficient at launch.

## Editorial Voice

The written descriptions are what make JAM a guide rather than a database. Data gets people to the right page; voice is what makes them show up. Every residency should be described by someone who knows the scene, with enough personality and specificity to convey what a night actually feels like.

## Technical Notes

- Phase 1 is a read-only public site backed by a proper database — no auth required

- Content managed by a small editorial team (not user-submitted)

- Mobile-first consideration: the "tonight" view must work well on a phone on a Friday evening

- Serves as a learning project for the developer, building with a real database from the start

- JAM is a community project supported by JMI, Meanjin/Brisbane.

---

# Joel

## Trello

https://trello.com/b/uCgkIgaa/jam

## Tech stack

- framework: typescript, react, next.js
- ORM and database: prisma, neon, postgres 
- auth: better auth
- deployment: vercel
- emails: nodemailer(?)
- components: shadcn
- multimedia: aws s3
- leaflet: maps

## Commands

```sh
# get started
npx create-next-app@latest .

## install stuff
npx shadcn@latest init  # do this instead of `npm i shadcn`
npx shadcn@latest add button label input sonner  # install shadcn components
```
