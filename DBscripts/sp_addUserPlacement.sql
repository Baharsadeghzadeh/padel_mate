CREATE PROCEDURE sp_addUserPlacement 
(
	@UserId INT,
	@QuestionOneInt INT,
	@QuestionTwoInt INT,
	@QuestionThreeInt INT,
	@QuestionFourInt INT,
	@QuestionFiveInt INT,
	@UserStateLevelInt INT
) AS
	DECLARE @PLACEMENT_REAULT INT
	DECLARE @USER_FINAL_LEVEL INT
	
	SET @PLACEMENT_REAULT = dbo.fn_clculateUserLevelPlacementBase(@QuestionOneInt, @QuestionTwoInt, @QuestionThreeInt, @QuestionFourInt, @QuestionFiveInt)
	SET @USER_FINAL_LEVEL = CASE @UserStateLevelInt WHEN 0 THEN @PLACEMENT_REAULT ELSE @UserStateLevelInt END

	INSERT INTO [dbo].[tbl_userPlacement]
		([Deleted]
		,[UserId]
		,[QuestionOneInt]
		,[QuestionTwoInt]
		,[QuestionThreeInt]
		,[QuestionFourInt]
		,[QuestionFiveInt]
		,[AlgorithmLevelInt]
		,[UserStateLevelInt])
	VALUES
		(0
		,@UserId
		,@QuestionOneInt
		,@QuestionTwoInt
		,@QuestionThreeInt
		,@QuestionFourInt
		,@QuestionFiveInt
		,@PLACEMENT_REAULT
		,@UserStateLevelInt)
	INSERT INTO [dbo].[tbl_userLevel]
		([Deleted]
		,[UserId]
		,[Date]
		,[ReachedLevel]
		,[GainedScore])
	VALUES
	(0
	,@UserId
	,GETDATE()
	,@USER_FINAL_LEVEL
	,0)
		