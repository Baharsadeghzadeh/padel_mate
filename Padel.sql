CREATE TABLE tbl_user
(
	[Id] INT NOT NULL IDENTITY(1,1),
	[Deleted] BIT NOT NULL,
	[Name] NVARCHAR NULL,
	[Email] NVARCHAR NULL,
	[Phone] NVARCHAR NULL,
	[Password] NVARCHAR NULL,
	[Biography] NVARCHAR NULL,
	[Facebook] NVARCHAR NULL,
	[Instagram] NVARCHAR NULL,
)
GO
CREATE TABLE tbl_userSetting
(
	[Id] INT NOT NULL IDENTITY(1,1),
	[Deleted] BIT NOT NULL,
	[UserId] INT NOT NULL,
	[Picture] NVARCHAR NULL,
	[ShowTelephoneNoBit] BIT NULL,
	[ShowUpcomingGamesBit] BIT NULL,
	[ShowPlayedGamesBit] BIT NULL,
	[CalenderPermissionBit] BIT NULL,
)
GO
CREATE TABLE tbl_userPlacementQuestionsResult
(
	[Id] INT NOT NULL IDENTITY(1,1),
	[Deleted] BIT NOT NULL,
	[UserId] INT NOT NULL,
	[QuestionOne] NVARCHAR NULL,
	[QuestionTwo] NVARCHAR NULL,
	[QuestionThree] NVARCHAR NULL,
	[QuestionFour] NVARCHAR NULL,
	[QuestionFive] NVARCHAR NULL,
	[AlgorithmLevel] NVARCHAR NULL,
	[UserStateLevel] NVARCHAR NULL,
	[UserFirstLevel] NVARCHAR NULL,
)
GO
CREATE TABLE tbl_userLevel
(
	[Id] INT NOT NULL IDENTITY(1,1),
	[Deleted] BIT NOT NULL,
	[UserId] INT NOT NULL,
	[Date] Date NULL,
	[ReachedLevel] NVARCHAR NULL,
	[GainedScore] NVARCHAR NULL,
)
GO
CREATE TABLE tbl_userActivity
(
	[Id] INT NOT NULL IDENTITY(1,1),
	[Deleted] BIT NOT NULL,
	[UserId] INT NOT NULL,
	[Date] Date NULL,
	[StartTime] Time NULL,
	[EndTime] Time NULL,
	[Location] NVARCHAR NULL,
	[Level] NVARCHAR NULL,
	[PrivateBit] BIT NULL,
	[PlayersCountId] INT NULL,
	[CourtBookedBit] BIT NULL,
)
GO
CREATE TABLE tbl_activityPlayer
(
	[Id] INT NOT NULL IDENTITY(1,1),
	[Deleted] BIT NOT NULL,
	[ActivityId] INT NOT NULL,
	[PlayerOneUserId] INT NULL,
	[PlayerTwoUserId] INT NULL,
	[PlayerThreeUserId] INT NULL,
	[PlayerFourUserId] INT NULL,
)
GO

