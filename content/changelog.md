# Mar 4, 2023
New Batting Stats!
- Batting Average (**AVG**)
- On Base Percentage (**OBS**)
- Slugging Percentage (**SLG**)

The stat dump doesn't have a first base stat (1b), which you need for **SLG**. So I'm calculating first base like this
```js
first base = hits - second base - third base - home runs
```
if thats kinda dumb, lmk

I also updated this changelog, the years were incorrect 🤦. Still getting used to 2023 apparently

# Feb 22, 2023
- Added ERA 😱
    - if you see an ERA with Infinity, that means they did really bad
    - if you see an ERA with NaN, no idea
# Feb 21, 2023
- finally added the pitching stats. 
    - took me like 15 minutes idk why I put it off so long
    - its cuz I'm lazy

# Jan 24, 2023
- New font! Rubik
- New Update Prompt! Though you probably won't see it until the next update
- Optimized Bundles! Quicker load times
- Slight style tweaks
# Jan 8, 2023 Part 2: Electric Boogaloo
- Added fielding stats!
    - There are some `Opp_1`, `Opp_2`, `Made_1`, etc, stats I have no idea what they're supposed to mean... If you know, tell me what they mean.
- misc fixes and styling adjustments

# Jan 8, 2023
- Added "search" query to the batting-stats table. So now you can include searches in urls. ex: [/batting-stats?search=Mike+Cruz+overall](/batting-stats?search=Mike+Cruz+overall)
- Added basic [PWA](https://web.dev/progressive-web-apps/) functionality (faster load times and some offline usability)

# Dec 30, 2022
- Switched "Type" column to "Split"
- Added Changelog page

# Dec 29, 2022
- Updated how most of the columns work
    - Mainly the number columns. Sorting on them was wonky, now it should be less wonky