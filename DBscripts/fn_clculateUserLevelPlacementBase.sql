CREATE FUNCTION fn_clculateUserLevelPlacementBase
(
	@QuestionOneInt INT,
	@QuestionTwoInt INT,
	@QuestionThreeInt INT,
	@QuestionFourInt INT,
	@QuestionFiveInt INT
)
RETURNS INT 
AS
	BEGIN
	DECLARE @RESULT INT
	SET @RESULT = @QuestionOneInt + @QuestionTwoInt + @QuestionThreeInt + @QuestionFourInt + @QuestionFiveInt
	RETURN @RESULT
	END
