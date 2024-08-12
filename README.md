
# Quest Logger
A tool to help track and visualize the current and historical quests for Table Top Role-playing Games (TTRPGs).

## Ubiquitous Language
- Campaign: A story co-written by a game master and their players about the non-player characters the GM runs an the player characters the players run.  Could be based in any TTRGP series or home brew game.
- Session: A period of continuous time when the GM and players got together to advance the story/game.
- Game master: the user who creates a campaign and owns the right to dole out or restrict editing permissions.
- Player: other users who may view the campaign.  Depending on their access permissions, they may also be able to edit quests and milestones.
- Quest: A major goal one or more players are pursuing.  Can be active or completed.
	- Current Goal: a minor goal one or more players is pursing to achieve a major goal.  Current goals may shift or change without being achieved.  
- Milestone: actions that the player characters took in the service of one or more goals (not always intentionally)

## Use Cases
### All Users need to
- Load a specific campaign they are allowed to access to answer the following questions:
	- What quests are active now, and what's their current goal(s)?
	- What happened in a specific session?
	- What was the total milestone history an current goal for an active or completed quest?

### Game Masters need to
- Create a new campaign because otherwise they can't use the app at all
- Add/remove players because players come and go
- Change the Campaign Name because funnier or better fitting titles may reveal themselves after creation
- Change the ui style, because a shift in the campaign may prompt a change in aesthetic fit
- add/remove sessions, because they are the person who starts and stops the game
- Control editing access for players on the following actions
	- quests
		- creation/deletion
		- modify current goals
	- milestones
		- creation/deletion
		- modify description
		- attach to quest / detach from quest
		- change occurrence time (affects milestone order)
		- change session it occurred in
- can temporarily override player-set view/edit restrictions, because they may have to deal with petty player drama

### Editors
- control who can view/edit a quest they created (defaults to all users have full edit/view rights)
- control who can view/edit a milestone they created (defaults to all users have full edit/view rights)


### Phase 2?
- Answer the questions:
	- What has a specific character done?

## Revealed Game-play Knowledge
- Players and GMs can run multiple character simultaneously
- reasons for permissions
	- Players may have secret goals they only want to share with the GM and not the rest of the party
	- A GM may want exclusive full control over the log to make sure it conforms to a specific narrative style
- Current goals are extremely malleable; they change based on the whims of the players.  They are often unplanned.
- On

## Design Decisions
- Frontend: ~~svelte~~ Changed to React
	- Progress bar type `ellipsis` from https://loading.io/css/
- Database type: SQL or no-SQL?
	- current implementation for prototyping is just a file

